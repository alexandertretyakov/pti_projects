import React from 'react';

class Search extends React.Component {
    state = {
        needle: ''
    };

    onChange = (e) => {
        const needle = e.target.value;

        this.setState({
            needle
        });

        this.props.onSearchChange(needle);
    }

    render() {
        return <input type="text" value={this.state.needle} onChange={this.onChange} placeholder="Что будем искать?" id="needle" />
    }
}

export default Search;