import React from 'react';

const TodoList = ({items, onCompleted, onRemove, onImportant}) => {
    return (
        <div className="items" id="tasks">
            {
                items.length === 0 ?
                <p>Дел пока нет</p> :
                items.map((task) => {
                    return (
                        <div data-id={task.id} className={`item ${task.completed ? 'completed' : ''} ${task.important ? 'important' : ''}`}>
                            <span className="title" onDoubleClick={onCompleted.bind(null, task.id)}>{task.title}</span>
                            <div>
                                <button className="delete" onClick={onRemove.bind(null, task.id)}>&#10060;</button>
                                <button className="important" onClick={onImportant.bind(null, task.id)}>&#128276;</button>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default TodoList;