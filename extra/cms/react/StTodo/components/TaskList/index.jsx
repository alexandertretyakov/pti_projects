import React from 'react';

import style from '../../index.css';

const TodoList = ({items, onCompleted, onRemove, onImportant}) => {
    return (
        <div className={style.items} id="tasks">
            {
                items.length === 0
                    ? <p>Дел пока нет</p>
                    : items.map((task) => {
                        return (
                            <div data-id={task.id} className={`${style.item} ${task.completed ? style.completed : ''} ${task.important ? style.important : ''}`}>
                                <span className={style.title} onDoubleClick={onCompleted.bind(null, task.id)}>{task.title}</span>
                                <div>
                                    <button className={style.delete} onClick={onRemove.bind(null, task.id)}>&#10060;</button>
                                    <button className={style.important} onClick={onImportant.bind(null, task.id)}>&#128276;</button>
                                </div>
                            </div>
                        );
                    })
            }
        </div>
    );
};

export default TodoList;
