import{__assign as e}from"tslib";import{jsxs as r,jsx as n,Fragment as t}from"react/jsx-runtime";import l from"react";import o from"tim-js-sdk";import{JSONStringToParse as i}from"../untils.js";var u=l.memo((function(l){var u=l.context,a=l.message,c=l.children;return r("div",e({className:"bubble message-custom bubble-".concat(a.flow,"  ").concat((null==a?void 0:a.conversationType)===o.TYPES.CONV_GROUP?"group":"")},{children:[function(l){if("Hyperlink"===l.data){var o=i(null==l?void 0:l.extension);if(null==o?void 0:o.item)return null==o?void 0:o.item.map((function(r){return n("a",e({target:"_blank",href:r.value,rel:"noreferrer"},{children:r.value}),r.value)}));if(null==o?void 0:o.hyperlinks_text){var u=o.hyperlinks_text;return r(t,{children:[o.title," ",n("a",e({target:"_blank",href:null==u?void 0:u.value,rel:"noreferrer"},{children:u.key}),null==u?void 0:u.value)]})}}return"group_create"===l.data?"".concat((null==a?void 0:a.nick)||(null==a?void 0:a.from)," Create a group"):l.extension}(null==u?void 0:u.custom),c]}))}));function a(r){return n(u,e({},r))}export{a as MessageCustom};
