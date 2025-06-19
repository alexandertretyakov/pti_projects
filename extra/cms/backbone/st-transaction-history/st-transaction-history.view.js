define(function(require, exports, module) {
    'use strict';

    var BaseReplacerView = require('common/base.replacer.view');
    var TransactionsCollection = require('replacers/psk-account-theme/st-transaction-history/st-transaction-history.collection');
    var TransactionsModel = require('replacers/psk-account-theme/st-transaction-history/st-transaction-history.model');
    var Form = require('class/form.class');

    module.exports = BaseReplacerView.extend({
        initialize: function() {
            this.transactionsCollection = new TransactionsCollection;
            this.transactionsModel = new TransactionsModel;

            this.transactionsCollection.fetch({
                stateFilters: this.transactionsModel.get('stateFilters')
            });
            this.listenTo(this.transactionsCollection, 'update', this.renderData);
        },

        render: function() {
            this.$el.html(this.tmpl('st-transaction-history').replace());
            this.form = new Form(this.$('form'));

            return this;
        },

        renderData() {
            this.$('.table-content').html(this.tmpl('st-transaction-history-item', {
                transactions: this.transactionsCollection.toJSON()
            }).replace());
        },

        events: {
            'click input[type="radio"]': 'toggleState'
        },

        toggleState(e) {
            this.transactionsModel.set('stateFilters', e.target.value);
            this.transactionsCollection.fetch({
                stateFilters: this.transactionsModel.get('stateFilters')
            });
        }
    }, {
        nameOfReplacers: [
            'ST_TRANSACTION_HISTORY'
        ]
    });
});