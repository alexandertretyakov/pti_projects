define(function(require, exports, module) {
    'use strict';

    const $ = require('j');
    const BaseReplacerView = require('common/base.replacer.view');

    module.exports = BaseReplacerView.extend({

        events: {
            'click button': 'onClick'
        },

        render() {
            this.$el.html(this.tmpl('st-module-1'));

            return this;
        },

        onClick(e) {
            const r = (Math.round(Math.random() * 255));
            const g = (Math.round(Math.random() * 255));
            const b = (Math.round(Math.random() * 255));
            const backgroundColor = `rgb(${r}, ${g}, ${b})`;

            $(e.currentTarget).css('backgroundColor', backgroundColor);
        }
    }, {
        nameOfReplacers: [
            'ST_MODULE_1'
        ]
    });
});