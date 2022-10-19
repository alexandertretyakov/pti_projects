// Написать примеры использование функций из cheatsheets/cheat_sheet_underscore.txt

//Коллекции
_.each([5, 7, 4, 2], function(n) {
    console.log(n + 2);
});
// => На каждой итерации выведет в консоль 7; 9; 6; 4;

_.map([5, 7, 4, 2], function(n) {
   return {number: n};
});
// => [{number: 5}, {number: 5}, {number: 5}, {number: 5}];

_.reduce([5, 7, 4, 2], function(memory, n) {
    return memory + n;
}, 0);
// => 18;

_.reduceRight([5, 7, 4, 2], function(memory, n) {
    return memory + n;
}, 0);
// => 18;

_.find([5, 7, 4, 2], function(n) {
    return n * 5 === 35;
});
// => 7;

_.filter([5, 7, 4, 2, 7], function(n) {
    return n * 5 === 35;
});
// => [7, 7];

_.where([
    {name: 'Sasha', age: 37, working: true},
    {name: 'Oleg', age: 30, working: false},
    {name: 'Dasha', age: 25, working: true}
    ], {working: true});
// => [{name: 'Sasha', age: 37, working: true}, {name: 'Dasha', age: 25, working: true}];

_.findWhere([
    {name: 'Sasha', age: 37, working: true},
    {name: 'Oleg', age: 30, working: false},
    {name: 'Dasha', age: 25, working: true}
], {working: true});
// => {name: 'Sasha', age: 37, working: true};

_.reject([5, 7, 4, 2, 7], function(n) {
    return n * 5 === 35;
});
// => [5, 4, 2];

_.every([5, 7, 4, 2, 7], function(n) {
    return n % 2 === 0;
});
// => false;
_.every([6, 8, 4, 2, 10], function(n) {
    return n % 2 === 0;
});
// => true;

_.some([5, 7, 9, 1, 7], function(n) {
    return n % 2 === 0;
});
// => false;
_.some([5, 7, 9, 1, 8], function(n) {
    return n % 2 === 0;
});
// => true;

_.contains([5, 7, 9, 1, 8], 5);
// => true;
_.contains([5, 7, 9, 1, 8], 6);
// => false;

_.pluck([
    {name: 'Sasha', age: 37, working: true},
    {name: 'Oleg', age: 30, working: false},
    {name: 'Dasha', age: 25, working: true}
], 'name');
// => ['Sasha', 'Oleg', 'Dasha'];

_.max([3, 4, 6, 3, 10, 12, 4, 55, 11]);
// => 55;

_.min([3, 4, 6, 3, 10, 12, 4, 55, 11]);
// => 3;

_.sortBy([3, 4, 6, 3, 10, 12, 4, 55, 11], function(n) {
    return n;
});
// => [3, 3, 4, 4, 6, 10, 11, 12, 55];
_.sortBy([3, 4, 6, 3, 10, 12, 4, 55, 11], function(n) {
    return -n;
});
// => [55, 12, 11, 10, 6, 4, 4, 3, 3];

_.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// => [9, 3, 6, 5, 2, 8, 10, 1, 4, 7];

