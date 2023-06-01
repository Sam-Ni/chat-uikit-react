import {__assign as t} from "tslib";
import {jsx as o} from "react/jsx-runtime";
import n, {useState as e, useRef as r} from "react";
import {useTUIKitContext as i} from "../../context/TUIKitContext.js";
import "../../context/TUIChatStateContext.js";
import "../../context/TUIChatActionContext.js";
import "../../context/TUIMessageContext.js";
import "../../context/ComponentContext.js";
import "../../context/TUIMessageInputContext.js";
import s from "./hooks/useConversationList.js";
import "date-fns";
import "tim-js-sdk";
import "../Icon/config.js";
import "../Icon/type.js";
import {useConversationUpdate as a} from "./hooks/useConversationUpdate.js";
import {useTUIConversationContext as m} from "../../context/TUIConversationContext.js";

function c(n) {
  n.Preview, n.Container;
  var c = n.onConversationListUpdated, v = n.filterConversation, p = i("TUIConversationList"), C = p.tim,
    f = p.customClasses, x = p.conversation, l = p.setActiveConversation;
  p.setTUIProfileShow;
  var u = m("TUIConversationList").filterConversation, j = v || u, I = e(0);
  I[0];
  var U = I[1], d = s(C, (function (t, o) {
    t.length && l(x)
  }), j), T = d.conversationList, h = d.setConversationList;
  a(h, c, (function () {
    return U((function (t) {
      return t + 1
    }))
  }), j);
  var L = e("");
  L[0], L[1];
  var g = e(T);
  g[0], g[1];
  var k = e(!1);
  k[0], k[1], i().myProfile;
  var P = r(null);
  return o("div", t({
    className: "tui-conversation ".concat(f || ""),
    ref: P
  }, {children: o("div", {children: "Hello"})}))
}

var v = n.memo(c);
export {v as TUIConversationList, c as UnMemoTUIConversationList};
