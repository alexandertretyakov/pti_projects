// ВНИМАНИЕ!
// Соблюдайте форматирование кода (отступы, переносы)
// Не использовать встроенные функции/методы




// Создать объект со свойствами: x, getX, changeX. Где значение свойства "x" это число,
// а getX и changeX это методы которые манипулируют значением этого свойства "x".
// getX возвращает значение свойства "x", а changeX принимает в качестве аргумента число
// и результатом работы этого метода является присваивание этого числа свойству "x" объекта.
var obj = {
    x: 100,
    getX: function () {
        return this.x;
    },
    changeX: function (value) {
        this.x = value;
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
function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    Circle.prototype.getDiameter = function () {
        var diameter = 2 * this.radius;
        return diameter;
    };
    Circle.prototype.getPerimeter = function () {
        var perimeter = 3.14 * diameter;
        return perimeter;
    };
    Circle.prototype.getSquare = function () {
        var square = 3.14 * this.radius * this.radius;
        return square;
    };
};

// Создать такие структуры данных чтобы выражение
// dro[1]().bro вернуло в качестве результата значение true,
var dro = [0, function () { return { bro: true }}];

// выражение a[4][1][1].y вернуло строку 'Север',
var a = [0, 0, 0, 0, [0, [0, { y: 'Север'}]]];

// выражение b.y().y.z()[3].autor вернуло строку 'Дима'.
var b = { y: function () { return { y : { z: function() { return [{}, {}, {}, {autor: 'Дима'}]}}}}};

// Создать функцию charAt которая принимает строку и индекс и возвращает указанный символ из строки.
// Пример работы:
// charAt('March', 0);
// => 'M'
var charAt = function (string, index) {
    return string[index];
}

// Создать функцию trim которая удаляет пробельные символы с начала и конца строки.
// Пример работы:
// trim('   Hello world!   ');
// => 'Hello world!'




// Создать функцию replace которая принимает 3 параметра (строку и две подстроки). Возвращает новую строку с заменой первой подстроки на вторую (все найденные вхождения).
// Пример работы:
// replace('The quick brown fox jumped over the lazy dog.', 'dog', 'ferret');
// => 'The quick brown fox jumped over the lazy ferret.'




// Создать функцию split которая разбивает строку на массив строк путём разделения строки указанной подстрокой.
// Пример работы:
// split('2018-12-01', '-');
// => ["2018", "12", "01"]
// split('Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec', ',');
// => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]




// *** Создать функцию uniq которая принимает массив элементов и возвращает новый массив на основе входящего, где все значения уникальны.
// Пример работы:
// uniq([1, 2, 1, 4, 1, 3]);
// => [1, 2, 4, 3]




// *** Создать функцию intersection которая принимает два массива и возвращает массив элементов, встречающихся в каждом из переданных массивов. Значения не должны повторяться.
// Пример работы:
// intersection([1, 2, 3], [101, 2, 1, 2]);
// => [1, 2]




// *** Создать функцию transposeMatrix которая принимает матрицу и возвращает транспонированную матрицу (Транспонированная матрица — матрица полученная из исходной матрицы заменой строк на столбцы).
// Пример работы:
// var matrix = [
//      [1, 1, 1],
//      [2, 2, 2],
//      [3, 3, 3]
// ];
// transposeMatrix(matrix);
// => [
//      [1, 2, 3],
//      [1, 2, 3],
//      [1, 2, 3]
// ]




// *** Создать функцию sort которая принимает массив чисел и возвращает новый массив где числа (входящего массива) отсортированны в порядке возрастания.
// Двумя способами: Сортировка пузырьком и Сортировка выбором.
// Пример работы:
// sort([1, 10, 21, 2]);
// => [1, 2, 10, 21]
