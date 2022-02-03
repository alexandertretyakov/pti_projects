import React from 'react';

const Statistics = ({todoCount, completedCount}) => {
    return (
        <div className="heading">
            <h1>Список дел</h1>
            <h4 className="stats">
                Осталось <span className="item-incompleted">{todoCount}</span>,
                готово <span className="item-completed">{completedCount}</span>
            </h4>
        </div>
    )
}

export default Statistics;
