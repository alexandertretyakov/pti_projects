define(function(require, exports, module) {
    'use strict';

    var BaseView = require('common/base.view');
    var core = require('core');

    module.exports = BaseView.extend({
        initialize: function() {
            this.listenTo(this.collection, 'all', function() {
                this.render();
            });

            this.render();
        },

        events: {
            'click .button-add': 'handleClickOnButtonAdd',
            'click .whore': 'handleClickOnWhore'
        },

        render: function() {
            this.$('.whore-list').html(this.tmpl('st-hos.list', this.collection.toJSON()).replace());
        },

        handleClickOnButtonAdd: function() {
            core.trigger('hos:clickOnButtonAdd');
        },

        handleClickOnWhore: function(e) {
            var whore = this.collection.get(e.target.dataset.id);
            core.trigger('hos:clickOnWhore', whore);
        }
    });
});
