"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Toast=function(e){var t=e.type,c=void 0===t?"info":t,n=e.text,o=e.time,a=e.className,l=o||3,s=document.body,i=document.createElement("div");i.innerText=n,i.className="toast ".concat(a," ").concat(c),s.appendChild(i);var d=document.getElementsByClassName("toast");i.style.left="calc(50% - ".concat(i.clientWidth/2,"px)"),i.style.zIndex="".concat(10+d.length-1),i.style.top="".concat(i.clientHeight*(d.length-1),"px");var m=setTimeout((function(){s.removeChild(i),clearTimeout(m)}),1e3*l)};