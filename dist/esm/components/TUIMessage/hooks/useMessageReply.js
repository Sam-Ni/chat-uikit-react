import{useState as e,useLayoutEffect as t}from"react";import s from"tim-js-sdk";import{useTUIKitContext as o}from"../../../context/TUIKitContext.js";import{useTUIChatStateContext as a}from"../../../context/TUIChatStateContext.js";import"tslib";import"react/jsx-runtime";import"../../../context/TUIMessageContext.js";import{JSONStringToParse as r}from"../../untils.js";var i,m=((i={})[s.TYPES.MSG_TEXT]=1,i[s.TYPES.MSG_FACE]=8,i[s.TYPES.MSG_IMAGE]=3,i[s.TYPES.MSG_AUDIO]=4,i[s.TYPES.MSG_VIDEO]=5,i[s.TYPES.MSG_FILE]=6,i[s.TYPES.MSG_CUSTOM]=2,i),n=function(i){var n=i.message,l=e(null),u=l[0],S=l[1],T=e(""),p=T[0],g=T[1],d=e(null),E=d[0],M=d[1],f=e(""),v=f[0],I=f[1],c=o("TUIChat").tim,x=a("useMessageReply").messageList;t((function(){C(n)}),[n]);var C=function(e){if(null==e?void 0:e.cloudCustomData){var t=r(null==n?void 0:n.cloudCustomData),o=(null==t?void 0:t.messageReply)||"";if(o){S(o),g(null==o?void 0:o.messageSender),I(null==o?void 0:o.messageID);var a=x.filter((function(e){var t=e.ID===(null==o?void 0:o.messageID),a=t&&m[e.type]===o.messageType,r=e.type!==s.TYPES.MSG_TEXT||e.payload.text===o.messageAbstract;return t&&a&&r}));M(a[0]||c.findMessage(null==o?void 0:o.messageID))}}};return{messageReply:u,sender:p,replyMessage:E,messageID:v,message:n}};export{n as useMessageReply};
