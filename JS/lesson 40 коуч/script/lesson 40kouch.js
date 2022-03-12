const cart = document.querySelector(".cart");
const cartClick = document.querySelector(".orange_krug");
const cartContainer = document.querySelector(".cart-container");

const openCart = function() {
    cart.classList.toggle("active");

}

cartClick.addEventListener("click", openCart);

const btnAddToCart = document.querySelectorAll(".add_cart");

const addToCart = function(){
    const productImg=this.closest(".item").children[0].children[2].src;
    const productTitle=this.closest(".item").children[1].children[0].textContent;
    const productPrice=this.closest(".item").children[1].children[2].children[0].textContent;

    console.log(productImg);

    const template =`
        <div class="cart-item">
            <div class="cart-img>
                <img src="${productImg}">
            </div>
            <div class="cart-content">
                <p>${productTitle}</p>
                <span>${productPrice}</span>
            </div>
        </div>
    
    `;

    const position = `afterbegin`;
    cartContainer.insertAdjacentHTML(position, template);
}

for (let i=0; i<btnAddToCart.length; i++){
    btnAddToCart[i].addEventListener("click", addToCart);
}

console.log(cart);