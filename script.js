import { products } from "./data/product.js";

import { formatcurrency } from "./util/money.js";
import { updateCartQuantityDisplay } from "./util/updateqnt.js";

updateCartQuantityDisplay();
const bannerImage=[
    {
    Image:"header banner.jpg"
},
{
     Image:"header banner 2.jpg"
},
{
    Image:"header banner 3.jpg"
},
{
    Image:"header banner 4.jpg"
}

];

const banner_img=document.querySelector('.header-banner-img');
let index=0;
function updateTest(){
    const Image=bannerImage[index];
    banner_img.src=Image.Image;

    index ++;
    if(index===bannerImage.length){
        index=0;
    }

setTimeout(()=>{
    updateTest();
},3000);
}
updateTest();

//adding product to html 
let ProductHtml='';
products.forEach((items)=>{
ProductHtml+=`<div class="product" data-items-id="${items.id}">
                <div class="product-img-div">
                <img class="product-img" src="${items.image}" alt="">
                </div>
            <h3>${items.name}</h3>
            <p>₹${formatcurrency(items.priceCents*85.50)}</p>
            <p>free Delivery</p>
            <div class="rating-div">
                <img src="images/ratings/rating-${items.rating.stars*10}.png" alt="">
                <p>${items.rating.count} Reviews</p>
            </div>
            </div>`;
   
});

document.querySelector('.product-sec').innerHTML=ProductHtml;


const product_details=document.querySelectorAll('.product');

product_details.forEach((CheckItem) => {
    CheckItem.addEventListener('click', (evt) => {
        const ProductId = CheckItem.dataset.itemsId;
        // Navigate to the product details page with the ProductId as a query parameter
        window.location.href = `product-details.html?productId=${ProductId}`;
    });
});



