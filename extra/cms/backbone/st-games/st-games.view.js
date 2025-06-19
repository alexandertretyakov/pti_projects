define(function(require, exports, module) {
    'use strict';

    var BaseReplacerView = require('common/base.replacer.view');
    var config = require('config');
    var _ = require('underscore');
    var $ = require('j');
    var PopupView = require('modules/popup/popup.view');

    module.exports = BaseReplacerView.extend({
        render: function() {
            var games = _.toArray(config.get('gamesConfiguration'));
            console.log(games, '++++++++++++++++++++++++++++++++++');
            this.gamesCollection = games;

            this.$el.html(this.tmpl('st-games'));
            this.$('.st-games-container').html(this.tmpl('st-games-items', games));

            return this;
        },

        events: {
            'click .fn-btn-info': 'openGamePopup',
            'click html:not(.desktop) .fn-game': 'openGamePopup'
        },

        openGamePopup(e) {
            var gameCode = $(e.currentTarget).data().gameCode;
            var game = _.findWhere(this.gamesCollection, {gameCode: gameCode});

            new PopupView({
                data: {
                    title: game.name,
                    content: this.tmpl('st-games-popup', game),
                    buttons: false
                },
                extraClassName: 'popup_name_game'
            });
        }
    }, {
        nameOfReplacers: [
            'ST_GAMES'
        ]
    });
});