define(function(require, exports, module) {
    'use strict';

    var BaseReplacerView = require('common/base.replacer.view');
    var _ = require('underscore');

    module.exports = BaseReplacerView.extend({
        words: [
            'red',
            'green',
            'yellow',
            'black',
            'orange',
            'blue',
            'grey',
            'silver',
            'tomato'
        ],

        events: {
            'submit form': 'submitOnForm'
        },

        currentWord: null,

        doneWords: [],

        setCurrentWord() {
            this.currentWord = this.words.pop();
        },

        submitOnForm(e) {
            e.preventDefault();
            if (this.$('input').val() === this.currentWord) {
                this.doneWords.push(this.currentWord);
                this.setCurrentWord();
                this.render();
            } else {
                console.log('bad boy');
            }
        },

        render() {
            this.setCurrentWord();
            this.$el.html(this.tmpl('st-words', {
                currentWord: _.shuffle(this.currentWord.split('')).join(''),
                doneWords: this.doneWords
            }));
            this.subscribe();

            return this;
        }
    }, {
        nameOfReplacers: [
            'ST_WORDS'
        ]
    });
});