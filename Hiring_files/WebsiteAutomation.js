var cookieEnabled=navigator.cookieEnabled;window.addEventListener?window.addEventListener("hashchange",function(){oReq(document.title,!0)}):window.attachEvent("hashchange",function(e){oReq(document.title,!0)});var viewedCountEntry1,isEventCompleted=!0,ZHUB=1,ZH_URL="ma.zoho.com",ZC_RedirUrl="maillist-manage.com",pro="http:",ajaxUrl="",stringParams="",userHasScrolledX=!0,isCurrentTab=!0,exp_date=new Date;exp_date.setTime(exp_date.getTime()+31536e6);var old_fpCookie=getZCookie("zc_cu");null!=old_fpCookie&&(document.cookie="zc_cu="+old_fpCookie+";expires="+exp_date.toGMTString()+"; path=/"+_sameSiteCookieAttribute);var singlepageapp={};function loadwaprops(e,t,o,n,i){var a=document;if(a.querySelector('meta[name="zwaid"]')){var r=a.querySelector("meta[name='zwaid']").getAttribute("content");a.querySelector("meta[name='zwaid']").setAttribute("content",r+","+e),r=a.querySelector("meta[name='zwauid']").getAttribute("content"),a.querySelector("meta[name='zwauid']").setAttribute("content",r+","+t),r=a.querySelector("meta[name='zwaod']").getAttribute("content"),a.querySelector("meta[name='zwaod']").setAttribute("content",r+","+o),r=a.querySelector("meta[name='zwad']").getAttribute("content"),a.querySelector("meta[name='zwad']").setAttribute("content",r+","+n),r=a.querySelector("meta[name='zwv']").getAttribute("content"),a.querySelector("meta[name='zwv']").setAttribute("content",r+i),a.querySelector("meta[name='tmpzwaid']").setAttribute("content",e),a.querySelector("meta[name='tmpzwauid']").setAttribute("content",t),a.querySelector("meta[name='tmpzwaod']").setAttribute("content",o),a.querySelector("meta[name='tmpzwad']").setAttribute("content",n),a.querySelector("meta[name='tmpzwv']").setAttribute("content",i)}else{var c=a.createElement("meta");c.setAttribute("content",e),c.setAttribute("name","zwaid");var l=a.createElement("meta");l.setAttribute("content",t),l.setAttribute("name","zwauid");var u=a.createElement("meta");u.setAttribute("content",o),u.setAttribute("name","zwaod");var s=a.createElement("meta");s.setAttribute("content",n),s.setAttribute("name","zwad");var d=a.createElement("meta");d.setAttribute("content",i),d.setAttribute("name","zwv");var m=a.createElement("meta");m.setAttribute("content",e),m.setAttribute("name","tmpzwaid");var p=a.createElement("meta");p.setAttribute("content",t),p.setAttribute("name","tmpzwauid");var g=a.createElement("meta");g.setAttribute("content",o),g.setAttribute("name","tmpzwaod");var h=a.createElement("meta");h.setAttribute("content",n),h.setAttribute("name","tmpzwad");var f=a.createElement("meta");f.setAttribute("content",i),f.setAttribute("name","tmpzwv"),a.getElementsByTagName("head")[0].appendChild(c),a.getElementsByTagName("head")[0].appendChild(l),a.getElementsByTagName("head")[0].appendChild(u),a.getElementsByTagName("head")[0].appendChild(s),a.getElementsByTagName("head")[0].appendChild(d),a.getElementsByTagName("head")[0].appendChild(m),a.getElementsByTagName("head")[0].appendChild(p),a.getElementsByTagName("head")[0].appendChild(g),a.getElementsByTagName("head")[0].appendChild(h),a.getElementsByTagName("head")[0].appendChild(f)}cookieEnabled&&oReq(document.title)}singlepageapp.lastlocation=window.location.href,function(e){if(e&&e.pushState&&"function"==typeof e.pushState){var t=function(){singlepageapp.lastlocation!=window.location.href&&(singlepageapp.lastlocation=window.location.href,window.setTimeout(function(){oReq(document.title,!0)},100))},o=e.pushState;e.pushState=function(n){o.apply(e,arguments),t()},window.removeEventListener("popstate",t),window.addEventListener("popstate",t)}}(window.history);var serializeMHJson=function(e){void 0===e&&(e={});for(var t=Object.keys(e),o="",n=0;n<t.length;n++){var i=e[t[n]];o+="object"==typeof i?t[n]+"="+encodeURI(JSON.stringify(i)):t[n]+"="+i,o+="&"}return o.substring(0,o.length-1)};function makeAjaxReq(e){var t=document.createElement("script");t.setAttribute("src",e),t.setAttribute("id","jsonp");var o=document.getElementById("jsonp"),n=document.getElementsByTagName("head")[0];null==o?n.appendChild(t):n.replaceChild(t,o)}function processData(e){if(!0===e.isDomainSaved){var t=window.location.protocol;t.indexOf("http")<0&&(t="http:"),window.location.href=t+"//"+ZH_URL+"/ma/WebAutoClose.do"}}function createPopupScript(){var e=document.createElement("script");return e.type="text/javascript",e.readyState?e.onreadystatechange=function(){if("loaded"==e.readyState||"complete"==e.readyState)try{loadPopupProps("",document.querySelector("meta[name='zwauid']").getAttribute("content"))}catch(e){}}:e.onload=function(){loadPopupProps("",document.querySelector("meta[name='zwauid']").getAttribute("content"))},e.async=!0,e.src="https://"+ZH_URL+"/hub/js/MagicPopup.js?t="+(new Date).getTime(),e}function zmhOnloadCallback(){var e=createPopupScript();document.getElementsByTagName("head")[0].appendChild(e),ZHUB=0}function oReq(e,t){if(null==getZCookie("zc_consent")&&(document.cookie="zc_consent=1; expires="+exp_date.toGMTString()+"; path=/"+_sameSiteCookieAttribute,document.cookie="zc_show=0; expires="+exp_date.toGMTString()+"; path=/"+_sameSiteCookieAttribute),1==ZHUB)-1!==["complete"].indexOf(document.readyState)?zmhOnloadCallback():(window.removeEventListener("load",zmhOnloadCallback),window.addEventListener("load",zmhOnloadCallback));else try{loadPopupProps("",document.querySelector("meta[name='zwauid']").getAttribute("content"))}catch(e){}var o=document.querySelector("meta[name='zwaid']").getAttribute("content");if(void 0==o)return!1;var n=document.querySelector("meta[name='zwauid']").getAttribute("content"),i=document.querySelector("meta[name='zwaod']").getAttribute("content"),a=document.querySelector("meta[name='zwad']").getAttribute("content"),r=document.referrer,c=window.location.href,l=c.split("?"),u=new Array,s=l[0],d=!1,m="",p="",g="",h=null,f=null,b=null,w=null,S=window.location.protocol,v=!1,z="";if(r.includes("android-app://com.linkedin.android")&&(r="https://www.linkedin.com/"),S.indexOf("http")<0&&(S="http:"),l[1])for(var k=(u=l[1].split("&")).length,A=0;A<k;A++){var _=u[A].split("=");if("test"==_[0]&&(m=_[1],d=!0),"entity"===_[0]&&(p=_[1]),"aliasDomain"==_[0]){_[1],v=!0;break}if("campId"==_[0]&&(document.cookie="zcs="+_[1]+_sameSiteCookieAttribute),"socialshare"==_[0]&&(h=_[1]),"cntnId"==_[0]&&(document.cookie="zcnt="+_[1]+_sameSiteCookieAttribute),"productId"==_[0]&&(f=_[1]),"AbandonedCartId"==_[0]&&(b=_[1]),"cntId"==_[0])w=_[1];else if("custId"==_[0]){var y=getZCookie("zcc");null!=y?-1===y.indexOf(_[1])&&(document.cookie="zcc="+y+","+_[1]+";expires="+exp_date.toGMTString()+"; path=/"+_sameSiteCookieAttribute):document.cookie="zcc="+_[1]+";expires="+exp_date.toGMTString()+"; path=/"+_sameSiteCookieAttribute,g=_[1]}"smsCmpId"==_[0]&&(z=_[1])}if(void 0!=m&&"undefined"!=m&&""!=m||(m=i),!0===d){if(document.querySelector("meta[name='tmpzwaod']").getAttribute("content").indexOf(m)>-1||!0===v){i=i.split(",");for(A=0;A<i.length;A++){var C=i[A];T=(T="&orgDomainId="+m+"&entity="+p+"&url="+encodeURIComponent(s)+"&scriptDomainId="+C)+"&action=viewed&reqType=0&aliasDomain="+v,null!=e&&""!=e&&(T=T+"&value="+encodeURIComponent(e)),makeAjaxReq(ajaxUrl=S+"//"+ZH_URL+"/ma/AuthenticateDomain.do?callback=processData"+T)}}}else if(1==getZCookie("zc_consent")){void 0!=t?(o=o.split(","),n=n.split(","),i=i.split(","),a=a.split(",")):(o=new Array(document.querySelector("meta[name='tmpzwaid']").getAttribute("content")),n=new Array(document.querySelector("meta[name='tmpzwauid']").getAttribute("content")),i=new Array(document.querySelector("meta[name='tmpzwaod']").getAttribute("content")),a=new Array(document.querySelector("meta[name='tmpzwad']").getAttribute("content"))),r=r.split(",");var x=getZCookie("zcs");for(w=getZCookie("zcnt"),(new Date).getTime(),A=0;A<o.length;A++){var q=o[A],I=n[A],E=(C=i[A],a[A]),T="";T=void 0!==r&&""!==r?"&webAutoId="+q+"&zuid="+I+"&domain="+E+"&orgDomainId="+C+"&reqType=0&ref="+encodeURIComponent(r)+"&socialshare="+h:"&webAutoId="+q+"&zuid="+I+"&domain="+E+"&orgDomainId="+C+"&reqType=0&socialshare="+h,null!=x&&""!=x&&(T=T+"&campaignId="+x),null!=w&&""!=w&&(T=T+"&contentId="+w),null!=e&&""!=e&&(T=T+"&value="+encodeURIComponent(e)),null!=f&&(T=T+"&productId="+f),null!=b&&(T=T+"&abandonedCartId="+b),null!=w&&(T=T+"&cmpContentId="+w),null!=z&&""!=z&&(T=T+"&smsCmpId="+z);T=T+"&action="+encodeURIComponent("viewed");getZCookie("zcc"),getZCookie("zcsc");var Z=getZCookie("zc_cu");null!=Z&&(T=T+"&zc_cu="+Z);var O=getZCookie("zc_ssid"),U=(getZCookie("zc_sscls"),window.localStorage.getItem("zc_cls"),getZCookie("ssalive"),getZCookie("zc_cu_exp"));null!=U&&(T=T+"&zc_cu_exp="+U);var R=getZCookie("zc_tp");null!=R&&(T=T+"&zc_tp="+R),T=(T=T+"&url="+encodeURIComponent(s))+"&parentUrl="+encodeURIComponent(c),null!=g&&""!=g&&(T=T+"&customerID="+g);var D=T;sessionStorage;null!=O&&(sessionStorage.setItem("my_session",O),sessionStorage.setItem("sessiontrack","true")),makeAjaxReq(ajaxUrl=S+"//"+ZC_RedirUrl+"/wa/ActionLogger?callback=processData"+D)}}}function zcAction(e,t){if((null!=e&&""!=e||null!=t&&""!=t)&&cookieEnabled){var o=document.querySelector("meta[name='zwaid']").getAttribute("content"),n=document.querySelector("meta[name='zwauid']").getAttribute("content"),i=document.querySelector("meta[name='zwaod']").getAttribute("content"),a=document.querySelector("meta[name='zwad']").getAttribute("content"),r=window.location.href,c=r.split("?"),l=new Array,u=c[0],s=!1,d="",m=window.location.protocol,p="";if(m.indexOf("http")<0&&(m="http:"),c[1])for(var g=(l=c[1].split("&")).length,h=0;h<g;h++){var f=l[h].split("=");if("test"==f[0]){d=f[1],s=!0;break}if("campId"==f[0])document.cookie="zcs="+f[1]+_sameSiteCookieAttribute;else if("custId"==f[0]){var b=getZCookie("zcc");null!=b?-1===b.indexOf(f[1])&&(document.cookie="zcc="+b+","+f[1]+";expires="+exp_date.toGMTString()+"; path=/"+_sameSiteCookieAttribute):document.cookie="zcc="+f[1]+";expires="+exp_date.toGMTString()+"; path=/"+_sameSiteCookieAttribute,p=f[1]}}if(!0===s){if(i.indexOf(d)>-1){_=(_="&orgDomainId="+d+"&url="+encodeURIComponent(u))+"&action="+e+"&reqType=1",null!=t&&""!=t&&(_=_+"&value="+t),ajaxUrl=m+"//"+ZC_RedirUrl+"/ma/AuthenticateDomain.do?callback=processData"+_,isEventCompleted=!1;var w=!1;try{(w=navigator.sendBeacon(ajaxUrl))&&(isEventCompleted=!0)}catch(e){isEventCompleted=!1}0==w&&(isEventCompleted=!1,makeAjaxReq(ajaxUrl))}}else if(1==getZCookie("zc_consent")){o=o.split(","),n=n.split(","),i=i.split(","),a=a.split(",");var S=getZCookie("zcs"),v=getZCookie("zcnt");for(h=0;h<o.length;h++){var z=o[h],k=n[h],A=i[h],_="&webAutoId="+z+"&zuid="+k+"&domain="+a[h]+"&orgDomainId="+A+"&reqType=1";null!=S&&""!=S&&(_=_+"&campaignId="+S),null!=v&&""!=v&&(_=_+"&contentId="+v),null!=e&&""!=e&&(_=_+"&action="+e),null!=t&&""!=t&&(_=_+"&value="+t);var y=getZCookie("zc_cu");null!=y&&(_=_+"&zc_cu="+y);var C,x=getZCookie("zc_ssid"),q=getZCookie("ssalive");null!=q&&(C=q.split("_s"),count=C[1],1==count&&(_=(_=_+"&zc_ssid="+x)+"&ssalive="+q));var I=getZCookie("zc_cu_exp");null!=I&&(_=_+"&zc_cu_exp="+I);var E=getZCookie("zc_tp");null!=E&&(_=_+"&zc_tp="+E);getZCookie("zcc"),getZCookie("zcsc");_=(_=_+"&url="+encodeURIComponent(u))+"&parentUrl="+encodeURIComponent(r),null!=p&&""!=p&&(_=_+"&customerID="+p),paramData=_;sessionStorage;ajaxUrl=m+"//"+ZC_RedirUrl+"/wa/ActionLogger?callback=processData"+paramData,isEventCompleted=!1;w=!1;try{(w=navigator.sendBeacon(ajaxUrl))&&(isEventCompleted=!0)}catch(e){isEventCompleted=!1}0==w&&(isEventCompleted=!1,makeAjaxReq(ajaxUrl))}}}}function getZCookie(e){var t=document.cookie,o=t.indexOf(" "+e+"=");if(-1==o&&(o=t.indexOf(e+"=")),-1==o)t=null;else{o=t.indexOf("=",o)+1;var n=t.indexOf(";",o);-1==n&&(n=t.length),t=unescape(t.substring(o,n))}return t}function zcCallback(e){var t=JSON.parse(JSON.stringify(e)),o=t.zc_cu,n=getZCookie("zc_cu");if("201"!=t.status){if(null!=n){for(var i=n.split("_"),a=!1,r=o.split("-")[0],c=0;c<i.length;c++)if(i[c].indexOf(r)>-1){o=n.replace(i[c],o),a=!0;break}a||(o=n+"_"+o)}document.cookie="zc_cu="+o+";expires="+exp_date.toGMTString()+"; path=/"+_sameSiteCookieAttribute,isEventCompleted=!0}else document.cookie="zc_cu="+o+";expires="+zcexp_date.toGMTString()+"; path=/"+_sameSiteCookieAttribute}function zcVisitorExpCallback(e){var t=JSON.parse(JSON.stringify(e)).zc_cu_exp;document.cookie="zc_cu_exp="+t+";expires="+exp_date.toGMTString()+"; path=/"+_sameSiteCookieAttribute,isEventCompleted=!0}function setZhAttributes(e,t){for(var o in t)e.setAttribute(o,t[o])}function zc_cookie_notice(e){var t=getZCookie("zc_show"),o=JSON.parse(JSON.stringify(e)),n=o.firstTimeVisit,i=o.style,a=new Array,r=(a=i.split("$"))[0],c=decodeURIComponent(a[1]).split("+").join(" "),l=a[2],u=a[3],s=a[4],d=a[5],m=a[6],p=a[7],g=a[8],h=a[9],f=a[10],b=a[11],w=a[12],S=a[13],v=a[14],z=a[17],k="none",A="none",_="bottom: 0px;";if("true"==v&&(A="inline"),"true"==S&&(k="inline"),"true"==n&&(document.cookie="zc_show=1; expires="+exp_date.toGMTString()+"; path=/"+_sameSiteCookieAttribute,t=1),"true"==z&&(_="top: 0px;"),1==t&&"true"==r&&null==document.querySelector("#wa_notice")){var y=document.createElement("div");setZhAttributes(y,{id:"zc_notice",name:"zc_notice",style:"position: fixed; z-index: 2247483647 !important; opacity:0.85;"+_+"left: 0px; right: 0px; border:solid 0px #111; background-color:"+f+";padding:15px; line-height:1.6; font-family:"+l+";"});var C=document.createElement("a");setZhAttributes(C,{style:"display:"+A+";padding:5px;color:inherit;",target:"_blank",href:a[16]});var x=document.createElement("u");x.setAttribute("id","lnkopt"),x.innerHTML=a[15],C.appendChild(x),setZhAttributes(x=document.createElement("span"),{id:"wa_notice",style:"width:calc(100% - "+I+"px); float:left; color:"+b+";font-size:"+w+";"}),x.innerHTML=c,x.appendChild(C),y.appendChild(x),(x=document.createElement("span")).setAttribute("style","text-align: right;float: right;"),setZhAttributes(C=document.createElement("input"),{id:"denybutton",style:"display:"+k+"; background-color:"+u+";color:"+s+";padding:"+d+" "+m+";font-size:"+p+";font-family:"+l+"; border:solid 0px #fff; border-radius:2px; cursor:pointer; margin-left:10px;",value:h,type:"button",onclick:"zc_deny()"}),x.appendChild(C),y.appendChild(x),(x=document.createElement("span")).setAttribute("style","text-align: right;float: right;"),setZhAttributes(C=document.createElement("input"),{id:"acceptbutton",style:"background-color:"+u+";color:"+s+";padding:"+d+" "+m+";font-size:"+p+";font-family:"+l+";border:solid 0px #fff; border-radius:2px; cursor:pointer;",value:g,type:"button",onclick:"zc_accept()"}),x.appendChild(C),y.appendChild(x),(C=document.querySelector("body")).insertBefore(y,C.firstChild);var q=screen.width<948,I=55+document.querySelector("#acceptbutton").clientWidth;"true"==S&&(I=I+document.querySelector("#denybutton").clientWidth+70),q&&(I=0),document.querySelector("#wa_notice").style.width="calc(100% - "+I+"px)"}}function zcSessionCloseback(e){var t=JSON.parse(JSON.stringify(e)).zc_sscls;document.cookie="zc_sscls="+t+";expires="+exp_date.toGMTString()+_sameSiteCookieAttribute}function zcSessionCallback(e){}function waListSubscribe(e,t){if(cookieEnabled){var o=e;t=t.trim();var n=document.querySelector("meta[name='zwaid']").getAttribute("content"),i=(n=n.split(","))[0],a=window.location.protocol;a.indexOf("http")<0&&(a="http:");var r=document.querySelector("meta[name='zwauid']").getAttribute("content"),c=(r=r.split(","))[0],l=document.querySelector("meta[name='zwaod']").getAttribute("content"),u=(l=l.split(","))[0];if(null!=e&&""!==e&&null!=t&&""!==t){e=JSON.parse(JSON.stringify(e));getZCookie("zc_cu");var s={};s.listkey=t,s.resfmt="JSON",s.isSubscribeFromWebsite="true",s.zuid=c,s.orgDomainId=u,void 0!==o["Contact Email"]&&""!==o["Contact Email"]&&null!==o["Contact Email"]&&(e=getZCFieldCookies(o)),s.contactinfo=e,s.webAutoId=i,stringParams=serializeMHJson(s),makeAjaxReq(ajaxUrl=a+"//"+ZC_RedirUrl+"/api/setleads?callback=processData&"+stringParams)}}}function zcListSubscribe(e,t){if(cookieEnabled){var o=e;t=t.trim();var n=document.querySelector("meta[name='zwaid']").getAttribute("content"),i=(n=n.split(","))[0],a=document.querySelector("meta[name='zwauid']").getAttribute("content"),r=(a=a.split(","))[0],c=window.location.protocol;if(c.indexOf("http")<0&&(c="http:"),null!=e&&""!==e&&null!=t&&""!==t){e=JSON.parse(JSON.stringify(e));var l=getZCookie("zc_cu"),u={};u.listkey=t,u.resfmt="JSON",u.isSubscribeFromWebsite="true",null!==l&&""!==l&&(l=l.split(",")[0],u.zc_cu=l),void 0!==o["Contact Email"]&&""!==o["Contact Email"]&&null!==o["Contact Email"]&&(e=getZCFieldCookies(o)),u.contactinfo=e,u.webAutoId=i,u.zuid=r,stringParams=serializeMHJson(u),makeAjaxReq(ajaxUrl=c+"//"+ZH_URL+"/api/v1/Mhlistsubscribefromwebsite?callback=processData&"+stringParams)}}}function zcListSubscribeCallback(e){if(cookieEnabled){deleteZCFieldCookies();var t=document.querySelector("meta[name='zwaod']").getAttribute("content"),o=(t=t.split(","))[0],n=window.location.protocol;n.indexOf("http")<0&&(n="http:");var i=window.location.href.split("?"),a=(new Array,i[0]),r=JSON.parse(JSON.stringify(e)),c=r.emailid,l=r.isNewContact,u=r.listId,s=getZCookie("zc_cu"),d=getZCookie("zc_ssid"),m=getZCookie("zc_tp"),p={};null!=d&&""!==d&&(p.sessionCookie=d),null!=s&&""!==s&&(p.emailid=c,p.cookie=s,p.isFromWebsite="true",p.url=a,p.listKey=u,p.isNewContact=l,p.orgDomainId=o,null!=m&&(p.zc_tp=m),stringParams=serializeMHJson(p),makeAjaxReq(ajaxUrl=n+"//"+ZC_RedirUrl+"/wa/addmappingforanonymousandcontacts?callback=processData&"+stringParams))}}function zcFieldUpdate(e){if(cookieEnabled){var t=window.location.protocol,o=document.querySelector("meta[name='zwaid']").getAttribute("content"),n=(o=o.split(","))[0],i=document.querySelector("meta[name='zwauid']").getAttribute("content"),a=(i=i.split(","))[0],r={};t.indexOf("http")<0&&(t="http:");var c=getZCookie("zc_cu");r.zc_cf=e,r.zc_cu=c,r.webAutoId=n,r.zuid=a,stringParams=serializeMHJson(r),makeAjaxReq(ajaxUrl=t+"//"+ZH_URL+"/wa/MhSavecookie?callback=processData&"+stringParams)}}function zcFieldUpdateCallback(e){var t=JSON.parse(JSON.stringify(e)),o="expires="+exp_date.toGMTString(),n=t.fieldObj;for(var i in n){var a=i,r=n[i];document.cookie="zcf_"+a+"="+r+";"+o+_sameSiteCookieAttribute}}function getZCFieldCookies(e){for(var t=document.cookie.split(";"),o=0;o<t.length;o++){var n=t[o].trim();if(0===n.indexOf("zcf_")){var i=n.split("=")[0].split("_")[1],a=n.split("=")[1];e[i]=a}}return e}function deleteZCFieldCookies(){for(var e=document.cookie.split(";"),t=0;t<e.length;t++){var o=e[t].trim();if(0===o.indexOf("zcf_")){var n=o.split("=")[0];document.cookie=n+"=expired;expires="+exp_date.toGMTString()+_sameSiteCookieAttribute}}}function getPageActionDetails(e,t){var o=e,n=t,i=window.location.protocol;i.indexOf("http")<0&&(i="http:");var a=document.querySelector("meta[name='zwaid']").getAttribute("content"),r=document.querySelector("meta[name='zwauid']").getAttribute("content"),c=document.querySelector("meta[name='zwaod']").getAttribute("content"),l=document.querySelector("meta[name='zwad']").getAttribute("content"),u=window.location.href,s=u.split("?"),d=(new Array,s[0]),m=d.split("/")[4];a=a.split(","),r=r.split(","),c=c.split(","),l=l.split(",");for(var p=getZCookie("zcs"),g=(new Date).getTime(),h=0;h<a.length;h++){var f=a[h],b=r[h],w=c[h],S="&webAutoId="+f+"&zuid="+b+"&domain="+l[h]+"&orgDomainId="+w+"&reqType=0&endTime="+g;null!=p&&""!=p&&(S=S+"&campaignId="+p);S+="&action=viewed",null!=m&&""!=m&&(S=S+"&value="+m);var v=getZCookie("zc_cu");null!=v&&(S=S+"&zc_cu="+v);var z=getZCookie("zc_ssid");null!=z&&(S=S+"&zc_ssid="+z);getZCookie("zcc"),getZCookie("zcsc");S=(S=S+"&url="+encodeURIComponent(d))+"&parentUrl="+encodeURIComponent(u),S=(S=(S+="&mode=pageAction")+"&purpose="+o)+"&actionValue="+n,paramData=S,makeAjaxReq(ajaxUrl=i+"//"+ZC_RedirUrl+"/wa/ActionLogger?callback=processData"+paramData)}}function fnSetTimer(){if("true"==sessionStorage.getItem("sessiontrack")){if(""==sessionStorage.getItem("bounceAction")||"false"!=sessionStorage.getItem("bounceAction"))sessionStorage.getItem("bnc_time")&&parseInt(sessionStorage.getItem("bnc_time")),sessionStorage.setItem("viewedTime1","0"),viewedCountEntry1=window.setInterval(function(){aa=new Date;var e=parseInt(sessionStorage.getItem("viewedTime1"))+1;sessionStorage.setItem("viewedTime1",e),e>parseInt(sessionStorage.getItem("bnc_time"))&&"false"!=sessionStorage.getItem("bounceAction")&&(sessionStorage.setItem("bounceAction",!1),getPageActionDetails("domain","time_"+parseInt(sessionStorage.getItem("bnc_time"))),window.clearInterval(viewedCountEntry1))},1e3);isCurrentTab=!isCurrentTab}}function setTabChange(){if("true"==sessionStorage.getItem("sessiontrack")||1==getZCookie("zc_consent")){var e=window.location.protocol;e.indexOf("http")<0&&(e="http:");var t=document.querySelector("meta[name='zwaid']").getAttribute("content"),o=document.querySelector("meta[name='zwauid']").getAttribute("content"),n=document.querySelector("meta[name='zwaod']").getAttribute("content"),i=document.querySelector("meta[name='zwad']").getAttribute("content"),a=window.location.href,r=a.split("?"),c=(new Array,r[0]),l=c.split("/")[4];t=t.split(","),o=o.split(","),n=n.split(","),i=i.split(",");for(var u=getZCookie("zcs"),s=0;s<t.length;s++){var d,m=t[s],p=o[s],g=n[s],h="&webAutoId="+m+"&zuid="+p+"&domain="+i[s]+"&orgDomainId="+g+"&reqType=0&checkNewpage=false";null!=u&&""!=u&&(h=h+"&campaignId="+u),null!=l&&""!=l&&(h=h+"&value="+l);h+="&action=viewed";getZCookie("zcc"),getZCookie("zcsc");var f=getZCookie("zc_cu");null!=f&&(h=h+"&zc_cu="+f);var b=getZCookie("zc_ssid"),w=getZCookie("zc_cls"),S=new Date;if(h+="&tabswitch=true",null!=w)sessionStorage.setItem("bounceAction",!0),h=h+"&startTime="+S.getTime()+"&pageOpen=true",document.cookie="zc_cls=;expires="+exp_date.toGMTString()+_sameSiteCookieAttribute,h=(h=(h=h+"&zc_ssid="+b)+"&url="+encodeURIComponent(c))+"&parentUrl="+encodeURIComponent(a),makeAjaxReq(ajaxUrl=e+"//"+ZC_RedirUrl+"/wa/ActionRevisitLogger?callback=processData"+h),fnSetTimer();else h=(h=h+"&endTime="+(d=S.getTime())+"&pageOpen=false")+"&zc_ssid="+b,document.cookie="zc_cls="+d+";expires="+exp_date.toGMTString()+_sameSiteCookieAttribute,h=(h=h+"&url="+encodeURIComponent(c))+"&parentUrl="+encodeURIComponent(a),makeAjaxReq(ajaxUrl=e+"//"+ZC_RedirUrl+"/wa/ActionLogger?callback=processData"+h)}}}function setCloseCookie(e){if("true"==sessionStorage.getItem("sessiontrack")){(e=e||window.event).pageY||e.clientY;var t=window.location.protocol;t.indexOf("http")<0&&(t="http:");var o=document.querySelector("meta[name='zwaid']").getAttribute("content"),n=document.querySelector("meta[name='zwauid']").getAttribute("content"),i=document.querySelector("meta[name='zwaod']").getAttribute("content"),a=document.querySelector("meta[name='zwad']").getAttribute("content"),r=window.location.href,c=r.split("?"),l=(new Array,c[0]),u=l.split("/")[4];o=o.split(","),n=n.split(","),i=i.split(","),a=a.split(",");for(var s=getZCookie("zcs"),d=(new Date).getTime(),m=0;m<o.length;m++){var p=o[m],g=n[m],h=i[m],f="&webAutoId="+p+"&zuid="+g+"&domain="+a[m]+"&orgDomainId="+h+"&reqType=0&endTime="+d;null!=s&&""!=s&&(f=f+"&campaignId="+s);f+="&action=viewed",null!=u&&""!=u&&(f=f+"&value="+u);var b=getZCookie("zc_cu");null!=b&&(f=f+"&zc_cu="+b);var w=getZCookie("zc_ssid");null!=w&&(f=f+"&zc_ssid="+w);var S,v=getZCookie("ssalive");if(null!=v&&(S=(v=v.split("_s"))[1]),1==S){f=f+"&ssalive="+w+"_s"+(S-=2),document.cookie="zc_cls=;expires="+exp_date.toGMTString()+_sameSiteCookieAttribute,document.cookie="zc_sscls="+w+";expires="+exp_date.toGMTString()+_sameSiteCookieAttribute,document.cookie="ssalive="+w+"_s"+S+";expires="+exp_date.toGMTString()+_sameSiteCookieAttribute,f+="&checkNewPage=true",window.localStorage.setItem("zc_cls","true"),sessionStorage.setItem("clsItem","yes"),f+="&purpose=domain";getZCookie("zcc"),getZCookie("zcsc");f=(f=f+"&url="+encodeURIComponent(l))+"&parentUrl="+encodeURIComponent(r),paramData=f,makeAjaxReq(ajaxUrl=t+"//"+ZC_RedirUrl+"/wa/ActionLogger?callback=processData"+paramData)}else{S-=1,document.cookie="ssalive="+w+"_s"+S+";expires="+exp_date.toGMTString()+_sameSiteCookieAttribute,window.localStorage.setItem("zc_cls","false"),f+="&purpose=page";getZCookie("zcc"),getZCookie("zcsc");f=(f=f+"&url="+encodeURIComponent(l))+"&parentUrl="+encodeURIComponent(r),paramData=f,makeAjaxReq(ajaxUrl=t+"//"+ZC_RedirUrl+"/wa/ActionLogger?callback=processData"+paramData)}}}}document.addEventListener("scroll",function(e){});var tabChange=function(){var e,t,o={hidden:"visibilitychange",webkitHidden:"webkitvisibilitychange",mozHidden:"mozvisibilitychange",msHidden:"msvisibilitychange"};for(e in o)if(e in document){t=o[e];break}return function(o){return o&&(window.addEventListener?document.addEventListener(t,o):window.attachEvent(t,o)),!document[e]}}();function setItem(e){if(cookieEnabled){var t=document.querySelector("meta[name='zwaod']").getAttribute("content"),o=document.querySelector("meta[name='zwaid']").getAttribute("content"),n=(o=o.split(","))[0],i=document.querySelector("meta[name='zwauid']").getAttribute("content"),a=(i=i.split(","))[0],r={},c=window.location.protocol;c.indexOf("http")<0&&(c="http:");var l=getZCookie("zc_cu");r.data=e,r.zc_cu=l,r.purpose="setItem",r.orgDomainId=t,r.webAutoId=n,r.zuid=a,stringParams=serializeMHJson(r),makeAjaxReq(ajaxUrl=c+"//"+ZH_URL+"/wa/MhSetItem?callback=processData&"+stringParams)}}function removeItem(e){if(cookieEnabled){var t={},o=document.querySelector("meta[name='zwaod']").getAttribute("content"),n=document.querySelector("meta[name='zwaid']").getAttribute("content"),i=(n=n.split(","))[0],a=document.querySelector("meta[name='zwauid']").getAttribute("content"),r=(a=a.split(","))[0],c=window.location.protocol;c.indexOf("http")<0&&(c="http:");var l=getZCookie("zc_cu");t.data=e,t.zc_cu=l,t.purpose="removeItem",t.orgDomainId=o,t.webAutoId=i,t.zuid=r,stringParams=serializeMHJson(t),makeAjaxReq(ajaxUrl=c+"//"+ZH_URL+"/wa/MhSetItem?callback=processData&"+stringParams)}}function checkOutItem(e){if(cookieEnabled){var t={},o=document.querySelector("meta[name='zwaid']").getAttribute("content"),n=(o=o.split(","))[0],i=document.querySelector("meta[name='zwauid']").getAttribute("content"),a=(i=i.split(","))[0];authToken=authToken.trim();var r=document.querySelector("meta[name='zwaod']").getAttribute("content"),c=window.location.protocol;c.indexOf("http")<0&&(c="http:");var l=getZCookie("zc_cu");t.data=e,t.zc_cu=l,t.purpose="checkOutItem",t.orgDomainId=r,t.webAutoId=n,t.zuid=a,stringParams=serializeMHJson(t),makeAjaxReq(ajaxUrl=c+"//"+ZH_URL+"/wa/MhSetItem?callback=processData&"+stringParams)}}function zhFade(e,t,o){void 0===t&&(t=50),void 0===o&&(o=void 0);var n=1,i=e.style.opacity;void 0!==i&&""!=i||(i=1);var a=setInterval(function(){if(n<=.1)return clearInterval(a),e.style.display="none",e.style.opacity=i,e.style.filter="alpha(opacity="+100*i+")",void(o&&o());e.style.opacity=n,e.style.filter="alpha(opacity="+100*n+")",n-=.1*n},t)}function zc_deny(){var e=getZCookie("zc_consent");null!=e&&1==e&&(document.cookie="zc_consent=0; expires="+exp_date.toGMTString()+"; path=/"+_sameSiteCookieAttribute,document.cookie="zc_show=0; expires="+exp_date.toGMTString()+"; path=/"+_sameSiteCookieAttribute),zhFade(document.querySelector("#zc_notice"))}function zc_accept(){var e=getZCookie("zc_consent");null!=e&&1==e&&(document.cookie="zc_consent=1; expires="+exp_date.toGMTString()+"; path=/"+_sameSiteCookieAttribute,document.cookie="zc_show=0; expires="+exp_date.toGMTString()+"; path=/"+_sameSiteCookieAttribute),zhFade(document.querySelector("#zc_notice"))}function zcActionCallback(e){setTimeout(function(){zcActionCallback1(e)},3e3)}function zcActionCallback1(e){var t=JSON.parse(JSON.stringify(e)),o=t.action,n=t.selId,i=t.selClass,a=t.selHref,r=t.selIndex;n=new RegExp(/^[a-zA-Z][a-zA-Z0-9-_]*$/).test(n)?n:"";var c="";if(i&&"null"!=i){var l=i.split(" ");if(" "!=l&&!l.includes(":"))for(var u=0;u<l.length;u++)l[u].length>0&&(c=c+"."+l[u])}if(o&&0==o.indexOf("SF_ACTION_")){!0;var s="number"==typeof r?r:0;s=-1==s?0:s;var d=n&&"null"!=n?"[id="+n+"]":"";d+=c,d+=a&&"null"!=a?"[href="+a+"]":"";var m=t.od,p=document.querySelectorAll(d);0==p.length&&(d=n&&"null"!=n?"[id="+n+"]":"",p=document.querySelectorAll(d));var g=null;return p&&p[s]&&(g=p[s]),void zcmhCatchSubmit(g,o,m)}var h="";"null"!=a?"null"!=n&&"null"!=i?-1===(h=null!=document.querySelector("[id='"+n+"']"+c+"[href='"+a+"']")&&void 0!=document.querySelector("[id='"+n+"']"+c+"[href='"+a+"']").getAttribute("onclick")?document.querySelector("[id='"+n+"']"+c+"[href='"+a+"']").getAttribute("onclick")+";":"").indexOf("zcAction('"+o+"')")&&null!=document.querySelector("[id='"+n+"']"+c+"[href='"+a+"']")&&document.querySelector("[id='"+n+"']"+c+"[href='"+a+"']").setAttribute("onclick",h+"zcAction('"+o+"')"):"null"!=n?-1===(h=null!=document.querySelector("[id='"+n+"'][href='"+a+"']")&&void 0!=document.querySelector("[id='"+n+"'][href='"+a+"']").getAttribute("onclick")?document.querySelector("[id='"+n+"'][href='"+a+"']").getAttribute("onclick")+";":"").indexOf("zcAction('"+o+"')")&&null!=document.querySelector("[id='"+n+"'][href='"+a+"']")&&document.querySelector("[id='"+n+"'][href='"+a+"']").setAttribute("onclick",h+"zcAction('"+o+"')"):"null"!=i?-1===(h=null!=document.querySelector(c+"[href='"+a+"']")&&void 0!=document.querySelector(c+"[href='"+a+"']").getAttribute("onclick")?document.querySelector(c+"[href='"+a+"']").getAttribute("onclick")+";":"").indexOf("zcAction('"+o+"')")&&null!=document.querySelector(c+"[href='"+a+"']")&&document.querySelector(c+"[href='"+a+"']").setAttribute("onclick",h+"zcAction('"+o+"')"):-1===(h=null!=document.querySelector("[href='"+a+"']")&&void 0!=document.querySelector("[href='"+a+"']").getAttribute("onclick")?document.querySelector("[href='"+a+"']").getAttribute("onclick")+";":"").indexOf("zcAction('"+o+"')")&&null!=document.querySelector("[href='"+a+"']")&&document.querySelector("[href='"+a+"']").setAttribute("onclick",h+"zcAction('"+o+"')"):"null"!=n&&"null"!=i?-1===(h=null!=document.querySelector("[id='"+n+"']"+c)&&void 0!=document.querySelector("[id='"+n+"']"+c).getAttribute("onclick")?document.querySelector("[id='"+n+"']"+c).getAttribute("onclick")+";":"").indexOf("zcAction('"+o+"')")&&null!=document.querySelector("[id='"+n+"']"+c)&&document.querySelector("[id='"+n+"']"+c).setAttribute("onclick",h+"zcAction('"+o+"')"):"null"!=n?-1===(h=null!=document.querySelector("[id='"+n+"']")&&void 0!=document.querySelector("[id='"+n+"']").getAttribute("onclick")?document.querySelector("[id='"+n+"']").getAttribute("onclick")+";":"").indexOf("zcAction('"+o+"')")&&null!=document.querySelector("[id='"+n+"']")&&document.querySelector("[id='"+n+"']").setAttribute("onclick",h+"zcAction('"+o+"')"):"null"!=i&&-1===(h=null!=document.querySelector(""+c)&&void 0!=document.querySelector(""+c).getAttribute("onclick")?document.querySelector(""+c).getAttribute("onclick")+";":"").indexOf("zcAction('"+o+"')")&&null!=document.querySelector(""+c)&&document.querySelector(""+c).setAttribute("onclick",h+"zcAction('"+o+"')")}function zcmhCatchSubmit(e,t,o){if(!e||!o)return!1;var n=t.replace("SF_ACTION_",""),i=e.getAttribute("zcmhFormIDs");if(!!i){var a=i.split(",");if(a.indexOf(n)>-1)return;a.push(n),e.setAttribute("zcmhFormIDs",a.join(","))}else e.setAttribute("zcmhFormIDs",n);watrackSignupEvent(t);var r=e.querySelectorAll("input,select,textarea"),c=e.querySelectorAll("input[type='submit'],input[type='button'],button"),l=e.id,u=null;if(l&&(u=document.querySelectorAll("button[type='submit'][form='"+l+"']")),r)for(var s=function(n){13!=n.keyCode||n.is("textarea")||zcmhSendSFData(e,n,t,o)},d=0;d<r.length;d++)r[d].addEventListener("keyup",s);var m=function(n){zcmhSendSFData(e,n,t,o)};if(c)for(d=0;d<c.length;d++)c[d].addEventListener("click",m);if(u)for(d=0;d<u.length;d++)u[d].addEventListener("click",m)}function zcmhSendSFData(e,t,o,n){var i=t.type;if(!e||!o||void 0!==window["zcmhreq_"+o]&&window["zcmhreq_"+o]||void 0!==window["zcmhreq_"+o+"_"+i]&&window["zcmhreq_"+o+"_"+i].trigger)void 0!==window["zcmhreq_"+o+"_"+i]&&window["zcmhreq_"+o+"_"+i].trigger&&(window["zcmhreq_"+o+"_"+i].trigger=!1);else{var a=e.querySelectorAll("input[name],select[name],textarea[name]");if(a){for(var r={},c=!0,l=0;l<a.length;l++){var u=a[l],s=u.name,d=u.tagName,m=u.value;if("true"==u.getAttribute("aria-required")&&""==m){c=!1;break}if("SELECT"==d&&"multiple"==u.getAttribute("multiple")){m="";var p=u.querySelectorAll("option");if(p&&p.length>0){for(var g=0;g<p.length;g++){var h=p[g];h.selected&&(m+=h.value+",")}m=m.substring(0,m.lastIndexOf(","))}}m&&""!=m&&(r[s]=m)}if(r&&c){window["zcmhreq_"+o+"_"+i]={},window["zcmhreq_"+o+"_"+i].event=t,window["zcmhreq_"+o]=!0,window["zcmhreq_"+o+"_"+i].trigger=!0;var f=window.location.protocol,b=ZC_RedirUrl;b=f+"//"+b,b+="/ua/sfoptin";var w={};w.signupFormIx=o.replace("SF_ACTION_",""),w.formData=r,w.process="signupFormAction",w.od=n;var S=location.hostname,v=document.cookie,z=v.indexOf("zc_cu=");if(-1==z)v=null;else{z=v.indexOf("=",z)+1;var k=v.indexOf(";",z);-1==k&&(k=v.length),v=unescape(v.substring(z,k))}w.hostnameFirstParty=S,w.cookie=v,w.isFromWebsite="true",w.url=window.location.href;var A=getZCookie("zc_tp");null!=A&&(w.zc_tp=A),"click"==i&&t.preventDefault(),setTimeout(function(){zcmhsendAjaxReq(b,w,"POST",!0,function(e){watrackSignupEvent(o),window["zcmhreq_"+o]=!1,"click"==i?window["zcmhreq_"+o+"_"+i].event.target.click():window["zcmhreq_"+o+"_"+i].trigger=!1})},1)}}}}var zcmhsendAjaxReq=function(e,t,o,n,i,a){void 0===o&&(o="GET"),void 0===n&&(n=!0),void 0===i&&(i=function(e){}),void 0===a&&(a=!1);var r,c,l=!1;r="object"==typeof t?zcmhSerializeJson(t):t,"GET"==o&&(e+="?"+r,r=null);try{if("POST"==o){var u=e+"?"+r;l=navigator.sendBeacon(u),i()}else fetch(e,{method:"GET",credentials:"include",mode:"no-cors","keep-alive":!0}),i()}catch(t){if("GET"==o&&(l=!1),!l){try{c=new XMLHttpRequest}catch(e){c=new window.ActiveXObject("Microsoft.XMLHTTP")}c.open(o,e,n)}}if(!l){n&&(c.onreadystatechange=function(){4==this.readyState&&i&&i(c.responseText)});try{if("POST"==o&&c.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a||(c.withCredentials=!0),c.send(r),!n)return i?i(c.responseText):c.responseText}catch(e){i()}}},watrackSignupEvent=function(e){var t;(t={}).category="update",t.action="view",t.viewFrom="URL_ACTION",t.signupFormIx=e.replace("SF_ACTION_",""),t.source=encodeURIComponent(window.location.href);var o=ZH_URL;if(void 0!=o&&o.indexOf("http")<0){var n=window.location.protocol;n.indexOf("http")<0&&(n="http:"),o=(n="https:")+"//"+o}zcmhsendAjaxReq(o+"/ua/TrailEvent",t,"POST",!0,null,!0)},zcmhSerializeJson=function(e){void 0===e&&(e={});for(var t=Object.keys(e),o="",n=0;n<t.length;n++){var i=e[t[n]];"object"==typeof i&&(i=JSON.stringify(i)),i=encodeURIComponent(i),o+=t[n]+"="+i,o+="&"}return o.substring(0,o.length-1)};function zcTouchPointCallback(e){var t=JSON.parse(JSON.stringify(e)).zc_tp;document.cookie="zc_tp="+t+";expires="+exp_date.toGMTString()+"; path=/"+_sameSiteCookieAttribute,document.cookie="zc_tp="+t+";expires="+exp_date.toGMTString()+"; path=/"}function setOnBeforeUnloadEvent(e){setCloseCookie(e);for(var t=+new Date;+new Date-t<2e3&&0==isEventCompleted;)1}function cookieHandlerService(){this._samesiteSecureString="",this.shouldAddSameSiteSecure()&&(this._samesiteSecureString=";samesite=none;secure")}window.addEventListener("pagehide",setOnBeforeUnloadEvent),cookieHandlerService.prototype={shouldAddSameSiteSecure(){var e=!1;try{window.location.protocol.indexOf("https")>-1&&this.shouldEnableSameSiteNone(navigator.userAgent)&&(e=!0)}catch(e){}return e},shouldEnableSameSiteNone(e){return!this.isSameSiteNoneIncompatible(e)},isSameSiteNoneIncompatible(e){return this.hasWebKitBug(e)||this.dropssameSiteCookies(e)},hasWebKitBug(e){return this.checkIosVersion(12,e)||this.checkMacosxVersion(10,14,e)&&(this.checkSafari(e)||this.checkMacEmbeddedBrowser(e))},dropssameSiteCookies(e){return this.checkUcBrowser(e)?!this.checkUcBrowserVersionAtLeast(12,13,2,e):this.checkChromiumBased(e,51,66)},checkIosVersion(e,t){var o=/\(iP.+; CPU .*OS (\d+)[_\d]*.*\) AppleWebKit\//.exec(t);try{return o[1]==e}catch(e){return!1}},checkMacosxVersion(e,t,o){var n=/\(Macintosh;.*Mac OS X (\d+)_(\d+)[_\d]*.*\) AppleWebKit\//.exec(o);try{return n[1]==e&&n[2]==t}catch(e){return!1}},checkSafari(e){return e.match("Version/.* Safari/")&&!this.checkChromiumBased(e,51,66)},checkMacEmbeddedBrowser:e=>e.match("^Mozilla/[.d]+ (Macintosh;.*Mac OS X [_d]+) AppleWebKit/[.d]+ (KHTML, like Gecko)$"),checkChromiumBased(e,t,o){var n="Chrom(e|ium)";if(e.match(n)){var i=(n=/Chrom[^ \/]+\/(\d+)[\.\d]* /).exec(e);try{var a=i[1];return a>=t&&a<=o}catch(e){return!1}}},checkUcBrowser:e=>e.match("UCBrowser/"),checkUcBrowserVersionAtLeast(e,t,o,n){var i=/UCBrowser\/(\d+)\.(\d+)\.(\d+)[\.\d]* /.exec(n);try{var a=i[1],r=i[2],c=i[3];return a!=e?a>e:r!=t?r>t:c>=o}catch(e){return!1}}};var _sameSiteCookieAttribute=(new cookieHandlerService)._samesiteSecureString;