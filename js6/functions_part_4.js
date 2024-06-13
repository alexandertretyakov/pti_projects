// Реализовать нижеуказанные функции.
// ВНИМАНИЕ!
// Соблюдайте форматирование кода (отступы, переносы)
// Не использовать встроенные функции/методы


// Создать объект со свойствами: x, getX, changeX. Где значение свойства "x" это число,
// а getX и changeX это методы которые манипулируют значением этого свойства "x".
// getX возвращает значение свойства "x", а changeX принимает в качестве аргумента число
// и результатом работы этого метода является присваивание этого числа свойству "x" объекта.
var object = {
    x: 5,
    getX: function () {
        return this.x;
    },
    changeX: function(number) {
        return this.x = number;
    }
};




// Создать функцию-конструктор Circle которая принимает 3 параметра:
// координаты центра окружности (x, y) и ее радиус (radius).
// Возвращает объект с собственными тремя свойствами (x, y, radius) и унаследованными тремя методами.
// 1. Метод getDiameter возвращает диаметр откружности. Формула расчета диаметра: diameter = 2 * radius
// 2. Метод getPerimeter возвращает длину откружности. Формула расчета длины окружности: perimeter = 3.14 * diameter
// 3. Метод getSquare возвращает площадь откружности. Формула расчета площади окружности: square = 3.14 * (radius в квадрате)
// Пример работы:
// var circle = new Circle(5, 5, 5);
// circle.getDiameter();
// => 10
// circle.getPerimeter();
// => 31.41592653589793
// circle.getSquare();
// => 78.53981633974483
//--------1 вариант---------
// const Circle = function(x, y, radius) {
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
// };
//
// Circle.prototype.getDiameter = function() {
//     let diameter = 2 * this.radius;
//
//     return diameter;
// };
//
// Circle.prototype.getPerimeter = function() {
//     let diameter = 2 * this.radius;
//     let perimeter = 3.14 * diameter;
//
//     return perimeter;
// };
//
// Circle.prototype.getSquare = function() {
//     let square = 3.14 * (this.radius * this.radius);
//
//     return square;
// };
//--------2 вариант-ES-6-------
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



// Создать класс Product который принимает 2-4 параметра в виде объекта:
// название, цена, скидка в % (необязательный) и кэшбэк в % (необязательный)
// Возвращает объект с двумя-четырмя собственными свойствами (title, price, discountRate, cashbackRate) и двумя унаследованными методами.
// 1. Метод getPriceWithDiscount возвращает цену с учетом скидки. Формула расчета цены с учетом скидки: цена с учетом скидки = price - price * discountRate / 100
// 2. Метод getCashbackAmount возвращает сумму кэшбэка. Формула расчета суммы кэшбэка: сумма кэшбэка = price * cashbackRate / 100
// Пример работы:
// var apple = new Product({title: 'Apple', price: 250, discountRate: 10, cashbackRate: 1});
// apple.getPriceWithDiscount();
// => 225
// apple.getCashbackAmount();
// => 2.25
// var pear = new Product({title: 'Pear', price: 650});
// pear.getPriceWithDiscount();
// => 650
// pear.getCashbackAmount();
// => 0
//--------1 вариант---------
// const Product = function(options) {
//     Object.assign(this, options);
// };
//
// Product.prototype.getPriceWithDiscount = function() {
//     return this.discountRate ?
//         this.price - this.price * this.discountRate / 100 :
//         this.price;
// };
//
// Product.prototype.getCashbackAmount = function() {
//     return this.cashbackRate ?
//         this.price * this.cashbackRate / 100 :
//         0;
// };

//--------2 вариант-ES-6-------
// class Product {
//     constructor(options) {
//         Object.assign(this, options);
//     }
//
//     getPriceWithDiscount() {
//         return this.discountRate ?
//             this.price - this.price * this.discountRate / 100 :
//             this.price;
//     }
//
//     getCashbackAmount() {
//         return this.cashbackRate ?
//             this.price * this.cashbackRate / 100 :
//             0;
//     }
// }



