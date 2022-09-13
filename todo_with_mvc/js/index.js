var tasks = {
    models: [],

    filters: {
        filter: 'all',
        needle: ''
    },

    add: function(task) {
        this.models.push(task);
        $(this).trigger('change');
    },

    get: function(taskId) {
        return _.findWhere(this.models, {id: taskId});
    },

    update: function(updatedTask) {
        this.models.forEach(function(task) {
            if (task.id === updatedTask.id) {
                _.extend(task, updatedTask);
            }
        });
        $(this).trigger('change');
    },

    remove: function(taskId) {
        this.models = _.filter(this.models, function(task) {
            return task.id !== taskId;
        });
        $(this).trigger('change');
    },

    getIncompleted: function() {
        return this.models.filter(function(task) {
            return task.completed === false;
        });
    },

    getCompleted: function() {
        return this.models.filter(function(task) {
            return task.completed === true;
        });
    },

    getIncompletedCount: function() {
        return this.getIncompleted().length;
    },

    getCompletedCount: function() {
        return this.getCompleted().length;
    },

    setModelsToStorage: function() {
        localStorage.setItem('tasks', JSON.stringify(this.models));
    },

    getModelsFromStorage: function() {
        return JSON.parse(localStorage.getItem('tasks')) || [];
    },

    init: function() {
        this.models = this.getModelsFromStorage();

        $(this).on('change', function() {
            this.setModelsToStorage();
        }.bind(this));
    }
};
tasks.init();

var listView = {
    collection: tasks,

    tmplFn: doT.template($('#tasks-template').html()),

    subscribe: function() {
        $('.item .delete').on('click', this.handleDelete.bind(this));
        $('.item .important').on('click', this.handleImportant.bind(this));
        $('.item .title').on('dblclick', this.handleComplete.bind(this));
    },

    handleDelete: function(e) {
        var taskId = $(e.target).closest('.item').data('id');
        this.collection.remove(taskId);
    },

    handleImportant: function(e) {
        var taskId = $(e.target).closest('.item').data('id');
        var updatedTask = this.collection.get(taskId);
        updatedTask.important = !updatedTask.important;
        this.collection.update(updatedTask);
    },

    handleComplete: function(e) {
        var taskId = $(e.target).closest('.item').data('id');
        var updatedTask = this.collection.get(taskId);
        updatedTask.completed = !updatedTask.completed;
        this.collection.update(updatedTask);
    },

    getFiltredModels: function() {
        var {needle, filter} = this.collection.filters;

        return this.collection.models.filter(function(task) {
                return task.title.toLowerCase().includes(needle.toLowerCase());
            }).filter(function(task) {
                if (filter === 'incompleted') {
                    return task.completed === false;
                }

                if (filter === 'completed') {
                    return task.completed === true;
                }

                if (filter === 'all') {
                    return true;
                }
        });
    },

    render: function() {
        $('.items').html(this.tmplFn(this.getFiltredModels()));
        this.subscribe();
        this.updateStats();
    },

    updateStats: function() {
        $('.item-incompleted').text(this.collection.getIncompletedCount());
        $('.item-completed').text(this.collection.getCompletedCount());
    },

    init: function() {
        this.render();

        $(this.collection).on('change', function() {
            this.render();
        }.bind(this));
    }
};
listView.init();

var appView = {
    collection: tasks,

    subscribe: function() {
        $('.source .title').on('keypress', this.handleAddTask.bind(this));
        $('.actions button').on('click', this.handleFilter.bind(this));
        $('.filters input').on('keyup', this.handleSearch.bind(this));
    },

    handleFilter: function(e) {
        this.collection.filters.filter = $(e.target).data('filter');
        $('.actions button').removeClass('active');
        $(e.target).addClass('active');
        listView.render();
    },

    handleSearch: function(e) {
        this.collection.filters.needle = $(e.target).val();
        listView.render();
    },

    getUniqId: function() {
        return '_' + Math.random().toString(36).substr(2, 9);
    },

    handleAddTask: function(e) {
        if (e.keyCode === 13) {
            this.collection.add({
                id: this.getUniqId(),
                completed: false,
                important: false,
                title: e.target.value
            });
            e.target.value = '';
        }
    },

    init: function() {
        this.subscribe();
    }
};
appView.init();
