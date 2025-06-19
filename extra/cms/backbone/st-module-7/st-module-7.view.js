define(function(require, exports, module) {
    'use strict';

    const config = require('config');
    const BaseReplacerView = require('common/base.replacer.view');

    module.exports = BaseReplacerView.extend({

        /**
         * @override
         */
        initialize: function() {
            BaseReplacerView.prototype.initialize.apply(this, arguments);

            const badWordsDtag = config.get('dynamicTags.DTAG_ST_MODULE_7_BAD_WORDS') || '';

            this.comments = null;
            this.commentsEndpoint = config.get('dynamicTags.DTAG_ST_MODULE_7_COMMENTS_ENDPOINT') || '';
            this.badWords = badWordsDtag
                .split(',')
                .map((badWord) => badWord.trim())
                .filter((badWord) => badWord !== '');
        },

        render() {
            this._render();

            this.fetchComments()
                .then((comments) => {
                    this.comments = this.parse(comments);
                    this._render();
                });

            return this;
        },

        fetchComments() {
            return fetch(this.commentsEndpoint)
                .then((res) => res.json());
        },

        _render() {
            this.$el.html(this.tmpl('st-module-7', {
                comments: this.comments
            }));
        },

        parse(comments) {
            const isCommentValid = (comment) => {
                return !this.badWords.some((word) => {
                    return comment.body.includes(word);
                });
            };
            const addDateToComment = (comment) => {
                return {
                    ...comment,
                    date: this.getRandomDate()
                };
            };

            return comments
                .filter(isCommentValid)
                .map(addDateToComment);
        },

        getRandomDate() {
            const to = new Date().getTime();
            const randomTime = Math.round(Math.random() * to);
            const randomDate = new Date(randomTime);

            return `${randomDate.getFullYear()}-${randomDate.getMonth()}-${randomDate.getDate()}`;
        }
    }, {
        nameOfReplacers: [
            'ST_MODULE_7'
        ]
    });
});
