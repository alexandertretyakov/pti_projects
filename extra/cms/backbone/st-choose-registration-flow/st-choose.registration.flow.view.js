define(function(require, exports, module) {
    'use strict';

    var BaseReplacerView = require('common/base.replacer.view');

    module.exports = BaseReplacerView.extend({
        render: function() {
            this.$el.html(this.tmpl('st-choose.registration.flow').replace());

            return this;
        }
    }, {
        nameOfReplacers: [
            'ST_CHOOSE_REGISTRATION_FLOW'
        ]
    });
});