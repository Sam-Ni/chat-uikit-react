import{__assign as t}from"tslib";import{jsx as e,jsxs as r}from"react/jsx-runtime";import c from"react";import n from"tim-js-sdk";var s=c.memo((function(c){var s=c.context,m=c.message,a=c.children;return e("div",t({className:"bubble message-text bubble-".concat(m.flow," ").concat((null==m?void 0:m.conversationType)===n.TYPES.CONV_GROUP?"group":"")},{children:r("div",t({className:"message-text-content"},{children:[s.text.map((function(r,c){var n=m.ID+c;return"text"===r.name?e("p",t({className:"message-text-content-p"},{children:r.text}),r.src+n):e("img",{className:"text-img",src:r.src,alt:""},r.src+n)})),a]}))}))}));function m(r){return e(s,t({},r))}export{m as MessageText};