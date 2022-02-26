// ООП - понятие 
// Применение 

// Как понять что есть строка

 let str = "текст";
 let strObj = new String(str);

//  console.log(str);
//  console.log(strObj);


//  console.log(typeof(str));
//  console.log(typeof(strObj));


 let array = [1,2,3];
//  console.log(array);

 // __proto__ - это наследование тех или иных данных
//  откуда эти данные унаследованы

//Объекты

let car = {
    kuzov: "Железо",
    kolesa:"4 колеса",
    modal: function(){

        console.log("Hello");
    }
};

// let mb = {
//     marka: "Мерс",
//     year: "2021"
// };

let mb = Object.create(car); // создание объекта связанный с car

mb = {

};

// объединение 2х объектов (старый метод)

// mb.__proto__ = car;

console.log(mb.modal); // в терминале отобразится [Function:modal]

mb.modal();  // в терминале вышло Hello


// ________Метод setPrototypeOf

Object.setPrototypeOf(mb, car);

// ________Метод create

// ________Метод getPrototypeOf
