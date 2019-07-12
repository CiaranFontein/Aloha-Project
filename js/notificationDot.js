const cartIcon = document.getElementsByClassName("cart-notification")[0];
let cartCount = 0;



function addItemToCart(){

    //Display hidden icon
    if(cartCount == 0){
        cartIcon.style.display = "flex";
    }

    cartCount++;
    cartIcon.innerHTML = cartCount;
}