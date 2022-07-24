import   "../scss/shop.scss"
import base from "./helpers/base" 
import  loader  from "./components/loader";
base();
let searchValue  =  (new URLSearchParams(location.search)).get("value")
const productsContainer =document.querySelector('.product-container');
let hasElems = false ; 
(async () => {
    let searchField = document.getElementById("search-box");
    if(searchField) searchField.value = searchValue ;
    await fetch(`https://fakestoreapi.com/products`)
    .then(res=>res.json())
    .then(json=>{
        json.forEach(product =>{
            if(product.category.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) || product.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ){
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
                hasElems = true 


            }

        })
    })
    if(!hasElems) location.href = "404.html";
})().then(() => {
    loader.disableLoader();
})