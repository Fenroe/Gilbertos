(()=>{"use strict";var e={705:(e,n,t)=>{t.d(n,{Z:()=>f});var r=t(645),o=t.n(r),a=t(128),i=t(667),c=t.n(i),s=new URL(t(337),t.b),l=new URL(t(514),t.b),d=o()((function(e){return e[1]}));d.i(a.Z);var u=c()(s),m=c()(l);d.push([e.id,"body {\n    background-color: #F6EEC9;\n}\n\n.home-title-container {\n    background-image: url("+u+");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    max-width: 115.5rem;\n    height: 50rem;\n    border-bottom: .5rem solid black;\n    border-top: .5rem solid black;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.home-heading-container {\n    background: #A20A0A;\n}\n\n.home-heading {\n    font-size: 10rem;\n    letter-spacing: .8rem;\n    color: white;\n    font-weight: bold;\n    text-align: center;\n}\n\n.home-subheading {\n    text-align: center;\n    font-size: 4rem;\n    color: white;\n    letter-spacing: .8rem;\n}\n\n.home-story-container {\n    width: 65rem;\n    height: 60rem;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.home-story-heading {\n    font-size: 5rem;\n    font-weight: bold;\n    text-align: center;\n}\n\n.home-story-text {\n    font-size: 2rem;\n    text-align: center;\n    line-height: 1.5;\n    margin-top: 1rem;\n}\n\n.home-story-image {\n    width: 45rem;\n}\n\n.home-cta-container {\n    background-image: url("+m+");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    height: 60rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n}\n.home-cta {\n    width: 20rem;\n    height: 20rem;\n    border: .5rem solid #F6EEC9;\n    transform: rotate(45deg);\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    font-size: 3rem;\n}\n\n.home-cta-link {\n    transform: rotate(-45deg);\n    width: 20rem;\n}\n\n.home-cta-link a {\n    text-decoration: none;\n    color: #F6EEC9;\n    font-weight: bold;\n}",""]);const f=d},128:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const a=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var m=t(u),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==m?(n[m].references++,n[m].updater(f)):n.push({identifier:u,updater:o(f,r),references:1}),i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},514:(e,n,t)=>{e.exports=t.p+"940e57f876c9b16dd508.jpg"},337:(e,n,t)=>{e.exports=t.p+"be92fbb6cb9b04656d9b.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,(()=>{const e=(e,n,t)=>{let r=document.createElement(e),o=document.createTextNode(n);return r.append(o),r.classList.add(t),r},n=e=>{let n=document.createElement("div");return n.classList.add(e),n},r=e=>{let n=document.createElement("section");return n.classList.add(e),n},o="home-title-container",a={name:"home-heading-container",elementOneName:"home-heading",elementOneTag:"h1",elementOneText:"Gilberto's",elementTwoName:"home-subheading",elementTwoTag:"h2",elementTwoText:"Slice of Italy"};var i=t(379),c=t.n(i),s=t(795),l=t.n(s),d=t(569),u=t.n(d),m=t(565),f=t.n(m),p=t(216),h=t.n(p),g=t(589),b=t.n(g),v=t(705),y={};y.styleTagTransform=b(),y.setAttributes=f(),y.insert=u().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=h(),c()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals;const x=document.getElementById("content");let w=r(o);x.append(w);let T=n(a.name);w.append(T);let k=e(a.elementOneTag,a.elementOneText,a.elementOneName);T.append(k);let E=e(a.elementTwoTag,a.elementTwoText,a.elementTwoName);T.append(E)})()})();