import React, { useState, useEffect } from 'react';
import { path } from 'ramda';

import { useAppSelector } from 'system/App/context';

import style from './index.css';

const StModule4 = () => {
    const usersEndpoint = useAppSelector(path(['dynamicTags', 'DTAG_ST_MODULE_4_USERS_ENDPOINT'])) || '';
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(usersEndpoint)
            .then((res) => res.json())
            .then((usersData) => setUsers(usersData.slice(0, 8)));
    }, []);

    return (
        <ul className={style.emails}>
            { users.map(user => <li key={user.id}>{user.email}</li>) }
        </ul>
    );
};

export default StModule4;
