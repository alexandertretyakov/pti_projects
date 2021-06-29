var whores = {
    models: [],

    add: function(whore) {
        this.models.push(whore);
        this.setModelsToStorage();
    },

    update: function(updatedWhore) {
        var whore = _.findWhere(this.models, {id: updatedWhore.id});
        _.extend(whore, updatedWhore)
        this.setModelsToStorage();
    },

    remove: function(id) {
        this.models = _.reject(this.models, function (whore) {
            return whore.id === id;
            this.setModelsToStorage();
        });
    },

    get: function(id) {
        return _.findWhere(this.models, {id:id});
    },

    setModelsToStorage: function () {
        localStorage.setItem('whores', JSON.stringify(this.models));
    },

    getModelsFromStorage: function () {
        return JSON.parse(localStorage.getItem('whores')) || [];
    },

    init: function () {
        this.models = this.getModelsFromStorage();
    }
}
whores.init();


//listView проверено
var listView = {
    tmplFn: doT.template($('#whore-template').html()),

    collection: whores,

    render: function() {
        $('.whore-list').html(this.tmplFn(this.collection.models));
    },

    subscribe: function () {
        $('.button-add').on('click', function () {
            formView.showAddForm();
        }).bind(this);

        $('.whore-list').on('click', function (e) {
            if($(e.target).hasClass('whore')) {
                var whore = this.collection.get(e.target.id);
                formView.changesForms(whore);
            }
        }.bind(this));// возвращает новую функцию, внутри которой this будет равным переданному контексту.
    },

    init: function () {
        this.subscribe();
        this.render();
    }
};
listView.init();


var formView = {
    inputFields: $('input[type="text"]'),

    collection: whores,

    showAddForm: function () {
        $('input').val('');

        $('form').css('display', 'block');
        $('.button-delete').css('display', 'none');
        $('.button-update').css('display', 'none');
        $('.button-save').css('display', 'block');
    },

    highlightFields: function () {
        this.inputFields.each(function(index, field) {
            field.style.border = field.value === '' ? '2px solid red' : '';
        });
    },

    isFormValide: function () {
        return this.inputFields.toArray().every(function(field) {
            return field.value !== '';
        })
    },//валидация не корректна

    getFormData: function() {
        var id = $('.id').val();

        return {
            id: id === '' ? _.uniqueId() : id,
            name: $('.name').val(),
            lastName: $('.lastName').val(),
            alias: $('.alias').val(),
            age: $('.age').val(),
            price: $('.price').val()
        };
    },

    changesForms: function (whore) {
        $('input').val('');

        $('.id').val(whore.id);
        $('.name').val(whore.name);
        $('.lastName').val(whore.lastName);
        $('.alias').val(whore.alias);
        $('.age').val(whore.age);
        $('.price').val(whore.price);

        $('form').css('display', 'block');
        $('.button-delete').css('display', 'inline-block');
        $('.button-update').css('display', 'block');
        $('.button-save').css('display', 'none');
    },

    resetForm: function() {
        $('input').val('');
        $('.column-right').remove();
    },

    init: function () {
        $('.button-save').on('click', function () {
            if(this.isFormValide()) {
                this.collection.add(this.getFormData());
                listView.render();
                this.resetForm();
            } else {
                this.highlightFields();
            }
        }.bind(this))

        $('.button-update').on('click', function () {
            var whore = this.getFormData();
            this.collection.update(whore);
            this.resetForm();
            listView.render();
        }.bind(this))

        $('.button-delete').on('click', function () {
            var id = $('.id').val();
            this.collection.remove(id);
            this.resetForm();
            listView.render();
        }.bind(this));
    }
}
formView.init();

















