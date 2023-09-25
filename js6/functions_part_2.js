// Реализовать нижеуказанные функции.
// ВНИМАНИЕ!
// Соблюдайте форматирование кода (отступы, переносы)
// Не использовать встроенные функции/методы




// Создать функцию keys которая возвращает массив имен всех свойств(ключей) принимаемого объекта.
// Пример работы:
// keys({one: 1, two: 2, three: 3});
// => ["one", "two", "three"]
const keys = (obj) => {
    let result = [];

    for (let prop in obj) {
        result[result.length] = prop;
    }

    return result;
};




// Создать функцию values которая возвращает массив значений всех свойств принимаемого объекта.
// Пример работы:
// values({one: 1, two: 2, three: 3});
// => [1, 2, 3]
const values = (obj) => {
    let result = [];

    for (let prop in obj) {
        result[result.length] = obj[prop];
    }

    return result;
};



// Создать функцию pairs которая возвращает список пар [свойство, значение] входящего объекта.
// Пример работы:
// pairs({one: 1, two: 2, three: 3});
// => [["one", 1], ["two", 2], ["three", 3]]
const pairs = (obj) => {
    let result = [];

    for (let prop in obj) {
        result[result.length] = [prop, obj[prop]];
    }

    return result;
};



// Создать функцию invert которая возвращает копию входящего объекта где свойства - значения, а значения - свойства.
// Чтобы это заработало, нужно, чтобы все значения свойств объекта могли быть уникально преобразованы в строки.
// Пример работы:
// invert({Moe: "Moses", Larry: "Louis", Curly: "Jerome"});
// => {Moses: "Moe", Louis: "Larry", Jerome: "Curly"}
const invert = (obj) => {
    let result = {};

    for (let prop in obj) {
        result[obj[prop]] = prop;
    }

    return result;
};



// Создать функцию omit которая возвращает копию объекта без указанного свойства.
// Пример работы:
// omit({name: 'moe', age: 50, userid: 'moe1'}, 'userid');
// => {name: 'moe', age: 50}
const omit = (obj, key) => {
    let result = {};

    for (let prop in obj) {
        if (prop !== key) {
            result[prop] = obj[prop];
        }
    }

    return result;
};



// Создать функцию has которая проверяет, содержит ли объект указанный ключ (свойство). Если да, то возвращает true иначе false.
// Пример работы:
// has({a: 1, b: 2, c: 3}, 'b');
// => true
const has = (obj, key) => {
    for (let prop in obj) {
        if (prop === key) {
            return true;
        }
    }

    return false;
};



// Создать функцию isMatch которая проверяет, содержатся ли ключ-значене в объекте. Если да, то возвращает true иначе false.
// Пример работы:
// isMatch({name: 'moe', age: 32}, {age: 32});
// => true
const isMatch = (obj, objTest) => {
    for (let prop in obj) {
        if (obj[prop] === objTest[prop]) {
            return true;
        }
    }

    return false;
};



// Создать функцию isEmpty которая вернёт true если коллекция (объект или массив) не содержит ни одного значения, в противном случае вернет false.
// Пример работы:
// isEmpty([]);
// => true
// isEmpty([1, 2, 3]);
// => false
// isEmpty({});
// => true
// isEmpty({x: 4});
// => false
const isEmpty = (collection) => {
    if (collection === {} || collection === []) {
        return true;
    }

    return false;
};//TODO:



// Создать функцию extend с двумя входными параметрами (объект destination и объект source). Скопирует все свойства из объекта source в объект destination. Если объект source имеет одноименные свойства с объектом destination, то значения destination будут затёрты значениями из source.
// Пример работы:
// extend({name: 'moe'}, {age: 50});
// => {name: 'moe', age: 50}
const extend = (destination, source) => {
    for (let prop in source) {
        if (source[prop] !== destination[prop]) {
            destination[prop] = source[prop];
        }
    }

    return destination;
};



// Создать функцию defaults с двумя входными параметрами (объект object и объект default). Функция defaults проинициализирует неопределённые (undefined) свойства объета значениями одноимённых свойств из default. Если же какие-то свойства объекта уже определены, то они не будут изменены.
// Пример работы:
// defaults({flavor: "chocolate"}, {flavor: "vanilla", sprinkles: "lots"});
// => {flavor: "chocolate", sprinkles: "lots"}
const defaults = (object, def) => {
    for (let prop in def) {
        if (def[prop] !== object[prop]) {
            object[prop] = def[prop];
        }
    }

    return object;
};//TODO