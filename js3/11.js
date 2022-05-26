// Создать функцию isEven которая возвращает true если число четное или false в противном случае.
// Пример работы:
// isEven(10);
// => true
// isEven(8);
// => true
// isEven(7);
// => false
const isEven = (number) => {
     if (number % 2 === 0) {
         return true;
     } else {
         return false;
     }
};




// Создать функцию indexOf которая вернёт позицию, на которой находится элемент value в массиве array, или -1, если данный элемент не был найден.
// Пример работы:
// indexOf([7, 2, 3], 2);
// => 1
// indexOf([7, 2, 3], 7);
// => 0
// indexOf([7, 2, 3], 5);
// => -1
const indexOf = (array, value) => {
    var i = 0;
    while(i < array.length) {
        if (array[i] === value) {
            return i;
        }
        i++;
    }
    return -1;
};




// Создать функцию reverse которая принимает массив и возвращает копию входящего массива с элементами в обратном порядке.
// Пример работы:
// reverse([1, 'lol', 5, {}, []]);
// => [[], {}, 5, "lol", 1]
const reverse = (array) => {
    var i = array.length-1;
    var arrayCopy = [];
    while(i >= 0) {
        arrayCopy[arrayCopy.length] = array[i];
        i--;
    }
    return arrayCopy;
};




// Создать функцию contains которая принимает два входящих параметра (массив значений простых типов данных и значение простого типа данных).
// Функция вернет true если в массиве содержится определенное значение. Иначе функция вернет false.
// Пример работы:
// contains([1, 2, 3], 3);
// => true
const contains = (array, value) => {
    var i = 0;
    while(i < array.length) {
        if (array[i] === value) {
            return true;
        }
        i++;
    }
    return false;
};




// Создать функцию slice которая принимает 3 параметра. Массив и два числа (begin и end). Возвращает копию части исходного массива. Начиная с индекса begin и заканчивая индексом end включительно (или концом массива если параметр end отстутствует).
// Пример работы:
// slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2, 3);
// => ['camel', 'duck']
const slice = (array, begin, end) => {
    var i = begin;
    var arrayCopy = [];
    while(i <= end) {
        arrayCopy[arrayCopy.length] = array[i];
        i++;
    }
    return arrayCopy;
};




// Создать функцию min которая принимает в качестве единственного входящего параметра массив чисел и возвращает наименьшее из них.
// Пример работы:
// min([10, 5, 100, 2, 1000]);
// => 2
const min = (array) => {
    var i = 1;
    var min = array[0];
    while(i < array.length) {
        if (min > array[i]) {
            min = array[i];
        }
        i++;
    }
    return min;
};




// Создать функцию sum которая принимает массив чисел и возвращает их сумму.
// Пример работы:
// sum([2, 2, 3]);
// => 7
const sum = (array) => {
    var i = 0;
    var sum =0;
    while(i < array.length) {
        sum = sum + array[i];
        i++;
    }
    return sum;
};




// Создать функцию keys которая возвращает массив имен всех свойств(ключей) принимаемого объекта.
// Пример работы:
// keys({one: 1, two: 2, three: 3});
// => ["one", "two", "three"]
const keys = (object) => {
    var arrayKeys = [];
    var prop;
    for(prop in object) {
        arrayKeys[arrayKeys.length] = prop;
    }
    return arrayKeys;
};




// Создать функцию pairs которая возвращает список пар [свойство, значение] входящего объекта.
// Пример работы:
// pairs({one: 1, two: 2, three: 3});
// => [["one", 1], ["two", 2], ["three", 3]]
const pairs = (object) => {
    var arrayPairs = [];
    var prop;
    for(prop in object) {
        arrayPairs[arrayPairs.length] = [prop, object[prop]];
    }
    return arrayPairs;
};




// Создать функцию invert которая возвращает копию входящего объекта где свойства - значения, а значения - свойства.
// Чтобы это заработало, нужно, чтобы все значения свойств объекта могли быть уникально преобразованы в строки.
// Пример работы:
// invert({Moe: "Moses", Larry: "Louis", Curly: "Jerome"});
// => {Moses: "Moe", Louis: "Larry", Jerome: "Curly"}
const invert = (object) => {
    var prop;
    var objCopy = {};
    for(prop in object) {
        objCopy[object[prop]] = prop;
    }
    return objCopy;
};




// Создать функцию has которая проверяет, содержит ли объект указанный ключ (свойство). Если да, то возвращает true иначе false.
// Пример работы:
// has({a: 1, b: 2, c: 3}, 'b');
// => true
const has = (object, property) => {
    var prop;
    for(prop in object) {
        if (prop === property) {
            return true;
        }
    }
    return false;
};




// Создать функцию omit которая возвращает копию объекта без указанного свойства.
// Пример работы:
// omit({name: 'moe', age: 50, userid: 'moe1'}, 'userid');
// => {name: 'moe', age: 50}
const omit = (object, property) => {
    var prop;
    var copyObj = {};
    for(prop in object) {
        if (property !== prop) {
            copyObj[prop] = object[prop];
        }
    }
    return copyObj;
};




// Создать функцию map с двумя входными параметрами (массив и функция iteratee). Функция map возвращает новый массив, полученный преобразованием каждого элемента массива в функции iteratee.
// Функция iteratee получает два аргумента: значение value, индекс index.
// Пример работы:
// map([1, 2, 3], function(value) { return value * 3; });
// => [3, 6, 9]
const map = (array, iteratee) => {
    var i = 0;
    var arrayCopy = [];
    while(i < array.length) {
        arrayCopy[arrayCopy.length] = iteratee(array[i], i);
        i++;
    }
    return arrayCopy;
};




// Создать функцию find с двумя входными параметрами (массив list и функция predicate). Функция find вызывает для каждого элемента list функцию сравнения predicate, возвращая первый элемент, для которого predicate вернула true, или undefined, если ни один элемент не подошёл.
// Пример работы:
// find([1, 2, 3, 4, 5, 6], function(num) { return num % 2 === 0; });
// => 2
const find = (list, predicate) =>  {
    var i = 0;
    while(i < list.length) {
        if (predicate(list[i], i)) {
            return true;
        }
        i++;
    }
    return false;
};




// Создать функцию filter с двумя входными параметрами (массив list и функция predicate) которая проходит через каждое значение list, возвращая массив всех значений, для которых predicate вернул true.
// Пример работы:
// filter([1, 2, 3, 4, 5, 6], function(num) { return num % 2 === 0; });
// => [2, 4, 6]
const filter = (list, predicate) => {
    var i = 0;
    var listCopy = [];
    while(i < list.length) {
        if (predicate(list[i], i)) {
            listCopy[listCopy.length] = list[i];
        }
        i++;
    }
    return listCopy;
};




// Создать функцию every с двумя входными параметрами (массив list и функция predicate). Вернёт true, если для каждого значения из list predicate вернёт true.
// Пример работы:
// every([2, 4, 5], function(num) { return num % 2 === 0; });
// => false
const every = (list, predicate) => {
    var i = 0;
    while(i < list.length) {
        if (predicate(list[i], i) !== true) {
            return false;
        }
        i++;
    }
    return true;
};




// Создать функцию reduce...
// Пример работы:
// reduce([1, 2, 3], function(memo, num) { return memo + num; }, 0);
// => 6
const reduce = (list, iteratee, memo) => {
    var i = 0;

    if (memo === undefined) {
        memo = list[0];
        i = 1;
    }

    while(i < list.length) {
        memo = iteratee(memo, list[i]);
        i++;
    }
    return memo;
};
