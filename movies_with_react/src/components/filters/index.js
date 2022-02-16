import React from 'react';
import _ from 'underscore';

class Filters extends React.Component {
    constructor(props) {
        super();
        window.fi= this;
    }

    onChangeCountries = (e) => {
        this.props.handleCheckboxesCountries(e.target.id);
    };

    onChangeGenres = (e) => {
        this.props.handleCheckboxesGenres(e.target.id);
    };

    getListOfCountries = () => {
        return _.map(_.countBy(_.flatten(_.pluck(this.props.movies, 'countries'))), (count, country) => ({country, count}));
    };

    getListOfGenres = () => {
        return _.map(_.countBy(_.flatten(_.pluck(this.props.movies, 'genre'))), (count, genre) => ({genre, count}));
    };

    render() {
        var listOfCountries = this.getListOfCountries();
        var listOfGenres = this.getListOfGenres();

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
                                            onChange={this.onChangeCountries}
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
                                            onChange={this.onChangeGenres}
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
    }
}

export default Filters;