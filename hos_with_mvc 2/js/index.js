var whores = {
    models: [],

    add: function(whore) {
        this.models.push(whore);
        this.setModelsToStorage();
    },

    update: function(updatedWhore) {
        this.models.forEach(function(whore) {
            if (whore.id === updatedWhore.id) {
                _.extend(whore, updatedWhore);
            }
        });
        this.setModelsToStorage();
    },

    remove: function(whoreId) {
        this.models = this.models.filter(function(whore) {
            return whore.id !== whoreId;
        });
        this.setModelsToStorage();
    },

    get: function(whoreId) {
        return _.findWhere(this.models, {id: whoreId});
    },

    setModelsToStorage: function() {
        localStorage.setItem('whores', JSON.stringify(this.models));
    },

    getModelsFromStorage: function() {
        return JSON.parse(localStorage.getItem('whores')) || [];
    },

    init: function() {
        this.models = this.getModelsFromStorage();
    }
};
whores.init();

var listView = {
    // шаблон списка
    tmplFn: doT.template($('#whore-template').html()),

    // коллекция моделей
    collection: whores,

    subscribeAddClick: function() {
        $('.button-add').on('click', function() {
            formView.showAddForm();
        });
    },

    subscribeWhoreClick: function() {
        $('.whore').on('click', function(e) {
            formView.showEditRemoveForm(this.collection.get(e.target.id));
        }.bind(this));
    },

    render: function() {
        $('.whore-list').html(this.tmplFn(this.collection.models));
        this.subscribeWhoreClick();
    },

    init: function() {
        this.subscribeAddClick();
        this.render();
    }
};
listView.init();

var formView = {
    // поля формы
    $fields: $('input[type="text"]'),

    // коллекция моделей
    collection: whores,

    showAddForm: function() {
        $('form').addClass('visible');
        $('.button-update').removeClass('visible');
        $('.button-delete').removeClass('visible');
        $('.button-save').addClass('visible');

        this.resetForm();
    },

    showEditRemoveForm: function(whore) {
        $('form').addClass('visible');
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
            id: $('.id').val() !== '' ? $('.id').val() : this.getUniqId(),
            name: $('.name').val(),
            lastName: $('.lastName').val(),
            alias: $('.alias').val(),
            age: $('.age').val(),
            price: $('.price').val()
        };
    },

    getUniqId: function() {
        return '_' + Math.random().toString(36).substr(2, 9);
    },

    isFormDataValid: function() {
        return this.$fields.toArray().every(function(field) {
            return field.value !== '';
        });
    },

    highlightFields: function() {
        this.$fields.each(function(index, field) {
            $(field).val() === '' ? $(field).addClass('invalid') : $(field).removeClass('invalid');
        });
    },

    resetForm: function() {
        this.$fields.val('');
        $('.id').val('');
        this.$fields.removeClass('invalid');
    },

    subscribe: function() {
        $('.button-save').on('click', this.handleSave.bind(this));
        $('.button-update').on('click', this.handleUpdate.bind(this));
        $('.button-delete').on('click', this.handleDelete.bind(this));
    },

    handleUpdate: function() {
        if (this.isFormDataValid()) {
            let updatedWhore = this.getFormData();
            this.collection.update(updatedWhore);
            listView.render();
            this.resetForm();
            $('form').removeClass('visible');
        } else {
            this.highlightFields();
        }
    },

    handleDelete: function() {
        if (this.isFormDataValid()) {
            let whoreId = $('.id').val();
            this.collection.remove(whoreId)
            listView.render();
            this.resetForm();
            $('form').removeClass('visible');
        } else {
            this.highlightFields();
        }
    },

    handleSave: function() {
        if (this.isFormDataValid()) {
            this.collection.add(this.getFormData());
            listView.render();
            this.resetForm();
            $('form').removeClass('visible');
        } else {
            this.highlightFields();
        }
    },

    init: function() {
        this.subscribe();
    }
};
formView.init();
