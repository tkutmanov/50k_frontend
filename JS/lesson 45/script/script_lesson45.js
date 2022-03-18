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