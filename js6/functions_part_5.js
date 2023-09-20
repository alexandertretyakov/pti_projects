// Создать такую структуру данных чтобы
// выражение $()()[$()().hu][2] вернуло число 999



// Создать функции lastIndexOf, shift, getMatrixSum из файла js/functions_part_1 используя цикл for





// Перепиши вызовы функций ниже используя call и apply:
// [1, 3, 5, 7].includes(3);
// [1, 3, 5, 7].indexOf(5);
// [1, 3, 5, 7].join('/');
// 'Вася любит яблоки'.replace('яблоки', 'Киев');
// 'Киев — столица Украины'.slice(7, 14)
// [0, 1, 2, 3].map(function(n) { return n + 1; });



// Создать функцию sumOfAllArguments которая принимает произвольное количество чисел и возвращает их сумму.
// Пример работы:
// sumOfAllArguments(2, 2, 3);
// => 7
// sumOfAllArguments(2, 2, 3, 3, 10);
// => 20




// Создать функцию trim которая удаляет пробельные символы с начала и конца строки.
// Пример работы:
// trim('   Hello world!   ');
// => 'Hello world!'




// Познакомиться с работой следующих встроенных свойств, функций и методов
// Math: abs, ceil, floor, max, min, pow, random, round, sqrt, trunc
// JSON: stringify, parse

// Привести примеры использования ниже




// Реализовать ф-цию sort





// Создать класс Storage1 c двумя методами set и get




// Создать ф-цию validate
/**
 * Known validation rules:
 *
 * - length: { min, max }
 * - isNumeric: boolean
 * - mustNotContain: [...]
 * - fn: (value) => boolean
 */

const validate = (value, config) => {

};

// 1. Password --------------------------------------------------->
const passwordConfig = {
    length: {
        min: 6,
        max: 10
    },
    isNumeric: true
};

// test password
console.log(
    "1. Password:",
    validate(12345, passwordConfig), // false
    validate(123456, passwordConfig), // true
    validate("123asd", passwordConfig) // false
);


// 2. Username --------------------------------------------------->
const userNameConfig = {
    mustNotContain: ["test", "user", "anon"]
};

// test username
console.log(
    "2. Username:",
    validate("asdf", userNameConfig), // => true
    validate("sometest", userNameConfig), // => false
    validate("123asd", userNameConfig), // => true
    validate("anonuser", userNameConfig) // => false
);


// 3. Birthdate --------------------------------------------------->
const birthdateConfig = {
    fn: (value) => {
        // TODO: check allowed format: DD/MM/YYYY
        // TODO: check day and month values
        // TODO: check that birth year is older than 2000

        return true; // true or false
    }
};

// test birthdate
console.log(
    "3. Birthdate:",
    validate("asdf", birthdateConfig), // => false
    validate("55/78/1998", birthdateConfig), // => false
    validate("10/11/2001", birthdateConfig), // => false
    validate("10/05/1998", birthdateConfig) // => true
);




// Создать ф-цию rotateLeft и rotateRight






var people = [{x:2, y: 2, sex: 'man'}, {x:22, y: 22, sex: 'man'}, {x:222, y: 222, sex: 'man'}, {x:2222, y: 2222, sex: 'women'}];
var c1 = new Backbone.Collection(people);
//------------------------


var Man = Backbone.Model.extend({
    fuck() {},
    eat() {}
});

var Woman = Backbone.Model.extend({
    suck() {},
    wash() {}
});

var Mans = Backbone.Collection.extend({
    model: Man
});
var c2 = new Mans(people);

var Womans = Backbone.Collection.extend({
    model: Woman
});
var c3 = new Womans(people);
//------------------------

var People = Backbone.Collection.extend({
    model: function(attrs) {
        var Model = attrs.sex === 'man' ? Man : Woman;
        return new Model;
    }
});
var c4 = new People(people);
//------------------------
