// Переписать определение функции используя значения параметров функции по умолчанию
// var f = function(a, b) {
//     a = a !== undefined ? a : 7;
//     b = b !== undefined ? b : 4;
//     console.log(a, b);
// };

const f = (a = 7, b = 4) => console.log(a, b);



// Переписать пример используя шаблоннные строки
var jasmine = {
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

// var whore =
//     '<div class="whore">'+
//         '<div class="whore-name">' + jasmine.name + '</div>'+
//         '<img src="' + jasmine.photo + '" width="200">'+
//         '<div class="whore-age">Возраст:' + jasmine.age + '</div>'+
//         '<div class="whore-boobs">Размер груди: ' + jasmine.boobs + '</div>'+
//         '<div class="whore-height">Рост: ' + jasmine.height + '</div>'+
//         '<div class="whore-weight">Вес: ' + jasmine.weight + '</div>'+
//         '<div class="whore-phone">' + jasmine.phone + '</div>'+
//         '<div class="whore-can-come">Выезд: ' + (jasmine.can_come ? '+' : '-') + '</div>'+
//         '<div class="whore-teaser">' + jasmine.teaser + '</div>'+
//     '</div>';

var whore =
    `<div class="whore">
        <div class="whore-name">${jasmine.name}</div>
        <img src=${jasmine.photo} width="200" />
        <div class="whore-age">Возраст: ${jasmine.age}</div>
        <div class="whore-boobs">Размер груди: ${jasmine.boobs}</div>
        <div class="whore-height">Рост: ${jasmine.height}</div>
        <div class="whore-weight">Вес: ${jasmine.weight}</div>
        <div class="whore-phone">${jasmine.phone}</div>
        <div class="whore-can-come">Выезд: ${jasmine.can_come ? '+' : '-'}</div>
        <div class="whore-teaser">${jasmine.teaser}</div>
    </div>`;



// Переписать определение объекта используя расширение объектных литералов
var name = 'Вася';

// var o = {
//     name: name,
//     getName: function() { return this.name; }
// };
var o = {
    name,
    getName() {
        return this.name;
    }
};



// Перепиши выражения используя оператор ...
var whores = [
    { name: 'Алиса', age: 20 },
    { name: 'Богдана', age: 23 },
    { name: 'Альбина', age: 21 }
];

var fruits1 = ['orange', 'kiwi'];
var fruits2 = ['cherry', 'banana'];

var vasya = {
    name: 'Вася',
    age: 30
};

//whores = whores.concat({ name: 'Ванесса', age: 22 });
var whores2 = [...whores, { name: 'Ванесса', age: 22 }];

// var fruits3 = fruits1.concat(fruits2);
var fruits3 = [...fruits1, ...fruits2];

// var person = Object.assign({}, vasya, {
//     age: 31
// });
var person = {
    ...vasya,
    age: 31
};



// Перепиши определения функций используя стрелочные функции
// var f1 = function() {};
// var f2 = function(x) { return x * x; };
// var f3 = function(a, b) {
//     var c = a + b;
//     return c * c;
// };
// var f4 = function() { return 'Хуй мусорам!'; };
const f1 = () => {};
const f2 = (x) => x * x;
const f3 = (a, b) => {
    let c = a + b;

    return c * c;
};
const f4 = () => 'Хуй мусорам!';



// Перепиши класс Circle из файла js/functions_part_4.js используя синтаксис классов
class Circle {
    constructor(options) {
        Object.assign(this, options);
    }

    getDiameter() {
        return 2 * this.radius;
    }

    getPerimeter() {
        let diameter = 2 * this.radius;
        return 3.14 * diameter;
    }

    getSquare() {
        return 3.14 * (this.radius * this.radius);
    }
}

let circle = new Circle({x: 5, y: 5, radius: 5});




// Перепиши инструкции определения переменных используя деструктурирующее присваивание
var config = {
    host: 'localhost',
    port: 5984,
    dbName: 'customers'
};

// var host = config.host;
// var port2 = config.port;
// var dbName = config.dbName !== undefined ? config.dbName : 'default';
var {host} = config;
var {port: port2} = config;
var {dbName = 'default'} = config;


