// Реализовать нижеуказанные функции.
// ВНИМАНИЕ!
// Соблюдайте форматирование кода (отступы, переносы)
// Не использовать встроенные функции/методы




// Создать функции size, last, getPositiveNumbers, without, min, sum, как методы массивов
Array.prototype.size = function () {
    return this.length;
};

Array.prototype.last = function () {
    return this[this.length-1];
}

Array.prototype.getPositiveNumbers = function () {
    var i = 0;
    var result = [];
    while (i < this.length) {
        if (this[i] > 0) {
            result[result.length] = this[i];
        }
        i++
    }
    return result;
}

Array.prototype.without = function (value) {
    var i = 0;
    var result = [];
    while (i < this.length) {
        if (this[i] !== value ) {
            result[result.length] = this[i]
        }
        i++;
    }
    return result;
}

Array.prototype.min = function () {
    var i = 0;
    var result = this[0];
    while (i < this.length) {
        if (result > this[i]) {
            result = this[i];
        }
        i++
    }
    return result;
}

Array.prototype.sum = function () {
    var i = 0;
    var sum = 0;
    while (i < this.length) {
        sum = sum + this[i];
        i++;
    }
    return sum
}

// Создать функции keys, values, pairs, isEmpty, extend, как методы объектов
Object.prototype.keys = function () {
    var list = [];
    var prop;
    for (prop in this) {
        list[list.length] = prop;
    }
}

Object.prototype.values = function () {
    var key = [];
    var prop;
    for (prop in this) {
        key[key.length] = this[prop];
    }
    return key;
}

Object.prototype.pairs = function () {
    var list = [];
    var prop;
    for (prop in this) {
        list[list.length] = [prop, this[prop]];
    }
    return list;
}

Object.prototype.isEmpty = function () {
    for (prop in this) {
        return true;
    }
    return false;
}

Object.prototype.extend = function (destination, source) {
    var prop;
    for (prop in source) {
        destination[prop] = source[prop]
    }
    return destination;
}



// Познакомиться с работой следующих втроенных свойств, функций и методов
// Number
//     Number.prototype: toFixed
23.4567.toFixed(2)
    //==>"23.46"


// String
//     String.prototype: charAt, concat, includes, indexOf, lastIndexOf, repeat, replace, slice, split,
//         substr, substring, toLowerCase, toUpperCase, trim
"Интерпретация".charAt(3)
    //==>"е"


"Интерпретация".concat(" выражения");
    //===>"Интерпретация выражения"


"Интерпретация собственного выражения".includes("собственного");
    //===> true
"Интерпретация собственного выражения".includes("Собственного");
    //===> false


"Интерпретация собственного выражения".indexOf("с", 10);
    //===> 14
"Интерпретация собственного выражения".indexOf("я", 15);
    //===> -1


"Интерпретация собственного выражения".lastIndexOf("в");
//===> 27------?

// Array
//     Array.prototype: concat, forEach, includes, indexOf, join, lastIndexOf, pop, push, reverse,
//         shift, slice, splice, unshift, sort, map, filter, every, some, reduce, reduceRight
// Object: keys, values, create, assign
//     Object.prototype: hasOwnProperty
