(function(){

   // 'use strict'; //если отключить данный режим то консоле
                     // выходит ****Window****, если включить то выходит ****undefined****


    

    // function get_this(){
    //     console.log(this);

    //     function arif(a, b) {
    //         // console.log(this);

    //         // return this.a + this.b;

    //         // вышеуказанная операция выведит ошибку, так как 
    //         // у this нет свойства или метода a , b

    //         return a + b;

    //     }
    //     console.log(arif(5,3));
    // }

    // get_this();

    // this -это возможность вызова объекта и всего содержимого что находится
    // внутри объекта
    
    //_______________________2 вариант


    // function get_this(a, b){
    //     console.log(this);

    //     function arif() {
    //         // console.log(this);

    //         // return this.a + this.b;

    //         // вышеуказанная операция выведит ошибку, так как 
    //         // у this нет свойства или метода a , b

    //         return a + b;

    //     }
    //     console.log(arif());
    // }

    // get_this(10,3);

    // использование this внутри функции также будет обращаться к window
    // если мы включим use strict this выдаст сообщение undefined


    // ___________________________ Пример 1
    // const obj = {
    //     name: "Ismar",
    //     age: 26,
    //     sum: function(){
    //         console.log(this); // выводит obj
    //         // console.log(this.name); //Ismar
    //         // console.log(this.age); //26

    //         function test () {
    //             console.log(this); // выводит window глобальные данные
    //         }
    //         test();

    //     }
    // };

    // obj.sum();


    // при использовании this внутри метода объекта obj у this есть 
    // возможность использовать рядом стоящие данные

    // если внутри одного метода создать функцию и внутри него использовать this
    // то она обратится к глобальному окну window



    //__________________________Пример 2

    // function User(name, age){
    //     this.name=name,
    //     this.age = age,
    //     this.data_= function(){
    //         console.log("Hello " + this.name);
    //     };
    // } // создаем 

    // let ismar = new User("Ismar", 26); //передаем данные

    // // console.log(ismar);

    // ismar.data_();

    // This может быть использован внутри функции 
   // которая создает объекты и this получит предсозданные
   // объекты и их данные
   
   // ___________________________Пример 3

   // Одалживание метода

//    function hello(age) {
//        console.log(this);
//        console.log(this.name);
//        console.log(age);

   
//    }

//    const newObj = {
//        name:"Ismar"
//    };

// //    hello.call(newObj);
// //    hello.apply(newObj);

// // hello("Ismar"); // error

//    hello.call(newObj, 26);
//    hello.apply(newObj, ['26']);

// ________________________ Пример 4

// привязка к this данных, то есть this будет содержать 5
// то есть в ручную привязали к this число

// function count (num) {
//     return this + num;
// }

// const mnojitel = count.bind(5);

// console.log(mnojitel(10)); //15

const click = document.querySelector("#btn1");

click.addEventListener('click',function(){
    // this.style.background = "red";
    this.remove();
});

}());