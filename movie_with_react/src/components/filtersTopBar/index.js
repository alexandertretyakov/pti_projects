import React from 'react';

class FiltersTopBar extends React.Component {
    state = {
        needle: ''
    };

    onChangeSearch = (e) => {
        const needle = e.target.value;

        this.setState({
            needle: needle
        });

        this.props.onSearchChange(needle);
    }

    onChangeView = (e) => {
        this.props.onChangeItemsPerPage(e.target.value);
    };

    onChangeSorting = (e) => {
        this.props.handleSort(e.target.value);
    };

    render() {
        return (
            <div className="top-bar">
                Поиск:
                <input className="search" value={this.state.needle} onChange={this.onChangeSearch} type="text" />

                    Отображение:
                    <div className="display-quantity">
                        <select onChange={this.onChangeView} defaultValue="default">
                            <option value="default">все фильмы</option>
                            <option value="6">по 6 фильмов</option>
                            <option value="12">по 12 фильмов</option>
                            <option value="18">по 18 фильмов</option>
                        </select>
                    </div>

                    <div className="sorting">
                        Сортировать:
                        <select onChange={this.onChangeSorting} defaultValue="default">
                            <option value="default">по умолчанию</option>
                            <option value="ascending_title">по алфавиту &uarr;</option>
                            <option value="descending_title">по алфавиту &darr;</option>
                            <option value="ascending_rating">по рейтингу &uarr;</option>
                            <option value="descending_rating">по рейтингу &darr;</option>
                            <option value="ascending_year">по году &uarr;</option>
                            <option value="descending_year">по году &darr;</option>
                            <option value="ascending_time">по длительности &uarr;</option>
                            <option value="descending_time">по длительности &darr;</option>
                        </select>
                    </div>

                    Вид отображения:
                    <button className={`button-list ${this.props.viewType === 'list' ? 'active' : ''}`} onClick={this.props.viewMovies.bind(null, 'list')}>Списком</button>
                    <button className={`button-tiles ${this.props.viewType === 'tiles' ? 'active' : ''}`} onClick={this.props.viewMovies.bind(null, 'tiles')}>Плитками</button>
            </div>
        );
    }
}

export default FiltersTopBar;