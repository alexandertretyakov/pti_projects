import React from 'react';

const EntryField = (props) => {
    const [title, setTitle] = React.useState('');

    console.log('Input');

    const getUniqId = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    };

    const onChange = (e) => {
        if (e.key === 'Enter') {
            props.onCreate({
                id: getUniqId(),
                completed: false,
                important: false,
                title: title
            });
            setTitle('');
        } else {
            setTitle(e.target.value);
        }
    };

    return (
        <div className="source">
            <input className="title" value={title} onChange={onChange} onKeyPress={onChange} type="text" placeholder="Что нужно сделать?" />
        </div>
    );
};

export default EntryField;