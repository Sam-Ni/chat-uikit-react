import{__assign as e,__spreadArray as i}from"tslib";import{jsx as t,jsxs as r}from"react/jsx-runtime";import{Avatar as c}from"../Avatar/Avatar.js";import{defaultUserAvatar as o}from"../Avatar/default.js";import{Icon as s}from"../Icon/Icon.js";import{IconTypes as n}from"../Icon/type.js";function a(a){var m=a.selectList,l=a.setSelectList;return t("div",e({className:"conversation-create-select-view"},{children:m.map((function(a,f){var v=a.profile,p=a.domList,d=v.nick,u=v.userID,h=v.avatar;return r("div",e({className:"select-view-info"},{children:[t(s,{height:12,width:12,type:n.CLOSE,className:"select-view-info-close",onClick:function(){!function(e,t){e.forEach((function(e){e.checked=!1})),m.splice(t,1),l(i([],m,!0))}(p,f)}}),t(c,{image:h||o,size:40}),t("div",e({className:"select-view-info-nick"},{children:d||u}))]}),u)}))}))}export{a as ConversationCreateSelectView};