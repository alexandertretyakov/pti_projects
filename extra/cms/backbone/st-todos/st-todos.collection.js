define(function(require, exports, module) {
    'use strict';

    var BaseCollection = require('common/base.collection');
    const _ = require('underscore');

    module.exports = BaseCollection.extend({
        initialize: function() {
            this.reset(this.getModelsFromStorage());
            this.setModelsToStorage();

            this.on('all', function() {
                this.setModelsToStorage();
            });
        },

        setModelsToStorage: function() {
            localStorage.setItem('tasks', JSON.stringify(this.toJSON()));
        },

        getModelsFromStorage: function() {
            return JSON.parse(localStorage.getItem('tasks')) || [];
        },

        getIncompleted: function() {
            return _.filter(this.toJSON(), function(task) {
                return !task.completed;
            });
        },

        getCompleted: function() {
            return _.filter(this.toJSON(), function(task) {
                return task.completed;
            });
        },

        getIncompletedCount: function() {
            return this.getIncompleted().length;
        },

        getCompletedCount: function() {
            return this.getCompleted().length;
        }
    });
});