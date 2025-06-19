define(function(require, exports, module) {
    'use strict';

    var BaseCollection = require('common/base.collection');
    var server = require('server');
    var formatter = require('common/formatter');

    module.exports = BaseCollection.extend({
        comparator: function(model) {
            var userActionDate = model.attributes.actions[1].time;

            return -Number(formatter.parseImsDate(userActionDate));
        },

        parse: function(response) {
            var bonuses = response.data.bonuses || [];

            bonuses.forEach(function(bonus) {
                bonus.bonusName = bonus.marketingName;
            });

            return bonuses;
        },

        sync: function(method, collection, options) {
            if (method === 'read') {
                var fromDate = new Date();
                var toDate = new Date(fromDate);
                fromDate.setFullYear(fromDate.getFullYear() - 10);

                return server.send({
                    ID: 31085,
                    description: 'Get bonuses',
                    responses: [31086, 31087],
                    limit: 450,
                    issuedAfterDate: formatter.getDateForIms(fromDate),
                    issuedBeforeDate: formatter.getDateForIms(toDate),
                    statusFilter: 0,
                    returnBonusTemplateDetails: true,
                    returnBonusStats: false,
                    returnGamingContexts: false,
                    returnGameWeightsConfigurations: false,
                    returnWageringCoefficients: false
                }).done(options.success).fail(options.error);
            }
        }
    });
});