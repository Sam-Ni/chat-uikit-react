"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),t=require("tim-js-sdk"),n=require("../context/TUIConversationContext.js");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=o(t);exports.useConversation=function(t){var o=n.useTUIConversationContext("useConversation");return{createConversation:o.createConversation||function(n){return e.__awaiter(void 0,void 0,void 0,(function(){var o,i,a,u,s,c,p,v,d,C,f,l,m,g,b;return e.__generator(this,(function(e){switch(e.label){case 0:return"string"!=typeof n?[3,2]:[4,t.getConversationProfile(n)];case 1:return[2,e.sent().data.conversation];case 2:return o=n.name,i=n.type,a=n.groupID,u=n.introduction,s=n.notification,c=n.avatar,p=n.maxMemberNum,v=n.joinOption,d=n.memberList,C=void 0===d?[]:d,f=n.groupCustomField,l=void 0===f?[]:f,m=n.isSupportTopic,[4,t.createGroup({name:o,type:i,groupID:a,introduction:u,notification:s,avatar:c,maxMemberNum:p,joinOption:v,memberList:C,groupCustomField:l,isSupportTopic:m})];case 3:return g=e.sent(),b=g.data.group.groupID,i!==r.default.TYPES.GRP_AVCHATROOM?[3,5]:[4,t.joinGroup({groupID:b,type:r.default.TYPES.GRP_AVCHATROOM})];case 4:e.sent(),e.label=5;case 5:return[4,t.getConversationProfile("GROUP".concat(b))];case 6:return[2,e.sent().data.conversation]}}))}))},pinConversation:function(e){return t.pinConversation(e)},deleteConversation:o.deleteConversation||function(e){return t.deleteConversation(e)}}};
