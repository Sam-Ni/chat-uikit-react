"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tim-js-sdk"),a=require("../utils/index.js");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=t(e);exports.useMessageContextHandler=function(e){var t,o=e.message;if(o)switch(null==o?void 0:o.type){case s.default.TYPES.MSG_TEXT:t=a.handleTextMessageShowContext(o);break;case s.default.TYPES.MSG_FACE:t=a.handleFaceMessageShowContext(o);break;case s.default.TYPES.MSG_IMAGE:t=a.handleImageMessageShowContext(o);break;case s.default.TYPES.MSG_AUDIO:t=a.handleAudioMessageShowContext(o);break;case s.default.TYPES.MSG_VIDEO:t=a.handleVideoMessageShowContext(o);break;case s.default.TYPES.MSG_FILE:t=a.handleFileMessageShowContext(o);break;case s.default.TYPES.MSG_CUSTOM:t=a.handleCustomMessageShowContext(o);break;case s.default.TYPES.MSG_MERGER:t=a.handleMergerMessageShowContext(o);break;case s.default.TYPES.MSG_LOCATION:t=a.handleLocationMessageShowContext(o);break;case s.default.TYPES.MSG_GRP_TIP:t=a.handleTipMessageShowContext(o);break;case s.default.TYPES.MSG_GRP_SYS_NOTICE:t=a.translateGroupSystemNotice(o)}return{context:t,message:o}};
