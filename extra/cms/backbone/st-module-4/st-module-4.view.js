define(function(require, exports, module) {
    'use strict';

    const config = require('config');
    const BaseReplacerView = require('common/base.replacer.view');

    module.exports = BaseReplacerView.extend({

        render() {
            this.fetchUsers();

            return this;
        },

        _render(users) {
            this.$el.html(this.tmpl('st-module-4', {
                users
            }));
        },

        fetchUsers() {
            const usersEndPoint = config.get('dynamicTags.DTAG_ST_MODULE_4_USERS_ENDPOINT') || '';

            fetch(usersEndPoint)
                .then((res) => res.json())
                .then((users) => this._render(users.slice(0, 8)));
        }
    }, {
        nameOfReplacers: [
            'ST_MODULE_4'
        ]
    });
});
