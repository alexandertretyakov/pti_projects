// Write your code here
console.log('Hello world!');

//При клике на кнопку изменить цвет текста
document.querySelector('.b1').addEventListener('click', function() {
    document.querySelector('.t1').style.color = 'red';
});

//При клике на кнопку изменить цвет фона
document.querySelector('.b2').addEventListener('click', function() {
    document.querySelector('.t2').style.backgroundColor = '#BCE8E8';
});

//При клике на кнопку изменить путь ссылки
document.querySelector('.b3').addEventListener('click', function() {
    document.querySelector('.t3 a').href = 'https://www.youtube.com/watch?v=47tWcmDtG6U';
});

//При клике на кнопку изменить путь к картинке
document.querySelector('.b4').addEventListener('click', function() {
    document.querySelector('.t4 img').src = 'images/Batman-Begins-290x180.jpg';
});

//При клике на кнопку изменить id элемента
document.querySelector('.b5').addEventListener('click', function() {
    document.querySelector('#ab').id = 'abc';
});

//При клике на кнопку изменить текст
document.querySelector('.b6').addEventListener('click', function() {
    document.querySelector('.t6').innerText = 'Hello world!';
});

//При клике на кнопку изменить HTML
document.querySelector('.b7').addEventListener('click', function() {
    document.querySelector('.t7').innerHTML = '<i> Цветы </i>';
});

//При клике на кнопку изменить размер шрифта
document.querySelector('.b8').addEventListener('click', function() {
    document.querySelector('.t8').style.fontSize = '30px';
});

//При клике на кнопку добавить класс 'hi'
document.querySelector('.b9').addEventListener('click', function() {
    document.querySelector('.t9').classList.add('hi');
});

//При клике на кнопку удалить класс 'hi'
document.querySelector('.b10').addEventListener('click', function() {
    document.querySelector('.t10').classList.remove('hi');
});

//При клике на кнопку добавлять/удалять (в зависимости от наличия) класс 'hi'
document.querySelector('.b11').addEventListener('click', function() {
    document.querySelector('.t11').classList.toggle('hi');
});

//При клике на любом эелементе страницы выводить значение атрибута class элемента
document.querySelector('body').addEventListener('click', function(e) {
    document.querySelector('.t12').innerText = e.target.className;
});

//При клике на кнопку перевести текст на английский язык (перевод хранится в атрибуте data-en элемента)
document.querySelector('.b13').addEventListener('click', function() {
    var transfer = document.querySelector('.t13').dataset.en;
    document.querySelector('.t13').innerText = transfer;
});

//При изменении размеров окна вкладки или браузера изменять фоновый цвет абзаца (использовать RGB и Math.random)
window.addEventListener('resize', function () {
    var r = (Math.round(Math.random() * 255));
    var g = (Math.round(Math.random() * 255));
    var b = (Math.round(Math.random() * 255));
    document.querySelector('.t99').style.backgroundColor = 'rgb(' + r + ',' +  g + ',' + b + ')';
});

//При изменении значения элемента формы выводить количество символов которое оно содержит
var input = document.querySelector('.t98 input');
input.addEventListener('input', function () {
        document.querySelector('.t98-2').innerText = input.value.length;
});

