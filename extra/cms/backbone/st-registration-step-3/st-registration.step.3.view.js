define(function(require, exports, module) {
    'use strict';

    var Form = require('class/form.class');
    var BaseReplacerView = require('common/base.replacer.view');
    var userValidationConfig = require('modules/user/user.validation.config');

    module.exports = BaseReplacerView.extend({
        render: function() {
            var tmplName = 'st-registration-step-3.' + (this.state === 'login' ? 'login' : 'forgot');
            this.$el.html(this.tmpl(tmplName).replace());

            this.form = new Form(this.$('form'), {
                validationConfig: userValidationConfig()
            });

            return this;
        },

        state: 'login',

        events: {
            'click .fn-reset-password': 'toggleState',
            'click .fn-back-to-login': 'toggleState'
        },

        toggleState(e) {
            e.preventDefault();
            this.state = this.state === 'login' ? 'forgot' : 'login';

            this.render();
        }

    }, {
        nameOfReplacers: [
            'ST_REGISTRATION_STEP_3'
        ]
    });
});