import {activatePlugin, keaReducer} from 'libs/kea';
// import sagaPlugin from 'kea-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {default as baseWithRedux} from "libs/next-redux-wrapper";
import withReduxSaga from "libs/next-redux-saga";

function* rootSaga() {
}

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    kea: keaReducer('kea'),
    scenes: keaReducer('scenes'),
    // ... other reducers you might have
});

export function configureStore(initialState) {
    const store = createStore(
        reducers,
        initialState,
        composeWithDevTools(applyMiddleware(sagaMiddleware))
    );

    // activatePlugin(sagaPlugin);
    store.sagaTask = sagaMiddleware.run(rootSaga)
    return store;
}


export function withRedux(BaseComponent) {
    return baseWithRedux(configureStore)(BaseComponent);
}