import{__assign as t}from"tslib";import{jsxs as e,jsx as i}from"react/jsx-runtime";import{useState as o}from"react";import{useTUIMessageInputContext as a}from"../../context/TUIMessageInputContext.js";import{Icon as n}from"../Icon/Icon.js";import{IconTypes as r}from"../Icon/type.js";import{Popup as c}from"../Popup/index.js";import{emojiName as p,emojiUrl as s,emojiMap as m}from"../TUIMessage/utils/emojiMap.js";function l(){var l=o(!1),u=l[0],f=l[1],d=o(0),g=d[0];d[1];var j=o(""),h=j[0],I=j[1],x=function(){f(!u)},M=a("TUIMessageInputDefault"),v=M.onSelectEmoji,N=M.sendFaceMessage,b=function(t){var e={index:g,data:t.target.dataset.data};e.data&&(0===g?v(e):(N(e),x()))};return e("div",t({className:"emoji-picker input-plugin-popup"},{children:[i(n,{width:20,height:20,type:r.EMOJI,onClick:x}),i(c,t({className:"input-plugin-popup-box ".concat(h),show:u,close:x,handleVisible:function(t){I("".concat(!t.top&&"emoji-plugin-top"," ").concat(!t.left&&"emoji-plugin-right"))}},{children:i("ul",t({className:"face-list"},{children:0===g&&p.map((function(e,o){var a=e+o;return i("li",t({role:"menuitem",className:"face-list-item",onClick:b},{children:i("img",{src:"".concat(s+m[e]),alt:"","data-data":e})}),a)}))}))}))]}))}export{l as EmojiPicker};
