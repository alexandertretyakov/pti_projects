define(function(require, exports, module) {
    'use strict';

    var BaseModel = require('common/base.model');

    module.exports = BaseModel.extend({
        defaults: {
            viewType: 'tiles',              // tiles list
            itemsPerPage: 'default',        // default 6 12 18
            searchText: '',
            sortBy: 'default',              // default ascending_title descending_title...
            filtersCountries: [],           // ['СССР', 'Мальта']
            filtersGenres: [],              // ['комедия', 'ужасы']
            page: 1                         // 1,2,3 ''
        },
    });
});