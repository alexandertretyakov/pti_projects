var whores = {
    models: [],

    add: function(whore) {
        // добавить модель в массив моделей
        // синхронизировать массив моделей с localStorage
    },

    update: function(updatedWhore) {
        // обновить модель в массиве моделей
        // синхронизировать массив моделей с localStorage
    },

    remove: function(whoreId) {
        // удалить модель в массиве моделей
        // синхронизировать массив моделей с localStorage
    },

    get: function(whoreId) {
        // вернуть модель из массива моделей
    },

    setModelsToStorage: function() {
        // сохранить массив моделей в localStorage
    },

    getModelsFromStorage: function() {
        // вернуть массив моделей из localStorage или [] если такой записи нет
    },

    init: function() {
        // проинизиализировать this.models значением из localStorage
    }
};
whores.init();

var listView = {
    // шаблонная функция из шаблонной строки
    tmplFn: null,

    // коллекция
    collection: null,

    subscribeAddClick: function() {
        // write your code here
    },

    subscribeWhoreClick: function() {
        // write your code here
    },

    render: function() {
        // write your code here
    },

    init: function() {
        // write your code here
    }
};
listView.init();

var formView = {
    // поля формы
    $fields: null,

    // коллекция
    collection: null,

    showAddForm: function() {
        // write your code here
    },

    showEditRemoveForm: function(whore) {
        // write your code here
    },

    getFormData: function() {
        // write your code here
    },

    getUniqId: function() {
        return '_' + Math.random().toString(36).substr(2, 9);
    },

    isFormDataValid: function() {
        // write your code here
    },

    highlightFields: function() {
        // write your code here
    },

    resetForm: function() {
        // write your code here
    },

    subscribe: function() {
        // write your code here
    },

    handleUpdate: function() {
        // write your code here
    },

    handleDelete: function() {
        // write your code here
    },

    handleSave: function() {
        // write your code here
    },

    init: function() {
        // write your code here
    }
};
formView.init();
