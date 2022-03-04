// Динамическая типизация

let str = "текст";
let strObj = String(str);

//console.log(typeof(str));
//console.log(strObj);

let number = "1";
//console.log(number +5); // 15 (если сложить число со трокой, всегда результатом
                       // будет строка), то есть значения склеятся


// Но если

let number2 = "1";
//console.log(+number2 +5); // сконвертировали строку и получили 6 
              //(первый метод конвертации), можно + поставить перед 1

//console.log(parseInt(number2) +5);  // 6 (старый метод)


let number3 = "один";
console.log(+number3 +5); // NaN

//let resInput=+prompt("Введите свой возраст");

//проверка входящих данных


//console.log(typeof(resInput));
//console.log(resInput + 10);  



// генерация сайта https://miukid.com/cat

let resInput2 = +prompt("Введите номер страницы");
//console.log("https://miukid.com/cat"+resInput2); //интерполяция


console.log(`https://miukid.com/cat${resInput2}`); //новый метод интерполяции