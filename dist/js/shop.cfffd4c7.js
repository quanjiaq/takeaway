(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shop"],{1148:function(t,e,c){"use strict";var n=c("a691"),r=c("1d80");t.exports=function(t){var e=String(r(this)),c="",a=n(t);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(c+=e);return c}},"14c9":function(t,e,c){},"275b":function(t,e,c){"use strict";c("a122")},"408a":function(t,e,c){var n=c("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},"5f6f":function(t,e,c){"use strict";c.r(e);c("b0c0");var n=c("7a23"),r=Object(n["H"])("data-v-a3594e2a");Object(n["u"])("data-v-a3594e2a");var a={class:"wrapper"},i={class:"search"},o=Object(n["i"])("div",{class:"search__content"},[Object(n["i"])("span",{class:"search__content__icon iconfont"},""),Object(n["i"])("input",{type:"text",class:"search__content__input",placeholder:"请输入商品名称搜索"})],-1);Object(n["s"])();var u=r((function(t,e,c,r,u,s){var l=Object(n["y"])("ShopInfo"),d=Object(n["y"])("Content"),b=Object(n["y"])("Cart");return Object(n["r"])(),Object(n["e"])(n["a"],null,[Object(n["i"])("div",a,[Object(n["i"])("div",i,[Object(n["i"])("div",{class:"search__back iconfont",onClick:e[1]||(e[1]=function(){return r.handleBack&&r.handleBack.apply(r,arguments)})},""),o]),Object(n["i"])(l,{item:r.item,hideBorder:!0,"v-show":r.item.imgUrl},null,8,["item","v-show"])]),Object(n["i"])(d,{shopName:r.item.name},null,8,["shopName"]),Object(n["i"])(b)],64)})),s=c("1da1"),l=(c("96cf"),c("6c02")),d=c("b775"),b=c("d7d0"),p=Object(n["H"])("data-v-14cce2fe");Object(n["u"])("data-v-14cce2fe");var O={class:"content"},j={class:"category"},_={class:"product"},f={class:"product__item__ditail"},v={class:"product__item__title"},m={class:"product__item__sales"},h={class:"product__item__price"},C=Object(n["i"])("span",{class:"price__yuan"},"¥",-1),k={class:"price__origin"},w={class:"product__number"},g={class:"product__number__num"};Object(n["s"])();var I=p((function(t,e,c,r,a,i){return Object(n["r"])(),Object(n["e"])("div",O,[Object(n["i"])("div",j,[Object(n["i"])("ul",null,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(r.CATEGORIES,(function(t){return Object(n["r"])(),Object(n["e"])("li",{key:t.tab,class:{category__item:!0,"category__item--active":r.currentTab==t.tab},onClick:function(){return r.handleCatgoryClick(t.tab)}},Object(n["A"])(t.name),11,["onClick"])})),128))])]),Object(n["i"])("div",_,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(r.contentList,(function(t,e){return Object(n["r"])(),Object(n["e"])("div",{class:"product__item",key:e},[Object(n["i"])("img",{class:"product__item__img",src:t.imgUrl},null,8,["src"]),Object(n["i"])("div",f,[Object(n["i"])("h4",v,Object(n["A"])(t.name),1),Object(n["i"])("p",m,"月售"+Object(n["A"])(t.sales)+"件",1),Object(n["i"])("p",h,[C,Object(n["h"])(Object(n["A"])(t.price)+" ",1),Object(n["i"])("span",k,"¥"+Object(n["A"])(t.oldPrice),1)])]),Object(n["i"])("div",w,[Object(n["i"])("span",{class:"product__number__minus",onClick:function(){r.deleteItemToCart(r.shopId,t._id,c.shopName)}},"-",8,["onClick"]),Object(n["i"])("span",g,Object(n["A"])(r.getProductCount(r.shopId,t._id,r.cartList)),1),Object(n["i"])("span",{class:"product__number__plus",onClick:function(){r.addItemToCart(r.shopId,t._id,t,c.shopName)}},"+",8,["onClick"])])])})),128))])])})),y=c("9983"),T=[{name:"全部商品",tab:"all"},{name:"秒杀",tab:"seckill"},{name:"新鲜水果",tab:"fruit"}],L=function(){var t=Object(n["w"])(T[0].tab),e=function(e){t.value=e};return{handleCatgoryClick:e,currentTab:t}},A=function(t,e){var c=Object(n["v"])({contentList:[]}),r=function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(d["a"])("/api/shop/".concat(e,"/products"),{tab:n.value});case 2:r=t.sent,0===r.data.errno&&r.data.data[0]&&(c.contentList=r.data.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Object(n["F"])((function(){r(t)}));var a=Object(n["B"])(c),i=a.contentList;return{contentList:i}},x=function(){var t=function(t,e,c){var n,r,a;return(null===c||void 0===c||null===(n=c[t])||void 0===n||null===(r=n.productList)||void 0===r||null===(a=r[e])||void 0===a?void 0:a.count)||0};return{getProductCount:t}},P={name:"Content",props:["shopName"],setup:function(){var t=Object(l["c"])(),e=t.params.id,c=L(),n=c.currentTab,r=c.handleCatgoryClick,a=A(n,e),i=a.contentList,o=Object(y["a"])(),u=o.cartList,s=o.addItemToCart,d=o.deleteItemToCart,b=x(),p=b.getProductCount;return{CATEGORIES:T,contentList:i,currentTab:n,handleCatgoryClick:r,shopId:e,cartList:u,addItemToCart:s,deleteItemToCart:d,getProductCount:p}}};c("275b");P.render=I,P.__scopeId="data-v-14cce2fe";var S=P,N=Object(n["H"])("data-v-28e603d8");Object(n["u"])("data-v-28e603d8");var B={class:"cart"},F={key:0,class:"product"},R={class:"product__header"},E=Object(n["i"])("span",{class:"iconfont"},"",-1),H=Object(n["h"])(" 清空购物车"),U={key:0,class:"product__item"},G={class:"product__item__ditail"},J={class:"product__item__title"},M={class:"product__item__price"},W=Object(n["i"])("span",{class:"price__yuan"},"¥",-1),q={class:"price__origin"},z={class:"product__number"},D={class:"product__number__num"},K={class:"check"},Q=Object(n["i"])("img",{src:"http://www.dell-lee.com/imgs/vue3/basket.png",class:"check__icon__img"},null,-1),V={class:"check__icon__tag"},X={class:"check__info"},Y=Object(n["h"])(" 总计："),Z={class:"check__info__price"},$=Object(n["i"])("div",{class:"check__btn"},"结算",-1);Object(n["s"])();var tt=N((function(t,e,c,r,a,i){var o=Object(n["y"])("router-link");return Object(n["r"])(),Object(n["e"])(n["a"],null,[Object(n["i"])(n["b"],{name:"mask"},{default:N((function(){return[r.showCart&&r.allCount>0?(Object(n["r"])(),Object(n["e"])("div",{key:0,class:"mask",onClick:e[1]||(e[1]=function(){return r.handleCartShow&&r.handleCartShow.apply(r,arguments)})})):Object(n["f"])("",!0)]})),_:1}),Object(n["i"])("div",B,[Object(n["i"])(n["b"],{name:"product"},{default:N((function(){return[r.showCart&&r.allCount>0?(Object(n["r"])(),Object(n["e"])("div",F,[Object(n["i"])("div",R,[Object(n["i"])("div",{class:"product__header__clearall",onClick:e[2]||(e[2]=function(){return r.cleanAllProducts&&r.cleanAllProducts.apply(r,arguments)})},[E,H])]),(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(r.productList,(function(t,e){return Object(n["r"])(),Object(n["e"])(n["a"],{key:e},[t.count>0?(Object(n["r"])(),Object(n["e"])("div",U,[Object(n["i"])("img",{class:"product__item__img",src:t.imgUrl},null,8,["src"]),Object(n["i"])("div",G,[Object(n["i"])("h4",J,Object(n["A"])(t.name),1),Object(n["i"])("p",M,[W,Object(n["h"])(Object(n["A"])(t.price)+" ",1),Object(n["i"])("span",q,"¥"+Object(n["A"])(t.oldPrice),1)])]),Object(n["i"])("div",z,[Object(n["i"])("span",{class:"product__number__minus",onClick:function(){r.deleteItemToCart(r.shopId,t._id)}},"-",8,["onClick"]),Object(n["i"])("span",D,Object(n["A"])(t.count||0),1),Object(n["i"])("span",{class:"product__number__plus",onClick:function(){r.addItemToCart(r.shopId,t._id,t)}},"+",8,["onClick"])])])):Object(n["f"])("",!0)],64)})),128))])):Object(n["f"])("",!0)]})),_:1}),Object(n["i"])("div",K,[Object(n["i"])("div",{class:"check__icon",onClick:e[3]||(e[3]=function(){return r.handleCartShow&&r.handleCartShow.apply(r,arguments)})},[Q,Object(n["i"])("div",V,Object(n["A"])(r.allCount),1)]),Object(n["i"])("div",X,[Y,Object(n["i"])("span",Z,"¥"+Object(n["A"])(r.allPrice),1)]),r.allCount?(Object(n["r"])(),Object(n["e"])(o,{key:0,to:{path:"/confirmOrder/".concat(r.shopId)}},{default:N((function(){return[$]})),_:1},8,["to"])):Object(n["f"])("",!0)])])],64)})),et=(c("b680"),c("5502")),ct=function(t){var e=Object(et["b"])(),c=Object(n["B"])(e.state),r=c.cartList,a=Object(n["c"])((function(){var e,c=null===(e=r.value[t])||void 0===e?void 0:e.productList,n=0;if(c)for(var a in c)n+=c[a].count;return n})),i=Object(n["c"])((function(){var e,c=null===(e=r.value[t])||void 0===e?void 0:e.productList,n=0;if(c)for(var a in c)n+=c[a].count*c[a].price;return n.toFixed(2)})),o=function(){e.commit("cleanAllProducts",{shopId:t})},u=Object(n["w"])(!1),s=function(){u.value=!u.value};return{allCount:a,allPrice:i,cleanAllProducts:o,showCart:u,handleCartShow:s}},nt={name:"Cart",setup:function(){var t=Object(l["c"])(),e=t.params.id,c=ct(e),n=c.allCount,r=c.allPrice,a=c.cleanAllProducts,i=c.showCart,o=c.handleCartShow,u=Object(y["a"])(),s=u.productList,d=u.addItemToCart,b=u.deleteItemToCart;return{allCount:n,allPrice:r,productList:s,shopId:e,addItemToCart:d,deleteItemToCart:b,cleanAllProducts:a,showCart:i,handleCartShow:o}}};c("e56d");nt.render=tt,nt.__scopeId="data-v-28e603d8";var rt=nt,at=function(){var t=Object(l["c"])(),e=Object(n["v"])({item:{}}),c=function(){var c=Object(s["a"])(regeneratorRuntime.mark((function c(){var n;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return c.next=2,Object(d["a"])("/api/shop/".concat(t.params.id));case 2:n=c.sent,0===n.data.errno&&n.data.data&&(e.item=n.data.data);case 4:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();c();var r=Object(n["B"])(e),a=r.item;return{item:a}},it=function(){var t=Object(l["d"])(),e=function(){t.push({name:"Home"})};return{handleBack:e}},ot={name:"Shop",components:{ShopInfo:b["a"],Content:S,Cart:rt},setup:function(){var t=it(),e=t.handleBack,c=at(),n=c.item;return{item:n,handleBack:e}}};c("704e");ot.render=u,ot.__scopeId="data-v-a3594e2a";e["default"]=ot},"704e":function(t,e,c){"use strict";c("9195")},9195:function(t,e,c){},9983:function(t,e,c){"use strict";c.d(e,"a",(function(){return a}));c("b680");var n=c("5502"),r=c("7a23"),a=function(t){var e=Object(n["b"])(),c=Object(r["B"])(e.state),a=c.cartList,i=function(t,c,n,r){e.commit("addItemToCart",{shopId:t,productId:c,productInfo:n,shopName:r})},o=function(t,c){e.commit("deleteItemToCart",{shopId:t,productId:c})},u=Object(r["c"])((function(){var e,c=(null===(e=a.value[t])||void 0===e?void 0:e.productList)||{},n={};for(var r in c){var i=c[r];i.count>0&&(n[r]=i)}return n})),s=Object(r["c"])((function(){var e,c=(null===(e=a.value[t])||void 0===e?void 0:e.shopName)||"";return c})),l=Object(r["c"])((function(){var e,c=null===(e=a.value[t])||void 0===e?void 0:e.productList,n=0;if(c)for(var r in c)n+=c[r].count*c[r].price;return n.toFixed(2)}));return{allPrice:l,shopName:s,productList:u,cartList:a,addItemToCart:i,deleteItemToCart:o}}},a122:function(t,e,c){},b680:function(t,e,c){"use strict";var n=c("23e7"),r=c("a691"),a=c("408a"),i=c("1148"),o=c("d039"),u=1..toFixed,s=Math.floor,l=function(t,e,c){return 0===e?c:e%2===1?l(t,e-1,c*t):l(t*t,e/2,c)},d=function(t){var e=0,c=t;while(c>=4096)e+=12,c/=4096;while(c>=2)e+=1,c/=2;return e},b=function(t,e,c){var n=-1,r=c;while(++n<6)r+=e*t[n],t[n]=r%1e7,r=s(r/1e7)},p=function(t,e){var c=6,n=0;while(--c>=0)n+=t[c],t[c]=s(n/e),n=n%e*1e7},O=function(t){var e=6,c="";while(--e>=0)if(""!==c||0===e||0!==t[e]){var n=String(t[e]);c=""===c?n:c+i.call("0",7-n.length)+n}return c},j=u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){u.call({})}));n({target:"Number",proto:!0,forced:j},{toFixed:function(t){var e,c,n,o,u=a(this),s=r(t),j=[0,0,0,0,0,0],_="",f="0";if(s<0||s>20)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(_="-",u=-u),u>1e-21)if(e=d(u*l(2,69,1))-69,c=e<0?u*l(2,-e,1):u/l(2,e,1),c*=4503599627370496,e=52-e,e>0){b(j,0,c),n=s;while(n>=7)b(j,1e7,0),n-=7;b(j,l(10,n,1),0),n=e-1;while(n>=23)p(j,1<<23),n-=23;p(j,1<<n),b(j,1,1),p(j,2),f=O(j)}else b(j,0,c),b(j,1<<-e,0),f=O(j)+i.call("0",s);return s>0?(o=f.length,f=_+(o<=s?"0."+i.call("0",s-o)+f:f.slice(0,o-s)+"."+f.slice(o-s))):f=_+f,f}})},e56d:function(t,e,c){"use strict";c("14c9")}}]);
//# sourceMappingURL=shop.cfffd4c7.js.map