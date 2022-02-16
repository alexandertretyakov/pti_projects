import React from 'react';

const Pagination = ({pagesCount, page, ClickOfButtonPagination}) => {
    const buttons = Array.from({ length: pagesCount }, (v, i) => i+1);

    return (
        <div className="pagination">
            {
                buttons.map((number) => {
                    const className = number === page ? 'active' : null;
                    return (
                        <button className={className} onClick={ClickOfButtonPagination.bind(null, number)}>{number}</button>
                    );
                })
            }
        </div>
    )
};

export default Pagination;