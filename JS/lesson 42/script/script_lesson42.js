// СОБЫТИЯ И ИХ ОБРАБОТЧИКИ


let click = document.getElementById("btn1");
let click2 = document.getElementById("btn2");


// ____________события мыши:
// 1. click - происходит, когда кликнули на элемнет левой кнопкой мыши
// (на устройствах с сенсорными экранами оно происходит при касании)

// 2. contextmenu - происходит, когда кликнули на элемнет правой кнопкой мыши

// 3. mouseover/mouseout - когда мышь наводится на / покидает элемент

// 4. mousedown/mouseup - когда нажали / отжали кнопку мыши на элемент

// 5. mousemove - при движении мыши

// __________ события на элементах управления

// 1. submit - пользователь отправил форму <form>

// 2. focus - пользователь фокусируется на элементе, например на <input>

// click.onclick = function(){
//     alert("Click");
// };

// click.onclick = function(){
//     alert("Click2");
// };                   // при данном использовании вызывается последняя функция 
                     

// click.addEventListener("click", ()=> {
//     alert("click");
// });

// click.addEventListener("click", ()=> {
//     alert("click2");
// });             // при таком использовании вызывается сначало Clik,а 
//                 // затем и Click2, то есть происходит двойной клик


// click.addEventListener("mouseover", ()=> {
//     alert("click");
// });

// click.addEventListener("mouseout", ()=> {
//     alert("click");
// });


// чтобы расотать с событиями необходимо им передать параметры

// click.addEventListener("click", (e)=> {
//     e.target.remove();
// }); // удалилась кнопка

// для того чтобы удалить несколько кнопок

// let delete_elem=(e)=> {
//     e.target.remove();
// };

// click.addEventListener("click", delete_elem);
// click2.addEventListener("click", delete_elem);

//_____________________________
// let delete_elem=(e)=> {
//     console.log(e.target.innerText);
// };

// click.addEventListener("click", delete_elem);
// click2.addEventListener("click", delete_elem);

//___________________________

let delete_elem=(e)=> {
    alert(`Вы кликнули на кнопку: ${e.target.innerText}`);
};
    
click.addEventListener("click", delete_elem);
click2.addEventListener("click", delete_elem);