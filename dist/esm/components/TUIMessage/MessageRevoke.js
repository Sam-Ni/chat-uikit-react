import{__assign as t}from"tslib";import{jsxs as e,jsx as o}from"react/jsx-runtime";import n,{useCallback as r}from"react";import s from"tim-js-sdk";import{MESSAGE_OPERATE as i,MESSAGE_FLOW as m}from"../../constants.js";import"../../context/TUIKitContext.js";import"../../context/TUIChatStateContext.js";import{useTUIChatActionContext as a}from"../../context/TUIChatActionContext.js";import"../../context/TUIMessageContext.js";import"../../context/ComponentContext.js";import"../../context/TUIMessageInputContext.js";var l=n.memo((function(n){var l=n.message,c=a().operateMessage,p=r((function(){var t;c(((t={})[i.REVOKE]=l,t))}),[c]);return e("div",t({className:"bubble message-system message-revoke"},{children:[(null==l?void 0:l.flow)===m.IN&&o("span",{children:(null==l?void 0:l.nick)||(null==l?void 0:l.from)}),(null==l?void 0:l.flow)!==m.IN&&o("span",{children:"you "}),o("span",{children:" recalled a message"}),(null==l?void 0:l.flow)===m.OUT&&(null==l?void 0:l.type)===s.TYPES.MSG_TEXT&&o("span",t({className:"edit",role:"button",tabIndex:0,onClick:p},{children:" Re-edit"}))]}))}));function c(e){return o(l,t({},e))}export{c as MessageRevoke};