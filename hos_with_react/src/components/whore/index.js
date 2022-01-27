import React from 'react';

export default (props) => {
    return (
        <div className="whore" onClick={() => {props.onChoose(props.id)}}>
            {`${props.alias} ${props.age}, $${props.price}`}
        </div>
    );
};