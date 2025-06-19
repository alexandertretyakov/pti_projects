define(function(require, exports, module) {
    'use strict';

    var BaseReplacerView = require('common/base.replacer.view');
    var PopupView = require('modules/popup/popup.view');

    module.exports = BaseReplacerView.extend({
        render() {
            this.$el.html(this.tmpl('st-popup'));
            return this;
        },

        events: {
            'click button': 'showPopUp'
        },

        getOptionsById(id) {
            if (id === 'one') {
               return {
                   data: {
                       title: 'Popup-1',
                       content: 'Content-1'
                   },
                   extraClassName: 'popup_name_one',
                   onClose: () => console.log(1)
               };
            } else if (id === 'two') {
                return {
                    data: {
                        title: 'Popup-2',
                        content: 'Content-2'
                    },
                    extraClassName: 'popup_name_two',
                    onClose: () => console.log(2)
                };
            } else if (id === 'three') {
                return {
                    data: {
                        title: 'Popup-3',
                        content: 'Content-3'
                    },
                    extraClassName: 'popup_name_three',
                    onClose: () => console.log(3)
                };
            }
        },

        showPopUp: function(e) {
            const options = this.getOptionsById(e.target.dataset.id);

            new PopupView(options);
        }
    }, {
        nameOfReplacers: [
            'ST_POPUP'
        ]
    });
});