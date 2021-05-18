// Реализовать нижеуказанные функции.
// ВНИМАНИЕ!
// Соблюдайте форматирование кода (отступы, переносы)
// Не использовать встроенные функции/методы




// Создать функцию isUndefined которая принимает в качестве единственного входящего параметра значение любого типа данных
// и возвращает true если значение равно undefined иначе возвращает false.
// Пример работы:
// isUndefined(undefined);
// => true
// isUndefined('hello');
// => false
function isUndefined (value) {
    if (value === undefined) {
    return true;
    } else {
    return false;
    }
}

// Создать функцию isNull которая принимает в качестве единственного входящего параметра значение любого типа данных
// и возвращает true если значение равно null иначе возвращает false.
// Пример работы:
// isNull(null);
// => true
function isNull (value) {
    if (value === null) {
        return true;
    } else {
        return false;
    }
}

// Создать функцию isBoolean которая принимает в качестве единственного входящего параметра значение любого типа данных
// и возвращает true если принимаемое значение является значением логического типа данных. В противном случае вернет false.
// Пример работы:
// isBoolean(null);
// => false
// isBoolean(false);
// => true
function isBoolean (value) {
    if (value === true || value === false) {
        return true;
    } else {
        return false;
    }
}

// Создать функцию size которая принимает в качестве единственного входящего параметра массив и возвращает количество элементов в массиве.
// Пример работы:
// size([7, 2, 3, 5, 5, 3]);
// => 6
function size (list) {
    return list.length;
}

// Создать функцию first которая принимает в качестве единственного входящего параметра массив произвольных значений и возвращает первое из них.
// Пример работы:
// first([5, 4, 3, 2, 1]);
// => 5
function first (list) {
    return list[0];
}

// Создать функцию last которая принимает в качестве единственного входящего параметра массив произвольных значений и возвращает последнее из них.
// Пример работы:
// last([5, 4, 3, 2, 1]);
// => 1
function last (list) {
    return list[list.length-1];
}

// Создать функцию isEven которая возвращает true если число четное или false в противном случае.
// Пример работы:
// isEven(10);
// => true
// isEven(8);
// => true
// isEven(7);
// => false

