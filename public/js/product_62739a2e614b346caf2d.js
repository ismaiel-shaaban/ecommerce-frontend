(()=>{"use strict";var e,t={651:(e,t,i)=>{i.d(t,{Z:()=>n});var r=i(81),d=i.n(r),l=i(645),a=i.n(l)()(d());a.push([e.id,'#loader{width:100vw;position:fixed;z-index:9999999999;height:100vh;display:flex;justify-content:center;align-items:center;background-color:#eee}#loader .lds-roller{display:inline-block;position:relative;width:80px;height:80px}#loader .lds-roller div{animation:lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;transform-origin:40px 40px}#loader .lds-roller div:after{content:" ";display:block;position:absolute;width:7px;height:7px;border-radius:50%;background:gray;margin:-4px 0 0 -4px}#loader .lds-roller div:nth-child(1){animation-delay:-0.036s}#loader .lds-roller div:nth-child(1):after{top:63px;left:63px}#loader .lds-roller div:nth-child(2){animation-delay:-0.072s}#loader .lds-roller div:nth-child(2):after{top:68px;left:56px}#loader .lds-roller div:nth-child(3){animation-delay:-0.108s}#loader .lds-roller div:nth-child(3):after{top:71px;left:48px}#loader .lds-roller div:nth-child(4){animation-delay:-0.144s}#loader .lds-roller div:nth-child(4):after{top:72px;left:40px}#loader .lds-roller div:nth-child(5){animation-delay:-0.18s}#loader .lds-roller div:nth-child(5):after{top:71px;left:32px}#loader .lds-roller div:nth-child(6){animation-delay:-0.216s}#loader .lds-roller div:nth-child(6):after{top:68px;left:24px}#loader .lds-roller div:nth-child(7){animation-delay:-0.252s}#loader .lds-roller div:nth-child(7):after{top:63px;left:17px}#loader .lds-roller div:nth-child(8){animation-delay:-0.288s}#loader .lds-roller div:nth-child(8):after{top:56px;left:12px}@keyframes lds-roller{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.product-details{width:100%;padding:60px 10vw;display:flex;flex-wrap:wrap;margin-top:100px;justify-content:space-between}.product-image{width:50%;position:relative;background-size:cover}.product-image img{width:80%;object-fit:cover}.details{width:50%}.details .product-brand{text-transform:capitalize;font-size:30px}@media only screen and (max-width: 768px){.details .product-brand{font-size:24px}}.details .product-short-des{font-size:25px;line-height:30px;height:auto;margin:15px 0 30px}@media only screen and (max-width: 768px){.details .product-short-des{font-size:18px}}.product-price{font-weight:700;font-size:30px}@media only screen and (max-width: 768px){.product-price{font-size:24px}}.product-sub-heading{font-size:30px;text-transform:uppercase;margin:60px 0 10px;font-weight:300}@media only screen and (max-width: 768px){.product-sub-heading{font-size:24px}}.size-radio-btn{display:inline-block;width:80px;height:80px;text-align:center;font-size:20px;border:1px solid #383838;border-radius:50%;margin:10px;margin-left:0;line-height:80px;text-transform:uppercase;color:#383838;cursor:pointer}@media only screen and (max-width: 768px){.size-radio-btn{width:60px;height:60px;line-height:60px}}.size-radio-btn.check{background:#383838;color:#fff}.btn{width:100%;padding:20px;border-radius:5px;background:none;border:1px solid #383838;color:#383838;font-size:20px;cursor:pointer;margin:20px 0;text-transform:capitalize}.cart-btn{margin-right:2%;background:#383838;color:#fff}.detail-des{padding:0 10vw;text-transform:capitalize}.heading{font-size:30px;margin-bottom:30px}@media only screen and (max-width: 768px){.heading{font-size:24px}}.des{color:#383838;line-height:25px}@media only screen and (max-width: 850px){.product-details{flex-flow:column}.product-details .product-image{width:100%}.product-details .details{width:100%}}\n',""]);const n=a},287:(e,t,i)=>{var r=i(379),d=i.n(r),l=i(795),a=i.n(l),n=i(569),o=i.n(n),s=i(565),p=i.n(s),c=i(216),h=i.n(c),x=i(589),f=i.n(x),u=i(651),m={};m.styleTagTransform=f(),m.setAttributes=p(),m.insert=o().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=h(),d()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals;var b=i(903);(0,b.Z)();const g=document.querySelector(".product-details"),v=document.querySelector(".detail-des");(async()=>{let e=parseInt(new URLSearchParams(location.search).get("productId"));isNaN(e)&&(location.href="404.html"),await fetch(`https://fakestoreapi.com/products/${e}`).then((e=>e.json())).then((e=>{g.innerHTML=`\n                    <div class="product-image">\n                            <img src="${e.image}" alt=""> \n                    </div>\n                    <div class="details">\n                        <h2 class="product-brand">${e.category}</h2>\n                        <p class="product-short-des">${e.title}</p>\n                        <span class="product-price">${e.price}</span>\n                       \n                        <p class="product-sub-heading">select size</p>\n                \n                        <input type="radio" name="size" value="s" checked hidden id="s-size">\n                        <label for="s-size" class="size-radio-btn check">s</label>\n                        <input type="radio" name="size" value="m" hidden id="m-size">\n                        <label for="m-size" class="size-radio-btn">m</label>\n                        <input type="radio" name="size" value="l" hidden id="l-size">\n                        <label for="l-size" class="size-radio-btn">l</label>\n                        <input type="radio" name="size" value="xl" hidden id="xl-size">\n                        <label for="xl-size" class="size-radio-btn">xl</label>\n                        <input type="radio" name="size" value="xxl" hidden id="xxl-size">\n                        <label for="xxl-size" class="size-radio-btn">xxl</label>\n                        <button class="btn cart-btn"  onclick="addToCart(${e.id})" >add to cart</button>\n                        <button class="btn" onclick="addToWhishList('${utf8_to_b64(JSON.stringify(e))}')">add to wishlist</button>\n                    </div>\n                    `,v.innerHTML=`\n                    <h2 class="heading">description</h2>\n                    <p class="des">${e.description}</p>\n                    `;const t=document.querySelectorAll(".size-radio-btn");let i=0;t.forEach(((e,r)=>{e.addEventListener("click",(()=>{t[i].classList.remove("check"),e.classList.add("check"),i=r}))}))}))})().then((()=>{(()=>{let e=document.getElementById("loader");e&&(e.style.display="none")})()}))}},i={};function r(e){var d=i[e];if(void 0!==d)return d.exports;var l=i[e]={id:e,exports:{}};return t[e](l,l.exports,r),l.exports}r.m=t,e=[],r.O=(t,i,d,l)=>{if(!i){var a=1/0;for(p=0;p<e.length;p++){for(var[i,d,l]=e[p],n=!0,o=0;o<i.length;o++)(!1&l||a>=l)&&Object.keys(r.O).every((e=>r.O[e](i[o])))?i.splice(o--,1):(n=!1,l<a&&(a=l));if(n){e.splice(p--,1);var s=d();void 0!==s&&(t=s)}}return t}l=l||0;for(var p=e.length;p>0&&e[p-1][2]>l;p--)e[p]=e[p-1];e[p]=[i,d,l]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={18:0};r.O.j=t=>0===e[t];var t=(t,i)=>{var d,l,[a,n,o]=i,s=0;if(a.some((t=>0!==e[t]))){for(d in n)r.o(n,d)&&(r.m[d]=n[d]);if(o)var p=o(r)}for(t&&t(i);s<a.length;s++)l=a[s],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(p)},i=self.webpackChunkeco=self.webpackChunkeco||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),r.nc=void 0;var d=r.O(void 0,[825],(()=>r(287)));d=r.O(d)})();