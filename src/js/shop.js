import   "../scss/shop.scss"
import base from "./helpers/base" 
import  loader  from "./components/loader";
base();

const productsContainer =document.querySelector('.product-container');
let productCategory  =  (new URLSearchParams(location.search)).get("productCategory")
let cats = [ "women's clothing" , "men's clothing"  , "electronics" , "jewelery" , "all" ]; 


(async () => {
    if( !cats.includes(productCategory.trim()) ) location.href = "404.html";
    await fetch(`https://fakestoreapi.com/products` +   (productCategory == "all" ? "" : `/category/${productCategory}`))
    .then(res=>res.json())
    .then(json=>{
        json.forEach(product =>{
            productsContainer.innerHTML +=`
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
        })
    })


})().then(() => {
    loader.disableLoader();
});









