//-----------------------------------------------------------------Tasks
var Tasks = Backbone.Collection.extend({
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
            return task.completed === false;
        });
    },

    getCompleted: function() {
        return _.filter(this.toJSON(), function(task) {
            return task.completed === true;
        });
    },

    getIncompletedCount: function() {
        return this.getIncompleted().length;
    },

    getCompletedCount: function() {
        return this.getCompleted().length;
    }
});

var tasks = new Tasks;

//-----------------------------------------------------------------AppModel
var AppModel = Backbone.Model.extend({
    filters: {
        filter: 'all',
        needle: ''
    }
});

var appModel = new AppModel;

//-----------------------------------------------------------------StatsView
var StatsView = Backbone.View.extend({
    el: '.stats',

    updateStats: function() {
        this.$('.item-incompleted').text(this.collection.getIncompletedCount());
        this.$('.item-completed').text(this.collection.getCompletedCount());
    }
});

var statsView = new StatsView({
    collection: tasks
});

//-----------------------------------------------------------------FiltersView
var FiltersView = Backbone.View.extend({
    el: '.filters',

    filtration: appModel,

    events: {
        'click .actions button': 'handleFilter',
        'keyup input': 'handleSearch'
    },

    handleFilter: function(e) {
        this.filtration.filters.filter = $(e.target).data().filter;
        this.$('.actions button').removeClass('active');
        $(e.target).addClass('active');
        listView.renderTasks();
    },

    handleSearch: function(e) {
        this.filtration.filters.needle = $(e.target).val();
        listView.renderTasks();
    },
});

var filtersView = new FiltersView({
    collection: tasks
});

//-----------------------------------------------------------------SourceView
var SourceView = Backbone.View.extend({
    el: '.source',

    events: {
        'keypress .title': 'handleAddTask'
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
    }
});

var sourceView = new SourceView({
    collection: tasks
});

//-----------------------------------------------------------------ListView
var ListView = Backbone.View.extend({
    initialize: function() {
        this.renderTasks();

        this.listenTo(this.collection, 'all', function() {
            this.renderTasks();
        });
    },

    el: '#tasks',

    tmplFn: doT.template($('#tasks-template').html()),

    filtration: appModel,

    stats: statsView,

    events: {
        'click .item .delete': 'handleDelete',
        'click .item .important': 'handleImportant',
        'dblclick .title': 'handleComplete'
    },

    handleDelete: function(e) {
        var taskId = $(e.target).closest('.item').data().id;

        this.collection.remove(taskId).toJSON();
    },

    handleImportant: function(e) {
        var taskId = $(e.target).closest('.item').data().id;
        var updatedTask = this.collection.get(taskId).toJSON();

        updatedTask.important = !updatedTask.important;
        this.collection.add(updatedTask, {merge: true});
    },

    handleComplete: function(e) {
        var taskId = $(e.target).closest('.item').data().id;
        var updatedTask = this.collection.get(taskId).toJSON();

        updatedTask.completed = !updatedTask.completed;
        this.collection.add(updatedTask, {merge: true});
    },

    getFiltredModels: function() {
        var {needle, filter} = this.filtration.filters;

        return this.collection.toJSON().filter(function(task) {
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

    renderTasks: function() {
        this.$el.html(this.tmplFn(this.getFiltredModels()));
        this.stats.updateStats();
    }
});

var listView = new ListView({
    collection: tasks
});