// Создать функции size, last, getPositiveNumbers, without, min, sum, как методы массивов
// Примеры работы:
// [7, 2, 8].size();
// => 3
Array.prototype.size = function() {
    return this.length;
};

// [5, 4, 3, 2, 1].last();
// => 1
Array.prototype.last = function() {
    return this[this.length-1];
};

// [10, -5, 100, -2, 1000].getPositiveNumbers();
// => [10, 100, 1000]
Array.prototype.last = function() {
    return this[this.length-1];
};

// [3, 6, 7, 'rere'].without(6);
// => [3, 7, 'rere']
Array.prototype.without = function(value) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        if (this[i] !== value) {
            result[result.length] = this[i];
        }
    }

    return result;
};

// [10, 5, 100, 2, 1000].min();
// => 2
Array.prototype.min = function() {
    let min = this[0];

    for (let i = 1; i < this.length; i++) {
        if (this[i] < min) {
            min = this[i];
        }
    }

    return min;
};

// [2, 2, 3].sum();
// => 7
Array.prototype.sum = function() {
    let sum = 0;

    for (let i = 0; i < this.length; i++) {
        sum += this[i];
    }

    return sum;
};


// Создать функции keys, values, pairs, extend, как методы объектов
Object.prototype.keys = function() {
    let result = [];

    for (let prop in this) {
        if (this.hasOwnProperty(prop)) {
            result[result.length] = prop;
        }
    }

    return result;
};

Object.prototype.values = function() {
    let result = [];

    for (let prop in this) {
        if (this.hasOwnProperty(prop)) {
            result[result.length] = this[prop];
        }
    }

    return result;
};

Object.prototype.pairs = function() {
    let result = [];

    for (let prop in this) {
        if (this.hasOwnProperty(prop)) {
            result[result.length] = [prop, this[prop]];
        }
    }

    return result;
};

Object.prototype.extend = function(source) {
    for (let prop in source) {
        if (this.hasOwnProperty(prop)) {
            if (source[prop] !== this[prop]) {
                this[prop] = source[prop];
            }
        }
    }

    return this;
};


// Создать функцию charAt которая принимает строку и индекс и возвращает указанный символ из строки.
// Пример работы:
// charAt('March', 0);
// => 'M'
const charAt = (string, value) => string[value];

// Создать функцию join которая принимает массив и возвращает строку состоящую из его элементов разделенных запятой (по-умолчанию) или любым другим разделителем (строкой) указанным во втором аргументе вызываемой функции.
// Пример работы:
// join([1, 'lol', 5, 'dro']);
// => "1,lol,5,dro"
// join([1, 'lol', 5, 'dro'], '+');
// => "1+lol+5+dro"
const join = (array, symbol) => {
    let resultTransitional = '';
    let result = '';

    for (let i = 0; i < array.length; i++) {
        if (symbol === undefined) {
            resultTransitional += array[i] + ',';
        } else {
            resultTransitional += array[i] + symbol;
        }
    }

    for (let i = 0; i < resultTransitional.length - 1; i++) {
        result += resultTransitional[i];
    }

    return result;
};


// Познакомиться с возможностями базовых (встроенных) классов
// Number
//     Number.prototype: toFixed
1.12345.toFixed(3); // => '1.123'

// String
//     String.prototype: charAt, concat, includes, indexOf, lastIndexOf, repeat, replace, slice, split,
//         substr, substring, toLowerCase, toUpperCase, trim
'Interpretation'.charAt(6); // => 'r'

'Interpretation'.concat(' text'); // => 'Interpretation text'

'Interpretation'.includes('rpr'); // => true

'Interpretation'.indexOf('t'); // => 2

'Interpretation'.lastIndexOf('t'); // => 10

'Interpretation'.repeat(2); // => 'InterpretationInterpretation'

'Interpretation'.replace('Interpretatio', 'O'); // => 'On'

'Interpretation'.slice(4); // => 'rpretation'
'Interpretation'.slice(4, 7); // => 'rpr'

