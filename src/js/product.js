
import   "../scss/product.scss"
import base from "./helpers/base" 
import  loader  from "./components/loader";
base();


const productContainer1 = document.querySelector('.product-details');
const productContainer2 = document.querySelector('.detail-des');
(async () => {
    let productId  =  parseInt((new URLSearchParams(location.search)).get("productId"))
    if (isNaN(productId)) location.href = "404.html";
    await fetch(`https://fakestoreapi.com/products/${productId}`)
                .then(res=>res.json())
                .then(product=>{
                    productContainer1.innerHTML = `
                    <div class="product-image">
                            <img src="${product.image}" alt=""> 
                    </div>
                    <div class="details">
                        <h2 class="product-brand">${product.category}</h2>
                        <p class="product-short-des">${product.title}</p>
                        <span class="product-price">${product.price}</span>
                       
                        <p class="product-sub-heading">select size</p>
                
                        <input type="radio" name="size" value="s" checked hidden id="s-size">
                        <label for="s-size" class="size-radio-btn check">s</label>
                        <input type="radio" name="size" value="m" hidden id="m-size">
                        <label for="m-size" class="size-radio-btn">m</label>
                        <input type="radio" name="size" value="l" hidden id="l-size">
                        <label for="l-size" class="size-radio-btn">l</label>
                        <input type="radio" name="size" value="xl" hidden id="xl-size">
                        <label for="xl-size" class="size-radio-btn">xl</label>
                        <input type="radio" name="size" value="xxl" hidden id="xxl-size">
                        <label for="xxl-size" class="size-radio-btn">xxl</label>
                        <button class="btn cart-btn"  onclick="addToCart(${product.id})" >add to cart</button>
                        <button class="btn" onclick="addToWhishList('${utf8_to_b64( JSON.stringify( product) )}')">add to wishlist</button>
                    </div>
                    `
                    productContainer2.innerHTML=`
                    <h2 class="heading">description</h2>
                    <p class="des">${product.description}</p>
                    `
                    const sizeBtns = document.querySelectorAll('.size-radio-btn'); 
                    let checkedBtn = 0; 
    
    
                    sizeBtns.forEach((item, i) => { 
                    item.addEventListener('click', () => {
                    sizeBtns[checkedBtn].classList.remove('check'); 
                    item.classList.add('check'); 
                    checkedBtn = i; 
                    })
                    })
    
                })
    

})().then(() =>{

    loader.disableLoader();
})





