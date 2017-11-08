import {kea} from 'libs/kea';
import PropTypes from 'prop-types';
import {put, race, take} from 'redux-saga/effects'
import {delay} from 'redux-saga'

const logic = kea({
  path: (key) => ['scenes', 'pages', 'index'],
  actions: () => ({
    increment: (amount) => ({amount}),
    decrement: (amount) => ({amount})
  }),

  reducers: ({actions}) => ({
    counter: [0, PropTypes.number, {
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
  }),

  // start: function* () {
  //   const {increment} = this.actions;
  //   yield put(increment(2))
  //   // saga started or component mounted
  //   console.log(this)
  // },

  takeEvery: ({actions, workers}) => ({
    [actions.increment]: workers.start
  }),

  workers: {
    start: function* () {
      const {decrement} = this.actions
      console.log('run workers')
      yield put(decrement(2))
    }
  }
});

export default logic;