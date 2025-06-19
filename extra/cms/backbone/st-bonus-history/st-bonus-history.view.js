define(function(require, exports, module) {
    'use strict';

    var BaseReplacerView = require('common/base.replacer.view');
    var BonusesCollection = require('replacers/psk-account-theme/st-bonus-history/st-bonus-history.collection');
    var $ = require('j');

    module.exports = BaseReplacerView.extend({
        initialize: function() {
            this.bonusesCollection = new BonusesCollection;
            this.bonusesCollection.fetch();
            this.listenTo(this.bonusesCollection, 'all', this.render);
        },

        render: function() {
            this.$el.html(this.tmpl('st-bonus-history', {
                bonuses: this.bonusesCollection.toJSON()
            }));

            return this;
        },

        events: {
            'click .fn-bonus-info-header': 'handleClickOnBonus'
        },

        handleClickOnBonus(e) {
            var $target = $(e.currentTarget);

            if ($target.hasClass('open')) {
                $target.removeClass('open');
            } else {
                this.$('.bonus-info-header').removeClass('open');
                $target.addClass('open');
            }
        }
    }, {
        nameOfReplacers: [
            'ST_BONUS_HISTORY'
        ]
    });
});