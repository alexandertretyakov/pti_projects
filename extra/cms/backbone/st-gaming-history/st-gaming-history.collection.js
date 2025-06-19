define(function(require, exports, module) {
    'use strict';

    var BaseCollection = require('common/base.collection');
    var server = require('server');

    module.exports = BaseCollection.extend({
        sync: function(method, collection, options) {
            if (method === 'read') {
                return server.send({
                    ID: 32012,
                    responses: [32013, 32014],
                    description: 'Get Balance History',
                    startDate: '2023-02-07 12:06:23.000',
                    endDate: '2023-02-14 12:06:23.000',
                    ignorePlayerViewConf: true,
                    transactionGroups: ['game'],
                    pagerRequest: {
                        pageSize: 60,
                        returnTotalCount: false
                    }
                }).done(options.success).fail(options.error);
            }
        },

        parse: function(response) {
            return response.data.walletTransactions || [];
        }
    });
});