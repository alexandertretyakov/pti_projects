// Write your code here
console.log('Hello world!');

//При клике на кнопку изменить цвет текста
$('.b1').on('click', function() {
    $('.t1').css('color', 'red');
});

//При клике на кнопку изменить цвет фона
$('.b2').on('click', function() {
    $('.t2').css('backgroundColor', '#BCE8E8');
});

//При клике на кнопку изменить путь ссылки
$('.b3').on('click', function() {
    $('.t3 a').attr('href', 'https://www.youtube.com/watch?v=47tWcmDtG6U');
});

//При клике на кнопку изменить путь к картинке
$('.b4').on('click', function() {
    $('.t4 img').attr('src', 'images/silvia.jpg');
});

//При клике на кнопку изменить id элемента
$('.b5').on('click', function() {
    $('.t5').attr('id', 'abc');
});

//При клике на кнопку изменить текст
$('.b6').on('click', function() {
    $('.t6').text('Hello world!');
});

//При клике на кнопку изменить HTML
$('.b7').on('click', function() {
    $('.t7').html('<i> Цветы </i>');
});

//При клике на кнопку изменить размер шрифта
$('.b8').on('click', function() {
    $('.t8').css('font-size', '30px');
});

//При клике на кнопку добавить класс 'hi'
$('.b9').on('click', function() {
    $('.t9').addClass('hi');
});

//При клике на кнопку удалить класс 'hi'
$('.b10').on('click', function() {
    $('.t10').removeClass('hi');
});

//При клике на кнопку добавлять/удалять (в зависимости от наличия) класс 'hi'
$('.b11').on('click', function() {
    $('.t11').toggleClass('hi');
});

//При клике на любом эелементе страницы выводить значение атрибута class элемента
$('body').on('click', function(e) {
    $('.t12').text(e.target.className);
});

//При клике на кнопку перевести текст на английский язык (перевод хранится в атрибуте data-en элемента)
$('.b13').on('click', function() {
    var translation = $('.t13').data('en');
    $('.t13').text(translation);
});

//При изменении размеров окна вкладки или браузера изменять фоновый цвет абзаца (использовать RGB и Math.random)
$(window).on('resize', function () {
    var r = (Math.round(Math.random() * 255));
    var g = (Math.round(Math.random() * 255));
    var b = (Math.round(Math.random() * 255));
    $('.t99').css('background-color', 'rgb(' + r + ',' +  g + ',' + b + ')');
});

//При изменении значения элемента формы выводить количество символов которое оно содержит
var input = $('.t98 input');
input.on('input', function () {
    $('.t98-2').text(input.val().length);
});

/*Вывести на экран анкету Жасмин используя переменную Jasmine (смотри исходный код)
двумя способами (созданием элементов, конкатенацией)*/
$('.b14').on('click', function() {
    var container = $('.whores-container');

    var newGirl = $('<div>');
    newGirl.addClass('whore');

    var nameGirl = $('<div>');
    nameGirl.addClass('whore-name');
    nameGirl.text(Jasmine.name);
    newGirl.append(nameGirl);

    var photoGirl = $('<img>');
    photoGirl.attr('src', Jasmine.photo);
    photoGirl.css('width', '200px');
    newGirl.append(photoGirl);

    var ageGirl = $('<div>');
    ageGirl.addClass('whore-age');
    ageGirl.text('Возраст:' + Jasmine.age);
    newGirl.append(ageGirl);

    var boobsGirl = $('<div>');
    boobsGirl.addClass('whore-boobs');
    boobsGirl.text('Размер груди:' + Jasmine.boobs);
    newGirl.append(boobsGirl);

    var heightGirl = $('<div>');
    heightGirl.addClass('whore-height');
    heightGirl.text('Рост:' + Jasmine.weight);
    newGirl.append(heightGirl);

    var weightGirl = $('<div>');
    weightGirl.addClass('whore-weight');
    weightGirl.text('Вес:' +  Jasmine.height);
    newGirl.append(weightGirl);

    var phoneGirl = $('<div>');
    phoneGirl.addClass('whore-phone');
    phoneGirl.text(Jasmine.phone);
    newGirl.append(phoneGirl);

    var canComeGirl = $('<div>');
    canComeGirl.addClass('whore-can-come');
    canComeGirl.text('Выезд:' + (Jasmine.can_come ? '+' : '-'));
    newGirl.append(canComeGirl);

    var teaserGirl = $('<div>');
    teaserGirl.addClass('whore-teaser');
    teaserGirl.text(Jasmine.teaser);
    newGirl.append(teaserGirl);

    container.append(newGirl);
});

