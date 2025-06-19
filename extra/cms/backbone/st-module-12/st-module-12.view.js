define(function(require, exports, module) {
    'use strict';

    const _ = require('underscore');
    const device = require('util/device.util');
    const BaseReplacerView = require('common/base.replacer.view');

    module.exports = BaseReplacerView.extend({

        /**
         * @override
         */
        initialize: function() {
            BaseReplacerView.prototype.initialize.apply(this, arguments);

            this.circle = {
                radius: 50,
                color: 'blue',
                offsetX: 0,
                offsetY: 0
            };
            this.urlParams = window.location.search
                .slice(1)
                .split('&')
                .map((el) => el.split('='))
                .reduce((memo, pair) => {
                    const [key, value] = pair;

                    return {
                        ...memo,
                        [key]: value
                    };
                }, {});

            _.extend(this.circle, this.urlParams);
        },

        events: {
            'click .fn-circle': 'onCircleClick'
        },

        render() {
            this.$el.html(this.tmpl('st-module-12', this.circle));

            return this;
        },

        onCircleClick() {
            if (device.formFactor !== 'desktop') {
                this.$('.circle').addClass('hidden');
            }
        }
    }, {
        nameOfReplacers: [
            'ST_MODULE_12'
        ]
    });
});
