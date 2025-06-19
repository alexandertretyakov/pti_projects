define(function(require, exports, module) {
    'use strict';

    var BaseCollection = require('common/base.collection');
    var server = require('server');

    module.exports = BaseCollection.extend({
        sync: function(method, collection, options) {
            var stateFilters = options.stateFilters;
            var extraOptions = stateFilters === 'all' ? null : {type: stateFilters};

            if (method === 'read') {
                return server.send({
                    ID: 35610,
                    responses: [35611, 35612],
                    description: 'Get Detailed Transaction History',
                    startDate: '2023-02-16 11:06:23.000',
                    endDate: '2023-02-19 11:06:23.000',
                    ...extraOptions,
                    cancellations: true,
                    pagingRequestParams: {
                        pageId: null,
                        pageSize: 20,
                        returnAllPageIds: true,
                        returnTotalCount: true
                    }
                }).done(options.success).fail(options.error);
            }
        },

        parse: function(response) {
            return response.data.transactions || [];
        }
    });
});