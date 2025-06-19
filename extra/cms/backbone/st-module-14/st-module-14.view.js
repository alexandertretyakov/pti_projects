define(function(require, exports, module) {
    'use strict';

    const BaseReplacerView = require('common/base.replacer.view');

    module.exports = BaseReplacerView.extend({
        render() {
            this.$el.html(this.tmpl('st-module-14'));

            return this;
        }
    }, {
        nameOfReplacers: [
            'ST_MODULE_14'
        ]
    });
});
