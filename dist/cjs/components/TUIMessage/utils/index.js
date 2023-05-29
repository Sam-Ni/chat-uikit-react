"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),a=require("tim-js-sdk"),t=require("./decodeText.js"),o=require("../../../constants.js"),c=require("../../untils.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=n(a);function r(e){var a=e.split(".");return a[a.length-1]}function i(e){var a={},t={};try{a=c.JSONStringToParse(e.payload.data)}catch(e){a={}}if(1!==a.businessID)return"";try{t=c.JSONStringToParse(a.data)}catch(e){t={}}switch(a.actionType){case 1:return t.call_end>=0&&!a.groupID?"".concat(r("message.custom.talkTime"),"：").concat(l(t.call_end)):a.groupID?"".concat(r("message.custom.groupCallEnd")):t.data&&"switchToAudio"===t.data.cmd?"".concat(r("message.custom.switchToAudioCall")):t.data&&"switchToVideo"===t.data.cmd?"".concat(r("message.custom.switchToVideoCall")):"".concat(r("message.custom.all"));case 2:return"".concat(r("message.custom.cancel"));case 3:return t.data&&"switchToAudio"===t.data.cmd?"".concat(r("message.custom.switchToAudioCall")):t.data&&"switchToVideo"===t.data.cmd?"".concat(r("message.custom.switchToVideoCall")):"".concat(r("message.custom.accepted"));case 4:return"".concat(r("message.custom.rejected"));case 5:return t.data&&"switchToAudio"===t.data.cmd?"".concat(r("message.custom.switchToAudioCall")):t.data&&"switchToVideo"===t.data.cmd?"".concat(r("message.custom.switchToVideoCall")):"".concat(r("message.custom.noResp"));default:return""}}function l(e){var a,t,o,c,n=e;return n>=3600?(t=parseInt("".concat(n/3600),10)<10?"0".concat(parseInt("".concat(n/3600),10)):parseInt("".concat(n/3600),10),o=parseInt("".concat(n%60/60),10)<10?"0".concat(parseInt("".concat(n%60/60),10)):parseInt("".concat(n%60/60),10),(c=n%3600<10?"0".concat(n%3600):n%3600)>60&&(o=parseInt("".concat(c/60),10)<10?"0".concat(parseInt("".concat(c/60),10)):parseInt("".concat(c/60),10),c=c%60<10?"0".concat(c%60):c%60),a="".concat(t,":").concat(o,":").concat(c)):n>=60&&n<3600?(o=parseInt("".concat(n/60),10)<10?"0".concat(parseInt("".concat(n/60),10)):parseInt("".concat(n/60),10),c=n%60<10?"0".concat(n%60):n%60,a="00:".concat(o,":").concat(c)):n<60&&(c=n<10?"0".concat(n):n,a="00:00:".concat(c)),a}exports.extractCallingInfoFromMessage=i,exports.formatTime=l,exports.handleAudioMessageShowContext=function(e){return{progress:(null==e?void 0:e.status)===o.MESSAGE_STATUS.UNSEND&&e.progress,url:e.payload.url,message:e,second:e.payload.second}},exports.handleCustomMessageShowContext=function(e){return{message:e,custom:i(e)||(null==e?void 0:e.payload)||"[".concat(r("message.custom.custom"),"]")}},exports.handleFaceMessageShowContext=function(e){var a={message:e,name:"",url:""};return a.name=e.payload.data,e.payload.data.indexOf("@2x")<0&&(a.name="".concat(a.name,"@2x")),a.url="https://web.sdk.qcloud.com/im/assets/face-elem/".concat(a.name,".png"),a},exports.handleFileMessageShowContext=function(e){var a="";return a=e.payload.fileSize>=1048576?"".concat((e.payload.fileSize/1048576).toFixed(2)," Mb"):e.payload.fileSize>=1024?"".concat((e.payload.fileSize/1024).toFixed(2)," Kb"):"".concat(e.payload.fileSize.toFixed(2),"B"),{progress:(null==e?void 0:e.status)===o.MESSAGE_STATUS.UNSEND&&e.progress,url:e.payload.fileUrl,message:e,name:e.payload.fileName,size:a}},exports.handleImageMessageShowContext=function(e){return{progress:(null==e?void 0:e.status)===o.MESSAGE_STATUS.UNSEND&&e.progress,url:e.payload.imageInfoArray[1].url,message:e}},exports.handleLocationMessageShowContext=function(e){var a={lon:"",lat:"",href:"",url:"",description:"",message:e};return a.lon=e.payload.longitude.toFixed(6),a.lat=e.payload.latitude.toFixed(6),a.href="https://map.qq.com/?type=marker&isopeninfowin=1&markertype=1&"+"pointx=".concat(a.lon,"&pointy=").concat(a.lat,"&name=").concat(e.payload.description),a.url="https://apis.map.qq.com/ws/staticmap/v2/?"+"center=".concat(a.lat,",").concat(a.lon,"&zoom=10&size=300*150&maptype=roadmap&")+"markers=size:large|color:0xFFCCFF|label:k|".concat(a.lat,",").concat(a.lon,"&")+"key=UBNBZ-PTP3P-TE7DB-LHRTI-Y4YLE-VWBBD",a.description=e.payload.description,a},exports.handleMergerMessageShowContext=function(a){return e.__assign({message:a},a.payload)},exports.handleTextMessageShowContext=function(e){return{text:t.decodeText(e.payload)}},exports.handleTipMessageShowContext=function(e){var a,t,o,c,n,i={message:e,text:""},l=e.nick||(null===(a=null==e?void 0:e.payload)||void 0===a?void 0:a.userIDList.join(","));switch((null===(o=null===(t=null==e?void 0:e.payload)||void 0===t?void 0:t.memberList)||void 0===o?void 0:o.length)>0&&(l="",null===(n=null===(c=null==e?void 0:e.payload)||void 0===c?void 0:c.memberList)||void 0===n||n.map((function(e){return l+="".concat((null==e?void 0:e.nick)||(null==e?void 0:e.userID),","),e})),l=l.slice(0,-1)),e.payload.operationType){case s.default.TYPES.GRP_TIP_MBR_JOIN:i.text="".concat(l," ").concat(r("message.tip.Join in group"));break;case s.default.TYPES.GRP_TIP_MBR_QUIT:i.text="".concat(r("message.tip.member"),"：").concat(l," ").concat(r("message.tip.quit group"));break;case s.default.TYPES.GRP_TIP_MBR_KICKED_OUT:i.text="".concat(r("message.tip.member"),"：").concat(l," ").concat(r("message.tip.by")).concat(e.payload.operatorID).concat(r("message.tip.kicked out of group"));break;case s.default.TYPES.GRP_TIP_MBR_SET_ADMIN:i.text="".concat(r("message.tip.member"),"：").concat(l," ").concat(r("message.tip.become admin"));break;case s.default.TYPES.GRP_TIP_MBR_CANCELED_ADMIN:i.text="".concat(r("message.tip.member"),"：").concat(l," ").concat(r("message.tip.by revoked administrator"));break;case s.default.TYPES.GRP_TIP_GRP_PROFILE_UPDATED:i.text=function(e){var a=e.payload,t=a.newGroupProfile,o=a.operatorID,c="",n=Object.keys(t)[0];switch(n){case"muteAllMembers":c=t[n]?"".concat(r("message.tip.admin")," ").concat(o," ").concat(r("message.tip.enable all staff mute")):"".concat(r("message.tip.admin")," ").concat(o," ").concat(r("message.tip.unmute everyone"));break;case"ownerID":c="".concat(t[n]," ").concat(r("message.tip.become the new owner"));break;case"groupName":c="".concat(o," ").concat(r("message.tip.modify group name")," ").concat(t[n]);break;case"notification":c="".concat(o," ").concat(r("message.tip.post a new announcement"))}return c}(e);break;case s.default.TYPES.GRP_TIP_MBR_PROFILE_UPDATED:e.payload.memberList.map((function(e){return e.muteTime>0?i.text="".concat(r("message.tip.member"),"：").concat(e.userID).concat(r("message.tip.muted")):i.text="".concat(r("message.tip.member"),"：").concat(e.userID).concat(r("message.tip.unmuted")),e}));break;default:i.text="[".concat(r("message.tip.reminder message"),"]")}return i},exports.handleVideoMessageShowContext=function(e){var a,t;return{progress:(null==e?void 0:e.status)===o.MESSAGE_STATUS.UNSEND&&(null==e?void 0:e.progress),url:null===(a=null==e?void 0:e.payload)||void 0===a?void 0:a.videoUrl,snapshotUrl:null===(t=null==e?void 0:e.payload)||void 0===t?void 0:t.snapshotUrl,message:e}},exports.translateGroupSystemNotice=function(e){var a=e.payload.groupProfile.name||e.payload.groupProfile.groupID;switch(e.payload.operationType){case 1:return"".concat(e.payload.operatorID," ").concat(r("message.tip.申请加入群组"),"：").concat(a);case 2:return"".concat(r("message.tip.成功加入群组"),"：").concat(a);case 3:return"".concat(r("message.tip.申请加入群组"),"：").concat(a," ").concat(r("message.tip.被拒绝"));case 4:return"".concat(r("message.tip.你被管理员")).concat(e.payload.operatorID," ").concat(r("message.tip.踢出群组"),"：").concat(a);case 5:return"".concat(r("message.tip.群"),"：").concat(a," ").concat(r("message.tip.被")," ").concat(e.payload.operatorID," ").concat(r("message.tip.解散"));case 6:return"".concat(e.payload.operatorID," ").concat(r("message.tip.创建群"),"：").concat(a);case 7:case 12:return"".concat(e.payload.operatorID," ").concat(r("message.tip.邀请你加群"),"：").concat(a);case 8:return"".concat(r("message.tip.你退出群组"),"：").concat(a);case 9:return"".concat(r("message.tip.你被")).concat(e.payload.operatorID," ").concat(r("message.tip.设置为群"),"：").concat(a," ").concat(r("message.tip.的管理员"));case 10:return"".concat(r("message.tip.你被")).concat(e.payload.operatorID," ").concat(r("message.tip.撤销群"),"：").concat(a," ").concat(r("message.tip.的管理员身份"));case 13:return"".concat(e.payload.operatorID," ").concat(r("message.tip.同意加群"),"：").concat(a);case 14:return"".concat(e.payload.operatorID," ").concat(r("message.tip.拒接加群"),"：").concat(a);case 255:return"".concat(r("message.tip.自定义群系统通知"),": ").concat(e.payload.userDefinedField);default:return""}};