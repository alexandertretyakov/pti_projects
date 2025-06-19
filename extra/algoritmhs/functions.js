const range = (start=0, stop, step) => {
    let result = [];
    let i = 0;

    if (stop === undefined || step === undefined) {
        if (stop === undefined) {
            while(i < start) {
                result[i] = i;
                i++;
            }
        }

        if (step === undefined) {
            while(start < stop) {
                result[i] = start;
                i++;
                start++;
            }
        }
    }

    if (start < stop) {
        while(start < stop) {
            result[i] = start;
            start += step;
            i++;
        }
    }

    if (start > stop) {
        while(start > stop) {
            result[i] = start;
            start += step;
            i++;
        }
    }

    return result;
};

module.exports.range = range;

const uniq = (list) => {
    let i = 0;
    let result = [];

    while(i < list.length) {
        if (result.includes(list[i]) !== true) {
            result[result.length] = list[i];
        }
        i++;
    }

    return result;
};

module.exports.uniq = uniq;

const pairs = (obj) => {
    let prop;
    let result = [];

    for(prop in obj) {
        result[result.length] = [prop, obj[prop]]
    }

    return result;
};

module.exports.pairs = pairs;

const partition = (list, predicate) => {
    let i = 0;
    let result = [[], []];

    while(i < list.length) {
        if (predicate(list[i])) {
            result[0][result[0].length] = list[i];
        } else {
            result[1][result[1].length] = list[i];
        }
        i++;
    }

    return result;
};

module.exports.partition = partition;

const compact = (list) => {
    let i = 0;
    let result = [];

    while(i < list.length) {
        if (list[i]) {
            result[result.length] = list[i];
        }
        i++;
    }

    return result;
};

module.exports.compact = compact;

const invert = (obj) => {
    let prop;
    let objCopy = {};

    for(prop in obj) {
        objCopy[obj[prop]] = prop;
    }

    return objCopy;
};

module.exports.invert = invert;

const pluck = (list, key) => {
    let i = 0;
    let result = [];

    while(i < list.length) {
        let prop;

        for(prop in list[i]) {
            if(prop === key) {
                result[result.length] = list[i][prop];
            }
        }
        i++;
    }

    return result;
};

module.exports.pluck = pluck;

const rest = (list, index) => {
    let result = [];
    let i = 1;

    if (index === undefined) {
        while(i < list.length) {
            result[result.length] = list[i];
            i++;
        }

        return result;
    }

    while(index < list.length) {
        result[result.length] = list[index];
        index++;
    }

    return result;
};

module.exports.rest = rest;

const some = (list, predicate) => {
    let i = 0;

    while (i < list.length) {
        if (predicate(list[i])) {
            return true;
        }
        i++;
    }

    return false;
};

module.exports.some = some;

const omit = (obj, property) => {
    let objCopy = {};
    let prop;

    for (prop in obj) {
        if (prop !== property) {
            objCopy[prop] = obj[prop];
        }
    }

    return objCopy;
};

module.exports.omit = omit;

const map = (list, iteratee) => {
    let i = 0;
    let result = [];

    while (i < list.length) {
        result[result.length] = iteratee(list[i], i);
        i++;
    }

    return result;
};

module.exports.map = map;

const findIndex = (list, predicate) => {
    let i = 0;

    while (i < list.length) {
        if (predicate(list[i])) {
            return i;
        }
        i++;
    }

    return -1;
};

module.exports.findIndex = findIndex;

const filter = (list, predicate) => {
    let listCopy = [];
    let i = 0;

    while (i < list.length) {
        if (predicate(list[i])) {
            listCopy[listCopy.length] = list[i];
        }
        i++;
    }

    return listCopy;
};

module.exports.filter = filter;

const has = (obj, key) => {
    let prop;

    for (prop in obj) {
        if (prop === key) {
            return true;
        }
    }

    return false;
};

module.exports.has = has;

const extend = (expandable, obj) => {
    let prop;

    for (prop in obj) {
        expandable[prop] = obj[prop];
    }

    return expandable;
};

