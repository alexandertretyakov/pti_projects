import React from 'react';

import style from '../../index.css';

class EntryField extends React.Component {
    state = {
        title: ''
    };

    getUniqId = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    };

    onChange = (e) => {
        if (e.key === 'Enter') {
            this.props.onCreate({
                id: this.getUniqId(),
                completed: false,
                important: false,
                title: this.state.title
            });

            this.setState({
                title: ''
            });
        } else {
            this.setState({
                title: e.target.value
            });
        }
    };

    render() {
        return (
            <div className={style.source}>
                <input className={style.title} value={this.state.title} onChange={this.onChange} onKeyPress={this.onChange} type="text" placeholder="Что нужно сделать?" />
            </div>
        );
    }
}

export default EntryField;
