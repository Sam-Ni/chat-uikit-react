import{__assign as t}from"tslib";import{jsx as e}from"react/jsx-runtime";import r from"react";import"../../constants.js";import"../../context/TUIMessageContext.js";import{useMessageContextHandler as o}from"./hooks/useMessageContextHandler.js";function s(r){var s=r.message,m=o({message:s}).context;return e("div",t({className:"bubble message-tip"},{children:m.text}))}var m=r.memo(s);function n(r){return e(m,t({},r))}export{n as MessageTip};
