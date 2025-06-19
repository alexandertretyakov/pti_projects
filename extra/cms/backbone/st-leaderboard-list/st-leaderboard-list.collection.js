define(function(require, exports, module) {
    'use strict';

    var BaseCollection = require('common/base.collection');
    var server = require('server');

    module.exports = BaseCollection.extend({
        sync: function(method, collection, options) {
            if (method === 'read') {
                return server.send({
                    ID: 71010,
                    clientPlatform: 'web',
                    clientType: 'casino',
                    description: 'Subscribe Leaderboards Summary notifications',
                    game: undefined,
                    notificationFieldsWhitelist: [
                        'leaderboardId',
                        'customAttributes',
                        'status',
                        'registrationStatus',
                        'rank',
                        'displayName',
                        'eventCount',
                        'leaderboardRules',
                        'gamingContextRules',
                        'participantsCount',
                        'joined'
                    ],
                    responseFieldsWhitelist: undefined,
                    responses: [71011, 71012, 34002]
                }).done(options.success).fail(options.error);
            }
        },

        parse: function(response) {
            return response.data.leaderboards || [];
        },

        getActiveLeaderboardsCount() {
            return this.getActiveLeaderboards().length;
        },

        getUpcomingLeaderboardsCount() {
            return this.getUpcomingLeaderboards().length;
        },

        getActiveLeaderboards() {
            return this.filter(function(item) {
                return item.get('status') === 'ACTIVE';
            });
        },

        getUpcomingLeaderboards() {
            return this.filter(function(item) {
                return item.get('status') === 'NOT_STARTED';
            });
        },

        getLeaderboardsByStatus(status) {
            var leaderboards = this.toJSON();

            return leaderboards.filter(function(item) {
                if (status === 'active') {
                    return item.status === 'ACTIVE';
                }

                if (status === 'upcoming') {
                    return item.status === 'NOT_STARTED';
                }
            });
        }
    });
});