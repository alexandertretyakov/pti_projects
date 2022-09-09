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




// Познакомиться с работой следующих встроенных свойств, функций и методов
// Math: abs, ceil, floor, max, min, pow, random, round, sqrt, trunc
// JSON: stringify, parse

// Привести примеры использования ниже




// Создать функцию reduce...
// Пример работы:
// reduce([1, 2, 3], function(memo, num) { return memo + num; }, 0);
// => 6
var reduce = function(list, iteratee, memo) {
    // write your code here
};




// Создать функцию uniq... Принимает массив значений и возвращает массив уникальных значений.
// Можно использовать любые изученные встроенные методы
// Пример работы:
// uniq([2, 6, 2, 5, 2]);
// => [2, 6, 5]
var uniq = function(list) {
    return list.reduce((memo, item) => {
        // write your code here
    }, []);
};




// Создать функцию count... Принимает массив значений и возвращает объект где ключи это уникальные значения, а значения это их количество.
// Пример работы:
// count(['apple', 'plum', 'apple', 'banana', 'pear', 'pear']);
// => {apple: 2, plum: 1, banana: 1, pear: 2}
var count = function(list) {
    return list.reduce((memo, item) => {
        // write your code here
    }, {});
};




// Написать функцию преобразования getSearchParams которая принимает строку вида '?a=1&b=2&c=3&d=4' и возвращает объект вида {a: '1', b: '2', c: '3', d: '4'}
// Можно использовать любые изученные встроенные методы
// Пример работы:
// getSearchParams('');
// => {}
// getSearchParams('?a=6&b=9');
// => {a: '6', b: '9'}
