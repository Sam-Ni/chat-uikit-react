import{__assign as t}from"tslib";import{jsxs as o,jsx as e}from"react/jsx-runtime";import{useState as r,useCallback as n,useEffect as s}from"react";import i from"tim-js-sdk";import"../../context/TUIKitContext.js";import"../../context/TUIChatStateContext.js";import{useTUIChatActionContext as a}from"../../context/TUIChatActionContext.js";import"../../context/TUIMessageContext.js";import"../../context/ComponentContext.js";import"../../context/TUIMessageInputContext.js";import{Model as l}from"../Model/index.js";import{Icon as m}from"../Icon/Icon.js";import{IconTypes as c}from"../Icon/type.js";import{getDisplayTitle as d}from"../ConversationPreview/utils.js";import{MESSAGE_OPERATE as p}from"../../constants.js";import"./hooks/useHandleQuoteMessage.js";import{useHandleForwardMessage as f}from"./hooks/useHandleForwardMessage.js";function u(u){var h=u.handleForward,g=r([]),x=g[0],v=g[1],C=r([]);C[0];var j=C[1],w=r("");w[0];var I=w[1],M=a().operateMessage,T=f(),y=T.message,N=T.sendForwardMessage,b=T.conversationList,k=void 0===b?[]:b;console.log("TUIForward",y),y&&y.type===i.TYPES.MSG_MERGER&&console.log("TUIMessageList",y.payload.messageList);var F=n((function(t){var o;M(((o={})[p.FORWARD]=null,o))}),[M]);k.slice(0,2),k.slice(2);var U;return s((function(){v([]),j([]),I("")}),[y]),y&&k.length>0&&o(l,t({onClick:F},{children:[o("div",t({role:"button",tabIndex:0,className:"tui-forward",onClick:function(t){t.stopPropagation()}},{children:[o("header",t({className:"tui-forward-header"},{children:[e(m,{type:c.CANCEL,width:16,height:16,onClick:F}),e("h2",t({className:"tui-forward-title"},{children:"Forward To"}))]})),e("main",t({className:"tui-forward-main"},{children:y.payload.messageList.map((function(t){return o("div",{children:[e("span",{children:t.from}),": ",e("span",{children:t.messageBody[0].payload.text})]})}))})),o("footer",t({className:"tui-forward-footer"},{children:[e("div",t({className:"tui-forward-footer-name"},{children:x.length>0&&(U=x,(null==U?void 0:U.map((function(t){return d(t)}))).toString())})),e("button",t({type:"button",className:"button",onClick:function(){var t;t=x,h?h({list:x,message:y}):N(x),F(t)},disabled:0===x.length},{children:"Forward"}))]}))]})),e("div",{children:"Test"})]}))}export{u as TUIForward};
