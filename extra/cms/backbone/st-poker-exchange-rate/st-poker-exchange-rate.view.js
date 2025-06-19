define(function(require, exports, module) {
    'use strict';

    var BaseReplacerView = require('common/base.replacer.view');

    module.exports = BaseReplacerView.extend({
        render: function() {
            this.$el.html(this.tmpl('st-poker-exchange-rate'));
            this.$('.poker-exchange-rate-table-content').html(this.tmpl('st-poker-exchange-rate-items'));

            return this;
        }
    }, {
        nameOfReplacers: [
            'ST_POKER_EXCHANGE_RATE'
        ]
    });
});