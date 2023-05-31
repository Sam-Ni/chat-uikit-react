import{useState as t,useEffect as e}from"react";import o from"tim-js-sdk";import{MESSAGE_OPERATE as n}from"../../../constants.js";import"../../../context/TUIKitContext.js";import{useTUIChatStateContext as s}from"../../../context/TUIChatStateContext.js";import"../../../context/TUIChatActionContext.js";import"../../../context/TUIMessageContext.js";import"../../../context/ComponentContext.js";import"../../../context/TUIMessageInputContext.js";var a,S,i=((a={})[o.TYPES.MSG_TEXT]=1,a[o.TYPES.MSG_CUSTOM]=2,a[o.TYPES.MSG_IMAGE]=3,a[o.TYPES.MSG_AUDIO]=4,a[o.TYPES.MSG_VIDEO]=5,a[o.TYPES.MSG_FILE]=6,a[o.TYPES.MSG_FACE]=8,a),T=((S={})[o.TYPES.MSG_CUSTOM]="[custom]",S[o.TYPES.MSG_IMAGE]="[image]",S[o.TYPES.MSG_AUDIO]="[audio]",S[o.TYPES.MSG_VIDEO]="[video]",S[o.TYPES.MSG_FILE]="[file]",S[o.TYPES.MSG_FACE]="[face]",S);function r(a){var S=s("TUIMessageInputDefault").operateData,r=t({messageReply:null}),l=r[0],m=r[1],E=function(t){var e,n=i[null==t?void 0:t.type];return{messageAbstract:(null==t?void 0:t.type)===o.TYPES.MSG_TEXT?null===(e=null==t?void 0:t.payload)||void 0===e?void 0:e.text:T[null==t?void 0:t.type],messageSender:(null==t?void 0:t.nick)||(null==t?void 0:t.from),messageID:null==t?void 0:t.ID,messageType:n,version:1}};return e((function(){var t=a||S[n.QUOTE];m({messageReply:t?E(t):null})}),[S,a]),{cloudCustomData:l,handleQuoteMessage:E,message:a||S[n.QUOTE]}}export{r as useHandleQuoteMessage};
