// Реализовать нижеуказанные функции.
// ВНИМАНИЕ!
// Соблюдайте форматирование кода (отступы, переносы)
// Не использовать встроенные функции/методы


// Создать функции size, last, getPositiveNumbers, without, min, sum, как методы массивов
Array.prototype.size = function() {
    return this.length;
};

Array.prototype.last = function() {
    return this[this.length - 1];
};

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

Array.prototype.without = function(value) {
    var i = 0;
    var result = [];
    while (i < this.length) {
        if (this[i] !== value ) {
            result[result.length] = this[i];
        }
        i++;
    }
    return result;
};

Array.prototype.min = function() {
    var i = 1;
    var result = this[0];
    while (i < this.length) {
        if (this[i] < result) {
            result = this[i];
        }
        i++;
    }
    return result;
};

Array.prototype.sum = function() {
    var i = 0;
    var sum = 0;
    while (i < this.length) {
        sum += this[i];
        i++;
    }
    return sum;
};


// Создать функции keys, values, pairs, isEmpty, extend, как методы объектов
Object.prototype.keys = function() {
    var result = [];
    for (let prop in this) {
        result[result.length] = prop;
    }
    return result;
};

Object.prototype.values = function() {
    var result = [];
    for (let prop in this) {
        result[result.length] = this[prop];
    }
    return result;
};

Object.prototype.pairs = function() {
    var result = [];
    for (let prop in this) {
        result[result.length] = [prop, this[prop]];
    }
    return result;
};

Object.prototype.isEmpty = function() {
    for (let prop in this) {
        return true;
    }
    return false;
};

Object.prototype.extend = function(source) {
    for (let prop in source) {
        this[prop] = source[prop];
    }
    return this;
};



// Познакомиться с работой следующих втроенных свойств, функций и методов
// Number
//     Number.prototype: toFixed
var number = 12345.12345;
number.toFixed(2)//'12345.12';


// String
//     String.prototype: charAt, concat, includes, indexOf, lastIndexOf, repeat, replace, slice, split,
//         substr, substring, toLowerCase, toUpperCase, trim
var string = 'Hello World!';
string.charAt(6)//'W';

string.concat(' !!!')//'Hello World! !!!';

string.includes('World')//true;
string.includes('W')//true;
string.includes('&')//false;

string.indexOf('W')//6;
string.indexOf('l')//2 - выводит индекс символа, поиск начинается с начала;

string.lastIndexOf('W')//6;
string.lastIndexOf('l')//9 - выводит индекс символа, поиск начинается с конца;

string.repeat(3)//'Hello World!Hello World!Hello World!';

string.replace('Hello', 'My')//'My World!';

string.slice(3, 7)//'lo W' - получить часть строки, от индекса 3 до индекса 7;

string.split()//['Hello World!'];
string.split('')//['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!'];
string.split('H')//['', 'ello World!'];
'2021-10-06'.split('-')//['2021', '10', '06'] - создаст массив из строки, разделяя элементы указанными
// символоми, которые находятся в этой строке, (-);

string.substr(3)//'lo World!';
string.substr(3, 7)//'lo Worl' - символы по 3 индекс отсекаются и выводятся следующие 7;

string.substring(3)//'lo World!';
string.substring(3, 7)//'lo W' - тоже, что и .slice();

string.toLowerCase()//'hello world!';

string.toUpperCase()//'HELLO WORLD!';

'     Hello World!     '.trim()//'Hello World!'; - восновном используется при заполнении форм
// (если пользователь поставит случано пробел вначале, либо в конце);


// Array
//     Array.prototype: concat, forEach, includes, indexOf, join, lastIndexOf, pop, push, reverse,
//         shift, slice, splice, unshift, sort, map, filter, every, some, reduce, reduceRight
var arr = [11, 22, 33, 44, 55];
arr.concat(1, 2, 3)//[11, 22, 33, 44, 55, 1, 2, 3];

arr.forEach(function (el, i) {
    console.log(el, i);
});
 //11 0
// 22 1
// 33 2
// 44 3
/* 55 4 - el(элемент массива) i(индекс элемента массива), для каждого элемента массива вызовет ф-цию,
возвращает копию массива, исходник при этом не меняется;*/

arr.includes(33)//true;
arr.includes(7)//false;

arr.indexOf(33)//2;

arr.join()//'11,22,33,44,55';
arr.join('+')//'11+22+33+44+55';
arr.join('/')//'11/22/33/44/55' - превращает массив в строку, по умолчанию разделяя элементы запятой,
// разделитель можно изменить, указав символ в скобках;

var arr1 = [11, 22, 33, 44, 55, 22];
arr1.lastIndexOf(22)//5;

arr.push(66)//6 - добавит указанный символ в массив и вернёт его длину (то что и arr[arr.length] = 66);

arr.pop()//55 - удалит последний элемент массива и выведет его;

arr.reverse()//[55, 44, 33, 22, 11];

arr.shift()//11 - удалит первый элемент массива и выведет его;

arr.unshift(1)//6 - добавит указанный символ в начало массива и вернёт его длину;

arr.slice(0, 3)//[11, 22, 33] - получить срез массива из 3 элементов начиная с 0 индекса;

arr.splice(2, 1)//[33] - - синтаксис:
// arr.splice(начиная с этого индекса/ удаляем один элемент)
// arr = [11, 22, 44, 55];
arr.splice(0, 1, 12, 13)//[11] - синтаксис:
// arr.splice(начиная 0 индекса/ удаляем 1 элемент/ и вставляем на его место 12, 13 этот\эти элементы)
//arr = [12, 13, 22, 33, 44, 55];
arr.splice(0, 0, 100)//[] - синтаксис:
// arr.splice(начиная с 0 индекса/ удаляем 0 элемент/ и вставляем на его место 100 этот\эти элементы)
//arr = [100, 11, 22, 33, 44, 55];

arr.sort()//?

arr.map(function (el) {
    return el + el;
});//[22, 44, 66, 88, 110] - выполнит ф-ию для каждого элемента массива;

arr.filter(function (el) {
    return el < 50;
});//[11, 22, 33, 44];
arr.filter(function (el) {
    return el > 50;
});//[55] - вернёт те элементы массива, которые подходят по условию выражения,
// которое вернёт ф-ция;

arr.every(function(el) {
    return el < 50;
});//false;
arr.every(function(el) {
    return el < 70;
});//true - вернёт true если все элементы массива подходят под условие выражения,
// которое вернёт ф-ция, или false, если хоть одно не подойдёт;

arr.reduce(function() {})//?

arr.reduceRight(function() {})//?


// Object: keys, values, create, assign
var obj = {
    name: 'Ира',
    age: 20
};
Object.keys(obj)//['name', 'age'];

Object.values(obj)//['Ира', 20];

Object.create(obj)//{} - вернёт пустой объект у которого в "prototype" будут пары из obj, ключ/значение;

Object.assign(obj, {hair: 'blonde'})//{name: 'Ира', age: 20, hair: 'blonde'}


//Object.prototype: hasOwnProperty
var Player = function(name, age) {
    this.name = name;
    this.age = age;
};
Player.prototype.hair = 'blonde';
var ira = new Player('Ира', 20);

'name' in ira//true
'age' in ira//true
'hair' in ira//true - такая проверка не покажет унаследоваемое свойство из прототипа.

ira.hasOwnProperty('name')//true
ira.hasOwnProperty('age')//true
ira.hasOwnProperty('hair')//false - здесь метод покажет какие св-ва наследуются из конструктора (true),
//a какие наследуются из прототипа (false);



