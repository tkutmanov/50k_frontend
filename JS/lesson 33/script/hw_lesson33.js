// 1.Сделать callback функцию которая просит ввести 
// логин и пароль, и проверяет правильно ли введены данные пользователя 

// 2.Сделать callback функцию которая создаёт html элемент, 
// то есть функция просит какой тег создать, просит какой 
//текст ввести и цвет текста. 



// -----Задание 1
document.querySelector(".b-1").addEventListener("click", functionAdmin);

function functionAdmin() {
    let a = document.querySelector(".i-1").value;
    let b = document.querySelector(".i-2").value;

    let a1 = a.trim();

   if (a1==='admin', b==='123') {
       alert('Ваши данные верные');

   } else {
       alert ('Вы ввели не правельные данные');
   }
    
}


//------Задание 2

function first(callback) {
    let personalInfo = prompt ("Введите свое имя");
    let personalInfo2 = prompt ("Введите свою фамилию");
    
    let a = (personalInfo +' '+ personalInfo2);

    console.log(a);
    let element = document.querySelector('.out-1');
    callback(element, a);

    // if (a===('Meerim', 'Aidaralieva')){
    //     let element = document.querySelector('.out-1');
    //     callback(element, a);

    // } else {
    //     alert('Ваши данные не правильные');
    // }
    
    
}

function out(elem, a) {
    elem.innerHTML = a;
}


first(out);



