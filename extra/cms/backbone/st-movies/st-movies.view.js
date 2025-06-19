define(function(require, exports, module) {
    'use strict';

    var BaseReplacerView = require('common/base.replacer.view');
    var MoviesModel = require('replacers/psk-account-theme/st-movies/st-movies.model');
    var MoviesCollection = require('replacers/psk-account-theme/st-movies/st-movies.collection');
    var MoviesListView = require('replacers/psk-account-theme/st-movies/st-movies.list.view');
    var $ = require('j');
    var PopupView = require('modules/popup/popup.view');

    module.exports = BaseReplacerView.extend({
        initialize: function() {
            BaseReplacerView.prototype.initialize.apply(this, arguments);
            this.moviesModel = new MoviesModel;
            this.moviesCollection = new MoviesCollection;
        },

        render: function() {
            this.$el.html(this.tmpl('st-movies').replace());
            this.moviesListView = new MoviesListView({
                collection: this.moviesCollection,
                model: this.moviesModel,
                el: this.$('.movies')[0]
            });

            this.renderFilters();
            this.listenTo(this.moviesCollection, 'all', this.renderFilters);

            return this;
        },

        events: {
            'click .top-bar .button-list': 'handleButtonList',
            'click .top-bar .button-tiles': 'handleButtonTiles',
            'change .display-quantity select': 'handleChangeItemsPerPage',
            'keyup .top-bar .search': 'handleSearch',
            'change .sorting select': 'handleSort',
            'change .filters input': 'handleCheckboxes',
            'click .pagination button': 'handlePagination',
            'click .movies': 'handleClickOnMovie'
        },

        renderFilters: function() {
            var listOfCountries = this.moviesCollection.getListOfCountries();
            var listOfGenres = this.moviesCollection.getListOfGenres();

            this.$('.filter-countries').html(this.tmpl('st-movies.filter.countries', {
                countries: Object.keys(listOfCountries),
                counts: Object.values(listOfCountries)
            }));
            this.$('.filter-genre').html(this.tmpl('st-movies.filter.genre', {
                genres: Object.keys(listOfGenres),
                counts: Object.values(listOfGenres)
            }));
        },

        handleClickOnMovie: function(e) {
            if (this.moviesModel.viewType === 'list') {
                return;
            }

            var $movie = $(e.target.parentNode.parentNode.parentNode); // TODO var $movie = $(e.target).closest('.movie');
            if (!$movie.length || !$movie.hasClass('movie')) {
                return;
            }

            var movieId = $movie.data('id');
            this.showMoviePopUp(movieId);
        },

        findMovieById: function(movieId) {
            return this.moviesCollection.toJSON().filter(function(movie) {
                return movie.id === movieId;
            });
        },

        showMoviePopUp: function(movieId) {
            var movie = this.findMovieById(movieId);

            new PopupView({
                data: {
                    extraClassName: 'popup_name_movie',
                    title: movie[0].title,
                    content: this.tmpl('st-movies.list', movie) + ''
                }
            });
        },

        handlePagination: function(e) {
            this.moviesModel.set('page', Number(e.target.innerText));
        },

        handleButtonList: function() {
            this.moviesModel.set('viewType', 'list');

            this.$('.top-bar .button-list').addClass('active');
            this.$('.top-bar .button-tiles').removeClass('active');
        },

        handleButtonTiles: function() {
            this.moviesModel.set('viewType', 'tiles');

            this.$('.top-bar .button-tiles').addClass('active');
            this.$('.top-bar .button-list').removeClass('active');
        },

        handleChangeItemsPerPage: function(e) {
            this.moviesModel.set('itemsPerPage', e.target.value);
        },

        handleSearch: function(e) {
            this.moviesModel.set('searchText', e.target.value);
        },

        handleSort: function(e) {
            this.moviesModel.set('sortBy', e.target.value);
        },

        handleCheckboxes: function() {
            this.moviesModel.set('filtersCountries', this.$('.filter-countries input:checked').toArray().map(function(input) {
                return input.value;
            }));

            this.moviesModel.set('filtersGenres', this.$('.filter-genre input:checked').toArray().map(function(input) {
                return input.value;
            }));
        },


    }, {
        nameOfReplacers: [
            'ST_MOVIES'
        ]
    });
});