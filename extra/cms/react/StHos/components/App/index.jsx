import React, { Component } from 'react';

import Whore from './Whore';
import Form from './Form';

import style from '../../index.css';

class App extends Component {
    state = {
        whores: [
            {
                id: '1',
                name: 'Сильвия',
                lastName: 'Григорович',
                alias: 'Си-си',
                age: '28',
                price: '50'
            },
            {
                id: '2',
                name: 'Даша',
                lastName: 'Морозова',
                alias: 'Дашики',
                age: '32',
                price: '100'
            },
            {
                id: '3',
                name: 'Памела',
                lastName: 'Андерсон',
                alias: 'Пусик',
                age: '45',
                price: '150'
            }
        ],
        showAddForm: false,
        selectedWhoreId: null
    };

    componentDidMount() {
        const whores = this.getWhoresFromStorage();

        this.setState({ whores });
    };

    setWhoresToStorage = (whores) => {
        localStorage.setItem('whores', JSON.stringify(whores));
    };

    getWhoresFromStorage = () => {
        return JSON.parse(localStorage.getItem('whores')) || [];
    };

    showAddForm = () => {
        this.setState({
            showAddForm: true,
            selectedWhoreId: null
        });
    };

    onChoose = (id) => {
        this.setState({
            showAddForm: false,
            selectedWhoreId: id
        });
    };

    onSave = (whore) => {
        this.setState((state) => {
            const whores = [
                ...state.whores,
                whore
            ];

            this.setWhoresToStorage(whores);

            return {
                whores: whores,
                showAddForm: false,
                selectedWhoreId: null
            };
        });
    };

    onRemove = (id) => {
        this.setState((state) => {
            const whores = state.whores.filter((whore, idx) => whore.id !== id);

            this.setWhoresToStorage(whores);

            return {
                whores: whores,
                showAddForm: false,
                selectedWhoreId: null
            };
        });
    };

    onUpdate = (updatedWhore) => {
        this.setState((state) => {
            const whores = state.whores.map((whore, idx) => whore.id === updatedWhore.id ? updatedWhore : whore);

            this.setWhoresToStorage(whores);

            return {
                whores: whores,
                showAddForm: false,
                selectedWhoreId: null
            };
        });
    };

    render() {
        const whore = this.state.whores.find((whore) => whore.id === this.state.selectedWhoreId);

        return (
            <div className={style.wrapper}>
                <div className={style.column}>
                    <button className="button-add" onClick={this.showAddForm}>Добавить</button>
                    <div className={style.whoreList}>
                        {
                            this.state.whores.length === 0 ?
                                <p>Девочек пока нет</p> :
                                this.state.whores.map((whore) => <Whore {...whore} onChoose={this.onChoose} />)
                        }
                    </div>
                </div>

                <div className={style.column}>
                    {
                        this.state.showAddForm ?
                            <Form onSave={this.onSave} /> :
                            this.state.selectedWhoreId ?
                                <Form onRemove={this.onRemove} onUpdate={this.onUpdate} whore={whore} /> :
                                null
                    }
                </div>
            </div>
        );
    }
}

export default App;
