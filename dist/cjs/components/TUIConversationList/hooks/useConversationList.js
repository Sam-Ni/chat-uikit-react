"use strict";var e=require("tslib"),t=require("react");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=r(require("tim-js-sdk"));module.exports=function(r,a,i){var o=this,s=t.useState([]),u=s[0],d=s[1];return t.useEffect((function(){var t;t="reload",e.__awaiter(o,void 0,void 0,(function(){var o,s,c,l;return e.__generator(this,(function(v){switch(v.label){case 0:return"reload"===t&&d([]),o="reload"===t?0:u.length,[4,null==r?void 0:r.getConversationList()];case 1:return 0===(null==(s=v.sent())?void 0:s.code)&&(c=[],c=i?i(s.data.conversationList):s.data.conversationList.filter((function(e){return e.type!==n.default.TYPES.CONV_SYSTEM})),l="reload"===t?c:e.__spreadArray(e.__spreadArray([],u,!0),[c],!1),d(l),!o&&a&&a(l,d)),[2]}}))}))}),[r]),{conversationList:u,setConversationList:d}};
