"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),t=require("react/jsx-runtime"),i=require("./hooks/useTUIKit.js"),r=require("./hooks/useCreateTUIKitContext.js"),s=require("../../context/TUIKitContext.js"),o=require("../TUIConversation/TUIConversation.js"),a=require("../TUIChat/TUIChat.js");require("react");var n=require("../TUIManage/TUIManage.js");exports.TUIKit=function(u){var I=u.children,T=u.tim,U=u.customClasses,c=u.activeConversation;window.tencent_cloud_im_csig_react_uikit_23F_xa=!0;var v=i.useTUIKit({tim:T,activeConversation:c}),l=v.conversation,h=v.setActiveConversation,C=v.myProfile,j=v.TUIManageShow,x=v.setTUIManageShow,_=v.TUIProfileShow,g=v.setTUIProfileShow,m=r.useCreateTUIKitContext({tim:T,conversation:l,setActiveConversation:h,customClasses:U,myProfile:C,TUIManageShow:j,setTUIManageShow:x,TUIProfileShow:_,setTUIProfileShow:g});return t.jsx(s.TUIKitProvider,e.__assign({value:m},{children:t.jsx("div",e.__assign({className:"tui-kit"},{children:I||t.jsxs(t.Fragment,{children:[t.jsx(o.TUIConversation,{}),t.jsx(a.TUIChat,{}),t.jsx(n.TUIManage,{})]})}))}))};
