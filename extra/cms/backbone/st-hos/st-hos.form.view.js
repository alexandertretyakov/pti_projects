define(function(require, exports, module) {
    'use strict';

    var BaseView = require('common/base.view');
    var core = require('core');

    module.exports = BaseView.extend({
        initialize: function() {
            this.listenTo(core, {
                'hos:clickOnButtonAdd': this.showAddForm,
                'hos:clickOnWhore': this.showEditRemoveForm
            });
        },

        $fields: function() {
            return this.$('input[type="text"]');
        },

        events: {
            'click .button-save': 'handleSave',
            'click .button-delete': 'handleDelete',
            'click .button-update': 'handleUpdate'
        },

        showAddForm: function() {
            this.resetForm();

            this.$('form').css('display', 'block');
            this.$('.button-delete').css('display', 'none');
            this.$('.button-update').css('display', 'none');
            this.$('.button-save').css('display', 'block');
        },

        highlightFields: function() {
            this.$fields().forEach(function(field) {
                field.style.border = field.value === '' ? '2px solid red' : '';
            });
        },

        isFormDataValid: function() {
            return this.$fields().every(function(field) {
                return field.value !== '';
            });
        },

        getUniqId: function() {
            return '_' + Math.random().toString(36).substr(2, 9);
        },

        getFormData: function() {
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
            this.$fields().forEach(function(field) {
                field.style.border = '';
            });
        },

        handleSave: function() {
            if (this.isFormDataValid()) {
                this.collection.add(this.getFormData());
                this.resetForm();
                this.showInfo({
                    content: this.translate('playtech.mobile.system.hos.message.addHos')
                });
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
            this.collection.add(whore, {merge: true});
            this.resetForm();
        }
    });
});