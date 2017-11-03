import React from 'react';
import dynamic from 'next/dynamic';
import styleIndex from './index.scss';
import {sleep} from 'utils';

// import a from

class Test1 extends React.Component {
    constructor() {
        super();
        this.lib = {};
        this.el = {};
        this.state = {
            loaded: false,
            height: 10,
        };
    }


    componentWillUnmount() {
        this.mounted = false;
    }

    async componentDidMount() {
        this.mounted = true;
        let jquery = await import('libs/jquery.slim');
        await sleep(3000);
        this.lib.$ = jquery;
        this.mounted && this.setState({
            loaded: true,
        });
        console.log('load about ok');
    }

    // async componentDidUpdate() {
    //     let test = await import('libs/load.data');
    //     this.initStyle(test.default);
    // }
    //
    //
    // initStyle = (str) => {
    //     let {lib, el} = this;
    //     lib.$(el.test1).text(str);
    // };


    AsyncRender = () => {
        let {height} = this.state;
        return (
            <div>
                <div ref={node => this.el.test1 = node} className="test1">about</div>
                <style jsx>{styleIndex}</style>
                {/*language=SCSS*/}
                <style jsx>{`
                  .test1 {
                    font-size: ${height}px;
                  }
                `}</style>
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
        let {height} = this.state;
        // return loaded ? AsyncRender() : LoadingRender();
        return (
            <div>
                {AsyncRender()}
                <style jsx>{`
                  .test1 {
                    font-size: ${height}px;
                  }
                `}</style>
            </div>
        );
    }
}

export default Test1;