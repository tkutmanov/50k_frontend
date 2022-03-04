// Добавление товара в корзину по единичному клику 
// навешиваем событие в html

//------------
//    <form>
//        <input type="checkbox" id="myCheck" click="myFunction()"
//    onclick="alert('click event occured')">
//    </form>

// function myFunction() {
//     document.getElementById("myCheck").click();
// }
//------------

let className = document.getElementsByClassName("add_cart");

let myFunction = function(evt) {
    evt.preventDefault();      
    let title = this.parentNode.parentNode.parentNode.querySelectorAll(".ttl");  
    let price = this.parentNode.parentNode.parentNode.querySelectorAll(".span_price");
    let image = this.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".item img");
    let create_li = document.createElement('li');

    console.log(title[0].innerText);
    console.log(price[0].innerText);
    console.log(image[0].src);


//------------
// evt.preventDefault() - убирает действие якоря #(ссылка href),
//чтобы страница не поднималась вверх
//------------

//------------
// parentNode - выйти на один элемент выше
//------------

//------------
// this - означает что опираясь на первый запрос, а именно
// let className = document.getElementsByClassName("add_cart");
// использовать this, то есть наследует вышеуказанный документ
//------------

create_li.innerHTML = '<div class="bag_img">\
            <a href="?search=#">\
                <img src="'+image[0].src+'" alt="">\
            </a>\
        </div>\
        <div class="bag_info">\
            <p class="info_title"><a href="?search=#">'+title[0].innerText+'</a></p>\
            <div class="info_price">\
                <span>'+price[0].innerText+'</span>\
            </div>\
            <div class="trash">\
                <a href="?search=#"><i class="fa-solid fa-trash-can"></i></a>\
            </div>\
        </div>';

let blockCart=document.querySelector('.dropdown_menu.bag');
blockCart.appendChild(create_li);

alert("Товар успешно добавлен в корзину")
};



for (let i=0; i < className.length; i++) {
    className[i].addEventListener('click', myFunction, false);
}

//addEventListener - добавляем события клика

//'click'    - тип события 
//myFunction - что должно выполняться
//false      - обработчик