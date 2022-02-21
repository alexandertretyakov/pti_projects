import React from 'react';

import Whore from '../whore';
import Form from '../form';

class App extends React.Component {
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
                name: 'Сильвия',
                lastName: 'Григорович',
                alias: 'Дашики',
                age: '28',
                price: '50'
            },
            {
                id: '3',
                name: 'Сильвия',
                lastName: 'Григорович',
                alias: 'Пусик',
                age: '28',
                price: '50'
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
            <div className="wrapper">
                <div className="column column-left">
                    <button className="button-add" onClick={this.showAddForm}>Добавить</button>
                    <div className="whore-list">
                        {
                            this.state.whores.length === 0 ?
                                <p>Девочек пока нет</p> :
                                this.state.whores.map((whore, index) => <Whore {...whore} onChoose={this.onChoose} />)
                        }
                    </div>
                </div>

                <div className="column column-right">
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