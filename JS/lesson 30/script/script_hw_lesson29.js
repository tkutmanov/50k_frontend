// с помощью цикла сделайте перебор товаров

let ttl = document.querySelectorAll(".body_item > .ttl");

for (let i=0; i < ttl.length; i++) {
    
    console.log(ttl[i].innerText);
}

// по клику получить название товара с помощью js

let elements = document.getElementsByClassName("add_cart");

let myFunction = function() {
    var attribute = this.parentNode.parentNode.parentNode.querySelectorAll(".ttl");
    console.log(attribute[0].innerText);
};

for (var i=0; i < elements.length; i++) {
    elements[i].addEventListener("click", myFunction, false);
}


// по клику получить цену товара с помощью js

let elements2 = document.getElementsByClassName("add_cart");

let myFunction2 = function() {
    var attribute2 = this.parentNode.parentNode.parentNode.querySelectorAll(".price");
    console.log(attribute2[0].innerText);
};

for (var i=0; i < elements.length; i++) {
    elements2[i].addEventListener("click", myFunction2, false);
}


// по клику получить адрес картинки с помощью js

let elements3 = document.getElementsByClassName("add_cart");

let myFunction3 = function() {
    var attribute3 = document.getElementsByClassName("img2");
    console.log(attribute3[0]);
};

for (var i=0; i < elements3.length; i++) {
    elements3[i].addEventListener("click", myFunction3, false);
}

// попробуйте с помощью js поменять название товара и цену товара   


function changeName(goodsName, newName, oldPrice, newPrice) {
    document.querySelector(goodsName).textContent=newName;
    document.querySelector(oldPrice).textContent=newPrice;
}

changeName(".ttl", "t-shirt1", ".price", "$55.00");