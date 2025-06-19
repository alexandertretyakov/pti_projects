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

            this.posts = [];
            this.isDataLoaded = false;
        },

        render() {
            this._render();

            this.fetchData()
                .then((posts) => {
                    this.posts = posts;
                    this.isDataLoaded = true;
                    this._render();
                });

            return this;
        },

        _render() {
            this.$el.html(this.tmpl('st-module-8', {
                posts: this.posts,
                isDataLoaded: this.isDataLoaded
            }));
        },

        fetchData() {
            const postsEndpoint = config.get('dynamicTags.DTAG_ST_MODULE_8_POSTS_ENDPOINT') || '';
            const imagesEndpoint = config.get('dynamicTags.DTAG_ST_MODULE_8_IMAGES_ENDPOINT') || '';
            const listURL = [postsEndpoint, imagesEndpoint];
            const requests = listURL.map(url => fetch(url));

            return Promise.all(requests)
                .then((responses) => {
                    const rqt = responses.map((response) => response.json());

                    return Promise.all(rqt);
                })
                .then(([posts, {message: images}]) => {
                    return this.parse(posts, images);
                });
        },

        parse(posts, images) {
            return posts
                .slice(0, 6)
                .map((post, idx) => {
                    return {
                        ...post,
                        image: images[idx]
                    };
                });
        }
    }, {
        nameOfReplacers: [
            'ST_MODULE_8'
        ]
    });
});