module.exports.extend = extend;

const isMatch = (obj, match) => {
    let prop;

    for (prop in obj) {
        if (obj[prop] === match[prop]) {
            return true;
        }
    }

    return false;
};

module.exports.isMatch = isMatch;

const defaults = (obj, def) => {
    let prop;

    for (prop in def) {
        if (obj[prop] === undefined) {
            obj[prop] = def[prop];
        }
    }

    return obj;
};

module.exports.defaults = defaults;

const find = (list, predicate) =>  {
    let i = 0;

    while(i < list.length) {
        if (predicate(list[i], i)) {
            return list[i];
        }
        i++;
    }

    return undefined;
};

module.exports.find = find;

const keys = (obj) => {
    let list = [];
    let prop;

    for (prop in obj) {
        list[list.length] = prop;
    }

    return list;
};

module.exports.keys = keys;

const countBy = (list, fn) => {
    let result = {};

    for (let i = 0; i < list.length; i++) {
        if (result[fn(list[i])] === undefined) {
            result[fn(list[i])] = 1;
        } else {
            result[fn(list[i])] = result[fn(list[i])] + 1;
        }
    }

    return result;
};

module.exports.countBy = countBy;

const min = (array) => {
    let min = array[0];
    let i = 1;

    while (i < array.length) {
        if (array[i] < min) {
            min = array[i];
        }
        i++;
    }

    return min;
};

module.exports.min = min;

const object = (keysList, valuesList) => {
    let obj = {};
    let i = 0;

    while (i < keysList.length) {
        obj[keysList[i]] = valuesList[i];
        i++;
    }

    return obj;
};

module.exports.object = object;

const values= (obj) => {
    let result = [];
    let prop;

    for (prop in obj) {
        result.push(obj[prop]);
    }

    return result;
};

module.exports.values = values;

const unzip = (array) => {
    const count = Math.max(...array.map(m => m.length));
    let result = [];

    for (let i = 0; i < count; i++) {
        result[i] = [];
        for (let j = 0; j < array.length; j++) {
            result[i].push(array[j][i]);
        }
    }

    return result;
};

module.exports.unzip = unzip;

const invoke = (list, methodName, methodArg) => {
    let listCopy = [];

    for(let i = 0; i < list.length; i++) {
        if (methodArg === undefined) {
            listCopy.push(list[i][methodName]());
        } else {
            listCopy.push(list[i][methodName](methodArg));
        }
    }

    return listCopy;
};

module.exports.invoke = invoke;

const get = (obj, key) => {
    let prop;

    for(prop in obj) {
        if (prop === key) {
            return obj[prop];
        }
    }

    return undefined;
};

module.exports.get = get;

const where = function(list, properties) {
    const result = [];

    function includes(o1, o2) {
        for (let prop in o2) {
            if (o1[prop] !== o2[prop]) {
                return false;
            }
        }

        return true;
    }

    for (let i = 0; i < list.length; i++) {
        if (includes(list[i], properties)) {
            result.push(list[i]);
        }
    }

    return result;
};

module.exports.where = where;

const last = (array, n) => {
    if (n === undefined) {
        return array[array.length-1];
    } else {
        let arrayCopy = [];

        for(let i = 0; i < array.length; i++) {
            if (i >= array.length-n) {
                arrayCopy.push(array[i]);
            }
        }

        return arrayCopy;
    }
};

module.exports.last = last;

const first = (array, n) => {
    if (n === undefined) {
        return array[0];
    } else {
        let arrayCopy = [];

        for(let i = 0; i < n; i++) {
            arrayCopy.push(array[i]);
        }

        return arrayCopy;
    }
};

module.exports.first = first;

const zip = (...array) => {
    const count = Math.max(...array.map(m => m.length));
    let result = [];

    for (let i = 0; i < count; i++) {
        result[i] = [];
        for (let j = 0; j < array.length; j++) {
            result[i].push(array[j][i]);
        }
    }

    return result;
};

module.exports.zip = zip;

const clone = (obj) => {
    return obj;
};

