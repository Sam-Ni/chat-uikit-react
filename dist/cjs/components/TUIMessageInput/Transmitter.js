"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),t=require("react/jsx-runtime"),r=require("../../context/TUIMessageInputContext.js"),s=require("../Icon/Icon.js"),n=require("../Icon/type.js");exports.Transmitter=function(){var i=r.useTUIMessageInputContext("Transmitter").handleSubmit;return t.jsx("div",e.__assign({className:"transmitter"},{children:t.jsx(s.Icon,{className:"icon-send",type:n.IconTypes.SEND,onClick:i})}))};
