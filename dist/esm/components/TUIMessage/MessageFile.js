import{__assign as e}from"tslib";import{jsx as r,jsxs as o}from"react/jsx-runtime";import a from"react";import i from"tim-js-sdk";import{Icon as m}from"../Icon/Icon.js";import{IconTypes as s}from"../Icon/type.js";function n(a){var n=a.context,t=a.message,l=a.children;return o("a",e({href:n.url,download:n.name,target:"_parent",className:"bubble message-file bubble-".concat(t.flow," ").concat((null==t?void 0:t.conversationType)===i.TYPES.CONV_GROUP?"group":""),rel:"noreferrer"},{children:[o("main",e({className:"message-file-main"},{children:[r(m,{className:"icon",width:15,height:20,type:s.FILE}),r("label",e({htmlFor:"message-file"},{children:n.name}))]})),o("div",e({className:"message-file-footer"},{children:[r("span",e({className:"message-file-size"},{children:n.size})),l]}))]}))}var t=a.memo(n);function l(o){return r(t,e({},o))}export{l as MessageFile};
