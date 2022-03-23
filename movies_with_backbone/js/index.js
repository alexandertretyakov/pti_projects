//----------------------------------------------------------------- Movies Collection
var Movies = Backbone.Collection.extend({
    initialize: function() {
        this.fetchModelsFromServer();
    },

    fetchModelsFromServer: function() {
        $.ajax({
            method: 'GET',
            url: 'http://127.0.0.1:3000/movies',
            dataType: 'json'
        }).done(function(movies) {
            this.reset(movies);
            this.transformModels();
        }.bind(this));
    },

    getSearchedItems: function(models, needle) {
        if (needle === '') {
            return models;
        } else {
            return models.filter(function(movie) {
                return movie.title.toLowerCase().includes(needle.toLowerCase());
            });
        }
    },

    getItemsSortedBy: function(models, sortBy) {
        if (sortBy === 'default') {
            return models;
        } else {
            var [direction, field] = sortBy.split('_');
            // direction: ascending descending
            // field: title rating year time

            return direction === 'ascending' ?
                _.sortBy(models, field) :
                _.sortBy(models, field).reverse();
        }
    },

    getListOfCountries: function() {
        return _.countBy(_.flatten(_.pluck(this.toJSON(), 'countries')));
    },

    getListOfGenres: function() {
        return _.countBy(_.flatten(_.pluck(this.toJSON(), 'genre')));
    },

    getItemsFilteredBy: function(models, field, filter) {
        return models.filter(function(movie) {
            return filter.every(function(item) {
                return movie[field].includes(item);
            });
        });
    },

    convertMinutesToHours: function(minutes) {
        var _hours = Math.trunc(minutes / 60);
        var _minutes = minutes % 60;

        return `${_hours}:${_minutes}`;
    },

    transformModels: function() {
        this.toJSON().forEach(function(movie) {
            _.extend(movie, {
                hours: this.convertMinutesToHours(movie.time)
            });
        }.bind(this));
    },

    getItemsByPage: function(models, itemsPerPage, page) {
        if (itemsPerPage === 'default') {
            return models;
        }

        itemsPerPage = Number(itemsPerPage);

        return models.slice((page - 1) * itemsPerPage, (page - 1) * itemsPerPage + itemsPerPage);
    }
});

var movies = new Movies();

//----------------------------------------------------------------- Application Model
var appModel = new Backbone.Model({
    viewType: 'tiles',              // tiles list
    itemsPerPage: 'default',        // default 6 12 18
    searchText: '',
    sortBy: 'default',              // default ascending_title descending_title...
    filtersCountries: [],           // ['СССР', 'Мальта']
    filtersGenres: [],              // ['комедия', 'ужасы']
    page: 1                         // 1,2,3
});


//----------------------------------------------------------------- List View
var ListView = Backbone.View.extend({
    initialize: function() {
        this.renderModels();

        this.listenTo(this.model, 'change', function() {
            this.renderModels();
        });

        this.listenTo(this.collection, 'all', function() {
            this.renderModels();
        });
    },

    el: '.movies',

    collection: movies,

    model: appModel,

    tmplFnMovieTiles: $('#movie-tiles-template').html(),
    tmplFnMovieList: $('#movie-list-template').html(),
    tmplFnPagination: $('#pagination-template').html(),

    renderModels: function() {
        var {viewType, itemsPerPage, searchText, sortBy, filtersCountries, filtersGenres, page} = this.model.toJSON();
        var tmplFn = viewType === 'tiles' ? this.tmplFnMovieTiles : this.tmplFnMovieList;
        var viewTypeStateClass = viewType === 'tiles' ? 'state-tiles' : 'state-list';
        var models = [...this.collection.toJSON()];

        models = this.collection.getSearchedItems(models, searchText);
        models = this.collection.getItemsSortedBy(models, sortBy);
        models = this.collection.getItemsFilteredBy(models, 'countries', filtersCountries);
        models = this.collection.getItemsFilteredBy(models, 'genre', filtersGenres);
        models = this.collection.getItemsByPage(models, itemsPerPage, page);

        this.$el
            .html(doT.template(tmplFn)(models))
            .removeClass('state-tiles state-list')
            .addClass(viewTypeStateClass);

        this.renderPagination(models, itemsPerPage, page);
    },

    renderPagination: function(models, itemsPerPage, page) {
        var pagesCount = Math.ceil(this.collection.toJSON().length / Number(itemsPerPage));

        if (itemsPerPage === 'default') {
            pagesCount = 0;
        }

        $('.pagination').html(doT.template(this.tmplFnPagination)({
            buttons: Array.from({ length: pagesCount }, (v, i) => i+1),// По сколько кнопок отображать
            page: page
        }));
    }
});

