define(function(require, exports, module) {
    'use strict';

    const BaseView = require('common/base.view');

    module.exports = BaseView.extend({

        className: 'popup_name_ololo',

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
            this.$el.html(this.tmpl('st-module-18.popup', this.getTemplateData()));
            this.$el.appendTo('#application');

            return this;
        },

        getTemplateData() {
            return this.options;
        }
    });
});
