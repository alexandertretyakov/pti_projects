import React from 'react';

const Filters = ({listOfCountries, listOfGenres, onChooseCountry, onChooseGenre}) => {
    return (
        <div className="filters">
            <h4>Фильтры</h4>

            <div>Страна:
                <div className="filter-countries">
                    {
                        listOfCountries.map((item) => {
                            return (
                                <>
                                    <input
                                        type="checkbox"
                                        id={item.country}
                                        value={item.country}
                                        onChange={onChooseCountry.bind(null, item.country)}
                                    />
                                    <label htmlFor={item.country}>{item.country} ({item.count})</label>
                                </>
                            );
                        })
                    }
                </div>
            </div>

            <div>Жанр:
                <div className="filter-genre">
                    {
                        listOfGenres.map((item) => {
                            return (
                                <>
                                    <input
                                        type="checkbox"
                                        id={item.genre}
                                        value={item.genre}
                                        onChange={onChooseGenre.bind(null, item.genre)}
                                    />
                                    <label htmlFor={item.genre}>{item.genre} ({item.count})</label>
                                </>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Filters;