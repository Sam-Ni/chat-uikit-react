"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),s=require("react/jsx-runtime"),r=require("react"),a=require("tim-js-sdk"),n=require("../Icon/Icon.js"),i=require("../Icon/type.js");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=t(r),c=t(a);var o=l.default.memo((function(r){var a=r.context,t=r.message,l=r.children;return s.jsxs("a",e.__assign({href:a.url,download:a.name,target:"_parent",className:"bubble message-file bubble-".concat(t.flow," ").concat((null==t?void 0:t.conversationType)===c.default.TYPES.CONV_GROUP?"group":""),rel:"noreferrer"},{children:[s.jsxs("main",e.__assign({className:"message-file-main"},{children:[s.jsx(n.Icon,{className:"icon",width:15,height:20,type:i.IconTypes.FILE}),s.jsx("label",e.__assign({htmlFor:"message-file"},{children:a.name}))]})),s.jsxs("div",e.__assign({className:"message-file-footer"},{children:[s.jsx("span",e.__assign({className:"message-file-size"},{children:a.size})),l]}))]}))}));exports.MessageFile=function(r){return s.jsx(o,e.__assign({},r))};
