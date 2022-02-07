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


let ttl = document.getElementsByClassName("ttl");

console.log(ttl[0].innerText);


// 1) Получить картинку

let img2 = document.getElementsByClassName("img2");
console.log(img2[0]);


// 4) Получить цену

let span_price = document.getElementsByClassName("span_price");

console.log(span_price[0].innerText);


let del_price = document.getElementsByClassName("del_price");

console.log(del_price[0].innerText);