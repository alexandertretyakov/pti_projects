define(function(require, exports, module) {
    'use strict';

    var BaseView = require('common/base.view');
    var $ = require('j');

    module.exports = BaseView.extend({
        initialize: function() {
            this.render();

            this.listenTo(this.collection, 'all', this.render);
            this.listenTo(this.model, 'change', this.render);
        },

        events: {
            'click .item .delete': 'handleDelete',
            'click .item .important': 'handleImportant',
            'dblclick .title': 'handleComplete'
        },

        render: function() {
            this.$el.html(this.tmpl('st-todos.list', this.getFiltredModels()).replace());
        },

        handleDelete: function(e) {
            // var taskId = $(e.target).closest('.item').data().id;
            var taskId = e.target.parentNode.parentNode.dataset.id;

            this.collection.remove(taskId);
        },

        handleImportant: function(e) {
            // var taskId = $(e.target).closest('.item').data().id;
            var taskId = e.target.parentNode.parentNode.dataset.id;
            var updatedTask = this.collection.get(taskId).toJSON();

            updatedTask.important = !updatedTask.important;
            this.collection.add(updatedTask, {merge: true});
        },

        handleComplete: function(e) {
            // var taskId = $(e.target).closest('.item').data().id;
            var taskId = e.target.parentNode.dataset.id;
            var updatedTask = this.collection.get(taskId).toJSON();

            updatedTask.completed = !updatedTask.completed;
            this.collection.add(updatedTask, {merge: true});
        },

        getFiltredModels: function() {
            var {needle, filter} = this.model.toJSON();

            return this.collection.toJSON()
                .filter(function(task) {
                    return task.title.toLowerCase().includes(needle.toLowerCase());
                })
                .filter(function(task) {
                    if (filter === 'incompleted') {
                        return !task.completed;
                    }

                    if (filter === 'completed') {
                        return task.completed;
                    }

                    if (filter === 'all') {
                        return true;
                    }
                });
        }
    });
});
