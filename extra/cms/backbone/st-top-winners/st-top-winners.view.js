define(function(require, exports, module) {
    'use strict';

    var BaseReplacerView = require('common/base.replacer.view');
    var TopWinnersCollection = require('replacers/psk-casino-theme/st-top-winners/st-top-winners.collection');
    var TopWinnersModel = require('replacers/psk-casino-theme/st-top-winners/st-top-winners.model');
    var $ = require('j');

    module.exports = BaseReplacerView.extend({
        initialize: function() {
            this.topWinnersCollection = new TopWinnersCollection;
            this.topWinnersModel = new TopWinnersModel;

            this.topWinnersCollection.fetch();
            this.listenTo(this.topWinnersCollection, 'update', this.renderItems);
        },

        render: function() {
            this.$el.html(this.tmpl('st-top-winners'));

            return this;
        },

        renderItems() {
            this.$('.st-top-winners-table-content').html(this.tmpl('st-top-winners-item', {
                winners: this.topWinnersCollection.toJSON(),
                replaceSymbolInAmount: this.replaceSymbolInAmount,
                hideSymbolsOfNickname: this.hideSymbolsOfNickname
            }));
        },

        events: {
            'click .st-top-winners-filters button': 'toggleState'
        },

        toggleState(e) {
            $('.st-top-winners-filters button').removeClass('active');
            $(e.target).addClass('active');
            // this.topWinnersModel.set('stateFilters', e.target.dataset.id);
        },

        replaceSymbolInAmount(amount) {
            return amount.replace('.', ',');
        },

        hideSymbolsOfNickname(nickname) {
            return `${nickname.slice(0, -3)}***`;
        }
    }, {
        nameOfReplacers: [
            'ST_TOP_WINNERS'
        ]
    });
});