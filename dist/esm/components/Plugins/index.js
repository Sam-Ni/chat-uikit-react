import{__assign as o}from"tslib";import{jsxs as n,jsx as e}from"react/jsx-runtime";import{forwardRef as i,useImperativeHandle as l,useState as r}from"react";import{Icon as t}from"../Icon/Icon.js";import{IconTypes as c}from"../Icon/type.js";import{Popup as s}from"../Popup/index.js";import{usePluginsElement as a}from"./hooks/usePluginsElement.js";function m(i,m){var u=i.plugins,p=void 0===u?[]:u,h=i.showNumber,d=i.MoreIcon,g=i.className,f=void 0===g?"":g,v=i.customClass,N=void 0===v?"":v,b=i.root,j=i.handleVisible;l(m,(function(){return{closeMore:function(o){y(!1)}}}));var w=a({plugins:p,showNumber:h}),x=w.showPicker,I=w.elements,P=r(!1),k=P[0],y=P[1],C=function(o){o.stopPropagation(),y(!k)};return(x.length>0||(null==I?void 0:I.length)>0)&&n("ul",o({className:"plugin ".concat(f)},{children:[(null==x?void 0:x.length)>0&&x.map((function(n,i){var l="".concat(n).concat(i);return e("li",o({className:"plugin-item"},{children:n}),l)})),(null==I?void 0:I.length)>0&&n("div",o({className:"plugin-popup"},{children:[n("div",o({role:"menuitem",tabIndex:0,className:"more",onClick:C},{children:[!d&&e(t,{width:20,height:20,type:c.ADD}),d&&d]})),e(s,o({className:"plugin-popup-box ".concat(N),show:k,close:C,root:b,handleVisible:j},{children:e("ul",{children:I.map((function(n,i){var l="".concat(n).concat(i);return e("li",o({className:"plugin-item"},{children:n}),l)}))})}))]}))]}))}var u=i(m);export{u as Plugins};
