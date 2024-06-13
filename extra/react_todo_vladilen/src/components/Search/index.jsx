import React from 'react';

const Search = (props) => {
    const [needle, setNeedle] = React.useState('');

    console.log('component Search');

    const onChange = (e) => {
        const needle = e.target.value;

        setNeedle(needle);

        props.onSearchChange(needle);
    };

    return <input type="text" value={needle} onChange={onChange} placeholder="Что будем искать?" id="needle" />;
};

export default Search;