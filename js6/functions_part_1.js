// Реализовать нижеуказанные функции.
// ВНИМАНИЕ!
// Соблюдайте форматирование кода (отступы, переносы)
// Не использовать встроенные функции/методы




// Создать функцию isUndefined которая принимает в качестве единственного входящего параметра значение любого типа данных
// и возвращает true если значение равно undefined иначе возвращает false.
// Пример работы:
// isUndefined(undefined);
// => true
// isUndefined(null);
// => false
// isUndefined('hello');
// => false
// isUndefined(5);
// => false
const isUndefined = (value) => value === undefined;



// Создать функцию isNull которая принимает в качестве единственного входящего параметра значение любого типа данных
// и возвращает true если значение равно null иначе возвращает false.
// Пример работы:
// isNull(null);
// => true
// isNull(undefined);
// => false
// isNull(5);
// => false
const isNull = (value) => value === null;



// Создать функцию isBoolean которая принимает в качестве единственного входящего параметра значение любого типа данных
// и возвращает true если принимаемое значение является значением логического типа данных. В противном случае вернет false.
// Пример работы:
// isBoolean(null);
// => false
// isBoolean(5);
// => false
// isBoolean(false);
// => true
// isBoolean(true);
// => true
const isBoolean = (value) => value === true || value === false;



// Создать функцию size которая принимает в качестве единственного входящего параметра массив и возвращает количество элементов в массиве.
// Пример работы:
// size([7, 2, 8]);
// => 3
// size([7, 2, 3, 5, 1]);
// => 5
const size = (array) => array.length;



// Создать функцию first которая принимает в качестве единственного входящего параметра массив произвольных значений и возвращает первое из них.
// Пример работы:
// first([5, 4, 3, 2, 1]);
// => 5
// first([9, 0, 4, 7, 2]);
// => 9
const first = (array) => array[0];



// Создать функцию last которая принимает в качестве единственного входящего параметра массив произвольных значений и возвращает последнее из них.
// Пример работы:
// last([5, 4, 3, 2, 1]);
// => 1
// last([8, 2, 1, 7, 3]);
// => 3
const last = (array) => array[array.length-1];



// Создать функцию isEven которая возвращает true если число четное или false в противном случае.
// Пример работы:
// isEven(10);
// => true
// isEven(8);
// => true
// isEven(7);
// => false
const isEven = (number) => number % 2 === 0;



// Создать функцию indexOf которая вернёт позицию, на которой находится элемент value в массиве array, или -1, если данный элемент не был найден.
// Пример работы:
// indexOf([7, 2, 3], 2);
// => 1
// indexOf([7, 2, 3], 7);
// => 0
// indexOf([7, 2, 3], 5);
// => -1
const indexOf = (array, value) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }

    return -1;
};



// Создать функцию lastIndexOf которая паринимает два параметра (массив, значение) и ищет значение в массиве и возвращет его индекс, но делает это не с начала массива, а с его конца.
// Т.е. возвращает позицию последнего вхождения значения в массиве значений. Иначе возвращает -1.
// Пример работы:
// lastIndexOf([1, 2, 3, 1, 2, 3], 2);
// => 4
// lastIndexOf([1, 2, 3, 1, 2, 3], 3);
// => 5
const lastIndexOf = (array, value) => {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === value) {
            return i;
        }
    }

    return -1;
};



// Создать функцию push которая принимает массив и произвольное значение и возвращает копию массива + произвольное значение (которое находится в конце массива)
// Пример работы:
// push([1, 2, 3, 4], 5);
// => [1, 2, 3, 4, 5]
const push = (array, value) => {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        result[result.length] = array[i];
    }
    result[result.length] = value;

    return result;
};



// Создать функцию unshift которая принимает массив и произвольное значение и возвращает копию массива + произвольное значение (которое находится в начале массива)
// Пример работы:
// unshift([1, 2, 3, 4], 5);
// => [5, 1, 2, 3, 4]
const unshift = (array, value) => {
    let result = [];

    result[0] = value;
    for (let i = 1; i < array.length; i++) {
        result[result.length] = array[i];
    }

    return result;
};



// Создать функцию pop которая принимает массив и возвращает копию массива без последнего значения.
// Пример работы:
// pop([1, 2, 3, 4]);
// => [1, 2, 3]
const pop = (array) => {
    let result = [];

    for (let i = 0; i < array.length - 1; i++) {
        result[result.length] = array[i];
    }

    return result;
};




// Создать функцию shift которая принимает массив и возвращает копию массива без первого значения.
// Пример работы:
// shift([1, 2, 3, 4]);
// => [2, 3, 4]
const shift = (array) => {
    let result = [];

    for (let i = 1; i < array.length; i++) {
        result[result.length] = array[i];
    }

    return result;
};



// Создать функцию getPositiveNumbers которая принимает массив чисел и возвращает массив положительных чисел найденных в исходном массиве.
// Пример работы:
// getPositiveNumbers([10, -5, 100, -2, 1000]);
// => [10, 100, 1000]
const getPositiveNumbers = (array) => {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            result[result.length] = array[i];
        }
    }

    return result;
};



// Создать функцию reverse которая принимает массив и возвращает копию входящего массива с элементами в обратном порядке.
// Пример работы:
// reverse([1, 'lol', 5, {}, []]);
// => [[], {}, 5, "lol", 1]
const reverse = (array) => {
    let result = [];

    for (let i = array.length - 1; i >= 0; i--) {
        result[result.length] = array[i];
    }

    return result;
};



