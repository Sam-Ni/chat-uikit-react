"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),n=require("react/jsx-runtime"),t=require("react"),o=require("tim-js-sdk"),r=require("../../context/TUIKitContext.js");require("../../context/TUIChatStateContext.js"),require("../../context/TUIChatActionContext.js"),require("../../context/TUIMessageContext.js"),require("../../context/ComponentContext.js"),require("../../context/TUIMessageInputContext.js");var i=require("./hooks/useConversationList.js"),s=require("../ConversationPreview/ConversationPreview.js");require("../ConversationPreview/ConversationPreviewContent.js"),require("../ConversationPreview/MyConversationPreviewContent.js");var a=require("../ConversationPreview/ConversationListContainer.js"),v=require("../Profile/Profile.js"),u=require("../ConversationSearch/ConversationSearchInput.js"),c=require("../ConversationSearch/ConversationSearchResult.js"),C=require("../ConversationCreate/ConversationCreate.js"),l=require("../Icon/Icon.js"),d=require("../Icon/type.js");require("../Input/Input.js"),require("../ConversationCreate/ConversationGroupTypeInfo.js");var j=require("../../context/TUIConversationContext.js"),f=require("../ConversationPreview/utils.js"),x=require("./hooks/useConversationUpdate.js");function h(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var p=h(t),I=h(o);function q(o){var h=o.Preview,p=o.Container,q=void 0===p?a.ConversationListContainer:p,P=o.onConversationListUpdated,w=o.filterConversation,g=o.showSelf,T=void 0===g||g,U=o.showSearch,_=void 0===U||U,m=o.onlyGroupConversation,L=void 0!==m&&m,S=o.onlyC2CConversation,y=void 0!==S&&S,N=r.useTUIKitContext("TUIConversationList"),A=N.tim,R=N.customClasses,E=N.conversation,M=N.setActiveConversation,O=N.setTUIProfileShow,b=j.useTUIConversationContext("TUIConversationList").filterConversation,k=w||b,D=t.useState(0),F=D[0],G=D[1],K=i(A,(function(e,n){e.length&&M(E)}),k),V=K.conversationList,Y=K.setConversationList;x.useConversationUpdate(Y,P,(function(){return G((function(e){return e+1}))}),k);var z=t.useState(""),B=z[0],H=z[1],J=t.useState(V),Q=J[0],W=J[1],X=t.useState(!1),Z=X[0],$=X[1],ee=r.useTUIKitContext().myProfile,ne=t.useRef(null);return n.jsx("div",e.__assign({className:"tui-conversation ".concat(R||""),ref:ne},{children:Z?n.jsx(C.ConversationCreate,{conversationList:V,setConversationCreated:$}):n.jsxs(n.Fragment,{children:[T&&n.jsx(v.Profile,{profile:ee,handleAvatar:function(){O(!0)}}),_&&n.jsxs("div",e.__assign({className:"tui-conversation-header"},{children:[n.jsx(u.ConversationSearchInput,{value:B,clearable:!0,onChange:function(e){var n,t;if(H(null===(n=e.target)||void 0===n?void 0:n.value),null===(t=e.target)||void 0===t?void 0:t.value){var o=V.filter((function(n){var t;return f.getDisplayTitle(n).toLocaleLowerCase().includes(null===(t=e.target)||void 0===t?void 0:t.value.toLocaleLowerCase())}));W(o)}else W([])}}),n.jsx("div",e.__assign({className:"tui-conversation-create-icon"},{children:n.jsx(l.Icon,{onClick:function(){H(""),$(!0)},type:d.IconTypes.CREATE,height:24,width:24})}))]})),n.jsx(q,e.__assign({setConversationList:Y},{children:0===V.length?n.jsxs("div",e.__assign({className:"no-result"},{children:[n.jsx(l.Icon,{className:"no-result-icon",type:d.IconTypes.EFFORT,width:42,height:42}),n.jsx("div",e.__assign({className:"no-result-message"},{children:"No conversation"}))]})):B?n.jsx(c.ConversationSearchResult,{Preview:h,searchValue:B,result:Q}):L?V.filter((function(e){return e.type===I.default.TYPES.CONV_GROUP})).map((function(t){var o={activeConversation:E,conversation:t,setActiveConversation:M,Preview:h,conversationUpdateCount:F};return n.jsx(s.ConversationPreview,e.__assign({},o),t.conversationID)})):y?V.filter((function(e){return e.type===I.default.TYPES.CONV_C2C})).map((function(t){var o={activeConversation:E,conversation:t,setActiveConversation:M,Preview:h,conversationUpdateCount:F};return n.jsx(s.ConversationPreview,e.__assign({},o),t.conversationID)})):V.map((function(t){var o={activeConversation:E,conversation:t,setActiveConversation:M,Preview:h,conversationUpdateCount:F};return n.jsx(s.ConversationPreview,e.__assign({},o),t.conversationID)}))}))]})}))}var P=p.default.memo(q);exports.TUIConversationList=P,exports.UnMemoTUIConversationList=q;
