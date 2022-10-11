// Создать функции lastIndexOf, shift, getMatrixSum из файла js/functions_part_1 используя цикл for




// Перепиши вызовы функций ниже используя call или apply:
// [1,3,5,7].includes(3);
// [1,3,5,7].indexOf(5);
// [1,3,5,7].join('/');

[].includes.apply([1,3,5,7], [3]);
[].includes.call([1,3,5,7], 3);

[].indexOf.apply([1,3,5,7], [5]);
[].indexOf.call([1,3,5,7], 5);

[].join.apply([1,3,5,7], ['/']);
[].join.call([1,3,5,7], '/');

Array.prototype.includes.apply([1,3,5,7], [3]);
Array.prototype.includes.call([1,3,5,7], 3);

Array.prototype.indexOf.apply([1,3,5,7], [5]);
Array.prototype.indexOf.call([1,3,5,7], 5);

Array.prototype.join.apply([1,3,5,7], ['/']);
Array.prototype.join.call([1,3,5,7], '/');

// Создать функцию sumOfAllArguments которая принимает произвольное количество чисел и возвращает их сумму.
// Пример работы:
// sumOfAllArguments(2, 2, 3);
// => 7
// sumOfAllArguments(2, 2, 3, 3, 10);
// => 20

var sumOfAllArguments = function() {
    var sum = 0;
    var i = 0;
    while (i < arguments.length) {
        sum += arguments[i];
        i++;
    }
    return sum;
}


// Познакомиться с работой следующих встроенных свойств, функций и методов
// Math: abs, ceil, floor, max, min, pow, random, round, sqrt, trunc
// JSON: stringify, parse

// Привести примеры использования ниже




// Создать функцию trim которая удаляет пробельные символы с начала и конца строки.
// Пример работы:
// trim('   Hello world!   ');
// => 'Hello world!'
var trim = function(string) {
    var firstIndex;
    var lastIndex;
    var result = '';

    for (let i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            firstIndex = i;
            break;
        }
    }

    for (let i = string.length-1; i >= 0; i--) {
        if (string[i] !== ' ') {
            lastIndex = i;
            break;
        }
    }

    for (let i = firstIndex; i <= lastIndex; i++) {
        result += string[i];
    }

   return result;
};


// Создать функцию reduce...
// Пример работы:
// reduce([1, 2, 3], function(memo, num) { return memo + num; }, 0);
// => 6
var reduce = function(list, iteratee, memo) {
    var i = 0;

    if (memo === undefined) {
        memo = list[0];
        i = 1;
    }

    while (i < list.length) {
        memo = iteratee(memo, list[i]);
        i++;
    }

    return memo;
};




// Создать функцию uniq... Принимает массив значений и возвращает массив уникальных значений.
// Можно использовать любые изученные встроенные методы
// Пример работы:
// uniq([2, 6, 2, 5, 2]);
// => [2, 6, 5]
var uniq = function(list) {
    return list.reduce((memo, item) => {
        if (!memo.includes(item)) {
            memo.push(item);
        }
        return memo;
    }, []);
};



// Создать функцию count... Принимает массив значений и возвращает объект где ключи это уникальные значения, а значения это их количество.
// Пример работы:
// count(['apple', 'plum', 'apple', 'banana', 'pear', 'pear']);
// => {apple: 2, plum: 1, banana: 1, pear: 2}
var count = function(list) {
    return list.reduce((memo, item) => {
        if (memo[item]) {
            memo[item] += 1;
        } else {
            memo[item] = 1;
        }
        return memo;
    }, {});
};



// Написать функцию преобразования getSearchParams которая принимает строку вида '?a=1&b=2&c=3&d=4' и возвращает объект вида {a: '1', b: '2', c: '3', d: '4'}
// Можно использовать любые изученные встроенные методы
// Пример работы:
// getSearchParams('');
// => {}
// getSearchParams('?a=6&b=9');
// => {a: '6', b: '9'}
var getSearchParams = function(string) {
    return string
        .substring(1)
        .split('&')
        .map(function(pair) {
            return pair.split('=');
        })
        .reduce(function(memo, pair) {
            memo[pair[0]] = pair[1];
            return memo;
        }, {});
};