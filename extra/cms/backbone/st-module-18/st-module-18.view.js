define(function(require, exports, module) {
    'use strict';

    const config = require('config');
    const _ = require('underscore');
    const PopupView = require('replacers/psk-account-theme/st-module-18/st-module-18.popup.view');
    const UserPopupView = require('replacers/psk-account-theme/st-module-18/st-module-18.user-popup.view');
    const BaseReplacerView = require('common/base.replacer.view');

    module.exports = BaseReplacerView.extend({

        /**
         * @override
         */
        initialize: function() {
            BaseReplacerView.prototype.initialize.apply(this, arguments);

            this.users = null;
            this.pagination = [];
            this.currentPage = 1;
            this.usersPerPage = Playtech.Variables.stModule18QuantityUsersOnPage ?? 4;
        },

        events: {
            'click .fn-avatar': 'onAvatarClick',
            'click .fn-view-profile': 'onViewProfileClick',
            'click .fn-previous-page': 'onPreviousPageClick',
            'click .fn-page': 'onPageClick',
            'click .fn-next-page': 'onNextPageClick'
        },

        render() {
            this._render();

            this.getUsers().then((users) => {
                this.users = this.parseUsers(users);
                this.pagination = this.getPagination(this.users, this.usersPerPage);
                this._render();
            });

            return this;
        },

        _render() {
            this.$el.html(this.tmpl('st-module-18', this.getTemplateData()));

            console.log(this.users);
        },

        getTemplateData() {
            return {
                users: this.users === null ? null : this.getUsersByPage(),
                pagination: this.pagination,
                currentPage: this.currentPage
            };
        },

        getPagination(users, usersPerPage) {
            const pagesCount = Math.ceil(users.length / usersPerPage);

            return Array.from({ length: pagesCount }, (v, idx) => idx + 1);
        },

        async getUsers() {
            const usersCount = config.get('dynamicTags.DTAG_ST_MODULE_18_USERS_COUNT') || '40';
            const usersEndpoint = `https://randomuser.me/api/?results=${usersCount}`;

            const res = await fetch(usersEndpoint);

            return await res.json();
        },

        parseUsers(users) {
            const onlineStatuses = {
                1: 'online',
                2: 'offline',
                3: 'away',
                4: 'busy'
            };

            return users.results
                .map((user) => ({
                    ...user,
                    onlineStatus: onlineStatuses[_.random(1, 4)],
                    uid: _.uniqueId()
                }));
        },

        getUsersByPage() {
            return this.users.slice(
                (this.currentPage - 1) * this.usersPerPage,
                (this.currentPage - 1) * this.usersPerPage + this.usersPerPage
            );
        },

        onAvatarClick() {
            new PopupView({
                title: 'Custom popup title',
                content: 'Custom popup content',
                showCloseBtn: false
            });
        },

        onViewProfileClick(e) {
            const uid = e.currentTarget.dataset.uid;
            const user = this.users.find((_user) => _user.uid === uid);

            new UserPopupView({ user });
        },

        onPreviousPageClick() {
            if (this.currentPage !== 1) {
                this.currentPage = this.currentPage - 1;
            } else {
                this.currentPage = this.pagination.length;
            }

            this._render();
        },

        onPageClick(e) {
            this.currentPage = Number(e.currentTarget.innerText);

            this._render();
        },

        onNextPageClick() {
            if (this.currentPage !== this.pagination.length) {
                this.currentPage = this.currentPage + 1;
            } else {
                this.currentPage = 1;
            }

            this._render();
        }
    }, {
        nameOfReplacers: [
            'ST_MODULE_18'
        ]
    });
});
