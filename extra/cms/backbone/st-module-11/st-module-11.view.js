define(function(require, exports, module) {
    'use strict';

    const BaseReplacerView = require('common/base.replacer.view');

    module.exports = BaseReplacerView.extend({

        /**
         * @override
         */
        initialize: function() {
            BaseReplacerView.prototype.initialize.apply(this, arguments);

            this.telephoneNumber = '+38 (096) 111-22-33';
            this.isTelephoneNumberHidden = false;
        },

        events: {
            'click .fn-btn': 'onButtonClick'
        },

        render() {
            this.$el.html(this.tmpl('st-module-11', {
                isTelephoneNumberHidden: this.isTelephoneNumberHidden,
                telephoneNumber: this.isTelephoneNumberHidden ? this.telephoneNumber.replace(/\d/g, '*') : this.telephoneNumber
            }));

            return this;
        },

        onButtonClick() {
            this.isTelephoneNumberHidden = !this.isTelephoneNumberHidden;

            this.render();
        }
    }, {
        nameOfReplacers: [
            'ST_MODULE_11'
        ]
    });
});
