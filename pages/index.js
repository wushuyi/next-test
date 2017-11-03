import React from 'react';
import PropTypes from 'prop-types';

// import Test1 from 'components/test1';
import Layout from 'components/layout/default';
import {isBrowser} from 'utils';
import {withRedux} from 'store';
import {kea} from 'kea';

async function getLibs() {
    let libs = {};
    libs.jquery = await import('libs/jquery.slim');
    return libs;
}

@kea({
    actions: () => ({
        increment: (amount) => ({amount}),
        decrement: (amount) => ({amount})
    }),

    reducers: ({actions}) => ({
        counter: [2, PropTypes.number, {
            [actions.increment]: (state, payload) => state + payload.amount,
            [actions.decrement]: (state, payload) => state - payload.amount
        }]
    }),

    selectors: ({selectors}) => ({
        doubleCounter: [
            () => [selectors.counter],
            (counter) => counter * 2,
            PropTypes.number
        ]
    })
})
class index extends React.Component {
    static async getInitialProps() {
        let jquery, props = {};
        if (isBrowser) {
            props.libs = await getLibs();
        }

        props.p1 = await  new Promise((resolve, reject) => {
            let tit = 'one';
            setTimeout(() => {
                console.log(tit);
                resolve(tit);
            }, 500, tit);
        });
        props.p2 = await new Promise((resolve, reject) => {
            let tit = 'two';
            setTimeout(() => {
                console.log(tit);
                resolve(tit);
            }, 500, tit);
        });

        return props;
    }

    static childContextTypes = {
        url: PropTypes.any
    };

    getChildContext() {
        let {url} = this.props;
        return {
            url
        };
    }

    constructor() {
        super();
        this.libs = {};
    }

    async componentDidMount() {
        this.mounted = true;
        let libs = {};
        let jquery;
        if (this.props.libs) {
            libs = this.props.libs;
        } else if (this.mounted) {
            libs = await getLibs();
        }
        console.log('componentDidMount', libs);
    }


    render() {
        let {counter, doubleCounter} = this.props;
        return (
            <Layout>
                <div>counter: {counter}</div>
                <div>doubleCounter: {doubleCounter}</div>
            </Layout>
        );
    }
}

export default withRedux(index);
