import React from 'react';

export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const TOGGLE_IMPORTANT = 'TOGGLE_IMPORTANT';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

export const addTask = task => ({
    type: ADD_TASK,
    payload: task
});

export const removeTask = id => ({
    type: REMOVE_TASK,
    payload: id
});

export const toggleImportant = id => ({
    type: TOGGLE_IMPORTANT,
    payload: id
});

export const toggleCompleted = id => ({
    type: TOGGLE_COMPLETED,
    payload: id
});