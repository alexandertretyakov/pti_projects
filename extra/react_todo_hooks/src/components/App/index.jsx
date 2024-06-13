import React from 'react';

import Statistics from '../Statistics/index';
import Filters from '../Filters';
import EntryField from '../Input';
import TodoList from '../TaskList';
import Search from '../Search';

const App = () => {
    const [items, setItems] = React.useState([{id: 1, completed: false, important: false, title: 'Дело №1'}]);
    const [filter, setFilter] = React.useState('all');
    const [needle, setNeedle] = React.useState('');
    const completedCount = items.filter((task) => task.completed).length;
    const todoCount = items.length - completedCount;

    React.useEffect(() => {
        const items = getItemsFromStorage();

        setItems(items);
        console.log('component App => useEffect');
    }, []);

    const setItemsToStorage = (items) => {
        localStorage.setItem('items', JSON.stringify(items));
    };

    const getItemsFromStorage = () => {
        return JSON.parse(localStorage.getItem('items')) || [];
    };

    const onCreate = (task) => {
        setItems((items) => {
            const itemsUpdate = [
                ...items,
                task
            ];

            setItemsToStorage(itemsUpdate);

            return itemsUpdate;
        });
    };

    const onRemove = (id) => {
        setItems((items) => {
            const itemsUpdate = items.filter((task) => task.id !== id);

            setItemsToStorage(itemsUpdate);

            return itemsUpdate;
        });
    };

    const onImportant = (id) => {
        setItems((items) => {
            const itemsUpdate = items.map((task) => task.id === id ? {...task, important: !task.important} : task);

            setItemsToStorage(itemsUpdate);

            return itemsUpdate;
        });
    };

    const onCompleted = (id) => {
        setItems((items) => {
            const itemsUpdate = items.map((task) => task.id === id ? {...task, completed: !task.completed} : task);

            setItemsToStorage(itemsUpdate);

            return itemsUpdate;
        });
    };

    const onFilterChange = (filter) => setFilter(filter);

    const onSearchChange = (needle) => setNeedle(needle);

    const getFiltredItems = () => {
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

    return (
        <div className="app">
            <Statistics todoCount={todoCount} completedCount={completedCount} />
            <div className="filters">
                <Search onSearchChange={onSearchChange} />
                <Filters filter={filter} onFilterChange={onFilterChange} />
            </div>
            <EntryField onCreate={onCreate} />
            <TodoList items={getFiltredItems()} onRemove={onRemove} onImportant={onImportant} onCompleted={onCompleted} />
        </div>
    );
};

export default App;