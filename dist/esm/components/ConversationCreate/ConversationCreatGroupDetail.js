import{__spreadArray as e,__assign as t,__awaiter as r,__generator as a}from"tslib";import{jsxs as o,Fragment as i,jsx as n}from"react/jsx-runtime";import{useState as c}from"react";import{Input as s}from"../Input/Input.js";import{Icon as u}from"../Icon/Icon.js";import{IconTypes as p}from"../Icon/type.js";import{Avatar as l}from"../Avatar/Avatar.js";import{defaultUserAvatar as m,defaultGroupAvatarAVChatRoom as d,defaultGroupAvatarMeeting as f,defaultGroupAvatarPublic as v,defaultGroupAvatarWork as g}from"../Avatar/default.js";import{PageStateTypes as h}from"./ConversationCreate.js";import{ConversationGroupTypeInfo as C,typeInfoList as N,GroupType as x}from"./ConversationGroupTypeInfo.js";import{useTUIKitContext as b}from"../../context/TUIKitContext.js";import"../../context/TUIMessageContext.js";function I(I){var y=this,j=I.profileList,k=I.pageState,P=I.setPageState,G=I.createConversation,T=I.setConversationCreated,A=b(),R=A.setActiveConversation,w=A.myProfile,D=e([],j,!0);D.unshift(w);var S=D.map((function(e){return e.nick||e.userID})).toString(),U=c(S.length>=15?"".concat(S.slice(0,12),"..."):S),O=U[0],W=U[1],_=c(""),E=_[0],L=_[1],M=c("Work"),Y=M[0],q=M[1],z=function(e,t){var r=e.target.value;switch(t){case"name":W(r);break;case"id":L(r);break;case"type":q(r)}};return k!==h.GROUP_TYPE?o(i,{children:[o("div",t({className:"tui-conversation-create-group-detail"},{children:[n("div",t({className:"create-group-box create-group-name"},{children:n(s,{maxLength:15,value:O,onChange:function(e){z(e,"name")},border:"bottom",customClassName:"input-group-name",clearable:!0,prefix:n("div",t({className:"input-group-title"},{children:"Group Name"}))})})),n("div",t({className:"create-group-box create-group-id"},{children:n(s,{border:"bottom",customClassName:"input-group-text",clearable:!0,value:E,onChange:function(e){z(e,"id")},prefix:n("div",t({className:"input-group-title"},{children:"Group ID"}))})})),n("div",t({className:"create-group-box create-group-type"},{children:n(s,{disabled:!0,border:"bottom",customClassName:"input-group-text",prefix:n("div",t({className:"input-group-title"},{children:"Group of type"})),suffix:n(u,{onClick:function(){P(h.GROUP_TYPE)},type:p.ARROW_RIGHT,width:7,height:12}),value:Y,onChange:function(e){z(e,"type")}})})),n("div",t({className:"create-group-illustrate"},{children:N.find((function(e){return e.type===Y})).des})),o("div",t({className:"create-group-portrait"},{children:[n("div",t({className:"create-group-portrait-title"},{children:"Participants"})),n("div",t({className:"create-group-portrait-info-container"},{children:j.map((function(e){var r=e.avatar,a=e.userID,i=e.nick;return o("div",t({className:"create-group-portrait-info"},{children:[n(l,{shape:"square",size:50,image:r||m}),n("div",t({className:"create-group-portrait-info-nick"},{children:i}))]}),a)}))}))]}))]})),n("div",t({className:"tui-conversation-create-next-container"},{children:n("div",t({role:"presentation",className:"tui-conversation-create-next",onClick:function(){return r(y,void 0,void 0,(function(){var e,t;return a(this,(function(r){switch(r.label){case 0:return e=function(e){switch(e){case"Work":return g;case"Public":return v;case"Meeting":return f;case"AVChatRoom":return d;default:return""}}(Y),[4,G({name:O,type:x[Y],groupID:E,avatar:e})];case 1:return t=r.sent(),R(t),T(!1),[2]}}))}))}},{children:"Create"}))}))]}):n(C,{groupType:Y,setGroupType:q,setPageState:P})}export{I as ConversationCreatGroupDetail};
