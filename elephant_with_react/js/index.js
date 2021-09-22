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
    React.createElement('main'),
    React.createElement('footer')
);

ReactDOM.render(app, document.querySelector('#app'));


// var react-элемент = React.createElement('имя тэга', свойства, дочерние элементы, дочерние элементы, дочерние элементы)
// ReactDOM.render(react-элемент, DOM элемент)