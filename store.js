import {activatePlugin, keaReducer} from 'kea';
import sagaPlugin from 'kea-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import nextReduxSaga from 'next-redux-saga';
import {default as baseWithRedux} from "next-redux-wrapper";

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
    activatePlugin(sagaPlugin);
    return store;
}


export function withRedux(BaseComponent) {
    return baseWithRedux(configureStore)(BaseComponent);
}