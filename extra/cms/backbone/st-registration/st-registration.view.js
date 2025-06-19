define(function(require, exports, module) {
    'use strict';

    var BaseReplacerView = require('common/base.replacer.view');
    var Form = require('class/form.class');
    var userValidationConfig = require('modules/user/user.validation.config');
    var config = require('config');

    module.exports = BaseReplacerView.extend({
        render: function() {
            this.$el.html(this.tmpl('st-registration', this.getTemplateData()).replace());
            this.form = new Form(this.$('form'), {
                validationConfig: userValidationConfig()
            });

            return this;
        },

        getTemplateData: function() {
            return {
                hideMarketingArea1: config.get('stRegistrationHideMarketingArea1'),
                hideMarketingArea2: config.get('dynamicTags.DTAG_ST_REGISTRATION_HIDE_MARKETING_AREA_2') === 'true',
                hideMarketingArea3: this.options.params[0] === 'hideMarketingArea3'
            };
        }
    }, {
        nameOfReplacers: [
            'ST_REGISTRATION'
        ]
    });
});