define(function(require, exports, module) {
    'use strict';

    var BaseReplacerView = require('common/base.replacer.view');
    var GamingHistoryCollection = require('replacers/psk-account-theme/st-gaming-history/st-gaming-history.collection');

    module.exports = BaseReplacerView.extend({
        initialize: function() {
            this.gamingHistoryCollection = new GamingHistoryCollection;

            this.gamingHistoryCollection.fetch();
            this.listenTo(this.gamingHistoryCollection, 'update', this.renderItems);
        },

        render: function() {
            this.$el.html(this.tmpl('st-gaming-history'));

            return this;
        },

        renderItems() {
            this.$('.field-response').html(this.tmpl('st-gaming-item', {
                transactions: this.gamingHistoryCollection.toJSON()
            }));
        }
    }, {
        nameOfReplacers: [
            'ST_GAMING-HISTORY'
        ]
    });
});