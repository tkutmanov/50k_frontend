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

    // console.log(title[0].innerText);
    // console.log(price[0].innerText);
    // console.log(image[0].src);


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

create_li.classList.add("bag_item");


create_li.innerHTML =
        '<div class="bag_img">\
            <a href="#">\
                <img src="'+image[0].src+'" alt="">\
            </a>\
        </div>\
        <div class="bag_info">\
            <p class="info_title"><a href="#">'+title[0].innerText+'</a></p>\
            <div class="info_price">\
                <span class="currency">$</span>\
                <span class="span_price">'+price[0].innerText+'</span>\
            </div>\
            <div class="trash right">\
                <a href="#"><i class="fa-solid fa-trash-can"></i></a>\
            </div>\
        </div>';

let blockCart=document.querySelector('.dropdown_menu.bag');
blockCart.appendChild(create_li);

alert("Товар успешно добавлен в корзину")

//Удаление товара 

let click_trash = document.querySelectorAll(".trash");

    for (let i=0; i < click_trash.length; i++) {
        click_trash[i].addEventListener('click', del_func, false);
    }

    function del_func(){
        evt.preventDefault();  

        this.parentNode.parentNode.remove();

        total_price();
    }

    // получить общее количество суммы товаров в корзине
    total_price();

};



for (let i=0; i < className.length; i++) {
    className[i].addEventListener('click', myFunction, false);


}

function total_price(){
    let count_price = document.querySelectorAll(".info_price .span_price");

    let sum_price=0;

    for (let i=0; i < count_price.length; i++) {
        sum_price = sum_price + (+count_price[i].textContent);
    }

    

    document.getElementsByClassName("total_cart")[0].innerHTML= `$ ${sum_price}`;
    document.querySelectorAll(".shopcard_total span")[0].innerHTML= `$ ${sum_price}`;
}







//addEventListener - добавляем события клика

//'click'    - тип события 
//myFunction - что должно выполняться
//false      - обработчик



