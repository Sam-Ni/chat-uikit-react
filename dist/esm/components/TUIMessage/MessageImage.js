import{__assign as i}from"tslib";import{jsx as o,jsxs as r}from"react/jsx-runtime";import n,{useState as e}from"react";import t from"tim-js-sdk";import{Model as l}from"../Model/index.js";function m(n){var m,a,c,d=n.context,u=n.message,s=n.children,f=e(!1),v=f[0],g=f[1],p=null===(a=null===(m=null==u?void 0:u.payload)||void 0===m?void 0:m.imageInfoArray)||void 0===a?void 0:a.filter((function(i){return 0===i.type}));return r("div",i({className:"message-image"},{children:[o("div",i({role:"button",tabIndex:0,onClick:function(){g(!0)}},{children:o("img",{className:"img bubble-".concat(u.flow," ").concat((null==u?void 0:u.conversationType)===t.TYPES.CONV_GROUP?"group":""),src:d.url,alt:""})})),s,v&&o(l,i({onClick:function(){g(!1)}},{children:o("img",{className:"big-image",src:null===(c=p[0])||void 0===c?void 0:c.url,alt:""})}))]}))}var a=n.memo(m);function c(r){return o(a,i({},r))}export{c as MessageImage};
