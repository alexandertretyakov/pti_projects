define(function(require, exports, module) {
    'use strict';

    const _ = require('underscore');
    const formatter = require('common/formatter');
    const $ = require('j');
    const BaseReplacerView = require('common/base.replacer.view');

    module.exports = BaseReplacerView.extend({

        /**
         * @override
         */
        initialize: function() {
            BaseReplacerView.prototype.initialize.apply(this, arguments);

            this.isSwearOn = false;
            this.comments = null;
            this.badWords = null;
            this.categories = null;
            this.activeCategory = null;
            this.uniqId = Date.now();
        },

        events: {
            'click .fn-category': 'onCategoryClick',
            'change .fn-swear-toggler-input': 'onSwearTogglerClick'
        },

        render() {
            this.getData()
                .then((data) => {
                    const {comments, badWords, categories} = this.parse(data);

                    this.comments = comments;
                    this.badWords = badWords;
                    this.categories = categories;

                    this._render();
                });

            return this;
        },

        _render() {
            this.$el.html(this.tmpl('st-module-17', {
                categories: this.categories,
                isSwearOn: this.isSwearOn,
                uniqId: this.uniqId
            }));

            this.renderComments();
        },

        renderComments() {
            this.$('.comments').html(this.tmpl('st-module-17-comments', {
                comments: this.getFilteredComments()
            }));
        },

        async getData() {
            const badWordsURL = '/library/st-module-17/bad_words.json';
            const commentsURL = '/library/st-module-17/comments.json';

            const fetchPromises = [badWordsURL, commentsURL].map((url) => fetch(url));
            const responses = await Promise.all(fetchPromises);
            const jsonPromises = responses.map((response) => response.json());

            return await Promise.all(jsonPromises);
        },

        parse(data) {
            let [badWords, comments] = data;
            const categories = _.map(
                _.countBy(comments, (comment) => comment.rank),
                (quantityOfComments, code) => ({
                    code,
                    quantityOfComments
                })
            );

            comments = comments.map((comment) => ({
                ...comment,
                date: formatter.date(comment.date, '%m.%d.%Y')
            }));

            return {
                comments,
                badWords,
                categories
            };
        },

        getFilteredComments() {
            const {comments, badWords, isSwearOn, activeCategory} = this;
            let _comments = [...comments];
            const swearImageTag = '<img src="/library/st-module-17/swear.png">';

            if (activeCategory !== null) {
                _comments = _comments.filter((comment) => comment.rank === activeCategory);
            }

            if (isSwearOn) {
                _comments = _comments.map((comment) => {
                    return {
                        ...comment,
                        text: badWords.reduce((memo, badWord) => {
                            return memo.replaceAll(badWord, swearImageTag);
                        }, comment.text)
                    };
                });
            }

            return _comments;
        },

        onCategoryClick(e) {
            const targetRank = e.currentTarget.dataset.rank;

            if (targetRank === this.activeCategory) {
                this.activeCategory = null;
                this.$('.category').removeClass('active');
            } else {
                this.activeCategory = targetRank;
                this.$('.category').removeClass('active');
                $(e.currentTarget).addClass('active');
            }

            this.renderComments();
        },

        onSwearTogglerClick() {
            this.isSwearOn = this.$('.fn-swear-toggler-input')[0].checked;

            this.renderComments();
        }
    }, {
        nameOfReplacers: [
            'ST_MODULE_17'
        ]
    });
});
