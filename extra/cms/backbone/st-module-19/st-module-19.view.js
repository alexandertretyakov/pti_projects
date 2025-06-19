define(function(require, exports, module) {
    'use strict';

    const Pixi = require('pixi');
    const config = require('config');
    const BaseReplacerView = require('common/base.replacer.view');

    module.exports = BaseReplacerView.extend({

        render() {
            this.appendCanvas();

            return this;
        },

        async appendCanvas() {
            const fbImage = `${location.origin}/${config.get('themeName')}/images/referafriend.social.facebook.png`;

            // Create a new application
            const app = new Pixi.Application();

            // Initialize the application
            await app.init({ background: '#1099bb', resizeTo: this.el });

            // Append the application canvas to the view
            this.el.appendChild(app.canvas);

            // Load the fb texture
            const texture = await Pixi.Assets.load(fbImage);

            // Create a fb Sprite
            const fb = new Pixi.Sprite(texture);

            // Center the sprite's anchor point
            fb.anchor.set(0.5);

            // Move the sprite to the center of the screen
            fb.x = app.screen.width / 2;
            fb.y = app.screen.height / 2;

            // Opt-in to interactivity
            fb.eventMode = 'static';

            // Shows hand cursor
            fb.cursor = 'pointer';

            const onFbClick = () => {
                fb.scale.x *= 1.25;
                fb.scale.y *= 1.25;
            };

            // Pointers normalize touch and mouse (good for mobile and desktop)
            // Alternatively, use the mouse & touch events:
            // sprite.on('click', onClick); // mouse-only
            // sprite.on('tap', onClick); // touch-only
            fb.on('pointerdown', onFbClick);

            // Append the fb(sprite) in stage
            app.stage.addChild(fb);

            // Listen for animate update
            app.ticker.add((time) => {
                // Just for fun, let's rotate mr rabbit a little.
                // * Delta is 1 if running at 100% performance *
                // * Creates frame-independent transformation *
                fb.rotation += 0.1 * time.deltaTime;
            });
        }
    }, {
        nameOfReplacers: [
            'ST_MODULE_19'
        ]
    });
});
