 // 2) По клику на кнопку добовить в корзину Товар с следующими параметрами:
//     -Картинка
//     -Заголовок
//     -Доп.параметры цвет
//     -Цена

// 3) Добавить в корзину

// Конкретные задачи:
    // 1) Получить картинку

    // 2) Получить Заголовок
        // РЕШЕНИЕ:
        // let ttl = document.getElementsByClassName("ttl");
        // ttl[1].innerText

    // 3) Получить доп параметры
    // 4) Получить цену

// Принцип получения данных следующий:
    // Получить данные можно с помощью:

    // .class
    // #id  
    // attribute
    // tag

// .class - document.getElementsByClassName
//          вкладка
//          (.) - связка
//          get - получить 
//          Elements-Элементы (потому что классов бывает несколько)
//          By - по / от 
//          ClassName - название класса

// ------------------------------------------------
// let ttl = document.getElementsByClassName("ttl");
// ttl[1].innerText

    // Результат: ничего не вывелось

// !!!Без команды "вывод" ничего не выведится!
//-----------------------------------------------


// --------_________let ttl = document.getElementsByClassName("ttl");

// console.log(ttl[0].innerText);
// console.log(ttl[1].innerText);
// console.log(ttl[3].innerText);
// console.log(ttl[4].innerText);
// console.log(ttl[5].innerText);

// --------__let ttl = document.querySelectorAll(".body_item > .ttl");

// console.log(ttl[0].innerText);
// console.log(ttl[1].innerText);
// console.log(ttl[2].innerText);
// console.log(ttl[3].innerText);
// console.log(ttl[4].innerText);



// 1) Получить картинку

// let img2 = document.getElementsByClassName("img2");
// console.log(img2[0]);

// 4) Получить цену

// let price = document.getElementsByClassName("price");
// console.log(price[0].children);


// ----------Циклы----------

// var arr = ["Яблоко", "Апельсин", "Груша"];

// arr.forEach(function(item, i, arr) {
//     alert( i + ": " + item + " (массив:" + arr + ")" );
// });


// ----------Фильтры---------

// var arr = [1, -1, 2, -2, 3];

// var positiveArr = arr.filter(function(number) {
//     return number > 0;
// });

// alert(positiveArr); //1,2,3


// ------------Считывание длинны того или иного текста 
// который находится внутри нашего массива (map) ---------

// var names = ['HTML', 'CSS', 'JavaScript'];

// var nameLengths = names.map(function(name) {
//     return name.length;
// });

// // получили массив с длинами
// alert (nameLengths); //4, 3, 10 


// ----------every, some-------------

// var arr = [1, -1, 2, -2, 3];

// function isPositive(number) {
//     return number >0;
// }

// alert(arr.every(isPositive)); //false, не все положительные

// alert(arr.some(isPositive)); // true, есть хоть одно 
                                 //положительное число


// --------------__________---------------

// var arr = [1, 2, 3, 4, 5];

// для каждого элемента массива запустить функцию,
// промежуточный результат передавать первым аргументом далее

// var result = arr.reduce(function(sum, current) {
//     return sum + current;
// }, 0);

// alert(result); //15


// -----------------Цикл FOR--------------

// let ttl = document.querySelectorAll(".body_item > .ttl");

// console.log(ttl);

// for (let text of ttl) {
//     console.log(text.innerText);

// }


// --------по клику добавить в корзину----------

// var elements = document.getElementsByClassName("add_cart");

// console.log(elements);

// for (var i=0; i < elements.length; i++) {
//     console.log(elements[i]);
// }


var elements = document.getElementsByClassName("add_cart");

var myFunction = function() {
    var attribute = this.parentNode.parentNode.parentNode.querySelectorAll(".ttl");
    console.log(attribute[0].innerText);
};

for (var i=0; i < elements.length; i++) {
    elements[i].addEventListener("click", myFunction, false);
}

//-------Урок 30---------
// Объекты

const arr = {
    name: "Ismar",
    age: 26,
    param: {
        color: "white",
        nat: "dungan"
    }
};

// console.log (arr["name"]); или можно

// console.log (arr.name);

// delete arr.name;

// console.log (arr.name);

//отображение ключей
// for (let key in arr) {
//     console.log(key);
// }

//отображение значений
// for (let key in arr) {
//     console.log(arr[key]);
// }

//распаковка второго массива param

for (let key in arr) {

    if(typeof(arr[key]) === "object") {
        for (let key2 in arr[key]) {
            console.log(arr[key][key2]);

        }

    } else {
        console.log(arr[key]);
    }

}

// --------Урок31 -------

// Что такое function

// let num = 10;
// let num2 = 15;
// let num3 = 25;

// console.log(num);
// console.log(num2);
// console.log(num3);

// function name_fun(number) {
//     let num = number;
//     console.log(num);
// }

// name_fun(200);
// name_fun(300);
// name_fun(400);


// Пример1

// function name_fun(number) {
//     let num = 10;
//     console.log(num);
// }
// name_fun();             // вывод число 10, так как нет аргументов, параметров




// Пример 2
// let num1 =200;

// function name_fun() {
//     let num1 = 10;
//     console.log(num1);
// }
// name_fun();           // вывод число 10 так как num1 =200; не внутри функции
                            // и у функции нет аргументов

// console.log(num1);  // вывод число 200 так как console.log(num1); вне функции



// Пример 3
let num1 =200;

function nameFun(num1) {
    let perсonst = 120;
    let result;

    result=perсonst + num1;
    console.log(result);
}
nameFun(200);  