'Interpretation'.split(); // => ['Interpretation']
'Interpretation'.split('r'); // => ['Inte', 'p', 'etation']

'Interpretation'.substr(4); // => 'rpretation'
'Interpretation'.substr(4, 7); // => 'rpretat'

'Interpretation'.substring(4); // => 'rpretation'
'Interpretation'.substring(4, 7); // => 'rpr'

'Interpretation'.toLowerCase(); // => 'interpretation'

'Interpretation'.toUpperCase(); // => 'INTERPRETATION'

'       Interpretation       '.trim(); // => 'Interpretation'


// Array
//     Array.prototype: concat, forEach, includes, indexOf, join, lastIndexOf, pop, push, reverse,
//         shift, slice, splice, unshift, length, sort, map, filter, every, some, reduce, reduceRight
[11, 22, 'string', true].concat(1, 2, 3); // => [11, 22, 'string', true, 1, 2, 3]

[11, 22, 'string', true].forEach(function (el, i) {
    console.log('Элемент ' + el + ' находится по индексу ' + i);
}); // Элемент 11 находится по индексу 0
    // Элемент 22 находится по индексу 1
    // Элемент string находится по индексу 2
    // Элемент true находится по индексу 3

[11, 22, 'string', true].includes(22); // => true
[11, 22, 'string', true].includes(false); // => false

[11, 22, 'string', true].indexOf(22); // => 1;

[11, 22, 'string', true].join(); // => '11,22,string,true'
[11, 22, 'string', true].join('---'); // => '11---22---string---true'

[11, 22, 'string', true, 22].lastIndexOf(22); // => 4

[11, 22, 'string', true, 22].pop(); // => 22 - удалит последний элемент массива и выведет его

[11, 22, 'string', true].push(33); // => 5 Добавит элемент в массив и вернёт его индекс

[11, 22, 'string', true].reverse(); // => [true, 'string', 22, 11]

[11, 22, 'string', true].shift(); // => 11 - удалит первый элемент массива и выведет его длину

[11, 22, 'string', true].slice(1, 3); // => [22, 'string']

[11, 22, 'string', true].splice(1, 3); // => [22, 'string', true]

[11, 22, 'string', true].unshift(333); // => 5 Добавит элемент в начало массива и вернёт его длину

[11, 22, 'string', true].length; // => 4

[11, 22, 'string', true, 3, 17, 45, 5].sort(); // => [11, 17, 22, 3, 45, 5, 'string', true]

[1, 2, 3, 4, 5].map(function(el) {
    return el * 3;
}); // => [3, 6, 9, 12, 15]

[1, 2, 3, 4, 5].filter(function(el) {
    return el > 3;
}); // => [4, 5]

[11, -22, 51, -2, 86].every(function(el) {
    return el > 50;
}); // => false
[61, 62, 51, 72, 86].every(function(el) {
    return el > 50;
}); // => true

[11, -22, 50, -2, 86].some(function(el) {
    return el > 50;
}); // => true
[11, -22, 5, -2, 8].some(function(el) {
    return el > 50;
}); // => false

[1, 2, 3, 4, 5].reduce(function(sum, el) {
    return sum + el;
}, 100); // => 115 - reduceRight - аналогично, только обход начинается с конца массива


// Object: keys, values, create, assign, entries
var obj = {
    name: 'Вася',
    age: 18
};

Object.keys(obj); // => ['name', 'age'];

Object.values(obj); // => ['Вася', 18];

var objProto = Object.create(obj);
objProto.__proto__; // => {name: 'Вася', age: 18} - вернёт пустой объект у которого в прототипе будет объект передаваемый ф-ции create;

Object.assign(obj, {height: 170}); // => {name: 'Вася', age: 18, height: 170}


//      Object.prototype: hasOwnProperty
obj.hasOwnProperty('name'); // => true


// Function
//     Function.prototype: apply, call, bind



