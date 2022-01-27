import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.whore ? this.props.whore : this.getDefaultState();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.whore !== prevProps.whore) {
            this.setState(this.props.whore ? this.props.whore : this.getDefaultState());
        }
    }

    getDefaultState = () => {
        return {
            id: '',
            name: '',
            lastName: '',
            alias: '',
            age: '',
            price: ''
        };
    };

    onChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        this.setState({
            [field]: value
        });
    };

    getUniqId = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    };

    onSave = () => {
        const whore = {
            ...this.state,
            id: this.getUniqId()
        };

        this.props.onSave(whore);
    };

    onUpdate = () => {
        const whore = this.state;
        this.props.onUpdate(whore);
    };

    render() {
        const {id, name, lastName, alias, age, price} = this.state;
        const {onSave, onUpdate} = this;

        return (
            <form>
                <input name="name" onChange={this.onChange} value={name} type="text" placeholder="Имя" />
                <input name="lastName" onChange={this.onChange} value={lastName} type="text" placeholder="Фамилия" />
                <input name="alias" onChange={this.onChange} value={alias} type="text" placeholder="Псевдоним" />
                <input name="age" onChange={this.onChange} value={age} type="text" placeholder="Возраст" />
                <input name="price" onChange={this.onChange} value={price} type="text" placeholder="Цена" />

                {
                    this.props.whore ?
                        <>
                            <button type="button" onClick={onUpdate}>Обновить</button>
                            <button type="button" onClick={this.props.onRemove.bind(null, id)}>Удалить</button>
                        </> :
                        <button type="button" onClick={onSave}>Сохранить</button>
                }
            </form>
        );
    }
}

export default Form;