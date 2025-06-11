export function updateCartQuantityDisplay() {
    const cartProducts = JSON.parse(localStorage.getItem('Cart_product')) || [];
    const totalQuantity = cartProducts.reduce((total, item) => total + item.Quantity, 0);

    const cartElement = document.querySelector('.js-update-cart');
    if (cartElement) {
        cartElement.innerHTML = totalQuantity; // Update the DOM with the total quantity
    }
}