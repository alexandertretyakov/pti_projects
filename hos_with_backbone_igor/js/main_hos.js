var Whores = Backbone.Collection.extend({
    initialize: function () {
        this.reset(this.getModelsFromStorage());
        this.setModelsToStorage();

        this.on('all', function () {
            this.setModelsToStorage();
        });
    },

    setModelsToStorage: function () {
        localStorage.setItem('whores', JSON.stringify(this.toJSON()));
    },

    getModelsFromStorage: function () {
        return JSON.parse(localStorage.getItem('whores')) || [];
    }
});

var whores = new Whores;

var ListView = Backbone.View.extend({
    tmplFn: doT.template($('#whore-template').html()),

    el: '#list-view',

    initialize: function () {
        this.listenTo(this.collection, 'all', function () {
            this.renderWhores();
        });

        this.renderWhores();
    },

    events: {
        'click .button-add': 'handleClickOnButtonAdd',
        'click .whore': 'handleClickOnWhore'
    },

    handleClickOnButtonAdd: function () {
        formView.showAddForm();
    },

    handleClickOnWhore: function (e) {
        var whore = this.collection.get(e.target.dataset.id);
        formView.showEditRemoveForm(whore);
    },

    renderWhores: function () {
        this.$('.whore-list').html(this.tmplFn(this.collection.toJSON()));
    }
});

var listView = new ListView({
    collection: whores
});

var FormView = Backbone.View.extend({
    $fields: this.$('input[type="text"]'),

    el: '#form-view',

    showAddForm: function () {
        this.resetForm();

        this.$('form').css('display', 'block');
        this.$('.button-delete').css('display', 'none');
        this.$('.button-update').css('display', 'none');
        this.$('.button-save').css('display', 'block');
    },

    highlightFields: function () {
        this.$fields.each(function(index, field) {
            field.style.border = field.value === '' ? '2px solid red' : '';
        });
    },

    isFormDataValid: function() {
        return this.$fields.toArray().every(function(field) {
            return field.value !== ''
        });
    },

    getUniqId: function () {
        return '_' + Math.random().toString(36).substr(2, 9);
    },

    getFormData: function () {
        var id = this.$('.id').val();

        return {
            id: id === '' ? this.getUniqId() : id,
            name: this.$('.name').val(),
            lastName: this.$('.lastName').val(),
            alias: this.$('.alias').val(),
            age: this.$('.age').val(),
            price: this.$('.price').val()
        };
    },

    showEditRemoveForm: function(whore) {
        this.resetForm();

        whore = whore.toJSON();

        this.$('.id').val(whore.id);
        this.$('.name').val(whore.name);
        this.$('.lastName').val(whore.lastName);
        this.$('.alias').val(whore.alias);
        this.$('.age').val(whore.age);
        this.$('.price').val(whore.price);

        this.$('form').css('display', 'block');
        this.$('.button-delete').css('display', 'inline-block');
        this.$('.button-update').css('display', 'block');
        this.$('.button-save').css('display', 'none');
    },

    resetForm: function() {
        this.$('input').val('');
    },

    events: {
        'click .button-save': 'handleSave',
        'click .button-delete': 'handleDelete',
        'click .button-update': 'handleUpdate'
    },

    handleSave: function() {
         if(this.isFormDataValid()) {
            this.collection.add(this.getFormData());
            this.resetForm();
         } else {
            this.highlightFields();
         }
    },

    handleDelete: function() {
        var id = this.$('.id').val();
        this.collection.remove(id);
        this.resetForm();
    },


    handleUpdate: function() {
        var whore = this.getFormData();
        this.collection.add(whore, {merge:true});
        this.resetForm();
    }
});

var formView = new FormView({
    collection: whores
});
