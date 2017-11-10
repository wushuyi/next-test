import React from 'react';
import PropTypes from 'prop-types';
// import {connect} from 'kea';
import logic from './logic';
import dynamic from 'next/dynamic';
import styleIndex from './index.scss';


// import a from
// @connect({
//     actions: [
//         logic, [
//             'increment',
//             'decrement'
//         ]
//     ],
//     props: [
//         logic, [
//             'counter',
//             'doubleCounter'
//         ]
//     ]
// })
class Test1 extends React.Component {
    static contextTypes = {
        url: PropTypes.any
    };

    constructor() {
        super();
        this.lib = {};
        this.el = {};
        this.state = {
            loaded: false,
        };
    }

    componentWillUnmount() {
        this.mounted = false;
    }


    async componentDidMount() {
        this.mounted = true;
        let jquery = await import('libs/jquery.slim');
        //
        // let p1 = await  new Promise((resolve, reject) => {
        //     let tit = 'one';
        //     this.mounted && setTimeout(() => {
        //         console.log(tit);
        //         resolve(tit);
        //     }, 1000, tit);
        // });
        // let p2 = await new Promise((resolve, reject) => {
        //     let tit = 'two';
        //     this.mounted && setTimeout(() => {
        //         console.log(tit);
        //         resolve(tit);
        //     }, 2000, tit);
        // });
        // let p3 = await new Promise((resolve, reject) => {
        //     let tit = 'three';
        //     this.mounted && setTimeout(() => {
        //         console.log(tit);
        //         resolve(tit);
        //     }, 3000, tit);
        // });
        // let p4 = await new Promise((resolve, reject) => {
        //     let tit = 'four';
        //     this.mounted && setTimeout(() => {
        //         console.log(tit);
        //         resolve(tit);
        //     }, 4000, tit);
        // });
        //
        // // let all = await Promise.all([p1, p2, p3, p4]).then(values => {
        // //     console.log(values);
        // // }, reason => {
        // //     console.log(reason);
        // // });
        //
        this.lib.$ = jquery;

        this.mounted && this.setState({
            loaded: true,
        });
        console.log('load home ok');
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
                <div ref={node => this.el.test1 = node} className="test1">test2</div>
                {/*<style jsx>{styleIndex}</style>*/}
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
        // return AsyncRender();
        return loaded ? AsyncRender() : LoadingRender();
    }
}

export default Test1;