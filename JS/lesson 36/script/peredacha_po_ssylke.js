"use strict";

// ПЕРЕДАЧА ПО ССЫЛКЕ ИЛИ ПО ЗНАЧЕНИЮ

// Копирование объекта
// Копирование массива



// Новые стандарты
// Оператор разворота Spread

// let a =10;

// let b = a;

// a = 5;

// console.log(b); // 10
//_______________________________


// let a = 10,
//     b = a;  // работа с копией

// b = b + 15;

// console.log(b); //25
// console.log(a);

//_______________________________

const arr1 = {
    a: 1,
    b: 2
};
const newArr = arr1; // работа со ссылкой(ссылка на сам объект)

newArr.a=10;

// console.log(arr1);
// console.log(newArr); // когда мы копируем объект то копируется только ссылка

// console.log(arr1); //


function copy_arr(myObj){
    const newObj = {};
    

    let key;
    for (key in myObj){
        newObj[key]=myObj[key];
    }

    return newObj;

}

const oldObjv = {
    name: "Ismar",
    surname: "Suleimanov",
    hobby: {
        1: "swimming",
        2: "running"
    }
};

console.log(oldObjv);
// copy_arr(oldObjv);
// console.log(copy_arr(oldObjv));

const newObj = copy_arr(oldObjv);

// console.log(newObj.name);

newObj.name = "Alex";

// console.log(newObj);  // {
                    //       name: 'Alex',
                    //       surname: 'Suleimanov',
                    //       hobby: { '1': 'swimming', '2': 'running' }
                    // }


                    
// console.log(oldObjv);  // {
                        //     name: 'Ismar',
                        //     surname: 'Suleimanov',
                        //     hobby: { '1': 'swimming', '2': 'running' }
                        // }

newObj.hobby[1] = "Чтение"; //[] скобки, потому что цифры
                 // если ли бы было бы hobb1, hobb2 то обращались бы через точку

// console.log(newObj);
// console.log(oldObjv);


//----------------Метод assign()

// Используется для копирования значений всех собственных
// перечисляемых свойств из одного или более исходных объектов 
// в целевой объект. После копирования он возвращает целевой 
// объект.

// Object.assign(target,  ...sources)
// target - целевой объект
// sources - исходные объекты

// const newAssign = Object.assign(arr1,oldObjv); // склеит 2 объекта

// console.log(newAssign);

// const newAssign = Object.assign({},oldObjv);

newAssign.name = "Panda";
// console.log(newAssign);


// ___________________Массивы________________

const arr = ["яблоки", "груши", "виноград"];
// Индеексы     0          1         2

// const arr2 = arr;

// arr2[2] = "вишня";
// console.log(arr2);

// console.log(arr);
// console.log(arr2);

// Метод slice() -возвращает новый мвссив, содержащий копию
// части исходного массива


const arr2 = arr.slice(); // если в скобках указать число, это будет означать
                          // с какого индекса начать, если указать 2 числа
                          // то выведится число между этими числами
arr2[2] = "вишня";

// console.log(arr);
// console.log(arr2);



// _____________оператор разворота Spread ______________

// объединение 2х массивов

const tehnika = ["телефон", "планшет", "компьютер"],
      melodii = ["рок", "хип-хоп", "джаз"],
        combo = [...tehnika, ...melodii, "плавание", "бег"];

        // console.log(combo);

        const old_per= ["телефон", "планшет", "компьютер"];

        const new_per=[...old_per];
        new_per[1] = "футболка";

        console.log(old_per);
        console.log(new_per);



const arr3 = {

    a: 1,
    b: 2
};

const arr4 = {...arr3};

arr4.b=10;

console.log(arr3);
console.log(arr4);