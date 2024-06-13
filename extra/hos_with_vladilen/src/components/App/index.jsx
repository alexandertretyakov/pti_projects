import React, { useState, useReducer, useEffect } from 'react';

import { addWhore, updateWhore, removeWhore } from '../actions';

import Whore from './Whore';
import Form from './Form';

import reducer from './reducer';
import Context from '../context';

// const whores = [
//     {
//         id: '1',
//         name: 'Сильвия',
//         lastName: 'Григорович',
//         alias: 'Си-си',
//         age: '28',
//         price: '50'
//     },
//     {
//         id: '2',
//         name: 'Даша',
//         lastName: 'Морозова',
//         alias: 'Дашики',
//         age: '32',
//         price: '100'
//     },
//     {
//         id: '3',
//         name: 'Памела',
//         lastName: 'Андерсон',
//         alias: 'Пусик',
//         age: '45',
//         price: '150'
//     }
// ];

const setWhoresToStorage = (whores) => {
    localStorage.setItem('whores', JSON.stringify(whores));
};

const getWhoresFromStorage = () => {
    return JSON.parse(localStorage.getItem('whores')) || [];
};

const App = () => {
    const [whores, dispatch] = useReducer(reducer, getWhoresFromStorage());
    const [showForm, setShowForm] = useState(false);
    const [selectedWhoreId, setSelectedWhoreId] = useState(null);
    const whore = whores.find((whore) => whore.id === selectedWhoreId);

    useEffect(() => {
        setWhoresToStorage(whores);
    }, [whores]);

    const showAddForm = () => {
        setShowForm(true);
        setSelectedWhoreId(null);
    };

    const onChoose = (id) => {
        setShowForm(false);
        setSelectedWhoreId(id);
    };

    const onSave = (whore) => {
        dispatch(addWhore(whore));

        setShowForm(false);
        setSelectedWhoreId(null);
    };

    const onRemove = (id) => {
        dispatch(removeWhore(id));

        setShowForm(false);
        setSelectedWhoreId(null);
    };

    const onUpdate = (updatedWhore) => {
        dispatch(updateWhore(updatedWhore));

        setShowForm(false);
        setSelectedWhoreId(null);
    };

    console.log(Context);

    return (
        <Context.Provider value={{onUpdate}}>
            <div className="wrapper">
                <div className="column">
                    <button className="button-add" onClick={showAddForm}>Добавить</button>
                    <div className="whoreList">
                        {
                            whores.length === 0
                                ? <p>Девочек пока нет</p>
                                : whores.map((whore) => <Whore {...whore} onChoose={onChoose} />)
                        }
                    </div>
                </div>

                <div className="column">
                    {
                        showForm
                            ? <Form onSave={onSave} />
                            : selectedWhoreId
                                ? <Form onRemove={onRemove} onUpdate={onUpdate} whore={whore} />
                                : null
                    }
                </div>
            </div>
        </Context.Provider>
    );
};

export default App;
