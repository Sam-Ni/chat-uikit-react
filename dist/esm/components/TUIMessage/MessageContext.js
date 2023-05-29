import{__assign as e}from"tslib";import{jsx as t}from"react/jsx-runtime";import o from"react";import s from"tim-js-sdk";import{MessageAudio as m}from"./MessageAudio.js";import{MessageCustom as r}from"./MessageCustom.js";import{MessageFace as n}from"./MessageFace.js";import{MessageFile as E}from"./MessageFile.js";import{MessageImage as i}from"./MessageImage.js";import{MessageLocation as M}from"./MessageLocation.js";import{MessageMerger as S}from"./MessageMerger.js";import{MessageText as a}from"./MessageText.js";import{MessageVideo as T}from"./MessageVideo.js";import"../../constants.js";import"../../context/TUIKitContext.js";import"../../context/TUIChatStateContext.js";import"../../context/TUIChatActionContext.js";import{useTUIMessageContext as p}from"../../context/TUIMessageContext.js";import"../../context/ComponentContext.js";import"../../context/TUIMessageInputContext.js";import{useMessageContextHandler as g}from"./hooks/useMessageContextHandler.js";import{MessageStatus as G}from"./MessageStatus.js";var j,c=((j={})[s.TYPES.MSG_TEXT]=a,j[s.TYPES.MSG_FACE]=n,j[s.TYPES.MSG_IMAGE]=i,j[s.TYPES.MSG_AUDIO]=m,j[s.TYPES.MSG_VIDEO]=T,j[s.TYPES.MSG_FILE]=E,j[s.TYPES.MSG_CUSTOM]=r,j[s.TYPES.MSG_MERGER]=S,j[s.TYPES.MSG_LOCATION]=M,j);var x=o.memo((function(o){var m,r=o.message,n=g({message:r}).context,E=p("MessageCustom"),i=E.CustemElement,M=E.TextElement,S=E.FaceElement,a=E.ImageElement,T=E.AudioElement,j=E.VideoElement,x=E.FileElement,C=E.MergerElement,f=E.LocationElement,l=((m={})[s.TYPES.MSG_TEXT]=M,m[s.TYPES.MSG_FACE]=S,m[s.TYPES.MSG_IMAGE]=a,m[s.TYPES.MSG_AUDIO]=T,m[s.TYPES.MSG_VIDEO]=j,m[s.TYPES.MSG_FILE]=x,m[s.TYPES.MSG_CUSTOM]=i,m[s.TYPES.MSG_MERGER]=C,m[s.TYPES.MSG_LOCATION]=f,m)[null==r?void 0:r.type]||c[null==r?void 0:r.type];return l&&t(l,e({context:n,message:r},{children:t(G,{message:r})}))}));function C(o){return t(x,e({},o))}export{C as MessageContext};