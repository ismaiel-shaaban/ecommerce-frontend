import   "../scss/cart.scss"
import base from "./helpers/base" 
import  loader  from "./components/loader";

base();


let allProducts = [] ; 
let total = 0 ; 
window.deleteItemFromCartView = function ( id ) {
    let product = document.getElementById("product-" + id);
    if(product) {
        window.x=(JSON.parse(localStorage.getItem("cart"))).length
        window.cartCounter = document.querySelector('#cart-counter')
        cartCounter.innerHTML=x  
        
        product.remove();
        removeFromCart(id);
    }

}

window.updateProductRow = ( id , op = 'inc'  ) => {
    let ops = ['inc' , 'dec' , 'del']
    if(!ops.includes(op)) return;


    if(op != 'del'){
        total = 0 ; 
        allProducts =  allProducts.map((product) => {
        
        if( product.id == id ){
            if ( op == 'inc') {
                product.quantity=product.quantity + 1 
                
                
            }
            else{
                if(product.quantity>0)product.quantity=product.quantity - 1
                else product.quantity =0
            }
                // product.quantity =  op == 'inc' ?  product.quantity + 1  : product.quantity - 1 ;
                document.getElementById(`product-${id}-quantity`).innerHTML = product.quantity ;
                document.getElementById(`product-${id}-total`).innerHTML = (product.quantity * product.price) ; 
                
        }
            total +=  (product.quantity * product.price);
        return product ;
        
        });
    }else {
        let delP = 0 ; 
        allProducts = allProducts.filter( (product) => {
            if(product.id == id ){
                delP = product;
                return false;
            }
            return true ; 
        } )
        total -= (delP.quantity * delP.price)
    }
    
    Array.from(document.getElementsByClassName('total-price')).forEach(( ele ) => { ele.innerHTML = total } );
}

window.incQa = (id) => {
 
    addToCart(id);
    updateProductRow(id , 'inc')

}

window.decQa = (id) => {
    decProductQuantity(id);
    updateProductRow(id , 'dec')
}

window.delProd = (id) => {
    updateProductRow(id , 'del');
    deleteItemFromCartView(id);

}


const cartcontent = document.querySelector('.cart-details');
(async () => {
    await window.getCart().then(  (products) => {
        allProducts = products ;        
        products.forEach((product) => {
                            total +=  (product.quantity * product.price);
                            cartcontent.innerHTML+=`
                            <tr id="product-${product.id}">
                                <td onclick="delProd(${product.id})" style="font-size: 35px;cursor: pointer;"> x</td>
                                <td><img src="${product.image}" alt="" onclick="window.location.href='product.html?productId=${product.id}'" style="cursor:pointer" ></td>
                                <td>${product.title}</td>
                                <td>${product.price}</td>
                                <td  >
                                    <span  onclick="incQa(${product.id})"  style="font-size: 22px;
                                    cursor: pointer;
                                    padding: 5px;
                                    "> + </span> 
                                    <span id="product-${product.id}-quantity"  style="font-size: 18px;">${product.quantity}</span> 
                                    <span  onclick="decQa(${product.id})"  style="font-size: 25px;
                                    cursor: pointer;
                                    padding: 5px;
                                    "> - </span>
                                 </td>
                                <td id="product-${product.id}-total">${(product.quantity * product.price).toFixed(3)} </td>
                            </tr>
                    `;
                    
        
                            
        });
        total = total.toFixed(3)
        
        Array.from(document.getElementsByClassName('total-price')).forEach(( ele ) => { ele.innerHTML = total } );
       
        
    }) 



})().then(() =>{
    loader.disableLoader();
});