module.exports.clone = clone;

var functions = function(obj) {
    var listNames = [];
    var prop;

    for (prop in obj) {
        if (typeof obj[prop] === 'function') {
            listNames.push(prop);
        }
    }

    return listNames.sort();
};

module.exports.functions = functions;

var groupBy = function(array, fn) {
    var i = 0;
    var result = {};

    while(i < array.length) {
        if (!Array.isArray(result[fn(array[i])])) {
            result[fn(array[i])] = []
        }

        result[fn(array[i])].push(array[i]);

        i++;
    }

    return result;
};

module.exports.groupBy = groupBy;

var every = function(list, predicate) {
    for(let i = 0; i < list.length; i++) {
        if (!predicate(list[i])) {
            return false
        }
    }

    return true;
};

module.exports.every = every;

const intersection = function(firstList, secondList) {
    let result = [];

    for(let i = 0; i < firstList.length; i++) {
        for(let j = 0; j < secondList.length; j++) {
            if (firstList[i] === secondList[j] && !result.includes(firstList[i])) {
                result.push(firstList[i]);
            }
        }
    }

    return result;
};

module.exports.intersection = intersection;

const unnest = (list) => {
    let result = [];

    for(let i = 0; i < list.length; i++) {
        if (list[i] instanceof Array) {
            result.push(...list[i]);
        } else {
            result.push(list[i]);
        }
    }

    return result;
};

module.exports.unnest = unnest;

const adjust = (index, func, list) => {
    let result = [];

    if (index < 0) {
        for(let i = 0; i < list.length; i++) {
            if (i === list.length + index) {
                result.push(func(list[i]));
            } else {
                result.push(list[i]);
            }
        }
    } else {
        for(let i = 0; i < list.length; i++) {
            if (index === i) {
                result.push(func(list[i]));
            } else {
                result.push(list[i]);
            }
        }
    }

    return result;
};

module.exports.adjust = adjust;

const splitEvery = (length, list) => {
    let result = [];

    for (let i = 0; i < list.length; i += length) {
        result.push(list.slice(i, i + length));
    }

    return result;
};

module.exports.splitEvery = splitEvery;


const searchInsert = (orderNumsList, target) => {
    for (let i = 0; i < orderNumsList.length; i++) {
        if (orderNumsList[i] === target || orderNumsList[i] > target) {
            return i;
        }
    }

    return orderNumsList.length;
};

module.exports.searchInsert = searchInsert;

const juxt = (fnsList) => {
    const f = (...args) => {
        let result = [];

        for (let i = 0; i < fnsList.length; i++) {
            result.push(fnsList[i](...args));
        }

        return result;
    };

    return f;
};

module.exports.juxt = juxt;

const drop = (target, list) => {
    return list.slice(target);
};

module.exports.drop = drop;

const move = (from, where, list) => {
    let result = [];

    if (from < - list.length || from >= list.length || where < - list.length || where >= list.length) {
        return list;
    }

    if (from < 0) {
        from = list.length + from;
    }

    if (where < 0) {
        where = list.length + where;
    }

    for (let i = 0; i < list.length; i++) {
        if (from === i) {
            continue;
        }

        if (where === i) {
            if (where < from) {
                result.push(list[from], list[i]);
            } else {
                result.push(list[i], list[from]);
            }
            continue;
        }

        result.push(list[i]);
    }

    return result;
};

module.exports.move = move;

const update = (index, element, list) => {
    let result = [];

    if (index < 0) {
        index = list.length + index;
    }

    for (let i = 0; i < list.length; i++) {
        if (index === i) {
            result.push(element);
        } else {
            result.push(list[i]);
        }
    }

    return result;
};

module.exports.update = update;

const prepend = (element, list) => {
    let result = [];

    result.push(element);

    for (let i = 0; i < list.length; i++) {
        result.push(list[i]);
    }

    return result;
};

module.exports.prepend = prepend;

