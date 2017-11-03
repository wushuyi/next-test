import React from 'react';
import dynamic from 'next/dynamic';
import styleIndex from './index.scss';

// import a from

class Test1 extends React.Component {
    constructor() {
        super();
        this.lib = {};
        this.el = {};
        this.state = {
            loaded: false,
        };
    }

    componentWillMount() {

    }


    async componentDidMount() {

        // let jquery = await import('libs/jquery.slim');
        //
        // this.lib.$ = jquery;
        this.setState({
            loaded: true,
        });
        // console.log('load contact ok');
    }

    async componentDidUpdate() {
        // let test = await import('libs/test');
        this.initStyle();
    }


    initStyle = () => {
        let {lib, el} = this;
        // lib.$(el.test1).css({
        //     backgroundColor: 'red'
        // });
    };


    AsyncRender = () => {

        return (
            <div>
                <div ref={node => this.el.test1 = node} className="test1">contact</div>
                <style jsx>{styleIndex}</style>
            </div>

        );
    };

    LoadingRender = () => {
        return (
            <div>loading...</div>
        );
    };


    render() {
        const {AsyncRender, LoadingRender} = this;
        const {loaded} = this.state;
        return loaded ? AsyncRender() : LoadingRender();
    }
}

export default Test1;