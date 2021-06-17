//Games
$('.add-games').on('click', function()  {
    var gameTemplate = $('#game-template').html();
    $('#games').html(doT.template(gameTemplate)(games));
});


//Foods
var navTmplFn = doT.template($('#nav-template').html());
$('.btn-nav-ru').on('click', function()  {
    $('#nav').html(navTmplFn(navRu));
});

$('.btn-nav-en').on('click', function()  {
    $('#nav').html(navTmplFn(navEn));
});


//Whores
$('.add-whores').on('click', function()  {
    var whoreTemplate = $('#whore-template').html();
    $('#whores').html(doT.template(whoreTemplate)(whores));
});