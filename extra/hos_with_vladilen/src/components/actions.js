import React from 'react';

export const ADD_WHORE = 'SAVE_WHORE';
export const UPDATE_WHORE = 'UPDATE_WHORE';
export const REMOVE_WHORE = 'REMOVE_WHORE';

export const addWhore = whore => ({
    type: ADD_WHORE,
    payload: whore
});

export const updateWhore = updatedWhore => ({
    type: UPDATE_WHORE,
    payload: updatedWhore
});

export const removeWhore = id => ({
    type: REMOVE_WHORE,
    payload: id
});
