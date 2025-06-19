define(function(require, exports, module) {
    'use strict';

    const BaseReplacerView = require('common/base.replacer.view');

    module.exports = BaseReplacerView.extend({

        events: {
            'input input': 'onChange'
        },

        render() {
            this.$el.html(this.tmpl('st-module-2'));

            return this;
        },

        onChange(e) {
            this.$('.output')[0].innerText = e.currentTarget.value;
        }
    }, {
        nameOfReplacers: [
            'ST_MODULE_2'
        ]
    });
});
