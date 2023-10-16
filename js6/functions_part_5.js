// Создать такую структуру данных чтобы
// выражение $()()[$()().hu][2] вернуло число 999
const $ = () => {
    return () => {
        return {
            hu: 'key',
            key: [
                '', '', 999
            ]
        }
    }
};



// Перепиши вызовы функций ниже используя call и apply:
// [1, 3, 5, 7].includes(3);
// [1, 3, 5, 7].indexOf(5);
// [1, 3, 5, 7].join('/');
// 'Вася любит яблоки'.replace('яблоки', 'Киев');
// 'Киев — столица Украины'.slice(7, 14)
// [0, 1, 2, 3].map(function(n) { return n + 1; });
[].includes.call([1, 3, 5, 7], 3);
[].includes.apply([1, 3, 5, 7], [3]);

[].indexOf.call([1, 3, 5, 7], 5);
[].indexOf.apply([1, 3, 5, 7], [5]);

[].join.call([1, 3, 5, 7], '/');
[].join.apply([1, 3, 5, 7], ['/']);

''.replace.call('Вася любит яблоки', 'яблоки', 'Киев');
''.replace.apply('Вася любит яблоки', ['яблоки', 'Киев']);

''.slice.call('Киев — столица Украины', 7, 14);
''.slice.apply('Киев — столица Украины', [7, 14]);

[].map.call([0, 1, 2, 3], function(n) { return n + 1; });
[].map.apply([0, 1, 2, 3], [function(n) { return n + 1; }]);





// Создать функцию sumOfAllArguments которая принимает произвольное количество чисел и возвращает их сумму.
// Пример работы:
// sumOfAllArguments(2, 2, 3);
// => 7
// sumOfAllArguments(2, 2, 3, 3, 10);
// => 20
const sumOfAllArguments = function() {
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
};



// Создать функцию trim которая удаляет пробельные символы с начала и конца строки.
// Пример работы:
// trim('   Hello world!   ');
// => 'Hello world!'
const trim = function(string) {
    let firstIndex;
    let lastIndex;

    for (let i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            firstIndex = i;
            break;
        }
    }

    for (let i = string.length - 1; i >= 0; i--) {
        if (string[i] !== ' ') {
            lastIndex = i + 1;
            break;
        }
    }

    return string.slice(firstIndex, lastIndex);
};



// Познакомиться с работой следующих встроенных свойств, функций и методов
// Math: abs, ceil, floor, max, min, pow, random, round, sqrt, trunc
// JSON: stringify, parse
Math.abs(-4);
// => 4
Math.abs(4);
// => 4

Math.ceil(4.1);
// => 5

Math.floor(4.1);
// => 4

Math.max(4, 6, 10, 3, 23, 1, 41, 5);
// => 41

Math.min(4, 6, 10, 3, 23, 1, 41, 5);
// => 1

Math.pow(4, 5);
// => 1024

Math.random();
// => 0.3896715707657914

Math.round(4.7);
// => 5
Math.round(4.4);
// => 4

Math.sqrt(25);
// => 5
Math.sqrt(64);
// => 8

Math.trunc(4.657);
// => 4


let mario = {
    x: 5,
    y: 10,
    pocket: {
        weapon: 'gun'
    }
};
JSON.stringify(mario);
// => '{"x":5,"y":10,"pocket":{"weapon":"gun"}}'
JSON.parse('{"x":5,"y":10,"pocket":{"weapon":"gun"}}');
// => {x: 5, y: 10, pocket: {…}}



// Реализовать ф-цию sort([6, 7, 45, 3, 24, 5, 9, 43]);
//
//                      [6, 7, 45, 3, 24, 5, 9, 43]

//------------------1 Вариант------------------------
var sort = function(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
};




// Создать класс Storage1 c двумя методами set и get
class Storage1 {
    set(key, value) {
        this[key] = value;
    }

    get(key) {
        return this[key];
    }
}

var config = new Storage1;



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
    if ('isNumeric' in config) {
        if (config.isNumeric === true && typeof value === 'string') {
            return false;
        }
    }

    if ('length' in config) {
        if (String(value).length < config.length.min || String(value).length > config.length.max) {
            return false;
        }
    }

    if ('mustNotContain' in config) {
        let isInvalid = config.mustNotContain.some(function(word) {
            return value.includes(word);
        });

        if (isInvalid) {
            return false;
        }
    }

    if ('fn' in config) {
        if (!config.fn()) {
            return false;
        }
    }

    return true;
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
var matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 0, 1, 2],
];

const rotateRight = (matrix) => {
    let result = [];

    for (let i = 0; i < matrix[0].length; i++) {
        result[i] = [];

        for (let j = matrix.length - 1; j >= 0; j--) {
            result[i].push(matrix[j][i]);
        }
    }

    return result;
};

// var matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 0, 1, 2],
// ];

const rotateLeft = (matrix) => {
    let result = [];
    let k = 0;

    for (let i = matrix[0].length - 1; i >= 0; i--) {
        result[k] = [];

        for (let j = 0; j < matrix.length;  j++) {
            console.log(k);

            result[k].push(matrix[j][i]);
        }

        k++;
    }

    return result;
};





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
