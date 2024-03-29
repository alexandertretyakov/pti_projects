// Реализовать нижеуказанные функции.
// ВНИМАНИЕ!
// Соблюдайте форматирование кода (отступы, переносы)
// Не использовать встроенные функции/методы




// Создать объект со свойствами: x, getX, changeX. Где значение свойства "x" это число,
// а getX и changeX это методы которые манипулируют значением этого свойства "x".
// getX возвращает значение свойства "x", а changeX принимает в качестве аргумента число
// и результатом работы этого метода является присваивание этого числа свойству "x" объекта.




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

class Circle {
    constructor(options) {
        Object.assign(this, options);
    }

    getDiameter() {
        return 2 * this.radius;
    }

    getPerimeter() {
        return 3.14 * this.getDiameter();
    }

    getSquare() {
        return 3.14 * (this.radius * this.radius);
    }
}

const circle = new Circle({x: 1, y: 2, radius: 3});





// Создать класс Product который принимает 2-4 параметра в виде объекта:
// название, цена, скидка в % (необязательный) и кэшбэк в % (необязательный)
// Возвращает объект с двумя-четырмя собственными свойствами (title, price, discountRate, cashbackRate) и двумя унаследованными методами.
// 1. Метод getPriceWithDiscount возвращает цену с учетом скидки. Формула расчета цены с учетом скидки: priceWithDiscount = Math.ceil(price - price * discountRate / 100)
// 2. Метод getCashbackAmount возвращает сумму кэшбэка. Формула расчета суммы кэшбэка: cashbackAmount = Math.ceil(price * cashbackRate / 100)
// Пример работы:
// var apple = new Product({title: 'Apple', price: 100, discountRate: 5, cashbackRate: 1});
// apple.getPriceWithDiscount();
// => ***
// apple.getCashbackAmount();
// => ***
// var pear = new Product({title: 'Pear', price: 650});
// apple.getPriceWithDiscount();
// => ***
// apple.getCashbackAmount();
// => ***

class Product {
    constructor(options) {
        Object.assign(this, options);
    }

    getPriceWithDiscount() {
        if (this.discountRate) {
            return Math.ceil(this.price - this.price * this.discountRate / 100);
        } else {
            return this.price;
        }
    }

    getCashbackAmount() {
        if (this.cashbackRate) {
            return Math.ceil(this.price * this.cashbackRate / 100);
        } else {
            return 0;
        }
    }
}



// Создать функции size, last, getPositiveNumbers, without, min, sum, как методы массивов
// Примеры работы:
// [7, 2, 8].size();
// => 3
// [5, 4, 3, 2, 1].last();
// => 1
// [10, -5, 100, -2, 1000].getPositiveNumbers();
// => [10, 100, 1000]
// [3, 6, 7, 'rere'].without(6);
// => [3, 7, 'rere']
// [10, 5, 100, 2, 1000].min();
// => 2
// [2, 2, 3].sum();
// => 7




// Создать функции keys, values, pairs, extend, как методы объектов




// Создать функцию charAt которая принимает строку и индекс и возвращает указанный символ из строки.
// Пример работы:
// charAt('March', 0);
// => 'M'




// Создать функцию trim которая удаляет пробельные символы с начала и конца строки.
// Пример работы:
// trim('   Hello world!   ');
// => 'Hello world!'




// Создать функцию join которая принимает массив и возвращает строку состоящую из его элементов разделенных запятой (по-умолчанию) или любым другим разделителем (строкой) указанным во втором аргументе вызываемой функции.
// Пример работы:
// join([1, 'lol', 5, 'dro']);
// => "1,lol,5,dro"
// join([1, 'lol', 5, 'dro'], '+');
// => "1+lol+5+dro"




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
