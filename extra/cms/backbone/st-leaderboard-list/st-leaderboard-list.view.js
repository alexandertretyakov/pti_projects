define(function(require, exports, module) {
    'use strict';

    var BaseReplacerView = require('common/base.replacer.view');
    var LeaderboardListModel = require('replacers/psk-casino-theme/st-leaderboard-list/st-leaderboard-list.model');
    var LeaderboardListCollection = require('replacers/psk-casino-theme/st-leaderboard-list/st-leaderboard-list.collection');
    var $ = require('j');

    module.exports = BaseReplacerView.extend({
        initialize: function() {
            this.model = new LeaderboardListModel;
            this.collection = new LeaderboardListCollection;

            this.listenTo(this.model, 'change', this.renderLeaderboards);
            this.listenTo(this.collection, 'update', this.renderLeaderboards);
        },

        events: {
            'click .leaderboard-filter .button': 'onTabClick',
        },

        render: function() {
            this.$el.html(this.tmpl('st-leaderboard-list'));
            this.collection.fetch();

            return this;
        },

        renderLeaderboards() {
            this.$('.leaderboard-items').html(this.tmpl('st-leaderboard-list-items', this.getTemplateData()));
            this.updateStats();
        },

        getTemplateData() {
            var status = this.model.get('activeTab');

            return {
                leaderboards: this.collection.getLeaderboardsByStatus(status)
            };
        },

        onTabClick(e) {
            this.model.set('activeTab', $(e.target).data().activeTab);
            this.$('.leaderboard-filter .button.active').removeClass('active');
            $(e.target).addClass('active');
        },

        updateStats() {
            this.$('.counter-active')[0].innerText = `(${this.collection.getActiveLeaderboardsCount()})`;
            this.$('.counter-upcoming')[0].innerText = `(${this.collection.getUpcomingLeaderboardsCount()})`;
        }
    }, {
        nameOfReplacers: [
            'ST_LEADERBOARD_LIST'
        ]
    });
});