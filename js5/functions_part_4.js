// Реализовать нижеуказанные функции.
// ВНИМАНИЕ!
// Соблюдайте форматирование кода (отступы, переносы)
// Не использовать встроенные функции/методы


// Создать объект со свойствами: x, getX, changeX. Где значение свойства "x" это число,
// а getX и changeX это методы которые манипулируют значением этого свойства "x".
// getX возвращает значение свойства "x", а changeX принимает в качестве аргумента число
// и результатом работы этого метода является присваивание этого числа свойству "x" объекта.
var obj = {
    x: 4,
    getX: function() {
        return this.x;
    },
    changeX: function(number) {
        this.x = number;
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
var Circle = function(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
};

Circle.prototype.getDiameter = function() {
    let diameter = 2 * this.radius;
    return diameter;
};

Circle.prototype.getPerimeter = function() {
    let perimeter = 3.14 * this.getDiameter();
    return perimeter;
};

Circle.prototype.getSquare = function() {
    let square = 3.14 * this.radius * this.radius;
    return square;
};


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
var Product = function(obj) {//TODO:-----------------------------------------------------
    var prop;
    var arg = arguments[0];

    for(prop in arg) {
        this.prop = arg[prop];
    }

    console.log(arguments[0]);
};

Product.prototype.getPriceWithDiscount = function() {
    var totalPrice = this.price - this.price * this.discountRate / 100;
    return totalPrice;
};

Product.prototype.getCashbackAmount = function() {
    var cashbackSum = this.price * this.cashbackRate / 100;
    return cashbackSum;
};

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
    return this[this.length - 1];
};

// [10, -5, 100, -2, 1000].getPositiveNumbers();
// => [10, 100, 1000]
Array.prototype.getPositiveNumbers = function() {
    var i = 0;
    var result = [];

    while (i < this.length) {
        if (this[i] > 0) {
            result[result.length] = this[i];
        }
        i++;
    }
    return result;
};

// [3, 6, 7, 'rere'].without(6);
// => [3, 7, 'rere']
Array.prototype.without = function(args) {
    var i = 0;
    var result = [];

    while (i < this.length) {
        if (this[i] !== args) {
            result[result.length] = this[i];
        }
        i++;
    }
    return result;
};

// [10, 5, 100, 2, 1000].min();
// => 2
Array.prototype.min = function() {
    var i = 0;
    var result = this[0];

    while (i < this.length) {
        if (this[i] < result) {
            result = this[i];
        }
        i++;
    }
    return result;
};

// [2, 2, 3].sum();
// => 7
Array.prototype.sum = function() {
    var i = 0;
    var sum = 0;

    while (i < this.length) {
        sum += this[i];
        i++;
    }
    return sum;
};


// Создать функции keys, values, pairs, extend, как методы объектов
Object.prototype.keys = function() {
    var prop;
    var result = [];

    for (prop in this) {
        result[result.length] = prop;
    }
    return result;
};

Object.prototype.values = function() {
    var prop;
    var result = [];

    for (prop in this) {
        result[result.length] = this[prop];
    }
    return result;
};

Object.prototype.pairs = function() {
    var prop;
    var result = [];

    for (prop in this) {
        result[result.length] = [prop, this[prop]];
    }
    return result;
};

Object.prototype.isEmpty = function() {
    var prop;

    for (prop in this) {
        return true;
    }
    return false;
};

Object.prototype.extend = function(obj) {
    var prop;

    for (prop in obj) {
        this[prop] = obj[prop];
    }
    return this;
};


// Создать функцию charAt которая принимает строку и индекс и возвращает указанный символ из строки.
// Пример работы:
// charAt('March', 0);
// => 'M'
var charAt = function(string, index) {
    return string[index];
};

// Создать функцию join которая принимает массив и возвращает строку состоящую из его элементов разделенных запятой (по-умолчанию) или любым другим разделителем (строкой) указанным во втором аргументе вызываемой функции.
// Пример работы:
// join([1, 'lol', 5, 'dro']);
// => "1,lol,5,dro"
// join([1, 'lol', 5, 'dro'], '+');
// => "1+lol+5+dro"
var join = function(list) {
    var i = 0;
    var result = '';

    while (i < list.length) {
        result[i] = list[0];
        i++;
    }
    return result;
};//TODO:-----------------------------------------------------


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
//TODO:-----------------------------------------------------



// Создать функцию reduce...
// Пример работы:
// reduce([1, 2, 3], function(memo, num) { return memo + num; }, 0);
// => 6
var reduce = function(list, iteratee, memo) {
    for (var i = 0; i < list.length; i++) {
        memo = iteratee(memo, list[i]);
    }
    return memo;
};

// Создать функцию uniq... Принимает массив значений и возвращает массив уникальных значений.
// Можно использовать любые изученные встроенные методы
// Пример работы:
// uniq([2, 6, 2, 5, 2]);
// => [2, 6, 5]
var uniq = function(list) {
    return list.reduce(function(memo, item) {
        if (!memo.includes(item)) {
            memo[memo.length] = item;
        }
        return memo;
    }, []);
};

// Создать функцию count... Принимает массив значений и возвращает объект где ключи это уникальные значения, а значения это их количество.
// Пример работы:
// count(['apple', 'plum', 'apple', 'banana', 'pear', 'pear']);
// => {apple: 2, plum: 1, banana: 1, pear: 2}
var count = function(list) {
    return list.reduce(function(memo, item) {
        if (memo[item]) {
            memo[item] = memo[item] + 1;
        } else {
            memo[item] = 1
        }
        return memo;//TODO: спросить за 0
    }, {});
};

// Написать функцию преобразования getSearchParams которая принимает строку вида '?a=1&b=2&c=3&d=4' и возвращает объект вида {a: '1', b: '2', c: '3', d: '4'}
// Можно использовать любые изученные встроенные методы
// Пример работы:
// getSearchParams('');
// => {}
// getSearchParams('?x=6&y=9&radius=69');
// => {x: '6', y: '9', radius: 69}
var getSearchParams = function(string) {
    return string.slice(1).split('&').map(function(el) {
        return el.split('=');
    }).reduce(function(memo, item) {
        memo[item[0]] = item[1];
        return memo;
    }, {});
};