// Создать функцию compact которая принимает в качестве единственного входящего параметра массив произвольных значений и возвращает копию массива без undefined значений.
// Пример работы:
// compact([10, 1, 4, 2, undefined, 3, null]);
// => [10, 1, 4, 2, 3, null]
const compact = (array) => {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== undefined) {
            result[result.length] = array[i];
        }
    }

    return result;
};



// Создать функцию contains которая принимает два входящих параметра (массив значений простых типов данных и значение простого типа данных).
// Функция вернет true если в массиве содержится определенное значение. Иначе функция вернет false.
// Пример работы:
// contains([1, 2, 3], 3);
// => true
const contains = (array, value) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true
        }
    }

    return false;
};



// Создать функцию without которая возвращает копию массива, в которой удалены все значения второго аргумента указанного при вызове функции.
// Пример работы:
// without([3, 6, 7, 'rere'], 6);
// => [3, 7, 'rere']
const without = (array, value) => {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== value) {
            result[result.length] = array[i];
        }
    }

    return result;
};



// Создать функцию concat которая принимает два массива и возвращает новый массив состоящий из значений первого и второго.
// Пример работы:
// concat(['a', 'b', 'c'], ['d', 'e', 'f']);
// => [ "a", "b", "c", "d", "e", "f" ]
const concat = (array1, array2) => {
    let result = [];

    for (let i = 0; i < array1.length; i++) {
        result[result.length] = array1[i];
    }

    for (let i = 0; i < array2.length; i++) {
        result[result.length] = array2[i];
    }

    return result;
};



// Создать функцию slice которая принимает 3 параметра. Массив и два числа (begin и end). Возвращает копию части исходного массива. Начиная с индекса begin и заканчивая индексом end включительно (или концом массива если параметр end отстутствует).
// Пример работы:
// slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2, 3);
// => ['camel', 'duck']
const slice = (array, begin, end) => {
    let result = [];

    if (end) {
        for (let i = begin; i <= end; i++) {
            result[result.length] = array[i];
        }
    } else {
        for (let i = begin; i < array.length; i++) {
            result[result.length] = array[i];
        }
    }

    return result;
};



// Создать функцию getMatrixSum которая принимает матрицу чисел и возвращает сумму всех чисел.
// Пример работы:
// getMatrixSum([[1, 2], [0, 4], [1, 2]]);
// => 10
const getMatrixSum = (matrix) => {
    let sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
        }
    }

    return sum;
};



// Создать функцию getMatrixSumByDiagonal которая принимает квадратную матрицу чисел и возвращает сумму чисел по диагонали (слева направо, сверху вниз).
// Пример работы:
// var matrix = [
//      [1, 2, 3],
//      [3, 0, 4],
//      [0, 1, 2]
// ];
// getMatrixSumByDiagonal(matrix);
// => 3 (1 + 0 + 2)
const getMatrixSumByDiagonal = (matrix) => {
    let sumByDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {
        sumByDiagonal += matrix[i][i];
    }

    return sumByDiagonal;
};



// Создать функцию min которая принимает в качестве единственного входящего параметра массив чисел и возвращает наименьшее из них.
// Пример работы:
// min([10, 5, 100, 2, 1000]);
// => 2
const min = (array) => {
    let min = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }

    return min;
};



// Создать функцию max которая принимает в качестве единственного входящего параметра массив чисел и возвращает наибольшее из них.
// Пример работы:
// max([10, 5, 100, 2, 1000]);
// => 1000
const max = (array) => {
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
};



// Создать функцию repeat которая принимает строку и число count и возвращает новую строку, содержащую указанное количество соединённых вместе копий строки.
// Пример работы:
// repeat('Work', 6);
// => 'WorkWorkWorkWorkWorkWork'
const repeat = (string, count) => {
    let result = '';

    for (let i = 0; i < count; i++) {
        result += string;
    }

    return result;
};



// Создать функцию sum которая принимает массив чисел и возвращает их сумму.
// Пример работы:
// sum([2, 2, 3]);
// => 7
const sum = (array) => {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
};



// Создать функцию multiply которая принимает массив чисел и возвращает их произведение.
// Пример работы:
// multiply([2, 2, 3]);
// => 12
const multiply = (array) => {
    let composition = 1;

    for (let i = 0; i < array.length; i++) {
        composition *= array[i];
    }

    return composition;
};



// Создать функцию abs которая принимает число и возвращает его модуль (абсолютная величина, неотрицательное число).
// Пример работы:
// abs(-4);
// => 4
const abs = (value) => {
    if (value < 0) {
        return value* -1;
    }

    return value;
};



// Создать функцию pow которая принимает два числа и возводит первое число в степень (представленную вторым числом).
// Пример работы:
// pow(2, 2);
// => 4
// pow(3, 3);
// => 27
const pow = (value, extent) => {
    let result = 1;

    for (let i = 0; i < extent; i++) {
        result *= value;
    }

    return result;
};



// Создать такие структуры данных чтобы
// выражение dro[1]().bro вернуло в качестве результата значение true,
// выражение a[4][1][1].y вернуло строку 'Север',
// выражение b.y().y.z()[3].autor вернуло строку 'Дима'.
var dro = ['', () => ({bro: true})];

var a = ['', '', '', '', ['', ['', {y: 'Север'}]]];

var b = {
    y: () => ({
        y: {
            z: () => {
                return ['', '', '', {autor: 'Дима'}]
            }
        }
    })
};
