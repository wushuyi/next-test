import {call, take, cancel, spawn, fork, all} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';

let emitter;
let cancelCounter = 1;
let toCancel = {};

function createComponentChannel(socket) {
  return eventChannel(emit => {
    emitter = emit;
    return () => {
    };
  });
}

function* manSaga() {
  const channel = yield call(createComponentChannel);
  while (true) {
    const {startSaga, cancelSaga, saga, counter} = yield take(channel);
    if (startSaga) {
      toCancel[counter] = yield fork(saga);
    }
    if (cancelSaga) {
      yield cancel(toCancel[counter]);
    }
  }
}

export function* keaSaga() {
  yield all([
    spawn(manSaga)
  ]);
}

export function startSaga(saga) {
  if (emitter) {
    cancelCounter += 1;
    emitter({startSaga: true, saga, counter: cancelCounter});
    return cancelCounter;
  }

  return null;
}

export function cancelSaga(counter) {
  if (emitter) {
    emitter({cancelSaga: true, counter});
  }
}
