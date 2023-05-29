"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),s=require("tim-js-sdk"),n=require("../../constants.js"),t=require("../untils.js");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=r(s);exports.handleEditMessage=function(s,n){var t=e.__spreadArray([],s,!0),r=t.findIndex((function(e){return(null==e?void 0:e.ID)===(null==n?void 0:n.ID)}));return t[r]=n,t},exports.handleMessage=function(e){var s=null;return e.filter((function(e){var r;return e.type===i.default.TYPES.MSG_CUSTOM&&(s=t.JSONStringToParse(null===(r=null==e?void 0:e.payload)||void 0===r?void 0:r.data)),!s||(null==s?void 0:s.businessID)!==n.default.TYPE_TYPING}))},exports.handleMessageList=function(e,s){var n,t={messageList:[],lastMessageID:"",isSameLastMessageID:!1};return t.messageList=e,t.messageList.length>=1&&(t.lastMessageID=null===(n=null==t?void 0:t.messageList[t.messageList.length-1])||void 0===n?void 0:n.ID),t.messageList=t.messageList.filter((function(e){return!(null==e?void 0:e.isDeleted)})),t.isSameLastMessageID=(null==t?void 0:t.lastMessageID)===(null==s?void 0:s.lastMessageID),t},exports.handleRemoveMessage=function(s,n){var t=e.__spreadArray([],s,!0),r=t.findIndex((function(e){return(null==e?void 0:e.ID)===(null==n?void 0:n.ID)}));return t.splice(r,1),t},exports.handleUploadPenddingMessage=function(s,n){var t=e.__spreadArray([],s,!0);t.some((function(e){return e.ID===n.ID}))||t.push(n);var r=t.findIndex((function(e){return(null==e?void 0:e.ID)===(null==n?void 0:n.ID)}));return t[r]=n,t};
