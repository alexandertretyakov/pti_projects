define(function(require, exports, module) {
    'use strict';

    var BaseCollection = require('common/base.collection');
    var server = require('server');
    var config = require('config');
    var user = require('user');

    module.exports = BaseCollection.extend({
        sync: function(method, collection, options) {
            if (method === 'read') {
                return server.send({
                    ID: 35859,
                    description: 'Get top winners',
                    responses: [35860, 35861],
                    casino: config.get('casinoName'),
                    topLength: 30,
                    currency: user.get('currencyCode'),
                    startDate : '2017-01-01 12:00:00.000',
                    endDate: '2023-11-27 10:22:09.287'
                }).done(options.success).fail(options.error);
            }
        },

        parse: function(response) {
            console.log('++++++++++++++++++++', response.data.topWinners);
            return response.data.topWinners || [];
        }
    });
});