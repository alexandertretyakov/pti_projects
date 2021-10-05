// 1. Создать 10 литералов представлюящих числа (5 целых и 5 дробных)
1
2
3
4
5
1.1
2.2
3.3
4.4
5.5

// 2. Создать 10 строковых литералов
"New York"
"Kiev"
"London"
"Berlin"
"Los Angeles"
"Ankara"
"Madrid"
"Varshava"
"Riga"
"Paris"

// 3. Создать 10 объектов представляющих объекты реального мира. В каждом объекте должно быть не меньше 4 свойств.
var motorcycle = {
    brand: "Yamaha",
    color: "red",
    model: "XVS",
    year: 1999
}

var monitor = {
    brand: "LG",
    model: "Flatron",
    color: "black",
    year: 2013
}

var krivbass = {
    city: "Кривой Рог",
    district: "Днепропетровская",
    age: 246,
    length: "126 км"
}

var telephone = {
    brand: "Siemens",
    model: "M55",
    year: 2002,
    standart: "GSM"
}

var bike = {
    model: "Crossride",
    year: 2019,
    wheel: 29,
    frame: 21
}

var capitals = {
    ukraine: "Kiev",
    italy: "Rome",
    france: "Paris",
    germany: "Berlin"
}

var weapon = {
    view: "Rifle Sniper",
    model: "AR-15",
    caliber: 7.62,
    SightingRange: 3000
}

var car = {
    model: "Skoda",
    color: "black",
    body: "sedan",
    class: "hybrid"
}

var game = {
    name: "crossout",
    developer: "Targem Games",
    release: 2017,
    genre: "action"
}

var tank = {
    name: "Tiger",
    class: "Heavy Tank",
    caliberSM: 8.8,
    country: "Germany"
}

// 4. Создать 10 массивов представляющих массивы некоторых значений из реальной жизни. В каждом массиве должно быть не меньше 4 элементов.
["сало", "молоко", "рыба", "хлеб", "водка"]
["Fire Fox", "Google", "Opera", "Compass"]
["Voltage", "V", 220, 380, 550]
["HTML","CSS","JavaScript","SCSS"]
["object","array","function",null,"null"]
["бампер","колесо","руль","фара","двигатель"]
["Ford","Mersedes", "Mitsubishi", "Opel"]
["Ukraine", "Germany", "Islandy", "Italy"]
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
["Гильза", "Порох", "Пуля", "Капсуль"]

// 5. Объявить 5 переменных с произвольным именем.
var a;
var b;
var c;
var d;
var e;

// 6. Объявить еще 5 переменных и в момент объявления присвоить им значения произвольных типов данных.
var a = 5;
var b = 5.5;
var c = "PlayTech";
var d = {};
var e = [];

// 7. Создать массив из элементов, значения которых представлены всеми изученными типами данных в JavaScript.
var mix = [1,"row", true, false, {},[],null,undefined]

// 8. Создать объект из четырех свойств. Три свойства должны иметь значения простых типов данных. Два остальных свойства должны иметь значения составного (объектного) типа данных.
var pocket = {
    key: true,
    gum: "Орбит",
    brick: "Красный и тяжёлый",
    wallet: {
        bills: true,
        smallChange: true,
        ticketsOnMorgenshtern: false
    },
    cigarettes: {
        quantity: 20,
        filter: false,
        mark: "Прима"
    }
}

// 9. Написать выражения использующие все изученные арифметические операторы
5 + 5;
5 - 5;
5 * 5;
5 / 5;
5 % 4;

// 10. Написать выражения использующие все изученные операторы сравнения
5 === 5;
5 !== 5;
5 > 5;
5 < 5;
5 >= 5;
5 <= 4;

// 11. Написать выражения использующие все изученные логические оператор;
true && true;
false && true;

true || true;
true || false;
false || false;

!true;
!false;

// 12. Написать выражение использующее тернарный условный оператор
100 < 200 ? "Правильно" : "Неправильно";

// 13. Написать выражения использующие все изученные операторы присваивания
a = 5;
a += 20;
a -= 5;
a *= 5;
a /= 5;
a %= 5;

// 14. Создать массив из 10 элементов (чисел) и написать выражения возвращающие значение первого, третьего, пятого и восьмого элемента
var a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
a[0];
a[2];
a[4];
a[7];
// 15. Создать массив и написать 3 выражения меняющие значения его элементов
var a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
a[1]=20;

var i = 2;
a[i]=20;

a[a.length]=110;

// 16. Создать объект из 5 свойств и написать 3 выражения возвращающие значения произвольных свойств
var car = {
    model: "Skoda",
    color: "black",
    body: "sedan",
    class: "hybrid"
}

car.model;
car.color;
car.class;

// 17. Создать объект и написать 3 выражения меняющие значения его свойств
var car = {
    model: "Skoda",
    color: "black",
    body: "sedan",
    class: "hybrid"
}

a.model = "Audi";
a.color = "red";
a.body = "cabriolet";