import{__assign as e}from"tslib";import{jsxs as n,jsx as t}from"react/jsx-runtime";import o,{useRef as i,useState as a}from"react";import{Avatar as r}from"../Avatar/Avatar.js";import{Icon as s}from"../Icon/Icon.js";import{IconTypes as c}from"../Icon/type.js";import{Plugins as l}from"../Plugins/index.js";import{useConversation as m}from"../../hooks/useConversation.js";import{useTUIKitContext as d}from"../../context/TUIKitContext.js";import"../../context/TUIChatStateContext.js";import"../../context/TUIChatActionContext.js";import"../../context/TUIMessageContext.js";import"../../context/ComponentContext.js";import"../../context/TUIMessageInputContext.js";function v(o){var v=o.conversation,p=o.Avatar,u=void 0===p?r:p,h=o.displayImage,C=o.displayTitle,f=o.displayMessage,x=o.displayTime,N=o.unread,I=o.active,j=o.setActiveConversation,g=i(null),P=I?"conversation-preview-content--active":"",w=N&&N>=1?"conversation-preview-content--unread":"",y=v.isPinned?"conversation-preview-content--pin":"",b=a(!1),M=b[0],T=b[1],k=d("ConversationPreviewContent"),A=k.tim,U=k.conversation,D=m(A),E=D.pinConversation,F=D.deleteConversation,z=function(e){var n=v.conversationID,t=v.isPinned;switch(e){case"pin":E({conversationID:n,isPinned:!t});break;case"delete":F(n),v===U&&j(null)}};return n("button",e({type:"button","aria-selected":I,role:"option",className:"conversation-preview-container ".concat(P," ").concat(w," ").concat(y),onClick:function(){j&&j(v),(null==g?void 0:g.current)&&g.current.blur()},onMouseEnter:function(){T(!0)},onMouseLeave:function(){T(!1)},ref:g},{children:[t("div",e({className:"avatar"},{children:t(u,{image:h,name:C,size:40})})),n("div",e({className:"content"},{children:[t("div",e({className:"title"},{children:C})),t("div",e({className:"message"},{children:f})),t("div",{children:t("div",N?e({className:"unread"},{children:N<=99?N:"99+"}):{className:"unread"})})]})),n("div",e({className:"external"},{children:[t("div",N?e({className:"unread"},{children:N<=99?N:"99+"}):{className:"unread"}),t("div",M?e({className:"".concat(M?"more--hover":"more")},{children:t(l,{customClass:"more-handle-box",plugins:[t("div",e({role:"presentation",className:"more-handle-item",onClick:function(e){e.stopPropagation(),z("pin")}},{children:v.isPinned?"Cancel Pin":"Pin"})),t("div",e({className:"more-handle-item",style:{color:"#FF584C"},onClick:function(e){e.stopPropagation(),z("delete")},role:"presentation"},{children:"Delete"}))],showNumber:0,MoreIcon:t(s,{className:"icon-more",width:16,height:16,type:c.MORE})})}):e({className:"time"},{children:x}))]}))]}))}var p=o.memo(v);export{p as ConversationPreviewContent,v as unMemoConversationPreviewContent};
