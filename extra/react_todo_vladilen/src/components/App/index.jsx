import React, { useReducer, useState, useEffect } from 'react';

import { addTask, removeTask, toggleCompleted, toggleImportant } from '../actions';

import Statistics from '../Statistics/index';
import Filters from '../Filters';
import EntryField from '../Input';
import TodoList from '../TaskList';
import Search from '../Search';

import reducer from './reducer';
import Context from '../context';

const setItemsToStorage = (items) => {
    localStorage.setItem('items', JSON.stringify(items));
};

const getItemsFromStorage = () => {
    return JSON.parse(localStorage.getItem('items')) || [];
};

const App = () => {
    const [todosList, dispatch] = useReducer(reducer, getItemsFromStorage());
    const [filter, setFilter] = useState('all');
    const [needle, setNeedle] = useState('');
    const completedCount = todosList.filter((task) => task.completed).length;
    const todoCount = todosList.length - completedCount;

    useEffect(() => {
        setItemsToStorage(todosList);
    }, [todosList]);

    const onCreate = (task) => {
        dispatch(addTask(task));

        setItemsToStorage(todosList);
    };

    const onRemove = (id) => {
        dispatch(removeTask(id));

        setItemsToStorage(todosList);
    };

    const onToggleImportant = (id) => {
        dispatch(toggleImportant(id));

        setItemsToStorage(todosList);
    };

    const onToggleCompleted = (id) => {
        dispatch(toggleCompleted(id));

        setItemsToStorage(todosList);
    };

    const onFilterChange = (filter) => setFilter(filter);

    const onSearchChange = (needle) => setNeedle(needle);

    const getFiltredItems = () => {
        return todosList.filter((task) => {
            return task.title.toLowerCase().includes(needle.toLowerCase());
        }).filter((task) => {
            if (filter === 'incompleted') {
                return task.completed === false;
            }

            if (filter === 'completed') {
                return task.completed === true;
            }

            if (filter === 'all') {
                return true;
            }
        });
    };

    return (
        <Context.Provider value={{
            getFiltredItems: getFiltredItems(),
            onRemove,
            onToggleImportant,
            onToggleCompleted
        }}>
            <div className="app">
                <Statistics todoCount={todoCount} completedCount={completedCount} />
                <div className="filters">
                    <Search onSearchChange={onSearchChange} />
                    <Filters filter={filter} onFilterChange={onFilterChange} />
                </div>
                <EntryField onCreate={onCreate} />
                <TodoList />
            </div>
        </Context.Provider>
    );
};

export default App;