define(function(require, exports, module) {
    'use strict';

    const config = require('config');
    const BaseReplacerView = require('common/base.replacer.view');

    module.exports = BaseReplacerView.extend({

        render() {
            this.$el.html(this.tmpl('st-module-3', this.getTemplateData()));

            return this;
        },

        getTemplateData() {
            const spinnerCount = Number(config.get('dynamicTags.DTAG_ST_MODULE_3_SPINNER_COUNT')) || 1;
            const spinners = new Array(spinnerCount).fill('ololo');

            return {
                spinners
            };
        }
    }, {
        nameOfReplacers: [
            'ST_MODULE_3'
        ]
    });
});
