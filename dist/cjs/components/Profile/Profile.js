"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),r=require("react/jsx-runtime"),s=require("../Avatar/Avatar.js"),i=require("../Avatar/default.js"),a=require("../Icon/Icon.js"),n=require("../Icon/type.js");exports.Profile=function(l){var t=l.profile,c=l.className,o=void 0===c?"":c,u=l.handleAvatar;return((null==t?void 0:t.nick)||(null==t?void 0:t.userID))&&r.jsxs("div",e.__assign({className:"profile ".concat(o)},{children:[r.jsxs("div",e.__assign({className:"profile-content"},{children:[r.jsx(s.Avatar,{size:32,image:t.avatar||i.defaultUserAvatar,onClick:u}),r.jsx("div",e.__assign({className:"profile-name"},{children:t.nick||t.userID}))]})),r.jsx("div",e.__assign({className:"profile-more"},{children:r.jsx(a.Icon,{type:n.IconTypes.ELLIPSE,width:18,height:5,onClick:u})}))]}))};
