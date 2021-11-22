var tasks = {
    models: [],

    filters: {
        filter: 'all',//incompleted, completed, all
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
        // добавляет дело в массив дел

    },

    get: function(taskId) {
        // возвращает дело из массива дел
    },

    update: function(updatedTask) {
        // обновляет дело в массиве дел

    },

    remove: function(taskId) {
        // удаляет дело из массива дел

    },

    getCompleted: function() {
        // возвращает список законченных дел

    },

    getIncompleted: function() {
        // возвращает список НЕзаконченных дел

    },

    getCompletedCount: function() {
        // возвращает количество законченных дел

    },

    getIncompletedCount: function() {
        // возвращает количество НЕзаконченных дел

    }
};

var listView = {
    tmplFn: null,

    collection: tasks,

    getFilteredModels: function() {

    },

    render: function() {

    },



    subscribe: function () {
        // подписка на кнопку "сделать важным дело"
        // подписка на кнопку "удалить дело"
        // подписка на двойной клик по названию (событие 'dblclick')


    },

    handleDblClickTitle: function(e) {

    },

    handleClickImportant: function(e) {

    },

    handleClickDelete: function(e) {

    },

    init: function () {
        // подписка на изменение в коллекции

    }
};
listView.init();

var appView = {
    collection: tasks,

    updateStats: function() {
        // обновить статистику (Осталось 4, готово 1)

    },

    getUniqId: function() {
        return '_' + Math.random().toString(36).substr(2, 9);
    },

    subscribe: function() {
        // подписка на ввод название дела (событие keypress и e.keyCode === 13)
        // подписка на нажатие кнопки фильтрации
        // подписка на поиск (событие 'keyup')
    },

    handleAddTask: function(e) {

    },

    handleFilter: function(e) {

    },

    handleSearch: function(e) {

    },

    init: function() {

    }
};
appView.init();