//Переместить рыбу из первого контейнера во второй (при повторном клике из второго в первый и т.д.)
$('.b15').on('click', function() {
    var fish = $('.fish');
    if ($('.cat-container-1 .fish')) {
        $('.cat-container-2').append(fish);
    } else {
        $('.cat-container-1').append(fish);
    }
});

//Удалить зуб
$('.b16').on('click', function() {
    $('.tooth').remove();
});

//Хочу чтоб лыжник бесконечно ехал вправо (сдвиг на 5px каждые 16ms).
// При нажатии на кнопку "Стоп!" останавливался.
$('.b17').on('click', function() {
    var skier = $('.skier');
    var x = 0;
    var intervalId = setInterval(function() {
        x = x + 5;
        skier.css('left', x + 'px');
    }, 16);

    $('.b17-2').on('click', function() {
        clearInterval(intervalId);
    });
});

//Хочу такое (смотри исходный код)
var i = 0;
while (i < mikki.length) {
    var j = 0;
    while (j < mikki[i].length) {
        var pazl = $('<div>');
        pazl.addClass('mikki_tile');
        if (mikki[i][j] === 'X') {
            pazl.css('background-color', 'black');
        }
        $('.mikki_tiles').append(pazl);
        j++;
    }
    i++;
}

//Создать мир Марио
$('.b18').on('click', function () {
    var i = 0;
    while (i < map.length) {
        var j = 0;
        while (j < map[i].length) {
            var tile = $('<div>');
            tile.addClass('tile');
            tile.css('top', i * 16 + 'px');
            tile.css('left', j * 16 + 'px');
            if (map[i][j] === 'w') {
                tile.addClass('x_w');
            }
            if (map[i][j] === 'c') {
                tile.addClass('x_c');
            }
            if (map[i][j] === 'k') {
                tile.addClass('x_k');
            }
            if (map[i][j] === 'd') {
                tile.addClass('x_d');
            }
            if (map[i][j] === 't') {
                tile.addClass('x_t');
            }
            if (map[i][j] === 'g') {
                tile.addClass('x_g');
            }
            if (map[i][j] === 'b') {
                tile.addClass('x_b');
            }
            if (map[i][j] === 'z') {
                tile.addClass('x_z');
            }
            $('.scene').append(tile);
            j++;
        }
        i++;
    }
});

//Кликая по кнопкам "предыдущая" и "следующая" я хочу чтобы менялись соответственно слайды
var goTo = function (direction) {
    var slides = $('.slide');
    var activeSlide = $('.slide.active');
    var activeSlideIndex = slides.index(activeSlide);
    var slidesLength = slides.length;
    var nextSlideIndex;
    if (direction === 'next') {
        nextSlideIndex = activeSlideIndex === slidesLength - 1 ? 0 : activeSlideIndex + 1;
    } else {
        nextSlideIndex = activeSlideIndex === 0 ? slidesLength - 1 : activeSlideIndex - 1;
    }
    var next = slides[nextSlideIndex];

    activeSlide.removeClass('active');
    $(next).addClass('active');
}

$('.next').on('click', function () {
    goTo('next');
});

$('.previous').on('click', function () {
    goTo('previous');
});

// //Кликая вопросам я хочу видеть ответы на них.
$('.question').on('click', function () {
    $(this).toggleClass('active');
});

//Кликая по вкладкам я хочу видеть связанное содержимое
var xTabs = $('.x-tabs');
var xItems = $('.x-items');
xTabs.find('.x-tab').on('click', function () {
    xTabs.find('.active').removeClass('active');
    xItems.find('.active').removeClass('active');
    $(this).addClass('active');
    xItems.find('[data-section="'+ $(this).data('tab') +'"]').addClass('active');
});

//Кликая на кнопку Login я хочу чтобы затенялся экран и по середине экрана появлялось окошко
// для авторизации закрыть которое можно кликнув по кнопке с крестиком
$('.show-login-pop-up').on('click', function () {
    $('.pop-up').removeClass('hidden');
    $('.overlay').removeClass('hidden');

});

$('.close').on('click', function () {
    $('.pop-up').addClass('hidden');
    $('.overlay').addClass('hidden');
});

//Отменить действие по-умолчанию при клике на ссылку
$('.link-ebanoe').on('click', function (e) {
    e.preventDefault();
});

//Надоела реклама про увеличение члена? При клике на кнопку "Больше не показывать"
// заноси в localStorage значение которое будешь проверять при загрузке страницы
var hideAdvertising = function () {
    $('.t97').css('display', 'none');
};

var button97 = $('.b97');
if (localStorage.getItem('hideAd') === 'none') {
    hideAdvertising();
}

button97.on('click', function () {
    hideAdvertising();
    localStorage.setItem('hideAd', 'none');
});