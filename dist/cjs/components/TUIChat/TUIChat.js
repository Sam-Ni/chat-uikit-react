"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),s=require("react"),t=require("react/jsx-runtime"),a=require("../../context/TUIKitContext.js"),r=require("../../context/TUIChatStateContext.js"),n=require("../../context/TUIChatActionContext.js"),i=require("../../context/ComponentContext.js"),o=require("./hooks/useCreateTUIChatStateContext.js"),u=require("../TUIMessage/TUIMessage.js");require("../TUIMessage/MessagePlugins.js"),require("../TUIMessage/MessageContext.js");var g=require("../../constants.js"),c=require("./hooks/useMessageReceviedListener.js"),M=require("./TUIChatState.js"),T=require("./hooks/useCreateMessage.js"),d=require("./hooks/useHandleMessageList.js"),I=require("./hooks/useHandleMessage.js"),l=require("../TUIChatHeader/TUIChatHeader.js");require("../TUIChatHeader/TUIChatHeaderDefault.js");var C=require("../TUIMessageList/TUIMessageList.js"),_=require("../TUIMessageInput/TUIMessageInput.js");require("../../context/TUIMessageContext.js"),require("../../context/TUIMessageInputContext.js"),require("../Icon/config.js"),require("../Icon/type.js"),require("../Plugins/index.js");var v=require("../EmptyStateIndicator/EmptyStateIndicator.js"),S=require("../Toast/index.js");function h(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function p(a){var v=this,h=a.tim,p=a.conversation,x=a.className,m=a.children,E=a.TUIMessage,U=a.TUIChatHeader,j=a.TUIMessageInput,f=a.InputPlugins,q=a.MessagePlugins,P=a.MessageContext,A=a.InputQuote,L=a.onMessageRecevied,H=a.sendMessage,N=a.revokeMessage,y=a.messageConfig,D=a.cloudCustomData,R=a.TUIMessageInputConfig,O=a.TUIMessageListConfig,w=a.onlyMessageList,Y=void 0!==w&&w,b=s.useReducer(M.chatReducer,e.__assign(e.__assign({},M.initialState),{conversation:p})),k=b[0],F=b[1],G=s.useRef(null),Q=s.useRef(),V=o(e.__assign({tim:h,conversation:p,messageListRef:G,textareaRef:Q,messageConfig:y,cloudCustomData:D,TUIMessageInputConfig:R,TUIMessageListConfig:O},k)),K=T.useCreateMessage({tim:h,conversation:p,cloudCustomData:D}),X=K.createTextMessage,z=K.createFaceMessage,B=K.createImageMessage,J=K.createVideoMessage,W=K.createFileMessage,Z=K.createForwardMessage,$=K.createCustomMessage,ee=K.createAudioMessage,se=K.createTextAtMessage,te=K.createLocationMessage,ae=K.createMergerMessage,re=d.useHandleMessageList({tim:h,conversation:p,state:k,dispatch:F}),ne=re.getMessageList,ie=re.updateMessage,oe=re.editLocalmessage,ue=re.removeMessage,ge=re.updataUploadPenddingMessageList,ce=I.useHandleMessage({state:k,dispatch:F}),Me=ce.operateMessage,Te=ce.setAudioSource,de=ce.setVideoSource,Ie=ce.setHighlightedMessageId,le=function(s,t){return e.__awaiter(v,void 0,void 0,(function(){var a;return e.__generator(this,(function(e){switch(e.label){case 0:ie([s]),e.label=1;case 1:return e.trys.push([1,6,,7]),H?[4,H(s,t)]:[3,3];case 2:return e.sent(),[3,5];case 3:return[4,h.sendMessage(s,t)];case 4:e.sent(),e.label=5;case 5:return oe(s),[3,7];case 6:throw a=e.sent(),S.Toast({text:a,type:"error"}),oe(s),new Error(a);case 7:return[2]}}))}))},Ce=function(){return e.__awaiter(v,void 0,void 0,(function(){var s;return e.__generator(this,(function(e){switch(e.label){case 0:return k.isCompleted?(F({type:g.CONSTANT_DISPATCH_TYPE.SET_NO_MORE,value:!0}),[2]):[4,ne({nextReqMessageID:k.nextReqMessageID})];case 1:return s=e.sent(),F({type:g.CONSTANT_DISPATCH_TYPE.SET_HISTORY_MESSAGELIST,value:s.data.messageList}),F({type:g.CONSTANT_DISPATCH_TYPE.SET_IS_COMPLETE,value:s.data.isCompleted}),F({type:g.CONSTANT_DISPATCH_TYPE.SET_NEXT_REQ_MESSAGE_ID,value:s.data.nextReqMessageID}),[2]}}))}))};c.useMessageReceviedListener(ie,L),s.useEffect((function(){e.__awaiter(v,void 0,void 0,(function(){var s;return e.__generator(this,(function(e){switch(e.label){case 0:return[4,ne()];case 1:return(s=e.sent()).data.messageList.length>0&&F({type:g.CONSTANT_DISPATCH_TYPE.SET_MESSAGELIST,value:s.data.messageList}),F({type:g.CONSTANT_DISPATCH_TYPE.SET_MESSAGELIST,value:s.data.messageList}),F({type:g.CONSTANT_DISPATCH_TYPE.SET_IS_COMPLETE,value:s.data.isCompleted}),F({type:g.CONSTANT_DISPATCH_TYPE.SET_NEXT_REQ_MESSAGE_ID,value:s.data.nextReqMessageID}),[2]}}))}))}),[p]);var _e=s.useMemo((function(){return{sendMessage:le,removeMessage:ue,updateMessage:ie,createTextMessage:X,createFaceMessage:z,createImageMessage:B,createVideoMessage:J,createFileMessage:W,createForwardMessage:Z,createCustomMessage:$,createAudioMessage:ee,createTextAtMessage:se,createLocationMessage:te,createMergerMessage:ae,editLocalmessage:oe,operateMessage:Me,loadMore:Ce,revokeMessage:N,setAudioSource:Te,setVideoSource:de,setHighlightedMessageId:Ie,updataUploadPenddingMessageList:ge}}),[le,ue,ie,X,z,B,J,W,Z,$,ee,se,te,ae,oe,Me,Ce,N,Te,de,Ie,ge]),ve=s.useMemo((function(){return{TUIMessage:E||u.TUIMessage,MessageContext:P,InputPlugins:f,MessagePlugins:q,TUIChatHeader:U,TUIMessageInput:j,InputQuote:A}}),[]);return t.jsx("div",e.__assign({className:"chat ".concat(x)},{children:t.jsx(r.TUIChatStateContextProvider,e.__assign({value:V},{children:t.jsx(n.TUIChatActionProvider,e.__assign({value:_e},{children:t.jsx(i.ComponentProvider,e.__assign({value:ve},{children:m||(Y?t.jsxs(t.Fragment,{children:[" ",t.jsx(C.TUIMessageList,{})," "]}):t.jsxs(t.Fragment,{children:[t.jsx(l.TUIChatHeader,{}),t.jsx(C.TUIMessageList,{}),t.jsx(_.TUIMessageInput,{})]}))}))}))}))}))}var x=h(s).default.memo((function(r){var n=r.conversation,i=r.EmptyPlaceholder,o=void 0===i?t.jsx(v.EmptyStateIndicator,{listType:"chat"}):i,u=a.useTUIKitContext("TUIChat"),g=u.conversation,c=u.tim,M=n||g;return(null==M?void 0:M.conversationID)?s.createElement(p,e.__assign({tim:c},r,{conversation:M,key:M.conversationID})):o}));exports.TUIChat=x;
