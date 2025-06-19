define(function(require, exports, module) {
    'use strict';

    var BaseModel = require('common/base.model');

    module.exports = BaseModel.extend({
        defaults: {
            filter: 'all',
            needle: ''
        },
    });
});