"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),t=require("react/jsx-runtime"),s=require("react"),r=require("tim-js-sdk");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=a(s),c=a(r);var i=n.default.memo((function(s){var r=s.context,a=s.message,n=s.children;return t.jsx("div",e.__assign({className:"bubble message-text bubble-".concat(a.flow," ").concat((null==a?void 0:a.conversationType)===c.default.TYPES.CONV_GROUP?"group":"")},{children:t.jsxs("div",e.__assign({className:"message-text-content"},{children:[r.text.map((function(s,r){var n=a.ID+r;return"text"===s.name?t.jsx("p",e.__assign({className:"message-text-content-p"},{children:s.text}),s.src+n):t.jsx("img",{className:"text-img",src:s.src,alt:""},s.src+n)})),n]}))}))}));exports.MessageText=function(s){return t.jsx(i,e.__assign({},s))};
