var tasks = {
    models: [],

    filters: {
        filter: 'all',
        needle: ''
    },

    // task syntax {
    //     id: '',
    //     title: '',
    //     complete: false,
    //     important: false
    // }

    // C => add
    // R => get
    // U => update
    // D => remove

    add: function(task) {
        this.models.push(task);
        $(this).trigger('change');
    },

    get: function(id) {
        return _.findWhere(this.models, {id: id});
    },

    update: function(updatedTask) {
        var task = _.findWhere(this.models, {id: updatedTask.id});
        _.extend(task, updatedTask);
        $(this).trigger('change');
    },

    remove: function(id) {
        this.models = _.reject(this.models, function(task) {
            return task.id === id;
        });
        $(this).trigger('change');
    },

    getCompleted: function() {
        return _.filter(this.models, function(task) {
            return task.completed === true;
        });
    },

    getIncompleted: function() {
        return _.filter(this.models, function(task) {
            return task.completed === false;
        });
    },

    getCompletedCount: function() {
        return this.getCompleted().length;
    },

    getIncompletedCount: function() {
        return this.getIncompleted().length;
    }
};

var listView = {
    tmplFn: doT.template($('#tasks-template').html()),

    collection: tasks,

    getFilteredModels: function() {
        var collection = this.collection;
        var models = this.collection.models;
        var filter = this.collection.filters.filter;
        var needle = this.collection.filters.needle;

        return models.filter(function(task) {
            return task.title.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
        }).filter(function(task) {
            switch (filter) {
                case 'completed':
                    return task.completed === true;
                case 'incompleted':
                    return task.completed === false;
                default:
                    return models;
            }
        });
    },

    render: function() {
        $('#tasks').html(this.tmplFn(this.getFilteredModels()));
        this.updateStats();
        this.subscribe();
    },

    updateStats: function() {
        $('.stats .item-incompleted').text(this.collection.getIncompletedCount());
        $('.stats .item-completed').text(this.collection.getCompletedCount());
    },

    subscribe: function () {
        $('.items .important').on('click', function(e) {
            var id = $(e.target).closest('.item').get(0).dataset.id;
            var task = this.collection.get(id);
            task.important = !task.important;
            this.collection.update(task);
        }.bind(this));

        $('.items .delete').on('click', function(e) {
            var id = $(e.target).closest('.item').get(0).dataset.id;
            this.collection.remove(id);
        }.bind(this));

        $('.items .title').on('dblclick', function(e) {
            var id = $(e.target).closest('.item').get(0).dataset.id;
            var task = this.collection.get(id);
            task.completed = !task.completed;
            this.collection.update(task);
        }.bind(this));
    },

    init: function () {
        $(this.collection).on('change', function() {
            console.log('change');
            this.render();
        }.bind(this));

        this.render();
    }
};

listView.init();

var appView = {
    collection: tasks,

    getUniqId: function() {
        return '_' + Math.random().toString(36).substr(2, 9);
    },

    init: function() {
        $('.source .title').on('keypress', function(e) {
            if (e.keyCode === 13 && e.target.value.trim() !== '') {
                this.collection.add({
                    id: this.getUniqId(),
                    title: e.target.value,
                    completed: false,
                    important: false
                });
                e.target.value = '';
            }
        }.bind(this));

        $('.filters .actions button').on('click', function(e) {
            $('.filters .actions button').removeClass('active');
            $(e.target).addClass('active');
            this.collection.filters.filter = e.target.dataset.filter;
            listView.render();
        }.bind(this));

        $('.filters input').on('keyup', function(e) {
            this.collection.filters.needle = e.target.value;
            listView.render();
        }.bind(this));
    }
};

appView.init();
