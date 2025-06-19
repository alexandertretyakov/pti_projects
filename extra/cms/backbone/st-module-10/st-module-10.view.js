define(function(require, exports, module) {
    'use strict';

    const _ = require('underscore');
    const config = require('config');
    const BaseReplacerView = require('common/base.replacer.view');
    const device = require('util/device.util');

    module.exports = BaseReplacerView.extend({

        /**
         * @override
         */
        initialize: function() {
            BaseReplacerView.prototype.initialize.apply(this, arguments);

            this.isDataLoaded = false;
            this.games = [];
        },

        render() {
            this._render();
            this.getDataGames()
                .then((games) => {
                    this.isDataLoaded = true;
                    this.games = games;

                    this._render();
                });

            return this;
        },

        _render() {
            this.$el.html(this.tmpl('st-module-10', {
                isDataLoaded: this.isDataLoaded,
                games: this.games
            }));
        },

        async getDataGames() {
            const existingGamesURL = '/library/st-module-10/existingGames.json';
            const playerBonusesURL = '/library/st-module-10/getBonusesResponse.json';

            const fetchPromises = [existingGamesURL, playerBonusesURL].map((url) => fetch(url));
            const responses = await Promise.all(fetchPromises);
            const jsonPromises = responses.map((response) => response.json());
            const data = await Promise.all(jsonPromises);

            return this.parse(data);
        },

        parse(data) {
            const [existingGames, getBonusesResponse] = data;
            const gamesCount = this.getGamesCount();
            const removeDuplicatesFilter = (item, pos, self) => self.indexOf(item) === pos;

            return getBonusesResponse.data.bonusTemplates
                .filter((bonusTemplate) => bonusTemplate.playType === 'freespins')
                .map((bonusTemplate) => bonusTemplate.gamingContext.selectedGames)
                .flat()
                .filter(removeDuplicatesFilter)
                .filter((gameCode) => existingGames[gameCode])
                .map((gameCode) => existingGames[gameCode])
                .slice(0, gamesCount);
        },

        getGamesCount() {
            const gamesCountDtag = config.get('dynamicTags.DTAG_ST_MODULE_10_GAMES_COUNT') || '';
            const gamesCount = gamesCountDtag
                .split(',')
                .map((num) => num.trim())
                .filter(Boolean)
                .map(Number);
            const [countOnDesktop = 8, countOnMobile = 20] = gamesCount;

            return device.formFactor === 'desktop' ? countOnDesktop : countOnMobile;
        }
    }, {
        nameOfReplacers: [
            'ST_MODULE_10'
        ]
    });
});
