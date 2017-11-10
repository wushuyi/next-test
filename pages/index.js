import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout/default';
import {withRedux} from 'store';
import logic from 'logic/pageIndex';
import {connect} from 'libs/kea';
import {put} from 'redux-saga/effects';

async function getLibs() {
  let libs = {};
  libs.jquery = await import('libs/jquery.slim');
  return libs;
}

@connect({
  actions: [
    logic, [
      'increment',
      'decrement',
      'title'
    ]
  ],
  props: [
    logic, [
      'counter',
      'doubleCounter',
      'title',
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
    let jquery, props = {};
    store.dispatch(logic.actions.increment(1));
    store.dispatch(logic.actions.title('hello'));
    return props;
  }

  getChildContext() {
    let {url} = this.props;
    return {
      url
    };
  }


  // async componentDidMount() {
  //   console.log('componentDidMount');
  //   await put.resolve(logic.actions.increment(2));
  // }

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
    let {counter, doubleCounter, title} = this.props;
    let {increment, decrement} = this.actions;
    return (
      <Layout>
        <h1>title: {title}</h1>
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
