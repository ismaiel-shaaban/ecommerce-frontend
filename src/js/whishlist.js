import   "../scss/whishlist.scss"
import base from "./helpers/base" 
import  loader  from "./components/loader";

base();
window.deleteItemFromWishlistView = function ( id ) {
    let product = document.getElementById("product-" + id);
    if(product) {
        product.remove();
        removeFromWhishList(id);
    }

}


const cartcontent = document.querySelector('.cart-details');
(async () => {
     window.getWhishlist().forEach((product) => {
                       
                            cartcontent.innerHTML+=`
                            <tr id="product-${product.id}">
                                <td onclick="deleteItemFromWishlistView(${product.id})"  style="font-size: 35px;cursor: pointer;">x</td>
                                <td><img src="${product.image}" alt="" onclick="window.location.href='product.html?productId=${product.id}'" style="cursor:pointer" ></td>
                                <td>${product.title}</td>
                                <td>${product.price}</td>
                            </tr>
                    `;
                            
        });
    

})().then(() =>{
    loader.disableLoader();
});