var listView = new ListView;

//----------------------------------------------------------------- Application View
var AppView = Backbone.View.extend({
    initialize: function() {
        this.renderFilters();

        this.listenTo(this.collection, 'all', function() {
            this.renderFilters();
        });
    },

    el: '.app',

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

    collection: movies,

    model: appModel,

    tmplFnCountries: $('#filter-countries-template').html(),
    tmplFnGenres: $('#filter-genre-template').html(),

    renderFilters: function() {
        var listOfCountries = this.collection.getListOfCountries();
        var listOfGenres = this.collection.getListOfGenres();

        $('.filter-countries').html(doT.template(this.tmplFnCountries)({
            countries: Object.keys(listOfCountries),
            counts: Object.values(listOfCountries)
        }));
        $('.filter-genre').html(doT.template(this.tmplFnGenres)({
            genres: Object.keys(listOfGenres),
            counts: Object.values(listOfGenres)
        }));
    },

    handleClickOnMovie: function(e) {
        if (this.model.viewType === 'list') {
            return;
        }

        var $movie = $(e.target).closest('.movie');
        if (!$movie.length) {
            return;
        }

        var movieId = $movie.data('id');
        this.showMoviePopUp(movieId);
    },

    findMovieById: function(movieId) {
        return this.collection.toJSON().filter(function(movie) {
            return movie.id === movieId;
        });
    },

    showMoviePopUp: function(movieId) {
        var movie = this.findMovieById(movieId);
        new PopUp(movie);
    },

    handlePagination: function(e) {
        this.model.set('page', Number($(e.target).text()));
    },

    handleButtonList: function() {
        this.model.set('viewType', 'list');

        $('.top-bar .button-list').addClass('active');
        $('.top-bar .button-tiles').removeClass('active');
    },

    handleButtonTiles: function() {
        this.model.set('viewType', 'tiles');

        $('.top-bar .button-tiles').addClass('active');
        $('.top-bar .button-list').removeClass('active');
    },

    handleChangeItemsPerPage: function(e) {
        this.model.set('itemsPerPage', e.target.value);
    },

    handleSearch: function(e) {
        this.model.set('searchText', e.target.value);
    },

    handleSort: function(e) {
        this.model.set('sortBy', e.target.value);
    },

    handleCheckboxes: function(e) {
        this.model.set('filtersCountries', $('.filter-countries input:checked').toArray().map(function(input) {
            return input.value;
        }));

        this.model.set('filtersGenres', $('.filter-genre input:checked').toArray().map(function(input) {
            return input.value;
        }));
    }
});

var appView = new AppView;

//----------------------------------------------------------------- Popup View
var PopUp = Backbone.View.extend({
    initialize: function(movie) {
        this.movie = movie;
        this.render();
        $(document).on('keyup', this.remove.bind(this));
        $('.popup .close').on('click', function() {
            $('.overlay').remove();
            $('.popup').remove();
        });
    },

    tmplFnMovieList: $('#movie-list-template').html(),

    render: function() {
        $('<div class="overlay">').appendTo('body');
        $('<div class="popup">').appendTo('body');
        $('.popup').html(doT.template(this.tmplFnMovieList)(this.movie));
        $('<button class="close">x</button>').appendTo('.popup');
    },

    remove: function(e) {
        if (e.keyCode === 27) {
            Backbone.View.prototype.remove.apply(this, arguments);
            $('.overlay').remove();
            $('.popup').remove();
        }
    }
});