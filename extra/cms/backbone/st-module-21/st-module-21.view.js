define(function(require, exports, module) {
    'use strict';

    const Chart = require('chart');
    const BaseReplacerView = require('common/base.replacer.view');

    module.exports = BaseReplacerView.extend({

        render() {
            this.$el.html(this.tmpl('st-module-21'));

            this.drawOnCanvases();

            return this;
        },

        drawOnCanvases() {
            const barCanvas = this.$('.bar')[0];
            const doughnutCanvas = this.$('.doughnut')[0];

            new Chart(barCanvas, {
                type: 'bar',
                data: {
                    labels: ['HTML', 'CSS', 'JS', 'Python', 'Shell'],
                    datasets: [{
                        label: 'Показатели в %',
                        data: [10, 20, 30, 30, 10],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(54, 162, 235, 0.2)'
                        ],
                        borderColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',
                            'rgb(255, 205, 86)',
                            'rgb(75, 192, 192)',
                            'rgb(54, 162, 235)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'График 1'
                        }
                    }
                }
            });

            new Chart(doughnutCanvas, {
                type: 'doughnut',
                data: {
                    labels: ['HTML', 'CSS', 'JS', 'Python', 'Shell'],
                    datasets: [{
                        label: 'Показатели в %',
                        data: [10, 20, 30, 30, 10],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(54, 162, 235, 0.2)'
                        ],
                        borderColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',
                            'rgb(255, 205, 86)',
                            'rgb(75, 192, 192)',
                            'rgb(54, 162, 235)'
                        ],
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'График 2'
                        }
                    }
                }
            });
        }
    }, {
        nameOfReplacers: [
            'ST_MODULE_21'
        ]
    });
});
