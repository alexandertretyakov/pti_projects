var whores = {
    models: [],

    add: function(whore) {
        // добавить модель в массив моделей
        // синхронизировать массив моделей с localStorage
        this.models.push(whore);
        this.setModelsToStorage();
        $(this).trigger('change');
    },

    update: function(updatedWhore) {
        // обновить модель в массиве моделей
        // синхронизировать массив моделей с localStorage
        this.models.forEach(function(whore) {
            if (whore.id === updatedWhore.id) {
                _.extend(whore, updatedWhore);
            }
        });
        this.setModelsToStorage();
        $(this).trigger('change');
    },

    remove: function(whoreId) {
        // удалить модель в массиве моделей
        // синхронизировать массив моделей с localStorage
        this.models = _.filter(this.models, function(whore) {
            return whore.id !== whoreId;
        })
        this.setModelsToStorage();
        $(this).trigger('change');
    },

    get: function(whoreId) {
        // вернуть модель из массива моделей
        return _.findWhere(this.models, {id: whoreId});
    },

    setModelsToStorage: function() {
        // сохранить массив моделей в localStorage
        localStorage.setItem('whores', JSON.stringify(this.models));
    },

    getModelsFromStorage: function() {
        // вернуть массив моделей из localStorage или [] если такой записи нет
        return JSON.parse(localStorage.getItem('whores')) || [];
    },

    init: function() {
        // проинизиализировать this.models значением из localStorage
        this.models = this.getModelsFromStorage();
    }
};
whores.init();

var listView = {
    // шаблонная функция из шаблонной строки
    tmplFn: doT.template($('#whore-template').html()),

    // коллекция
    collection: whores,

    subscribe: function() {
        $('.button-add').on('click', function() {
            formView.showAddForm();
        });

        $('.whore-list').on('click', function(e) {
            if (e.target.classList.contains('whore')) {
                console.log('Клик по девочке');
                var whore = this.collection.get(e.target.id);
                formView.showEditRemoveForm(whore);
            }
        }.bind(this));

        $(this.collection).on('change', function() {
            this.render();
        }.bind(this));
    },

    render: function() {
        $('.whore-list').html(this.tmplFn(this.collection.models));
    },

    init: function() {
        this.render();
        this.subscribe();
    }
};
listView.init();

var formView = {
    // поля формы
    $fields: $('input[type="text"]'),

    // коллекция
    collection: whores,

    showAddForm: function() {
        this.showForm();
        $('.button-save').addClass('visible');
        $('.button-update').removeClass('visible');
        $('.button-delete').removeClass('visible');
    },

    showEditRemoveForm: function(whore) {
        this.showForm();
        $('.button-save').removeClass('visible');
        $('.button-update').addClass('visible');
        $('.button-delete').addClass('visible');

        $('.id').val(whore.id);
        $('.name').val(whore.name);
        $('.lastName').val(whore.lastName);
        $('.alias').val(whore.alias);
        $('.age').val(whore.age);
        $('.price').val(whore.price);
    },

    getFormData: function() {
        return {
            id: $('.id').val() === '' ? this.getUniqId() : $('.id').val(),
            name: $('.name').val(),
            lastName: $('.lastName').val(),
            alias: $('.alias').val(),
            age: $('.age').val(),
            price: $('.price').val()
        }
    },

    getUniqId: function() {
        return '_' + Math.random().toString(36).substr(2, 9);
    },

    isFormDataValid: function() {
        return _.every(this.$fields.toArray(), function(field) {
            return field.value !== '';
        })
    },

    highlightFields: function() {
        _.each(this.$fields.toArray(), function(field) {
            if (field.value !== '') {
                field.classList.remove('invalid');
            } else {
                field.classList.add('invalid');
            }
        })
    },

    resetForm: function() {
        $('input').val('').removeClass('invalid');
    },

    hideForm: function() {
        $('form').removeClass('visible');
    },

    showForm: function() {
        $('form').addClass('visible');
    },

    subscribe: function() {
        $('.button-save').on('click', this.handleSave.bind(this));
        $('.button-update').on('click', this.handleUpdate.bind(this));
        $('.button-delete').on('click', this.handleDelete.bind(this));
    },

    handleUpdate: function() {
        if (this.isFormDataValid()) {
            this.collection.update(this.getFormData());
            this.resetForm();
            this.hideForm();
        } else {
            this.highlightFields();
        }
    },

    handleDelete: function() {
        this.collection.remove($('.id').val());
        this.resetForm();
        this.hideForm();
    },

    handleSave: function() {
        if (this.isFormDataValid()) {
            this.collection.add(this.getFormData());
            this.resetForm();
            this.hideForm();
        } else {
            this.highlightFields();
        }
    },

    init: function() {
        this.subscribe();
    }
};
formView.init();
