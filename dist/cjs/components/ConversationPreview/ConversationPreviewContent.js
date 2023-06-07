"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),n=require("react/jsx-runtime"),s=require("react"),t=require("../Avatar/Avatar.js"),i=require("../Icon/Icon.js"),o=require("../Icon/type.js"),a=require("../Plugins/index.js"),r=require("../../hooks/useConversation.js"),c=require("../../context/TUIKitContext.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function u(l){var u=l.conversation,v=l.Avatar,d=void 0===v?t.Avatar:v,m=l.displayImage,x=l.displayTitle,p=l.displayMessage,j=l.displayTime,C=l.unread,_=l.active,g=l.setActiveConversation,h=s.useRef(null),I=_?"conversation-preview-content--active":"",f=C&&C>=1?"conversation-preview-content--unread":"",q=u.isPinned?"conversation-preview-content--pin":"",N=s.useState(!1),P=N[0],y=N[1],w=c.useTUIKitContext("ConversationPreviewContent"),b=w.tim,M=w.conversation,T=r.useConversation(b),A=T.pinConversation,U=T.deleteConversation,k=function(e){var n=u.conversationID,s=u.isPinned;switch(e){case"pin":A({conversationID:n,isPinned:!s});break;case"delete":U(n),u===M&&g(null)}};return n.jsxs("button",e.__assign({type:"button","aria-selected":_,role:"option",className:"conversation-preview-container ".concat(I," ").concat(f," ").concat(q),onClick:function(){g&&g(u),(null==h?void 0:h.current)&&h.current.blur()},onMouseEnter:function(){y(!0)},onMouseLeave:function(){y(!1)},ref:h},{children:[n.jsx("div",e.__assign({className:"avatar"},{children:n.jsx(d,{image:m,name:x,size:40})})),n.jsxs("div",e.__assign({className:"content"},{children:[n.jsx("div",e.__assign({className:"title"},{children:x})),n.jsx("div",e.__assign({className:"message"},{children:p}))]})),n.jsxs("div",e.__assign({className:"external"},{children:[C?n.jsx("div",e.__assign({className:"unread"},{children:C<=99?C:"99+"})):n.jsx("div",{className:"unread"}),P?n.jsx("div",e.__assign({className:"".concat(P?"more--hover":"more")},{children:n.jsx(a.Plugins,{customClass:"more-handle-box",plugins:[n.jsx("div",e.__assign({role:"presentation",className:"more-handle-item",onClick:function(e){e.stopPropagation(),k("pin")}},{children:u.isPinned?"Cancel Pin":"Pin"})),n.jsx("div",e.__assign({className:"more-handle-item",style:{color:"#FF584C"},onClick:function(e){e.stopPropagation(),k("delete")},role:"presentation"},{children:"Delete"}))],showNumber:0,MoreIcon:n.jsx(i.Icon,{className:"icon-more",width:16,height:16,type:o.IconTypes.MORE})})})):n.jsx("div",e.__assign({className:"time"},{children:j}))]}))]}))}require("../../context/TUIChatStateContext.js"),require("../../context/TUIChatActionContext.js"),require("../../context/TUIMessageContext.js"),require("../../context/ComponentContext.js"),require("../../context/TUIMessageInputContext.js");var v=l(s).default.memo(u);exports.ConversationPreviewContent=v,exports.unMemoConversationPreviewContent=u;
