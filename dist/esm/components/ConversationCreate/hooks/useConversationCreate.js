import{__awaiter as t,__generator as e}from"tslib";import{useState as r,useEffect as o}from"react";import n from"tim-js-sdk";import{strChineseFirstPy as i}from"../static/word.js";import"react/jsx-runtime";import"../../../context/TUIMessageContext.js";import"../../Icon/config.js";import"../../Icon/type.js";import"date-fns";import"../ConversationCreate.js";import"../ConversationGroupTypeInfo.js";import"../../TUIProfile/TUIProfileDefault.js";import"../../../constants.js";import"../../TUIMessage/hooks/useMessageReply.js";import"../../TUIMessage/MessagePlugins.js";import"../../TUIMessage/MessageContext.js";import"../../TUIMessageInput/hooks/useHandleQuoteMessage.js";import"../../Switch/Switch.js";import{useProfile as s}from"../../../hooks/useProfile.js";var u=function(u,c,a){var f=r({}),p=f[0],m=f[1],l=function(t){var e=t.trim(),r=e.charCodeAt(0);return r>40869||r<19968?e.charAt(0):i.charAt(r-19968)},d=function(){return t(void 0,void 0,void 0,(function(){var t,r,o,i,s;return e(this,(function(e){switch(e.label){case 0:return t=c.filter((function(t){return t.type===n.TYPES.CONV_C2C})).slice(0,5).map((function(t){return t.userProfile})),[4,u.getFriendList()];case 1:return r=e.sent(),o=r.code,i=r.data,0===o&&(s=v(i.map((function(t){return t.profile})),t),m(s),a&&a(s,m)),[2]}}))}))},v=function(t,e){void 0===e&&(e=[]);for(var r={"Frequently Contacted":e,"#":[]},o=65;o<=90;o+=1)r[String.fromCharCode(o)]=[];return t.forEach((function(t){var e=t.nick,o=t.userID,n=l(e||o);n>="a"&&n<="z"?r[n.toLocaleUpperCase()].push(t):n<"A"||n>"z"?r["#"].push(t):r[n].push(t)})),Object.keys(r).forEach((function(t){r[t].sort((function(t,e){var r=t.nick,o=t.userID,n=e.nick,i=e.userID;return r||o<n||i||r||o===n||i?1:-1}))})),r},h=s(u).getUserProfile;return o((function(){d()}),[u]),{getFirstLetter:l,queryFriendList:d,getFriendListSortSearchResult:function(r){return t(void 0,void 0,void 0,(function(){var t,o,n,i;return e(this,(function(e){switch(e.label){case 0:return r?[4,h([r])]:[2,p];case 1:return t=e.sent().data,o={},n=!1,Object.keys(p).forEach((function(t){o[t]=p[t].filter((function(t){var e=t.nick,o=t.userID,i=e.toLocaleLowerCase(),s=r.toLocaleLowerCase(),u=i?i.includes(s):o.includes(s);return n=n||u,u}))})),"TencentCloudDemo"===(null===(i=process.env)||void 0===i?void 0:i.REACT_APP_ONLINE)?[2,o]:[2,n?o:v(t)]}}))}))},friendListSortResult:p}};export{u as useConversationCreate};
