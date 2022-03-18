

//  ______Урок 43  Навигация по DOM элементам

// если тег то он явлется УЗЛОМ ЭЛЕМЕНТА 
// а содержимое тега в виде текста УЗЛОМ ТЕКСТА

// Существует 12 типов узлов. Но на практике мы в основном работаем с 4 из них:

// document – «входная точка» в DOM.
// узлы-элементы – HTML-теги, основные строительные блоки.
// текстовые узлы – содержат текст.
// комментарии – иногда в них можно включить информацию, которая не будет показана, но доступна в DOM для чтения JS.

// console.log(document);

// console.log(document.head);

// console.log(document.body);

// document.body.style.background="red";

// текстом является видимая и не видимая сторона, сноски, то есть enter, пробелы, отступы

// console.log(document.body.childNodes);

// существует компрессор, который удаляет лишние проблелы
//  и символы для оптимизации веса файла

// console.log(document.querySelector()); //берет 1 элемент
                                    // querySelectorAll берет все элменты и 
                                    // отображвет как группированый список

// console.log(document.querySelector(".block_title").parentNode);
                                 //обращение к родительсому элементу

// console.log(document.querySelector(".block_title").nextSibling);
                                 //обращение к последующему  элементу

// console.log(document.querySelector(".block_title").previousSibling);
                                 //обращение к предыдущему  элементу


                                 // отображение всех невидимых текстов

// for (let per of document.body.childNodes){
    
//     if(per.nodeName === "#text"){
        
//         continue;
//     }

//     console.log(per.nodeName);
// }


//______________________HOME WORK 43____________


let className = document.getElementsByClassName("color");


let myFunction = function(){

    
    
    let red = document.querySelector(".calendar");
    let yellow = document.querySelector(".bookmark");
    let blue = document.querySelector(".phone");

   
    if (this===red){
        document.body.style.background="red";

    }
    else if(this===yellow) {
        document.body.style.background="yellow";
    }
    else if(this===blue){
        document.body.style.background="blue";

    }else{
        document.body.style.background="white";
    }
    
  
    
};

myFunction();

for (let i=0; i < className.length; i++) {
    className[i].addEventListener('click', myFunction);

   
}
 

