import{__assign as e}from"tslib";import{jsxs as c,jsx as t}from"react/jsx-runtime";import{useState as o}from"react";import{Icon as a}from"../Icon/Icon.js";import{IconTypes as i}from"../Icon/type.js";function r(r){var n=r.checked,m=void 0!==n&&n,h=r.className,d=r.onChange,s=r.value,l=void 0===s?"":s,p=r.id,u=o(m),k=u[0],f=u[1];return c("div",e({className:"".concat(h," checkbox"),role:"menuitem",tabIndex:0},{children:[t("input",{id:p,className:"checkbox-input",onChange:function(e){f(e.target.checked),d&&d({value:l,checked:e.target.checked})},type:"checkbox",checked:k,value:l}),!k&&t("i",{className:"checkbox-default"}),k&&t(a,{type:i.RIGHT,width:14,height:14})]}))}export{r as Checkbox};
