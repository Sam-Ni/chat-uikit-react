import{__assign as e,__awaiter as s,__generator as t}from"tslib";import a,{createElement as o,useReducer as r,useRef as n,useEffect as i,useMemo as c}from"react";import{jsx as g,jsxs as u,Fragment as m}from"react/jsx-runtime";import{useTUIKitContext as M}from"../../context/TUIKitContext.js";import{TUIChatStateContextProvider as d}from"../../context/TUIChatStateContext.js";import{TUIChatActionProvider as p}from"../../context/TUIChatActionContext.js";import{ComponentProvider as l}from"../../context/ComponentContext.js";import I from"./hooks/useCreateTUIChatStateContext.js";import{TUIMessage as T}from"../TUIMessage/TUIMessage.js";import"../TUIMessage/MessagePlugins.js";import"../TUIMessage/MessageContext.js";import{CONSTANT_DISPATCH_TYPE as v}from"../../constants.js";import{useMessageReceviedListener as f}from"./hooks/useMessageReceviedListener.js";import{chatReducer as h,initialState as C}from"./TUIChatState.js";import{useCreateMessage as S}from"./hooks/useCreateMessage.js";import{useHandleMessageList as U}from"./hooks/useHandleMessageList.js";import{useHandleMessage as E}from"./hooks/useHandleMessage.js";import{TUIChatHeader as x}from"../TUIChatHeader/TUIChatHeader.js";import"../TUIChatHeader/TUIChatHeaderDefault.js";import{TUIMessageList as j}from"../TUIMessageList/TUIMessageList.js";import{TUIMessageInput as L}from"../TUIMessageInput/TUIMessageInput.js";import"../../context/TUIMessageContext.js";import"../../context/TUIMessageInputContext.js";import"../Icon/config.js";import"../Icon/type.js";import"../Plugins/index.js";import{EmptyStateIndicator as _}from"../EmptyStateIndicator/EmptyStateIndicator.js";import{Toast as y}from"../Toast/index.js";function A(a){var o=this,M=a.tim,_=a.conversation,A=a.className,D=a.children,R=a.TUIMessage,H=a.TUIChatHeader,P=a.TUIMessageInput,k=a.InputPlugins,w=a.MessagePlugins,b=a.MessageContext,F=a.InputQuote,G=a.onMessageRecevied,N=a.sendMessage,O=a.revokeMessage,q=a.messageConfig,Q=a.cloudCustomData,V=a.TUIMessageInputConfig,X=a.TUIMessageListConfig,K=a.onlyMessageList,Y=void 0!==K&&K,z=r(h,e(e({},C),{conversation:_})),B=z[0],J=z[1],W=n(null),Z=n(),$=I(e({tim:M,conversation:_,messageListRef:W,textareaRef:Z,messageConfig:q,cloudCustomData:Q,TUIMessageInputConfig:V,TUIMessageListConfig:X},B)),ee=S({tim:M,conversation:_,cloudCustomData:Q}),se=ee.createTextMessage,te=ee.createFaceMessage,ae=ee.createImageMessage,oe=ee.createVideoMessage,re=ee.createFileMessage,ne=ee.createForwardMessage,ie=ee.createCustomMessage,ce=ee.createAudioMessage,ge=ee.createTextAtMessage,ue=ee.createLocationMessage,me=ee.createMergerMessage,Me=U({tim:M,conversation:_,state:B,dispatch:J}),de=Me.getMessageList,pe=Me.updateMessage,le=Me.editLocalmessage,Ie=Me.removeMessage,Te=Me.updataUploadPenddingMessageList,ve=E({state:B,dispatch:J}),fe=ve.operateMessage,he=ve.setAudioSource,Ce=ve.setVideoSource,Se=ve.setHighlightedMessageId,Ue=function(e,a){return s(o,void 0,void 0,(function(){var s;return t(this,(function(t){switch(t.label){case 0:pe([e]),t.label=1;case 1:return t.trys.push([1,6,,7]),N?[4,N(e,a)]:[3,3];case 2:return t.sent(),[3,5];case 3:return[4,M.sendMessage(e,a)];case 4:t.sent(),t.label=5;case 5:return le(e),[3,7];case 6:throw s=t.sent(),y({text:s,type:"error"}),le(e),new Error(s);case 7:return[2]}}))}))},Ee=function(){return s(o,void 0,void 0,(function(){var e;return t(this,(function(s){switch(s.label){case 0:return B.isCompleted?(J({type:v.SET_NO_MORE,value:!0}),[2]):[4,de({nextReqMessageID:B.nextReqMessageID})];case 1:return e=s.sent(),J({type:v.SET_HISTORY_MESSAGELIST,value:e.data.messageList}),J({type:v.SET_IS_COMPLETE,value:e.data.isCompleted}),J({type:v.SET_NEXT_REQ_MESSAGE_ID,value:e.data.nextReqMessageID}),[2]}}))}))};f(pe,G),i((function(){s(o,void 0,void 0,(function(){var e;return t(this,(function(s){switch(s.label){case 0:return[4,de()];case 1:return(e=s.sent()).data.messageList.length>0&&J({type:v.SET_MESSAGELIST,value:e.data.messageList}),J({type:v.SET_MESSAGELIST,value:e.data.messageList}),J({type:v.SET_IS_COMPLETE,value:e.data.isCompleted}),J({type:v.SET_NEXT_REQ_MESSAGE_ID,value:e.data.nextReqMessageID}),[2]}}))}))}),[_]);var xe=c((function(){return{sendMessage:Ue,removeMessage:Ie,updateMessage:pe,createTextMessage:se,createFaceMessage:te,createImageMessage:ae,createVideoMessage:oe,createFileMessage:re,createForwardMessage:ne,createCustomMessage:ie,createAudioMessage:ce,createTextAtMessage:ge,createLocationMessage:ue,createMergerMessage:me,editLocalmessage:le,operateMessage:fe,loadMore:Ee,revokeMessage:O,setAudioSource:he,setVideoSource:Ce,setHighlightedMessageId:Se,updataUploadPenddingMessageList:Te}}),[Ue,Ie,pe,se,te,ae,oe,re,ne,ie,ce,ge,ue,me,le,fe,Ee,O,he,Ce,Se,Te]),je=c((function(){return{TUIMessage:R||T,MessageContext:b,InputPlugins:k,MessagePlugins:w,TUIChatHeader:H,TUIMessageInput:P,InputQuote:F}}),[]);return g("div",e({className:"chat ".concat(A)},{children:g(d,e({value:$},{children:g(p,e({value:xe},{children:g(l,e({value:je},{children:D||u(m,Y?{children:[" ",g(j,{})," "]}:{children:[g(x,{}),g(j,{}),g(L,{})]})}))}))}))}))}var D=a.memo((function(s){var t=s.conversation,a=s.EmptyPlaceholder,r=void 0===a?g(_,{listType:"chat"}):a,n=M("TUIChat"),i=n.conversation,c=n.tim,u=t||i;return(null==u?void 0:u.conversationID)?o(A,e({tim:c},s,{conversation:u,key:u.conversationID})):r}));export{D as TUIChat};