// var whores = JSON.parse(localStorage.getItem('whores')) || [];
//
// //Подстановка данных в шаблон и вставка в контейнер
// var whoreTemplate = $('#whore-template').html();
// $('.whore-list').html(doT.template(whoreTemplate)(whores));
//
// //Отображаем форму
// $('.button-add').on('click', function () {
//     $('form').css('display', 'block');
//     $('.button-delete').css('display', 'none');
//     $('.button-update').css('display', 'none');
//     $('.button-save').css('display', 'block');
// });
//
// $('.button-save').on('click', function () {
//     //Подсветка пустых полей формы
//     var inputs = document.querySelectorAll('input[type="text"]');
//     var i = 0;
//     var isFormValide = true;
//     while (i < inputs.length) {
//         if (inputs[i].value === '') {
//             inputs[i].style.border = '2px solid red';
//             isFormValide = false;
//         } else {
//             inputs[i].style.border = '';
//         }
//         i++;
//     }
//
//     if (isFormValide === false) {
//         return;
//     }
//
//     //Создаём новую шлюху
//     var whore = {
//         name: document.querySelector('.name').value,
//         lastName: document.querySelector('.lastName').value,
//         alias: document.querySelector('.alias').value,
//         age: document.querySelector('.age').value,
//         price: document.querySelector('.price').value,
//         id: _.uniqueId()
//     };
//
//     //Добавляем новую шлюху в массив
//     //whores[whores.length] = whore;
//     whores.push(whore);
//     //Записываем в Local Storage шлюху, каждый раз, когда вносишь изменения в массив шлюх(whores)
//     localStorage.setItem('whores', JSON.stringify(whores));
//
//     //Подстановка данных в шаблон и вставка в контейнер
//     var whoreTemplate = $('#whore-template').html();
//     $('.whore-list').html(doT.template(whoreTemplate)(whores));
//
//     //Очистка полей формы
//     $('input').val('');
//
//     //Кликаем на шлюху
//     $('.whore').on('click', handleWhoreClick);
// });
//
// $('.button-delete').on('click', function () {
//     var id = $('.id').val();
//
//     //Удалили шлюху из массива шлюх по ID
//     whores = _.reject(whores, function(whore){
//         return whore.id === id;
//     });
//     //Записываем в Local Storage шлюху, каждый раз, когда вносишь изменения в массив шлюх(whores)
//     localStorage.setItem('whores', JSON.stringify(whores));
//
//     //Очистка полей формы
//     $('input').val('');
//
//     //Подстановка данных в шаблон и вставка в контейнер
//     var whoreTemplate = $('#whore-template').html();
//     $('.whore-list').html(doT.template(whoreTemplate)(whores));
//
//     //Кликаем на шлюху
//     $('.whore').on('click', handleWhoreClick);
// });
//
// var handleWhoreClick = function () {
//     //Поиск шлюхи в массиве шлюх по ID
//     var whore = _.findWhere(whores, {id: this.id});
//
//     //Заполняем поля формы данными шлюхи
//     $('.id').val(whore.id);
//     $('.name').val(whore.name);
//     $('.lastName').val(whore.lastName);
//     $('.alias').val(whore.alias);
//     $('.age').val(whore.age);
//     $('.price').val(whore.price);
//
//     //Скрываем/Отображаем кнопки
//     $('.button-save').css('display', 'none');
//     $('.button-delete').css('display', 'inline-block');
//     $('.button-update').css('display', 'block');
// };
//
// $('.button-update').on('click', function () {
//     var id = $('.id').val();
//     var whore = _.findWhere(whores, {id: id});
//
//     whore.name = document.querySelector('.name').value;
//     whore.lastName = document.querySelector('.lastName').value;
//     whore.alias = document.querySelector('.alias').value;
//     whore.age = document.querySelector('.age').value;
//     whore.price = document.querySelector('.price').value;
//     //Записываем в Local Storage шлюху, каждый раз, когда вносишь изменения в массив шлюх(whores)
//     localStorage.setItem('whores', JSON.stringify(whores));
//
//     //Очистка полей формы
//     $('input').val('');
//
//     //Подстановка данных в шаблон и вставка в контейнер
//     var whoreTemplate = $('#whore-template').html();
//     $('.whore-list').html(doT.template(whoreTemplate)(whores));
//
//     //Кликаем на шлюху
//     $('.whore').on('click', handleWhoreClick);
// });
