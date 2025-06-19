define(function(require, exports, module) {
    'use strict';

    var BaseCollection = require('common/base.collection');

    var Whores = BaseCollection.extend({
        initialize: function() {
            this.reset(this.getModelsFromStorage());
            this.setModelsToStorage();

            this.on('all', function() {
                this.setModelsToStorage();
            });
        },

        setModelsToStorage: function() {
            localStorage.setItem('whores', JSON.stringify(this.toJSON()));
        },

        getModelsFromStorage: function() {
            return JSON.parse(localStorage.getItem('whores')) || [];
        }
    });

    module.exports = Whores;
});

