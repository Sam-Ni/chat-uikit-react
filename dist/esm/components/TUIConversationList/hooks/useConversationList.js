import{__awaiter as t,__generator as o,__spreadArray as r}from"tslib";import{useState as n,useEffect as i}from"react";import e from"tim-js-sdk";function a(a,s,l){var c=this,d=n([]),u=d[0],v=d[1];return i((function(){var n;n="reload",t(c,void 0,void 0,(function(){var t,i,c,d;return o(this,(function(o){switch(o.label){case 0:return"reload"===n&&v([]),t="reload"===n?0:u.length,[4,null==a?void 0:a.getConversationList()];case 1:return 0===(null==(i=o.sent())?void 0:i.code)&&(c=[],c=l?l(i.data.conversationList):i.data.conversationList.filter((function(t){return t.type!==e.TYPES.CONV_SYSTEM})),d="reload"===n?c:r(r([],u,!0),[c],!1),v(d),!t&&s&&s(d,v)),[2]}}))}))}),[a]),{conversationList:u,setConversationList:v}}export{a as default};
