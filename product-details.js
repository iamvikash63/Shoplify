import { products } from "./data/product.js";
import { formatcurrency } from "./util/money.js";
import { addToCart,Cart_products } from "./cart.js";

import { updateCartQuantityDisplay } from "./util/updateqnt.js";

updateCartQuantityDisplay();

function getProductDetailsById(productId) {
    return products.find((item) => item.id === productId);
}

// Get the productId from the URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('productId');

if (productId) {
    const product = getProductDetailsById(productId);
   


    if (product) {
        // Generate the HTML for the product details
        const detailsPageHtml = `
            <div class="item-container">
                <div class="items-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="item-btn">
                    <button class="js-add-to-cart">Add To Cart</button>
                    <button>Buy Now</button>
                </div>
            </div>
            <div class="item-details">
            <div class="items-bio">
                <h3>${product.name}</h3>
                <h3>₹${formatcurrency(product.priceCents*85.50)}</h3>
                 <div class="rating-div">
                <img src="images/ratings/rating-${product.rating.stars*10}.png" alt="">
                <p>${product.rating.count} Reviews</p>
            </div>
               <p>Free Delivery</p>
               </div>
                  <div class="product-description">
            <h3>Products Details</h3>
            <p>Name: ${product.name}</p>
             <p>Color: ${product.color}</p>
              <p>Size: ${product.Size}</p>
               <p>water Resistance: ${product.WaterResistant}</p>
               
        </div>
            </div>
         
        `;

        // Append the HTML to the container
        document.querySelector('.items-details-check-container').innerHTML = detailsPageHtml;
    } else {
        console.error("Product not found");
    }
} else {
    console.error("No productId found in the URL");
}

function UpdateCartqnt(){
    let Carqnt=0;
Cart_products.forEach((Cartitem)=>{
Carqnt+=Cartitem.Quantity;
});
console.log(Carqnt);
document.querySelector('.js-update-cart').innerHTML=Carqnt;
}
UpdateCartqnt();
document.querySelector('.js-add-to-cart').addEventListener('click',()=>{
addToCart(productId);
UpdateCartqnt();
});



    
