import React from 'react';
import _ from 'underscore';

class Filters extends React.Component {
    state = {
        countries: ['usa'],
        genres: []
        // countsCountries: 0,
        // countsGenres: 0
    };

    getListOfCountries = () => {
        return _.countBy(_.flatten(_.pluck(this.props.movies, 'countries')));
    };

    getListOfGenres = () => {
        return _.countBy(_.flatten(_.pluck(this.props.movies, 'genre')));
    };

    enter = () => {
        var listOfCountries = this.getListOfCountries();
        var listOfGenres = this.getListOfGenres();

        this.setState({
            countries: Object.keys(listOfCountries),
            genres: Object.keys(listOfGenres)
            // countsCountries: Object.values(listOfCountries),
            // countsGenres: Object.values(listOfGenres)
        })
    };

    // models = this.collection.getItemsFilteredBy(models, 'countries', countries); 3
    // models = this.collection.getItemsFilteredBy(models, 'genre', genres); 4

    // handleCheckboxes: function(e) {
    //     this.appModel.filters.countries = $('.filter-countries input:checked').toArray().map(function(input) {
    //         return input.value;
    //     });
    //     this.appModel.filters.genres = $('.filter-genre input:checked').toArray().map(function(input) {
    //         return input.value;
    //     });
    //
    //     listView.render();
    // }

    render() {
        this.enter()
        return (
            <div className="filters">
                <h4>Фильтры</h4>

                <div>Страна:
                    <div className="filter-countries">
                        {
                            this.state.countries.map((country) => {
                                return (
                                    <>
                                        <input type="checkbox" id={country} value={country} />
                                        <label htmlFor={country}>{country}</label>
                                    </>
                                );
                            })
                        }
                    </div>
                </div>

                <div>Жанр:
                    <div className="filter-genre">
                        {
                            this.state.genres.map((genre) => {
                                return (
                                    <>
                                        <input type="checkbox" checked={false} id={genre} value={genre} />
                                        <label htmlFor={genre}>{genre}</label>
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