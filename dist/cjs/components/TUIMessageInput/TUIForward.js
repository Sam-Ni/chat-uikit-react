"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),s=require("react/jsx-runtime"),t=require("react"),r=require("tim-js-sdk");require("../../context/TUIKitContext.js"),require("../../context/TUIChatStateContext.js");var a=require("../../context/TUIChatActionContext.js");require("../../context/TUIMessageContext.js"),require("../../context/ComponentContext.js"),require("../../context/TUIMessageInputContext.js");var n=require("../Model/index.js"),o=require("../Icon/Icon.js"),i=require("../Icon/type.js"),l=require("../ConversationPreview/utils.js"),u=require("../../constants.js");require("./hooks/useHandleQuoteMessage.js");var c=require("./hooks/useHandleForwardMessage.js");function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var x=d(r);exports.TUIForward=function(r){var d=r.handleForward,g=t.useState([]),j=g[0],h=g[1],f=t.useState([]);f[0];var p=f[1],m=t.useState("");m[0];var v=m[1],_=a.useTUIChatActionContext().operateMessage,C=c.useHandleForwardMessage(),q=C.message,w=C.sendForwardMessage,I=C.conversationList,T=void 0===I?[]:I;console.log("TUIForward",q),q&&q.type===x.default.TYPES.MSG_MERGER&&console.log("TUIMessageList",q.payload.messageList);var M,y=t.useCallback((function(e){var s;_(((s={})[u.MESSAGE_OPERATE.FORWARD]=null,s))}),[_]);return T.slice(0,2),T.slice(2),t.useEffect((function(){h([]),p([]),v("")}),[q]),q&&T.length>0&&s.jsxs(n.Model,e.__assign({onClick:y},{children:[s.jsxs("div",e.__assign({role:"button",tabIndex:0,className:"tui-forward",onClick:function(e){e.stopPropagation()}},{children:[s.jsxs("header",e.__assign({className:"tui-forward-header"},{children:[s.jsx(o.Icon,{type:i.IconTypes.CANCEL,width:16,height:16,onClick:y}),s.jsx("h2",e.__assign({className:"tui-forward-title"},{children:"Forward To"}))]})),s.jsx("main",e.__assign({className:"tui-forward-main"},{children:q.payload.messageList.map((function(e){return s.jsxs("div",{children:[s.jsx("span",{children:e.from}),": ",s.jsx("span",{children:e.messageBody[0].payload.text})]})}))})),s.jsxs("footer",e.__assign({className:"tui-forward-footer"},{children:[s.jsx("div",e.__assign({className:"tui-forward-footer-name"},{children:j.length>0&&(M=j,(null==M?void 0:M.map((function(e){return l.getDisplayTitle(e)}))).toString())})),s.jsx("button",e.__assign({type:"button",className:"button",onClick:function(){var e;e=j,d?d({list:j,message:q}):w(j),y(e)},disabled:0===j.length},{children:"Forward"}))]}))]})),s.jsx("div",{children:"Test"})]}))};
