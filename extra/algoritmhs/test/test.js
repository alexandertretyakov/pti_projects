const chai = require('chai');
const assert = chai.assert;

const _ = require('underscore');
const R = require('ramda');

const {
    range,
    uniq,
    pairs,
    partition,
    compact,
    invert,
    pluck,
    rest,
    some,
    omit,
    map,
    findIndex,
    filter,
    has,
    extend,
    isMatch,
    defaults,
    find,
    keys,
    countBy,
    min,
    object,
    values,
    unzip,
    invoke,
    get,
    where,
    last,
    first,
    zip,
    clone,
    functions,
    groupBy,
    every,
    unnest,
    adjust,
    splitEvery,
    searchInsert,
    juxt,
    drop,
    update,
    prepend,
    symmetricDifference,
    converge,
    pipe,
    project,
    hasR,
    complement,
    clamp,
    always,
    transpose,
    cond,
    flip,
    hasIn,
    ifElse,
    List,
    move,
    intersection
} = require('../functions');

const isOdd = (n) => n % 2 !== 0;
const isEven = (n) => n % 2 === 0;
const predicate = (el) => {
    if (el) {
        return true;
    }

    return false;
};

describe('Underscore', function() {
    describe('Arrays', function() {
        it('range', function() {
            assert.deepEqual(range(10), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
            assert.deepEqual(range(1, 11), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
            assert.deepEqual(range(0, 30, 5), [0, 5, 10, 15, 20, 25]);
            assert.deepEqual(range(0, -10, -1), [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]);
            assert.deepEqual(range(0), []);
        });

        it('uniq', function() {
            assert.deepEqual(uniq([1, 2, 1, 4, 1, 3]), [1, 2, 4, 3]);
            assert.deepEqual(uniq([1, 1, 1, 2, 2, 2]), [1, 2]);
        });

        it('compact', function() {
            assert.deepEqual(compact([0, 1, false, 2, '', 3]), [1, 2, 3]);
        });

        it('rest', function() {
            assert.deepEqual(rest([5, 4, 3, 2, 1]), [4, 3, 2, 1]);
            assert.deepEqual(rest([5, 4, 3, 2, 1], 3), [2, 1]);
        });

        it('findIndex', function() {
            assert.deepEqual(findIndex([4, 6, 8, 12], isOdd), -1);
            assert.deepEqual(findIndex([4, 6, 7, 12], isOdd), 2);
        });

        it('object', function() {
            assert.deepEqual(object(['moe', 'larry', 'curly'], [30, 40, 50]), {moe: 30, larry: 40, curly: 50});
        });

        it('unzip', function() {
            assert.deepEqual(unzip([["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]), [['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]]);
        });

        it('last', function() {
            assert.deepEqual(last([5, 4, 3, 2, 1]), 1);
            assert.deepEqual(last([5, 4, 3, 2, 1], 2), [2, 1]);
        });

        it('first', function() {
            assert.deepEqual(first([5, 4, 3, 2, 1]), 5);
            assert.deepEqual(first([25, 2, 6, 8, 11], 3), [25, 2, 6]);
        });

        it('zip', function() {
            assert.deepEqual(zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]), [["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]);
        });
    });

    describe('Objects', function() {
        it('pairs', function() {
            assert.deepEqual(pairs({one: 1, two: 2, three: 3}), [["one", 1], ["two", 2], ["three", 3]]);
        });

        it('invert', function() {
            assert.deepEqual(invert({Moe: "Moses", Larry: "Louis", Curly: "Jerome"}), {Moses: "Moe", Louis: "Larry", Jerome: "Curly"});
        });

        it('omit', function() {
            assert.deepEqual(omit({name: 'moe', age: 50, userid: 'moe1'}, 'userid'), {name: 'moe', age: 50});
        });

        it('has', function() {
            assert.deepEqual(has({a: 1, b: 2, c: 3}, "b"), true);
        });

        it('extend', function() {
            assert.deepEqual(extend({name: 'moe'}, {age: 50}), {name: 'moe', age: 50});
        });

        it('isMatch', function() {
            assert.deepEqual(isMatch({name: 'moe', age: 32}, {age: 32}), true);
        });

        it('defaults', function() {
            assert.deepEqual(defaults({flavor: "chocolate"}, {flavor: "vanilla", sprinkles: "lots"}), {flavor: "chocolate", sprinkles: "lots"});
        });

        it('keys', function() {
            assert.deepEqual(keys({one: 1, two: 2, three: 3}), ["one", "two", "three"]);
        });

        it('values', function() {
            assert.deepEqual(values({one: 1, two: 2, three: 3}), [1, 2, 3]);
        });

        it('get', function() {
            assert.deepEqual(get({a: 10}, 'a'), 10);
        });

        it('clone', function() {
            assert.deepEqual(clone({name: 'moe'}), {name: 'moe'});
        });

        it('functions', function() {
            assert.deepEqual(functions({a: 10, all: function() {}, any: function() {}, bind: function() {}, b: 20}), ["all", "any", "bind"]);
        });
    });

    describe('Collections', function() {
        it('partition', function() {
            assert.deepEqual(partition([0, 1, 2, 3, 4, 5], isOdd), [[1, 3, 5], [0, 2, 4]]);
        });

        it('pluck', function() {
            assert.deepEqual(pluck([{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}], 'name'), ["moe", "larry", "curly"]);
        });

        it('some', function() {
            assert.deepEqual(some([null, 0, 'yes', false], predicate), true);
        });

        it('map', function() {
            assert.deepEqual(map([1, 2, 3], function(num) { return num * 3; }), [3, 6, 9]);
        });

        it('filter', function() {
            assert.deepEqual(filter([1, 2, 3, 4, 5, 6], isEven), [2, 4, 6]);
        });

        it('find', function() {
            assert.deepEqual(find([1, 2, 3, 4, 5, 6], isEven), 2);
        });

        it('countBy', function() {
            assert.deepEqual(countBy([1, 2, 3, 4, 5], function(num) { return num % 2 === 0 ? 'even': 'odd'}), {odd: 3, even: 2});
        });

        it('min', function() {
            assert.deepEqual(min([10, 5, 100, 2, 1000]), 2);
        });

        it('invoke', function() {
            assert.deepEqual(invoke([[5, 1, 7], [3, 2, 1]], 'sort'), [[1, 5, 7], [1, 2, 3]]);
            assert.deepEqual(invoke([[5, 1, 7], [3, 2, 1]], 'reverse'), [[7, 1, 5], [1, 2, 3]]);
            assert.deepEqual(invoke([[5, 1, 7], [3, 2, 1]], 'join', '-'), ['5-1-7', '3-2-1']);
            assert.deepEqual(invoke([[5, 1, 7], [3, 2, 1]], 'concat', 1), [[5, 1, 7, 1], [3, 2, 1, 1]]);
        });

        it('where', function() {
            const listOfPlays = [
                {title: 'Cymbeline', author: 'Shakespeare', year: 1611},
                {title: 'The Tempest', author: 'Shakespeare', year: 1611},
                {title: 'The Tempest', author: 'Shakespeare', year: 1000},
                {title: 'The Tempest', author: 'Shake', year: 1611}
            ];

            assert.deepEqual(
                where(listOfPlays, {author: "Shakespeare", year: 1611}),
                [
                    {title: "Cymbeline", author: "Shakespeare", year: 1611},
                    {title: "The Tempest", author: "Shakespeare", year: 1611}
                ]
            );
        });

        it('groupBy', function() {
            assert.deepEqual(groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); }), {1: [1.3], 2: [2.1, 2.4]});
        });

        it('every', function() {
            assert.deepEqual(every([2, 4, 5], function(num) { return num % 2 == 0; }), false);
            assert.deepEqual(every([2, 4, 6], function(num) { return num % 2 == 0; }), true);
        });
    });
});

describe('Ramda', function() {
    describe('List', function() {
        it('unnest', function() {
            assert.deepEqual(unnest([1, [2], [[3]]]), [1, 2, [3]]);
            assert.deepEqual(unnest([[1, 2], [3, 4], [5, 6]]), [1, 2, 3, 4, 5, 6]);
        });

        it('adjust', function() {
            assert.deepEqual(adjust(1, R.toUpper, ['a', 'b', 'c', 'd']), ['a', 'B', 'c', 'd']);
            assert.deepEqual(adjust(-1, R.toUpper, ['a', 'b', 'c', 'd']), ['a', 'b', 'c', 'D']);
        });

        it('splitEvery', function() {
            assert.deepEqual(splitEvery(3, [1, 2, 3, 4, 5, 6, 7]), [[1, 2, 3], [4, 5, 6], [7]]);
            assert.deepEqual(splitEvery(3, 'foobarbaz'), ['foo', 'bar', 'baz']);
        });

        it('juxt', function() {
            const getRange = juxt([Math.min, Math.max]);
            assert.deepEqual(getRange(3, 4, 9, -3), [-3, 9]);

            const getNumbers = juxt([(n) => n + 1, (n) => n - 1, (n) => n ** 2]);
            assert.deepEqual(getNumbers(7), [8, 6, 49]);
        });

        it('drop', function() {
            assert.deepEqual(drop(1, ['foo', 'bar', 'baz']), ['bar', 'baz']);
            assert.deepEqual(drop(2, ['foo', 'bar', 'baz']), ['baz']);
            assert.deepEqual(drop(3, ['foo', 'bar', 'baz']), []);
            assert.deepEqual(drop(4, ['foo', 'bar', 'baz']), []);
            assert.deepEqual(drop(3, 'ramda'), 'da');
        });

        it('transpose', function() {
            assert.deepEqual(transpose([[1, 'a'], [2, 'b'], [3, 'c']]), [[1, 2, 3], ['a', 'b', 'c']]);
            assert.deepEqual(transpose([[1, 2, 3], ['a', 'b', 'c']]), [[1, 'a'], [2, 'b'], [3, 'c']]);
        });

        it('move', function() {
            assert.deepEqual(move(0, 2, ['a', 'b', 'c', 'd', 'e', 'f']), ['b', 'c', 'a', 'd', 'e', 'f']);
            assert.deepEqual(move(-1, 0, ['a', 'b', 'c', 'd', 'e', 'f']), ['f', 'a', 'b', 'c', 'd', 'e']);
        });
    });

    describe('Function', function() {
        it('converge', function() {
            const average = converge(R.divide, [R.sum, R.length]);
            assert.deepEqual(average([1, 2, 3, 4, 5, 6, 7]), 4);

            const fn1 = converge(Math.pow, [Math.max, Math.min]);
            assert.deepEqual(fn1(2, 3, 4, 5, 6, 7), 49);

            const strangeConcat = converge(R.concat, [R.toUpper, R.toLower]);
            assert.deepEqual(strangeConcat('Yodel'), 'YODELyodel');
        });

        it('pipe', function() {
            const f = pipe(Math.pow, R.negate, R.inc);
            assert.deepEqual(f(3, 4), -80);
        });

        it('always', function() {
            const t = always('Tee');
            assert.deepEqual(t(), 'Tee');
        });

        it('flip', function() {
            const mergeThree = (a, b, c) => [].concat(a, b, c);
            mergeThree(1, 2, 3); //=> [1, 2, 3]
            assert.deepEqual(flip(mergeThree)(1, 2, 3), [2, 1, 3]);
        });

        it('update', function() {
            assert.deepEqual(update(1, '_', ['a', 'b', 'c']), ['a', '_', 'c']);
            assert.deepEqual(update(-1, '_', ['a', 'b', 'c']), ['a', 'b', '_']);
        });

        it('prepend', function() {
            assert.deepEqual(prepend('fee', ['fi', 'fo', 'fum']), ['fee', 'fi', 'fo', 'fum']);
        });
    });

    describe('Object', function() {
        it('project', function() {
            const abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
            const fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
            const kids = [abby, fred];
            assert.deepEqual(project(['name', 'grade'], kids), [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]);
        });

        it('hasR', function() {
            assert.deepEqual(hasR('name', {name: 'alice'}), true);
            assert.deepEqual(hasR('name', {name: 'bob'}), true);
            assert.deepEqual(hasR('name', {}), false);
        });

        it('hasIn', function() {
            assert.deepEqual(hasIn('hasOwnProperty', {name: 'Bob'}), true);
            assert.deepEqual(hasIn('name', {name: 'Bob'}), true);
            assert.deepEqual(hasIn('age', {name: 'Bob'}), false);
        });
    });

    describe('Logic', function() {
        it('complement', function() {
            const isNotNil = complement(R.isNil);
            assert.deepEqual(R.isNil(null), true);
            assert.deepEqual(isNotNil(null), false);
            assert.deepEqual(R.isNil(7), false);
            assert.deepEqual(isNotNil(7), true);
        });

        it('cond', function() {
            assert.deepEqual(cond([
                [(n) => n === 3, (n) => n * n],
                [(n) => n === 6, (n) => n + n],
                [(n) => n === 9, (n) => n + 11]
            ])(2), undefined);
            assert.deepEqual(cond([
                [(n) => n === 3, (n) => n * n],
                [(n) => n === 6, (n) => n + n],
                [(n) => n === 9, (n) => n + 11]
            ])(6), 12);
            assert.deepEqual(cond([
                [(n) => n === 3, (n) => n * n],
                [(n) => n === 6, (n) => n + n],
                [(n) => n === 9, (n) => n + 11]
            ])(9), 20);
        });

        it('ifElse', function() {
            assert.deepEqual(ifElse((n) => n > 100, (n) => n + 99, (n) => n - 99)(101), 200);
            assert.deepEqual(ifElse((n) => n < 100, (n) => n + 99, (n) => n - 99)(101), 2);
        });
    });

    describe('Relation', function() {
        it('clamp', function() {
            assert.deepEqual(clamp(1, 10, -5), 1);
            assert.deepEqual(clamp(1, 10, 15), 10);
            assert.deepEqual(clamp(1, 10, 4) , 4);
        });

        it('symmetricDifference', function() {
            assert.deepEqual(symmetricDifference([1,2,3,4], [7,6,5,4,3]), [1,2,7,6,5]);
            assert.deepEqual(symmetricDifference([7,6,5,4,3], [1,2,3,4]), [7,6,5,1,2]);
        });

        it('intersection', function() {
            assert.deepEqual(intersection([1,2,3,4], [7,6,5,4,3]), [3, 4]);
        });
    });
});

describe('Custom functions', function() {
    describe('List', function() {
        it('searchInsert', function() {
            assert.deepEqual(searchInsert([1,3,5,6], 5), 2);
            assert.deepEqual(searchInsert([1,3,5,6], 2), 1);
            assert.deepEqual(searchInsert([1,3,5,6], 7), 4);
        });
    });
});

describe('Custom methods', function() {
    describe('List', function() {
        it('searchInsert', function() {
            assert.deepEqual(searchInsert([1,3,5,6], 5), 2);
            assert.deepEqual(searchInsert([1,3,5,6], 2), 1);
            assert.deepEqual(searchInsert([1,3,5,6], 7), 4);
        });

        it('List', function() {
            const list = new List([1, 2, 3, 4, 7]);
            assert.deepEqual(list.first(), 1);
            const list1 = new List([1, 2, 3, 4, 8]);
            assert.deepEqual(list1.last(), 8);
            const list2 = new List([1, 2, 3, 4, 9]);
            assert.deepEqual(list2.size(), 5);
        });
    });
});
