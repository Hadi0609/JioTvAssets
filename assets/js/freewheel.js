!function(){"use strict";var e="freewheel",t="jw-flag-ads-freewheel",i="jw-freewheel-before-impression",r="jw-flag-ads-vpaid",s="playing",n="time",a="adBreakStart",o="adBreakEnd",l="adError",d="adSkipped",h="external",u=function(){function e(e,t,i){this.config=t;var r=e.localization.advertising,s={admessage:r.admessage,podmessage:r.podmessage,cuetext:r.cuetext,loadingAd:r.loadingAd,skipMessage:r.skipmessage,skipText:r.skiptext,debug:!1,admessagedynamickey:/(\b)xx(s?\b)/g,loadVideoTimeout:15e3,requestTimeout:15e3,adBlockTimeout:4e3};this.setOptions(s),this.fwassetid=i.fwassetid||e.fwassetid,this.duration=i.duration||e.duration||0,this.adschedule=i.adschedule||null;var n=i.freewheel||{},a=this.config.freewheel||{};this.profileid=n.profileid||a.profileid,this.sectionid=n.sectionid||a.sectionid,this.networkid=n.networkid||a.networkid,this.serverid=n.serverid||a.serverid,this.afid=n.afid||a.afid,this.sfid=n.sfid||a.sfid,this.vcid=n.vcid||a.vcid,this.capabilities={flag:{},metr:{}},n.capabilities&&n.capabilities.flag?this.capabilities.flag=n.capabilities.flag:a.capabilities&&a.capabilities.flag&&(this.capabilities.flag=a.capabilities.flag),n.capabilities&&n.capabilities.metr?this.capabilities.metr=n.capabilities.metr:a.capabilities&&a.capabilities.metr&&(this.capabilities.metr=a.capabilities.metr),this.custom=n.custom||a.custom||{}}var t=e.prototype;return t.getSchedule=function(){var e=this.config;return this.adschedule||e.tag||e.schedule||e.ad},t.getAdRules=function(){var e=this.config.rules||{},t=parseInt(e.frequency,10);return{startOn:e.startOn||1,frequency:isNaN(t)?1:t}},t.setOptions=function(e){var t=this;Object.keys(e).forEach((function(i){var r=t.config[i]||t.config[i.toLowerCase()],s=e[i],n=typeof s;if(void 0!==r){if("boolean"!==n&&"number"!==n||(r=function(e){if("true"===e)return!0;if("false"===e)return!1;var t=parseFloat(e);return isNaN(t)?e:t}(r)),typeof r!==n)throw new Error("invalid parameter: "+i+" should be a "+n);t[i]=r}else t[i]=s})),this.admessagedynamic=e.admessage},e}(),c=null;function f(e,t){if(c)return c;if(window.tv&&tv.freewheel)return c=Promise.resolve();var i=document.location.protocol,r="file:"===i||"https:"===i?"https://mssl.fwmrm.net/libs/adm/6.43.0/AdManager.js":"http://adm.fwmrm.net/libs/adm/6.43.0/AdManager.js",s=new(0,e.scriptloader)(t||r);return c=s.load()}var p={},v={},m=function(e,t,i){var r=v[t];return r||(v[t]=function(e,t){return p[t]||(p[t]=new Promise((function(i,r){var s=new e.key(t);if("unlimited"===s.edition())return r();var n=["//","entitlements.jwplayer.com","/",s.token(),".json"];"file:"===window.location.protocol&&n.unshift("https:"),e.ajax(n.join(""),(function(e){var t=e&&e.response;t?i(t):r()}),(function(){r()}),{timeout:1e4,responseType:"json"})})))}(e,t).catch((function(){return{}})).then((function(e){var t,r;if(!0===i.outstream?(t=!1!==e.canPlayOutstreamAds,r="Outstream Ad Limit Reached"):(t=!1!==e.canPlayAds,r="Ad Limit Reached"),!1===t)throw new Error(r);return{message:"Can Play Ads"}})))},g=function(){function e(e,t){e.extend(this,t),this.isMuted=!1,this.vol=0,this.freewheelProxy=null}var t=e.prototype;return t.setProxy=function(e){this.freewheelProxy=e,this.mute(this.isMuted)},t.attachMedia=function(){},t.detachMedia=function(){},t.mute=function(e){this.isMuted=e,this.freewheelProxy&&this.freewheelProxy.setAdVolume(this.isMuted?0:this.vol)},t.volume=function(e){this.vol=e/100,this.freewheelProxy&&this.freewheelProxy.setAdVolume(this.vol)},t.setFullscreen=function(e){if(this.video){if(e)try{var t=this.video.webkitEnterFullscreen;t&&t.apply(this.video)}catch(e){return!1}else{var i=this.video.webkitExitFullscreen;i&&i.apply(this.video)}return Boolean(e)}},e}(),E="2.2.17",y=function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");return Object.prototype.hasOwnProperty.call(Object(e),t)};function w(e,t,i){if(!e)return e;var r,s,n,a,o=t.getPlaylistItem(),l=e.replace("__random-number__",Math.random()*Math.pow(10,18)).replace("__timestamp__",(new Date).getTime()).replace("__page-url__",encodeURIComponent(window.location.href)).replace("__referrer__",encodeURIComponent(document.referrer)).replace("__player-height__",t.getHeight()).replace("__player-width__",t.getWidth()).replace("__item-duration__",(s=t.getDuration(),n=3,a=Math.pow(10,n),Math.round(s*a)/a)).replace("__domain__",encodeURIComponent((r=window.location.href.match(/^[^/]*:\/\/\/?([^/]*)/))&&r.length>1?r[1]:"")),d=(l=i.companiondiv&&i.companiondiv.id?l.replace("__companion-div__",i.companiondiv.id):l.replace("__companion-div__","")).match(/__item-[a-z 0-9 A-Z]*__/g);if(d)for(var h=0;h<d.length;h++){var u=d[h],c=u.substring(7,u.length-2);if(y(o,c)&&t._.isString(o[c])){var f=o[c];f.length>1e3&&(f=f.substring(0,1e3)),l=l.replace(u,encodeURIComponent(f))}else l=l.replace(u,"")}return l}var _=function(e,t,i){if("start"===e||"0%"===e)return"pre";if("end"===e||"100%"===e)return"post";if("pre"===e||"post"===e||i.indexOf(e,"%")>-1)return e;var r=t.seconds(e);return!!i.isNumber(r)&&r},A=function(e,t,i){var r,s,n,a,o,l=_(e,t,i);return l||(l="pre"),i.isNumber(l)&&(r=parseInt(1e3*l,10),s=Math.floor(r)%1e3,n=Math.floor(r/1e3)%60,a=Math.floor(r/6e4)%60,l=(o=(o=Math.floor(r/36e5)%24)<10?"0"+o:o)+":"+(a=a<10?"0"+a:a)+":"+(n=n<10?"0"+n:n)+"."+("000"+s).slice(-3)),l},S=function(){function e(e,t){this.player=e,this.options=t}return e.prototype.getTagMap=function(e){var t=this,i=this.player,r=i.utils,s={};return r.foreach(function(e,t,i){var r={};return t.foreach(e,(function(e,s){var n={},a=s;s.ad&&(a=s.ad),n.offset=A(a.offset||a.position||s.offset||"",t,i),n.tag=a.tag,a.customadunitname&&(n.customadunitname=a.customadunitname),n.type=a.type||s.type||"linear,nonlinear",void 0!==a.skipoffset&&(n.skipoffset=a.skipoffset),r[e]=n})),r}(e,r,i._),(function(e,n){var a=_(n.offset,r,i._);if(i._.isString(a)&&(a=parseFloat(a.replace("pre","0").replace("post","-1"))),i._.isNumber(a)){var o={tagName:w(n.tag,i,t.options),type:n.type};void 0!==n.skipoffset&&(o.skipoffset=n.skipoffset),n.customadunitname&&(o.customAdUnitName=n.customadunitname),s[a]=o}})),s},e}(),T=function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");return Object.prototype.hasOwnProperty.call(Object(e),t)},I={},P=function(){function e(e,t,i){this.responsePromise=null,this.streamType=i,this.adsManager=new tv.freewheel.SDK.AdManager,this.adsManager.setNetwork(t.networkid),this.adsManager.setServer(t.serverid),this.options=t||{},this.version=e,this.schedule=null,this.tagMap={},this._fwassetid=null,this._fwduration=0}var t=e.prototype;return t.open=function(e,t){var i=this,r=this.options;if(this.currentAdContext)throw new Error("Request already made");var s=r.getSchedule();if(!s)return this.responsePromise=Promise.reject(),this.responsePromise;I[r.sectionid]||(I[r.sectionid]=Math.floor(2147483648*Math.random()));var n=I[r.sectionid];this.currentAdContext=this.adsManager.newContext(),this.currentAdContext.setProfile(r.profileid);var a=r.sfid||null;this.currentAdContext.setSiteSection(r.sectionid,null,n,null,a);var o=r.vcid||null;if(this.currentAdContext.setVisitor(o,null),this._fwassetid=r.fwassetid,this._fwduration=r.duration,this.schedule=s,this.responsePromise=new Promise((function(e,t){i.currentAdContext.addEventListener(tv.freewheel.SDK.EVENT_REQUEST_COMPLETE,e),i.currentAdContext.addEventListener(tv.freewheel.SDK.EVENT_ERROR,t)})),"string"==typeof s)this.currentAdContext.addTemporalSlot(s,tv.freewheel.SDK.ADUNIT_PREROLL,0);else for(var l=new S(e,t),d=this.tagMap=l.getTagMap(s),h=Object.keys(d),u=0;u<h.length;u++){var c=parseFloat(h[u]),f=d[c].tagName,p=d[c].customAdUnitName,v=null;if("overlay"===d[c].type){if(-1===c)continue;v=tv.freewheel.SDK.ADUNIT_OVERLAY}if(!v)switch(c){case 0:v=p||tv.freewheel.SDK.ADUNIT_PREROLL;break;case-1:v=p||tv.freewheel.SDK.ADUNIT_POSTROLL,c=r.duration||1;break;default:v=p||tv.freewheel.SDK.ADUNIT_MIDROLL}this.currentAdContext.addTemporalSlot(f,v,c)}var m=r.custom,g=!1;for(var E in m)if(T(m,E)){var y=m[E];y&&"string"!=typeof y&&(y=y.toString()),g||(this.currentAdContext._adRequest._keyValues.push(""),g=!0),"_fw_gdpr"===E?this.adsManager._fwGDPR=m[E]:"_fw_gdpr_consent"===E?this.adsManager._fwGDPRConsent=y:this.currentAdContext.addKeyValue(E,y)}return this.responsePromise},t.requestAds=function(e){var t=e.getConfig(),i=tv.freewheel.SDK.VIDEO_ASSET_AUTO_PLAY_TYPE_NONE;t.autostart&&(i=t.playOnViewable?tv.freewheel.SDK.VIDEO_ASSET_AUTO_PLAY_TYPE_ATTENDED:tv.freewheel.SDK.VIDEO_ASSET_AUTO_PLAY_TYPE_UNATTENDED);var r=Math.floor(2147483648*Math.random()),s=this.options.afid||null;"LIVE"===t.streamType||this.streamType&&"LIVE"===this.streamType.toUpperCase()?(this.currentAdContext.setVideoAsset(this._fwassetid,this._fwduration,null,null,i,r,null,s,tv.freewheel.SDK.VIDEO_ASSET_DURATION_TYPE_VARIABLE),this.currentAdContext.setRequestMode(tv.freewheel.SDK.REQUEST_MODE_LIVE)):this.currentAdContext.setVideoAsset(this._fwassetid,this._fwduration,null,null,i,r,null,s);var n=Math.floor(t.bandwidthEstimate/1e3);this.currentAdContext.setParameter(tv.freewheel.SDK.PARAMETER_DESIRED_BITRATE,n,tv.freewheel.SDK.PARAMETER_LEVEL_OVERRIDE),this.currentAdContext.setParameter(tv.freewheel.SDK.PARAMETER_EXTENSION_CONTENT_VIDEO_ENABLED,!1,tv.freewheel.SDK.PARAMETER_LEVEL_GLOBAL),this.options.capabilities&&this.setCapabilities(this.options.capabilities);var a=e.getContainer(),o=a.querySelector(".jw-wrapper");o.id=a.id+"-jw-wrapper",this.currentAdContext.registerVideoDisplayBase(o.id),this.currentAdContext.submitRequest()},t.setCapabilities=function(e){if(e.flag)for(var t in e.flag)if(t&&t.length){var i="on"===e.flag[t]?tv.freewheel.SDK.CAPABILITY_STATUS_ON:tv.freewheel.SDK.CAPABILITY_STATUS_OFF,r=tv.freewheel.SDK[t]?tv.freewheel.SDK[t]:t;this.currentAdContext.setCapability(r,i)}e.metr},t.destroy=function(){},e}(),L=function(e){return e.isBeforePlay()||0===e.getPosition()?"pre":e.isBeforeComplete()||e.getPosition()===e.getDuration()?"post":"mid"},b=function(t,i,r){var s;void 0===r&&(r=null);var n=((s={})[tv.freewheel.SDK.TIME_POSITION_CLASS_PREROLL]="pre",s[tv.freewheel.SDK.TIME_POSITION_CLASS_MIDROLL]="mid",s[tv.freewheel.SDK.TIME_POSITION_CLASS_POSTROLL]="post",s[tv.freewheel.SDK.TIME_POSITION_CLASS_OVERLAY]="overlay",s[tv.freewheel.SDK.TIME_POSITION_CLASS_DISPLAY]="display",s);return{type:t,client:e,adposition:n[r]||L(i),viewable:i.getViewable()}},C=function(e){e.stopPropagation()},O=function(){function u(e,t,i,r,s){var n=this;i.utils.extend(this,i.Events),this.item=e,this.options=t,this.streamType=s,this.player=i,this.utils=i.utils,this.style=i.utils.style,this.environment=i.getEnvironment(),this.instreamProvider=r,this.initAdsManagerPromise=null,this.adsLoadedPromise=null,this.blockingInstreamPlayer=null,this.video=null,this.timeoutAdStart=-1,this.timeoutAdLoad=-1,this.adBlockTimeout=-1,this.progressIntervalId=-1,this.nonlinearContainerId=null,this.slots={prerolls:[],midrolls:[],postrolls:[]},this.playedMidrollIndex=[],this.mobileEventListeners={play:function(){return n.adResume({reason:n.reason||"interaction"})},beginFullscreen:function(e){return n.startFullscreen(e)},endFullscreen:function(e){return n.endFullscreen(e)}},this.reason=null,this.playerEventListeners={"idle play pause beforeComplete":this.setVideoState},this.addPlayerListeners(),this._qoe=new i.utils.Timer,this.adStarted=this.adStarted.bind(this),this.adSlotComplete=this.adSlotComplete.bind(this),this.allAdEvent=this.allAdEvent.bind(this)}var c=u.prototype;return c.init=function(){var i=this;this.initAdsManagerPromise=f().then((function(){return i.destroyed()?null:(i.adsLoaderManager=new P(i.player.version,i.options,i.streamType),i.player.trigger("adManager",{adManager:i.adsLoaderManager.adsManager}),i.player.trigger("adsManager",{adsManager:i.adsLoaderManager.adsManager}),i.adsLoaderManager)})).catch((function(e){return i.asyncError(e)})),this.adsLoadedPromise=this.initAdsManagerPromise.then((function(){return i.adsLoaderManager.open(i.player,i.options)})).then((function(r){if(i.destroyed())return null;if(r.success){i.trigger("adRequest",{client:e,networkid:r.response.networkId});var s=i.adsLoaderManager.currentAdContext;i.instreamProvider.setProxy(s);for(var n=s.getTemporalSlots(),a=[],o=0;o<n.length;o++){var l=n[o];switch(l.getTimePositionClass()){case tv.freewheel.SDK.TIME_POSITION_CLASS_PREROLL:i.slots.prerolls.push(l);break;case tv.freewheel.SDK.TIME_POSITION_CLASS_OVERLAY:i.slots.midrolls.push(l);break;case tv.freewheel.SDK.TIME_POSITION_CLASS_MIDROLL:i.slots.midrolls.push(l),a.push({begin:l.getTimePosition(),text:i.options.cuetext,cueType:"ads"});break;case tv.freewheel.SDK.TIME_POSITION_CLASS_POSTROLL:i.slots.postrolls.push(l)}}i.player.addCues(a),i.registerEvents(s),s.setParameter(tv.freewheel.SDK.PARAMETER_RENDERER_VIDEO_DISPLAY_CONTROLS_WHEN_PAUSE,!1,tv.freewheel.SDK.PARAMETER_LEVEL_GLOBAL)}else i.asyncError(r);return i.slots.prerolls.length&&i.utils.addClass(i.player.getContainer(),t),r})).catch((function(e){return i.asyncError(e)}))},c.registerEvents=function(e){e.addEventListener(tv.freewheel.SDK.EVENT_SLOT_STARTED,this.adStarted),e.addEventListener(tv.freewheel.SDK.EVENT_SLOT_ENDED,this.adSlotComplete),e.addEventListener(tv.freewheel.SDK.EVENT_AD,this.allAdEvent)},c.startFullscreen=function(e){this.sendFullscreenEvent(e,!0)},c.endFullscreen=function(e){this.sendFullscreenEvent(e,!1)},c.sendFullscreenEvent=function(e,t){this.blockingInstreamPlayer&&this.blockingInstreamPlayer.trigger("fullscreenchange",{target:e.target,jwstate:t})},c.adErrorEventObject=function(t){if(60003===t.adErrorCode)return t;var i=t.adInstance,r=tv?t[tv.freewheel.SDK.INFO_KEY_ERROR_INFO]:"FreeWheel SDK unavailable";return{id:i?i.getAdId():void 0,client:e,message:"Ad Error: "+r,code:t[tv.freewheel.SDK.INFO_KEY_ERROR_CODE],module:t[tv.freewheel.SDK.INFO_KEY_ERROR_MODULE]}},c.adEventObject=function(t){var i=this.currentSlot,r={client:e};if(i&&(r.tag=i.getCustomId()),!t&&i&&(t=i.getCurrentAdInstance()),!t)return r;var s=i.getTimePositionClass(),n="OVERLAY"===s,a=t.getActiveCreativeRendition();r.freewheel={ad:{adId:t.getAdId()}},r.adposition=s.toLowerCase().replace("roll",""),r.id=t.getAdId(),r.linear=n?"nonlinear":"linear",r.creativetype="static",r.viewable=this.player.getViewable(),n||(r.creativetype="VPAID"===a.getCreativeApi()?"vpaid-js":a.getContentType());var o=i.getAdCount();return o>1&&(r.sequence=i.getAdInstances().indexOf(t)+1,r.podcount=o),t.skipoffset&&(r.skipoffset=t.skipoffset),r},c.allAdEvent=function(e){var t=e.subType,i=e.adInstance,r=t===tv.freewheel.SDK.EVENT_AD_PAUSE?"paused":s;switch(t){case tv.freewheel.SDK.EVENT_AD_IMPRESSION:this.adImpression(e);break;case tv.freewheel.SDK.EVENT_AD_IMPRESSION_END:this.setTimeoutAdStart(e);break;case tv.freewheel.SDK.EVENT_AD_PAUSE:case tv.freewheel.SDK.EVENT_AD_RESUME:null===this.reason&&"VPAID"===i.getActiveCreativeRendition().getCreativeApi()&&(this.reason="external"),this.setState(i,r);break;case tv.freewheel.SDK.EVENT_AD_COMPLETE:this.adComplete(e);break;case tv.freewheel.SDK.EVENT_AD_CLICK:this.adClick(e);break;case tv.freewheel.SDK.EVENT_ERROR:this.adError(e);break;case tv.freewheel.SDK.EVENT_AD_AUTO_PLAY_BLOCKED:this.pause({reason:"autostart"}),this.currentSlot&&this.instreamProvider.trigger("playAttemptFailed")}},c.setupSkipButton=function(e){var t=this.options.config.skipoffset,i="POSTROLL"===e.slot.getTimePositionClass()?-1:e.slot.getTimePosition(),r=this.adsLoaderManager.tagMap;if(r){var s=r[i];s&&void 0!==s.skipoffset&&(t=s.skipoffset)}void 0!==t&&this.blockingInstreamPlayer&&(this.blockingInstreamPlayer.off(d,this.adSkip,this),e.adInstance.skipoffset=t,this.blockingInstreamPlayer.setupSkipButton(t,this.options,this.utils.noop),this.blockingInstreamPlayer.on(d,this.adSkip,this))},c.adStarted=function(e){var t=this,i=e.slot.getTimePositionClass();i!==tv.freewheel.SDK.TIME_POSITION_CLASS_OVERLAY&&(this.player.trigger(a,b(a,this.player,i)),this.blockingInstreamPlayer.on("destroyed",(function(){t.player.trigger(o,b(o,t.player,i))})))},c.adImpression=function(e){clearTimeout(this.timeoutAdLoad),clearTimeout(this.timeoutAdStart),clearTimeout(this.adBlockTimeout);var t=e.adInstance,n=this.adEventObject(t),a="VPAID"===t.getActiveCreativeRendition().getCreativeApi();if(this.utils.removeClass(this.player.getContainer(),i),this.utils.toggleClass(this.player.getContainer(),r,a),this.isPreroll(n)&&(this._qoe.tick("adImpression"),n.timeLoading=this._qoe.between("adLoading","adImpression")),this.updateAdPosition(t),this.progressInterval(this.currentSlot),this.setupSkipButton(e),this.setupNonlinearContainer(),this.resize(),this.trigger("adImpression",n),a&&this.trigger("adStarted",n),t.getCompanionAdInstances().length){var o=this.utils.extend({},n);o.companions=t.getCompanionAdInstances(),this.trigger("adCompanions",o)}this.setState(e.adInstance,s)},c.setTimeoutAdStart=function(){var e=this;clearTimeout(this.timeoutAdLoad),clearTimeout(this.timeoutAdStart),this.timeoutAdStart=setTimeout((function(){if(!e.destroyed()){var t=e.adEventObject();t.message="Ad Error: Creative timeout",e.trigger(l,t),e.currentSlot.skipCurrentAd()}}),this.options.loadVideoTimeout)},c.setAdBlockTimeout=function(){var t=this;this.player.getAdBlock()&&(clearTimeout(this.adBlockTimeout),this.adBlockTimeout=setTimeout((function(){t.destroyed()||t.adError({id:void 0,client:e,message:"Ad playback blocked by an ad blocker",code:900,adErrorCode:60003})}),this.options.adBlockTimeout))},c.setVideoState=function(e){var t=e.type;if(this.adsLoaderManager&&this.adsLoaderManager.currentAdContext){var i={idle:tv.freewheel.SDK.VIDEO_STATE_STOPPED,play:tv.freewheel.SDK.VIDEO_STATE_PLAYING,pause:tv.freewheel.SDK.VIDEO_STATE_PAUSED,beforeComplete:tv.freewheel.SDK.VIDEO_STATE_COMPLETED};this.adsLoaderManager.currentAdContext.setVideoState(i[t])}},c.adResume=function(e){var t=e.reason;this.hasResumed||(this.reason=t,this.currentSlot.resume()),this.hasResumed=!1},c.adSkip=function(){var e=this.currentSlot;e.getCurrentAdInstance()&&(clearInterval(this.progressIntervalId),this.trigger(d,this.adEventObject()),e.skipCurrentAd())},c.stopAd=function(){var e=this.currentSlot;e&&(clearInterval(this.progressIntervalId),this.trigger(d,this.adEventObject()),e.stop())},c.adComplete=function(e){clearInterval(this.progressIntervalId),this.trigger("adComplete",this.adEventObject(e.adInstance))},c.adSlotComplete=function(e){var t=this,i=e.slot;i&&"POSTROLL"===i.getTimePositionClass()?setTimeout((function(){t.stopBlocking(),t.nonlinearContainerId=null,t.destroy()}),0):(this.stopBlocking(),this.nonlinearContainerId=null)},c.adClick=function(e){this.trigger("adClick",this.adEventObject(e.adInstance)),this.pause({reason:"clickthrough"})},c.adError=function(e){var t=this;this.options.debug&&console.error(e);var i=this.adErrorEventObject(e);900===i.code&&(this.timeoutAdStart=setTimeout((function(){return t.destroy()}),0));var r=e?e.adInstance:null;r&&this.isPreroll(this.adEventObject(r))&&(this._qoe.tick("adError"),i.timeLoading=this._qoe.between("adLoading","adError")),this.trigger(l,i)},c.updateAdPosition=function(e){this.instreamProvider&&this.instreamProvider.trigger(n,{position:Math.max(e.getPlayheadTime(),0),duration:e.getDuration()})},c.prepareToPlayAd=function(e){if(!this.destroyed())if(this.blockingInstreamPlayer){var t=e?"":this.options.loadingAd;this.blockingInstreamPlayer.setText(t)}else this.startBlocking(e)},c.addMobileListeners=function(){var e=this;Object.keys(this.mobileEventListeners).forEach((function(t){e.video.addEventListener(t,e.mobileEventListeners[t])}))},c.removeMobileListeners=function(){var e=this;Object.keys(this.mobileEventListeners).forEach((function(t){e.video.removeEventListener(t,e.mobileEventListeners[t])}))},c.addPlayerListeners=function(){this.player.on(this.playerEventListeners,this)},c.removePlayerListeners=function(){this.player.off(this.playerEventListeners,this)},c.startBlocking=function(e){var i=this;if(!this.blockingInstreamPlayer){this._qoe.tick("adLoading"),clearTimeout(this.timeoutAdLoad),clearTimeout(this.timeoutAdStart),clearTimeout(this.adBlockTimeout),this.timeoutAdLoad=setTimeout((function(){if(!i.destroyed()){i.currentSlot&&i.currentSlot.stop();var e=i.adEventObject();e.message="Ad Error: Request timeout",i.trigger(l,e),i.stopBlocking()}}),this.options.requestTimeout),this.utils.addClass(this.player.getContainer(),t),this.blockingInstreamPlayer=this.player.createInstream().init(),this.video=this.instreamProvider.video=this.blockingInstreamPlayer.getMediaElement(),this.video.addEventListener("mousedown",C),this.video.addEventListener("pointerdown",C),this.player.getPip()&&this.player.requestPip(this.video);var r=e?"":this.options.loadingAd;this.blockingInstreamPlayer.setText(r),this.blockingInstreamPlayer.applyProviderListeners(this.instreamProvider),this.environment.OS.mobile&&(this.removeMobileListeners(),this.addMobileListeners())}},c.stopBlocking=function(){this.destroyed()||(clearTimeout(this.timeoutAdLoad),clearTimeout(this.timeoutAdStart),clearTimeout(this.adBlockTimeout),this.utils.removeClass(this.player.getContainer(),[r,t,i]),this.environment.OS.mobile&&this.removeMobileListeners(),this.blockingInstreamPlayer&&(this.instreamProvider.off(),this.blockingInstreamPlayer.destroy(),this.blockingInstreamPlayer=null,this.video.removeEventListener("mousedown",C),this.video.removeEventListener("pointerdown",C),this.video=this.instreamProvider.video=null))},c.setupNonlinearContainer=function(){if(this.nonlinearContainerId){var e=document.getElementById(this.nonlinearContainerId);this.utils.addClass(e,"jw-freewheel-nonlinear-container"),this.style(e,{top:"auto",height:"100%",width:"100%"})}},c.beforePlay=function(e){var t=this;this.reason=e&&e.playReason?e.playReason:h;var r=!this.slots.prerolls.length;this.startBlocking(r),this.utils.addClass(this.player.getContainer(),i),this.initAdsManagerPromise.then((function(){t.setAdBlockTimeout(),t.adsLoaderManager.requestAds(t.player)})),this.adsLoadedPromise.then((function(e){!t.destroyed()&&e.success&&t.playNextAd(t.slots.prerolls)})).catch((function(e){return t.asyncError(e)}))},c.playNextAd=function(e){if(e.length){var i=this.currentSlot=e.shift();if("OVERLAY"!==i.getTimePositionClass()){var r=!i.getAdCount();this.prepareToPlayAd(r),this.nonlinearContainerId=null}else this.utils.addClass(this.player.getContainer(),t),this.nonlinearContainerId="_fw_ad_container_html_"+this.currentSlot.getCustomId()+"_";this.setTimeoutAdStart(),i.play(),"MIDROLL"===i.getTimePositionClass()&&this.setVideoState({type:"pause"})}else this.stopBlocking()},c.beforeComplete=function(){this.slots.postrolls.length&&this.playNextAd(this.slots.postrolls)},c.time=function(e){if(this.slots.midrolls.length){var t=this.getNextMidRollIndex(e.position);if(t>=0){var i=[this.slots.midrolls[t]];this.playNextAd(i)}}},c.progressInterval=function(e){var t=this;if(clearInterval(this.progressIntervalId),e){var i=e.getCurrentAdInstance(),r=e.getAdInstances().indexOf(i)+1,s=i.getDuration(),n=e.getAdCount(),a=-1,o=this.options.admessage||"",l=this.options.admessagedynamickey,d=this.options.podmessage||"",h=new RegExp("__AD_POD_CURRENT__","g"),u=new RegExp("__AD_POD_LENGTH__","g");this.progressIntervalId=setInterval((function(){var e=i.getPlayheadTime(),c=s-e;if(a!==c){if(a=c,t.blockingInstreamPlayer){var f=o.replace(l,"$1"+Math.round(c)+"$2");n>1&&(f=d.replace(h,r).replace(u,n)+"  "+f),t.blockingInstreamPlayer.setText(f)}if(s>0){var p=t.adEventObject(i);p.position=e,p.duration=s,t.trigger("adTime",p),t.updateAdPosition(i)}}}),250)}},c.getNextMidRollIndex=function(e){var t=-1;if(this.playedMidrollIndex.length>=this.slots.midrolls.length)return t;for(var i=0;i<this.slots.midrolls.length;i++){if(!(this.slots.midrolls[i].getTimePosition()<=e))break;t=i}return this.playedMidrollIndex.indexOf(t)<0&&t>=0?(this.playedMidrollIndex.push(t),t):-1},c.setState=function(e,t){if(this.currentSlot.getTimePositionClass()!==tv.freewheel.SDK.TIME_POSITION_CLASS_OVERLAY){var i=this.adEventObject(e);if(i.newstate=t,null!==this.reason)i[t===s?"playReason":"pauseReason"]=this.reason,this.reason=null;this.instreamProvider.trigger("state",i)}},c.asyncError=function(e){var t=this;this.destroyed()||(e&&this.adError(e),this.timeoutAdStart=setTimeout((function(){return t.destroy()}),0))},c.pause=function(e){var t=e.reason;this.currentSlot&&!this.video.paused&&(this.reason=t||h,this.currentSlot.pause())},c.resume=function(e){var t=e.reason;this.currentSlot&&this.video.paused&&(this.reason=t||h,this.currentSlot.resume(),this.hasResumed=!0)},c.resize=function(e,t){var i=document.getElementById(this.nonlinearContainerId);if(i){var r=i.querySelector("iframe"),s=this.player.getSafeRegion(!0);this.style(r,{left:(s.width-r.offsetWidth)/2})}this.adsLoaderManager&&this.adsLoaderManager.currentAdContext&&e&&t&&this.adsLoaderManager.currentAdContext.resize(e,t)},c.destroy=function(){if(clearInterval(this.progressIntervalId),this.off(),!this.destroyed()){if(this.removePlayerListeners(),this.currentSlot&&this.currentSlot.stop(),this.blockingInstreamPlayer&&(this.blockingInstreamPlayer.off(null,null,this),this.stopBlocking()),this.adsLoaderManager){this.adsLoaderManager.destroy();var e=this.adsLoaderManager.currentAdContext;e&&(e.removeEventListener(tv.freewheel.SDK.EVENT_SLOT_STARTED,this.adStarted),e.removeEventListener(tv.freewheel.SDK.EVENT_SLOT_ENDED,this.adSlotComplete),e.removeEventListener(tv.freewheel.SDK.EVENT_AD,this.allAdEvent))}clearTimeout(this.timeoutAdLoad),clearTimeout(this.timeoutAdStart),clearTimeout(this.adBlockTimeout),this.nonlinearContainerId=null,this.item=null,this.options=null,this.player.off(null,null,this),this.player=null,this.instreamProvider.off(),this.instreamProvider.setProxy(null),this.instreamProvider=null,this.video=null,this.initAdsManagerPromise=null,this.adsLoadedPromise=null}},c.destroyed=function(){return!this.item},c.isPreroll=function(e){return"pre"===e.adposition&&(void 0===e.podcount||0===e.sequence)},u}();!function(e){if(e&&"undefined"!=typeof window){var t=document.createElement("style");t.setAttribute("media","screen"),t.innerHTML=e,document.head.appendChild(t)}}(".jwplayer.jw-flag-ads-freewheel.jw-flag-floating .jw-wrapper,.jwplayer.jw-flag-ads-freewheel.jw-freewheel-before-impression .jw-media video{pointer-events:none}.jwplayer.jw-flag-ads-freewheel.jw-flag-touch.jwplayer.jw-flag-ads-freewheel.jw-state-paused .jw-display-icon-container{display:none}.jwplayer.jw-flag-ads-freewheel.jw-flag-user-inactive.jw-state-playing .jw-freewheel-nonlinear-container{bottom:.5em}.jwplayer.jw-flag-ads-freewheel .jw-freewheel-nonlinear-container{bottom:3.5em;pointer-events:none}.jwplayer.jw-flag-ads-freewheel .jw-freewheel-nonlinear-container iframe{pointer-events:all}.jwplayer.jw-flag-ads-freewheel.jw-flag-time-slider-above .jw-freewheel-nonlinear-container{bottom:66px}"),(window.jwplayerPluginJsonp||window.jwplayer().registerPlugin)(e,"8.1",(function(t,i){var r=this,s=t.utils,a=t.getConfig(),o=a.key,d=new g(s,t.Events),h=i.freewheel?i.freewheel.adManagerURL:null,c=0;f(s,h).then((function(){i.debug?tv.freewheel.SDK.setLogLevel(tv.freewheel.SDK.LOG_LEVEL_DEBUG):tv.freewheel.SDK.setLogLevel(tv.freewheel.SDK.LOG_LEVEL_QUIET)})).catch(s.noop);var p=null;s.extend(this,t.Events),this.version=E;var v=function(){p&&!p.destroyed()&&(p.destroy(),p=null)},y=function(){v(),function(e){var t=e.getCues();if(Array.isArray(t)&&t.length){var i=t.filter((function(e){return"ads"!==e.cueType}));e.setCues(i)}}(t)},w=function(e,t){e===n?p.time(t):"beforeComplete"===e&&p.beforeComplete()},_=function(e,r){var s=e.item,n=new u(t.getConfig(),i||{},s);y(),function(e){var t=e.getAdRules(),i=0===t.frequency&&1===c,r=c>=t.startOn&&(c-t.startOn)%t.frequency==0;return i||r}(n)?n.getSchedule()&&((p=new O(s,n,t,d,r)).init(),p.on("all",(function(e,i){return t.trigger(e,i)})),t.once("beforePlay",(function(e){return p.beforePlay(e)}),p).on("resize",(function(e){var t=e.width,i=e.height;return p.resize(t,i)}),p).on("fullscreen",(function(){return p.resize()}),p).on("all",w,p)):n.adschedule=null};t.pauseAd=function(e,t){p&&(e?p.pause(t||{}):p.resume(t||{}))},t.skipAd=function(){p&&p.adSkip()};var A=function(i,n){v(),t.off(null,null,r),t.playAd=s.noop,t.trigger(l,{id:"-1",client:e,message:i,code:900,adErrorCode:n,tag:""})},S=m(s,o,i);t.on("ready",(function(){f().catch((function(){A("Ad playback blocked by an ad blocker",2e4)})),S.catch((function(e){A("Ad Error: "+e.message,60002)}))}),this).on("playlistItem",(function(e){c++;var t=e.item.streamtype||a.streamtype;_(e,t)}),this).on("playlistComplete",(function(){y()}),this).on("cast",(function(e){e.active&&y()}),this).on("destroyPlugin",(function(){r.destroy()}),this),S.catch(s.noop),this.destroy=v,this.stopAd=function(){p&&p.stopAd()}}))}();
