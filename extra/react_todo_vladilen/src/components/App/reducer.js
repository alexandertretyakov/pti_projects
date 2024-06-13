import React from 'react';

import {
    ADD_TASK,
    REMOVE_TASK,
    TOGGLE_IMPORTANT,
    TOGGLE_COMPLETED
} from '../actions';

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state,
                action.payload
            ];
        case REMOVE_TASK:
            return state.filter((task) => task.id !== action.payload);
        case TOGGLE_IMPORTANT:
            return state.map((task) => task.id === action.payload
                ? {...task, important: !task.important}
                : task);
        case TOGGLE_COMPLETED:
            return state.map((task) => task.id === action.payload
                ? {...task, completed: !task.completed}
                : task);
        default:
            return state;
    }
};

export default reducer;
