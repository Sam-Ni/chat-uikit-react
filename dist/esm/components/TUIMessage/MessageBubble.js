import{__assign as e}from"tslib";import{jsxs as t,jsx as s}from"react/jsx-runtime";import o,{useState as n}from"react";import i from"tim-js-sdk";import{MESSAGE_STATUS as a}from"../../constants.js";import"../../context/TUIKitContext.js";import"../../context/TUIChatStateContext.js";import{useTUIChatActionContext as l}from"../../context/TUIChatActionContext.js";import"../../context/TUIMessageContext.js";import"../../context/ComponentContext.js";import"../../context/TUIMessageInputContext.js";import{Icon as m}from"../Icon/Icon.js";import{IconTypes as r}from"../Icon/type.js";import{useMessageReply as c}from"./hooks/useMessageReply.js";import{MessageProgress as u}from"./MessageProgress.js";var d=o.memo((function(o){var d=o.message,p=o.children,g=o.Context,b=o.Plugins,f=n(!1),v=f[0],x=f[1],h=c({message:d}),I=h.messageReply,j=h.replyMessage,M=h.sender,N=l().setHighlightedMessageId;return t("div",e({className:"meesage-bubble"},{children:[t("div",e({className:"meesage-bubble-context ".concat(null==d?void 0:d.flow),onMouseEnter:function(){x(!0)},onMouseLeave:function(){x(!1)}},{children:[t("div",e({className:"message-context\n            ".concat(I?"meesage-bubble-reply meesage-bubble-reply-".concat(null==d?void 0:d.flow):"","\n            ").concat((null==d?void 0:d.type)!==i.TYPES.MSG_IMAGE&&(null==d?void 0:d.type)!==i.TYPES.MSG_VIDEO&&(null==d?void 0:d.type)!==i.TYPES.MSG_FILE||(null==d?void 0:d.status)!==a.UNSEND?"":"loading")},{children:[I&&t("div",e({className:"meesage-bubble-reply-main",role:"menuitem",tabIndex:0,onClick:function(){N(null==j?void 0:j.ID)}},{children:[s("header",e({className:"title"},{children:M})),g&&s(g,{message:j})]})),p,s(u,{message:d})]})),b&&s("div",e({className:"message-plugin"},{children:v&&s(b,{})}))]})),t("div",e({className:"message-bubble-status icon"},{children:[(null==d?void 0:d.status)===a.FAIL&&s("i",{className:"icon-fail"}),(null==d?void 0:d.status)===a.UNSEND&&s(m,{width:10,height:10,type:r.PROGRESS})]}))]}))}));function p(t){return s(d,e({},t))}export{p as MessageBubble};
