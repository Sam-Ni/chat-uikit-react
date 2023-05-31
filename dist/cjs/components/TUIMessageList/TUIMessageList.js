"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),t=require("react/jsx-runtime"),s=require("react");require("../../context/TUIKitContext.js");var i=require("../../context/TUIChatStateContext.js"),n=require("../../context/TUIChatActionContext.js");require("../../context/TUIMessageContext.js");var r=require("../../context/ComponentContext.js");require("../../context/TUIMessageInputContext.js");var a=require("./hooks/useEnrichedMessageList.js"),o=require("./hooks/useMessageListElement.js"),l=require("../InfiniteScrollPaginator/InfiniteScroll.js"),c=require("../EmptyStateIndicator/EmptyStateIndicator.js");function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=u(s).default.memo((function(u){var d=this,g=u.messageList,h=u.highlightedMessageId,m=u.loadMore,v=u.intervalsTimer,f=u.className,I=s.useState(null),x=I[0],M=I[1],T=s.useState(!1),j=T[0],C=T[1],p=i.useTUIChatStateContext("TUIMessageList"),_=p.messageList,L=p.highlightedMessageId,q=p.isCompleted,S=p.isSameLastMessageID,U=p.messageListRef,E=p.noMore,y=p.TUIMessageListConfig,b=n.useTUIChatActionContext(),N=b.loadMore,k=b.setHighlightedMessageId,w=r.useComponentContext(),H=w.TUIMessage,A=w.EmptyStateIndicator,P=void 0===A?c.EmptyStateIndicator:A,V=h||(null==y?void 0:y.highlightedMessageId)||L,D=60*(v||(null==y?void 0:y.intervalsTimer)||30),K=a({messageList:g||(null==y?void 0:y.messageList)||_}).messageList,O=m||(null==y?void 0:y.loadMore)||N,R=o({enrichedMessageList:K,TUIMessage:H,intervalsTimer:D});return s.useEffect((function(){e.__awaiter(d,void 0,void 0,(function(){var t,s,i,n,r;return e.__generator(this,(function(e){switch(e.label){case 0:return t=null===(r=null==x?void 0:x.parentElement)||void 0===r?void 0:r.parentElement,!q&&(null==t?void 0:t.clientHeight)>=(null==x?void 0:x.clientHeight)?[4,O()]:[3,2];case 1:e.sent(),e.label=2;case 2:return!(null==x?void 0:x.children)||j&&S||(s=(null==x?void 0:x.children)||[],i=s[s.length-1],n=setTimeout((function(){null==i||i.scrollIntoView({block:"end"}),C(!0),clearTimeout(n)}),100)),[2]}}))}))}),[R,j]),s.useEffect((function(){if(V){var e=null==x?void 0:x.querySelector("[data-message-id='".concat(V,"']"));if(!e)return;var t=e.children[1].children;t[t.length-1].classList.add("high-lighted"),null==e||e.scrollIntoView({block:"center"});var s=setTimeout((function(){t[t.length-1].classList.remove("high-lighted"),clearTimeout(s),k("")}),1e3)}}),[V]),t.jsxs("div",e.__assign({className:"message-list ".concat(f," ").concat(j?"":"hide"),ref:U},{children:[E,E&&t.jsx("p",e.__assign({className:"no-more"},{children:"No More"})),t.jsx(l.InfiniteScroll,e.__assign({className:"message-list-infinite-scroll",hasMore:!0,loadMore:O,threshold:1},{children:t.jsx("ul",e.__assign({ref:M},{children:(null==R?void 0:R.length)>0?R:t.jsx(P,{listType:"message"})}))}))]}))}));exports.TUIMessageList=function(s){return t.jsx(d,e.__assign({},s))};
