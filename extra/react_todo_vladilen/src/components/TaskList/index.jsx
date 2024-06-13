import React, { useContext } from 'react';

import Context from '../context';

const TodoList = () => {
    const {getFiltredItems, onRemove, onToggleImportant, onToggleCompleted} = useContext(Context);

    return (
        <div className="items" id="tasks">
            {
                getFiltredItems.length === 0
                    ? <p>Дел пока нет</p>
                    : getFiltredItems.map((task) => {
                        return (
                            <div data-id={task.id} className={`item ${task.completed 
                                ? 'completed' 
                                : ''} ${task.important ? 'important' : ''}`}>
                                <span className="title" onDoubleClick={onToggleCompleted.bind(null, task.id)}>{task.title}</span>
                                <div>
                                    <button className="delete" onClick={onRemove.bind(null, task.id)}>&#10060;</button>
                                    <button className="important" onClick={onToggleImportant.bind(null, task.id)}>&#128276;</button>
                                </div>
                            </div>
                        );
                    })
            }
        </div>
    );
};

export default TodoList;