const symmetricDifference = (listOne, listTwo) => {
    let result = [];

    for (let i = 0; i < listOne.length; i++) {
        if (!listTwo.includes(listOne[i])) {
            if (!result.includes(listOne[i])) {
                result.push(listOne[i]);
            }
        }
    }

    for (let j = 0; j < listTwo.length; j++) {
        if (!listOne.includes(listTwo[j])) {
            if (!result.includes(listTwo[j])) {
                result.push(listTwo[j]);
            }
        }
    }

    return result;
};

module.exports.symmetricDifference = symmetricDifference;

const swap = (onePosition, twoPosition, list) => {
    let result = [];
    let intermVar = null;

    if (onePosition < 0) {
        onePosition = list.length + onePosition;
    }

    if (twoPosition < 0) {
        twoPosition = list.length + twoPosition;
    }

    for (let i = 0; i < list.length; i++) {
        if (i === onePosition) {
            intermVar = list[onePosition];
            result[onePosition] = list[twoPosition];
        }
    }

    return result;
};

module.exports.swap = swap;

const converge = (fn, fnsList) => {
    const f = (...args) => {
        let result = [];

        for (let i = 0; i < fnsList.length; i++) {
            result.push(fnsList[i](...args));
        }

        return fn(...result);
    };

    return f;
};

module.exports.converge = converge;

const pipe = (...fnsList) => {
    const f = (num1, num2) => {
        let result = 0;

        for (let i = 0; i < fnsList.length; i++) {
            if (i === 0) {
                result = fnsList[i](num1, num2);
            } else {
                result = fnsList[i](result);
            }
        }

        return result;
    };

    return f;
};

module.exports.pipe = pipe;

const transpose = (list) => {
    const result = [];

    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list[i].length; j++) {
            if (result[j] === undefined) {
                result[j] = [];
            }

            result[j].push(list[i][j]);
        }
    }

    return result;
};

module.exports.transpose = transpose;

const project = (keysList, objectsList) => {
    const result = [];
    let obj = {};

    for (let i = 0; i < objectsList.length; i++) {
        for (let j = 0; j < keysList.length; j++) {
            if (objectsList[i].hasOwnProperty(keysList[j])) {
                obj[keysList[j]] = objectsList[i][keysList[j]];
            }
        }

        result.push(obj);

        obj = {};
    }

    return result;
};

module.exports.project = project;

const hasR = (key, obj) => obj.hasOwnProperty(key);

module.exports.hasR = hasR;

const complement = (f) => (arg) => !f(arg);

module.exports.complement = complement;

const clamp = (min, max, value) => {
    if (value <= min) {
        return min;
    }

    if (value >= max) {
        return max;
    }

    return value;
};

module.exports.clamp = clamp;

const always = (value) => () => value;

module.exports.always = always;

const hasIn = (property, obj) => property in obj;

module.exports.hasIn = hasIn;

const ifElse = (predicate, fnTrue, fnFalse) => {
    const f = (...arg) => {
        if (predicate(...arg)) {
            return fnTrue(...arg);
        } else {
            return fnFalse(...arg);
        }
    };

    return f;
};

module.exports.ifElse = ifElse;

const cond = (listFnPairs) => {
    const f = (arg) => {
        for (let i = 0; i < listFnPairs.length; i++) {
            if (listFnPairs[i][0](arg)) {
                return listFnPairs[i][1](arg);
            } else {
                continue;
            }
        }

        return undefined;
    };

    return f;
};

module.exports.cond = cond;

const flip = (fn) => {
    const f = (...arg) => {
        let firstElement = arg[1];
        let secondElement = arg[0];

        arg[0] = firstElement;
        arg[1] = secondElement;

        return fn(...arg);
    };

    return f;
};

module.exports.flip = flip;

const List = function(list) {
    this.list = list;
};

List.prototype.first = function() {
    return this.list[0];
};

List.prototype.last = function() {
    const listLength = this.list.length;

    return this.list[listLength - 1];
};

List.prototype.size = function() {
    return this.list.length;
};

module.exports.List = List;


const trottle = (fn, ms) => {
    setTimeout(fn, ms);
};

module.exports.trottle = trottle;