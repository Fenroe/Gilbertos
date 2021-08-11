(()=>{"use strict";var e={359:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"body {\n    background-color: #F6EEC9;\n}",""]);const a=o},843:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const a=o},74:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(645),o=t.n(r),a=t(667),i=t.n(a),s=new URL(t(533),t.b),c=new URL(t(388),t.b),m=o()((function(e){return e[1]})),u=i()(s),d=i()(c);m.push([e.id,".home-title-container {\n    background-image: url("+u+");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    max-width: 115.5rem;\n    height: 60rem;\n    border-bottom: .5rem solid black;\n    border-top: .5rem solid black;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.home-heading-container {\n    height: 16rem;\n    background: hsla(0, 88%, 34%, 0.5);\n    box-sizing: border-box;\n    padding: 1rem;\n    border: 1px solid hsla(0, 88%, 34%, 0.5);\n    border-radius: 1rem;\n}\n\n.home-heading {\n    font-size: 10rem;\n    letter-spacing: .8rem;\n    color: white;\n    font-weight: bold;\n    text-align: center;\n}\n\n.home-subheading {\n    text-align: center;\n    font-size: 4rem;\n    color: white;\n    letter-spacing: .8rem;\n}\n\n.home-story-container {\n    width: 65rem;\n    height: 60rem;\n    background-color: white;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.home-story-heading {\n    font-size: 5rem;\n    font-weight: bold;\n    text-align: center;\n}\n\n.home-story-text {\n    font-size: 2rem;\n    text-align: center;\n    line-height: 1.5;\n    margin-top: 1rem;\n}\n\n.home-story-image {\n    width: 45rem;\n}\n\n.home-cta-container {\n    background-image: url("+d+");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    height: 60rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n}\n.home-cta {\n    width: 20rem;\n    height: 20rem;\n    border: .5rem solid hsl(49, 71%, 88%);\n    transform: rotate(45deg);\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    font-size: 3rem;\n}\n\n.home-cta:hover {\n    background-color: black;\n}\n\n.home-cta-link-container {\n    transform: rotate(-45deg);\n    width: 20rem;\n}\n\n.home-cta-link {\n    text-decoration: none;\n    color: hsl(49, 71%, 88%);\n    font-weight: bold;\n}\n\n.home-cta-link:hover {\n    color: hsl(49, 71%, 100%);\n}",""]);const l=m},477:(e,n,t)=>{t.d(n,{Z:()=>f});var r=t(645),o=t.n(r),a=t(667),i=t.n(a),s=new URL(t(658),t.b),c=new URL(t(575),t.b),m=new URL(t(257),t.b),u=o()((function(e){return e[1]})),d=i()(s),l=i()(c),h=i()(m);u.push([e.id,".menu-section-heading-container {\n    width: 100%;\n    height: 50rem;\n    background-size: cover;\n    background-attachment: fixed;\n    background-repeat: no-repeat;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.menu-section-heading {\n    font-size: 10rem;\n    color: hsl(49, 71%, 88%);\n    background-color:hsla(0, 0%, 0%, 0.5);\n}\n\n.starters-heading {\n    background-image: url("+d+");\n}\n\n.mains-heading {\n    background-image: url("+l+");\n}\n\n.desserts-heading {\n    background-image: url("+h+");\n}\n\n.menu-items-container {\n    width: 70rem;\n    margin: 0 auto;\n    background-color: white;\n    display: grid;\n    grid-template-columns: repeat(3, 20rem);\n    justify-content: space-around;\n    align-items: space-around;\n}\n\n.menu-item {\n    width: 20rem;\n    text-align: center;\n}\n\n.menu-item h2 {\n    font-size: 3rem;\n    font-weight: bold;\n    margin: 2rem 0;\n}\n\n.menu-item p {\n    font-size: 2rem;\n}",""]);const f=u},683:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,".site-nav {\n    height: 3rem;\n    background-color: black;\n    position: fixed;\n    width: 100%;\n}\n\n.site-nav-menu {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.site-nav-menu-item {\n    font-size: 3rem;\n    list-style: none;\n}\n\n.site-nav-menu-item a {\n    text-decoration: none;\n    color: hsl(49, 71%, 88%);\n}\n\n.site-nav-menu-item a:hover {\n    color: hsl(49, 71%, 100%);\n}",""]);const a=o},523:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(645),o=t.n(r),a=t(843),i=t(359),s=t(683),c=t(74),m=t(477),u=o()((function(e){return e[1]}));u.i(a.Z),u.i(i.Z),u.i(s.Z),u.i(c.Z),u.i(m.Z),u.push([e.id,"\n\n",""]);const d=u},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],m=r.base?c[0]+r.base:c[0],u=a[m]||0,d="".concat(m," ").concat(u);a[m]=u+1;var l=t(d),h={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(n[l].references++,n[l].updater(h)):n.push({identifier:d,updater:o(h,r),references:1}),i.push(d)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),m=0;m<a.length;m++){var u=t(a[m]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},388:(e,n,t)=>{e.exports=t.p+"940e57f876c9b16dd508.jpg"},695:(e,n,t)=>{e.exports=t.p+"4e412b57bd5ab731db91.jpg"},533:(e,n,t)=>{e.exports=t.p+"2809d91d8995e8e57946.png"},257:(e,n,t)=>{e.exports=t.p+"8381eebd397c9e9cb63d.jpg"},575:(e,n,t)=>{e.exports=t.p+"e04262eebb0b5fe7b93b.jpg"},658:(e,n,t)=>{e.exports=t.p+"2ebdf0a2c8a8840671b7.jpeg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,(()=>{const e=(e="",n="",t=[])=>({name:e,tag:n,elements:t}),n=e("home-heading","h1");n.text="Giliberto's";const r=e("home-subheading","h2");r.text="Slice of Italy";const o=e("home-heading-container","div",[n,r]),a=e("home-title-container","section",[o]),i=e("home-story-heading","h2");i.text="Authentic Italian Cuisine";const s=e("home-story-heading-container","div",[i]);var c=t(695);const m=e("home-story-image","img");m.source=c,m.alt="Test";const u=e("home-story-image-container","div",[m]),d=e("home-story-text","p");d.text="Lorem ipsum dolor, sit amet consectetur adipisicing \nelit. Libero mollitia fuga distinctio sint ipsa placeat pariatur reiciendis \naspernatur sunt quibusdam adipisci dolorem voluptatem, quis, tenetur quam \nprovident iusto deserunt? Quas?";const l=e("home-story-text-container","div",[d]),h=e("home-story-container","section",[s,u,l]),f=e("home-cta-link","a");f.href="#";const g=e("home-cta-link-container","div",[f]),p=e("home-cta","div",[g]),b=e("home-cta-container","section",[p]),v="Lorem ipsum dolor sit amet, consectetur \nadipiscing elit. Vestibulum vitae tincidunt nibh. Aliquam viverra accumsan.",x=[{name:"Calamari",info:v},{name:"Caprese Salad",info:v},{name:"Focaccia col Formaggio",info:v},{name:"Fresh Mozzarella",info:v},{name:"Roman Fried Artichokes",info:v}],y=[{name:"Cacio e Pepe",info:v},{name:"Carbonara",info:v},{name:"Florentine Steak",info:v},{name:"Mushroom Risotto",info:v},{name:"Shrimp Scampi",info:v},{name:"Swordfish",info:v}],k=[{name:"Chocolate and Pistachio Biscotti",info:v},{name:"Panna Cotta",info:v},{name:"Tiramusi",info:v}],w=e("menu-item-info","p"),E=e("menu-item-name","h2"),S=e("site-nav-link","a",[]);S.href="#";const C=(e,n)=>{"Home"==n&&(e.target="home",console.log("home")),"Menu"!=n&&"See Our Menu"!=n||(e.target="menu",console.log("menu")),"Contact"!=n&&"Get In Touch"!=n||(e.target="contact",console.log("contact"))},T=(e,n,t="")=>{const r=(e=>{let n=document.createElement(e.tag);switch(n.classList.add(e.name),e.tag){case"a":n.innerHTML=e.text,n.setAttribute("href",e.href),n.setAttribute("data-target",e.target),console.log(n);break;case"h1":case"h2":case"h3":case"p":n.innerHTML=e.text;break;case"img":n.setAttribute("src",e.source),n.setAttribute("alt",e.alt)}return n})(e);e.elements.forEach((e=>{0===((e,n,t)=>{switch(e.name){case"menu-item":((e,n,t)=>{if("starters"===t)x.forEach((r=>{E.text=r.name,w.text=r.info,T(e,n,t)}));else if("mains"===t)y.forEach((r=>{E.text=r.name,w.text=r.info,T(e,n,t)}));else{if("desserts"!==t)return;k.forEach((r=>{E.text=r.name,w.text=r.info,T(e,n,t)}))}})(e,n,t);break;case"site-nav-menu-item":((e,n,t)=>{["Home","Menu","Contact"].forEach((r=>{S.text=r,C(S,r),console.table(S),T(e,n,t)}))})(e,n,t);break;case"home-cta":((e,n,t)=>{["See Our Menu","Get In Touch"].forEach((r=>{f.text=r,C(f,r),T(e,n,t)}))})(e,n,t);break;default:return 0}})(e,r,t)&&T(e,r,t)}));const o=(e=>{switch(e){case"starters":case"mains":case"desserts":return(e=>{let n={marker:e};return n.menuSectionExtraClass=`menu-${e}`,n.menuSectionHeadingContainerExtraClass=`${e}-heading`,n.menuSectionHeadingText=`${e.charAt(0).toUpperCase()+e.slice(1)}`,n})(e);default:return 0}})(t);((e,n,t)=>{switch(t.marker){case"starters":case"mains":case"desserts":((e,n,t)=>{switch(n.name){case"menu-section":t.classList.add(e.menuSectionExtraClass);break;case"menu-section-heading-container":t.classList.add(e.menuSectionHeadingContainerExtraClass);break;case"menu-section-heading":t.innerHTML=e.menuSectionHeadingText}})(t,e,n)}})(e,r,o),n.append(r)},L=document.getElementById("header"),M=document.getElementById("content"),j=e("menu-section-heading","h1");j.text="Placeholder";const A=e("menu-section-heading-container","div",[j]),q=e("menu-item-info-container","div",[w]),z=e("menu-item-name-container","div",[E]),Z=e("menu-item","div",[z,q]),H=e("menu-items-container","div",[Z]),I=e("menu-section","section",[A,H]),R=["starters","mains","desserts"],F=e=>{e.addEventListener("click",(()=>{M.innerHTML="","home"===e.dataset.target&&P(),"menu"===e.dataset.target&&R.forEach((e=>{T(I,M,e)}))}))},P=()=>{[a,h,b].forEach((e=>{T(e,M)})),M.querySelectorAll("a").forEach((e=>{F(e)}))},U=e("site-nav-menu-item","li",[S]),$=e("site-nav-menu","ul",[U]),O=e("site-nav","nav",[$]);var N=t(379),B=t.n(N),_=t(795),G=t.n(_),Q=t(569),D=t.n(Q),J=t(565),V=t.n(J),K=t(216),W=t.n(K),X=t(589),Y=t.n(X),ee=t(523),ne={};ne.styleTagTransform=Y(),ne.setAttributes=V(),ne.insert=D().bind(null,"head"),ne.domAPI=G(),ne.insertStyleElement=W(),B()(ee.Z,ne),ee.Z&&ee.Z.locals&&ee.Z.locals,T(O,L),L.querySelectorAll("a").forEach((e=>{F(e)})),P()})()})();