function isEven (value) {
    if (value % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// Создать функцию indexOf которая вернёт позицию, на которой находится элемент value в массиве array, или -1, если данный элемент не был найден.
// Пример работы:
// indexOf([77, 2, 3], 2);
// => 1
function indexOf (list, value) {
    var i = 0;
    while (i < list.length) {
        if (list[i] === value) {
            return i;
        }
        i++;
    }
    return -1;
}

// Создать функцию lastIndexOf которая паринимает два параметра (массив, значение) и ищет значение в массиве и возвращет его индекс, но делает это не с начала массива, а с его конца.
// Т.е. возвращает позицию последнего вхождения значения в массиве значений. Иначе возвращает -1.
// Пример работы:
// lastIndexOf([1, 2, 3, 1, 2, 3], 2);
// => 4
function LastIndexOf (list, value) {
    var i = list.length -1;
    while (i >= 0) {
        if (list[i] === value) {
            return i
        }
        i--;
    }
    return -1
}

// Создать функцию push которая принимает массив и произвольное значение и возвращает копию массива + произвольное значение (которое находится в конце массива)
// Пример работы:
// push([1, 2, 3, 4], 5);
// => [1, 2, 3, 4, 5]
function push (list, value) {
    var result = [];
    var i = 0;
    while (i < list.length) {
        result[result.length] = list[i]
        i++;
    }
    result[result.length] = value;
    return result;
}

// Создать функцию unshift которая принимает массив и произвольное значение и возвращает копию массива + произвольное значение (которое находится в начале массива)
// Пример работы:
// unshift([1, 2, 3, 4], 5);
// => [5, 1, 2, 3, 4]
function unshift (list, value) {
    var i = 0;
    var result = [value];
    while (i < list.length) {
        result[result.length] = list[i]
        i++;
    }
    return result;
}

// Создать функцию pop которая принимает массив и возвращает копию массива без последнего значения.
// Пример работы:
// pop([1, 2, 3, 4]);
// => [1, 2, 3]
function pop (list) {
    var i = 0;
    var result = [];
    while (i < list.length-1) {
        result[result.length] = list[i];
        i++;
    }
    return result;
}

// Создать функцию shift которая принимает массив и возвращает копию массива без первого значения.
// Пример работы:
// shift([1, 2, 3, 4]);
// => [2, 3, 4]
function shift (list) {
    var i = 1;
    var result = [];
    while (i < list.length) {
        result[result.length] = list[i];
        i++;
    }
    return result;
}

// Создать функцию getPositiveNumbers которая принимает массив чисел и возвращает массив положительных чисел найденных в исходном массиве.
// Пример работы:
// getPositiveNumbers([10, -5, 100, -2, 1000]);
// => [10, 100, 1000]
function getPositiveNumbers (list) {
    var i = 0;
    var result = [];
    while (i < list.length) {
        if (list[i] > 0) {
            result[result.length] = list[i];
        }
        i++
    }
    return result;
}

// Создать функцию reverse которая принимает массив и возвращает копию входящего массива с элементами в обратном порядке.
// Пример работы:
// reverse([1, 'lol', 5, {}, []]);
// => [[], {}, 5, "lol", 1]
function reverse (list) {
    var i = list.length-1;
    var result = [];
    while (i >= 0) {
        result[result.length] = list[i];
        i--;
    }
    return result;
}

// Создать функцию compact которая принимает в качестве единственного входящего параметра массив произвольных значений и возвращает копию массива без undefined значений.
// Пример работы:
// compact([10, 1, 4, 2, undefined, 3, null]);
// => [10, 1, 4, 2, 3, null]
function compact (list) {
    var i = 0;
    var result = [];
    while (i < list.length) {
        if (list[i] !== undefined) {
            result[result.length] = list[i];
        }
        i++;
    }
    return result;
}

// Создать функцию contains которая принимает два входящих параметра (массив значений простых типов данных и значение простого типа данных).
// Функция вернет true если в массиве содержится определенное значение. Иначе функция вернет false.
// Пример работы:
// contains([1, 2, 3], 3);
// => true
function contains (list, value) {
    var i = 0;
    while (i < list.length) {
        if (list[i] === value ) {
            return true;
        }
        i++;
    }
    return false;
}

// Создать функцию without которая возвращает копию массива, в которой удалены все значения второго аргумента указанного при вызове функции.
// Пример работы:
// without([3, 6, 7, 'rere'], 6);
// => [3, 7, 'rere']
function without (list, value) {
    var i = 0;
    var result = [];
    while (i < list.length) {
        if (list[i] !== value ) {
            result[result.length] = list[i]
        }
        i++;
    }
    return result;
}

// Создать функцию concat которая принимает два массива и возвращает новый массив состоящий из значений первого и второго.
// Пример работы:
// concat(['a', 'b', 'c'], ['d', 'e', 'f']);
// => [ "a", "b", "c", "d", "e", "f" ]
function concat (list, array) {
    var i = 0;
    var result = [];
    while (i < list.length) {
        result[result.length] = list[i];
        i++
    }
    i = 0;
    while (i < array.length) {
        result[result.length] = array[i];
        i++
    }
    return result;
}

// Создать функцию getMatrixSum которая принимает матрицу чисел и возвращает сумму всех чисел.
// Пример работы:
// getMatrixSum([[1, 2], [0, 4], [1, 2]]);
// => 10
function getMatrixSum (matrix) {
    var i = 0;
    var sum = 0;
    while (i < matrix.length) {
        var j = 0;
        while (j < matrix[i].length) {
            sum = sum + matrix[i][j];
            j++;
        }
        i++;
    }
    return sum;
}

// Создать функцию getMatrixSumByDiagonal которая принимает квадратную матрицу чисел и возвращает сумму чисел по диагонали (слева направо, сверху вниз).
// Пример работы:
// var matrix = [
//      [1, 2, 3],
//      [3, 0, 4],
//      [0, 1, 2]
// ];
// getMatrixSumByDiagonal(matrix);
// => 3 (1 + 0 + 2)
function getMatrixSumByDiagonal (matrix) {
    var i = 0;
    var j = 0;
    var sum = 0;
    while (i < matrix.length) {
        sum = sum + matrix[i][j];
        i++;
        j++;
    }
    return sum;
}

// Создать функцию min которая принимает в качестве единственного входящего параметра массив чисел и возвращает наименьшее из них.
// Пример работы:
// min([10, 5, 100, 2, 1000]);
// => 2
function min (list) {
    var i = 0;
    var result = list[0];
    while (i < list.length) {
        if (result > list[i]) {
            result = list[i];
        }
        i++
    }
    return result;
}

// Создать функцию max которая принимает в качестве единственного входящего параметра массив чисел и возвращает наибольшее из них.
// Пример работы:
// max([10, 5, 100, 2, 1000]);
// => 1000
function max (list) {
    var i = 0;
    var result = list[0];
    while (i < list.length) {
        if (result < list[i]) {
            result = list[i];
        }
        i++
    }
    return result;
}

// 32. Создать функцию repeat которая принимает строку и число count и возвращает новую строку, содержащую указанное количество соединённых вместе копий строки.
// Пример работы:
// repeat('Work', 6);
// => 'WorkWorkWorkWorkWorkWork'
function repeat (row, count) {
    var i = 1;
    var result = row;
    while (i < count) {
        result = result + row;
        i++;
    }
    return result;
}

// Создать функцию sum которая принимает массив чисел и возвращает их сумму.
// Пример работы:
// sum([2, 2, 3]);
// => 7
function sum (list) {
    var i = 0;
    var sum = 0;
    while (i < list.length) {
        sum = sum + list[i];
        i++;
    }
    return sum
}

// Создать функцию multiply которая принимает массив чисел и возвращает их произведение.
// Пример работы:
// multiply([2, 2, 3]);
// => 12
function multiply (list) {
    var i = 0;
    var result = 1;
    while (i < list.length) {
        result = result * list[i];
        i++;
    }
    return result;
}

// Создать функцию abs которая принимает число и возвращает его модуль (абсолютная величина, неотрицательное число).
// Пример работы:
// abs(-4);
// => 4
function abs (value) {
    if (value < 0 ) {
        return -value;
    } else {
        return value;
    }
}

// Создать функцию pow которая принимает два числа и возводит первое число в степень (представленную вторым числом).
// Пример работы:
// pow(2, 2);
// => 4
// pow(3, 3);
// => 27
function pow (value, extent) {
    var i = 1;
    var result = 1;
    while (i <= extent) {
        result = result * value;
        i++;
    }
    return result;
}