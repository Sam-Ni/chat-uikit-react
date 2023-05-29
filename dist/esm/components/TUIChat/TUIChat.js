import{__assign as e,__awaiter as t,__generator as s}from"tslib";import a,{createElement as o,useReducer as r,useRef as n,useEffect as i,useMemo as c}from"react";import{jsx as g,jsxs as u,Fragment as m}from"react/jsx-runtime";import{useTUIKitContext as M}from"../../context/TUIKitContext.js";import{TUIChatStateContextProvider as d}from"../../context/TUIChatStateContext.js";import{TUIChatActionProvider as p}from"../../context/TUIChatActionContext.js";import{ComponentProvider as I}from"../../context/ComponentContext.js";import l from"./hooks/useCreateTUIChatStateContext.js";import{TUIMessage as T}from"../TUIMessage/TUIMessage.js";import"../TUIMessage/MessagePlugins.js";import"../TUIMessage/MessageContext.js";import{CONSTANT_DISPATCH_TYPE as f}from"../../constants.js";import{useMessageReceviedListener as v}from"./hooks/useMessageReceviedListener.js";import{chatReducer as h,initialState as C}from"./TUIChatState.js";import{useCreateMessage as S}from"./hooks/useCreateMessage.js";import{useHandleMessageList as U}from"./hooks/useHandleMessageList.js";import{useHandleMessage as E}from"./hooks/useHandleMessage.js";import{TUIChatHeader as x}from"../TUIChatHeader/TUIChatHeader.js";import"../TUIChatHeader/TUIChatHeaderDefault.js";import{TUIMessageList as j}from"../TUIMessageList/TUIMessageList.js";import{TUIMessageInput as L}from"../TUIMessageInput/TUIMessageInput.js";import"../../context/TUIMessageContext.js";import"../../context/TUIMessageInputContext.js";import"../Icon/config.js";import"../Icon/type.js";import"../Plugins/index.js";import{EmptyStateIndicator as _}from"../EmptyStateIndicator/EmptyStateIndicator.js";import{Toast as y}from"../Toast/index.js";function A(a){var o=this,M=a.tim,_=a.conversation,A=a.className,D=a.children,R=a.TUIMessage,H=a.TUIChatHeader,P=a.TUIMessageInput,k=a.InputPlugins,w=a.MessagePlugins,b=a.MessageContext,F=a.InputQuote,G=a.onMessageRecevied,N=a.sendMessage,O=a.revokeMessage,q=a.messageConfig,Q=a.cloudCustomData,V=a.TUIMessageInputConfig,X=a.TUIMessageListConfig,K=r(h,e(e({},C),{conversation:_})),Y=K[0],z=K[1],B=n(null),J=n(),W=l(e({tim:M,conversation:_,messageListRef:B,textareaRef:J,messageConfig:q,cloudCustomData:Q,TUIMessageInputConfig:V,TUIMessageListConfig:X},Y)),Z=S({tim:M,conversation:_,cloudCustomData:Q}),$=Z.createTextMessage,ee=Z.createFaceMessage,te=Z.createImageMessage,se=Z.createVideoMessage,ae=Z.createFileMessage,oe=Z.createForwardMessage,re=Z.createCustomMessage,ne=Z.createAudioMessage,ie=Z.createTextAtMessage,ce=Z.createLocationMessage,ge=Z.createMergerMessage,ue=U({tim:M,conversation:_,state:Y,dispatch:z}),me=ue.getMessageList,Me=ue.updateMessage,de=ue.editLocalmessage,pe=ue.removeMessage,Ie=ue.updataUploadPenddingMessageList,le=E({state:Y,dispatch:z}),Te=le.operateMessage,fe=le.setAudioSource,ve=le.setVideoSource,he=le.setHighlightedMessageId,Ce=function(e,a){return t(o,void 0,void 0,(function(){var t;return s(this,(function(s){switch(s.label){case 0:Me([e]),s.label=1;case 1:return s.trys.push([1,6,,7]),N?[4,N(e,a)]:[3,3];case 2:return s.sent(),[3,5];case 3:return[4,M.sendMessage(e,a)];case 4:s.sent(),s.label=5;case 5:return de(e),[3,7];case 6:throw t=s.sent(),y({text:t,type:"error"}),de(e),new Error(t);case 7:return[2]}}))}))},Se=function(){return t(o,void 0,void 0,(function(){var e;return s(this,(function(t){switch(t.label){case 0:return Y.isCompleted?(z({type:f.SET_NO_MORE,value:!0}),[2]):[4,me({nextReqMessageID:Y.nextReqMessageID})];case 1:return e=t.sent(),z({type:f.SET_HISTORY_MESSAGELIST,value:e.data.messageList}),z({type:f.SET_IS_COMPLETE,value:e.data.isCompleted}),z({type:f.SET_NEXT_REQ_MESSAGE_ID,value:e.data.nextReqMessageID}),[2]}}))}))};v(Me,G),i((function(){t(o,void 0,void 0,(function(){var e;return s(this,(function(t){switch(t.label){case 0:return[4,me()];case 1:return(e=t.sent()).data.messageList.length>0&&z({type:f.SET_MESSAGELIST,value:e.data.messageList}),z({type:f.SET_MESSAGELIST,value:e.data.messageList}),z({type:f.SET_IS_COMPLETE,value:e.data.isCompleted}),z({type:f.SET_NEXT_REQ_MESSAGE_ID,value:e.data.nextReqMessageID}),[2]}}))}))}),[_]);var Ue=c((function(){return{sendMessage:Ce,removeMessage:pe,updateMessage:Me,createTextMessage:$,createFaceMessage:ee,createImageMessage:te,createVideoMessage:se,createFileMessage:ae,createForwardMessage:oe,createCustomMessage:re,createAudioMessage:ne,createTextAtMessage:ie,createLocationMessage:ce,createMergerMessage:ge,editLocalmessage:de,operateMessage:Te,loadMore:Se,revokeMessage:O,setAudioSource:fe,setVideoSource:ve,setHighlightedMessageId:he,updataUploadPenddingMessageList:Ie}}),[Ce,pe,Me,$,ee,te,se,ae,oe,re,ne,ie,ce,ge,de,Te,Se,O,fe,ve,he,Ie]),Ee=c((function(){return{TUIMessage:R||T,MessageContext:b,InputPlugins:k,MessagePlugins:w,TUIChatHeader:H,TUIMessageInput:P,InputQuote:F}}),[]);return g("div",e({className:"chat ".concat(A)},{children:g(d,e({value:W},{children:g(p,e({value:Ue},{children:g(I,e({value:Ee},{children:D||u(m,{children:[g(x,{}),g(j,{}),g(L,{})]})}))}))}))}))}var D=a.memo((function(t){var s=t.conversation,a=t.EmptyPlaceholder,r=void 0===a?g(_,{listType:"chat"}):a,n=M("TUIChat"),i=n.conversation,c=n.tim,u=s||i;return(null==u?void 0:u.conversationID)?o(A,e({tim:c},t,{conversation:u,key:u.conversationID})):r}));export{D as TUIChat};
