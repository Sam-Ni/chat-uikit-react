"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),t=require("react/jsx-runtime"),n=require("react"),r=require("../Avatar/Avatar.js"),s=require("../../hooks/useConversation.js"),i=require("../../context/TUIKitContext.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function o(a){var o=a.conversation,c=a.Avatar,u=void 0===c?r.Avatar:c,v=a.displayImage,l=a.displayTitle;a.displayMessage,a.displayTime;var d=a.unread,x=a.active,C=a.setActiveConversation,j=n.useRef(null),p=x?"conversation-preview-content--active":"",m=d&&d>=1?"conversation-preview-content--unread":"",_=o.isPinned?"conversation-preview-content--pin":"",f=n.useState(!1);f[0];var g=f[1],q=i.useTUIKitContext("ConversationPreviewContent"),h=q.tim;q.conversation;var y=s.useConversation(h);return y.pinConversation,y.deleteConversation,t.jsxs("button",e.__assign({type:"button","aria-selected":x,role:"option",className:"conversation-preview-container ".concat(p," ").concat(m," ").concat(_),onClick:function(){C&&C(o),(null==j?void 0:j.current)&&j.current.blur()},onMouseEnter:function(){g(!0)},onMouseLeave:function(){g(!1)},ref:j},{children:[t.jsx("div",e.__assign({className:"avatar"},{children:t.jsx(u,{image:v,name:l,size:40})})),t.jsx("div",e.__assign({className:"content"},{children:t.jsx("div",e.__assign({className:"title"},{children:l}))})),t.jsx("div",e.__assign({className:"external"},{children:d?t.jsx("div",e.__assign({className:"unread"},{children:d<=99?d:"99+"})):t.jsx("div",{className:"unread"})}))]}))}require("../../context/TUIChatStateContext.js"),require("../../context/TUIChatActionContext.js"),require("../../context/TUIMessageContext.js"),require("../../context/ComponentContext.js"),require("../../context/TUIMessageInputContext.js");var c=a(n).default.memo(o);exports.MyConversationPreviewContent=c,exports.unMemoMyConversationPreviewContent=o;