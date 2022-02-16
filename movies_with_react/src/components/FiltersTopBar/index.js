import React from 'react';

const FiltersTopBar = ({viewType, onViewTypeChange, onSearchChange, onItemsPerPageChange, onSort}) => {
    return (
        <div className="top-bar">
            Поиск:
            <input className="search" defaultValue="" onChange={(e) => {onSearchChange(e.target.value)}} type="text" />

            Отображение:
            <div className="display-quantity">
                <select onChange={(e) => {onItemsPerPageChange(e.target.value)}} defaultValue="default">
                    <option value="default">все фильмы</option>
                    <option value="6">по 6 фильмов</option>
                    <option value="12">по 12 фильмов</option>
                    <option value="18">по 18 фильмов</option>
                </select>
            </div>

            <div className="sorting">
                Сортировать:
                <select onChange={(e) => {onSort(e.target.value)}} defaultValue="default">
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
            <button className={`button-list ${viewType === 'list' ? 'active' : ''}`} onClick={onViewTypeChange.bind(null, 'list')}>Списком</button>
            <button className={`button-tiles ${viewType === 'tiles' ? 'active' : ''}`} onClick={onViewTypeChange.bind(null, 'tiles')}>Плитками</button>
        </div>
    );
};

export default FiltersTopBar;