import React from 'react';

import Statistics from '../statistics';
import Filters from '../filters';
import EntryField from '../input';
import TodoList from '../taskList';
import Search from "../search";

class App extends React.Component {
    state = {
        items: [
            {
                id: 1,
                completed: false,
                important: false,
                title: 'Дело №1'
            }
        ],
        filter: 'all',
        needle: ''
    };

    componentDidMount() {
        const items = this.getItemsFromStorage();

        this.setState({
            items: items
        });
    };

    setItemsToStorage = (items) => {
        localStorage.setItem('items', JSON.stringify(items));
    };

    getItemsFromStorage = () => {
        return JSON.parse(localStorage.getItem('items')) || [];
    };

    onCreate = (task) => {
        this.setState((state) => {
            const items = [
                ...state.items,
                task
            ];

            this.setItemsToStorage(items);

            return {
                items: items
            };
        });
    };

    onRemove = (id) => {
        this.setState((state) => {
            const items = state.items.filter((task) => task.id !== id);

            this.setItemsToStorage(items);

            return {
                items: items
            };
        });
    };

    onImportant = (id) => {
        this.setState((state) => {
            const items = state.items.map((task) => task.id === id ? {...task, important: !task.important} : task);

            this.setItemsToStorage(items);

            return {
                items: items
            };
        });
    };

    onCompleted = (id) => {
        this.setState((state) => {
            const items = state.items.map((task) => task.id === id ? {...task, completed: !task.completed} : task);

            this.setItemsToStorage(items);

            return {
                items: items
            };
        });
    };

    onFilterChange = (filter) => {
        this.setState({
            filter
        });
    };

    onSearchChange = (needle) => {
        this.setState({
            needle
        });
    };

    getFiltredItems = () => {
        const {items, needle, filter} = this.state;

        return items.filter((task) => {
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

    render() {
        let completedCount = this.state.items.filter((task) => task.completed).length;
        let todoCount = this.state.items.length - completedCount;

        return (
            <div className="app">
                <Statistics todoCount={todoCount} completedCount={completedCount} />
                <div className="filters">
                    <Search onSearchChange={this.onSearchChange} />
                    <Filters filter={this.state.filter} onFilterChange={this.onFilterChange} />
                </div>
                <EntryField onCreate={this.onCreate} />
                <TodoList items={this.getFiltredItems()} onRemove={this.onRemove} onImportant={this.onImportant} onCompleted={this.onCompleted} />
            </div>
        );
    }
}

export default App;