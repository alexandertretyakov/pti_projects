import React from 'react';

const Location = function() {
    return (
        <div className="location">
            <label htmlFor="country">&bull; Worldwide Locations</label>
            <select className="country" id="country">
                <option>Nederland</option>
                <option>England</option>
                <option>Germany</option>
                <option>Italy</option>
                <option>Ukraine</option>
            </select>
        </div>
    );
};

export default Location;