"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),s=require("react/jsx-runtime"),i=require("../Avatar/Avatar.js"),r=require("../Avatar/default.js"),t=require("../Icon/Icon.js"),a=require("../Icon/type.js");exports.ConversationCreateSelectView=function(c){var n=c.selectList,o=c.setSelectList;return s.jsx("div",e.__assign({className:"conversation-create-select-view"},{children:n.map((function(c,l){var u=c.profile,v=c.domList,d=u.nick,f=u.userID,j=u.avatar;return s.jsxs("div",e.__assign({className:"select-view-info"},{children:[s.jsx(t.Icon,{height:12,width:12,type:a.IconTypes.CLOSE,className:"select-view-info-close",onClick:function(){!function(s,i){s.forEach((function(e){e.checked=!1})),n.splice(i,1),o(e.__spreadArray([],n,!0))}(v,l)}}),s.jsx(i.Avatar,{image:j||r.defaultUserAvatar,size:40}),s.jsx("div",e.__assign({className:"select-view-info-nick"},{children:d||f}))]}),f)}))}))};