"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");require("../../../context/TUIKitContext.js"),require("../../../context/TUIChatStateContext.js");var t=require("../../../context/TUIChatActionContext.js");require("../../../context/TUIMessageContext.js"),require("../../../context/ComponentContext.js"),require("../../../context/TUIMessageInputContext.js");var r=require("../../TUIMessage/utils/emojiMap.js");exports.useEmojiPicker=function(n){n.textareaRef;var s=n.insertText,o=t.useTUIChatActionContext(),a=o.sendMessage,i=o.createFaceMessage;return{onSelectEmoji:function(e){s(r.emojiEnKey[e.data])},sendFaceMessage:e.useCallback((function(e){var t=i({payload:e});a(t)}),[])}};