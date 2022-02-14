// l=2pr Сделать функцию которая вычисляет длину окружности, 
// радиус задает пользователь.

function lenght(r) {
    const p = 3.14;
    let circl = 2*p*r;
    return circl;
}


console.log(lenght(8));


// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b


function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }

  console.log(min(300,12));