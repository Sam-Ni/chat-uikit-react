"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),t=require("react/jsx-runtime"),r=require("react");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o,n=s(r);exports.messageShowType=void 0,(o=exports.messageShowType||(exports.messageShowType={})).IN="in",o.OUT="out",o.ALL="all",o.NONE="none";var a=n.default.createContext(void 0);exports.TUIMessageContext=a,exports.TUIMessageContextProvider=function(r){var s=r.children,o=r.value;return t.jsx(a.Provider,e.__assign({value:o},{children:s}))},exports.useTUIMessageContext=function(e){var t=r.useContext(a);return!t&&e?{}:t};