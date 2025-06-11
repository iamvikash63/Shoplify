export let Cart_products= JSON.parse(localStorage.getItem('Cart_product'));
if(!Cart_products){
Cart_products=[
   
]
}


export  function addToCart(ProductId){
let machingProduct;
Cart_products.forEach((Cartitems)=>{
    if(ProductId===Cartitems.Product_id){
        machingProduct=Cartitems;
    }
});
if(machingProduct){
    machingProduct.Quantity+=1;
}else{
    Cart_products.push({
        Product_id: ProductId,
        Quantity: 1

    });
}
console.log(machingProduct);
SaveToStorage();
}

function SaveToStorage(){
    localStorage.setItem('Cart_product',JSON.stringify(Cart_products));
}

export function RemoveCart(productId){
const newCart=[];
Cart_products.forEach((RemoveItem)=>{
    if(RemoveItem.Product_id!==productId){
        newCart.push(RemoveItem);
    }
});
Cart_products=newCart;
SaveToStorage();
}