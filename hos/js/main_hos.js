var whores = JSON.parse(localStorage.getItem('whores')) || [];

//Подстановка данных в шаблон и вставка в контейнер
var whoreTemplate = $('#whore-template').html();
$('.whore-list').html(doT.template(whoreTemplate)(whores));

//Отображаем форму
$('.button-add').on('click', function () {
    $('.column-right').css('display', 'block');
    $('form').css('display', 'block');
    $('.button-delete').css('display', 'none');
    $('.button-update').css('display', 'none');
    $('.button-save').css('display', 'block');
});

$('.button-save').on('click', function () {
    //Подсветка пустых полей формы
    var inputs = document.querySelectorAll('input[type="text"]');
    var i = 0;
    var isFormValide = true;
    while (i < inputs.length) {
        if (inputs[i].value === '') {
            inputs[i].style.border = '2px solid red';
            isFormValide = false;
        } else {
            inputs[i].style.border = '';
        }
        i++;
    }

    if (isFormValide === false) {
        return;
    }

    //Создаём новую шлюху
    var whore = {
        name: document.querySelector('.name').value,
        lastName: document.querySelector('.lastName').value,
        alias: document.querySelector('.alias').value,
        age: document.querySelector('.age').value,
        price: document.querySelector('.price').value,
        id: _.uniqueId()
    };

    //Добавляем новую шлюху в массив
    //whores[whores.length] = whore;
    whores.push(whore);
    //Записываем в Local Storage шлюху, каждый раз, когда вносишь изменения в массив шлюх(whores)
    localStorage.setItem('whores', JSON.stringify(whores));

    //Подстановка данных в шаблон и вставка в контейнер
    var whoreTemplate = $('#whore-template').html();
    $('.whore-list').html(doT.template(whoreTemplate)(whores));

    //Очистка полей формы
    $('input').val('');

    //Скрываем колонку с формами
    $('.column-right').css('display', 'none');

    //Кликаем на шлюху
    $('.whore').on('click', handleWhoreClick);
});

$('.button-delete').on('click', function () {
    var id = $('.id').val();

    //Удалили шлюху из массива шлюх по ID
    whores = _.reject(whores, function(whore){
        return whore.id === id;
    });
    //Записываем в Local Storage шлюху, каждый раз, когда вносишь изменения в массив шлюх(whores)
    localStorage.setItem('whores', JSON.stringify(whores));

    //Очистка полей формы
    $('input').val('');

    //Подстановка данных в шаблон и вставка в контейнер
    var whoreTemplate = $('#whore-template').html();
    $('.whore-list').html(doT.template(whoreTemplate)(whores));

    //Кликаем на шлюху
    $('.whore').on('click', handleWhoreClick);
});

var handleWhoreClick = function () {
    //Поиск шлюхи в массиве шлюх по ID
    var whore = _.findWhere(whores, {id: this.id});

    //Заполняем поля формы данными шлюхи
    $('.id').val(whore.id);
    $('.name').val(whore.name);
    $('.lastName').val(whore.lastName);
    $('.alias').val(whore.alias);
    $('.age').val(whore.age);
    $('.price').val(whore.price);

    //Скрываем/Отображаем кнопки
    $('.button-save').css('display', 'none');
    $('.button-delete').css('display', 'inline-block');
    $('.button-update').css('display', 'block');
};

$('.button-update').on('click', function () {
    var id = $('.id').val();
    var whore = _.findWhere(whores, {id: id});

    whore.name = document.querySelector('.name').value;
    whore.lastName = document.querySelector('.lastName').value;
    whore.alias = document.querySelector('.alias').value;
    whore.age = document.querySelector('.age').value;
    whore.price = document.querySelector('.price').value;
    //Записываем в Local Storage шлюху, каждый раз, когда вносишь изменения в массив шлюх(whores)
    localStorage.setItem('whores', JSON.stringify(whores));

    //Очистка полей формы
    $('input').val('');

    //Подстановка данных в шаблон и вставка в контейнер
    var whoreTemplate = $('#whore-template').html();
    $('.whore-list').html(doT.template(whoreTemplate)(whores));

    //Кликаем на шлюху
    $('.whore').on('click', handleWhoreClick);
});
