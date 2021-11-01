var app = React.createElement('div', null,
    React.createElement('header', null,
        React.createElement('a', {
            className: 'logo',
            href: 'index.htm'
        }, React.createElement('img', {
                src: 'images/logo.gif',
                alt: 'Логотип компании'
            })
            ),
        React.createElement('div', {
            className: 'telephone'
        },
            'Позвоните нам',
            React.createElement('br'),
            '(312) 65-33-22',
            React.createElement('br'),
            '(312) 65-33-11')
        ),

    React.createElement('main', null,
        React.createElement('div', {
            className: 'our-company'
        },
            React.createElement('h1'), null,
                React.createElement('span', {
                    className: 'first-letter'
                },
                    'О'),
                ' нашей ',
                React.createElement('span', {
                    className: 'first-letter'
                },
                    'К'),
                'омпании',
            React.createElement('p', null,
                'Totam rem aperiam ase eaque ab illo' ,
                React.createElement('a', {
                    href: 'index.htm'
                },
                    'inve ntore'),
                ' ativert artasert architeo bamolu bertas ptatem, quia voluptas sit' +
                ' aspernater ur aut odit aut fugit sed equuntur magni dolore.'
            ),
            React.createElement('p', null,
                'Do you have a decorating idea you would love to share with the world? TELL US ABOUT IT!'
            ),
            React.createElement('p', null,
                'Do you have a decorating idea you would love to share with the world? TELL US ABOUT IT!'
            ),
            React.createElement('p', null,
                'Totam rem aperiam ase eaque ab illo ',
                React.createElement('a', {
                    href: 'index.htm'
                },
                    'inve ntore'
                ),
                ' ativert artasert architeo bamolu bertas ptatem, quia voluptas' +
                ' sit aspernater ur aut odit aut fugit sed equuntur magni dolore.'
            )

        ),

        React.createElement('div', {
            className: 'services'
        },
            React.createElement('div', {
                className: 'gallery'
            },
                React.createElement('h4', null,
                    React.createElement('span', {
                        className: 'first-letter'
                    },
                        'Г'),
                    'алерея'
                ),
                React.createElement('img', {
                    src: 'images/room_1.jpg',
                    alt: 'Комната 1'
                }),
                React.createElement('img', {
                    src: 'images/room_2.jpg',
                    alt: 'Комната 2'
                }),
                React.createElement('img', {
                    src: 'images/room_3.jpg',
                    alt: 'Комната 3'
                }),
                React.createElement('img', {
                    src: 'images/room_4.jpg',
                    alt: 'Комната 4'
                })
            ),

            React.createElement('div', {
                className: 'our-offer'
            },
                React.createElement('h4', null,
                    React.createElement('span', {
                        className: 'first-letter'
                    },
                        'Н'
                    ),
                    'аше предложение'
                ),
                React.createElement('img', {
                    src: 'images/tree.jpg',
                    alt: 'Деревья'
                }),
                React.createElement('p', null,
                    React.createElement('em', null,
                        'Ante '
                    ),
                    React.createElement('b', null,
                        'ipsum'
                    ),
                    ' prkisn faucibus orci luctus',
                    React.createElement('br'),
                    ' etas ultrices posuere cubili Curae;',
                    React.createElement('br'),
                    ' Suspendisse sollicitudin velit sed leo.'
                )
            ),
            React.createElement('div', {
                className: 'our-services'
            },
                React.createElement('h4', null,
                    React.createElement('span', {
                        className: 'first-letter'
                    },
                        'Н'
                    ),
                    'аши услуги'
                ),
                React.createElement('ul', null,
                    React.createElement('li', null,
                        'dolore sit aas',
                        React.createElement('br'),
                        ' jertasero'
                    ),
                    React.createElement('li', null,
                        'avertas jase ferase'
                    ),
                    React.createElement('li', null,
                        'taserto yaretker pertas'
                    )
                ),
                React.createElement('p', null,
                    React.createElement('a', {
                        href: 'index.htm'
                    },
                        'Adipiing eraes entstas',
                        React.createElement('br'),
                        ' iuamagnis'
                    ),
                    ' tristique orci',
                    React.createElement('br'),
                    ' acse uis ultriciet mag',
                    React.createElement('br'),
                    ' accumsan.'
                )
            )
        )
    ),

    React.createElement('footer', null,
        React.createElement('div', {
            className: 'road-map'
        },
            React.createElement('h4', null,
                React.createElement('span', {
                    className: 'first-letter'
                    },
                    'К'
                ),
                'арта проезда'
           ),
            React.createElement('p', null,
                'Улица Королева Д.45 Главный корпус',
                React.createElement('br'),
                'Вход со стороны метро.'
            )
        )
    )
);

ReactDOM.render(app, document.querySelector('#app'));


// var react-элемент = React.createElement('имя тэга', свойства, дочерние элементы, дочерние элементы, дочерние элементы)
// ReactDOM.render(react-элемент, DOM элемент)