/*Вывести на экран анкету Жасмин используя переменную Jasmine (смотри исходный код)
двумя способами (созданием элементов, конкатенацией)*/
document.querySelector('.b14').addEventListener('click', function () {
    var container = document.querySelector('.whores-container');

    var newGirl = document.createElement('div');
    newGirl.classList.add('whore');

    var nameGirl = document.createElement('div');
    nameGirl.classList.add('whore-name');
    nameGirl.innerText = Jasmine.name;
    newGirl.appendChild(nameGirl);

    var photoGirl = document.createElement('img');
    photoGirl.src = Jasmine.photo;
    photoGirl.style.width = '200px';
    newGirl.appendChild(photoGirl);

    var ageGirl = document.createElement('div');
    ageGirl.classList.add('whore-age');
    ageGirl.innerText = 'Возраст:' + Jasmine.age;
    newGirl.appendChild(ageGirl);

    var boobsGirl = document.createElement('div');
    boobsGirl.classList.add('whore-boobs');
    boobsGirl.innerText = 'Размер груди:' + Jasmine.boobs;
    newGirl.appendChild(boobsGirl);

    var heightGirl = document.createElement('div');
    heightGirl.classList.add('whore-height');
    heightGirl.innerText = 'Рост:' + Jasmine.weight;
    newGirl.appendChild(heightGirl);

    var weightGirl = document.createElement('div');
    weightGirl.classList.add('whore-weight');
    weightGirl.innerText = 'Вес:' +  Jasmine.height;
    newGirl.appendChild(weightGirl);

    var phoneGirl = document.createElement('div');
    phoneGirl.classList.add('whore-phone');
    phoneGirl.innerText = Jasmine.phone;
    newGirl.appendChild(phoneGirl);

    var canComeGirl = document.createElement('div');
    canComeGirl.classList.add('whore-can-come');
    canComeGirl.innerText = 'Выезд:' + (Jasmine.can_come ? '+' : '-');
    newGirl.appendChild(canComeGirl);

    var teaserGirl = document.createElement('div');
    teaserGirl.classList.add('whore-teaser');
    teaserGirl.innerText = Jasmine.teaser;
    newGirl.appendChild(teaserGirl);

    container.appendChild(newGirl);

    //Второй способ Конкатенация
    var newGirl2 =
        '<div class="whore">'+
            '<div class="whore-name">' + Jasmine.name + '</div>'+
            '<img src="' + Jasmine.photo + '" width="200">'+
            '<div class="whore-age">Возраст:' + Jasmine.age + '</div>'+
            '<div class="whore-boobs">Размер груди: ' + Jasmine.boobs + '</div>'+
            '<div class="whore-height">Рост: ' + Jasmine.height + '</div>'+
            '<div class="whore-weight">Вес: ' + Jasmine.weight + '</div>'+
            '<div class="whore-phone">' + Jasmine.phone + '</div>'+
            '<div class="whore-can-come">Выезд: ' + (Jasmine.can_come ? '+' : '-') + '</div>'+
            '<div class="whore-teaser">' + Jasmine.teaser + '</div>'+
        '</div>';

    container.innerHTML += newGirl2;
});



//Переместить рыбу из первого контейнера во второй (при повторном клике из второго в первый и т.д.)
document.querySelector('.b15').addEventListener('click', function() {
    var fish = document.querySelector('.fish');
    if (document.querySelector('.cat-container-1 .fish')) {
        document.querySelector('.cat-container-2').appendChild(fish);
    } else {
        document.querySelector('.cat-container-1').appendChild(fish);
    }
});

//Удалить зуб
document.querySelector('.b16').addEventListener('click', function() {
    document.querySelector('.tooth-container').removeChild(document.querySelector('.tooth'));
});

//Хочу чтоб лыжник бесконечно ехал вправо (сдвиг на 5px каждые 16ms).
// При нажатии на кнопку "Стоп!" останавливался.
document.querySelector('.b17').addEventListener('click', function() {
    var skier = document.querySelector('.skier');
    var x = 0;
    var interval = setInterval(function() {
        x = x + 5;
        skier.style.left = x + 'px';
    },16)
    document.querySelector('.b17-2').addEventListener('click', function() {
        clearInterval(interval);
    });
});

//Хочу такое (смотри исходный код)
var i = 0;
while (i < mikki.length) {
    var j = 0;
    while (j < mikki[i].length) {
        var pazl = document.createElement('div');
        pazl.classList.add('mikki_tile');
        if (mikki[i][j] === 'X') {
            pazl.style.backgroundColor = 'black';
        }
        document.querySelector('.mikki_tiles').appendChild(pazl);
        j++;
    }
    i++;
}

