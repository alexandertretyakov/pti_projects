// Создать такую структуру данных чтобы
// выражение $()()[$()().hu][2] вернуло число 999
var $ = function() {
    return function() {
        return {
            hu: 'array',
            array: ['', '', 999]
        }
    }
};


// Создать функции lastIndexOf, shift, getMatrixSum из файла js/functions_part_1 используя цикл for
var lastIndexOf = function(list, value) {
    for (var i = 0; i < list.length; i++) {
        if (value === list[i]) {
            return i;
        }
    }
    return -1;
};

var shift = function(list) {
    var result = [];
    for (var i = 1; i < list.length; i++) {
        result[i] = list[i];
    }
    return result;
};

var getMatrixSum = function(list) {
    var sum = 0;
    for (var i = 0; i < list.length; i++) {
        for (var j = 0; j < list[i].length; j++)  {
            sum = sum + list[i][j];
        }
    }
    return sum;
};




// Перепиши вызовы функций ниже используя call и apply:
// [1, 3, 5, 7].includes(3);
// [1, 3, 5, 7].indexOf(5);
// [1, 3, 5, 7].join('/');
// 'Вася любит яблоки'.replace('яблоки', 'Киев');
// 'Киев — столица Украины'.slice(7, 14)
// [0, 1, 2, 3].map(function(n) { return n + 1; });

[].includes.apply([1, 3, 5, 7], [3]);
[].includes.call([1, 3, 5, 7], 3);

[].indexOf.apply([1, 3, 5, 7], [5]);
[].indexOf.call([1, 3, 5, 7], 5);

[].join.apply([1, 3, 5, 7], ['/']);
[].join.call([1, 3, 5, 7], '/');


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


var m = [2, 5, 45, 27, 1, 58, 33, 2, 43, 91, 3];
var sort = function(list) {
    for (let i = 1; i < list.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if (list[j] > list[i]) {
                let el = list[j];
                list[j] = list[i];
                list[i] = el;
                // если в паре левый больше правого то поменять местами
            }
        }
    }
    return list;
};



//------------------------------------------------------------------------------------------------

class St {
    set(keys, value) {
        var arrayKeys = keys.split('.');
        var obj = this;

        for(var i = 0; i < arrayKeys.length; i++) {
            var key = arrayKeys[i];

            if (i === arrayKeys.length - 1) {
                obj[key] = value;
            } else {
                if (!(obj[key] instanceof Object)) {
                    obj[key] = {};
                }
                obj = obj[key];
            }
        }
    };

    get(keys) {
        var arrayKeys = keys.split('.');
        var obj = this;

        for(var i = 0; i < arrayKeys.length; i++) {
            var key = arrayKeys[i];

            if (i === arrayKeys.length - 1) {
                return obj[key];
            } else {
                if (!(obj[key] instanceof Object)) {
                    return obj[key];
                }
                obj = obj[key];
            }
        }
    };
}

var st = new St;


st.set('n', 5);
st.get('n'); // 5
st.set('a.b.c.d.e', 10);
st.get('a.b.c.d.e'); // 10

//st.a.b.c.d.e

//------------------------------------------------------------------------------------------------
/**
 * Known validation rules:
 *
 * - length: { min, max }
 * - isNumeric: boolean
 * - mustNotContain: [...]
 * - fn: (value) => boolean
 */

const validate = (value, config) => {
    if ('length' in config) {
        if (typeof value === 'number') {
            var length = String(value).length;

            if (length >= config.length.min && length <= config.length.max) {
                return true;
            }
        }
    }

    if ('mustNotContain' in config) {
        return !config.mustNotContain.some(function(el) {
            return value.includes(el);
        })
    }

    if ('fn' in  config) {
        return config.fn();
    }

    return false;
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

//---------------------------------------------------------

//------------------Вращение матрицы------------------


// var rotateLeft = function(matrix) {
//     var result = [];
//     var rows = matrix.length;
//     var columns = matrix[0].length;
//
//     for (let i = columns - 1; i >= 0; i--) {
//         result[columns - 1 - i] = [];
//         for (let j = 0; j < rows; j++) {
//             result[columns - 1 - i].push(matrix[j][i]);
//         }
//     }
//
//     return result;
// };

var rotateLeft = function(matrix) {
    var result = [];
    var rows = matrix.length;
    var columns = matrix[0].length;

    for (let i = columns - 1, k = 0; i >= 0; i--, k++) {
        result[k] = [];
        for (let j = 0; j < rows; j++) {
            result[k].push(matrix[j][i]);
        }
    }

    return result;
};

// [
//   [4, 8, 2],
//   [3, 7, 1],
//   [2, 6, 0],
//   [1, 5, 9],
// ]



const rotateRight = function(matrix) {
    var result = [];
    var rows = matrix.length;
    var columns = matrix[0].length;

    for (let i = 0; i < columns; i++) {
        result[i] = [];
        for (let j = rows - 1; j >= 0; j--) {
            result[i].push(matrix[j][i]);
        }
    }

    return result;
};

rotateRight([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 0, 1, 2],
]);
// [
//   [9, 5, 1],
//   [0, 6, 2],
//   [1, 7, 3],
//   [2, 8, 4],
// ]




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
