define(function(require, exports, module) {
    'use strict';

    const BaseReplacerView = require('common/base.replacer.view');

    module.exports = BaseReplacerView.extend({

        /**
         * @override
         */
        initialize: function() {
            BaseReplacerView.prototype.initialize.apply(this, arguments);

            this.debt = 19252128599192.75;

            this.intervalId = setInterval(() => {
                this.debt += 2128599192.75;
                this.render();
            }, 1000);
        },

        events: {
            'click .fn-stop': 'onButtonClick'
        },

        render() {
            this.$el.html(this.tmpl('st-module-13', this.getTemplateData()));

            return this;
        },

        getTemplateData() {
            return {
                date: tmpl.formatter.date(new Date, '%m/%d/%Y'),
                debt: tmpl.formatter.formatCurrency(this.debt, {
                    currencyCode: 'USD',
                    decSeparator: '.',
                    precision: 2,
                    symbolAtTheLeft: true,
                    thSeparator: ','
                })
            };
        },

        onButtonClick(e) {
            clearInterval(this.intervalId);
            e.currentTarget.setAttribute('disabled', '');
        }
    }, {
        nameOfReplacers: [
            'ST_MODULE_13'
        ]
    });
});
