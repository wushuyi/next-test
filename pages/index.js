import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout/default';
import {withRedux} from 'store';
import logic from 'logic/pageIndex';
import {connect} from 'libs/kea'
import {put} from 'redux-saga/effects'

async function getLibs() {
  let libs = {};
  libs.jquery = await import('libs/jquery.slim');
  return libs;
}

@connect({
  actions: [
    logic, [
      'increment',
      'decrement'
    ]
  ],
  props: [
    logic, [
      'counter',
      'doubleCounter'
    ]
  ]
})
class Index extends React.Component {
  static childContextTypes = {
    url: PropTypes.any
  };

  constructor() {
    super();
    this.libs = {};
  }

  static async getInitialProps({isServer, store, req, actions, selectors}) {
    // await kea.actions.increment(8);
    // let doubleCounter = await kea.selectors.doubleCounter();
    // console.log('doubleCounter', doubleCounter);

    let jquery, props = {};
    console.log(logic.actions.increment(2))
    await put(logic.actions.increment(2));
    // if (isBrowser) {
    //   props.libs = await getLibs();
    // }
    // actions.increment(1);
    // actions.increment(2);
    // props.p1 = await  new Promise((resolve, reject) => {
    //     let tit = 'one';
    //     setTimeout(() => {
    //         console.log(tit);
    //
    //         resolve(tit);
    //     }, 500, tit);
    // });
    // props.p2 = await new Promise((resolve, reject) => {
    //     let tit = 'two';
    //     setTimeout(() => {
    //         console.log(tit);
    //
    //         resolve(tit);
    //     }, 500, tit);
    // });

    return props;
  }

  getChildContext() {
    let {url} = this.props;
    return {
      url
    };
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  // async componentDidMount() {
  //   this.mounted = true;
  //   let libs = {};
  //   let jquery;
  //   if (this.props.libs) {
  //     libs = this.props.libs;
  //   } else if (this.mounted) {
  //     libs = await getLibs();
  //   }
  //   console.log('componentDidMount', libs);
  // }


  render() {
    let {counter, doubleCounter} = this.props;
    let {increment, decrement} = this.actions;
    return (
      <Layout>
        <div>counter: {counter}</div>
        <div>doubleCounter: {doubleCounter}</div>
        <div>
          <button onClick={() => increment(1)}>Increment</button>
          <button onClick={() => decrement(1)}>Decrement</button>
        </div>
      </Layout>
    );
  }
}

export default withRedux(Index);
