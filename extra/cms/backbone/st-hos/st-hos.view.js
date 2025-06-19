define(function(require, exports, module) {
    'use strict';

    var BaseReplacerView = require('common/base.replacer.view');
    var HosListView = require('replacers/psk-account-theme/st-hos/st-hos.list.view');
    var HosFormView = require('replacers/psk-account-theme/st-hos/st-hos.form.view');
    var HosCollection = require('replacers/psk-account-theme/st-hos/st-hos.collection');

    module.exports = BaseReplacerView.extend({
        initialize: function() {
            BaseReplacerView.prototype.initialize.apply(this, arguments);
            this.hosCollection = new HosCollection;
        },

        render: function() {
            this.$el.html(this.tmpl('st-hos').replace());
            this.hosListView = new HosListView({
                collection: this.hosCollection,
                el: this.$('.module-list')[0]
            });
            this.hosFormView = new HosFormView({
                collection: this.hosCollection,
                el: this.$('.module-form')[0]
            });

            return this;
        }
    }, {
        nameOfReplacers: [
            'ST_HOS'
        ]
    });
});