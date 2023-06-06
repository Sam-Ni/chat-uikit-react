import{__assign as e,__awaiter as t,__generator as r,__spreadArray as n}from"tslib";import{jsxs as o,Fragment as i,jsx as c}from"react/jsx-runtime";import{useState as a,useRef as s}from"react";import{Input as u}from"../Input/Input.js";import{Icon as l}from"../Icon/Icon.js";import{IconTypes as m}from"../Icon/type.js";import{ConversationCreateSelectView as p}from"./ConversationCreateSelectView.js";import{Avatar as h}from"../Avatar/Avatar.js";import{defaultUserAvatar as d}from"../Avatar/default.js";import{useConversationCreate as v}from"./hooks/useConversationCreate.js";import{useTUIKitContext as f}from"../../context/TUIKitContext.js";import"../../context/TUIChatStateContext.js";import"../../context/TUIChatActionContext.js";import"../../context/TUIMessageContext.js";import"../../context/ComponentContext.js";import"../../context/TUIMessageInputContext.js";import{PageStateTypes as C}from"./ConversationCreate.js";import{useConversation as x}from"../../hooks/useConversation.js";import{Toast as j}from"../Toast/index.js";function I(I){var g=this,N=I.isCreateGroup,k=I.selectList,b=I.setSelectList,A=I.className,S=I.conversationList,y=I.setIsCreateGroup,L=I.setConversationCreated,T=I.setPageState,D=a(""),w=D[0],E=D[1],U=f(),G=U.tim,M=U.setActiveConversation,R=a({}),F=R[0],P=R[1],z=v(G,S,(function(e){P(e)})).getFriendListSortSearchResult,H=x(G).createConversation,K=s(new Map);return o(i,{children:[c(u,{className:"tui-conversation-create-search-input",placeholder:"Search",clearable:!0,value:w,onChange:function(e){return t(g,void 0,void 0,(function(){var t,n;return r(this,(function(r){switch(r.label){case 0:return t=e.target.value,E(t),n=P,[4,z(t)];case 1:return n.apply(void 0,[r.sent()]),[2]}}))}))},prefix:c(l,{type:m.SEARCH,height:16,width:16})}),N&&c(p,{selectList:k,setSelectList:b}),!N&&o("div",e({role:"presentation",className:"tui-user",onClick:function(){y(!0),K.current.clear(),b([])}},{children:[c(l,{type:m.ADD}),c("div",e({className:"tui-user-name active"},{children:"New Group"}))]})),c("div",e({className:"tui-conversation-create ".concat(A)},{children:c("div",e({className:"tui-conversation-create-container"},{children:c("div",e({className:"tui-group-container"},{children:Object.keys(F).map((function(i){return 0!==F[i].length&&o("div",e({className:"tui-group-box"},{children:[c("div",e({className:"title"},{children:i})),F[i].map((function(a,s){var u=a.userID,l=a.nick,m=a.avatar;return o("label",e({role:"presentation",className:"tui-user tui-user-checkbox-label",htmlFor:"userChecked-".concat(i,"-").concat(u),onClick:function(e){!function(e){t(g,void 0,void 0,(function(){var t,n;return r(this,(function(r){switch(r.label){case 0:return N?[2]:(t=e.userID,[4,H("C2C".concat(t))]);case 1:return n=r.sent(),L(!1),M(n),[2]}}))}))}(a)}},{children:[c(h,{size:30,image:m||d}),c("div",e({className:"tui-user-name"},{children:l||"".concat(u)})),N&&c("input",{onChange:function(e){!function(e,t,r){void 0===r&&(r=[]);var o=t.userID,i=e.target.checked;r.forEach((function(e){e.checked=i})),i?k.push({profile:t,domList:r}):k.splice(k.findIndex((function(e){return e.profile.userID===o})),1),b(n([],k,!0))}(e,a,K.current.get(u))},type:"checkbox",ref:function(e){!function(e,t){if(t){K.current.has(e)||K.current.set(e,[]);var r=K.current.get(e);0!==r.length&&r.some((function(e){return e.id===t.id}))||r.push(t)}}(u,e)},id:"userChecked-".concat(i,"-").concat(u),className:"tui-user-checkbox"})]}),u)}))]}),i)}))}))}))})),N&&c("div",e({className:"tui-conversation-create-next-container"},{children:c("div",e({role:"presentation",className:"tui-conversation-create-next",onClick:function(){k&&0===k.length?j({text:"Participant cannot be empty.",type:"error"}):T(C.CREATE_DETAIL)}},{children:"Next"}))}))]})}export{I as ConversationCreateUserSelectList};