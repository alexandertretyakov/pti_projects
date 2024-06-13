import React, { useState, useEffect, useContext, useCallback } from 'react';

import Context from '../../context'

const Form = (props) => {
    const getDefaultState = useCallback(() => {
        return {
            id: '',
            name: '',
            lastName: '',
            alias: '',
            age: '',
            price: ''
        };
    }, []);

    const [girl, setGirl] = useState(props.whore ? props.whore : getDefaultState());
    const {id, name, lastName, alias, age, price} = girl;
    const {onUpdate} = useContext(Context);

    useEffect(() => {
        setGirl(props.whore ? props.whore : getDefaultState());
    }, [props.whore]);

    const onChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        setGirl({
            ...girl,
            [field]: value
        });
    };

    const getUniqId = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    };

    const onSave = () => {
        props.onSave({
            ...girl,
            id: getUniqId()
        });
    };

    // const onUpdate = () => {   //TODO: Альтернатива Context
    //     props.onUpdate(girl);
    // };

    return (
        <form>
            <input name="name" onChange={onChange} value={name} type="text" placeholder="Имя" />
            <input name="lastName" onChange={onChange} value={lastName} type="text" placeholder="Фамилия" />
            <input name="alias" onChange={onChange} value={alias} type="text" placeholder="Псевдоним" />
            <input name="age" onChange={onChange} value={age} type="text" placeholder="Возраст" />
            <input name="price" onChange={onChange} value={price} type="text" placeholder="Цена" />

            {
                props.whore
                    ? <>
                        <button type="button" onClick={() => onUpdate(girl)}>Обновить</button>
                        <button type="button" onClick={props.onRemove.bind(null, id)}>Удалить</button>
                    </>
                    : <button type="button" onClick={onSave}>Сохранить</button>
            }
        </form>
    );
};

export default Form;
