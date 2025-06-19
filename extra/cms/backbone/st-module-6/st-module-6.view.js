define(function(require, exports, module) {
    'use strict';

    const config = require('config');
    const BaseReplacerView = require('common/base.replacer.view');

    module.exports = BaseReplacerView.extend({

        events: {
            'click button': 'clickOnButton'
        },

        render() {
            this.$el.html(this.tmpl('st-module-6'));

            return this;
        },

        renderCat(catURL) {
            this.$('.fn-catWrapper').html(this.tmpl('st-module-6-cat', {
                catURL
            }));
        },

        clickOnButton() {
            const catEndpoint = config.get('dynamicTags.DTAG_ST_MODULE_6_CAT_ENDPOINT') || '';

            fetch(catEndpoint)
                .then((res) => res.json())
                .then((cat) => this.renderCat(cat[0].url));
        }
    }, {
        nameOfReplacers: [
            'ST_MODULE_6'
        ]
    });
});
