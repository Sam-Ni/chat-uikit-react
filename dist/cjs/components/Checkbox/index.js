"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),c=require("react/jsx-runtime"),t=require("react"),r=require("../Icon/Icon.js"),s=require("../Icon/type.js");exports.Checkbox=function(a){var i=a.checked,n=void 0!==i&&i,o=a.className,u=a.onChange,d=a.value,h=void 0===d?"":d,l=a.id,x=t.useState(n),k=x[0],p=x[1];return c.jsxs("div",e.__assign({className:"".concat(o," checkbox"),role:"menuitem",tabIndex:0},{children:[c.jsx("input",{id:l,className:"checkbox-input",onChange:function(e){p(e.target.checked),u&&u({value:h,checked:e.target.checked})},type:"checkbox",checked:k,value:h}),!k&&c.jsx("i",{className:"checkbox-default"}),k&&c.jsx(r.Icon,{type:s.IconTypes.RIGHT,width:14,height:14})]}))};