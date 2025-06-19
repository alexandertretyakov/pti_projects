define(function(require, exports, module) {
    'use strict';

    const formatter = require('common/formatter');
    const BaseView = require('common/base.view');

    module.exports = BaseView.extend({

        className: 'popup_name_users',

        /**
         * @override
         */
        initialize: function(options = {}) {
            BaseView.prototype.initialize.apply(this, arguments);

            this.options = options;
            this.render();
        },

        events: {
            'click .fn-close' : 'close'
        },

        render() {
            this.$el.html(this.tmpl('st-module-18.user-popup', this.getTemplateData()));
            this.$el.appendTo('#application');

            return this;
        },

        getTemplateData() {
            return {
                user: this.options.user,
                formatDate: this.formatDate
            };
        },

        formatDate(date) {
            return formatter.date(date, '%m/%d/%Y');
        }
    });
});