//Создать мир Марио
document.querySelector('.b18').addEventListener('click', function () {
    var i = 0;
    while (i < map.length) {
        var j = 0;
        while (j < map[i].length) {
            var tile = document.createElement('div');
            tile.classList.add('tile');
            tile.style.top = i * 16 + 'px';
            tile.style.left = j * 16 + 'px';
            if (map[i][j] === 'w') {
                tile.classList.add('x_w');
            }
            if (map[i][j] === 'c') {
                tile.classList.add('x_c');
            }
            if (map[i][j] === 'k') {
                tile.classList.add('x_k');
            }
            if (map[i][j] === 'd') {
                tile.classList.add('x_d');
            }
            if (map[i][j] === 't') {
                tile.classList.add('x_t');
            }
            if (map[i][j] === 'g') {
                tile.classList.add('x_g');
            }
            if (map[i][j] === 'b') {
                tile.classList.add('x_b');
            }
            if (map[i][j] === 'z') {
                tile.classList.add('x_z');
            }
            document.querySelector('.scene').appendChild(tile);
            j++;
        }
        i++;
    }
});

//Кликая по кнопкам "предыдущая" и "следующая" я хочу чтобы менялись соответственно слайды
var goTo = function (direction) {
    var slides = document.querySelectorAll('.slide');
    var activeSlide = document.querySelector('.slide.active');
    var activeSlideIndex = [].indexOf.call(slides, activeSlide);
    var slidesLength = slides.length;
    var nextSlideIndex;
    if (direction === 'next') {
        nextSlideIndex = activeSlideIndex === slidesLength - 1 ? 0 : activeSlideIndex + 1;
    } else {
        nextSlideIndex = activeSlideIndex === 0 ? slidesLength - 1 : activeSlideIndex - 1;
    }
    var next = slides[nextSlideIndex];

    activeSlide.classList.remove('active');
    next.classList.add('active');
}

document.querySelector('.next').addEventListener('click', function () {
    goTo('next');
});

document.querySelector('.previous').addEventListener('click', function () {
    goTo('previous');
});

//Кликая вопросам я хочу видеть ответы на них.
var questions = document.querySelectorAll('.question');
var i = 0;
while (i < questions.length) {
    questions[i].addEventListener('click', function () {
        this.classList.toggle('active');
    });
    i++;
};

//Кликая по вкладкам я хочу видеть связанное содержимое
var deleteClassActive = function () {
    var arr = document.querySelectorAll('.x-tab, .x-item');
    var i = 0;
    while (i < arr.length) {
        arr[i].classList.remove('active');
        i++;
    }
};

document.querySelector('.x-tabs').addEventListener('click', function (e) {
    if (! e.target.classList.contains('active')) {
        deleteClassActive();
        e.target.classList.add('active');
        var i = 0;
        while (i < document.querySelectorAll('.x-item').length) {
            if (e.target.dataset.tab === document.querySelectorAll('.x-item')[i].dataset.section) {
                document.querySelectorAll('.x-item')[i].classList.add('active');
            }
            i++;
        }
    }
});

//Кликая на кнопку Login я хочу чтобы затенялся экран и по середине экрана появлялось окошко
// для авторизации закрыть которое можно кликнув по кнопке с крестиком
document.querySelector('.show-login-pop-up').addEventListener('click', function () {
    document.querySelector('.pop-up').classList.remove('hidden');
    document.querySelector('.overlay').classList.remove('hidden');

});

document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.pop-up').classList.add('hidden');
    document.querySelector('.overlay').classList.add('hidden');
});

//Отменить действие по-умолчанию при клике на ссылку
document.querySelector('.link-ebanoe').addEventListener('click', function (e) {
    e.preventDefault();
});

//Надоела реклама про увеличение члена? При клике на кнопку "Больше не показывать"
// заноси в localStorage значение которое будешь проверять при загрузке страницы
var hideAdvertising = function () {
    document.querySelector('.t97').style.display = 'none';
};

var button97 = document.querySelector('.b97');

if (localStorage.getItem('hideAd') === 'none') {
    hideAdvertising();
}

button97.addEventListener('click', function () {
    hideAdvertising();
    localStorage.setItem('hideAd', 'none');
});