// Создать функцию reduce...
// Пример работы:
// reduce([1, 2, 3], function(memo, num) { return memo + num; }, 0);
// => 6
const reduce = (array, func, memo) => {
    let i = 0;

    if (memo === undefined) {
        memo = array[0];
        i = 1;
    }

    for (; i < array.length; i++) {
        memo = func(memo, array[i]);
    }

    return memo;
};

// Создать функцию uniq... Принимает массив значений и возвращает массив уникальных значений.
// Можно использовать любые изученные встроенные методы
// Пример работы:
// uniq([2, 6, 2, 5, 2]);
// => [2, 6, 5]
//--------1 вариант---------
// const uniq = (array) => {
//     let result = [];
//
//     for (let i = 0; i < array.length; i++) {
//         if (!result.includes(array[i])) {
//             result[result.length] = array[i];
//         }
//     }
//
//     return result;
// };

//--------2 вариант---------
const uniq = (array) => {
    return array.reduce(function(memo, el) {
        if (!memo.includes(el)) {
            memo.push(el);
        }
        return memo;
    }, []);
};

// Создать функцию count... Принимает массив значений и возвращает объект где ключи это уникальные значения, а значения это их количество.
// Пример работы:
// count(['apple', 'plum', 'apple', 'banana', 'pear', 'pear']);
// => {apple: 2, plum: 1, banana: 1, pear: 2}
//--------1 вариант---------
// const count = (array) => {
//     let result = {};
//
//     for (let i = 0; i < array.length; i++) {
//         if (result[array[i]]) {
//             result[array[i]] += 1;
//         } else {
//             result[array[i]] = 1;
//         }
//     }
//
//     return result;
// };
//--------2 вариант---------
const count = (array) => {
    return array.reduce(function(memo, el) {
        if (memo[el]) {
            memo[el] += 1;
        } else {
            memo[el] = 1;
        }
        return memo;
    }, {});
};

// Написать функцию преобразования getSearchParams которая принимает строку вида '?a=1&b=2&c=3&d=4' и возвращает объект вида {a: '1', b: '2', c: '3', d: '4'}
// Можно использовать любые изученные встроенные методы
// Пример работы:
// getSearchParams('');
// => {}
// getSearchParams('?x=6&y=9&radius=69');
// => {x: '6', y: '9', radius: 69}

// const getSearchParams = (string) => {
//     let result = {};
//
//     if (string !== '') {
//         string = string.slice(1);
//         let pairs = string.split('&');
//
//         for (let i = 0; i < pairs.length; i++) {
//             let [key, value] = pairs[i].split('=');
//             result[key] = value;
//         }
//     }
//
//     return result;
// };

const getSearchParams = (string) => {
    return string
        .slice(1)
        .split('&')
        .map((pair) => pair.split('='))
        .reduce((memo, pair) => {
            const [key, value] = pair;

            return {
                ...memo,
                [key]: value
            };
        }, {});
};

//Написать ф-цию chink
//chunk(["Tyrone", "Elie", "Aidan", "Sam", "Katrina", "Billie", "Little Timmy"], 2);
const chunk = (array, length) => {
    let result = [];

    for (let i = 0; i < array.length; i+= length) {
        let sliceArray = array.slice(i, i + length);
        result.push(sliceArray);
    }

    return result;
};

//Написать ф-цию zip
//zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
// => [["moe", 30, true], ["larry", 40, false], ["curly", 50, false]];
const zip = (...pairs) => {
    const oCount = Math.max(...pairs.map(m => m.length));
    const pCount = pairs.length;
    let result = [];

    for (let i = 0; i < oCount; i++) {
        result[i] = [];
        for (let j = 0; j < pCount; j++) {
            result[i].push(pairs[j][i]);
        }
    }

    return result;
};

//Написать ф-цию unzip
//unzip([["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]);
// => [['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]]
const unzip = (pairs) => {
    const oCount = Math.max(...pairs.map(m => m.length));
    const pCount = pairs.length;
    let result = [];

    for (let i = 0; i < oCount; i++) {
        result[i] = [];
        for (let j = 0; j < pCount; j++) {
            result[i].push(pairs[j][i]);
        }
    }

    return result;
};