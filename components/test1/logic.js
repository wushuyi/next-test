import {kea} from 'kea';
import PropTypes from 'prop-types';


export const logic = kea({
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
    })
});

