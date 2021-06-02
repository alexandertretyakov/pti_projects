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
    document.querySelector('a').href = 'https://www.youtube.com/watch?v=47tWcmDtG6U';
});

//При клике на кнопку изменить путь к картинке
document.querySelector('.b4').addEventListener('click', function() {
    document.querySelector('img').src = 'images/Batman-Begins-290x180.jpg';
});

//При клике на кнопку изменить id элемента
document.querySelector('.b5').addEventListener('click', function() {
    document.querySelector('#ab').id = '#abc';
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
    var langue = document.querySelector('.t13').dataset.en;
    document.querySelector('.t13').innerText = langue;
});

//При изменении размеров окна вкладки или браузера изменять фоновый цвет абзаца (использовать RGB и Math.random)
window.addEventListener('resize', function () {
    var random1 = (Math.round(Math.random() * 255));
    var random2 = (Math.round(Math.random() * 255));
    var random3 = (Math.round(Math.random() * 255));
    document.querySelector('.t99').style.backgroundColor = 'rgb(' + random1 + ',' +  random2 + ',' + random3 + ')';
});

//При изменении значения элемента формы выводить количество символов которое оно содержит
var input = document.querySelector('.t98');

input.addEventListener('input', function () {
    var length = input.querySelector('input').value.length;
    document.querySelector('.t98-2').innerText = length;
});

/*Вывести на экран анкету Жасмин используя переменную Jasmine (смотри исходный код)
двумя способами (созданием элементов, конкатенацией)*/
var Jasmine = {
    name: 'Жасмин',
    photo: 'images/zhasmin.jpg',
    age: '18',
    boobs: '3',
    weight: '50',
    height: '168',
    phone: '+380960000000',
    can_come: true,
    teaser: 'Очень нежная девчонка доставит Вам удовольствие по полной программе! Каждый мужчина ищет идеальную женщину - попробуй, может быть я именно та которая тебе нужна... Фото мои 1000%!!! Выезда НЕТ!!! Квартира для встреч ЕСТЬ, 5 мин от ст. метро \"Дворец Украина\"'
};

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
    document.querySelector('.tooth').remove();
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
//--> index.html

//Создать мир Марио
//--> index.html

//Кликая по кнопкам "предыдущая" и "следующая" я хочу чтобы менялись соответственно слайды
var getIndexOf = function (list, el) {//индекс активного
    var i = 0;
    while (i < list.length) {
        if (list[i] === el) {
            return i;
        }
        i++;
    }
    return -1;
};

document.querySelector('.next').addEventListener('click', function () {
    var slides = document.querySelectorAll('.slide');
    var activeSlide = document.querySelector('.slide.active');
    var activeSlideIndex = getIndexOf(slides, activeSlide);
    var nextSlideIndex = activeSlideIndex === 4 ? 0 : activeSlideIndex + 1;
    var next = slides[nextSlideIndex];
    activeSlide.classList.remove('active');
    next.classList.add('active');
});

document.querySelector('.previous').addEventListener('click', function () {
    var slides = document.querySelectorAll('.slide');
    var activeSlide = document.querySelector('.slide.active');
    var activeSlideIndex = getIndexOf(slides, activeSlide);
    var previousSlideIndex = activeSlideIndex === 0 ? 4 : activeSlideIndex - 1;
    var previous = slides[previousSlideIndex];
    activeSlide.classList.remove('active');
    previous.classList.add('active');
});

//Кликая вопросам я хочу видеть ответы на них.
var faq = document.querySelectorAll('.question')
var i = 0;
while (i < faq.length) {
    faq[i].addEventListener('click', function() {
        this.classList.toggle('active');
    });
    i++;
}

//Кликая по вкладкам я хочу видеть связанное содержимое
    var wipeOf = function () {//ф-ция для удаления активного
        var tabs = document.querySelectorAll('.x-tab');
        var i = 0;
        while (i < tabs.length) {
            tabs[i].classList.remove('active')
            i++;
        }
    }

document.querySelectorAll('.x-tab').addEventListener('click', function () {
    if (this.classList[1] !== 'active') {
        wipeOf();
        this.classList.add('active');
    }
});//------------------?

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

if (localStorage.getItem('display') === 'none') {
    hideAdvertising();
}

button97.addEventListener('click', function () {
    hideAdvertising();
    localStorage.setItem('display', 'none');
});


