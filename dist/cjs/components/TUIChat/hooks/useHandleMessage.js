"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("../../../constants.js");exports.useHandleMessage=function(a){a.state;var s=a.dispatch;return{operateMessage:e.useCallback((function(e){s({type:t.CONSTANT_DISPATCH_TYPE.OPERATE_MESSAGE,value:e})}),[s]),setAudioSource:e.useCallback((function(e){s({type:t.CONSTANT_DISPATCH_TYPE.SET_AUDIO_SOURCE,value:e})}),[s]),setVideoSource:e.useCallback((function(e){s({type:t.CONSTANT_DISPATCH_TYPE.SET_VIDEO_SOURCE,value:e})}),[s]),setHighlightedMessageId:e.useCallback((function(e){s({type:t.CONSTANT_DISPATCH_TYPE.SET_HIGH_LIGHTED_MESSAGE_ID,value:e})}),[s])}};