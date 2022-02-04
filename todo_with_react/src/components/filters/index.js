import React from 'react';

const Filters = ({filter, onFilterChange}) => {
    const buttons = [
        {name: 'all', title:'Все'},
        {name: 'incompleted', title:'Незавершенные'},
        {name: 'completed', title:'Завершенные'}
    ];

    return (
        <div className="actions">
            {
                buttons.map((button) => {
                    const className = filter === button.name ? 'active' : null;

                    return (
                        <button className={className} onClick={onFilterChange.bind(null, button.name)}>{button.title}</button>
                    );
                })
            }
        </div>
    );
};

export default Filters;