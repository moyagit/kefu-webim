!function(e,t){"use strict";var n=n||{};n.utils=n.utils||{},n.utils.encode=function(e,t){if(!e||0===e.length)return"";var n="";return n=e.replace(/&amp;/g,"&"),n=n.replace(/<(?=[^o][^)])/g,"&lt;"),n=n.replace(/>/g,"&gt;"),n=n.replace(/\"/g,"&quot;"),n=n.replace(/\n/g,"<br>")},n.utils.decode=function(e){if(!e||0===e.length)return"";var t="";return t=e.replace(/&amp;/g,"&")},n.utils.convertFalse=function(e){return e="undefined"==typeof e?"":e,"false"===e?!1:e},n.utils.getIEVersion=function(){var e,t=navigator.userAgent,n={4:8,5:9,6:10,7:11};return e=t.match(/MSIE (\d+)/i),e&&e[1]?+e[1]:(e=t.match(/Trident\/(\d+)/i),e&&e[1]?n[e[1]]||null:null)},n.utils.queryString=function(e,t){var n=e.match(new RegExp("[?&]?"+t+"=[0-9a-zA-Z%@._-]*[^&]","g"));return n=n&&n[0]?"?"==n[0][0]||"&"==n[0][0]?n[0].slice(1):n[0]:"",n.slice(t.length+1)},n.utils.getConfig=function(e,t){var n;if(e&&t){for(var o=document.scripts,s=0,i=o.length;i>s;s++)if(o[s].src&&0<o[s].src.indexOf(e)){n=o[s].src;break}}else n=e?e:location.href;var r={};if(!n)return{str:"",json:r,domain:""};var a,l=n.indexOf("?"),c=n.indexOf("//")>-1?n.indexOf("//"):0,u=n.slice(c,n.indexOf("/",c+2)),d=n.slice(l+1).split("&");r.src=n.slice(0,l);for(var m=0,f=d.length;f>m;m++)a=d[m].split("="),r[a[0]]=a.length>1?decodeURIComponent(a[1]):"";return{str:n,json:r,domain:u}},n.utils.isAndroid=/Android/i.test(navigator.userAgent),n.utils.isMobile=/mobile/i.test(navigator.userAgent),n.utils.isQQBrowserInAndroid=n.utils.isAndroid&&/MQQBrowser/.test(navigator.userAgent);var o=function(e,t,n){e.addEventListener?e.addEventListener(t,n):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n},s=function(e,t,n){e.removeEventListener?e.removeEventListener(t,n):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null};n.utils.on=o,n.utils.remove=s,n.utils.isMin=function(){return document.visibilityState&&"hidden"==document.visibilityState||document.hidden?!0:void 0};var i=function(){var t=function(e,n){return!this instanceof t?new t:(this.t=(new Date).getTime(),this.iframe=document.getElementById(e),this.prefix=n||"_em_",void delete this.t)};return t.prototype.sendToParent=function(t){return e.parent.postMessage(JSON.stringify(t),"*"),this},t.prototype.sendToIframe=function(e){return this.iframe.contentWindow.postMessage(JSON.stringify(e),"*"),this},t.prototype.listenToParent=function(t){return o(e,"message",function(e){t(JSON.parse(e.data))}),this},t.prototype.listenToIframe=function(t){return o(e,"message",function(e){t(JSON.parse(e.data))}),this},t}(),r={set:function(t,n,o){if(o&&"localStorage"in e)localStorage.setItem(encodeURIComponent(t),encodeURIComponent(n));else{var s=new Date;s.setTime(s.getTime()+2592e6),document.cookie=encodeURIComponent(t)+"="+encodeURIComponent(n)+";path=/;expires="+s.toGMTString()}},get:function(t,n){if(n&&"localStorage"in e){var o=localStorage.getItem(encodeURIComponent(t));return o?o:""}var s=document.cookie.match("(^|;) ?"+encodeURIComponent(t)+"=([^;]*)(;|$)");return s?decodeURIComponent(s[2]):""}};Date.prototype.format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in t)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[n]:("00"+t[n]).substr((""+t[n]).length)));return e},e.EasemobWidget=n,e.TransferMessage=i,e.Emc=r}(window,void 0),function(e,t){"use strict";var n,o,s,i,r,a=document.title,l={x:10,y:10},c={x:0,y:0},u=document.createElement("div"),d="-新消息提醒  ",m=0,f=document.referrer,p=function(e,t){var n;if(e&&t){for(var o=document.scripts,s=0,i=o.length;i>s;s++)if(o[s].src&&0<o[s].src.indexOf(e)){n=o[s].src;break}}else n=e?e:location.href;var r={};if(!n)return{str:"",json:r,domain:""};var a,l=n.indexOf("?"),c=n.indexOf("//")>-1?n.indexOf("//"):0,u=n.slice(c,n.indexOf("/",c+2)),d=n.slice(l+1).split("&");r.src=n.slice(0,l);for(var m=0,f=d.length;f>m;m++)a=d[m].split("="),r[a[0]]=a.length>1?decodeURIComponent(a[1]):"";return{str:n,json:r,domain:u}},g=function(e){return e="undefined"==typeof e?"":e,"false"===e?!1:e},h=p("easemob.js",!0);h.json.hide=g(h.json.hide),h.json.sat=g(h.json.sat),h.json.tenants=g(h.json.tenants);var y=function(e,t){var n=e||h.domain+"/webim/im.html?tenantId=";for(var o in t)t.hasOwnProperty(o)&&(n.indexOf(o+"=")<0?n+="&"+o+"="+t[o]:n=n.replace(new RegExp(o+"=[^&#?]*","gim"),o+"="+t[o]));return n},b=function(){n.listenToIframe(function(e){switch(e.event){case"msgPrompt":var t,n=(a+d).split("");clearInterval(m),m=setInterval(function(){t=n.shift(),document.title=t+Array.prototype.join.call(n,""),n.push(t)},360);break;case"notify":T(h.domain+"/webim/static/img/notify.png","新消息",e.detail);break;case"recoveryTitle":clearInterval(m),document.title=a;break;case"showChat":o.style.width="400px",o.style.height="500px",o.style.visibility="visible",o.style.right=l.x+"px",o.style.bottom=l.y+"px",o.style.cssText+="box-shadow: 0 4px 8px rgba(0,0,0,.2);border-radius: 4px;border: 1px solid #ccc\\9;";break;case"minChat":E&&clearTimeout(E),o.style.boxShadow="none",o.style.borderRadius="4px;",o.style.left="auto",o.style.right="-5px",o.style.top="auto",o.style.bottom="10px",o.style.border="none",h.json.hide?(o.style.visibility="hidden",o.style.width="12px",o.style.height="12px"):(o.style.height="37px",o.style.width="104px");break;case"setuser":Emc.set("emKefuUser"+e.tenantId,e.user,h.json.tenants);break;case"setgroupuser":Emc.set(e.group+e.tenantId,e.user,h.json.tenants);break;case"setchannel":Emc.set("emKefuChannel"+e.tenantId,e.channel,h.json.tenants);break;case"dragready":c.x=isNaN(Number(e.x))?0:Number(e.x),c.y=isNaN(Number(e.y))?0:Number(e.y),u.style.display="block",o.style.display="none",EasemobWidget.utils.on(document,"mousemove",w);break;case"dragend":I()}})};e.easemobIM=function(t){e.easemobIMS(null,t)},e.easemobIMS=function(t,n){if(t=t||h.json.tenantId){o||v(t,"initIframWithoutSettingSrc");var s,i="",r={tenantId:t,sat:h.json.sat,user:"",referrer:encodeURIComponent(f),show:!0};if(h.json.resources&&(r.resources=h.json.resources),n?(s=Emc.get(n+t,h.json.tenants),r.emgroup=n,r.user=s,i=y(o.getAttribute("src"),r)):(s=Emc.get("emKefuUser"+t,h.json.tenants),r.user=s,i=y(o.getAttribute("src"),r)),EasemobWidget.utils.isMobile){var a=e.event.srcElement||e.event.target;a.setAttribute("href",i),a.setAttribute("target","_blank")}else o.setAttribute("src",i)}};var x=function(e,t){if(e&&!o){o=/MSIE (6|7|8)/.test(navigator.userAgent)?document.createElement('<iframe name="'+(new Date).getTime()+'">'):document.createElement("iframe"),s="EasemobIframe"+(new Date).getTime(),o.id=s,o.name=(new Date).getTime(),o.frameBorder=0,o.allowTransparency="true",o.style.cssText=["z-index:16777269;","overflow:hidden;","position:fixed;","bottom:10px;","right:-5px;","border:none;","width:400px;","height:0;","display:none;","transition:all .01s;"].join(""),u.style.cssText=["display:none;","cursor:move;","z-index:16777270;","position:fixed;","bottom:10px;","right:10px;","border:none;","width:400px;","height:500px;","border-radius:4px;","box-shadow: 0 4px 8px rgba(0,0,0,.2);","border-radius: 4px;"].join(""),u.style.background="url("+h.domain+"/webim/static/img/drag.png) no-repeat",r={tenantId:e||h.json.tenantId,hide:h.json.hide,sat:h.json.sat,user:i,referrer:encodeURIComponent(f)},h.json.resources&&(r.resources=h.json.resources);var a="";for(var l in r)r.hasOwnProperty(l)&&(a+=l+"="+r[l]+"&");"&"===a.slice(-1)&&(a=a.slice(0,-1)),t||(o.src=h.domain+"/webim/im.html?"+a),h.json.hide?(o.style.height="0",o.style.width="0"):(o.style.height="37px",o.style.width="104px"),EasemobWidget.utils.isMobile&&(o.style.cssText+="left:0;bottom:0",o.style.width="100%"),document.body.appendChild(u),document.body.appendChild(o),o.readyState?o.onreadystatechange=function(){("loaded"===o.readyState||"complete"===o.readyState)&&(this.style.display="block",n=new TransferMessage(s),b(),n.sendToIframe(r))}:o.onload=function(){this.style.display="block",n=new TransferMessage(s),b(),n.sendToIframe(r)}}},v=function(e,t){var n=e||h.json.tenantId;i=Emc.get("emKefuUser"+n,h.json.tenants),x(n,t),EasemobWidget.utils.on(u,"mouseup",I),j()},E=0,w=function(t){var n=(e.event||t,document.documentElement.clientWidth),o=document.documentElement.clientHeight,s=n-t.clientX-400+c.x,i=o-t.clientY-500+c.y;t.clientX-c.x<=0?s=n-400:t.clientX+400-c.x>=n&&(s=0),t.clientY-c.y<=0?i=o-500:t.clientY+500-c.y>=o&&(i=0),u.style.left="auto",u.style.top="auto",u.style.right=s+"px",u.style.bottom=i+"px",l={x:s,y:i},clearTimeout(E),E=setTimeout(I,500)},I=function(){EasemobWidget.utils.remove(document,"mousemove",w),o.style.left="auto",o.style.top="auto",o.style.right=l.x+"px",o.style.bottom=l.y+"px",u.style.left="auto",u.style.top="auto",u.style.right=l.x+"px",u.style.bottom=l.y+"px",u.style.display="none",o.style.display="block",setTimeout(function(){n.sendToIframe({event:"dragend"})},3e3)},j=function(){EasemobWidget.utils.on(e,"resize",function(){var e=document.documentElement.clientWidth,t=document.documentElement.clientHeight,n=Number(o.style.right.slice(0,-2)),s=Number(o.style.bottom.slice(0,-2));400>e?(o.style.left="auto",o.style.right=0,u.style.left="auto",u.style.right=0):400>e-n?(o.style.right=e-400+"px",o.style.left=0,u.style.right=e-400+"px",u.style.left=0):(o.style.left="auto",u.style.left="auto"),500>t?(o.style.top="auto",o.style.bottom=0):500>t-s?(o.style.bottom=t-500+"px",o.style.top=0):o.style.top="auto"})},T=function(){var t=0;return function(n,o,s){if(0===t){t=setTimeout(function(){t=0},3e3),n=n||"",o=o||"",s=s||"";try{if(e.Notification)if("granted"===Notification.permission){var i=new Notification(o,{icon:n,body:s});i.onclick=function(){"function"==typeof e.focus&&e.focus(),this.close()},setTimeout(function(){i.close()},3e3)}else Notification.requestPermission()}catch(r){}}}}();h.json.hide||v()}(window,void 0);