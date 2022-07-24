import   "../scss/index.scss"
import base from "./helpers/base" 
import  loader  from "./components/loader";
base();


const productsContainer1 =document.querySelector('.product-container1');
const productsContainer2 =document.querySelector('.product-container2');
const productsContainer3 =document.querySelector('.product-container3');
const productsContainer4 =document.querySelector('.product-container4');

(async () => {
   
    await fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(products=>{
            let section = null
                products.forEach(
                    
                    product => {
                
             
                if (product.category== "men's clothing") {
                    section = productsContainer1
                
                }
                else if (product.category== "women's clothing" && product.id < 19){
                    section=productsContainer2
                }
                else if (product.category== "jewelery" ){
                    section=productsContainer3
                }
                else if (product.category== "electronics"&& product.id >10 ){
                    section=productsContainer4
                }
                
                if (section!= null) {
                
                    
                    section.innerHTML +=`
                    <div class="product-card"  >
                            <div class="product-image" id="${product.id}"   >
                                <img src="${product.image}" class="product-thumb" alt="" onclick="window.location.href='product.html?productId=${product.id}'">
                                <div class="card-btn">
                                <button class="card-c-btn" onclick="addToWhishList('${utf8_to_b64( JSON.stringify(product))}')">add to WhishList</button>
                                <button class=" card-c-btn" onclick="addToCart(${product.id})">add to Cart</button>
                                </div>
                            </div>
                            <div class="product-info">
                                <h2 class="product-brand">${product.category}</h2>
                                <p class="product-short-des">${product.title}</p>
                                <span class="price" >${product.price}</span>
                            </div>
                            
                       
                    </div>
                    `
    
                   
                    
                }
                section=null ;
                
                }
                
            );
            });

})().then(() => {
    loader.disableLoader()
})

   


