var tasks = {
    models: [],

    filters: {
        filter: 'all',//incompleted, completed, all
        needle: ''//Текст в поле поиска
    },

    // task syntax {
    //     id: '',
    //     title: '',
    //     completed: false,
    //     important: false
    // }

    // C => add
    // R => get
    // U => update
    // D => remove

    add: function(task) {
        // добавляет дело в массив дел
        this.models.push(task);
        $(this).trigger('change');
    },

    get: function(taskId) {
        // возвращает дело из массива дел
        return _.findWhere(this.models, {id: taskId});
    },

    update: function(updatedTask) {
        // обновляет дело в массиве дел
        this.models.forEach(function(task) {
            if (task.id === updatedTask.id) {
                _.extend(task, updatedTask);
            }
        });
        $(this).trigger('change');
    },

    remove: function(taskId) {
        // удаляет дело из массива дел
        this.models = this.models.filter(function(task) {
            return task.id !== taskId;
        });
        $(this).trigger('change');
    },

    getCompleted: function() {
        // возвращает список законченных дел
        return this.models.filter(function(task) {
            return task.completed === true;
        });
    },

    getIncompleted: function() {
        // возвращает список НЕзаконченных дел
        return this.models.filter(function(task) {
            return task.completed === false;
        });
    },

    getCompletedCount: function() {
        // возвращает количество законченных дел
        return this.getCompleted().length;
    },

    getIncompletedCount: function() {
        // возвращает количество НЕзаконченных дел
        return this.getIncompleted().length;
    }
};

var listView = {
    tmplFn: doT.template($('#tasks-template').html()),

    collection: tasks,

    getFilteredModels: function() {
        var {needle, filter} = this.collection.filters;

        return this.collection.models.filter(function(task) {
            return task.title.toUpperCase().includes(needle.toUpperCase());
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
        $('.items').html(this.tmplFn(this.getFilteredModels()));
        this.subscribe();
    },

    subscribe: function () {
        // подписка на кнопку "сделать важным дело"
        // подписка на кнопку "удалить дело"
        // подписка на двойной клик по названию (событие 'dblclick')
        $('.item .delete').on('click', this.handleClickDelete.bind(this));
        $('.item .important').on('click', this.handleClickImportant.bind(this));
        $('.item .title').on('dblclick', this.handleDblClickTitle.bind(this));
    },

    handleDblClickTitle: function(e) {
        var taskId = $(e.target).closest('.item').data().id;
        var updatedTask = this.collection.get(taskId);
        updatedTask.completed = !updatedTask.completed;
        this.collection.update(updatedTask);
    },

    handleClickImportant: function(e) {
        var taskId = $(e.target).closest('.item').data().id;
        var updatedTask = this.collection.get(taskId);
        updatedTask.important = !updatedTask.important;
        this.collection.update(updatedTask);
    },

    handleClickDelete: function(e) {
        var taskId = $(e.target).closest('.item').data().id;
        this.collection.remove(taskId);
    },

    init: function () {
        // подписка на изменение в коллекции
        this.render();

        $(this.collection).on('change', function() {
            this.render();
        }.bind(this));
    }
};
listView.init();

var appView = {
    collection: tasks,

    updateStats: function() {
        // обновить статистику (Осталось 4, готово 1)
        $('.item-incompleted').text(this.collection.getIncompletedCount());
        $('.item-completed').text(this.collection.getCompletedCount());
    },

    getUniqId: function() {
        return '_' + Math.random().toString(36).substr(2, 9);
    },

    subscribe: function() {
        // подписка на ввод название дела (событие keypress и e.keyCode === 13)
        // подписка на нажатие кнопки фильтрации
        // подписка на поиск (событие 'keyup')
        $('.source .title').on('keypress', this.handleAddTask.bind(this));
        $('.actions button').on('click', this.handleFilter.bind(this));
        $('.filters input').on('keyup', this.handleSearch.bind(this));
    },

    handleAddTask: function(e) {
        if (e.keyCode === 13) {
            this.collection.add({
                id: this.getUniqId(),
                title: e.target.value,
                completed: false,
                important: false
            });
            e.target.value = '';
        }
    },

    handleFilter: function(e) {
        this.collection.filters.filter = $(e.target).data().filter;
        $('.actions button').removeClass('active');
        $(e.target).addClass('active');
        listView.render();
    },

    handleSearch: function(e) {
        this.collection.filters.needle = e.target.value;
        listView.render();
    },

    init: function() {
        this.subscribe();
        this.updateStats();

        $(this.collection).on('change', function() {
            this.updateStats();
        }.bind(this));
    }
};
appView.init();