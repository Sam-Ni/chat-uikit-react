"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),r=require("react/jsx-runtime"),n=require("react"),t=require("tim-js-sdk"),i=require("../untils.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=l(n),a=l(t);function s(n){var t=n.context,l=n.message,u=n.children;return r.jsxs("div",e.__assign({className:"bubble message-custom bubble-".concat(l.flow,"  ").concat((null==l?void 0:l.conversationType)===a.default.TYPES.CONV_GROUP?"group":"")},{children:[function(n){if("Hyperlink"===n.data){var t=i.JSONStringToParse(null==n?void 0:n.extension);if(null==t?void 0:t.item)return null==t?void 0:t.item.map((function(n){return r.jsx("a",e.__assign({target:"_blank",href:n.value,rel:"noreferrer"},{children:n.value}),n.value)}));if(null==t?void 0:t.hyperlinks_text){var u=t.hyperlinks_text;return r.jsxs(r.Fragment,{children:[t.title," ",r.jsx("a",e.__assign({target:"_blank",href:null==u?void 0:u.value,rel:"noreferrer"},{children:u.key}),null==u?void 0:u.value)]})}}return"group_create"===n.data?"".concat((null==l?void 0:l.nick)||(null==l?void 0:l.from)," Create a group"):n.extension}(null==t?void 0:t.custom),u]}))}var o=u.default.memo(s);exports.MessageCustom=function(n){return r.jsx(o,e.__assign({},n))};
