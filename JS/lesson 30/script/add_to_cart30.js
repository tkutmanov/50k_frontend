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