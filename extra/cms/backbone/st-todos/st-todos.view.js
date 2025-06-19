define(function(require, exports, module) {
    'use strict';

    var BaseReplacerView = require('common/base.replacer.view');
    var TodosListView = require('replacers/psk-account-theme/st-todos/st-todos.list.view');
    var TodosCollection = require('replacers/psk-account-theme/st-todos/st-todos.collection');
    var TodosModel = require('replacers/psk-account-theme/st-todos/st-todos.model');
    var $ = require('j');

    module.exports = BaseReplacerView.extend({
        initialize: function() {
            BaseReplacerView.prototype.initialize.apply(this, arguments);
            this.todosCollection = new TodosCollection;
            this.todosModel = new TodosModel;

            this.listenTo(this.todosCollection, 'all', this.updateStats);
        },

        render: function() {
            this.$el.html(this.tmpl('st-todos').replace());
            this.todosListView = new TodosListView({
                collection: this.todosCollection,
                model: this.todosModel,
                el: this.$('#tasks')[0]
            });

            this.updateStats();

            return this;
        },

        events: {
            'click .filters .actions button': 'handleFilter',
            'keyup #needle': 'handleSearch',
            'keypress .source .title': 'handleAddTask'
        },

        updateStats: function() {
            this.$('.item-incompleted')[0].innerText = this.todosCollection.getIncompletedCount();
            this.$('.item-completed')[0].innerText = this.todosCollection.getCompletedCount();
        },

        handleFilter: function(e) {
            this.todosModel.set('filter', $(e.target).data().filter);
            this.$('.actions button').removeClass('active');
            $(e.target).addClass('active');
        },

        handleSearch: function(e) {
            this.todosModel.set('needle', $(e.target).val());
        },

        getUniqId: function() {
            return '_' + Math.random().toString(36).substr(2, 9);
        },

        handleAddTask: function(e) {
            if (e.keyCode === 13) {
                this.todosCollection.add({
                    id: this.getUniqId(),
                    completed: false,
                    important: false,
                    title: e.target.value
                });
                e.target.value = '';
                this.showInfo({
                    content: this.translate('playtech.mobile.system.todos.message.addTask')
                });
            }
        }
    }, {
        nameOfReplacers: [
            'ST_TODOS'
        ]
    });
});