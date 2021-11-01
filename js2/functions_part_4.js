// Реализовать нижеуказанные функции.
// ВНИМАНИЕ!
// Соблюдайте форматирование кода (отступы, переносы)
// Не использовать встроенные функции/методы




// Создать объект со свойствами: x, getX, changeX. Где значение свойства "x" это число,
// а getX и changeX это методы которые манипулируют значением этого свойства "x".
// getX возвращает значение свойства "x", а changeX принимает в качестве аргумента число
// и результатом работы этого метода является присваивание этого числа свойству "x" объекта.
let obj = {
    x: 1,
    getX: function() {
        return this.x;
    },
    changeX: function(number) {
        this.x = number;
    }
}



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
const Circle = function(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
};

Circle.prototype.getDiameter = function() {
    let diameter = 2 * this.radius;
    return diameter;
};

Circle.prototype.getPerimeter = function() {
    let diameter = 2 * this.radius;
    let perimeter = 3.14 * diameter;
    return perimeter;
};

Circle.prototype.getSquare = function() {
    let square = 3.14 * this.radius * this.radius;
    return square;
};


// Создать функции size, last, getPositiveNumbers, without, min, sum, как методы массивов
Array.prototype.size = function() {
    return this.length;
};

Array.prototype.last = function() {
    return this[this.length-1];
};

Array.prototype.getPositiveNumbers = function() {
    let list = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] >= 0) {
            list[list.length] = this[i];
        }
    }
    return list;
};

Array.prototype.without = function(value) {
    let list = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] !== value) {
            list[list.length] = this[i];
        }
    }
    return list;
};

Array.prototype.min = function() {
    let min = this[0];
    for (let i = 1; i < this.length; i++) {
        if (this[i] < min) {
            min = this[i];
        }
    }
    return min;
}

Array.prototype.sum = function() {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
        sum += this[i];
    }
    return sum;
};


// Создать функции keys, values, pairs, isEmpty, extend, как методы объектов
Object.prototype.keys = function() {
    let list = [];
    for (let key in this) {
        list[list.length] = key;
    }
    return list;
};

Object.prototype.values = function() {
    let list = [];
    for (let key in this) {
        list[list.length] = this[key];
    }
    return list;
};

Object.prototype.pairs = function() {
    let list = [];
    for (let key in this) {
        list[list.length] = [key, this[key]];
    }
    return list;
};

Object.prototype.isEmpty = function() {
    for (let key in this) {
        return false;
    }
    return true;
};

Object.prototype.extend = function(source) {
    for (let key in source) {
        this[key] = source[key];
    }
    return this;
};



// Создать функцию charAt которая принимает строку и индекс и возвращает указанный символ из строки.
// Пример работы:
// charAt('March', 0);
// => 'M'
const charAt = (string, index) => {
    return string[index];
};



// Создать функцию trim которая удаляет пробельные символы с начала и конца строки.
// Пример работы:
// trim('   Hello world!   ');
// => 'Hello world!'
const trim = (string) => {
    let result = '';

    const findIndex = (array, predicate) => {
        for (let i = 0; i < array.length; i++) {
            if (predicate(array[i])) {
                return i;
            }
        }
        return -1;
    }

    const findLastIndex = (array, predicate) => {
        for (let i = array.length-1; i >= 0; i--) {
            if (predicate(array[i])) {
                return i;
            }
        }
        return -1;
    }

    let begin = findIndex(string, (value) => value !== ' ');
    let end = findLastIndex(string, (value) => value !== ' ');

    for (let i = begin; i <= end; i++) {
        result += string[i];
    }

    return result;
};

const trim2 = (string) => {
    let result = '';
    let beginIndex;
    let endIndex;

    for (let i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            beginIndex = i;
            break;
        }
    }

    for (let i = string.length-1; i >= 0; i--) {
        if (string[i] !== ' ') {
            endIndex = i;
            break;
        }
    }

    for (let i = beginIndex; i >= beginIndex && i <= endIndex; i++) {
        result += string[i];
    }

    return result;
}



// Создать функцию join которая принимает массив и возвращает строку состоящую из его элементов разделенных запятой (по-умолчанию) или любым другим разделителем (строкой) указанным во втором аргументе вызываемой функции.
// Пример работы:
// join([1, 'lol', 5, 'dro']);
// => "1,lol,5,dro"
// join([1, 'lol', 5, 'dro'], '+');
// => "1+lol+5+dro"
const join = (array, separator=',') => {
    let result = '';

    for (let i = 0; i < array.length; i++) {
        result += (i === array.length-1) ? array[i] : array[i] + separator;
    }

    return result;
};



// Познакомиться с возможностями базовых (встроенных) классов
// Number
//     Number.prototype: toFixed
// String
//     String.prototype: charAt, concat, includes, indexOf, lastIndexOf, repeat, replace, slice, split,
//         substr, substring, toLowerCase, toUpperCase, trim
// Array
//     Array.prototype: concat, forEach, includes, indexOf, join, lastIndexOf, pop, push, reverse,
//         shift, slice, splice, unshift, length, sort, map, filter, every, some, reduce, reduceRight
// Object: keys, values, create, assign, entries
//     Object.prototype: hasOwnProperty
// Function
//     Function.prototype: apply, call, bind

// Привести примеры использования ниже
