//Games
$('.add-games').on('click', function() {
    // $.ajax({
    //     method: 'GET',
    //     url: 'http://127.0.0.1:3000/games',
    //     dataType: 'json'
    // }).done(function(games) {
    //     var gameTemplate = $('#game-template').html();
    //     $('#games').html(doT.template(gameTemplate)(games));
    // });

    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'http://127.0.0.1:3000/games');
    xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log('success', xhr.responseText);
                var gameTemplate = $('#game-template').html();
                $('#games').html(doT.template(gameTemplate)(JSON.parse(xhr.responseText)));
            } else {
                console.log('error');
            }
            console.log('complete');
        }
    });
    xhr.send();
});

//Foods
var navTmplFn = doT.template($('#nav-template').html());
$('.btn-nav-ru').on('click', function()  {
    // $.ajax({
    //     method: 'GET',
    //     url: 'http://127.0.0.1:3000/menu/ru',
    //     dataType: 'json'
    // }).done(function(navRu) {
    //     $('#nav').html(navTmplFn(navRu));
    // });

    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'http://127.0.0.1:3000/menu/ru');
    xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log('success', xhr.responseText);
                $('#nav').html(navTmplFn(JSON.parse(xhr.responseText)));
            } else {
                console.log('error');
            }
            console.log('complete');
        }
    });
    xhr.send();
});

$('.btn-nav-en').on('click', function()  {
    // $.ajax({
    //     method: 'GET',
    //     url: 'http://127.0.0.1:3000/menu/en',
    //     dataType: 'json'
    // }).done(function(navEn) {
    //     $('#nav').html(navTmplFn(navEn));
    // });

    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'http://127.0.0.1:3000/menu/en');
    xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log('success', xhr.responseText);
                $('#nav').html(navTmplFn(JSON.parse(xhr.responseText)));
            } else {
                console.log('error');
            }
            console.log('complete');
        }
    });
    xhr.send();
});


//Whores
$('.add-whores').on('click', function()  {
    // $.ajax({
    //     method: 'GET',
    //     url: 'http://127.0.0.1:3000/whores',
    //     dataType: 'json'
    // }).done(function(whores) {
    //     var whoreTemplate = $('#whore-template').html();
    //     $('#whores').html(doT.template(whoreTemplate)(whores));
    // });

    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'http://127.0.0.1:3000/whores');
    xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log('success', xhr.responseText);
                var whoreTemplate = $('#whore-template').html();
                $('#whores').html(doT.template(whoreTemplate)(JSON.parse(xhr.responseText)));
            } else {
                console.log('error');
            }
            console.log('complete');
        }
    });
    xhr.send();
});

//Movies
$('.add-movies').on('click', function()  {
    // $.ajax({
    //     method: 'GET',
    //     url: 'http://127.0.0.1:3000/movies',
    //     dataType: 'json'
    // }).done(function(movies) {
    //     var movieTemplate = $('#movie-template').html();
    //     $('#movies').html(doT.template(movieTemplate)(movies));
    // });

    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'http://127.0.0.1:3000/movies');
    xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log('success', xhr.responseText);
                var movieTemplate = $('#movie-template').html();
                $('#movies').html(doT.template(movieTemplate)(JSON.parse(xhr.responseText)));
            } else {
                console.log('error');
            }
            console.log('complete');
        }
    });
    xhr.send();
});


var ajax = function(method, url) {
    const xhr = new XMLHttpRequest;
    const state = $.Deferred();

    xhr.open(method, url);
    xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                state.resolve(xhr.responseText);
            } else {
                state.reject();
            }
        }
    });
    xhr.send();

    return state;
};

ajax('GET', 'http://127.0.0.1:3000/movies')
    .done((res) => console.log('Выполнено', res))
    .fail(() => console.log('Ошибка'));
