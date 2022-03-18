let home = document.querySelectorAll(".home");
let product = document.querySelectorAll(".product");
let sale = document.querySelectorAll(".sale");
let blog = document.querySelectorAll(".blogs");
let about = document.querySelectorAll(".about");



let delete_elem=(e)=> {
    e.target.remove();
};

for (let i=0; i < home.length; i++) {
    home[i].addEventListener('click', delete_elem, false);
}

for (let i=0; i < product.length; i++) {
    product[i].addEventListener('click', delete_elem, false);
}

for (let i=0; i < sale.length; i++) {
    sale[i].addEventListener('click', delete_elem, false);
}

for (let i=0; i < blog.length; i++) {
    blog[i].addEventListener('click', delete_elem, false);
}

for (let i=0; i < about.length; i++) {
    about[i].addEventListener('click', delete_elem, false);
}



