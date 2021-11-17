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
        // добавляет дело в массив дел
    },

    get: function(id) {
        // возвращает дело из массива дел
    },

    update: function(updatedTask) {
        // обновляет дело в массиве дел
    },

    remove: function(id) {
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

    collection: null,

    getFilteredModels: function() {
        // возвращает отфильтрованные дела
    },

    render: function() {
        // write your code here
    },

    updateStats: function() {
        // обновить статистику (Осталось 4, готово 1)
    },

    subscribe: function () {
        // подписка на кнопку "сделать важным дело"
        // подписка на кнопку "удалить дело"
        // подписка на двойной клик по названию (событие 'dblclick')
        // подписка на изменение в коллекции
    },

    init: function () {
        // write your code here
    }
};

listView.init();

var appView = {
    collection: null,

    getUniqId: function() {
        return '_' + Math.random().toString(36).substr(2, 9);
    },

    init: function() {
        // подписка на ввод название дела (событие keypress и e.keyCode === 13)
        // подписка на нажатие кнопки фильтрации
        // подписка на поиск (событие 'keyup')
    }
};

appView.init();
