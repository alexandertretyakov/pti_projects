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




// Написать функцию преобразования getSearchParams которая принимает строку вида '?a=1&b=2&c=3&d=4' и возвращает объект вида {a: '1', b: '2', c: '3', d: '4'}
// Можно использовать любые изученные встроенные методы
// Пример работы:
// getSearchParams('');
// => {}
// getSearchParams('?a=6&b=9');
// => {a: '6', b: '9'}
