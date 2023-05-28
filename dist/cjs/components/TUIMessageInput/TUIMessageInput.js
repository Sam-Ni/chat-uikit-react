"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),t=require("react/jsx-runtime"),s=require("react"),n=require("tim-js-sdk"),a=require("../../context/TUIMessageInputContext.js"),u=require("./hooks/useCreateMessageInputContext.js"),r=require("./hooks/useMessageInputState.js");require("../../constants.js");var i=require("../../context/TUIChatStateContext.js");require("../../context/TUIMessageContext.js");var o=require("../../context/ComponentContext.js");require("./hooks/useHandleQuoteMessage.js");var l=require("../EmptyStateIndicator/EmptyStateIndicator.js"),I=require("./InputQuoteDefalut.js"),p=require("./TUIMessageInputDefault.js"),g=require("./InputPluginsDefalut.js"),d=require("./TUIForward.js"),c=require("./Transmitter.js");function x(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var j=x(s),f=x(n);function T(s){var n=s.children,o=s.disabled,l=s.focus,I=s.pluginConfig,p=s.textareaRef,g=r.useMessageInputState(s),d=i.useTUIChatStateContext("TUIMessageInput"),c=d.textareaRef,x=d.conversation,j=(null==x?void 0:x.type)===f.default.TYPES.CONV_SYSTEM,T=i.useTUIChatStateContext("TUIMessageInput").TUIMessageInputConfig,C=l||(null==T?void 0:T.focus),m=u.useCreateMessageInputContext(e.__assign(e.__assign(e.__assign({},g),s),{textareaRef:p||(null==T?void 0:T.textareaRef)||c,disabled:o||(null==T?void 0:T.disabled)||j,focus:"boolean"!=typeof C||C,pluginConfig:I}));return t.jsx(a.TUIMessageInputContextProvider,e.__assign({value:m},{children:n}))}function C(s){var n=s.TUIMessageInput,a=s.InputPlugins,u=s.InputQuote,r=s.isTransmitter,x=s.className,j=i.useTUIChatStateContext("TUIMessageInput").TUIMessageInputConfig,f=x||(null==j?void 0:j.className),C=r||(null==j?void 0:j.isTransmitter)||!1,m=o.useComponentContext(),v=m.TUIMessageInput,M=m.InputPlugins,U=m.InputQuote,_=n||v||p.TUIMessageInputDefault,q=a||M||g.InputPluginsDefalut||l.EmptyStateIndicator,h=u||U||I.InputQuoteDefalut;return t.jsx("div",e.__assign({className:"tui-message-input ".concat(f)},{children:t.jsxs(T,e.__assign({},s,{children:[t.jsx(d.TUIForward,{}),t.jsx(h,{}),t.jsxs("div",e.__assign({className:"tui-message-input-main"},{children:[t.jsxs("div",e.__assign({className:"tui-message-input-box"},{children:[t.jsx(q,{}),t.jsx(_,{})]})),C&&t.jsx(c.Transmitter,{})]}))]}))}))}var m=j.default.memo(C);exports.TUIMessageInput=m;
