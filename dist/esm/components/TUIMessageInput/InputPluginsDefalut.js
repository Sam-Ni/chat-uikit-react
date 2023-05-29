import{__assign as i,__spreadArray as o}from"tslib";import{jsxs as n,jsx as e}from"react/jsx-runtime";import{useRef as t}from"react";import{EmojiPicker as l}from"./EmojiPicker.js";import{Plugins as r}from"../Plugins/index.js";import{useUploadElement as u}from"./hooks/useUploadElement.js";import{MESSAGE_TYPE_NAME as s}from"../../constants.js";import{useTUIMessageInputContext as c}from"../../context/TUIMessageInputContext.js";import{Icon as p}from"../Icon/Icon.js";import{IconTypes as d}from"../Icon/type.js";import"../../context/TUIKitContext.js";import{useTUIChatStateContext as m}from"../../context/TUIChatStateContext.js";import"../../context/TUIChatActionContext.js";import"../../context/TUIMessageContext.js";import"../../context/ComponentContext.js";function g(){var g,a,f,v,h,I,C,j=c("TUIMessageInputDefault"),x=j.sendUploadMessage,M=j.pluginConfig,U=m("TUIMessageInput").TUIMessageInputConfig,k=(null==M?void 0:M.plugins)||(null===(g=null==U?void 0:U.pluginConfig)||void 0===g?void 0:g.plugins)||[],E=(null==M?void 0:M.showNumber)||(null===(a=null==U?void 0:U.pluginConfig)||void 0===a?void 0:a.showNumber)||1,P=(null==M?void 0:M.MoreIcon)||(null===(f=null==U?void 0:U.pluginConfig)||void 0===f?void 0:f.MoreIcon),y=function(i,o,n){return"boolean"==typeof i?i:"boolean"==typeof o?o:n},T=y(null==M?void 0:M.isEmojiPicker,null===(v=null==U?void 0:U.pluginConfig)||void 0===v?void 0:v.isEmojiPicker,!0),N=y(null==M?void 0:M.isImagePicker,null===(h=null==U?void 0:U.pluginConfig)||void 0===h?void 0:h.isImagePicker,!0),b=y(null==M?void 0:M.isVideoPicker,null===(I=null==U?void 0:U.pluginConfig)||void 0===I?void 0:I.isVideoPicker,!0),w=y(null==M?void 0:M.isFilePicker,null===(C=null==U?void 0:U.pluginConfig)||void 0===C?void 0:C.isFilePicker,!0),D=t(null),V=N&&u({children:n("div",i({className:"input-plugin-item"},{children:[e(p,{width:20,height:20,type:d.IMAGE}),e("span",{children:"Image"})]})),type:"image",accept:"image/*",onChange:function(i){D.current.closeMore(),x({file:i},s.IMAGE)}}),A=b&&u({children:n("div",i({className:"input-plugin-item"},{children:[e(p,{width:20,height:20,type:d.VIDEO}),e("span",{children:"Video"})]})),type:"video",accept:"video/*",onChange:function(i){D.current.closeMore(),x({file:i},s.VIDEO)}}),F=w&&u({children:n("div",i({className:"input-plugin-item"},{children:[e(p,{width:20,height:20,type:d.DOCUMENT}),e("span",{children:"Document"})]})),type:"file",accept:"file/*",onChange:function(i){D.current.closeMore(),x({file:i},s.FILE)}}),O=o([T&&e(l,{}),V,A,F],k,!0).filter((function(i){return i}));return e(r,{ref:D,plugins:O,showNumber:E,MoreIcon:P})}export{g as InputPluginsDefalut};
