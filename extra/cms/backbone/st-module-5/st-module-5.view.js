define(function(require, exports, module) {
    'use strict';

    const config = require('config');
    const BaseReplacerView = require('common/base.replacer.view');

    module.exports = BaseReplacerView.extend({

        render() {
            this.fetchDogs().then((dogs) => this._render(dogs));

            return this;
        },

        _render(dogs) {
            this.$el.html(this.tmpl('st-module-5', {
                dogs
            }));
        },

        async fetchDogs() {
            const dogsEndpoint = config.get('dynamicTags.DTAG_ST_MODULES_5_DOGS_ENDPOINT') || '';

            const res = await fetch(dogsEndpoint);
            const dogs = await res.json();

            return dogs.message.slice(0, 10);
        }
    }, {
        nameOfReplacers: [
            'ST_MODULE_5'
        ]
    });
});
