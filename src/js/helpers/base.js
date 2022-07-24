import createNav from "../components/nav"
import createFooter from "../components/footer"
export default () =>{
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }; 
    
    
    
    window.utf8_to_b64 = ( str ) =>  window.btoa(unescape(encodeURIComponent( str )));
    window.b64_to_utf8 = ( str ) =>  decodeURIComponent(escape(window.atob( str )));


    window.getCart = async () => {
       let cProduct ;
        return (await Promise.all( (JSON.parse(localStorage.getItem("cart")) ?? []).map( async (productInfo) => {
            cProduct =  (await fetch(`https://fakestoreapi.com/products/${productInfo.productId}`).then(res => res.json()))
              cProduct.quantity = productInfo.quantity
             

             return cProduct; 
        })));
    }

    window.getLocalCart = () => (JSON.parse(localStorage.getItem("cart")) ?? [])

    window.getWhishlist =   () => {
           return (JSON.parse(localStorage.getItem("whishList")) ?? []); 
    }

    window.addToCart = (productId) => {
        let cart = JSON.parse(localStorage.getItem("cart")) ?? [];
        let added = false ; 
        cart = cart.map((productInfo) => {
            if (productInfo.productId == productId){
                added = true ;
                productInfo.quantity = (productInfo.quantity ?? 0 ) + 1 ;
                
            }
            return (productInfo)
        })
        if(!added) {
        
           
            cart.push(({

                productId : productId ,
                quantity : 1 
            }))
           
        }
        let cartCounter = document.querySelector('#cart-counter');
        if(cartCounter) cartCounter.innerHTML = cart.length
        localStorage.setItem('cart' , JSON.stringify(cart) )
    }


    window.removeFromCart = (productId) => {
        let cart = JSON.parse(localStorage.getItem("cart")) ?? []; 
        cart = cart.filter((productInfo) => { 
            return (productInfo.productId != productId)
        });
        let cartCounter = document.querySelector('#cart-counter');
        if(cartCounter) cartCounter.innerHTML = cart.length
        localStorage.setItem('cart' , JSON.stringify(cart) )
    }

    window.decProductQuantity = (productId) => {
        let cart = JSON.parse(localStorage.getItem("cart")) ?? [];
        cart = cart.map((productInfo) => {
            if (productInfo.productId == productId){
                if (productInfo.quantity>0) {
                    productInfo.quantity =(productInfo.quantity - 1 ) 
                    
                }
                // productInfo.quantity =  ((productInfo.quantity ?? 0 ) > 0 ) ?  (productInfo.quantity - 1 ) :   0 ;
            }
            return (productInfo)
        })
    
        localStorage.setItem('cart' , JSON.stringify(cart) )
    }



    window.addToWhishList = (product) => {
        product = JSON.parse(window.b64_to_utf8(product));
        let whishList = JSON.parse(localStorage.getItem("whishList")) ?? [];
        let added = false ; 
        whishList = whishList.map((sProduct) => {
            if (sProduct.id == product.id){
                added = true ;
            }
            return sProduct;
        })
        if(!added) {
            whishList.push( product)
        }
        localStorage.setItem('whishList' , JSON.stringify(whishList) )
    }


    window.removeFromWhishList = (productId) => {
        let whishList = JSON.parse(localStorage.getItem("whishList")) ?? []; 
        whishList = whishList.filter((product) => {
            return (product.id != productId)
        })
        localStorage.setItem('whishList' , JSON.stringify(whishList) )
    }

    createNav();
    createFooter();

     let cartCounter = document.querySelector('#cart-counter')
        if(cartCounter) cartCounter.innerHTML = getLocalCart().length;


    try{
            let page  = document.getElementById(window.location.pathname.split('/').pop().split(".")[0] + "-page" )
            if(page) page.classList.add("active")
    }catch(er){}
    
}