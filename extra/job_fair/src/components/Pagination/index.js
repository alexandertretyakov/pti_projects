import React from 'react';

const Pagination = function() {
    return (
        <div className="pagination">
            <button className="pagination-button pagination-button-1 active" type="button">1</button>
            <button className="pagination-button pagination-button-2" type="button">2</button>
            <button className="pagination-button pagination-button-3" type="button">3</button>
            <button className="pagination-button pagination-button-4" type="button">4</button>
            <button className="pagination-button pagination-button-5" type="button">5</button>
        </div>
    );
};

export default Pagination;