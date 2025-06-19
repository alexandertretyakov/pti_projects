define(function(require, exports, module) {
    'use strict';

    var BaseReplacerView = require('common/base.replacer.view');
    var $ = require('j');

    class Covid {
        constructor() {
            this.el = document.createElement('div');
            this.el.classList.add('covid');
            this.el.style.top = Math.round(Math.random() * 780) + 'px';
            this.el.style.left = Math.round(Math.random() * 780) + 'px';
        }
    }

    module.exports = BaseReplacerView.extend({
        intervalId: null,

        createdCovidCount: 0,

        killedCovidCount: 0,

        events: {
            'click .start': 'startGame',
            'click .pause': 'pauseGame',
            'click .scene': 'onSceneClick'
        },

        startGame() {
            this.intervalId = setInterval(this.addEnemy.bind(this), 1000);
        },

        pauseGame() {
            clearInterval(this.intervalId);
        },

        onSceneClick(e) {
            if (e.target.classList.contains('covid')) {
                e.target.remove();
                this.killedCovidCount++;
                this.updateInfo();
            }
        },

        updateInfo() {
            this.$createdCovidCountInfo.text(this.createdCovidCount);
            this.$remaingCovidCountInfo.text(this.createdCovidCount - this.killedCovidCount);
            this.$killedCovidCountInfo.text(this.killedCovidCount);
        },

        addEnemy() {
            this.$('.scene').append(new Covid().el);
            this.createdCovidCount++;
            this.updateInfo();
        },

        render: function() {
            this.$el.html(this.tmpl('st-covid'));
            this.cacheDOMElements();

            return this;
        },

        cacheDOMElements: function() {
            this.$createdCovidCountInfo = this.$('.createdCovidCountInfo');
            this.$remaingCovidCountInfo = this.$('.remaingCovidCountInfo');
            this.$killedCovidCountInfo = this.$('.killedCovidCountInfo');
            this.$startButton = this.$('.start');
            this.$pauseButton = this.$('.pause');
            this.$scene = this.$('.scene');
        }
    }, {
        nameOfReplacers: [
            'ST_COVID'
        ]
    });
});