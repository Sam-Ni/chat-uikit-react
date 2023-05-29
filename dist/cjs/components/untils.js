"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("date-fns"),r=require("tim-js-sdk");require("tslib"),require("react/jsx-runtime"),require("react"),require("./Icon/config.js"),require("./Icon/type.js");var t=require("./Avatar/default.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=a(r);function s(e){if("string"==typeof e)try{return!!JSON.parse(e)}catch(e){return!1}return!1}exports.JSONStringToParse=function(e){return s(e)?JSON.parse(e):e},exports.getTimeStamp=function(r){return r?e.isThisYear(r)?e.isToday(r)?e.format(r,"p"):e.isYesterday(r)?e.formatDistance(r,new Date):e.isThisWeek(r)?e.format(r,"eeee"):e.format(r,"MMM dd"):e.format(r,"yyyy MMM dd"):""},exports.handleDisplayAvatar=function(e,r){void 0===r&&(r=i.default.TYPES.CONV_C2C);var a=e;if(!e)switch(r){case i.default.TYPES.CONV_C2C:a=t.defaultUserAvatar;break;case i.default.TYPES.CONV_GROUP:default:a=t.defaultGroupAvatarWork}return a},exports.isJSON=s;