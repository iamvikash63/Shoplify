import { Cart_products,RemoveCart } from "../cart.js";
import { getproduct} from "../data/product.js";
import { updateCartQuantityDisplay } from "../util/updateqnt.js";
import { formatcurrency } from "../util/money.js";
updateCartQuantityDisplay();

function renderOrderSummary(){

    let TotalPrice=0;
let paymentItemQnt=0;
let CartHtml='';
Cart_products.forEach(element => {
    const Product_id=element.Product_id;
    const machingItem=getproduct(Product_id);
    
   const itemprice=formatcurrency(machingItem.priceCents*85.50);
   machingItem.priceCents=itemprice*element.Quantity;

   paymentItemQnt+=element.Quantity;

   TotalPrice+=machingItem.priceCents;
   

 
 
   CartHtml+= `  <div class="product-checkout" >
            <div class="dv-product-img"><img src=${machingItem.image} alt=""></div>
            <div class="dv-product-detail">
             <div class="dv-about-product">
             <h3>${machingItem.name}</h3>
             <p>₹${machingItem.priceCents}</p>
             <p class="cart-qntity">Quantity ${element.Quantity}</p>
             <p class="checkout-remove" data-product-id="${machingItem.id}"> X Remove</p>
         </div>
    <div class="dv-edit"><p class="checkout-edit">Edit</p></div>
       </div>
    </div>`;
    


});
if(CartHtml){


document.querySelector('.checkout-page').innerHTML=CartHtml;
}else{
    document.querySelector('.checkout-page').innerHTML=`<div class="product-checkout" >
           <h2> Your cart is empty </h2>
           <a class="empty-cart-a"href="/index.html">Shop Now</a>
    </div>`;
}
document.querySelector('.Price-calculate').innerHTML=`  <h3> Products ( ${paymentItemQnt} items )</h3> <div 
class="total-price"><p>Total Product Price</p> <p>₹${TotalPrice}</p></div>
<div class="total-price"><h4>GST Included: 18%</h4> <p>₹${(TotalPrice*18)/100}</p></div>
            <div class="total-price"><h4>Total Order</h4> <p>₹${TotalPrice}</p></div>`;


const Removefromcart=document.querySelectorAll('.checkout-remove');
Removefromcart.forEach((removeitem)=>{
    removeitem.addEventListener('click',()=>{
        const productId=removeitem.dataset.productId;
       RemoveCart(productId);
       renderOrderSummary();
    })
})

}

renderOrderSummary();




