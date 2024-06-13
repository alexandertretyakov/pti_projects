import React from 'react';

const Whore = (props) => {
    const {alias, age, price, onChoose, id} = props;

    return (
        <div className="whore" onClick={() => {onChoose(id)}}>
            {`${alias} ${age}, $${price}`}
        </div>
    );
};

export default Whore;
