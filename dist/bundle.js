(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"* {\r\n  font-family: 'Lato', sans-serif;\r\n  box-sizing: border-box;\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  height: 83px;\r\n  padding-top: 15px;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  background: rgb(241, 241, 232);\r\n}\r\n\r\n.logo {\r\n  width: 10%;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 2rem;\r\n}\r\n\r\ni {\r\n  width: auto;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.card-text {\r\n  text-align: end;\r\n}\r\n\r\n.card {\r\n  padding: 0;\r\n  width: 18rem;\r\n}\r\n\r\n.description-buttons {\r\n  display: flex;\r\n  text-align: end;\r\n  justify-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.card-row {\r\n  column-gap: 20px;\r\n  justify-content: center;\r\n}\r\n\r\nfooter {\r\n  position: relative;\r\n  bottom: 0;\r\n  width: 95%;\r\n  text-align: center;\r\n  border: 1px solid grey;\r\n  border-radius: 5px;\r\n  margin: auto;\r\n  margin-top: 20px;\r\n  margin-bottom: 5px;\r\n  background: gray;\r\n  color: #fff;\r\n}\r\n\r\n.seriePop {\r\n  margin-left: 12px;\r\n}\r\n\r\n.serieInfo {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  width: 80%;\r\n  margin: auto;\r\n  row-gap: 0;\r\n}\r\n\r\n.summary-text {\r\n  font-family: 'Inter', Arial, Helvetica, sans-serif;\r\n  font-size: 15px;\r\n}\r\n\r\n.modal--img {\r\n  width: 43%;\r\n  height: 318px;\r\n  margin: auto;\r\n  display: block;\r\n}\r\n\r\n.info-list {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: baseline;\r\n}\r\n\r\n.modal-dialog {\r\n  max-width: 60%;\r\n  height: 95vh;\r\n}\r\n\r\n.modal-header {\r\n  border-bottom: none;\r\n  height: 15px;\r\n}\r\n\r\n.modal-title {\r\n  font-size: 2rem;\r\n  font-weight: bold;\r\n  margin: 20px;\r\n  margin-left: 20%;\r\n}\r\n\r\n.modal-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.modal-form-section {\r\n  margin-top: 20px;\r\n}\r\n\r\n.comments {\r\n  margin: auto;\r\n  width: 45%;\r\n}\r\n\r\n.form-control {\r\n  width: 50%;\r\n  margin: 10px;\r\n}\r\n",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var m=t(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var f=o(p,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),m=t.n(u),p=t(426),f={};f.styleTagTransform=m(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const y=async()=>{const n=await fetch("https://api.tvmaze.com/shows/7/seasons");return await n.json()},h=async(n,e)=>{const t=await n(e);document.querySelector(".comment-count").innerHTML=t.length.toString()},v="https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Nbc4s2TFp5CN6zapCfwg/comments?item_id=",g=document.querySelector(".comments"),b=async n=>{const e=await fetch(`${v}${n}`);return await e.json()},x=async n=>{const e=await b(n);g.innerHTML="",e.forEach((n=>{g.innerHTML+=`\n            <div class="comment">\n                <span class="comment-date">${n.creation_date} &nbsp;</span>\n                <span class="comment-name"><strong>${n.username} :</strong></span>\n                <span class="comment-text">${n.comment}</span>\n            </div>\n            `}))},w=async()=>{const n=document.querySelector(".modal--img"),e=document.querySelector(".modal-title"),t=document.querySelector(".premier-date"),r=document.querySelector(".end-date"),o=document.querySelector(".movie-link"),a=document.querySelector(".summary-text");let i;document.querySelectorAll(".comments-btn").forEach(((c,s)=>{c.addEventListener("click",(async c=>{c.stopPropagation();const d=await y();n.src=d[s].image.medium,e.innerHTML=d[s].name,t.innerHTML=`<h5>Premiered:&nbsp;&nbsp;</h5> ${d[s].premiereDate}`,r.innerHTML=`<h5>End date: &nbsp;&nbsp;</h5> ${d[s].endDate}`,o.href=d[s].url,a.innerHTML=d[s].summary,i=document.querySelector(".commentButton"),i.id=d[s].number,b(i.id),x(i.id),(()=>{const n=document.querySelector(".commentButton"),e=document.querySelector(".name-input"),t=document.querySelector(".comment-input");n.addEventListener("click",(async r=>{r.preventDefault();const{id:o}=n,a=e.value,i=t.value;""!==a&&""!==i&&((async(n,e,t)=>{(await fetch(v,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item_id:n,username:e,comment:t})})).json()})(o,a,i),e.value="",t.value="",await x(o),h(b,o),h())}))})(),h(b,i.id)}))}))},S="https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Nbc4s2TFp5CN6zapCfwg/likes";let T,L;const M=()=>{L=document.querySelectorAll(".like-count"),(async()=>{const n=await fetch(S);return await n.json()})().then((n=>{n.forEach((n=>{L.forEach((e=>{Number(e.id)===Number(n.item_id)&&(e.innerHTML=n.likes)}))}))}))},q=()=>{T=document.querySelectorAll(".like-btn"),T.forEach((n=>{n.addEventListener("click",(async e=>{e.stopPropagation();const{id:t}=n;(async n=>{(await fetch(S,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item_id:n})})).json()})(t),M()}))}))};window.addEventListener("DOMContentLoaded",(()=>{q()}));const E=document.querySelector("#container");(async()=>{await(async()=>{await(async()=>{(await y()).forEach((n=>{E.innerHTML+=`\n        <div class="card col-lg-4 col-md-6 col-sm-12 gy-3">\n            <img src="${n.image.original}" class="card-img-top" alt="...">\n            <div class="card-body">\n              <h5 class="card-title">${n.name}</h5>\n              <p class="card-text">\n                <span class="badge like-count text-bg-secondary ms-2" id="${n.number}"></span> Likes\n\n                <button type="button" class="btn btn-outline-info btn-sm like-btn" id="${n.number}">\n                  🤍\n                </button>\n              </p>\n              <div class="description-buttons justify-content-center">\n                  <a href="#" class="btn btn-primary btn-sm comments-btn" data-bs-toggle="modal" data-bs-target="#comment-modal">comments</a><br>\n                  <a href="#" class="btn btn-primary btn-sm">Reservations</a>\n              </div>\n            </div>\n        </div>\n          `}))})(),await w(),q(),M()})(),(()=>{const n=document.querySelectorAll(".card");document.querySelector(".items-counter").innerHTML=n.length})()})(),window.document.addEventListener("DOMContentLoaded",(()=>{w()}))})()})();