import React from 'react';
import _ from 'underscore';

class Filters extends React.Component {
    constructor(props) {
        super();
        window.fi= this;
    }

    getListOfCountries = () => {
        return _.map(_.countBy(_.flatten(_.pluck(this.props.movies, 'countries'))), (count, country) => ({country, count}));
    };

    getListOfGenres = () => {
        return _.map(_.countBy(_.flatten(_.pluck(this.props.movies, 'genre'))), (count, genre) => ({genre, count}));
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
                                        <input type="checkbox" id={item.country} value={item.country} />
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
                                        <input type="checkbox" id={item.genre} value={item.genre} />
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