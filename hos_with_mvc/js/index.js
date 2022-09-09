var whores = {
    models: [],

    add: function(whore) {
        this.models.push(whore);
        $(this).trigger('change');
    },

    get: function(whoreId) {
        return _.findWhere(this.models, {id: whoreId});
    },

    update: function(updatedWhore) {
        this.models.forEach(function(whore) {
            if (whore.id === updatedWhore.id) {
                _.extend(whore, updatedWhore);
            }
        });
        $(this).trigger('change');
    },

    remove: function(whoreId) {
        this.models = this.models.filter(function(whore) {
            return whore.id !== whoreId;
        });
        $(this).trigger('change');
    },

    setModelsToStorage: function() {
        localStorage.setItem('whores', JSON.stringify(this.models));
    },

    getModelsFromStorage: function() {
        return JSON.parse(localStorage.getItem('whores')) || [];
    },

    init: function() {
        this.models = this.getModelsFromStorage();

        $(this).on('change', function() {
            this.setModelsToStorage();
        }.bind(this));
    }
};
whores.init();

var listView = {
    collection: whores,

    tmplFn: doT.template($('.whoresTemplate').html()),

    subscribe: function() {
        $('.whore').on('click', this.clickOnGirl.bind(this));
    },

    clickOnGirl: function(e) {
        var whore = this.collection.get(e.target.dataset.id);
        formView.showEditRemoveForm(whore);
    },

    render: function() {
        $('.whore-list').html(this.tmplFn(this.collection.models));
        this.subscribe();
    },

    init: function() {
        this.render();

        $(this.collection).on('change', function() {
            this.render();
        }.bind(this));
    }
};
listView.init();

var formView = {
    collection: whores,

    $fields: $('input[type="text"]'),

    subscribe: function() {
        $('.button-add').on('click', this.showAddForm.bind(this));
        $('.button-save').on('click', this.handleSave.bind(this));
        $('.button-delete').on('click', this.handleDelete.bind(this));
        $('.button-update').on('click', this.handleUpdate.bind(this));
    },

    showAddForm: function() {
        $('form').addClass('visible');
        $('.button-save').addClass('visible');
        $('.button-delete').removeClass('visible');
        $('.button-update').removeClass('visible');
    },

    handleSave: function() {
        if (this.isFormDataValid()) {
            this.highlightingFields();
            this.collection.add(this.getFormData());
            this.closeTheForm();
        } else {
            this.highlightingFields();
        }
    },

    handleDelete: function() {
        this.collection.remove($('.column-right form .id').val());
        this.closeTheForm();
    },

    handleUpdate: function() {
        if (this.isFormDataValid()) {
            this.highlightingFields();
            this.collection.update(this.getFormData());
            this.closeTheForm();
        } else {
            this.highlightingFields();
        }
    },

    closeTheForm: function() {
        this.$fields.val('');
        $('form').removeClass('visible');
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

    getUniqId: function() {
        return '_' + Math.random().toString(36).substr(2, 9);
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

    isFormDataValid: function() {
        return this.$fields.toArray().every(function(field) {
            return field.value !== '';
        });
    },

    highlightingFields: function() {
        this.$fields.each(function(index, field) {
            if (field.value === '') {
                field.classList.add('invalid');
            } else {
                field.classList.remove('invalid');
            }
        });
    },

    init: function() {
        this.subscribe();
    }
};
formView.init();