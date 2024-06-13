import React from 'react';

import {
    ADD_WHORE,
    UPDATE_WHORE,
    REMOVE_WHORE
} from '../actions';

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_WHORE:
            return [
                ...state,
                action.payload
            ];
        case UPDATE_WHORE:
            return state.map((whore) => whore.id === action.payload.id ? action.payload : whore);
        case REMOVE_WHORE:
            return state.filter((task) => task.id !== action.payload);
        default:
            return state;
    }
};

export default reducer;