// console.log(num1);



// ---------УРОК 32--------

//Методы и свойства строк и чисел

// ______________методы СТРОК____________

let text = "Привет! как у тебя дела";
         

// Сколько символов LENGTH
console.log(text.length); // 24 символов к-е нах-ся в ковычках

// Поиск в строке  INDEXOF
console.log(text.indexOf("тебя")); // 14, то есть после 14 символа 
                                  // идет слово "тебя" (индекс положения)


console.log(text.indexOf("тебsя")); // если не найдет слово, то вернет -1

// Поиск внутри строки SEARCH
console.log(text.search("тебя")); // 14 ищет позицию

// Отрезает лишнее в строке SLICE
console.log(text.slice(7, 11)); //первый индекс отрезает начальную строку
                                // второй индекс отрезает последние строки
                                // "как"
// let text = "Привет! как у тебя дела";

console.log(text.slice(-11, -7)); // "у те"

console.log(text.slice(-13, -7)); // "к у те"

//Метод Substring() или substr() Вырезать

// Отличие от SLICE то что нельзя использовать "-"
// Нельзя вырезать с конца


console.log(text.substring(6, 13)); // "! как у"


// Replace() замена содержимого

console.log(text.replace("тебя", "МЕНЯ")); // "Привет! как у МЕНЯ дела"


// toUpperCase() верхний регистр

console.log(text.toUpperCase()); // "ПРИВЕТ! КАК У ТЕБЯ ДЕЛА"

// toLowerCase() нижний регистр

console.log(text.toLowerCase()); // "привет! как у тебя дела"

//concat()

//trim() удаляет лишние пробелы

let text2 = "          Привет! как        у тебя     дела";
console.log(text.trim()); //  "Привет! как у тебя дела"


// _______________Методы ЧИСЕЛ____________________

// -------------МЕТОД toString() - возвращает строковое представление числа в той 
// или иной системе счисления (base)

// base может принимать значения от 2 до 36 (по умолчанию 10)



let x = 255;

console.log(x.toString(16)); // ff
console.log(x.toString(8));  // 377
console.log(x.toString(2));  // 11111111
console.log(x.toString());   // 255
// console.log(x.toString(0));  // ошибка
console.log(typeof x); 

// --------------МЕТОД toExponential() - возвращает строку с округленным
// числом, записанным с использованием экспоненциальной записи
// Параметр определяет количество знаков после десятичной точки

let x1 = 9.656;
console.log(x1.toExponential(2)); // 9.66e+0
console.log(x1.toExponential()); // 9.656e+0
console.log(x1.toExponential(0)); // 1e+1
console.log(typeof x1); 

// -------------МЕТОД toFixed()- возвращает строку с числом, записанным с 
// указанным количеством десятичных знаков

let x2 = 9.656;
console.log(x2.toFixed(0)); // 10
console.log(x2.toFixed(2)); // 9.66
console.log(x2.toFixed()); // 10
console.log(typeof x2); 


// -----------Метод toPrecision() -возвращает строку с числом, 
//записанным с указанной длиной

let x3 = 9.656;
// console.log(x3.toPrecision(0)); // ошибка
console.log(x3.toPrecision(2)); // 9.7
console.log(x3.toPrecision()); // 9.656
console.log(typeof x3); 

// ------------Метод valueOf() возвращает число как число

// В JavaScript число может быть примитивным значением 
//(typeof = number) или объектом (typeof = object).

// Этот valueOf() метод используется внутри JavaScript 
//для преобразования объектов Number в примитивные значения.

// Нет причин использовать это в вашем коде.

// Все типы данных JavaScript имеют valueOf() и toString() метод.

let x4 = 9.656;
console.log(x4.valueOf(0)); // 9.656
console.log(x4.valueOf(2)); // 9.656
console.log(x4.valueOf()); // 9.656

console.log(typeof x4); 



// --------------Преобразование переменных в числа
// Метод Number()     - Возвращает число, преобразованное из его аргумента.
// Метод parseInt()   - Анализирует его аргумент и возвращает число с 
                        //плавающей запятой
// Метод parseFloat() - Анализирует его аргумент и возвращает целое число

// **************Метод Number()
Number(true);          // возвращает 1
Number(false);         // возвращает 0
Number("10");          // возвращает 10
Number("  10");        // возвращает 10
Number("10  ");        // возвращает 10
Number(" 10  ");       // возвращает 10
Number("10.33");       // возвращает 10.33
Number("10,33");       // возвращает NaN
Number("10 33");       // возвращает NaN
Number("Андрей");      // возвращает NaN

let a = "9.656";
// a = Number(a);

//второй способ перевода строки в числа это
a = +a;


console.log(a.toFixed(1)); // 9.7


// *************Метод parseInt()
// Метод parseInt() анализирует строку и возвращает целое число. 
//Разрешены пробелы. Возвращается только первое число:

parseInt("10");         // возвращает 10
parseInt("10.33");      // возвращает 10
parseInt("10 20 30");   // возвращает 10
parseInt("10 год");   // возвращает 10
parseInt("год 10");   // возвращает NaN 



// **************Метод parseFloat()
// Метод parseFloat() анализирует строку и возвращает число.
// Разрешены пробелы. Возвращается только первое число:

parseFloat("10");        // возвращает 10
parseFloat("10.33");     // возвращает 10.33
parseFloat("10 20 30");  // возвращает 10
parseFloat("10 год");  // возвращает 10
parseFloat("год 10");  // возвращает NaN




