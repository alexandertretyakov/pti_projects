define(function(require, exports, module) {
    'use strict';

    const $ = require('j');
    const BaseReplacerView = require('common/base.replacer.view');

    module.exports = BaseReplacerView.extend({

        events: {
            'input input': 'onChange'
        },

        onChange: function(e) {
            e.target.value = e.target.value.replace(/[^\d]/g, '').slice(0, 6);
        },

        render() {
            this.$el.html(this.tmpl('st-module-15'));

            return this;
        }
    }, {
        nameOfReplacers: [
            'ST_MODULE_15'
        ]
    });
});
