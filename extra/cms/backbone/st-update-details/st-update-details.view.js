define(function(require, exports, module) {
    'use strict';

    var BaseReplacerView = require('common/base.replacer.view');
    var server = require('server');
    var Form = require('class/form.class');

    module.exports = BaseReplacerView.extend({
        render: function() {
            this.fetchUserInfo().done((response) => this.renderUserInfo(response.data));

            return this;
        },

        renderUserInfo(userInfo) {
            this.$el.html(this.tmpl('st-update-details', userInfo).replace());
            this.form = new Form(this.$('form'));
        },

        events: {
            'click .fn-submit': 'onSubmit'
        },

        fetchUserInfo() {
            return server.send({
                ID: 31082,
                responses: [31083, 31084],
                requestType: 'marked',
                requestedPlayerData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 44, 45, 46, 47, 48, 49, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 111, 115, 182, 160, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 89, 104, 123, 145, 164, 153, 162, 106, 172],
                returnContactPreferences: true
            });
        },

        updateUserInfo(data) {
            return server.send({
                ID: 33045,
                description: 'Update player info',
                responses: [33006, 31008],
                dataMap: {...data}
            });
        },

        updateUserInfoSuccess() {
            this.showInfo({
                content: this.translate('playtech.mobile.system.update-details.form.message.nicknameChangedSuccessfully')
            });
        },

        updateUserInfoFail() {
            this.showInfo({
                content: this.translate('playtech.mobile.system.update-details.form.message.nicknameChangedError')
            });
        },

        onSubmit() {
            let data = this.form.data();

            this.updateUserInfo(data)
                .done(() => this.updateUserInfoSuccess())
                .fail(() => this.updateUserInfoFail());
        }
    }, {
        nameOfReplacers: [
            'ST_UPDATE_DETAILS'
        ]
    });
});