_.sample([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// => 2;
_.sample([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
// => [9, 5, 8];

var f = function() {
    console.log(arguments) // => [3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ];
    console.log(_.toArray(arguments)) // => [3, 4];
};
f(3, 4);

_.size([3, 4, 6, 3, 10, 12, 4, 55, 11]);
// => 9;


//Массивы
_.first([5, 7, 9, 1, 8]);
// => 5;

_.last([5, 7, 9, 1, 8]);
// => 8;

_.rest([5, 7, 9, 1, 8]);
// => [7, 9, 1, 8];
_.rest([5, 7, 9, 1, 8], 2);
// => [9, 1, 8];

_.compact([5, 0, 9, 1, false]);
// => [5, 9, 1];

_.flatten([5, [6, [7, [8]]]]);
// => [5, 6, 7, 8];

_.without([3, 4, 6, 3, 10, 12, 4, 55, 11], 10, 11, 12);
// => [3, 4, 6, 3, 4, 55];

_.union([1, 2, 3, 33, 44], [33, 4, 5, 44]);
// => [1, 2, 3, 33, 44, 4, 5];

_.intersection([1, 2, 3, 33, 44], [33, 4, 5, 44]);
// => [33, 44];

_.difference([3, 4, 6, 3, 10, 12, 4, 55, 11], [10, 11, 12]);
// => [3, 4, 6, 3, 4, 55];

_.uniq([3, 4, 6, 3, 10, 12, 4, 55, 11]);
// => [3, 4, 6, 10, 12, 55, 11];

_.indexOf([1, 2, 3, 4, 5], 4);
// => 3;

_.lastIndexOf([1, 2, 3, 4, 5], 4);
// => 3;

_.findIndex([5, 7, 9, 1, 7], function(n) {
    return n === 7;
});
// => 1;

_.findLastIndex([5, 7, 9, 1, 7], function(n) {
    return n === 7;
});
// => 4;


//Функции
var user = {name: 'Sasha', age: 37};
var f = function() {
    console.log(this.name)
};
f();// => undefined
f.bind(user)();// => 'Sasha'

var throttled = _.throttle(function() {
    console.log('!');
}, 2000);
window.addEventListener('resize', throttled);

var sum = function(a, b) {
    return a + b;
};
var sumOnce = _.once(sum);
var sum1 = sumOnce(5, 5);
var sum2 = sumOnce(11, 11);
var sum3 = sumOnce(55, 55);
sum1// => 10;
sum2// => 10;
sum3// => 10;

//----------------------------------------compose

// Объекты
_.keys({one: 1, two: 2, three: 3});
// => ['one', 'two', 'three'];

_.values({one: 1, two: 2, three: 3});
// => [1, 2, 3];

_.pairs({one: 1, two: 2, three: 3});
// => [['one', 1], ['two', 2], ['three', 3]];

_.invert({one: 1, two: 2, three: 3});
// => {1: 'one', 2: 'two', 3: 'three'};

var user = {name: 'Sasha', age: 37};
var obj = _.create(user, {name: 'Misha', age: 10});
obj; // => {name: 'Misha', age: 10};
obj.__proto__; // => {name: 'Sasha', age: 37};

_.extend({name: 'Dasha', age: 25}, {working: true});
// => {name: 'Dasha', age: 25, working: true};
_.extend({name: 'Dasha', age: 25, working: true}, {working: false});
// => {name: 'Dasha', age: 25, working: false};

_.pick({name: 'Dasha', age: 25, working: false}, 'name', 'age');
// => {name: 'Dasha', age: 25};

_.omit({name: 'Dasha', age: 25, working: false}, 'name', 'age');
// => {working: false};

_.defaults({name: 'Dasha', age: 25}, {working: true});
// => {name: 'Dasha', age: 25, working: true};
_.defaults({name: 'Dasha', age: 25, working: true}, {working: false});
// => {name: 'Dasha', age: 25, working: true};

_.has({one: 1, two: 2, three: 3}, 'two');
// => true;
_.has({one: 1, two: 2, three: 3}, 'five');
// => false;

_.isEqual({one: 1, two: 2, three: 3}, {one: 1, two: 2, three: 3});
// => true;
_.isEqual({one: 1, two: 2, three: 3}, {one: 1, two: 2, four: 4});
// => false;

_.isMatch({one: 1, two: 2, three: 3}, {one: 1});
// => true;

_.isEmpty({one: 1});
// => false;
_.isEmpty({});
// => true;

_.isArray([]);
// => true;
_.isArray(1);
// => false;

_.isObject({});
// => true;
_.isObject(1);
// => false;

_.isFunction(alert);
// => true;
_.isFunction(1);
// => false;

_.isString('Hello');
// => true;
_.isString(1);
// => false;

_.isNumber(1);
// => true;
_.isNumber('');
// => false;

_.isBoolean(true);
// => true;
_.isBoolean(1);
// => false;

_.isNull(null);
// => true;
_.isNull(1);
// => false;

_.isUndefined(undefined);
// => true;
_.isUndefined(1);
// => false;


//Вспомагательные ф-ции
var underscore = _.noConflict();
_ // => undefined;

var f = function() {};
var f = _.noop;
// => идентичны;

_.random(0, 100);
// => 5;

_.uniqueId();
// => '5';
_.uniqueId('prefix_');
// => 'prefix_5';

//---------------------------------------result

_.now();
// => 1666110413442