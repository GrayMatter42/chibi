/*!chibi 2.0.0, Copyright 2012-2016 Kyle Barrow, released under MIT license */
!function(){"use strict";function e(){var e;for(d=!0,e=0;e<f.length;e+=1)f[e]();f=[]}function t(){var t;for(p=!0,d||e(),t=0;t<h.length;t+=1)h[t]();h=[]}function n(e,t){var n;for(n=t.length-1;n>=0;n-=1)e(t[n])}function a(e){return e.replace(/-\w/g,function(e){return e.charAt(1).toUpperCase()})}function s(e,t){return e.currentStyle?e.currentStyle[a(t)]:v.getComputedStyle?v.getComputedStyle(e,null).getPropertyValue(t):null}function c(e,t){return encodeURIComponent(e).replace(/%20/g,"+")+"="+encodeURIComponent(t).replace(/%20/g,"+")}function r(e,t,n){try{e.style[a(t)]=n}catch(s){}}function l(e){e.style.display="","none"===s(e,"display")&&(e.style.display="block")}function o(e){return e=e.reverse(),1===e.length&&(e=e[0]),e}function u(e){var t,a,s,r="";if(e.constructor===Object){for(t in e)if(e.hasOwnProperty(t))if(e[t].constructor===Array)for(a=0;a<e[t].length;a+=1)r+="&"+c(t,e[t][a]);else r+="&"+c(t,e[t])}else n(function(e){if("FORM"===e.nodeName)for(a=0;a<e.elements.length;a+=1)if(t=e.elements[a],!t.disabled)switch(t.type){case"button":case"image":case"file":case"submit":case"reset":break;case"select-one":t.length>0&&(r+="&"+c(t.name,t.value));break;case"select-multiple":for(s=0;s<t.length;s+=1)t[s].selected&&(r+="&"+c(t.name,t[s].value));break;case"checkbox":case"radio":t.checked&&(r+="&"+c(t.name,t.value));break;default:r+="&"+c(t.name,t.value)}},e);return r.length>0?r.substring(1):""}function i(e){var t,c,i,y=[],b=!1;if(e)if(e.nodeType&&1===e.nodeType)y=[e];else if("object"==typeof e)b="number"!=typeof e.length,y=e;else if("string"==typeof e)for(m.querySelectorAll||(m.querySelectorAll=function(e){var t,n,a,c=m.getElementsByTagName("head")[0],r=[];if(t=m.createElement("STYLE"),t.type="text/css",t.styleSheet){for(t.styleSheet.cssText=e+" {a:b}",c.appendChild(t),n=m.getElementsByTagName("*"),a=0;a<n.length;a+=1)"b"===s(n[a],"a")&&r.push(n[a]);c.removeChild(t)}return r}),c=m.querySelectorAll(e),i=0;i<c.length;i+=1)y[i]=c[i];return t=b?{}:y,t.ready=function(e){e&&(d?e():f.push(e))},t.loaded=function(e){e&&(p?e():h.push(e))},t.loop=function(e){"function"==typeof e&&n(function(t){return e.apply(t,arguments)},y)},t.find=function(e){if(e){var t,n=[];switch(e){case"first":y.length>0&&(y=[y.shift()]);break;case"last":y.length>0&&(y=[y.pop()]);break;case"odd":case"even":for(t="odd"===e?0:1;t<y.length;t+=2)n.push(y[t]);y=n}}return y.length>0?1===y.length?y[0]:y:!1},t.hide=function(){n(function(e){e.style.display="none"},y)},t.show=function(){n(function(e){l(e)},y)},t.toggle=function(){n(function(e){"none"===s(e,"display")?l(e):e.style.display="none"},y)},t.remove=function(){n(function(e){try{e.parentNode.removeChild(e)}catch(t){}},y),y=[]},t.css=function(e,t){var c=[];return n(function(n){t?r(n,e,t):n.style[a(e)]?c.push(n.style[a(e)]):s(n,e)?c.push(s(n,e)):c.push(null)},y),c.length>0?o(c):void 0},t.cls=function(e,t){var a,s,c,r,l,u=[];return e&&(a=e.split(/\s+/),t=t||"replace"),n(function(n){if(s=n.className,e){switch(t){case"add":n.className=s+" "+e;break;case"replace":n.className=e;break;case"has":case"toggle":case"remove":for(r=!0,l=0;l<a.length;l+=1)if(c=new RegExp("\\b"+a[l]+"\\b","g"),"has"===t){if(!s.match(c)){r=!1;break}}else"toggle"===t?n.className=n.className.match(c)?n.className.replace(c,""):n.className+" "+a[l]:n.className=n.className.replace(c,"");"has"===t&&u.push(r)}n.className=n.className.replace(/^\s+|\s+$/g,"")}else u.push(s)},y),u.length>0?o(u):void 0},t.getClass=function(){return t.cls()},t.setClass=function(e){return t.cls(e)},t.addClass=function(e){return t.cls(e,"add")},t.removeClass=function(e){return t.cls(e,"remove")},t.toggleClass=function(e){return t.cls(e,"toggle")},t.hasClass=function(e){return t.cls(e,"has")},t.html=function(e,t){var a,s,c=[];return n(function(n){if(t)for(a=m.createElement("div"),a.innerHTML=e;null!==(s=a.lastChild);)try{"before"===t?n.parentNode.insertBefore(s,n):"after"===t?n.parentNode.insertBefore(s,n.nextSibling):"append"===t?n.appendChild(s):"prepend"===t&&n.insertBefore(s,n.firstChild)}catch(r){break}else e?n.innerHTML=e:c.push(n.innerHTML)},y),c.length>0?o(c):void 0},t.htmlBefore=function(e){return t.html(e,"before")},t.htmlAfter=function(e){return t.html(e,"after")},t.htmlAppend=function(e){return t.html(e,"append")},t.htmlPrepend=function(e){return t.html(e,"prepend")},t.attr=function(e,t){var a=[];return n(function(n){if(e)switch(e=e.toLowerCase()){case"style":t?n.style.cssText=t:n.style.cssText?a.push(n.style.cssText):a.push(null);break;case"class":t?n.className=t:n.className?a.push(n.className):a.push(null);break;default:t?n.setAttribute(e,t):n.getAttribute(e)?a.push(n.getAttribute(e)):a.push(null)}},y),a.length>0?o(a):void 0},t.val=function(e){var t,a,s,c,r=[],l=[];return"string"==typeof e&&(e=[e]),n(function(n){if(e)switch(n.nodeName){case"SELECT":for(t=0;t<n.length;t+=1)for(a=0;a<e.length;a+=1)if(n[t].selected="",n[t].value===e[a]){n[t].selected="selected";break}break;case"INPUT":switch(n.type){case"checkbox":case"radio":for(n.checked="",t=0;t<e.length;t+=1)if(n.value===e[t]){n.checked="checked";break}break;default:n.value=e[0]}break;case"TEXTAREA":case"BUTTON":n.value=e[0]}else switch(n.nodeName){case"SELECT":for(c=l.length,l.push([]),t=0;t<n.length;t+=1)n[t].selected&&l[c].push(n[t].value);switch(l[c].length){case 0:l[c]=null;break;case 1:l[c]=l[c][0]}break;case"INPUT":switch(n.type){case"checkbox":n.checked?l.push(n.value):l.push(null);break;case"radio":for(s=!1,t=0;t<r.length;t+=1)r[t][0]===n.name&&(n.checked&&(l[r[t][1]]=n.value),s=!0);s||(r.push([n.name,l.length]),n.checked?l.push(n.value):l.push(null));break;default:l.push(n.value)}break;case"TEXTAREA":case"BUTTON":l.push(n.value)}},y),l.length>0?o(l):void 0},t.on=function(t,a,s){(e===v||e===m)&&(y=[e]),n(function(e){m.addEventListener?s?e.removeEventListener(t,a,!1):e.addEventListener(t,a,!1):m.attachEvent&&(s?(e.detachEvent("on"+t,e[t+a]),e[t+a]=null):(e[t+a]=function(){return a.apply(e,arguments)},e.attachEvent("on"+t,e[t+a])))},y)},t.off=function(e,n){t.on(e,n,!0)},t.ajax=function(e,t,n,a,s){var c,r,l=u(y),o=t?t.toUpperCase():"GET",i=new RegExp("http[s]?://(.*?)/","gi"),f=i.exec(e),h="_ts="+ +new Date,d=m.getElementsByTagName("head")[0],p="chibi"+ +new Date+(g+=1);!l||"GET"!==o&&"DELETE"!==o||(e+=-1===e.indexOf("?")?"?"+l:"&"+l,l=null),!s&&f&&v.location.host!==f[1]?(a&&(e+=-1===e.indexOf("?")?"?"+h:"&"+h),e=e.replace("=%3F","=?"),n&&-1!==e.indexOf("=?")&&(e=e.replace("=?","="+p),v[p]=function(e){try{n(e,200)}catch(t){}v[p]=void 0}),r=document.createElement("script"),r.async=!0,r.src=e,r.onload=function(){d.removeChild(r)},d.appendChild(r)):(v.XMLHttpRequest?c=new XMLHttpRequest:v.ActiveXObject&&(c=new ActiveXObject("Microsoft.XMLHTTP")),c&&(a&&(e+=-1===e.indexOf("?")?"?"+h:"&"+h),c.open(o,e,!0),c.onreadystatechange=function(){4===c.readyState&&n&&n(c.responseText,c.status)},c.setRequestHeader("X-Requested-With","XMLHttpRequest"),("POST"===o||"PUT"===o)&&c.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),c.send(l)))},t}var f=[],h=[],d=!1,p=!1,g=0,m=document,v=window;m.addEventListener?(m.addEventListener("DOMContentLoaded",e,!1),v.addEventListener("load",t,!1)):m.attachEvent?(m.attachEvent("onreadystatechange",e),v.attachEvent("onload",t)):v.onload=t,v.$=i}();