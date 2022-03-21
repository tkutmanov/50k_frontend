(function(){
    'use strict';

    // команда для создания класса - концепция
    // сам класс может состоять из методов и объектов
    

    // class ploshad{
    //     // всегда в начале пишется constructor, который принимает основные параметры

    //     constructor(width, height) {
    //         this.width=width;
    //         this.height=height;

    //     }

    //     calcPloshad(){
    //         return this.width*this.height;
    //     }

    //     calcPloshad2(){
    //         return this.width+this.height;
    //     }

    // }

    // передача данных как объекты
    // использование и отображение самого результата - экземпляр

    // const res_area= new ploshad(10,20);
    // const res_area2= new ploshad(50,50);

    // console.log(res_area.calcPloshad());
    // console.log(res_area2.calcPloshad());

    //____________________ пример2


        class ploshad{
        // всегда в начале пишется constructor, который принимает основные параметры

        constructor(width, height) {
            this.width=width;
            this.height=height;

        }

        calcPloshad(){
            return this.width*this.height;
        }

        calcPloshad2(){
            return this.width+this.height;
        }

    }

    class ploshadText extends ploshad{

        //extends связка двух классов

        constructor(width, height, text, value) {
            
            super(width, height);          
                               //  superэто использование наследника, то есть 
                              // наследование каких то действий, конструкции и логики 
            this.text=width;
            this.value=value;

        }
        showText(){
            console.log(`Text: ${this.text} | Value: ${this.value}`);
        }

    }

    const block=new ploshadText(20, 20, "Ismar", "Tема урока Class")

    block.showText();

    console.log(block.calcPloshad());
  


}());




// Урок 47 JSON

// const Data ={
//     name:"Ismar",
//     age:26,
//     toString(){
//         return `{name:"${this.name}", age: ${this.age}};`
//     }
// };

// console.log(Data.toString());


// конвертация с помощью JSON

// const Data ={
//         name:"Ismar",
//         age:26,
        
//     };
    // console.log(Data); 
    // console.log( JSON.stringify(Data) ); // сериализация (архивация)

    // console.log( JSON.parse(JSON.stringify(Data)) ); //распаковка

    
    
    //__________клонирование

    const Data ={
        name:"Ismar",
        age:26,
        parent: {
            parent1:"Alex",
            parent2:"Rosa"
        }
    };
    // console.log(Data); 
    // console.log( JSON.stringify(Data) ); // сериализация (архивация)
        
    // const newObj= JSON.parse(JSON.stringify(Data)); //распаковка
    newObj.parent.parent1 = "Ismar";
    
    // console.log(newObj); 

    // json создает копию, затем идет конвертация


//     JavaScript. Создание объектов

// JavaScript предоставляет разработчикам возможность 
// создавать объекты и работать с ними. Для этого 
// существуют следующие приёмы:

// -Оператор new

//Создаем наш объект
var MyObject = new Object();
//Переменные
MyObject.id = 5; //Число
MyObject.name = "Sample"; //Строка
//Функции
MyObject.getName = function()
{
    return this.name;
};
console.log(MyObject);

// -Литеральная нотация
//Создаем наш объект с использованием литеральной нотации
let MyObject2 = {
    id : 1,
    name : "Sample",
    boolval : true,
    getName : function()
    {
        return this.name;
    }
};
console.log(MyObject2);

// -Конструкторы объектов
var MyFirstObjectInstance = new MyObject(5,"Sample");
var MySecondObjectInstace = new MyObject(12,"Othe Sample"); 

// -Ассоциативные массивы

var MyObject = new Number();
MyObject["id"] = 5;
MyObject["name"] = "SampleName"; 