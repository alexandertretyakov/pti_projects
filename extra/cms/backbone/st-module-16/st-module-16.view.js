define(function(require, exports, module) {
    'use strict';

    const BaseReplacerView = require('common/base.replacer.view');

    module.exports = BaseReplacerView.extend({

        /**
         * @override
         */
        initialize: function() {
            BaseReplacerView.prototype.initialize.apply(this, arguments);

            this.lpIsHolding = false;
            this.lpIntervalId = null;
            this.lpProgress = 0;
            this.lpButton = null;
            this.count = 0;
        },

        events: {
            'mousedown .fn-btn': 'lpOnMouseDown',
            'touchstart .fn-btn': 'lpOnMouseDown',

            'mouseup .fn-btn': 'lpOnMouseUp',
            'mouseleave .fn-btn': 'lpOnMouseUp',
            'touchend .fn-btn': 'lpOnMouseUp',
            'touchmove .fn-btn': 'lpOnMouseUp'
        },

        render() {
            this.$el.html(this.tmpl('st-module-16', {
                count: this.count
            }));

            this.lpButton = this.$('.fn-btn')[0];

            return this;
        },

        lpOnMouseDown() {
            this.lpIsHolding = true;
            this.lpButton.classList.add('mProgress');
            if (this.lpIntervalId === null) {
                this.lpIntervalId = setInterval(this.lpFrame.bind(this), 40); // 25 fps
            }
        },

        lpOnMouseUp(e) {
            e.preventDefault(); // prevent context menu on mobile
            this.lpIsHolding = false;
        },

        lpFrame() {
            if (!this.lpIsHolding && this.lpProgress === 0) { // hack for tap
                this.lpProgress = 0.00000001; // avoid infinite loop
                this.lpButton.style.backgroundPositionX = `98%`;
                return;
            }

            if (this.lpIsHolding) {
                this.lpProgress += 1.33; // interpolate(3000ms/(25fps*3s), [0, 3000ms], [0, 100%])
            } else {
                this.lpProgress -= 2.66;
            }

            if (this.lpProgress <= 0) {
                this.lpProgress = 0;
                this.lpButton.classList.remove('mProgress');
                this.lpButton.style.backgroundPositionX = `100%`;
                clearInterval(this.lpIntervalId);
                this.lpIntervalId = null;
            } else if (this.lpProgress >= 100) {
                this.lpProgress = 0;
                this.lpButton.classList.remove('mProgress');
                this.lpButton.style.backgroundPositionX = `100%`;
                clearInterval(this.lpIntervalId);
                this.lpIntervalId = null;
                this.onButtonClick(); // lp callback
            } else {
                // updateProgressBar(progress)
                this.lpButton.style.backgroundPositionX = `${100 - this.lpProgress}%`;
            }
        },

        onButtonClick() {
            this.$('.fn-count').html(++this.count);
        },

        /**
         * @override
         */
        close() {
            clearInterval(this.lpIntervalId);

            BaseReplacerView.prototype.close.apply(this, arguments);
        }
    }, {
        nameOfReplacers: [
            'ST_MODULE_16'
        ]
    });
});
