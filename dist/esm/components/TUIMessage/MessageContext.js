import{__assign as e}from"tslib";import{jsx as s}from"react/jsx-runtime";import t from"react";import o from"tim-js-sdk";import{MessageAudio as m}from"./MessageAudio.js";import{MessageCustom as r}from"./MessageCustom.js";import{MessageFace as E}from"./MessageFace.js";import{MessageFile as M}from"./MessageFile.js";import{MessageImage as S}from"./MessageImage.js";import{MessageLocation as i}from"./MessageLocation.js";import{MessageMerger as a}from"./MessageMerger.js";import{MessageText as n}from"./MessageText.js";import{MessageVideo as T}from"./MessageVideo.js";import"../../constants.js";import{useTUIMessageContext as G}from"../../context/TUIMessageContext.js";import{useMessageContextHandler as g}from"./hooks/useMessageContextHandler.js";import{MessageStatus as p}from"./MessageStatus.js";var f,l=((f={})[o.TYPES.MSG_TEXT]=n,f[o.TYPES.MSG_FACE]=E,f[o.TYPES.MSG_IMAGE]=S,f[o.TYPES.MSG_AUDIO]=m,f[o.TYPES.MSG_VIDEO]=T,f[o.TYPES.MSG_FILE]=M,f[o.TYPES.MSG_CUSTOM]=r,f[o.TYPES.MSG_MERGER]=a,f[o.TYPES.MSG_LOCATION]=i,f);function P(t){var m,r=t.message,E=g({message:r}).context,M=G("MessageCustom"),S=M.CustemElement,i=M.TextElement,a=M.FaceElement,n=M.ImageElement,T=M.AudioElement,f=M.VideoElement,P=M.FileElement,Y=M.MergerElement,_=M.LocationElement,j=((m={})[o.TYPES.MSG_TEXT]=i,m[o.TYPES.MSG_FACE]=a,m[o.TYPES.MSG_IMAGE]=n,m[o.TYPES.MSG_AUDIO]=T,m[o.TYPES.MSG_VIDEO]=f,m[o.TYPES.MSG_FILE]=P,m[o.TYPES.MSG_CUSTOM]=S,m[o.TYPES.MSG_MERGER]=Y,m[o.TYPES.MSG_LOCATION]=_,m)[null==r?void 0:r.type]||l[null==r?void 0:r.type];return j&&s(j,e({context:E,message:r},{children:s(p,{message:r})}))}var Y=t.memo(P);function _(t){return s(Y,e({},t))}export{_ as MessageContext};
