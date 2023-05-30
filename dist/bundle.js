(()=>{var n={426:(n,r,e)=>{"use strict";e.d(r,{Z:()=>s});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,"* {\r\n  font-family: 'Lato', sans-serif;\r\n  box-sizing: border-box;\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  height: 83px;\r\n  padding-top: 15px;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  background: rgb(241, 241, 232);\r\n}\r\n\r\n.logo {\r\n  width: 10%;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 2rem;\r\n}\r\n\r\ni {\r\n  width: auto;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.card-text {\r\n  text-align: end;\r\n}\r\n\r\n.card {\r\n  padding: 0;\r\n  width: 18rem;\r\n}\r\n\r\n.description-buttons {\r\n  display: flex;\r\n  text-align: end;\r\n  justify-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.card-row {\r\n  column-gap: 20px;\r\n  justify-content: center;\r\n}\r\n\r\nfooter {\r\n  position: relative;\r\n  bottom: 0;\r\n  width: 95%;\r\n  text-align: center;\r\n  border: 1px solid grey;\r\n  border-radius: 5px;\r\n  margin: auto;\r\n  margin-top: 20px;\r\n  margin-bottom: 5px;\r\n  background: gray;\r\n  color: #fff;\r\n}\r\n\r\n.popup-container {\r\n  width: 50%;\r\n  background-color: whitesmoke;\r\n  text-align: center;\r\n  position: absolute;\r\n  z-index: 1000;\r\n}\r\n\r\n.popup-container h2 {\r\n  text-align: center;\r\n}\r\n\r\n.popup-container .closepopup {\r\n  position: absolute;\r\n  font-size: 5rem;\r\n  right: 0;\r\n}\r\n\r\n.popup-container img {\r\n  width: auto;\r\n  margin: 0 auto;\r\n  max-width: 350px;\r\n  height: 350px;\r\n}\r\n\r\n.popup-container input,\r\n.popup-container textarea {\r\n  width: 100%;\r\n}\r\n\r\n.popup-container form {\r\n  margin: 0 auto;\r\n  width: 50%;\r\n}\r\n",""]);const s=i},645:n=>{"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},81:n=>{"use strict";n.exports=function(n){return n[1]}},379:n=>{"use strict";var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],u=t.base?c[0]+t.base:c[0],l=a[u]||0,p="".concat(u," ").concat(l);a[u]=l+1;var d=e(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)r[d].references++,r[d].updater(m);else{var f=o(m,t);t.byIndex=s,r.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);r[s].references--}for(var c=t(n,o),u=0;u<a.length;u++){var l=e(a[u]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=c}}},569:n=>{"use strict";var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{"use strict";n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{"use strict";n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{"use strict";n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},833:()=>{(()=>{const n=document.querySelector(".popupContainer");fetch("https://api.tvmaze.com/shows/1/seasons").then((n=>n.json())).then((r=>{r.forEach((r=>{const e=document.createElement("div");e.className="popup-container",e.innerHTML=`\n          <div class="seriePop">\n            <button class='closepopup'>&times;</button>    \n            <div class="seriePop-head">\n              <h2>${r.name}</h2> \n              <img class="serie-img" src="${r.image.medium}" alt="serie image">        \n              <ul class="serieInfo">\n                <li>Language: ${r.language}</li>\n                <li>Premiered: ${r.premiered}</li>\n                <li>Summary: ${r.summary}</li>           \n              </ul>\n            </div>\n            <div class="formPop">\n              <h2>Add a Comment</h2>\n              <form>\n                <input class='username' \n                  type="text" \n                  name="username" \n                  placeholder="Your Name" required>\n                <textarea class='comment' \n                  id="Comment" placeholder="Your insights" \n                  maxlength="600" \n                  name="message" required></textarea>\n                <button class="commentButton" data-index="${r.id}">comment</button>\n              </form>\n            </div>      \n          </div>`,n.appendChild(e),e.querySelector(".closepopup").addEventListener("click",(()=>{n.removeChild(e)}))}))})).catch((n=>{console.error("Error fetching data:",n)}))})()}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return n[t](a,a.exports,e),a.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0,(()=>{"use strict";var n=e(379),r=e.n(n),t=e(795),o=e.n(t),a=e(569),i=e.n(a),s=e(565),c=e.n(s),u=e(216),l=e.n(u),p=e(589),d=e.n(p),m=e(426),f={};f.styleTagTransform=d(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),r()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=document.getElementById("container");[{serie:"https://shorturl.at/coBWZ",name:"lorem"},{serie:"https://shorturl.at/coBWZ",name:"lorem"},{serie:"https://shorturl.at/coBWZ",name:"lorem"},{serie:"https://shorturl.at/coBWZ",name:"lorem"}].forEach((n=>{h.innerHTML+=`\n  <div class="card col-lg-4 col-md-6 col-sm-12 gy-3">\n      <img src="${n.serie}" class="card-img-top" alt="...">\n      <div class="card-body">\n        <h5 class="card-title">${n.name}</h5>\n        <p class="card-text">\n          <span class="badge text-bg-secondary ms-2">4</span> Likes\n\n          <button type="button" class="btn btn-outline-info btn-sm ">\n            🤍\n          </button>\n        </p>\n        <div class="description-buttons justify-content-center">\n            <a href="#" class="btn btn-primary btn-sm comments">comments</a><br>\n            <a href="#" class="btn btn-primary btn-sm">Reservations</a>\n        </div>\n      </div>\n  </div>\n    `}));var v=e(833),g=e.n(v);(async()=>{try{const n=await fetch("https://api.tvmaze.com/shows/1/seasons"),r=await n.json();console.log(r.results)}catch(n){}})(),g()()})()})();