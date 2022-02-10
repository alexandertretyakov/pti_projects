import React from 'react';

const Pagination = ({pagesCount, page, onClick}) => {
    const buttons = Array.from({ length: pagesCount }, (v, i) => i+1);

    return (
        <div className="pagination">
            {
                buttons.map((number) => {
                    const className = number === page ? 'active' : null;
                    return (
                        <button className={className} onClick={onClick.bind(null, number)}>{number}</button>
                    );
                })
            }
        </div>
    )
};

export default Pagination;