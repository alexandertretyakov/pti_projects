import React from 'react';
import _ from 'underscore';
import $ from 'jquery';

import FiltersTopBar from '../FiltersTopBar';
import Filters from '../Filters';
import Pagination from '../Pagination';
import ListMovies from '../ListMovies';
import PopUp from '../PopUp';

class App extends React.Component {
    state = {
        movies: [],
        viewType: 'tiles',          // вид отображения список/плитка
        needle: '',                 // поиск
        itemsPerPage: 'default',    // default 6 12 18
        sortBy: 'default',          // сортировка по: убыванию, возростанию и т.д.
        page: 1,                    // странички пагинации 1,2,3
        countries: [],              // ['СССР', 'Мальта']
        genres: [],                 // ['боевик', 'комедия']
        showPopUpWithMovieId: null
    };

    fetchModelsFromServer() {
        $.ajax({
            method: 'GET',
            url: 'http://127.0.0.1:3001/movies',
            dataType: 'json'
        }).done(function(movies) {
            this.setState({
                movies: this.transformMovies(movies)
            });
        }.bind(this));
    };

    componentDidMount() {
        this.fetchModelsFromServer();
    };

    onViewTypeChange = (viewType) => {
        this.setState({viewType});
    };

    onSearchChange = (needle) => {
        this.setState({needle});
    };

    onItemsPerPageChange = (itemsPerPage) => {
        this.setState({
            itemsPerPage: itemsPerPage === 'default' ? 'default' : Number(itemsPerPage),
            page: 1
        });
    };

    onSort = (sortBy) => {
        this.setState({sortBy});
    };

    getSearchedItems = (movies) => {
        const {needle} = this.state;

        return movies.filter((movie) => movie.title.toLowerCase().includes(needle.toLowerCase()));
    };

    getItemsSortedBy = (movies) => {
        const {sortBy} = this.state;

        if (sortBy === 'default') {
            return movies;
        } else {
            let [direction, field] = sortBy.split('_');
            // direction: ascending descending
            // field: title rating year time

            return direction === 'ascending' ?
                _.sortBy(movies, field) :
                _.sortBy(movies, field).reverse();
        }
    };

    getPagesCount = () => {
        const {movies, itemsPerPage} = this.state;

        return itemsPerPage === 'default' ? 0 : Math.ceil(movies.length / itemsPerPage);
    };

    onPaginate = (page) => {
        this.setState({page});
    };

    getItemsByPage = (movies) => {
        const {itemsPerPage, page} = this.state;

        if (itemsPerPage === 'default') {
            return movies;
        }

        return movies.slice((page - 1) * itemsPerPage, (page - 1) * itemsPerPage + itemsPerPage);  // Этот код VS говнокода ниже

        // if (itemsPerPage === 6 && page === 1) {
        //     return movies.slice(0, 6);
        // }
        //
        // if (itemsPerPage === 6 && page === 2) {
        //     return movies.slice(6, 12);
        // }
        //
        // if (itemsPerPage === 6 && page === 3) {
        //     return movies.slice(12, 18);
        // }
        //
        // if (itemsPerPage === 6 && page === 4) {
        //     return movies.slice(18, 24);
        // }
        //
        // if (itemsPerPage === 12 && page === 1) {
        //     return movies.slice(0, 12);
        // }
        //
        // if (itemsPerPage === 12 && page === 2) {
        //     return movies.slice(12, 24);
        // }
        //
        // if (itemsPerPage === 18 && page === 1) {
        //     return movies.slice(0, 18);
        // }
        //
        // if (itemsPerPage === 18 && page === 2) {
        //     return movies.slice(18, 24);
        // }
    };

    onChooseCountry = (country) => {
        this.setState((state) => ({
            countries: state.countries.includes(country) ?
                state.countries.filter((el) => el !== country) :
                state.countries.concat(country)
        }));
    };

    onChooseGenre = (genre) => {
        this.setState((state) => ({
            genres: state.genres.includes(genre) ?
                state.genres.filter((el) => el !== genre) :
                state.genres.concat(genre)
        }));
    };

    getItemsFilteredBy = (movies, field, filters) => {
        return movies.filter(function(movie) {
            return filters.every(function(item) {
                return movie[field].includes(item);
            });
        });
    };

    getFilteredMovies = () => {
        let movies = [...this.state.movies];
        const {countries, genres} = this.state;

        movies = this.getSearchedItems(movies);
        movies = this.getItemsSortedBy(movies);
        movies = this.getItemsFilteredBy(movies, 'countries', countries);
        movies = this.getItemsFilteredBy(movies, 'genre', genres);
        movies = this.getItemsByPage(movies);

        return movies;
    };

    getMovieById = (movieId) => {
        return this.state.movies.find((movie) => movie.id === movieId);
    };

    onMovieClick = (movieId) => {
        this.setState({
            showPopUpWithMovieId: movieId
        });
    };

    convertMinutesToHours = (minutes) => {
        const _hours = Math.trunc(minutes / 60);
        const _minutes = minutes % 60;
        return `${_hours}:${_minutes}`;
    };

    transformMovies = (movies) => {
        return movies.map((movie) => ({
            ...movie,
            hours: this.convertMinutesToHours(movie.time)
        }));
    };

    onClosePopUp = () => {
        this.setState({
            showPopUpWithMovieId: null
        });
    };

    getListOfCountries = () => {
        return _.map(_.countBy(_.flatten(_.pluck(this.state.movies, 'countries'))), (count, country) => ({country, count}));
    };

    getListOfGenres = () => {
        return _.map(_.countBy(_.flatten(_.pluck(this.state.movies, 'genre'))), (count, genre) => ({genre, count}));
    };

    render() {
        const {showPopUpWithMovieId, viewType, page} = this.state;
        const pagesCount = this.getPagesCount();
        const filteredMovies = this.getFilteredMovies();
        const movieInPopUp = showPopUpWithMovieId === null ?
            null :
            this.getMovieById(showPopUpWithMovieId);
        const listOfCountries = this.getListOfCountries();
        const listOfGenres = this.getListOfGenres();

        return (
            <div className="app">
                <FiltersTopBar
                    viewType={viewType}
                    onViewTypeChange={this.onViewTypeChange}
                    onSearchChange={this.onSearchChange}
                    onItemsPerPageChange={this.onItemsPerPageChange}
                    onSort={this.onSort}
                />
                <Filters
                    listOfCountries={listOfCountries}
                    listOfGenres={listOfGenres}
                    onChooseCountry={this.onChooseCountry}
                    onChooseGenre={this.onChooseGenre}
                />
                <Pagination
                    pagesCount={pagesCount}
                    page={page}
                    onPaginate={this.onPaginate}
                />
                <ListMovies
                    viewType={viewType}
                    items={filteredMovies}
                    onMovieClick={this.onMovieClick}
                />
                {
                    movieInPopUp !== null ?
                        <PopUp
                            movie={movieInPopUp}
                            onClosePopUp={this.onClosePopUp}
                        /> :
                        null
                }
            </div>
        );
    }
}

export default App;