import{__assign as e,__spreadArray as t}from"tslib";import{jsxs as o,jsx as i}from"react/jsx-runtime";import{useState as r,useCallback as n,useEffect as a}from"react";import"../../context/TUIKitContext.js";import"../../context/TUIChatStateContext.js";import{useTUIChatActionContext as l}from"../../context/TUIChatActionContext.js";import"../../context/TUIMessageContext.js";import"../../context/ComponentContext.js";import"../../context/TUIMessageInputContext.js";import{Model as s}from"../Model/index.js";import{Icon as c}from"../Icon/Icon.js";import{IconTypes as d}from"../Icon/type.js";import{Input as m}from"../Input/Input.js";import{Checkbox as u}from"../Checkbox/index.js";import{Avatar as h}from"../Avatar/Avatar.js";import{getDisplayImage as f,getDisplayTitle as v}from"../ConversationPreview/utils.js";import{MESSAGE_OPERATE as p}from"../../constants.js";import"./hooks/useHandleQuoteMessage.js";import{useHandleForwardMessage as g}from"./hooks/useHandleForwardMessage.js";function w(w){var N,C=w.handleForward,I=r([]),x=I[0],j=I[1],b=r([]),k=b[0],D=b[1],F=r(""),T=F[0],M=F[1],A=l().operateMessage,L=g(),R=L.message,y=L.sendForwardMessage,S=L.conversationList,U=void 0===S?[]:S,z=n((function(e){var t;A(((t={})[p.FORWARD]=null,t))}),[A]),H=U.slice(0,2),E=U.slice(2),P=function(e){e.checked?j(t(t([],x,!0),[e.value],!1)):j(x.filter((function(t){return t!==e.value})))};return a((function(){j([]),D([]),M("")}),[R]),R&&U.length>0&&o(s,e({onClick:z},{children:[o("div",e({role:"button",tabIndex:0,className:"tui-forward",onClick:function(e){e.stopPropagation()}},{children:[o("header",e({className:"tui-forward-header"},{children:[i(c,{type:d.CANCEL,width:16,height:16,onClick:z}),i("h2",e({className:"tui-forward-title"},{children:"Forward To"}))]})),i("div",e({className:"tui-forward-search"},{children:i(m,{className:"tui-forward-search-input",placeholder:"Search",clearable:!0,value:T,onChange:function(e){var t,o;if(M(null===(t=e.target)||void 0===t?void 0:t.value),null===(o=e.target)||void 0===o?void 0:o.value){var i=U.filter((function(t){var o,i=v(t).toLocaleLowerCase(),r=null===(o=e.target)||void 0===o?void 0:o.value.toLocaleLowerCase();return i.includes(r)}));D(i)}else D([])},prefix:i(c,{type:d.SEARCH,height:16,width:16})})})),o("main",e({className:"tui-forward-main"},{children:[T&&o("ul",e({className:"tui-forward-list"},{children:[i("h3",e({className:"tui-forward-list-title"},{children:"Search Result"})),k.length>0&&k.map((function(t){return o("li",e({className:"tui-forward-list-item"},{children:[o("label",e({htmlFor:"".concat(t.conversationID),className:"info"},{children:[i(h,{image:f(t),size:40}),i("div",e({className:"info-nick"},{children:v(t)}))]})),i(u,{onChange:P,id:"".concat(t.conversationID),value:t})]}),t.conversationID)})),0===k.length&&i("p",e({className:"no-result"},{children:"No Result"}))]})),!T&&H.length>0&&o("ul",e({className:"tui-forward-list"},{children:[i("h3",e({className:"tui-forward-list-title"},{children:"Frequently Contacted Test"})),H.map((function(t){return o("li",e({className:"tui-forward-list-item"},{children:[o("label",e({htmlFor:"".concat(t.conversationID),className:"info"},{children:[i(h,{image:f(t),size:40}),i("div",e({className:"info-nick"},{children:v(t)}))]})),i(u,{onChange:P,id:"".concat(t.conversationID),value:t})]}),t.conversationID)}))]})),!T&&E.length>0&&o("ul",e({className:"tui-forward-list"},{children:[i("h3",e({className:"tui-forward-list-title"},{children:"Recent Chats"})),E.map((function(t){return o("li",e({className:"tui-forward-list-item"},{children:[o("label",e({htmlFor:"".concat(t.conversationID),className:"info"},{children:[i(h,{image:f(t),size:40}),i("div",e({className:"info-nick"},{children:v(t)}))]})),i(u,{onChange:P,id:"".concat(t.conversationID),value:t})]}),t.conversationID)}))]}))]})),o("footer",e({className:"tui-forward-footer"},{children:[i("div",e({className:"tui-forward-footer-name"},{children:x.length>0&&(N=x,(null==N?void 0:N.map((function(e){return v(e)}))).toString())})),i("button",e({type:"button",className:"button",onClick:function(){var e;e=x,C?C({list:x,message:R}):y(x),z(e)},disabled:0===x.length},{children:"Forward"}))]}))]})),i("div",{children:"Test"})]}))}export{w as TUIForward};
