//Games
// $('.add-games').on('click', function()  {
//     // $.ajax({
//     //     method: 'GET',
//     //     url: 'http://127.0.0.1:3000/games',
//     //     dataType: 'json'
//     // }).done(function(games) {
//     //     var gameTemplate = $('#game-template').html();
//     //     $('#games').html(doT.template(gameTemplate)(games));
//     // });
//
//     var ajax = function (method, url, data) {
//         var xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//         xhr.send(method === 'GET' ? null : data);
//     };
//     ajax('GET', 'http://127.0.0.1:3000/games', null);
//     var gameTemplate = $('#game-template').html();
//     $('#games').html(doT.template(gameTemplate)(games));
// });


//Foods
var navTmplFn = doT.template($('#nav-template').html());
$('.btn-nav-ru').on('click', function()  {
    $.ajax({
        method: 'GET',
        url: 'http://127.0.0.1:3000/menu/ru',
        dataType: 'json'
    }).done(function(navRu) {
        $('#nav').html(navTmplFn(navRu));
    });
});

$('.btn-nav-en').on('click', function()  {
    $.ajax({
        method: 'GET',
        url: 'http://127.0.0.1:3000/menu/en',
        dataType: 'json'
    }).done(function(navEn) {
        $('#nav').html(navTmplFn(navEn));
    });
});


//Whores
$('.add-whores').on('click', function()  {
    $.ajax({
        method: 'GET',
        url: 'http://127.0.0.1:3000/whores',
        dataType: 'json'
    }).done(function(whores) {
        var whoreTemplate = $('#whore-template').html();
        $('#whores').html(doT.template(whoreTemplate)(whores));
    });
});

//Movies
$('.add-movies').on('click', function()  {
    $.ajax({
        method: 'GET',
        url: 'http://127.0.0.1:3000/movies',
        dataType: 'json'
    }).done(function(movies) {
        var movieTemplate = $('#movie-template').html();
        $('#movies').html(doT.template(movieTemplate)(movies));
    });
});