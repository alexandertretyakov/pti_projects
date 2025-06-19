define(function(require, exports, module) {
    'use strict';

    const $ = require('j');
    const config = require('config');
    const BaseReplacerView = require('common/base.replacer.view');

    module.exports = BaseReplacerView.extend({

        /**
         * @override
         */
        initialize: function() {
            BaseReplacerView.prototype.initialize.apply(this, arguments);

            this.breeds = [];
            this.isDataLoaded = false;
            this.breedNames = this.getBreedNames();
        },

        events: {
            'click .fn-accordionItem': 'onAccordionItemClick'
        },

        render() {
            this._render();
            this.fetchData()
                .then((breeds) => {
                    this.isDataLoaded = true;
                    this.breeds = breeds;

                    this._render();
            });

            return this;
        },

        _render() {
            this.$el.html(this.tmpl('st-module-9', {
                isDataLoaded: this.isDataLoaded,
                breeds: this.breeds
            }));
        },

        getBreedNames() {
            const breeds = [
                'hound',
                'borzoi',
                'boxer',
                'bulldog',
                'chihuahua',
                'corgi'
            ];
            const excludedBreedsDtag = config.get('dynamicTags.DTAG_ST_MODULE_9_EXCLUDED_BREEDS') || '';
            const excludedBreeds = excludedBreedsDtag
                .split(',')
                .map((breed) => breed.trim())
                .filter(Boolean);

            const isBreedValid = (breed) => {
                return !excludedBreeds.includes(breed);
            };

            return breeds.filter(isBreedValid);
        },

        async fetchData() {
            const fetchPromises = this.breedNames.map(breed => fetch(`https://dog.ceo/api/breed/${breed}/images`));

            const responses = await Promise.all(fetchPromises);
            const jsonPromises = responses.map((response) => response.json());
            const breeds = await Promise.all(jsonPromises);

            return this.parse(breeds);
        },

        parse(breeds) {
            return breeds.map((breed, index) => {
                return {
                    name: this.breedNames[index],
                    images: breed.message.slice(0, 9)
                };
            });
        },

        onAccordionItemClick(e) {
            this.$('.fn-accordionItemBody').removeClass('active');

            $(e.currentTarget).find('.fn-accordionItemBody').addClass('active');
        }
    }, {
        nameOfReplacers: [
            'ST_MODULE_9'
        ]
    });
});
