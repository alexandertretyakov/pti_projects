define(function(require, exports, module) {
    'use strict';

    var BaseReplacerView = require('common/base.replacer.view');

    module.exports = BaseReplacerView.extend({
        render: function() {
            this.$el.html(this.tmpl('st-registration.step.2').replace());

            return this;
        }
    }, {
        nameOfReplacers: [
            'ST_REGISTRATION_STEP_2'
        ]
    });
});