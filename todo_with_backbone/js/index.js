//----------------------------------------------------------------- Tasks Collection
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

//----------------------------------------------------------------- Application Model
var appModel = new Backbone.Model({
    filter: 'all',
    needle: ''
});

//----------------------------------------------------------------- Application View
var AppView = Backbone.View.extend({
    initialize: function() {
        this.updateStats();

        this.listenTo(this.collection, 'all', function() {
            this.updateStats();
        });
    },

    el: '.app',

    events: {
        'click .filters .actions button': 'handleFilter',
        'keyup #needle': 'handleSearch',
        'keypress .source .title': 'handleAddTask'
    },

    updateStats: function() {
        this.$('.item-incompleted').text(this.collection.getIncompletedCount());
        this.$('.item-completed').text(this.collection.getCompletedCount());
    },

    handleFilter: function(e) {
        this.model.set('filter', $(e.target).data().filter);
        this.$('.actions button').removeClass('active');
        $(e.target).addClass('active');
    },

    handleSearch: function(e) {
        this.model.set('needle', $(e.target).val());
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

var appView = new AppView({
    collection: tasks,
    model: appModel
});

//----------------------------------------------------------------- List View
var ListView = Backbone.View.extend({
    initialize: function() {
        this.renderTasks();

        this.listenTo(this.collection, 'all', function() {
            this.renderTasks();
        });

        this.listenTo(this.model, 'change', function() {
            this.renderTasks();
        });
    },

    el: '#tasks',

    tmplFn: doT.template($('#tasks-template').html()),

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
        var {needle, filter} = this.model.toJSON();

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
    }
});

var listView = new ListView({
    collection: tasks,
    model: appModel
});
