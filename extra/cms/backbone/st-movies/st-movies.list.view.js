define(function(require, exports, module) {
    'use strict';

    var BaseView = require('common/base.view');
    var $ = require('j');

    module.exports = BaseView.extend({
        initialize: function() {
            this.renderMovies();

            this.listenTo(this.model, 'change', this.renderMovies);
            this.listenTo(this.collection, 'all', this.renderMovies);
        },

        renderMovies: function() {
            var {viewType, itemsPerPage, searchText, sortBy, filtersCountries, filtersGenres, page} = this.model.toJSON();
            var tmplType = viewType === 'tiles' ? 'st-movies.tiles' : 'st-movies.list';
            var viewTypeStateClass = viewType === 'tiles' ? 'state-tiles' : 'state-list';
            var models = [...this.collection.toJSON()];

            models = this.collection.getSearchedItems(models, searchText);
            models = this.collection.getItemsSortedBy(models, sortBy);
            models = this.collection.getItemsFilteredBy(models, 'countries', filtersCountries);
            models = this.collection.getItemsFilteredBy(models, 'genre', filtersGenres);
            models = this.collection.getItemsByPage(models, itemsPerPage, page);

            this.$el
                .html(this.tmpl(tmplType, models))
                .removeClass('state-tiles state-list')
                .addClass(viewTypeStateClass);

            this.renderPagination(models, itemsPerPage, page);
        },

        renderPagination: function(models, itemsPerPage, page) {
            var pagesCount;

            if (itemsPerPage === 'default') {
                pagesCount = 0;
            } else {
                pagesCount = Math.ceil(this.collection.models.length / Number(itemsPerPage));
            }

            $('.pagination').html(this.tmpl('st-movies.pagination', {
                buttons: Array.from({ length: pagesCount }, (v, i) => i + 1),// По сколько кнопок отображать
                page: page
            }));
        }
    });
});