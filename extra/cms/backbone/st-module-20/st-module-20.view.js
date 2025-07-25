define(function(require, exports, module) {
    'use strict';

    const THREE = require('three');
    const BaseReplacerView = require('common/base.replacer.view');

    module.exports = BaseReplacerView.extend({

        render() {
            this.$el.html(this.tmpl('st-module-20'));

            this.drawOnCanvas();

            return this;
        },

        drawOnCanvas() {
            const canvas = this.$('canvas')[0];
            const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

            const fov = 75;
            const aspect = 2; // the canvas default
            const near = 0.1;
            const far = 5;
            const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
            camera.position.z = 2;

            const scene = new THREE.Scene();

            {
                const color = 0xFFFFFF;
                const intensity = 3;
                const light = new THREE.DirectionalLight(color, intensity);
                light.position.set(-1, 2, 4);
                scene.add(light);
            }

            const boxWidth = 1;
            const boxHeight = 1;
            const boxDepth = 1;
            const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

            function makeInstance(geometry, color, x) {

                const material = new THREE.MeshPhongMaterial({ color });

                const cube = new THREE.Mesh(geometry, material);
                scene.add(cube);

                cube.position.x = x;

                return cube;

            }

            const cubes = [
                makeInstance(geometry, 0x44aa88, 0),
                makeInstance(geometry, 0x8844aa, -2),
                makeInstance(geometry, 0xaa8844, 2)
            ];

            function render(time) {

                time *= 0.001; // convert time to seconds

                cubes.forEach((cube, ndx) => {

                    const speed = 1 + ndx * 0.1;
                    const rot = time * speed;
                    cube.rotation.x = rot;
                    cube.rotation.y = rot;

                });

                renderer.render(scene, camera);

                requestAnimationFrame(render);

            }

            requestAnimationFrame(render);
        }
    }, {
        nameOfReplacers: [
            'ST_MODULE_20'
        ]
    });
});
