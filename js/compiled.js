/*!
 * jQuery JavaScript Library v1.6.2
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu Jun 30 14:16:56 2011 -0400
 */
(function(a,b){function cv(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cs(a){if(!cg[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ch||(ch=c.createElement("iframe"),ch.frameBorder=ch.width=ch.height=0),b.appendChild(ch);if(!ci||!ch.createElement)ci=(ch.contentWindow||ch.contentDocument).document,ci.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),ci.close();d=ci.createElement(a),ci.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ch)}cg[a]=e}return cg[a]}function cr(a,b){var c={};f.each(cm.concat.apply([],cm.slice(0,b)),function(){c[this]=a});return c}function cq(){cn=b}function cp(){setTimeout(cq,0);return cn=f.now()}function cf(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ce(){try{return new a.XMLHttpRequest}catch(b){}}function b$(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function bZ(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function bY(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bC.test(a)?d(a,e):bY(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)bY(a+"["+e+"]",b[e],c,d);else d(a,b)}function bX(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bR,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bX(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bX(a,c,d,e,"*",g));return l}function bW(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bN),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bA(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bv:bw;if(d>0){c!=="border"&&f.each(e,function(){c||(d-=parseFloat(f.css(a,"padding"+this))||0),c==="margin"?d+=parseFloat(f.css(a,c+this))||0:d-=parseFloat(f.css(a,"border"+this+"Width"))||0});return d+"px"}d=bx(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0,c&&f.each(e,function(){d+=parseFloat(f.css(a,"padding"+this))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+this+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+this))||0)});return d+"px"}function bm(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(be,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bl(a){f.nodeName(a,"input")?bk(a):"getElementsByTagName"in a&&f.grep(a.getElementsByTagName("input"),bk)}function bk(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bj(a){return"getElementsByTagName"in a?a.getElementsByTagName("*"):"querySelectorAll"in a?a.querySelectorAll("*"):[]}function bi(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bh(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c=f.expando,d=f.data(a),e=f.data(b,d);if(d=d[c]){var g=d.events;e=e[c]=f.extend({},d);if(g){delete e.handle,e.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)f.event.add(b,h+(g[h][i].namespace?".":"")+g[h][i].namespace,g[h][i],g[h][i].data)}}}}function bg(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function W(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(R.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function V(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function N(a,b){return(a&&a!=="*"?a+".":"")+b.replace(z,"`").replace(A,"&")}function M(a){var b,c,d,e,g,h,i,j,k,l,m,n,o,p=[],q=[],r=f._data(this,"events");if(!(a.liveFired===this||!r||!r.live||a.target.disabled||a.button&&a.type==="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var s=r.live.slice(0);for(i=0;i<s.length;i++)g=s[i],g.origType.replace(x,"")===a.type?q.push(g.selector):s.splice(i--,1);e=f(a.target).closest(q,a.currentTarget);for(j=0,k=e.length;j<k;j++){m=e[j];for(i=0;i<s.length;i++){g=s[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))&&!m.elem.disabled){h=m.elem,d=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,d=f(a.relatedTarget).closest(g.selector)[0],d&&f.contains(h,d)&&(d=h);(!d||d!==h)&&p.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=p.length;j<k;j++){e=p[j];if(c&&e.level>c)break;a.currentTarget=e.elem,a.data=e.handleObj.data,a.handleObj=e.handleObj,o=e.handleObj.origHandler.apply(e.elem,arguments);if(o===!1||a.isPropagationStopped()){c=e.level,o===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function K(a,c,d){var e=f.extend({},d[0]);e.type=a,e.originalEvent={},e.liveFired=b,f.event.handle.call(c,e),e.isDefaultPrevented()&&d[0].preventDefault()}function E(){return!0}function D(){return!1}function m(a,c,d){var e=c+"defer",g=c+"queue",h=c+"mark",i=f.data(a,e,b,!0);i&&(d==="queue"||!f.data(a,g,b,!0))&&(d==="mark"||!f.data(a,h,b,!0))&&setTimeout(function(){!f.data(a,g,b,!0)&&!f.data(a,h,b,!0)&&(f.removeData(a,e,!0),i.resolve())},0)}function l(a){for(var b in a)if(b!=="toJSON")return!1;return!0}function k(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(j,"$1-$2").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNaN(d)?i.test(d)?f.parseJSON(d):d:parseFloat(d)}catch(g){}f.data(a,c,d)}else d=b}return d}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/\d/,n=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,o=/^[\],:{}\s]*$/,p=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,q=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,r=/(?:^|:|,)(?:\s*\[)+/g,s=/(webkit)[ \/]([\w.]+)/,t=/(opera)(?:.*version)?[ \/]([\w.]+)/,u=/(msie) ([\w.]+)/,v=/(mozilla)(?:.*? rv:([\w.]+))?/,w=/-([a-z])/ig,x=function(a,b){return b.toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=n.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.6.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.resolveWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!A){A=e._Deferred();if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNaN:function(a){return a==null||!m.test(a)||isNaN(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1;var c;for(c in a);return c===b||D.call(a,c)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(o.test(b.replace(p,"@").replace(q,"]").replace(r,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(b,c,d){a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b)),d=c.documentElement,(!d||!d.nodeName||d.nodeName==="parsererror")&&e.error("Invalid XML: "+b);return c},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b){if(H)return H.call(b,a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=s.exec(a)||t.exec(a)||u.exec(a)||a.indexOf("compatible")<0&&v.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g="done fail isResolved isRejected promise then always pipe".split(" "),h=[].slice;f.extend({_Deferred:function(){var a=[],b,c,d,e={done:function(){if(!d){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=f.type(i),j==="array"?e.done.apply(e,i):j==="function"&&a.push(i);k&&e.resolveWith(k[0],k[1])}return this},resolveWith:function(e,f){if(!d&&!b&&!c){f=f||[],c=1;try{while(a[0])a.shift().apply(e,f)}finally{b=[e,f],c=0}}return this},resolve:function(){e.resolveWith(this,arguments);return this},isResolved:function(){return!!c||!!b},cancel:function(){d=1,a=[];return this}};return e},Deferred:function(a){var b=f._Deferred(),c=f._Deferred(),d;f.extend(b,{then:function(a,c){b.done(a).fail(c);return this},always:function(){return b.done.apply(b,arguments).fail.apply(this,arguments)},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,pipe:function(a,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[c,"reject"]},function(a,c){var e=c[0],g=c[1],h;f.isFunction(e)?b[a](function(){h=e.apply(this,arguments),h&&f.isFunction(h.promise)?h.promise().then(d.resolve,d.reject):d[g](h)}):b[a](d[g])})}).promise()},promise:function(a){if(a==null){if(d)return d;d=a={}}var c=g.length;while(c--)a[g[c]]=b[g[c]];return a}}),b.done(c.cancel).fail(b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){function i(a){return function(c){b[a]=arguments.length>1?h.call(arguments,0):c,--e||g.resolveWith(g,h.call(b,0))}}var b=arguments,c=0,d=b.length,e=d,g=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred();if(d>1){for(;c<d;c++)b[c]&&f.isFunction(b[c].promise)?b[c].promise().then(i(c),g.reject):--e;e||g.resolveWith(g,b)}else g!==a&&g.resolveWith(g,d?[a]:[]);return g.promise()}}),f.support=function(){var a=c.createElement("div"),b=c.documentElement,d,e,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;a.setAttribute("className","t"),a.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=a.getElementsByTagName("*"),e=a.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=a.getElementsByTagName("input")[0],k={leadingWhitespace:a.firstChild.nodeType===3,tbody:!a.getElementsByTagName("tbody").length,htmlSerialize:!!a.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55$/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:a.className!=="t",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,k.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,k.optDisabled=!h.disabled;try{delete a.test}catch(v){k.deleteExpando=!1}!a.addEventListener&&a.attachEvent&&a.fireEvent&&(a.attachEvent("onclick",function(){k.noCloneEvent=!1}),a.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),k.radioValue=i.value==="t",i.setAttribute("checked","checked"),a.appendChild(i),l=c.createDocumentFragment(),l.appendChild(a.firstChild),k.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,a.innerHTML="",a.style.width=a.style.paddingLeft="1px",m=c.getElementsByTagName("body")[0],o=c.createElement(m?"div":"body"),p={visibility:"hidden",width:0,height:0,border:0,margin:0},m&&f.extend(p,{position:"absolute",left:-1e3,top:-1e3});for(t in p)o.style[t]=p[t];o.appendChild(a),n=m||b,n.insertBefore(o,n.firstChild),k.appendChecked=i.checked,k.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,k.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",k.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",q=a.getElementsByTagName("td"),u=q[0].offsetHeight===0,q[0].style.display="",q[1].style.display="none",k.reliableHiddenOffsets=u&&q[0].offsetHeight===0,a.innerHTML="",c.defaultView&&c.defaultView.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",a.appendChild(j),k.reliableMarginRight=(parseInt((c.defaultView.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0),o.innerHTML="",n.removeChild(o);if(a.attachEvent)for(t in{submit:1,change:1,focusin:1})s="on"+t,u=s in a,u||(a.setAttribute(s,"return;"),u=typeof a[s]=="function"),k[t+"Bubbles"]=u;o=l=g=h=m=j=a=i=null;return k}(),f.boxModel=f.support.boxModel;var i=/^(?:\{.*\}|\[.*\])$/,j=/([a-z])([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!l(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g=f.expando,h=typeof c=="string",i,j=a.nodeType,k=j?f.cache:a,l=j?a[f.expando]:a[f.expando]&&f.expando;if((!l||e&&l&&!k[l][g])&&h&&d===b)return;l||(j?a[f.expando]=l=++f.uuid:l=f.expando),k[l]||(k[l]={},j||(k[l].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?k[l][g]=f.extend(k[l][g],c):k[l]=f.extend(k[l],c);i=k[l],e&&(i[g]||(i[g]={}),i=i[g]),d!==b&&(i[f.camelCase(c)]=d);if(c==="events"&&!i[c])return i[g]&&i[g].events;return h?i[f.camelCase(c)]||i[c]:i}},removeData:function(b,c,d){if(!!f.acceptData(b)){var e=f.expando,g=b.nodeType,h=g?f.cache:b,i=g?b[f.expando]:f.expando;if(!h[i])return;if(c){var j=d?h[i][e]:h[i];if(j){delete j[c];if(!l(j))return}}if(d){delete h[i][e];if(!l(h[i]))return}var k=h[i][e];f.support.deleteExpando||h!=a?delete h[i]:h[i]=null,k?(h[i]={},g||(h[i].toJSON=f.noop),h[i][e]=k):g&&(f.support.deleteExpando?delete b[f.expando]:b.removeAttribute?b.removeAttribute(f.expando):b[f.expando]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d=null;if(typeof a=="undefined"){if(this.length){d=f.data(this[0]);if(this[0].nodeType===1){var e=this[0].attributes,g;for(var h=0,i=e.length;h<i;h++)g=e[h].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),k(this[0],g,d[g]))}}return d}if(typeof a=="object")return this.each(function(){f.data(this,a)});var j=a.split(".");j[1]=j[1]?"."+j[1]:"";if(c===b){d=this.triggerHandler("getData"+j[1]+"!",[j[0]]),d===b&&this.length&&(d=f.data(this[0],a),d=k(this[0],a,d));return d===b&&j[1]?this.data(j[0]):d}return this.each(function(){var b=f(this),d=[j[0],c];b.triggerHandler("setData"+j[1]+"!",d),f.data(this,a,c),b.triggerHandler("changeData"+j[1]+"!",d)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,c){a&&(c=(c||"fx")+"mark",f.data(a,c,(f.data(a,c,b,!0)||0)+1,!0))},_unmark:function(a,c,d){a!==!0&&(d=c,c=a,a=!1);if(c){d=d||"fx";var e=d+"mark",g=a?0:(f.data(c,e,b,!0)||1)-1;g?f.data(c,e,g,!0):(f.removeData(c,e,!0),m(c,d,"mark"))}},queue:function(a,c,d){if(a){c=(c||"fx")+"queue";var e=f.data(a,c,b,!0);d&&(!e||f.isArray(d)?e=f.data(a,c,f.makeArray(d),!0):e.push(d));return e||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e;d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),d.call(a,function(){f.dequeue(a,b)})),c.length||(f.removeData(a,b+"queue",!0),m(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){f.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f._Deferred(),!0))h++,l.done(m);m();return d.promise()}});var n=/[\n\t\r]/g,o=/\s+/,p=/\r/g,q=/^(?:button|input)$/i,r=/^(?:button|input|object|select|textarea)$/i,s=/^a(?:rea)?$/i,t=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,u=/\:|^on/,v,w;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(o);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(o);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(n," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(o);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if((" "+this[c].className+" ").replace(n," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e=this[0];if(!arguments.length){if(e){c=f.valHooks[e.nodeName.toLowerCase()]||f.valHooks[e.type];if(c&&"get"in c&&(d=c.get(e,"value"))!==b)return d;d=e.value;return typeof d=="string"?d.replace(p,""):d==null?"":d}return b}var g=f.isFunction(a);return this.each(function(d){var e=f(this),h;if(this.nodeType===1){g?h=a.call(this,d,e.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c=a.selectedIndex,d=[],e=a.options,g=a.type==="select-one";if(c<0)return null;for(var h=g?c:0,i=g?c+1:e.length;h<i;h++){var j=e[h];if(j.selected&&(f.support.optDisabled?!j.disabled:j.getAttribute("disabled")===null)&&(!j.parentNode.disabled||!f.nodeName(j.parentNode,"optgroup"))){b=f(j).val();if(g)return b;d.push(b)}}if(g&&!d.length&&e.length)return f(e[c]).val();return d},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attrFix:{tabindex:"tabIndex"},attr:function(a,c,d,e){var g=a.nodeType;if(!a||g===3||g===8||g===2)return b;if(e&&c in f.attrFn)return f(a)[c](d);if(!("getAttribute"in a))return f.prop(a,c,d);var h,i,j=g!==1||!f.isXMLDoc(a);j&&(c=f.attrFix[c]||c,i=f.attrHooks[c],i||(t.test(c)?i=w:v&&c!=="className"&&(f.nodeName(a,"form")||u.test(c))&&(i=v)));if(d!==b){if(d===null){f.removeAttr(a,c);return b}if(i&&"set"in i&&j&&(h=i.set(a,d,c))!==b)return h;a.setAttribute(c,""+d);return d}if(i&&"get"in i&&j&&(h=i.get(a,c))!==null)return h;h=a.getAttribute(c);return h===null?b:h},removeAttr:function(a,b){var c;a.nodeType===1&&(b=f.attrFix[b]||b,f.support.getSetAttribute?a.removeAttribute(b):(f.attr(a,b,""),a.removeAttributeNode(a.getAttributeNode(b))),t.test(b)&&(c=f.propFix[b]||b)in a&&(a[c]=!1))},attrHooks:{type:{set:function(a,b){if(q.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},tabIndex:{get:function(a){var c=a.getAttributeNode("tabIndex");return c&&c.specified?parseInt(c.value,10):r.test(a.nodeName)||s.test(a.nodeName)&&a.href?0:b}},value:{get:function(a,b){if(v&&f.nodeName(a,"button"))return v.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(v&&f.nodeName(a,"button"))return v.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e=a.nodeType;if(!a||e===3||e===8||e===2)return b;var g,h,i=e!==1||!f.isXMLDoc(a);i&&(c=f.propFix[c]||c,h=f.propHooks[c]);return d!==b?h&&"set"in h&&(g=h.set(a,d,c))!==b?g:a[c]=d:h&&"get"in h&&(g=h.get(a,c))!==b?g:a[c]},propHooks:{}}),w={get:function(a,c){return f.prop(a,c)?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},f.support.getSetAttribute||(f.attrFix=f.propFix,v=f.attrHooks.name=f.attrHooks.title=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&d.nodeValue!==""?d.nodeValue:b},set:function(a,b,c){var d=a.getAttributeNode(c);if(d){d.nodeValue=b;return b}}},f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})})),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}})),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var x=/\.(.*)$/,y=/^(?:textarea|input|select)$/i,z=/\./g,A=/ /g,B=/[^\w\s.|`]/g,C=function(a){return a.replace(B,"\\$&")};f.event={add:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){if(d===!1)d=D;else if(!d)return;var g,h;d.handler&&(g=d,d=g.handler),d.guid||(d.guid=f.guid++);var i=f._data(a);if(!i)return;var j=i.events,k=i.handle;j||(i.events=j={}),k||(i.handle=k=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.handle.apply(k.elem,arguments):b}),k.elem=a,c=c.split(" ");var l,m=0,n;while(l=c[m++]){h=g?f.extend({},g):{handler:d,data:e},l.indexOf(".")>-1?(n=l.split("."),l=n.shift(),h.namespace=n.slice(0).sort().join(".")):(n=[],h.namespace=""),h.type=l,h.guid||(h.guid=d.guid);var o=j[l],p=f.event.special[l]||{};if(!o){o=j[l]=[];if(!p.setup||p.setup.call(a,e,n,k)===!1)a.addEventListener?a.addEventListener(l,k,!1):a.attachEvent&&a.attachEvent("on"+l,k)}p.add&&(p.add.call(a,h),h.handler.guid||(h.handler.guid=d.guid)),o.push(h),f.event.global[l]=!0}a=null}},global:{},remove:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){d===!1&&(d=D);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=f.hasData(a)&&f._data(a),t=s&&s.events;if(!s||!t)return;c&&c.type&&(d=c.handler,c=c.type);if(!c||typeof c=="string"&&c.charAt(0)==="."){c=c||"";for(h in t)f.event.remove(a,h+c);return}c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+f.map(m.slice(0).sort(),C).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=t[h];if(!p)continue;if(!d){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))f.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=f.event.special[h]||{};for(j=e||0;j<p.length;j++){q=p[j];if(d.guid===q.guid){if(l||n.test(q.namespace))e==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(e!=null)break}}if(p.length===0||e!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&f.removeEvent(a,h,s.handle),g=null,delete t[h]}if(f.isEmptyObject(t)){var u=s.handle;u&&(u.elem=null),delete s.events,delete s.handle,f.isEmptyObject(s)&&f.removeData(a,b,!0)}}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){var h=c.type||c,i=[],j;h.indexOf("!")>=0&&(h=h.slice(0,-1),j=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.
shift(),i.sort());if(!!e&&!f.event.customEvent[h]||!!f.event.global[h]){c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.exclusive=j,c.namespace=i.join("."),c.namespace_re=new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)");if(g||!e)c.preventDefault(),c.stopPropagation();if(!e){f.each(f.cache,function(){var a=f.expando,b=this[a];b&&b.events&&b.events[h]&&f.event.trigger(c,d,b.handle.elem)});return}if(e.nodeType===3||e.nodeType===8)return;c.result=b,c.target=e,d=d!=null?f.makeArray(d):[],d.unshift(c);var k=e,l=h.indexOf(":")<0?"on"+h:"";do{var m=f._data(k,"handle");c.currentTarget=k,m&&m.apply(k,d),l&&f.acceptData(k)&&k[l]&&k[l].apply(k,d)===!1&&(c.result=!1,c.preventDefault()),k=k.parentNode||k.ownerDocument||k===c.target.ownerDocument&&a}while(k&&!c.isPropagationStopped());if(!c.isDefaultPrevented()){var n,o=f.event.special[h]||{};if((!o._default||o._default.call(e.ownerDocument,c)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)){try{l&&e[h]&&(n=e[l],n&&(e[l]=null),f.event.triggered=h,e[h]())}catch(p){}n&&(e[l]=n),f.event.triggered=b}}return c.result}},handle:function(c){c=f.event.fix(c||a.event);var d=((f._data(this,"events")||{})[c.type]||[]).slice(0),e=!c.exclusive&&!c.namespace,g=Array.prototype.slice.call(arguments,0);g[0]=c,c.currentTarget=this;for(var h=0,i=d.length;h<i;h++){var j=d[h];if(e||c.namespace_re.test(j.namespace)){c.handler=j.handler,c.data=j.data,c.handleObj=j;var k=j.handler.apply(this,g);k!==b&&(c.result=k,k===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[f.expando])return a;var d=a;a=f.Event(d);for(var e=this.props.length,g;e;)g=this.props[--e],a[g]=d[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=a.target.ownerDocument||c,i=h.documentElement,j=h.body;a.pageX=a.clientX+(i&&i.scrollLeft||j&&j.scrollLeft||0)-(i&&i.clientLeft||j&&j.clientLeft||0),a.pageY=a.clientY+(i&&i.scrollTop||j&&j.scrollTop||0)-(i&&i.clientTop||j&&j.clientTop||0)}a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:f.proxy,special:{ready:{setup:f.bindReady,teardown:f.noop},live:{add:function(a){f.event.add(this,N(a.origType,a.selector),f.extend({},a,{handler:M,guid:a.handler.guid}))},remove:function(a){f.event.remove(this,N(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!this.preventDefault)return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?E:D):this.type=a,b&&f.extend(this,b),this.timeStamp=f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=E;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=E;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=E,this.stopPropagation()},isDefaultPrevented:D,isPropagationStopped:D,isImmediatePropagationStopped:D};var F=function(a){var b=a.relatedTarget,c=!1,d=a.type;a.type=a.data,b!==this&&(b&&(c=f.contains(this,b)),c||(f.event.handle.apply(this,arguments),a.type=d))},G=function(a){a.type=a.data,f.event.handle.apply(this,arguments)};f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={setup:function(c){f.event.add(this,b,c&&c.selector?G:F,a)},teardown:function(a){f.event.remove(this,b,a&&a.selector?G:F)}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(a,b){if(!f.nodeName(this,"form"))f.event.add(this,"click.specialSubmit",function(a){var b=a.target,c=b.type;(c==="submit"||c==="image")&&f(b).closest("form").length&&K("submit",this,arguments)}),f.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,c=b.type;(c==="text"||c==="password")&&f(b).closest("form").length&&a.keyCode===13&&K("submit",this,arguments)});else return!1},teardown:function(a){f.event.remove(this,".specialSubmit")}});if(!f.support.changeBubbles){var H,I=function(a){var b=a.type,c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?f.map(a.options,function(a){return a.selected}).join("-"):"":f.nodeName(a,"select")&&(c=a.selectedIndex);return c},J=function(c){var d=c.target,e,g;if(!!y.test(d.nodeName)&&!d.readOnly){e=f._data(d,"_change_data"),g=I(d),(c.type!=="focusout"||d.type!=="radio")&&f._data(d,"_change_data",g);if(e===b||g===e)return;if(e!=null||g)c.type="change",c.liveFired=b,f.event.trigger(c,arguments[1],d)}};f.event.special.change={filters:{focusout:J,beforedeactivate:J,click:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(c==="radio"||c==="checkbox"||f.nodeName(b,"select"))&&J.call(this,a)},keydown:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(a.keyCode===13&&!f.nodeName(b,"textarea")||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")&&J.call(this,a)},beforeactivate:function(a){var b=a.target;f._data(b,"_change_data",I(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in H)f.event.add(this,c+".specialChange",H[c]);return y.test(this.nodeName)},teardown:function(a){f.event.remove(this,".specialChange");return y.test(this.nodeName)}},H=f.event.special.change.filters,H.focus=H.beforeactivate}f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){function e(a){var c=f.event.fix(a);c.type=b,c.originalEvent={},f.event.trigger(c,null,c.target),c.isDefaultPrevented()&&a.preventDefault()}var d=0;f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.each(["bind","one"],function(a,c){f.fn[c]=function(a,d,e){var g;if(typeof a=="object"){for(var h in a)this[c](h,d,a[h],e);return this}if(arguments.length===2||d===!1)e=d,d=b;c==="one"?(g=function(a){f(this).unbind(a,g);return e.apply(this,arguments)},g.guid=e.guid||f.guid++):g=e;if(a==="unload"&&c!=="one")this.one(a,d,e);else for(var i=0,j=this.length;i<j;i++)f.event.add(this[i],a,g,d);return this}}),f.fn.extend({unbind:function(a,b){if(typeof a=="object"&&!a.preventDefault)for(var c in a)this.unbind(c,a[c]);else for(var d=0,e=this.length;d<e;d++)f.event.remove(this[d],a,b);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f.data(this,"lastToggle"+a.guid)||0)%d;f.data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var L={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};f.each(["live","die"],function(a,c){f.fn[c]=function(a,d,e,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:f(this.context);if(typeof a=="object"&&!a.preventDefault){for(var o in a)n[c](o,d,a[o],m);return this}if(c==="die"&&!a&&g&&g.charAt(0)==="."){n.unbind(g);return this}if(d===!1||f.isFunction(d))e=d||D,d=b;a=(a||"").split(" ");while((h=a[i++])!=null){j=x.exec(h),k="",j&&(k=j[0],h=h.replace(x,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}l=h,L[h]?(a.push(L[h]+k),h=h+k):h=(L[h]||h)+k;if(c==="live")for(var p=0,q=n.length;p<q;p++)f.event.add(n[p],"live."+N(h,m),{data:d,selector:m,handler:e,origType:h,origHandler:e,preType:l});else n.unbind("live."+N(h,m),e)}return this}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0)}),function(){function u(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}if(i.nodeType===1){f||(i.sizcache=c,i.sizset=g);if(typeof b!="string"){if(i===b){j=!0;break}}else if(k.filter(b,[i]).length>0){j=i;break}}i=i[a]}d[g]=j}}}function t(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d=0,e=Object.prototype.toString,g=!1,h=!0,i=/\\/g,j=/\W/;[0,0].sort(function(){h=!1;return 0});var k=function(b,d,f,g){f=f||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return f;var i,j,n,o,q,r,s,t,u=!0,w=k.isXML(d),x=[],y=b;do{a.exec(""),i=a.exec(y);if(i){y=i[3],x.push(i[1]);if(i[2]){o=i[3];break}}}while(i);if(x.length>1&&m.exec(b))if(x.length===2&&l.relative[x[0]])j=v(x[0]+x[1],d);else{j=l.relative[x[0]]?[d]:k(x.shift(),d);while(x.length)b=x.shift(),l.relative[b]&&(b+=x.shift()),j=v(b,j)}else{!g&&x.length>1&&d.nodeType===9&&!w&&l.match.ID.test(x[0])&&!l.match.ID.test(x[x.length-1])&&(q=k.find(x.shift(),d,w),d=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:p(g)}:k.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),j=q.expr?k.filter(q.expr,q.set):q.set,x.length>0?n=p(j):u=!1;while(x.length)r=x.pop(),s=r,l.relative[r]?s=x.pop():r="",s==null&&(s=d),l.relative[r](n,s,w)}else n=x=[]}n||(n=j),n||k.error(r||b);if(e.call(n)==="[object Array]")if(!u)f.push.apply(f,n);else if(d&&d.nodeType===1)for(t=0;n[t]!=null;t++)n[t]&&(n[t]===!0||n[t].nodeType===1&&k.contains(d,n[t]))&&f.push(j[t]);else for(t=0;n[t]!=null;t++)n[t]&&n[t].nodeType===1&&f.push(j[t]);else p(n,f);o&&(k(o,h,f,g),k.uniqueSort(f));return f};k.uniqueSort=function(a){if(r){g=h,a.sort(r);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},k.matches=function(a,b){return k(a,null,null,b)},k.matchesSelector=function(a,b){return k(b,null,null,[a]).length>0},k.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=l.order.length;e<f;e++){var g,h=l.order[e];if(g=l.leftMatch[h].exec(a)){var j=g[1];g.splice(1,1);if(j.substr(j.length-1)!=="\\"){g[1]=(g[1]||"").replace(i,""),d=l.find[h](g,b,c);if(d!=null){a=a.replace(l.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},k.filter=function(a,c,d,e){var f,g,h=a,i=[],j=c,m=c&&c[0]&&k.isXML(c[0]);while(a&&c.length){for(var n in l.filter)if((f=l.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=l.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;j===i&&(i=[]);if(l.preFilter[n]){f=l.preFilter[n](f,j,d,i,e,m);if(!f)g=o=!0;else if(f===!0)continue}if(f)for(var s=0;(p=j[s])!=null;s++)if(p){o=q(p,f,s,j);var t=e^!!o;d&&o!=null?t?g=!0:j[s]=!1:t&&(i.push(p),g=!0)}if(o!==b){d||(j=i),a=a.replace(l.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)k.error(a);else break;h=a}return j},k.error=function(a){throw"Syntax error, unrecognized expression: "+a};var l=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!j.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&k.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!j.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&k.filter(b,a,!0)}},"":function(a,b,c){var e,f=d++,g=u;typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("parentNode",b,f,a,e,c)},"~":function(a,b,c){var e,f=d++,g=u;typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("previousSibling",b,f,a,e,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(i,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(i,"")},TAG:function(a,b){return a[1].replace(i,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||k.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&k.error(a[0]);a[0]=d++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(i,"");!f&&l.attrMap[g]&&(a[1]=l.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(i,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=k(b[3],null,null,c);else{var g=k.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(l.match.POS.test(b[0])||l.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!k(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=l.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||k.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}k.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=l.attrHandle[c]?l.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=l.setFilters[e];if(f)return f(a,c,b,d)}}},m=l.match.POS,n=function(a,b){return"\\"+(b-0+1)};for(var o in l.match)l.match[o]=new RegExp(l.match[o].source+/(?![^\[]*\])(?![^\(]*\))/.source),l.leftMatch[o]=new RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[o].source.replace(/\\(\d+)/g,n));var p=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(q){p=function(a,b){var c=0,d=b||[];if(e.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var f=a.length;c<f;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var r,s;c.documentElement.compareDocumentPosition?r=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(r=function(a,b){if(a===b){g=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(h===i)return s(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return s(e[k],f[k]);return k===c?s(a,f[k],-1):s(e[k],b,1)},s=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),k.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=k.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(l.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},l.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(l.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(l.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=k,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){k=function(b,e,f,g){e=e||c;if(!g&&!k.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return p(e.getElementsByTagName(b),f);if(h[2]&&l.find.CLASS&&e.getElementsByClassName)return p(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return p([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return p([],f);if(i.id===h[3])return p([i],f)}try{return p(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e,n=e.getAttribute("id"),o=n||d,q=e.parentNode,r=/^\s*[+~]/.test(b);n?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),r&&q&&(e=e.parentNode);try{if(!r||q)return p(e.querySelectorAll("[id='"+o+"'] "+b),f)}catch(s){}finally{n||m.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)k[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}k.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(a))try{if(e||!l.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return k(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;l.order.splice(1,0,"CLASS"),l.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?k.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?k.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:k.contains=function(){return!1},k.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var v=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=l.match.PSEUDO.exec(a))e+=c[0],a=a.replace(l.match.PSEUDO,"");a=l.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)k(a,f[g],d);return k.filter(e,d)};f.find=k,f.expr=k.selectors,f.expr[":"]=f.expr.filters,f.unique=k.uniqueSort,f.text=k.getText,f.isXMLDoc=k.isXML,f.contains=k.contains}();var O=/Until$/,P=/^(?:parents|prevUntil|prevAll)/,Q=/,/,R=/^.[^:#\[\.,]*$/,S=Array.prototype.slice,T=f.expr.match.POS,U={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(W(this,a,!1),"not",a)},filter:function(a){return this.pushStack(W(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(d=0,e=a.length;d<e;d++)i=a[d],j[i]||(j[i]=T.test(i)?f(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)>-1:f(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=T.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(l?l.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a||typeof a=="string")return f.inArray(this[0],a?f(a):this.parent().children());return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(V(c[0])||V(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c),g=S.call(arguments);O.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!U[a]?f.unique(e):e,(this.length>1||Q.test(d))&&P.test(a)&&(e=e.reverse());return this.pushStack(e,a,g.join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var X=/ jQuery\d+="(?:\d+|null)"/g,Y=/^\s+/,Z=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,$=/<([\w:]+)/,_=/<tbody/i,ba=/<|&#?\w+;/,bb=/<(?:script|object|embed|option|style)/i,bc=/checked\s*(?:[^=]|=\s*.checked.)/i,bd=/\/(java|ecma)script/i,be=/^\s*<!(?:\[CDATA\[|\-\-)/,bf={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};bf.optgroup=bf.option,bf.tbody=bf.tfoot=bf.colgroup=bf.caption=bf.thead,bf.th=bf.td,f.support.htmlSerialize||(bf._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){f(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(X,""):null;if(typeof a=="string"&&!bb.test(a)&&(f.support.leadingWhitespace||!Y.test(a))&&!bf[($.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Z,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bc.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bg(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bm)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i;b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof a[0]=="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!bb.test(a[0])&&(f.support.checkClone||!bc.test(a[0]))&&(g=!0,h=f.fragments[a[0]],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[a[0]]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j
)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d=a.cloneNode(!0),e,g,h;if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bi(a,d),e=bj(a),g=bj(d);for(h=0;e[h];++h)bi(e[h],g[h])}if(b){bh(a,d);if(c){e=bj(a),g=bj(d);for(h=0;e[h];++h)bh(e[h],g[h])}}e=g=null;return d},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!ba.test(k))k=b.createTextNode(k);else{k=k.replace(Z,"<$1></$2>");var l=($.exec(k)||["",""])[1].toLowerCase(),m=bf[l]||bf._default,n=m[0],o=b.createElement("div");o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=_.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&Y.test(k)&&o.insertBefore(b.createTextNode(Y.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bl(k[i]);else bl(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||bd.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.expando,g=f.event.special,h=f.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&&f.noData[j.nodeName.toLowerCase()])continue;c=j[f.expando];if(c){b=d[c]&&d[c][e];if(b&&b.events){for(var k in b.events)g[k]?f.event.remove(j,k):f.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)}h?delete j[f.expando]:j.removeAttribute&&j.removeAttribute(f.expando),delete d[c]}}}});var bn=/alpha\([^)]*\)/i,bo=/opacity=([^)]*)/,bp=/([A-Z]|^ms)/g,bq=/^-?\d+(?:px)?$/i,br=/^-?\d/,bs=/^[+\-]=/,bt=/[^+\-\.\de]+/g,bu={position:"absolute",visibility:"hidden",display:"block"},bv=["Left","Right"],bw=["Top","Bottom"],bx,by,bz;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bx(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d;if(h==="number"&&isNaN(d)||d==null)return;h==="string"&&bs.test(d)&&(d=+d.replace(bt,"")+parseFloat(f.css(a,c)),h="number"),h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bx)return bx(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bA(a,b,d);f.swap(a,bu,function(){e=bA(a,b,d)});return e}},set:function(a,b){if(!bq.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bo.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle;c.zoom=1;var e=f.isNaN(b)?"":"alpha(opacity="+b*100+")",g=d&&d.filter||c.filter||"";c.filter=bn.test(g)?g.replace(bn,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bx(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(by=function(a,c){var d,e,g;c=c.replace(bp,"-$1").toLowerCase();if(!(e=a.ownerDocument.defaultView))return b;if(g=e.getComputedStyle(a,null))d=g.getPropertyValue(c),d===""&&!f.contains(a.ownerDocument.documentElement,a)&&(d=f.style(a,c));return d}),c.documentElement.currentStyle&&(bz=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;!bq.test(d)&&br.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));return d===""?"auto":d}),bx=by||bz,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bB=/%20/g,bC=/\[\]$/,bD=/\r?\n/g,bE=/#.*$/,bF=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bG=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bH=/^(?:about|app|app\-storage|.+\-extension|file|widget):$/,bI=/^(?:GET|HEAD)$/,bJ=/^\/\//,bK=/\?/,bL=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bM=/^(?:select|textarea)/i,bN=/\s+/,bO=/([?&])_=[^&]*/,bP=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bQ=f.fn.load,bR={},bS={},bT,bU;try{bT=e.href}catch(bV){bT=c.createElement("a"),bT.href="",bT=bT.href}bU=bP.exec(bT.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bQ)return bQ.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bL,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bM.test(this.nodeName)||bG.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bD,"\r\n")}}):{name:b.name,value:c.replace(bD,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.bind(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?f.extend(!0,a,f.ajaxSettings,b):(b=a,a=f.extend(!0,f.ajaxSettings,b));for(var c in{context:1,url:1})c in b?a[c]=b[c]:c in f.ajaxSettings&&(a[c]=f.ajaxSettings[c]);return a},ajaxSettings:{url:bT,isLocal:bH.test(bU[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML}},ajaxPrefilter:bW(bR),ajaxTransport:bW(bS),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a?4:0;var o,r,u,w=l?bZ(d,v,l):b,x,y;if(a>=200&&a<300||a===304){if(d.ifModified){if(x=v.getResponseHeader("Last-Modified"))f.lastModified[k]=x;if(y=v.getResponseHeader("Etag"))f.etag[k]=y}if(a===304)c="notmodified",o=!0;else try{r=b$(d,w),c="success",o=!0}catch(z){c="parsererror",u=z}}else{u=c;if(!c||a)c="error",a<0&&(a=0)}v.status=a,v.statusText=c,o?h.resolveWith(e,[r,c,v]):h.rejectWith(e,[v,c,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.resolveWith(e,[v,c]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f._Deferred(),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bF.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.done,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bE,"").replace(bJ,bU[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bN),d.crossDomain==null&&(r=bP.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bU[1]&&r[2]==bU[2]&&(r[3]||(r[1]==="http:"?80:443))==(bU[3]||(bU[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bX(bR,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bI.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bK.test(d.url)?"&":"?")+d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bO,"$1_="+x);d.url=y+(y===d.url?(bK.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", */*; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bX(bS,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){status<2?w(-1,z):f.error(z)}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)bY(g,a[g],c,e);return d.join("&").replace(bB,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var b_=f.now(),ca=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+b_++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ca.test(b.url)||e&&ca.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ca,l),b.url===j&&(e&&(k=k.replace(ca,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cb=a.ActiveXObject?function(){for(var a in cd)cd[a](0,1)}:!1,cc=0,cd;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ce()||cf()}:ce,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cb&&delete cd[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cc,cb&&(cd||(cd={},f(a).unload(cb)),cd[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cg={},ch,ci,cj=/^(?:toggle|show|hide)$/,ck=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cl,cm=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cn,co=a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cr("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cs(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cr("hide",3),a,b,c);for(var d=0,e=this.length;d<e;d++)if(this[d].style){var g=f.css(this[d],"display");g!=="none"&&!f._data(this[d],"olddisplay")&&f._data(this[d],"olddisplay",g)}for(d=0;d<e;d++)this[d].style&&(this[d].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cr("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return this[e.queue===!1?"each":"queue"](function(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(f.support.inlineBlockNeedsLayout?(j=cs(this.nodeName),j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)):this.style.display="inline-block"))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)k=new f.fx(this,b,i),h=a[i],cj.test(h)?k[h==="toggle"?d?"show":"hide":h]():(l=ck.exec(h),m=k.cur(),l?(n=parseFloat(l[2]),o=l[3]||(f.cssNumber[i]?"":"px"),o!=="px"&&(f.style(this,i,(n||1)+o),m=(n||1)/k.cur()*m,f.style(this,i,m+o)),l[1]&&(n=(l[1]==="-="?-1:1)*n+m),k.custom(m,n,o)):k.custom(m,h,""));return!0})},stop:function(a,b){a&&this.queue([]),this.each(function(){var a=f.timers,c=a.length;b||f._unmark(!0,this);while(c--)a[c].elem===this&&(b&&a[c](!0),a.splice(c,1))}),b||this.dequeue();return this}}),f.each({slideDown:cr("show",1),slideUp:cr("hide",1),slideToggle:cr("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default,d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue!==!1?f.dequeue(this):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,b,c){function h(a){return d.step(a)}var d=this,e=f.fx,g;this.startTime=cn||cp(),this.start=a,this.end=b,this.unit=c||this.unit||(f.cssNumber[this.prop]?"":"px"),this.now=this.start,this.pos=this.state=0,h.elem=this.elem,h()&&f.timers.push(h)&&!cl&&(co?(cl=!0,g=function(){cl&&(co(g),e.tick())},co(g)):cl=setInterval(e.tick,e.interval))},show:function(){this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=cn||cp(),c=!0,d=this.elem,e=this.options,g,h;if(a||b>=e.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),e.animatedProperties[this.prop]=!0;for(g in e.animatedProperties)e.animatedProperties[g]!==!0&&(c=!1);if(c){e.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){d.style["overflow"+b]=e.overflow[a]}),e.hide&&f(d).hide();if(e.hide||e.show)for(var i in e.animatedProperties)f.style(d,i,e.orig[i]);e.complete.call(d)}return!1}e.duration==Infinity?this.now=b:(h=b-this.startTime,this.state=h/e.duration,this.pos=f.easing[e.animatedProperties[this.prop]](this.state,h,0,1,e.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){for(var a=f.timers,b=0;b<a.length;++b)a[b]()||a.splice(b--,1);a.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cl),cl=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var ct=/^t(?:able|d|h)$/i,cu=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cv(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);f.offset.initialize();var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.offset.supportsFixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.offset.doesNotAddBorder&&(!f.offset.doesAddBorderForTableAndCells||!ct.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={initialize:function(){var a=c.body,b=c.createElement("div"),d,e,g,h,i=parseFloat(f.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";f.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=j,a.insertBefore(b,a.firstChild),d=b.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,this.doesNotAddBorder=e.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,e.style.position="fixed",e.style.top="20px",this.supportsFixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",this.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),f.offset.initialize=f.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.offset.initialize(),f.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cu.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cu.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cv(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cv(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a&&a.style?parseFloat(f.css(a,d,"padding")):null},f.fn["outer"+c]=function(a){var b=this[0];return b&&b.style?parseFloat(f.css(b,d,a?"margin":"border")):null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c];return e.document.compatMode==="CSS1Compat"&&g||e.document.body["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var h=f.css(e,d),i=parseFloat(h);return f.isNaN(i)?h:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f})(window);/*!
 * jQuery Mobile v1.0b3
 * http://jquerymobile.com/
 *
 * Copyright 2010, jQuery Project
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
(function(a,d){if(a.cleanData){var b=a.cleanData;a.cleanData=function(c){for(var e=0,d;(d=c[e])!=null;e++)a(d).triggerHandler("remove");b(c)}}else{var c=a.fn.remove;a.fn.remove=function(b,e){return this.each(function(){e||(!b||a.filter(b,[this]).length)&&a("*",this).add([this]).each(function(){a(this).triggerHandler("remove")});return c.call(a(this),b,e)})}}a.widget=function(c,b,d){var h=c.split(".")[0],j,c=c.split(".")[1];j=h+"-"+c;if(!d)d=b,b=a.Widget;a.expr[":"][j]=function(b){return!!a.data(b,
c)};a[h]=a[h]||{};a[h][c]=function(a,c){arguments.length&&this._createWidget(a,c)};b=new b;b.options=a.extend(!0,{},b.options);a[h][c].prototype=a.extend(!0,b,{namespace:h,widgetName:c,widgetEventPrefix:a[h][c].prototype.widgetEventPrefix||c,widgetBaseClass:j},d);a.widget.bridge(c,a[h][c])};a.widget.bridge=function(c,b){a.fn[c]=function(g){var h=typeof g==="string",j=Array.prototype.slice.call(arguments,1),l=this,g=!h&&j.length?a.extend.apply(null,[!0,g].concat(j)):g;if(h&&g.charAt(0)==="_")return l;
h?this.each(function(){var b=a.data(this,c);if(!b)throw"cannot call methods on "+c+" prior to initialization; attempted to call method '"+g+"'";if(!a.isFunction(b[g]))throw"no such method '"+g+"' for "+c+" widget instance";var e=b[g].apply(b,j);if(e!==b&&e!==d)return l=e,!1}):this.each(function(){var d=a.data(this,c);d?d.option(g||{})._init():a.data(this,c,new b(g,this))});return l}};a.Widget=function(a,c){arguments.length&&this._createWidget(a,c)};a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",
options:{disabled:!1},_createWidget:function(c,b){a.data(b,this.widgetName,this);this.element=a(b);this.options=a.extend(!0,{},this.options,this._getCreateOptions(),c);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){var c={};a.metadata&&(c=a.metadata.get(element)[this.widgetName]);return c},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);
this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(c,b){var g=c;if(arguments.length===0)return a.extend({},this.options);if(typeof c==="string"){if(b===d)return this.options[c];g={};g[c]=b}this._setOptions(g);return this},_setOptions:function(c){var b=this;a.each(c,function(a,c){b._setOption(a,c)});return this},_setOption:function(a,c){this.options[a]=c;a==="disabled"&&
this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",c);return this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(c,b,d){var h=this.options[c],b=a.Event(b);b.type=(c===this.widgetEventPrefix?c:this.widgetEventPrefix+c).toLowerCase();d=d||{};if(b.originalEvent)for(var c=a.event.props.length,j;c;)j=a.event.props[--c],b[j]=b.originalEvent[j];this.element.trigger(b,
d);return!(a.isFunction(h)&&h.call(this.element[0],b,d)===!1||b.isDefaultPrevented())}}})(jQuery);(function(a,d){a.widget("mobile.widget",{_getCreateOptions:function(){var b=this.element,c={};a.each(this.options,function(a){var e=b.jqmData(a.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()}));e!==d&&(c[a]=e)});return c}})})(jQuery);
(function(a){a(window);var d=a("html");a.mobile.media=function(){var b={},c=a("<div id='jquery-mediatest'>"),f=a("<body>").append(c);return function(a){if(!(a in b)){var g=document.createElement("style"),h="@media "+a+" { #jquery-mediatest { position:absolute; } }";g.type="text/css";g.styleSheet?g.styleSheet.cssText=h:g.appendChild(document.createTextNode(h));d.prepend(f).prepend(g);b[a]=c.css("position")==="absolute";f.add(g).remove()}return b[a]}}()})(jQuery);
(function(a,d){function b(a){var c=a.charAt(0).toUpperCase()+a.substr(1),a=(a+" "+e.join(c+" ")+c).split(" "),b;for(b in a)if(f[a[b]]!==d)return!0}var c=a("<body>").prependTo("html"),f=c[0].style,e=["Webkit","Moz","O"],g="palmGetResource"in window,h=window.blackberry;a.mobile.browser={};a.mobile.browser.ie=function(){for(var a=3,c=document.createElement("div"),b=c.all||[];c.innerHTML="<\!--[if gt IE "+ ++a+"]><br><![endif]--\>",b[0];);return a>4?a:!a}();a.extend(a.support,{orientation:"orientation"in
window,touch:"ontouchend"in document,cssTransitions:"WebKitTransitionEvent"in window,pushState:"pushState"in history&&"replaceState"in history,mediaquery:a.mobile.media("only all"),cssPseudoElement:!!b("content"),touchOverflow:!!b("overflowScrolling"),boxShadow:!!b("boxShadow")&&!h,scrollTop:("pageXOffset"in window||"scrollTop"in document.documentElement||"scrollTop"in c[0])&&!g,dynamicBaseTag:function(){var b=location.protocol+"//"+location.host+location.pathname+"ui-dir/",d=a("head base"),f=null,
e="",g;d.length?e=d.attr("href"):d=f=a("<base>",{href:b}).appendTo("head");g=a("<a href='testurl'></a>").prependTo(c)[0].href;d[0].href=e?e:location.pathname;f&&f.remove();return g.indexOf(b)===0}(),eventCapture:"addEventListener"in document});c.remove();g=function(){var a=window.navigator.userAgent;return a.indexOf("Nokia")>-1&&(a.indexOf("Symbian/3")>-1||a.indexOf("Series60/5")>-1)&&a.indexOf("AppleWebKit")>-1&&a.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/)}();a.mobile.ajaxBlacklist=window.blackberry&&
!window.WebKitPoint||window.operamini&&Object.prototype.toString.call(window.operamini)==="[object OperaMini]"||g;g&&a(function(){a("head link[rel=stylesheet]").attr("rel","alternate stylesheet").attr("rel","stylesheet")});a.support.boxShadow||a("html").addClass("ui-mobile-nosupport-boxshadow")})(jQuery);
(function(a,d,b,c){function f(a){for(;a&&typeof a.originalEvent!=="undefined";)a=a.originalEvent;return a}function e(c){for(var b={},d,f;c;){d=a.data(c,o);for(f in d)if(d[f])b[f]=b.hasVirtualBinding=!0;c=c.parentNode}return b}function g(){v&&(clearTimeout(v),v=0);v=setTimeout(function(){B=v=0;x.length=0;r=!1;z=!0},a.vmouse.resetTimerDuration)}function h(b,d,r){var e,g;if(!(g=r&&r[b])){if(r=!r)a:{for(r=d.target;r;){if((g=a.data(r,o))&&(!b||g[b]))break a;r=r.parentNode}r=null}g=r}if(g){e=d;var r=e.type,
i,z;e=a.Event(e);e.type=b;g=e.originalEvent;i=a.event.props;if(g)for(z=i.length;z;)b=i[--z],e[b]=g[b];if(r.search(/^touch/)!==-1&&(b=f(g),r=b.touches,b=b.changedTouches,r=r&&r.length?r[0]:b&&b.length?b[0]:c)){g=0;for(len=y.length;g<len;g++)b=y[g],e[b]=r[b]}a(d.target).trigger(e)}return e}function j(c){var b=a.data(c.target,A);if(!r&&(!B||B!==b))if(b=h("v"+c.type,c))b.isDefaultPrevented()&&c.preventDefault(),b.isPropagationStopped()&&c.stopPropagation(),b.isImmediatePropagationStopped()&&c.stopImmediatePropagation()}
function l(c){var b=f(c).touches,d;if(b&&b.length===1&&(d=c.target,b=e(d),b.hasVirtualBinding))B=G++,a.data(d,A,B),v&&(clearTimeout(v),v=0),w=z=!1,d=f(c).touches[0],t=d.pageX,u=d.pageY,h("vmouseover",c,b),h("vmousedown",c,b)}function n(a){z||(w||h("vmousecancel",a,e(a.target)),w=!0,g())}function s(c){if(!z){var b=f(c).touches[0],d=w,r=a.vmouse.moveDistanceThreshold;w=w||Math.abs(b.pageX-t)>r||Math.abs(b.pageY-u)>r;flags=e(c.target);w&&!d&&h("vmousecancel",c,flags);h("vmousemove",c,flags);g()}}function p(a){if(!z){z=
!0;var c=e(a.target),b;h("vmouseup",a,c);if(!w&&(b=h("vclick",a,c))&&b.isDefaultPrevented())b=f(a).changedTouches[0],x.push({touchID:B,x:b.clientX,y:b.clientY}),r=!0;h("vmouseout",a,c);w=!1;g()}}function k(c){var c=a.data(c,o),b;if(c)for(b in c)if(c[b])return!0;return!1}function i(){}function m(c){var b=c.substr(1);return{setup:function(){k(this)||a.data(this,o,{});a.data(this,o)[c]=!0;q[c]=(q[c]||0)+1;q[c]===1&&C.bind(b,j);a(this).bind(b,i);if(E)q.touchstart=(q.touchstart||0)+1,q.touchstart===1&&
C.bind("touchstart",l).bind("touchend",p).bind("touchmove",s).bind("scroll",n)},teardown:function(){--q[c];q[c]||C.unbind(b,j);E&&(--q.touchstart,q.touchstart||C.unbind("touchstart",l).unbind("touchmove",s).unbind("touchend",p).unbind("scroll",n));var d=a(this),r=a.data(this,o);r&&(r[c]=!1);d.unbind(b,i);k(this)||d.removeData(o)}}}var o="virtualMouseBindings",A="virtualTouchID",d="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),y="clientX clientY pageX pageY screenX screenY".split(" "),
q={},v=0,t=0,u=0,w=!1,x=[],r=!1,z=!1,E=a.support.eventCapture,C=a(b),G=1,B=0;a.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(var D=0;D<d.length;D++)a.event.special[d[D]]=m(d[D]);E&&b.addEventListener("click",function(c){var b=x.length,d=c.target,r,f,e,g,i;if(b){r=c.clientX;f=c.clientY;threshold=a.vmouse.clickDistanceThreshold;for(e=d;e;){for(g=0;g<b;g++)if(i=x[g],e===d&&Math.abs(i.x-r)<threshold&&Math.abs(i.y-f)<threshold||a.data(e,A)===i.touchID){c.preventDefault();
c.stopPropagation();return}e=e.parentNode}}},!0)})(jQuery,window,document);
(function(a,d,b){function c(c,b,d){var f=d.type;d.type=b;a.event.handle.call(c,d);d.type=f}a.each("touchstart touchmove touchend orientationchange throttledresize tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(c,b){a.fn[b]=function(a){return a?this.bind(b,a):this.trigger(b)};a.attrFn[b]=!0});var f=a.support.touch,e=f?"touchstart":"mousedown",g=f?"touchend":"mouseup",h=f?"touchmove":"mousemove";a.event.special.scrollstart={enabled:!0,setup:function(){function b(a,
e){f=e;c(d,f?"scrollstart":"scrollstop",a)}var d=this,f,e;a(d).bind("touchmove scroll",function(c){a.event.special.scrollstart.enabled&&(f||b(c,!0),clearTimeout(e),e=setTimeout(function(){b(c,!1)},50))})}};a.event.special.tap={setup:function(){var b=this,d=a(b);d.bind("vmousedown",function(f){function e(){clearTimeout(m)}function g(){e();d.unbind("vclick",h).unbind("vmouseup",e).unbind("vmousecancel",g)}function h(a){g();i==a.target&&c(b,"tap",a)}if(f.which&&f.which!==1)return!1;var i=f.target,m;
d.bind("vmousecancel",g).bind("vmouseup",e).bind("vclick",h);m=setTimeout(function(){c(b,"taphold",a.Event("taphold"))},750)})}};a.event.special.swipe={scrollSupressionThreshold:10,durationThreshold:1E3,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,setup:function(){var c=a(this);c.bind(e,function(d){function f(c){if(p){var b=c.originalEvent.touches?c.originalEvent.touches[0]:c;k={time:(new Date).getTime(),coords:[b.pageX,b.pageY]};Math.abs(p.coords[0]-k.coords[0])>a.event.special.swipe.scrollSupressionThreshold&&
c.preventDefault()}}var e=d.originalEvent.touches?d.originalEvent.touches[0]:d,p={time:(new Date).getTime(),coords:[e.pageX,e.pageY],origin:a(d.target)},k;c.bind(h,f).one(g,function(){c.unbind(h,f);p&&k&&k.time-p.time<a.event.special.swipe.durationThreshold&&Math.abs(p.coords[0]-k.coords[0])>a.event.special.swipe.horizontalDistanceThreshold&&Math.abs(p.coords[1]-k.coords[1])<a.event.special.swipe.verticalDistanceThreshold&&p.origin.trigger("swipe").trigger(p.coords[0]>k.coords[0]?"swipeleft":"swiperight");
p=k=b})})}};(function(a,c){function b(){var a=f();a!==e&&(e=a,d.trigger("orientationchange"))}var d=a(c),f,e;a.event.special.orientationchange={setup:function(){if(a.support.orientation)return!1;e=f();d.bind("throttledresize",b)},teardown:function(){if(a.support.orientation)return!1;d.unbind("throttledresize",b)},add:function(a){var c=a.handler;a.handler=function(a){a.orientation=f();return c.apply(this,arguments)}}};a.event.special.orientationchange.orientation=f=function(){var a=document.documentElement;
return a&&a.clientWidth/a.clientHeight<1.1?"portrait":"landscape"}})(jQuery,d);(function(){a.event.special.throttledresize={setup:function(){a(this).bind("resize",c)},teardown:function(){a(this).unbind("resize",c)}};var c=function(){f=(new Date).getTime();e=f-b;e>=250?(b=f,a(this).trigger("throttledresize")):(d&&clearTimeout(d),d=setTimeout(c,250-e))},b=0,d,f,e})();a.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe",swiperight:"swipe"},function(c,b){a.event.special[c]={setup:function(){a(this).bind(b,
a.noop)}}})})(jQuery,this);
(function(a,d,b){function c(a){a=a||location.href;return"#"+a.replace(/^[^#]*#?(.*)$/,"$1")}var f="hashchange",e=document,g,h=a.event.special,j=e.documentMode,l="on"+f in d&&(j===b||j>7);a.fn[f]=function(a){return a?this.bind(f,a):this.trigger(f)};a.fn[f].delay=50;h[f]=a.extend(h[f],{setup:function(){if(l)return!1;a(g.start)},teardown:function(){if(l)return!1;a(g.stop)}});g=function(){function g(){var b=c(),e=o(k);if(b!==k)j(k=b,e),a(d).trigger(f);else if(e!==k)location.href=location.href.replace(/#.*/,
"")+e;p=setTimeout(g,a.fn[f].delay)}var h={},p,k=c(),i=function(a){return a},j=i,o=i;h.start=function(){p||g()};h.stop=function(){p&&clearTimeout(p);p=b};a.browser.msie&&!l&&function(){var b,d;h.start=function(){if(!b)d=(d=a.fn[f].src)&&d+c(),b=a('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){d||j(c());g()}).attr("src",d||"javascript:0").insertAfter("body")[0].contentWindow,e.onpropertychange=function(){try{if(event.propertyName==="title")b.document.title=e.title}catch(a){}}};
h.stop=i;o=function(){return c(b.location.href)};j=function(c,d){var g=b.document,i=a.fn[f].domain;if(c!==d)g.title=e.title,g.open(),i&&g.write('<script>document.domain="'+i+'"<\/script>'),g.close(),b.location.hash=c}}();return h}()})(jQuery,this);(function(a){a.widget("mobile.page",a.mobile.widget,{options:{theme:"c",domCache:!1},_create:function(){this._trigger("beforecreate");this.element.attr("tabindex","0").addClass("ui-page ui-body-"+this.options.theme)}})})(jQuery);
(function(a,d){a.extend(a.mobile,{ns:"",subPageUrlKey:"ui-page",activePageClass:"ui-page-active",activeBtnClass:"ui-btn-active",ajaxEnabled:!0,hashListeningEnabled:!0,defaultPageTransition:"slide",minScrollBack:250,defaultDialogTransition:"pop",loadingMessage:"loading",pageLoadErrorMessage:"Error Loading Page",autoInitializePage:!0,pushStateEnabled:!0,gradeA:function(){return a.support.mediaquery||a.mobile.browser.ie&&a.mobile.browser.ie>=7},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,
COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},silentScroll:function(c){if(a.type(c)!=="number")c=a.mobile.defaultHomeScroll;a.event.special.scrollstart.enabled=!1;setTimeout(function(){d.scrollTo(0,c);a(document).trigger("silentscroll",
{x:0,y:c})},20);setTimeout(function(){a.event.special.scrollstart.enabled=!0},150)},nsNormalize:function(c){if(c)return a.camelCase(a.mobile.ns+c)}});a.fn.jqmData=function(c,b){return this.data(c?a.mobile.nsNormalize(c):c,b)};a.jqmData=function(c,b,d){return a.data(c,a.mobile.nsNormalize(b),d)};a.fn.jqmRemoveData=function(c){return this.removeData(a.mobile.nsNormalize(c))};a.jqmRemoveData=function(c,b){return a.removeData(c,a.mobile.nsNormalize(b))};a.jqmHasData=function(b,d){return a.hasData(b,a.mobile.nsNormalize(d))};
var b=a.find;a.find=function(c,d,e,g){c=c.replace(/:jqmData\(([^)]*)\)/g,"[data-"+(a.mobile.ns||"")+"$1]");return b.call(this,c,d,e,g)};a.extend(a.find,b);a.find.matches=function(b,d){return a.find(b,null,null,d)};a.find.matchesSelector=function(b,d){return a.find(d,null,null,[b]).length>0}})(jQuery,this);
(function(a,d){function b(a){var b=a.find(".ui-title:eq(0)");b.length?b.focus():a.focus()}function c(b){m&&(!m.closest(".ui-page-active").length||b)&&m.removeClass(a.mobile.activeBtnClass);m=null}function f(){y=!1;A.length>0&&a.mobile.changePage.apply(null,A.pop())}function e(c,d,e,f){var i=a.mobile.urlHistory.getActive(),h=a.support.touchOverflow&&a.mobile.touchOverflowEnabled,q=i.lastScroll||(h?0:a.mobile.defaultHomeScroll),i=g();window.scrollTo(0,a.mobile.defaultHomeScroll);d&&d.data("page")._trigger("beforehide",
null,{nextPage:c});h||c.height(i+q);c.data("page")._trigger("beforeshow",null,{prevPage:d||a("")});a.mobile.hidePageLoadingMsg();h&&q&&(c.addClass("ui-mobile-pre-transition"),b(c),c.is(".ui-native-fixed")?c.find(".ui-content").scrollTop(q):c.scrollTop(q));e=(a.mobile.transitionHandlers[e||"none"]||a.mobile.defaultTransitionHandler)(e,f,c,d);e.done(function(){h||(c.height(""),b(c));h||a.mobile.silentScroll(q);d&&(h||d.height(""),d.data("page")._trigger("hide",null,{nextPage:c}));c.data("page")._trigger("show",
null,{prevPage:d||a("")})});return e}function g(){var b=jQuery.event.special.orientationchange.orientation()==="portrait",c=b?screen.availHeight:screen.availWidth,b=Math.max(b?480:320,a(window).height());return Math.min(c,b)}function h(){a("."+a.mobile.activePageClass).css("min-height",g())}function j(b,c){c&&b.attr("data-"+a.mobile.ns+"role",c);b.page()}function l(a){for(;a;){if(a.nodeName.toLowerCase()=="a")break;a=a.parentNode}return a}function n(b){var b=a(b).closest(".ui-page").jqmData("url"),
c=u.hrefNoHash;if(!b||!i.isPath(b))b=c;return i.makeUrlAbsolute(b,c)}var s=a(window),p=a("html"),k=a("head"),i={urlParseRE:/^(((([^:\/#\?]+:)?(?:\/\/((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,parseUrl:function(b){if(a.type(b)==="object")return b;var b=i.urlParseRE.exec(b),c;b&&(c={href:b[0]||"",hrefNoHash:b[1]||"",hrefNoSearch:b[2]||"",domain:b[3]||"",protocol:b[4]||"",authority:b[5]||"",username:b[7]||
"",password:b[8]||"",host:b[9]||"",hostname:b[10]||"",port:b[11]||"",pathname:b[12]||"",directory:b[13]||"",filename:b[14]||"",search:b[15]||"",hash:b[16]||""});return c||{}},makePathAbsolute:function(a,b){if(a&&a.charAt(0)==="/")return a;for(var a=a||"",c=(b=b?b.replace(/^\/|(\/[^\/]*|[^\/]+)$/g,""):"")?b.split("/"):[],d=a.split("/"),e=0;e<d.length;e++){var f=d[e];switch(f){case ".":break;case "..":c.length&&c.pop();break;default:c.push(f)}}return"/"+c.join("/")},isSameDomain:function(a,b){return i.parseUrl(a).domain===
i.parseUrl(b).domain},isRelativeUrl:function(a){return i.parseUrl(a).protocol===""},isAbsoluteUrl:function(a){return i.parseUrl(a).protocol!==""},makeUrlAbsolute:function(a,b){if(!i.isRelativeUrl(a))return a;var c=i.parseUrl(a),d=i.parseUrl(b),e=c.protocol||d.protocol,f=c.authority||d.authority,g=c.pathname!=="",h=i.makePathAbsolute(c.pathname||d.filename,d.pathname);return e+"//"+f+h+(c.search||!g&&d.search||"")+c.hash},addSearchParams:function(b,c){var d=i.parseUrl(b),e=typeof c==="object"?a.param(c):
c,f=d.search||"?";return d.hrefNoSearch+f+(f.charAt(f.length-1)!=="?"?"&":"")+e+(d.hash||"")},convertUrlToDataUrl:function(a){var b=i.parseUrl(a);if(i.isEmbeddedPage(b))return b.hash.split(q)[0].replace(/^#/,"");else if(i.isSameDomain(b,u))return b.hrefNoHash.replace(u.domain,"");return a},get:function(a){if(a===d)a=location.hash;return i.stripHash(a).replace(/[^\/]*\.[^\/*]+$/,"")},getFilePath:function(b){var c="&"+a.mobile.subPageUrlKey;return b&&b.split(c)[0].split(q)[0]},set:function(a){location.hash=
a},isPath:function(a){return/\//.test(a)},clean:function(a){return a.replace(u.domain,"")},stripHash:function(a){return a.replace(/^#/,"")},cleanHash:function(a){return i.stripHash(a.replace(/\?.*$/,"").replace(q,""))},isExternal:function(a){a=i.parseUrl(a);return a.protocol&&a.domain!==t.domain?!0:!1},hasProtocol:function(a){return/^(:?\w+:)/.test(a)},isFirstPageUrl:function(b){var b=i.parseUrl(i.makeUrlAbsolute(b,u)),c=a.mobile.firstPage,c=c&&c[0]?c[0].id:d;return(b.hrefNoHash===t.hrefNoHash||w&&
b.hrefNoHash===u.hrefNoHash)&&(!b.hash||b.hash==="#"||c&&b.hash.replace(/^#/,"")===c)},isEmbeddedPage:function(a){a=i.parseUrl(a);if(a.protocol!=="")return a.hash&&(a.hrefNoHash===t.hrefNoHash||w&&a.hrefNoHash===u.hrefNoHash);return/^#/.test(a.href)}},m=null,o={stack:[],activeIndex:0,getActive:function(){return o.stack[o.activeIndex]},getPrev:function(){return o.stack[o.activeIndex-1]},getNext:function(){return o.stack[o.activeIndex+1]},addNew:function(a,b,c,d,e){o.getNext()&&o.clearForward();o.stack.push({url:a,
transition:b,title:c,pageUrl:d,role:e});o.activeIndex=o.stack.length-1},clearForward:function(){o.stack=o.stack.slice(0,o.activeIndex+1)},directHashChange:function(b){var c,e,f;this.getActive();a.each(o.stack,function(a,d){b.currentUrl===d.url&&(c=a<o.activeIndex,e=!c,f=a)});this.activeIndex=f!==d?f:this.activeIndex;c?(b.either||b.isBack)(!0):e&&(b.either||b.isForward)(!1)},ignoreNextHashChange:!1},A=[],y=!1,q="&ui-state=dialog",v=k.children("base"),t=i.parseUrl(location.href),u=v.length?i.parseUrl(i.makeUrlAbsolute(v.attr("href"),
t.href)):t,w=t.hrefNoHash!==u.hrefNoHash,x=a.support.dynamicBaseTag?{element:v.length?v:a("<base>",{href:u.hrefNoHash}).prependTo(k),set:function(a){x.element.attr("href",i.makeUrlAbsolute(a,u))},reset:function(){x.element.attr("href",u.hrefNoHash)}}:d,k=function(b){return function(){if(b){b=!1;var c=a.mobile.urlHistory.getActive(),d=a(".ui-page-active"),e=a(window);a.support.touchOverflow&&a.mobile.touchOverflowEnabled&&(e=d.is(".ui-native-fixed")?d.find(".ui-content"):d);if(c)d=e.scrollTop(),c.lastScroll=
d<a.mobile.minScrollBack?a.mobile.defaultHomeScroll:d}else b=!0}}(!0);a(document).bind("beforechangepage",k);a(window).bind(a.support.pushState?"popstate":"hashchange",k);a.mobile.getScreenHeight=g;a.fn.animationComplete=function(b){return a.support.cssTransitions?a(this).one("webkitAnimationEnd",b):(setTimeout(b,0),a(this))};a.mobile.updateHash=i.set;a.mobile.path=i;a.mobile.base=x;a.mobile.urlstack=o.stack;a.mobile.urlHistory=o;a.mobile.dialogHashKey=q;a.mobile.noneTransitionHandler=function(b,
c,d,e){e&&e.removeClass(a.mobile.activePageClass);d.addClass(a.mobile.activePageClass);return a.Deferred().resolve(b,c,d,e).promise()};a.mobile.defaultTransitionHandler=a.mobile.noneTransitionHandler;a.mobile.transitionHandlers={none:a.mobile.defaultTransitionHandler};a.mobile.allowCrossDomainPages=!1;a.mobile.getDocumentUrl=function(b){return b?a.extend({},t):t.href};a.mobile.getDocumentBase=function(b){return b?a.extend({},u):u.href};a.mobile.loadPage=function(b,c){var e=a.Deferred(),f=a.extend({},
a.mobile.loadPage.defaults,c),g=null,h=null,q=i.makeUrlAbsolute(b,a.mobile.activePage&&n(a.mobile.activePage)||u.hrefNoHash);if(f.data&&f.type==="get")q=i.addSearchParams(q,f.data),f.data=d;var k=i.getFilePath(q),p=i.convertUrlToDataUrl(q);f.pageContainer=f.pageContainer||a.mobile.pageContainer;g=f.pageContainer.children(":jqmData(url='"+p+"')");g.length===0&&a.mobile.firstPage&&i.isFirstPageUrl(q)&&(g=a(a.mobile.firstPage));x&&x.reset();if(g.length){if(!f.reloadPage)return j(g,f.role),e.resolve(q,
c,g),e.promise();h=g}if(f.showLoadMsg)var o=setTimeout(function(){a.mobile.showPageLoadingMsg()},f.loadMsgDelay);!a.mobile.allowCrossDomainPages&&!i.isSameDomain(t,q)?e.reject(q,c):a.ajax({url:k,type:f.type,data:f.data,dataType:"html",success:function(d){var l=a("<div></div>"),n=d.match(/<title[^>]*>([^<]*)/)&&RegExp.$1,v=RegExp("\\bdata-"+a.mobile.ns+"url=[\"']?([^\"'>]*)[\"']?");RegExp(".*(<[^>]+\\bdata-"+a.mobile.ns+"role=[\"']?page[\"']?[^>]*>).*").test(d)&&RegExp.$1&&v.test(RegExp.$1)&&RegExp.$1&&
(b=k=i.getFilePath(RegExp.$1));x&&x.set(k);l.get(0).innerHTML=d;g=l.find(":jqmData(role='page'), :jqmData(role='dialog')").first();g.length||(g=a("<div data-"+a.mobile.ns+"role='page'>"+d.split(/<\/?body[^>]*>/gmi)[1]+"</div>"));n&&!g.jqmData("title")&&g.jqmData("title",n);if(!a.support.dynamicBaseTag){var m=i.get(k);g.find("[src], link[href], a[rel='external'], :jqmData(ajax='false'), a[target]").each(function(){var b=a(this).is("[href]")?"href":a(this).is("[src]")?"src":"action",c=a(this).attr(b),
c=c.replace(location.protocol+"//"+location.host+location.pathname,"");/^(\w+:|#|\/)/.test(c)||a(this).attr(b,m+c)})}g.attr("data-"+a.mobile.ns+"url",i.convertUrlToDataUrl(k)).appendTo(f.pageContainer);g.one("pagecreate",function(){g.data("page").options.domCache||g.bind("pagehide.remove",function(){a(this).remove()})});j(g,f.role);q.indexOf("&"+a.mobile.subPageUrlKey)>-1&&(g=f.pageContainer.children(":jqmData(url='"+p+"')"));f.showLoadMsg&&(clearTimeout(o),a.mobile.hidePageLoadingMsg());e.resolve(q,
c,g,h)},error:function(){x&&x.set(i.get());f.showLoadMsg&&(clearTimeout(o),a.mobile.hidePageLoadingMsg(),a("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h1>"+a.mobile.pageLoadErrorMessage+"</h1></div>").css({display:"block",opacity:0.96,top:s.scrollTop()+100}).appendTo(f.pageContainer).delay(800).fadeOut(400,function(){a(this).remove()}));e.reject(q,c)}});return e.promise()};a.mobile.loadPage.defaults={type:"get",data:d,reloadPage:!1,role:d,showLoadMsg:!1,pageContainer:d,loadMsgDelay:50};
a.mobile.changePage=function(b,g){if(typeof g!=="object"){var h=null;if(typeof b==="object"&&b.url&&b.type)h={type:b.type,data:b.data,forcePageLoad:!0},b=b.url;var k=arguments.length;if(k>1){var l=["transition","reverse","changeHash","fromHashChange"],n;for(n=1;n<k;n++){var v=arguments[n];typeof v!=="undefined"&&(h=h||{},h[l[n-1]]=v)}}if(h)return a.mobile.changePage(b,h)}if(y)A.unshift(arguments);else{var m=a.extend({},a.mobile.changePage.defaults,g);m.pageContainer=m.pageContainer||a.mobile.pageContainer;
m.fromPage=m.fromPage||a.mobile.activePage;var u=m.pageContainer,h=new a.Event("pagebeforechange"),t={toPage:b,options:m};u.trigger(h,t);u.trigger("beforechangepage",t);if(!h.isDefaultPrevented())if(b=t.toPage,y=!0,typeof b=="string")a.mobile.loadPage(b,m).done(function(b,c,d,e){y=!1;c.duplicateCachedPage=e;a.mobile.changePage(d,c)}).fail(function(){y=!1;c(!0);f();m.pageContainer.trigger("pagechangefailed",t);m.pageContainer.trigger("changepagefailed",t)});else{h=m.fromPage;l=k=m.dataUrl&&i.convertUrlToDataUrl(m.dataUrl)||
b.jqmData("url");i.getFilePath(k);n=o.getActive();var v=o.activeIndex===0,w=0,s=document.title,x=m.role==="dialog"||b.jqmData("role")==="dialog";if(h&&h[0]===b[0])y=!1,u.trigger("pagechange",t),u.trigger("changepage",t);else{j(b,m.role);m.fromHashChange&&o.directHashChange({currentUrl:k,isBack:function(){w=-1},isForward:function(){w=1}});try{a(document.activeElement||"").add("input:focus, textarea:focus, select:focus").blur()}catch(H){}x&&n&&(k=(n.url||"")+q);if(m.changeHash!==!1&&k)o.ignoreNextHashChange=
!0,i.set(k);var F=b.jqmData("title")||b.children(":jqmData(role='header')").find(".ui-title").text();F&&s==document.title&&(s=F);w||o.addNew(k,m.transition,s,l,m.role);document.title=o.getActive().title;a.mobile.activePage=b;m.transition=m.transition||(w&&!v?n.transition:d)||(x?a.mobile.defaultDialogTransition:a.mobile.defaultPageTransition);m.reverse=m.reverse||w<0;e(b,h,m.transition,m.reverse).done(function(){c();m.duplicateCachedPage&&m.duplicateCachedPage.remove();p.removeClass("ui-mobile-rendering");
f();u.trigger("pagechange",t);u.trigger("changepage",t)})}}}};a.mobile.changePage.defaults={transition:d,reverse:!1,changeHash:!0,fromHashChange:!1,role:d,duplicateCachedPage:d,pageContainer:d,showLoadMsg:!0,dataUrl:d,fromPage:d};a.mobile._registerInternalEvents=function(){a("form").live("submit",function(b){var c=a(this);if(a.mobile.ajaxEnabled&&!c.is(":jqmData(ajax='false')")){var d=c.attr("method"),e=c.attr("target"),f=c.attr("action");if(!f&&(f=n(c),f===u.hrefNoHash))f=t.hrefNoSearch;f=i.makeUrlAbsolute(f,
n(c));!i.isExternal(f)&&!e&&(a.mobile.changePage(f,{type:d&&d.length&&d.toLowerCase()||"get",data:c.serialize(),transition:c.jqmData("transition"),direction:c.jqmData("direction"),reloadPage:!0}),b.preventDefault())}});a(document).bind("vclick",function(b){if((b=l(b.target))&&i.parseUrl(b.getAttribute("href")||"#").hash!=="#")c(!0),m=a(b).closest(".ui-btn").not(".ui-disabled"),m.addClass(a.mobile.activeBtnClass),a("."+a.mobile.activePageClass+" .ui-btn").not(b).blur()});a(document).bind("click",function(b){var f=
l(b.target);if(f){var e=a(f),g=function(){window.setTimeout(function(){c(!0)},200)};if(e.is(":jqmData(rel='back')"))return window.history.back(),!1;if(a.mobile.ajaxEnabled){var h=n(e),f=i.makeUrlAbsolute(e.attr("href")||"#",h);if(f.search("#")!=-1)if(f=f.replace(/[^#]*#/,""))f=i.isPath(f)?i.makeUrlAbsolute(f,h):i.makeUrlAbsolute("#"+f,t.hrefNoHash);else{b.preventDefault();return}var h=e.is("[rel='external']")||e.is(":jqmData(ajax='false')")||e.is("[target]"),q=a.mobile.allowCrossDomainPages&&t.protocol===
"file:"&&f.search(/^https?:/)!=-1;h||i.isExternal(f)&&!q?g():(g=e.jqmData("transition"),h=(h=e.jqmData("direction"))&&h==="reverse"||e.jqmData("back"),e=e.attr("data-"+a.mobile.ns+"rel")||d,a.mobile.changePage(f,{transition:g,reverse:h,role:e}),b.preventDefault())}else g()}});a(".ui-page").live("pageshow.prefetch",function(){var b=[];a(this).find("a:jqmData(prefetch)").each(function(){var c=a(this).attr("href");c&&a.inArray(c,b)===-1&&(b.push(c),a.mobile.loadPage(c))})});a.mobile._handleHashChange=
function(b){var c=i.stripHash(b),f={transition:a.mobile.urlHistory.stack.length===0?"none":d,changeHash:!1,fromHashChange:!0};if(!a.mobile.hashListeningEnabled||o.ignoreNextHashChange)o.ignoreNextHashChange=!1;else{if(o.stack.length>1&&c.indexOf(q)>-1)if(a.mobile.activePage.is(".ui-dialog"))o.directHashChange({currentUrl:c,either:function(b){var d=a.mobile.urlHistory.getActive();c=d.pageUrl;a.extend(f,{role:d.role,transition:d.transition,reverse:b})}});else{o.directHashChange({currentUrl:c,isBack:function(){window.history.back()},
isForward:function(){window.history.forward()}});return}c?(c=typeof c==="string"&&!i.isPath(c)?"#"+c:c,a.mobile.changePage(c,f)):a.mobile.changePage(a.mobile.firstPage,f)}};s.bind("hashchange",function(){a.mobile._handleHashChange(location.hash)});a(document).bind("pageshow",h);a(window).bind("throttledresize",h)}})(jQuery);
(function(a,d){var b={},c=a(d),f=a.mobile.path.parseUrl(location.href);a.extend(b,{initialFilePath:f.pathname+f.search,initialHref:f.hrefNoHash,hashchangeFired:!1,state:function(){return{hash:location.hash||"#"+b.initialFilePath,title:document.title,initialHref:b.initialHref}},resetUIKeys:function(b){var c="&"+a.mobile.subPageUrlKey,d=b.indexOf(a.mobile.dialogHashKey);d>-1?b=b.slice(0,d)+"#"+b.slice(d):b.indexOf(c)>-1&&(b=b.split(c).join("#"+c));return b},onHashChange:function(){var c,d;b.hashchangeFired=
!0;a.mobile.path.isPath(location.hash)&&(d=b.state(),c=a.mobile.path.makeUrlAbsolute(d.hash.replace("#",""),location.href),c=b.resetUIKeys(c),history.replaceState(d,document.title,c))},onPopState:function(b){var c=b.originalEvent.state;if(c)a.mobile.urlHistory.ignoreNextHashChange=!0,setTimeout(function(){a.mobile.urlHistory.ignoreNextHashChange=!1;a.mobile._handleHashChange(c.hash)},100)},init:function(){c.bind("hashchange",b.onHashChange);c.bind("popstate",b.onPopState);location.hash===""&&history.replaceState(b.state(),
document.title,location.href)}});a(function(){a.mobile.pushStateEnabled&&a.support.pushState&&b.init()})})(jQuery,this);
(function(a){function d(b,c,d,e){var g=new a.Deferred,h=c?" reverse":"",j="ui-mobile-viewport-transitioning viewport-"+b;d.animationComplete(function(){d.add(e).removeClass("out in reverse "+b);e&&e.removeClass(a.mobile.activePageClass);d.parent().removeClass(j);g.resolve(b,c,d,e)});d.parent().addClass(j);e&&e.addClass(b+" out"+h);d.addClass(a.mobile.activePageClass+" "+b+" in"+h);return g.promise()}a.mobile.css3TransitionHandler=d;if(a.mobile.defaultTransitionHandler===a.mobile.noneTransitionHandler)a.mobile.defaultTransitionHandler=
d})(jQuery,this);
(function(a){a.mobile.page.prototype.options.degradeInputs={color:!1,date:!1,datetime:!1,"datetime-local":!1,email:!1,month:!1,number:!1,range:"number",search:"text",tel:!1,time:!1,url:!1,week:!1};a.mobile.page.prototype.options.keepNative=":jqmData(role='none'), :jqmData(role='nojs')";a(document).bind("pagecreate enhance",function(d){var b=a(d.target).data("page").options;a(d.target).find("input").not(b.keepNative).each(function(){var c=a(this),d=this.getAttribute("type"),e=b.degradeInputs[d]||"text";
b.degradeInputs[d]&&c.replaceWith(a("<div>").html(c.clone()).html().replace(/\s+type=["']?\w+['"]?/,' type="'+e+'" data-'+a.mobile.ns+'type="'+d+'" '))})})})(jQuery);
(function(a,d){a.widget("mobile.dialog",a.mobile.widget,{options:{closeBtnText:"Close",theme:"a",initSelector:":jqmData(role='dialog')"},_create:function(){var b=this.element,c=b.attr("class").match(/ui-body-[a-z]/);c.length&&b.removeClass(c[0]);b.addClass("ui-body-"+this.options.theme);b.attr("role","dialog").addClass("ui-dialog").find(":jqmData(role='header')").addClass("ui-corner-top ui-overlay-shadow").prepend("<a href='#' data-"+a.mobile.ns+"icon='delete' data-"+a.mobile.ns+"rel='back' data-"+
a.mobile.ns+"iconpos='notext'>"+this.options.closeBtnText+"</a>").end().find(":jqmData(role='content'),:jqmData(role='footer')").last().addClass("ui-corner-bottom ui-overlay-shadow");b.bind("vclick submit",function(b){var b=a(b.target).closest(b.type==="vclick"?"a":"form"),c;b.length&&!b.jqmData("transition")&&(c=a.mobile.urlHistory.getActive()||{},b.attr("data-"+a.mobile.ns+"transition",c.transition||a.mobile.defaultDialogTransition).attr("data-"+a.mobile.ns+"direction","reverse"))}).bind("pagehide",
function(){a(this).find("."+a.mobile.activeBtnClass).removeClass(a.mobile.activeBtnClass)})},close:function(){d.history.back()}});a(a.mobile.dialog.prototype.options.initSelector).live("pagecreate",function(){a(this).dialog()})})(jQuery,this);
(function(a){a.mobile.page.prototype.options.backBtnText="Back";a.mobile.page.prototype.options.addBackBtn=!1;a.mobile.page.prototype.options.backBtnTheme=null;a.mobile.page.prototype.options.headerTheme="a";a.mobile.page.prototype.options.footerTheme="a";a.mobile.page.prototype.options.contentTheme=null;a(":jqmData(role='page'), :jqmData(role='dialog')").live("pagecreate",function(){var d=a(this).data("page").options,b=d.theme;a(":jqmData(role='header'), :jqmData(role='footer'), :jqmData(role='content')",
this).each(function(){var c=a(this),f=c.jqmData("role"),e=c.jqmData("theme"),g,h,j;c.addClass("ui-"+f);if(f==="header"||f==="footer"){e=e||(f==="header"?d.headerTheme:d.footerTheme)||b;c.addClass("ui-bar-"+e);c.attr("role",f==="header"?"banner":"contentinfo");g=c.children("a");h=g.hasClass("ui-btn-left");j=g.hasClass("ui-btn-right");if(!h)h=g.eq(0).not(".ui-btn-right").addClass("ui-btn-left").length;j||g.eq(1).addClass("ui-btn-right");d.addBackBtn&&f==="header"&&a(".ui-page").length>1&&c.jqmData("url")!==
a.mobile.path.stripHash(location.hash)&&!h&&(f=a("<a href='#' class='ui-btn-left' data-"+a.mobile.ns+"rel='back' data-"+a.mobile.ns+"icon='arrow-l'>"+d.backBtnText+"</a>").prependTo(c),f.attr("data-"+a.mobile.ns+"theme",d.backBtnTheme||e));c.children("h1, h2, h3, h4, h5, h6").addClass("ui-title").attr({tabindex:"0",role:"heading","aria-level":"1"})}else if(f==="content"){if(e||d.contentTheme)c.addClass("ui-body-"+(e||d.contentTheme));c.attr("role","main")}})})})(jQuery);
(function(a){a.widget("mobile.collapsible",a.mobile.widget,{options:{expandCueText:" click to expand contents",collapseCueText:" click to collapse contents",collapsed:!0,heading:">:header,>legend",theme:null,iconTheme:"d",initSelector:":jqmData(role='collapsible')"},_create:function(){var d=this.element,b=this.options,c=d.addClass("ui-collapsible-contain"),f=d.find(b.heading).eq(0),e=c.wrapInner("<div class='ui-collapsible-content'></div>").find(".ui-collapsible-content"),d=d.closest(":jqmData(role='collapsible-set')").addClass("ui-collapsible-set");
f.is("legend")&&(f=a("<div role='heading'>"+f.html()+"</div>").insertBefore(f),f.next().remove());f.insertBefore(e).addClass("ui-collapsible-heading").append("<span class='ui-collapsible-heading-status'></span>").wrapInner("<a href='#' class='ui-collapsible-heading-toggle'></a>").find("a:eq(0)").buttonMarkup({shadow:!d.length,corners:!1,iconPos:"left",icon:"plus",theme:b.theme}).find(".ui-icon").removeAttr("class").buttonMarkup({shadow:!0,corners:!0,iconPos:"notext",icon:"plus",theme:b.iconTheme});
d.length?c.jqmData("collapsible-last")&&f.find("a:eq(0), .ui-btn-inner").addClass("ui-corner-bottom"):f.find("a:eq(0)").addClass("ui-corner-all").find(".ui-btn-inner").addClass("ui-corner-all");c.bind("collapse",function(d){!d.isDefaultPrevented()&&a(d.target).closest(".ui-collapsible-contain").is(c)&&(d.preventDefault(),f.addClass("ui-collapsible-heading-collapsed").find(".ui-collapsible-heading-status").text(b.expandCueText).end().find(".ui-icon").removeClass("ui-icon-minus").addClass("ui-icon-plus"),
e.addClass("ui-collapsible-content-collapsed").attr("aria-hidden",!0),c.jqmData("collapsible-last")&&f.find("a:eq(0), .ui-btn-inner").addClass("ui-corner-bottom"))}).bind("expand",function(a){a.isDefaultPrevented()||(a.preventDefault(),f.removeClass("ui-collapsible-heading-collapsed").find(".ui-collapsible-heading-status").text(b.collapseCueText),f.find(".ui-icon").removeClass("ui-icon-plus").addClass("ui-icon-minus"),e.removeClass("ui-collapsible-content-collapsed").attr("aria-hidden",!1),c.jqmData("collapsible-last")&&
f.find("a:eq(0), .ui-btn-inner").removeClass("ui-corner-bottom"))}).trigger(b.collapsed?"collapse":"expand");d.length&&!d.jqmData("collapsiblebound")&&(d.jqmData("collapsiblebound",!0).bind("expand",function(b){a(b.target).closest(".ui-collapsible-contain").siblings(".ui-collapsible-contain").trigger("collapse")}),d=d.children(":jqmData(role='collapsible')"),d.first().find("a:eq(0)").addClass("ui-corner-top").find(".ui-btn-inner").addClass("ui-corner-top"),d.last().jqmData("collapsible-last",!0));
f.bind("vclick",function(a){var b=f.is(".ui-collapsible-heading-collapsed")?"expand":"collapse";c.trigger(b);a.preventDefault()})}});a(document).bind("pagecreate create",function(d){a(a.mobile.collapsible.prototype.options.initSelector,d.target).collapsible()})})(jQuery);(function(a){a.fn.fieldcontain=function(){return this.addClass("ui-field-contain ui-body ui-br")};a(document).bind("pagecreate create",function(d){a(":jqmData(role='fieldcontain')",d.target).fieldcontain()})})(jQuery);
(function(a){a.fn.grid=function(d){return this.each(function(){var b=a(this),c=a.extend({grid:null},d),f=b.children(),e={solo:1,a:2,b:3,c:4,d:5},c=c.grid;if(!c)if(f.length<=5)for(var g in e)e[g]===f.length&&(c=g);else c="a";e=e[c];b.addClass("ui-grid-"+c);f.filter(":nth-child("+e+"n+1)").addClass("ui-block-a");e>1&&f.filter(":nth-child("+e+"n+2)").addClass("ui-block-b");e>2&&f.filter(":nth-child(3n+3)").addClass("ui-block-c");e>3&&f.filter(":nth-child(4n+4)").addClass("ui-block-d");e>4&&f.filter(":nth-child(5n+5)").addClass("ui-block-e")})}})(jQuery);
(function(a,d){a.widget("mobile.navbar",a.mobile.widget,{options:{iconpos:"top",grid:null,initSelector:":jqmData(role='navbar')"},_create:function(){var b=this.element,c=b.find("a"),f=c.filter(":jqmData(icon)").length?this.options.iconpos:d;b.addClass("ui-navbar").attr("role","navigation").find("ul").grid({grid:this.options.grid});f||b.addClass("ui-navbar-noicons");c.buttonMarkup({corners:!1,shadow:!1,iconpos:f});b.delegate("a","vclick",function(){c.not(".ui-state-persist").removeClass(a.mobile.activeBtnClass);
a(this).addClass(a.mobile.activeBtnClass)})}});a(document).bind("pagecreate create",function(b){a(a.mobile.navbar.prototype.options.initSelector,b.target).navbar()})})(jQuery);
(function(a){var d={};a.widget("mobile.listview",a.mobile.widget,{options:{theme:"c",countTheme:"c",headerTheme:"b",dividerTheme:"b",splitIcon:"arrow-r",splitTheme:"b",inset:!1,initSelector:":jqmData(role='listview')"},_create:function(){var a=this;a.element.addClass(function(c,d){return d+" ui-listview "+(a.options.inset?" ui-listview-inset ui-corner-all ui-shadow ":"")});a.refresh(!0)},_itemApply:function(b,c){var d=c.find(".ui-li-count");d.length&&c.addClass("ui-li-has-count");d.addClass("ui-btn-up-"+
(b.jqmData("counttheme")||this.options.countTheme)+" ui-btn-corner-all");c.find("h1, h2, h3, h4, h5, h6").addClass("ui-li-heading").end().find("p, dl").addClass("ui-li-desc").end().find(">img:eq(0), .ui-link-inherit>img:eq(0)").addClass("ui-li-thumb").each(function(){c.addClass(a(this).is(".ui-li-icon")?"ui-li-has-icon":"ui-li-has-thumb")}).end().find(".ui-li-aside").each(function(){var b=a(this);b.prependTo(b.parent())})},_removeCorners:function(a,c){a=a.add(a.find(".ui-btn-inner, .ui-li-link-alt, .ui-li-thumb"));
c==="top"?a.removeClass("ui-corner-top ui-corner-tr ui-corner-tl"):c==="bottom"?a.removeClass("ui-corner-bottom ui-corner-br ui-corner-bl"):a.removeClass("ui-corner-top ui-corner-tr ui-corner-tl ui-corner-bottom ui-corner-br ui-corner-bl")},_refreshCorners:function(a){var c;this.options.inset&&(c=this.element.children("li"),a=a?c.not(".ui-screen-hidden"):c.filter(":visible"),this._removeCorners(c),c=a.first().addClass("ui-corner-top"),c.add(c.find(".ui-btn-inner")).find(".ui-li-link-alt").addClass("ui-corner-tr").end().find(".ui-li-thumb").addClass("ui-corner-tl"),
c=a.last().addClass("ui-corner-bottom"),c.add(c.find(".ui-btn-inner")).find(".ui-li-link-alt").addClass("ui-corner-br").end().find(".ui-li-thumb").addClass("ui-corner-bl"))},refresh:function(b){this.parentPage=this.element.closest(".ui-page");this._createSubPages();var c=this.options,d=this.element,e=d.jqmData("dividertheme")||c.dividerTheme,g=d.jqmData("splittheme"),h=d.jqmData("spliticon"),j=d.children("li"),l=a.support.cssPseudoElement||!a.nodeName(d[0],"ol")?0:1,n,s,p,k,i;l&&d.find(".ui-li-dec").remove();
for(var m=0,o=j.length;m<o;m++){n=j.eq(m);s="ui-li";if(b||!n.hasClass("ui-li"))p=n.jqmData("theme")||c.theme,k=n.children("a"),k.length?(i=n.jqmData("icon"),n.buttonMarkup({wrapperEls:"div",shadow:!1,corners:!1,iconpos:"right",icon:k.length>1||i===!1?!1:i||"arrow-r",theme:p}),i!=!1&&k.length==1&&n.addClass("ui-li-has-arrow"),k.first().addClass("ui-link-inherit"),k.length>1&&(s+=" ui-li-has-alt",k=k.last(),i=g||k.jqmData("theme")||c.splitTheme,k.appendTo(n).attr("title",k.text()).addClass("ui-li-link-alt").empty().buttonMarkup({shadow:!1,
corners:!1,theme:p,icon:!1,iconpos:!1}).find(".ui-btn-inner").append(a("<span />").buttonMarkup({shadow:!0,corners:!0,theme:i,iconpos:"notext",icon:h||k.jqmData("icon")||c.splitIcon})))):n.jqmData("role")==="list-divider"?(s+=" ui-li-divider ui-btn ui-bar-"+e,n.attr("role","heading"),l&&(l=1)):s+=" ui-li-static ui-body-"+p;l&&s.indexOf("ui-li-divider")<0&&(p=n.is(".ui-li-static:first")?n:n.find(".ui-link-inherit"),p.addClass("ui-li-jsnumbering").prepend("<span class='ui-li-dec'>"+l++ +". </span>"));
n.add(n.children(".ui-btn-inner")).addClass(s);this._itemApply(d,n)}this._refreshCorners(b)},_idStringEscape:function(a){return a.replace(/[^a-zA-Z0-9]/g,"-")},_createSubPages:function(){var b=this.element,c=b.closest(".ui-page"),f=c.jqmData("url"),e=f||c[0][a.expando],g=b.attr("id"),h=this.options,j="data-"+a.mobile.ns,l=this,n=c.find(":jqmData(role='footer')").jqmData("id"),s;typeof d[e]==="undefined"&&(d[e]=-1);g=g||++d[e];a(b.find("li>ul, li>ol").toArray().reverse()).each(function(c){var d=a(this),
e=d.attr("id")||g+"-"+c,c=d.parent(),m=a(d.prevAll().toArray().reverse()),m=m.length?m:a("<span>"+a.trim(c.contents()[0].nodeValue)+"</span>"),o=m.first().text(),e=(f||"")+"&"+a.mobile.subPageUrlKey+"="+e,l=d.jqmData("theme")||h.theme,y=d.jqmData("counttheme")||b.jqmData("counttheme")||h.countTheme;s=!0;d.detach().wrap("<div "+j+"role='page' "+j+"url='"+e+"' "+j+"theme='"+l+"' "+j+"count-theme='"+y+"'><div "+j+"role='content'></div></div>").parent().before("<div "+j+"role='header' "+j+"theme='"+h.headerTheme+
"'><div class='ui-title'>"+o+"</div></div>").after(n?a("<div "+j+"role='footer' "+j+"id='"+n+"'>"):"").parent().appendTo(a.mobile.pageContainer).page();d=c.find("a:first");d.length||(d=a("<a/>").html(m||o).prependTo(c.empty()));d.attr("href","#"+e)}).listview();s&&c.data("page").options.domCache===!1&&c.unbind("pagehide.remove").bind("pagehide.remove",function(b,d){var e=d.nextPage;d.nextPage&&(e=e.jqmData("url"),e.indexOf(f+"&"+a.mobile.subPageUrlKey)!==0&&(l.childPages().remove(),c.remove()))})},
childPages:function(){var b=this.parentPage.jqmData("url");return a(":jqmData(url^='"+b+"&"+a.mobile.subPageUrlKey+"')")}});a(document).bind("pagecreate create",function(b){a(a.mobile.listview.prototype.options.initSelector,b.target).listview()})})(jQuery);
(function(a){a.mobile.listview.prototype.options.filter=!1;a.mobile.listview.prototype.options.filterPlaceholder="Filter items...";a.mobile.listview.prototype.options.filterTheme="c";a.mobile.listview.prototype.options.filterCallback=function(a,b){return a.toLowerCase().indexOf(b)===-1};a(":jqmData(role='listview')").live("listviewcreate",function(){var d=a(this),b=d.data("listview");if(b.options.filter){var c=a("<form>",{"class":"ui-listview-filter ui-bar-"+b.options.filterTheme,role:"search"});
a("<input>",{placeholder:b.options.filterPlaceholder}).attr("data-"+a.mobile.ns+"type","search").jqmData("lastval","").bind("keyup change",function(){var c=a(this),e=this.value.toLowerCase(),g=null,g=c.jqmData("lastval")+"",h=!1,j="";c.jqmData("lastval",e);j=e.replace(RegExp("^"+g),"");g=e.length<g.length||j.length!=e.length-g.length?d.children():d.children(":not(.ui-screen-hidden)");if(e){for(var l=g.length-1;l>=0;l--)c=a(g[l]),j=c.jqmData("filtertext")||c.text(),c.is("li:jqmData(role=list-divider)")?
(c.toggleClass("ui-filter-hidequeue",!h),h=!1):b.options.filterCallback(j,e)?c.toggleClass("ui-filter-hidequeue",!0):h=!0;g.filter(":not(.ui-filter-hidequeue)").toggleClass("ui-screen-hidden",!1);g.filter(".ui-filter-hidequeue").toggleClass("ui-screen-hidden",!0).toggleClass("ui-filter-hidequeue",!1)}else g.toggleClass("ui-screen-hidden",!1);b._refreshCorners()}).appendTo(c).textinput();a(this).jqmData("inset")&&c.addClass("ui-listview-filter-inset");c.bind("submit",function(){return!1}).insertBefore(d)}})})(jQuery);
(function(a){a(document).bind("pagecreate create",function(d){a(":jqmData(role='nojs')",d.target).addClass("ui-nojs")})})(jQuery);
(function(a,d){a.widget("mobile.checkboxradio",a.mobile.widget,{options:{theme:null,initSelector:"input[type='checkbox'],input[type='radio']"},_create:function(){var b=this,c=this.element,f=c.closest("form,fieldset,:jqmData(role='page')").find("label").filter("[for='"+c[0].id+"']"),e=c.attr("type"),g=e+"-on",h=e+"-off",j=c.parents(":jqmData(type='horizontal')").length?d:h;if(!(e!=="checkbox"&&e!=="radio")){a.extend(this,{label:f,inputtype:e,checkedClass:"ui-"+g+(j?"":" "+a.mobile.activeBtnClass),
uncheckedClass:"ui-"+h,checkedicon:"ui-icon-"+g,uncheckedicon:"ui-icon-"+h});if(!this.options.theme)this.options.theme=this.element.jqmData("theme");f.buttonMarkup({theme:this.options.theme,icon:j,shadow:!1});c.add(f).wrapAll("<div class='ui-"+e+"'></div>");f.bind({vmouseover:function(){if(a(this).parent().is(".ui-disabled"))return!1},vclick:function(a){if(c.is(":disabled"))a.preventDefault();else return b._cacheVals(),c.prop("checked",e==="radio"&&!0||!c.prop("checked")),b._getInputSet().not(c).prop("checked",
!1),b._updateAll(),!1}});c.bind({vmousedown:function(){this._cacheVals()},vclick:function(){var c=a(this);c.is(":checked")?(c.prop("checked",!0),b._getInputSet().not(c).prop("checked",!1)):c.prop("checked",!1);b._updateAll()},focus:function(){f.addClass("ui-focus")},blur:function(){f.removeClass("ui-focus")}});this.refresh()}},_cacheVals:function(){this._getInputSet().each(function(){var b=a(this);b.jqmData("cacheVal",b.is(":checked"))})},_getInputSet:function(){if(this.inputtype=="checkbox")return this.element;
return this.element.closest("form,fieldset,:jqmData(role='page')").find("input[name='"+this.element.attr("name")+"'][type='"+this.inputtype+"']")},_updateAll:function(){var b=this;this._getInputSet().each(function(){var c=a(this);(c.is(":checked")||b.inputtype==="checkbox")&&c.trigger("change")}).checkboxradio("refresh")},refresh:function(){var b=this.element,c=this.label,d=c.find(".ui-icon");a(b[0]).prop("checked")?(c.addClass(this.checkedClass).removeClass(this.uncheckedClass),d.addClass(this.checkedicon).removeClass(this.uncheckedicon)):
(c.removeClass(this.checkedClass).addClass(this.uncheckedClass),d.removeClass(this.checkedicon).addClass(this.uncheckedicon));b.is(":disabled")?this.disable():this.enable()},disable:function(){this.element.prop("disabled",!0).parent().addClass("ui-disabled")},enable:function(){this.element.prop("disabled",!1).parent().removeClass("ui-disabled")}});a(document).bind("pagecreate create",function(b){a(a.mobile.checkboxradio.prototype.options.initSelector,b.target).not(":jqmData(role='none'), :jqmData(role='nojs')").checkboxradio()})})(jQuery);
(function(a){a.widget("mobile.button",a.mobile.widget,{options:{theme:null,icon:null,iconpos:null,inline:null,corners:!0,shadow:!0,iconshadow:!0,initSelector:"button, [type='button'], [type='submit'], [type='reset'], [type='image']"},_create:function(){var d=this.element,b=this.options;this.button=a("<div></div>").text(d.text()||d.val()).buttonMarkup({theme:b.theme,icon:b.icon,iconpos:b.iconpos,inline:b.inline,corners:b.corners,shadow:b.shadow,iconshadow:b.iconshadow}).insertBefore(d).append(d.addClass("ui-btn-hidden"));
b=d.attr("type");b!=="button"&&b!=="reset"&&d.bind("vclick",function(){var b=a("<input>",{type:"hidden",name:d.attr("name"),value:d.attr("value")}).insertBefore(d);a(document).submit(function(){b.remove()})});this.refresh()},enable:function(){this.element.attr("disabled",!1);this.button.removeClass("ui-disabled").attr("aria-disabled",!1);return this._setOption("disabled",!1)},disable:function(){this.element.attr("disabled",!0);this.button.addClass("ui-disabled").attr("aria-disabled",!0);return this._setOption("disabled",
!0)},refresh:function(){this.element.attr("disabled")?this.disable():this.enable()}});a(document).bind("pagecreate create",function(d){a(a.mobile.button.prototype.options.initSelector,d.target).not(":jqmData(role='none'), :jqmData(role='nojs')").button()})})(jQuery);
(function(a,d){a.widget("mobile.slider",a.mobile.widget,{options:{theme:null,trackTheme:null,disabled:!1,initSelector:"input[type='range'], :jqmData(type='range'), :jqmData(role='slider')"},_create:function(){var b=this,c=this.element,f=c.parents("[class*='ui-bar-'],[class*='ui-body-']").eq(0),f=f.length?f.attr("class").match(/ui-(bar|body)-([a-z])/)[2]:"c",e=this.options.theme?this.options.theme:f,g=this.options.trackTheme?this.options.trackTheme:f,h=c[0].nodeName.toLowerCase(),f=h=="select"?"ui-slider-switch":
"",j=c.attr("id"),l=j+"-label",j=a("[for='"+j+"']").attr("id",l),n=function(){return h=="input"?parseFloat(c.val()):c[0].selectedIndex},s=h=="input"?parseFloat(c.attr("min")):0,p=h=="input"?parseFloat(c.attr("max")):c.find("option").length-1,k=window.parseFloat(c.attr("step")||1),i=a("<div class='ui-slider "+f+" ui-btn-down-"+g+" ui-btn-corner-all' role='application'></div>"),m=a("<a href='#' class='ui-slider-handle'></a>").appendTo(i).buttonMarkup({corners:!0,theme:e,shadow:!0}).attr({role:"slider",
"aria-valuemin":s,"aria-valuemax":p,"aria-valuenow":n(),"aria-valuetext":n(),title:n(),"aria-labelledby":l});a.extend(this,{slider:i,handle:m,dragging:!1,beforeStart:null,userModified:!1});h=="select"&&(i.wrapInner("<div class='ui-slider-inneroffset'></div>"),c.find("option"),c.find("option").each(function(b){var c=!b?"b":"a",d=!b?"right":"left",b=!b?" ui-btn-down-"+g:" "+a.mobile.activeBtnClass;a("<div class='ui-slider-labelbg ui-slider-labelbg-"+c+b+" ui-btn-corner-"+d+"'></div>").prependTo(i);
a("<span class='ui-slider-label ui-slider-label-"+c+b+" ui-btn-corner-"+d+"' role='img'>"+a(this).text()+"</span>").prependTo(m)}));j.addClass("ui-slider");c.addClass(h==="input"?"ui-slider-input":"ui-slider-switch").change(function(){b.refresh(n(),!0)}).keyup(function(){b.refresh(n(),!0,!0)}).blur(function(){b.refresh(n(),!0)});a(document).bind("vmousemove",function(a){if(b.dragging)return b.refresh(a),b.userModified=b.userModified||b.beforeStart!==c[0].selectedIndex,!1});i.bind("vmousedown",function(a){b.dragging=
!0;b.userModified=!1;if(h==="select")b.beforeStart=c[0].selectedIndex;b.refresh(a);return!1});i.add(document).bind("vmouseup",function(){if(b.dragging)return b.dragging=!1,h==="select"&&!b.userModified&&(m.addClass("ui-slider-handle-snapping"),b.refresh(!b.beforeStart?1:0)),!1});i.insertAfter(c);this.handle.bind("vmousedown",function(){a(this).focus()}).bind("vclick",!1);this.handle.bind("keydown",function(c){var d=n();if(!b.options.disabled){switch(c.keyCode){case a.mobile.keyCode.HOME:case a.mobile.keyCode.END:case a.mobile.keyCode.PAGE_UP:case a.mobile.keyCode.PAGE_DOWN:case a.mobile.keyCode.UP:case a.mobile.keyCode.RIGHT:case a.mobile.keyCode.DOWN:case a.mobile.keyCode.LEFT:if(c.preventDefault(),
!b._keySliding)b._keySliding=!0,a(this).addClass("ui-state-active")}switch(c.keyCode){case a.mobile.keyCode.HOME:b.refresh(s);break;case a.mobile.keyCode.END:b.refresh(p);break;case a.mobile.keyCode.PAGE_UP:case a.mobile.keyCode.UP:case a.mobile.keyCode.RIGHT:b.refresh(d+k);break;case a.mobile.keyCode.PAGE_DOWN:case a.mobile.keyCode.DOWN:case a.mobile.keyCode.LEFT:b.refresh(d-k)}}}).keyup(function(){if(b._keySliding)b._keySliding=!1,a(this).removeClass("ui-state-active")});this.refresh(d,d,!0)},refresh:function(a,
c,d){if(!this.options.disabled){var e=this.element,g=e[0].nodeName.toLowerCase(),h=g==="input"?parseFloat(e.attr("min")):0,j=g==="input"?parseFloat(e.attr("max")):e.find("option").length-1;if(typeof a==="object"){if(!this.dragging||a.pageX<this.slider.offset().left-8||a.pageX>this.slider.offset().left+this.slider.width()+8)return;a=Math.round((a.pageX-this.slider.offset().left)/this.slider.width()*100)}else a==null&&(a=g==="input"?parseFloat(e.val()):e[0].selectedIndex),a=(parseFloat(a)-h)/(j-h)*
100;if(!isNaN(a)){a<0&&(a=0);a>100&&(a=100);var l=Math.round(a/100*(j-h))+h;l<h&&(l=h);l>j&&(l=j);this.handle.css("left",a+"%");this.handle.attr({"aria-valuenow":g==="input"?l:e.find("option").eq(l).attr("value"),"aria-valuetext":g==="input"?l:e.find("option").eq(l).text(),title:l});g==="select"&&(l===0?this.slider.addClass("ui-slider-switch-a").removeClass("ui-slider-switch-b"):this.slider.addClass("ui-slider-switch-b").removeClass("ui-slider-switch-a"));if(!d)g==="input"?e.val(l):e[0].selectedIndex=
l,c||e.trigger("change")}}},enable:function(){this.element.attr("disabled",!1);this.slider.removeClass("ui-disabled").attr("aria-disabled",!1);return this._setOption("disabled",!1)},disable:function(){this.element.attr("disabled",!0);this.slider.addClass("ui-disabled").attr("aria-disabled",!0);return this._setOption("disabled",!0)}});a(document).bind("pagecreate create",function(b){a(a.mobile.slider.prototype.options.initSelector,b.target).not(":jqmData(role='none'), :jqmData(role='nojs')").slider()})})(jQuery);
(function(a){a.widget("mobile.textinput",a.mobile.widget,{options:{theme:null,initSelector:"input[type='text'], input[type='search'], :jqmData(type='search'), input[type='number'], :jqmData(type='number'), input[type='password'], input[type='email'], input[type='url'], input[type='tel'], textarea"},_create:function(){var i;var d=this.element,b=this.options,c=b.theme,f,e;c||(c=this.element.closest("[class*='ui-bar-'],[class*='ui-body-']"),i=(c=c.length&&/ui-(bar|body)-([a-z])/.exec(c.attr("class")))&&
c[2]||"c",c=i);c=" ui-body-"+c;a("label[for='"+d.attr("id")+"']").addClass("ui-input-text");d.addClass("ui-input-text ui-body-"+b.theme);f=d;typeof d[0].autocorrect!=="undefined"&&(d[0].setAttribute("autocorrect","off"),d[0].setAttribute("autocomplete","off"));d.is("[type='search'],:jqmData(type='search')")?(f=d.wrap("<div class='ui-input-search ui-shadow-inset ui-btn-corner-all ui-btn-shadow ui-icon-searchfield"+c+"'></div>").parent(),e=a("<a href='#' class='ui-input-clear' title='clear text'>clear text</a>").tap(function(a){d.val("").focus();
d.trigger("change");e.addClass("ui-input-clear-hidden");a.preventDefault()}).appendTo(f).buttonMarkup({icon:"delete",iconpos:"notext",corners:!0,shadow:!0}),b=function(){d.val()?e.removeClass("ui-input-clear-hidden"):e.addClass("ui-input-clear-hidden")},b(),d.keyup(b).focus(b)):d.addClass("ui-corner-all ui-shadow-inset"+c);d.focus(function(){f.addClass("ui-focus")}).blur(function(){f.removeClass("ui-focus")});if(d.is("textarea")){var g=function(){var a=d[0].scrollHeight;d[0].clientHeight<a&&d.css({height:a+
15})},h;d.keyup(function(){clearTimeout(h);h=setTimeout(g,100)})}},disable:function(){(this.element.attr("disabled",!0).is("[type='search'],:jqmData(type='search')")?this.element.parent():this.element).addClass("ui-disabled")},enable:function(){(this.element.attr("disabled",!1).is("[type='search'],:jqmData(type='search')")?this.element.parent():this.element).removeClass("ui-disabled")}});a(document).bind("pagecreate create",function(d){a(a.mobile.textinput.prototype.options.initSelector,d.target).not(":jqmData(role='none'), :jqmData(role='nojs')").textinput()})})(jQuery);
(function(a){var d=function(b){var c=b.selectID,d=b.label,e=b.select.closest(".ui-page"),g=a("<div>",{"class":"ui-selectmenu-screen ui-screen-hidden"}).appendTo(e),h=b.select.find("option"),j=b.isMultiple=b.select[0].multiple,l=c+"-button",n=c+"-menu",s=a("<div data-"+a.mobile.ns+"role='dialog' data-"+a.mobile.ns+"theme='"+b.options.menuPageTheme+"'><div data-"+a.mobile.ns+"role='header'><div class='ui-title'>"+d.text()+"</div></div><div data-"+a.mobile.ns+"role='content'></div></div>").appendTo(a.mobile.pageContainer).page(),
p=a("<div>",{"class":"ui-selectmenu ui-selectmenu-hidden ui-overlay-shadow ui-corner-all ui-body-"+b.options.overlayTheme+" "+a.mobile.defaultDialogTransition}).insertAfter(g),k=a("<ul>",{"class":"ui-selectmenu-list",id:n,role:"listbox","aria-labelledby":l}).attr("data-"+a.mobile.ns+"theme",b.options.theme).appendTo(p),i=a("<div>",{"class":"ui-header ui-bar-"+b.options.theme}).prependTo(p),m=a("<h1>",{"class":"ui-title"}).appendTo(i),o=a("<a>",{text:b.options.closeText,href:"#","class":"ui-btn-left"}).attr("data-"+
a.mobile.ns+"iconpos","notext").attr("data-"+a.mobile.ns+"icon","delete").appendTo(i).buttonMarkup(),A=s.find(".ui-content"),y=s.find(".ui-header a");a.extend(b,{select:b.select,selectID:c,buttonId:l,menuId:n,thisPage:e,menuPage:s,label:d,screen:g,selectOptions:h,isMultiple:j,theme:b.options.theme,listbox:p,list:k,header:i,headerTitle:m,headerClose:o,menuPageContent:A,menuPageClose:y,placeholder:"",build:function(){var b=this;b.refresh();b.select.attr("tabindex","-1").focus(function(){a(this).blur();
b.button.focus()});b.button.bind("vclick keydown",function(c){if(c.type=="vclick"||c.keyCode&&(c.keyCode===a.mobile.keyCode.ENTER||c.keyCode===a.mobile.keyCode.SPACE))b.open(),c.preventDefault()});b.list.attr("role","listbox").delegate(".ui-li>a","focusin",function(){a(this).attr("tabindex","0")}).delegate(".ui-li>a","focusout",function(){a(this).attr("tabindex","-1")}).delegate("li:not(.ui-disabled, .ui-li-divider)","click",function(c){var d=b.select[0].selectedIndex,e=b.list.find("li:not(.ui-li-divider)").index(this),
f=b.selectOptions.eq(e)[0];f.selected=b.isMultiple?!f.selected:!0;b.isMultiple&&a(this).find(".ui-icon").toggleClass("ui-icon-checkbox-on",f.selected).toggleClass("ui-icon-checkbox-off",!f.selected);(b.isMultiple||d!==e)&&b.select.trigger("change");b.isMultiple||b.close();c.preventDefault()}).keydown(function(b){var c=a(b.target),d=c.closest("li");switch(b.keyCode){case 38:return b=d.prev(),b.length&&(c.blur().attr("tabindex","-1"),b.find("a").first().focus()),!1;case 40:return b=d.next(),b.length&&
(c.blur().attr("tabindex","-1"),b.find("a").first().focus()),!1;case 13:case 32:return c.trigger("click"),!1}});b.menuPage.bind("pagehide",function(){b.list.appendTo(b.listbox);b._focusButton()});b.screen.bind("vclick",function(){b.close()});b.headerClose.click(function(){if(b.menuType=="overlay")return b.close(),!1})},refresh:function(b){var c=this,d=this.element;this.selectOptions=d.find("option");this.selected();var e=this.selectedIndices();(b||d[0].options.length!=c.list.find("li").length)&&c._buildList();
c.setButtonText();c.setButtonCount();c.list.find("li:not(.ui-li-divider)").removeClass(a.mobile.activeBtnClass).attr("aria-selected",!1).each(function(b){a.inArray(b,e)>-1&&(b=a(this),b.attr("aria-selected",!0),c.isMultiple?b.find(".ui-icon").removeClass("ui-icon-checkbox-off").addClass("ui-icon-checkbox-on"):b.addClass(a.mobile.activeBtnClass))})},close:function(){if(!this.options.disabled&&this.isOpen){var b=this;b.menuType=="page"?(b.thisPage.data("page").options.domCache||b.thisPage.bind("pagehide.remove",
function(){a(b).remove()}),window.history.back()):(b.screen.addClass("ui-screen-hidden"),b.listbox.addClass("ui-selectmenu-hidden").removeAttr("style").removeClass("in"),b.list.appendTo(b.listbox),b._focusButton());b.isOpen=!1}},open:function(){if(!this.options.disabled){var b=this,c=b.list.parent().outerHeight(),d=b.list.parent().outerWidth(),e=a(window).scrollTop(),f=b.button.offset().top,g=window.innerHeight,h=window.innerWidth;b.button.addClass(a.mobile.activeBtnClass);setTimeout(function(){b.button.removeClass(a.mobile.activeBtnClass)},
300);if(c>g-80||!a.support.scrollTop){b.thisPage.unbind("pagehide.remove");if(e==0&&f>g)b.thisPage.one("pagehide",function(){a(this).jqmData("lastScroll",f)});b.menuPage.one("pageshow",function(){a(window).one("silentscroll",function(){b.list.find(a.mobile.activeBtnClass).focus()});b.isOpen=!0});b.menuType="page";b.menuPageContent.append(b.list);a.mobile.changePage(b.menuPage,{transition:a.mobile.defaultDialogTransition})}else{b.menuType="overlay";b.screen.height(a(document).height()).removeClass("ui-screen-hidden");
var i=f-e,k=e+g-f,j=c/2,p=parseFloat(b.list.parent().css("max-width")),c=i>c/2&&k>c/2?f+b.button.outerHeight()/2-j:i>k?e+g-c-30:e+30;d<p?p=(h-d)/2:(p=b.button.offset().left+b.button.outerWidth()/2-d/2,p<30?p=30:p+d>h&&(p=h-d-30));b.listbox.append(b.list).removeClass("ui-selectmenu-hidden").css({top:c,left:p}).addClass("in");b.list.find(a.mobile.activeBtnClass).focus();b.isOpen=!0}}},_buildList:function(){var b=this,c=this.options,d=this.placeholder,e=[],f=[],g=b.isMultiple?"checkbox-off":"false";
b.list.empty().filter(".ui-listview").listview("destroy");b.select.find("option").each(function(h){var i=a(this),k=i.parent(),p=i.text(),j="<a href='#'>"+p+"</a>",m=[],o=[];k.is("optgroup")&&(k=k.attr("label"),a.inArray(k,e)===-1&&(f.push("<li data-"+a.mobile.ns+"role='list-divider'>"+k+"</li>"),e.push(k)));if(!this.getAttribute("value")||p.length==0||i.jqmData("placeholder"))c.hidePlaceholderMenuItems&&m.push("ui-selectmenu-placeholder"),d=b.placeholder=p;this.disabled&&(m.push("ui-disabled"),o.push("aria-disabled='true'"));
f.push("<li data-"+a.mobile.ns+"option-index='"+h+"' data-"+a.mobile.ns+"icon='"+g+"' class='"+m.join(" ")+"' "+o.join(" ")+">"+j+"</li>")});b.list.html(f.join(" "));b.list.find("li").attr({role:"option",tabindex:"-1"}).first().attr("tabindex","0");this.isMultiple||this.headerClose.hide();!this.isMultiple&&!d.length?this.header.hide():this.headerTitle.text(this.placeholder);b.list.listview()},_button:function(){return a("<a>",{href:"#",role:"button",id:this.buttonId,"aria-haspopup":"true","aria-owns":this.menuId})}})};
a("select").live("selectmenubeforecreate",function(){var b=a(this).data("selectmenu");b.options.nativeMenu||d(b)})})(jQuery);
(function(a){a.widget("mobile.selectmenu",a.mobile.widget,{options:{theme:null,disabled:!1,icon:"arrow-d",iconpos:"right",inline:null,corners:!0,shadow:!0,iconshadow:!0,menuPageTheme:"b",overlayTheme:"a",hidePlaceholderMenuItems:!0,closeText:"Close",nativeMenu:!0,initSelector:"select:not(:jqmData(role='slider'))"},_button:function(){return a("<div/>")},_theme:function(){var a;a=this.select.closest("[class*='ui-bar-'], [class*='ui-body-']");return a.length?/ui-(bar|body)-([a-z])/.exec(a.attr("class"))[2]:
"c"},_setDisabled:function(a){this.element.attr("disabled",a);this.button.attr("aria-disabled",a);return this._setOption("disabled",a)},_focusButton:function(){var a=this;setTimeout(function(){a.button.focus()},40)},_preExtension:function(){this.select=this.element.wrap("<div class='ui-select'>");this.selectID=this.select.attr("id");this.label=a("label[for='"+this.selectID+"']").addClass("ui-select");this.isMultiple=this.select[0].multiple;this.options.theme=this._theme();this.selectOptions=this.select.find("option")},
_create:function(){this._preExtension();this._trigger("beforeCreate");this.button=this._button();var d=this,b=this.options,c=this.button.text(a(this.select[0].options.item(this.select[0].selectedIndex==-1?0:this.select[0].selectedIndex)).text()).insertBefore(this.select).buttonMarkup({theme:b.theme,icon:b.icon,iconpos:b.iconpos,inline:b.inline,corners:b.corners,shadow:b.shadow,iconshadow:b.iconshadow});b.nativeMenu&&window.opera&&window.opera.version&&this.select.addClass("ui-select-nativeonly");
if(this.isMultiple)this.buttonCount=a("<span>").addClass("ui-li-count ui-btn-up-c ui-btn-corner-all").hide().appendTo(c);b.disabled&&this.disable();this.select.change(function(){d.refresh()});this.build()},build:function(){var d=this;this.select.appendTo(d.button).bind("vmousedown",function(){d.button.addClass(a.mobile.activeBtnClass)}).bind("focus vmouseover",function(){d.button.trigger("vmouseover")}).bind("vmousemove",function(){d.button.removeClass(a.mobile.activeBtnClass)}).bind("change blur vmouseout",
function(){d.button.trigger("vmouseout").removeClass(a.mobile.activeBtnClass)}).bind("change blur",function(){d.button.removeClass("ui-btn-down-"+d.options.theme)})},selected:function(){return this.selectOptions.filter(":selected")},selectedIndices:function(){var a=this;return this.selected().map(function(){return a.selectOptions.index(this)}).get()},setButtonText:function(){var d=this,b=this.selected();this.button.find(".ui-btn-text").text(function(){if(!d.isMultiple)return b.text();return b.length?
b.map(function(){return a(this).text()}).get().join(", "):d.placeholder})},setButtonCount:function(){var a=this.selected();this.isMultiple&&this.buttonCount[a.length>1?"show":"hide"]().text(a.length)},refresh:function(){this.setButtonText();this.setButtonCount()},disable:function(){this._setDisabled(!0);this.button.addClass("ui-disabled")},enable:function(){this._setDisabled(!1);this.button.removeClass("ui-disabled")}});a(document).bind("pagecreate create",function(d){a(a.mobile.selectmenu.prototype.options.initSelector,
d.target).not(":jqmData(role='none'), :jqmData(role='nojs')").selectmenu()})})(jQuery);
(function(a){function d(b){for(;b;){var d=a(b);if(d.hasClass("ui-btn")&&!d.hasClass("ui-disabled"))break;b=b.parentNode}return b}a.fn.buttonMarkup=function(c){return this.each(function(){var d=a(this),e=a.extend({},a.fn.buttonMarkup.defaults,d.jqmData(),c),g="ui-btn-inner",h,j;b&&b();if(!e.theme)h=d.closest("[class*='ui-bar-'],[class*='ui-body-']"),e.theme=h.length?/ui-(bar|body)-([a-z])/.exec(h.attr("class"))[2]:"c";h="ui-btn ui-btn-up-"+e.theme;e.inline&&(h+=" ui-btn-inline");if(e.icon)e.icon="ui-icon-"+
e.icon,e.iconpos=e.iconpos||"left",j="ui-icon "+e.icon,e.iconshadow&&(j+=" ui-icon-shadow");e.iconpos&&(h+=" ui-btn-icon-"+e.iconpos,e.iconpos=="notext"&&!d.attr("title")&&d.attr("title",d.text()));e.corners&&(h+=" ui-btn-corner-all",g+=" ui-btn-corner-all");e.shadow&&(h+=" ui-shadow");d.attr("data-"+a.mobile.ns+"theme",e.theme).addClass(h);e=("<D class='"+g+"'><D class='ui-btn-text'></D>"+(e.icon?"<span class='"+j+"'></span>":"")+"</D>").replace(/D/g,e.wrapperEls);d.wrapInner(e)})};a.fn.buttonMarkup.defaults=
{corners:!0,shadow:!0,iconshadow:!0,wrapperEls:"span"};var b=function(){a(document).bind({vmousedown:function(b){var b=d(b.target),f;b&&(b=a(b),f=b.attr("data-"+a.mobile.ns+"theme"),b.removeClass("ui-btn-up-"+f).addClass("ui-btn-down-"+f))},"vmousecancel vmouseup":function(b){var b=d(b.target),f;b&&(b=a(b),f=b.attr("data-"+a.mobile.ns+"theme"),b.removeClass("ui-btn-down-"+f).addClass("ui-btn-up-"+f))},"vmouseover focus":function(b){var b=d(b.target),f;b&&(b=a(b),f=b.attr("data-"+a.mobile.ns+"theme"),
b.removeClass("ui-btn-up-"+f).addClass("ui-btn-hover-"+f))},"vmouseout blur":function(b){var b=d(b.target),f;b&&(b=a(b),f=b.attr("data-"+a.mobile.ns+"theme"),b.removeClass("ui-btn-hover-"+f).addClass("ui-btn-up-"+f))}});b=null};a(document).bind("pagecreate create",function(b){a(":jqmData(role='button'), .ui-bar > a, .ui-header > a, .ui-footer > a, .ui-bar > :jqmData(role='controlgroup') > a",b.target).not(".ui-btn, :jqmData(role='none'), :jqmData(role='nojs')").buttonMarkup()})})(jQuery);
(function(a){a.fn.controlgroup=function(d){return this.each(function(){function b(a){a.removeClass("ui-btn-corner-all ui-shadow").eq(0).addClass(g[0]).end().filter(":last").addClass(g[1]).addClass("ui-controlgroup-last")}var c=a(this),f=a.extend({direction:c.jqmData("type")||"vertical",shadow:!1,excludeInvisible:!0},d),e=c.find(">legend"),g=f.direction=="horizontal"?["ui-corner-left","ui-corner-right"]:["ui-corner-top","ui-corner-bottom"];c.find("input:eq(0)").attr("type");e.length&&(c.wrapInner("<div class='ui-controlgroup-controls'></div>"),
a("<div role='heading' class='ui-controlgroup-label'>"+e.html()+"</div>").insertBefore(c.children(0)),e.remove());c.addClass("ui-corner-all ui-controlgroup ui-controlgroup-"+f.direction);b(c.find(".ui-btn"+(f.excludeInvisible?":visible":"")));b(c.find(".ui-btn-inner"));f.shadow&&c.addClass("ui-shadow")})};a(document).bind("pagecreate create",function(d){a(":jqmData(role='controlgroup')",d.target).controlgroup({excludeInvisible:!1})})})(jQuery);(function(a){a(document).bind("pagecreate create",function(d){a(d.target).find("a").not(".ui-btn, .ui-link-inherit, :jqmData(role='none'), :jqmData(role='nojs')").addClass("ui-link")})})(jQuery);
(function(a,d){a.fn.fixHeaderFooter=function(){if(!a.support.scrollTop)return this;return this.each(function(){var b=a(this);b.jqmData("fullscreen")&&b.addClass("ui-page-fullscreen");b.find(".ui-header:jqmData(position='fixed')").addClass("ui-header-fixed ui-fixed-inline fade");b.find(".ui-footer:jqmData(position='fixed')").addClass("ui-footer-fixed ui-fixed-inline fade")})};a.mobile.fixedToolbars=function(){function b(){!j&&h==="overlay"&&(g||a.mobile.fixedToolbars.hide(!0),a.mobile.fixedToolbars.startShowTimer())}
function c(a){var b=0,c,d;if(a){d=document.body;c=a.offsetParent;for(b=a.offsetTop;a&&a!=d;){b+=a.scrollTop||0;if(a==c)b+=c.offsetTop,c=a.offsetParent;a=a.parentNode}}return b}function f(b){var d=a(window).scrollTop(),e=c(b[0]),f=b.css("top")=="auto"?0:parseFloat(b.css("top")),g=window.innerHeight,h=b.outerHeight(),j=b.parents(".ui-page:not(.ui-page-fullscreen)").length;return b.is(".ui-header-fixed")?(f=d-e+f,f<e&&(f=0),b.css("top",j?f:d)):b.css("top",j?d+g-h-(e-f):d+g-h)}if(a.support.scrollTop&&
!a.support.touchOverflow){var e,g,h="inline",j=!1,l=null,n=!1,s=!0;a(function(){var c=a(document),d=a(window);c.bind("vmousedown",function(){s&&(l=h)}).bind("vclick",function(b){s&&!a(b.target).closest("a,input,textarea,select,button,label,.ui-header-fixed,.ui-footer-fixed").length&&!n&&(a.mobile.fixedToolbars.toggle(l),l=null)}).bind("silentscroll",b);(c.scrollTop()===0?d:c).bind("scrollstart",function(){n=!0;l===null&&(l=h);var b=l=="overlay";if(j=b||!!g)a.mobile.fixedToolbars.clearShowTimer(),
b&&a.mobile.fixedToolbars.hide(!0)}).bind("scrollstop",function(b){a(b.target).closest("a,input,textarea,select,button,label,.ui-header-fixed,.ui-footer-fixed").length||(n=!1,j&&(a.mobile.fixedToolbars.startShowTimer(),j=!1),l=null)});d.bind("resize",b)});a(".ui-page").live("pagebeforeshow",function(b,c){var d=a(b.target).find(":jqmData(role='footer')"),g=d.data("id"),h=c.prevPage,h=h&&h.find(":jqmData(role='footer')"),h=h.length&&h.jqmData("id")===g;g&&h&&(e=d,f(e.removeClass("fade in out").appendTo(a.mobile.pageContainer)))}).live("pageshow",
function(){var b=a(this);e&&e.length&&setTimeout(function(){f(e.appendTo(b).addClass("fade"));e=null},500);a.mobile.fixedToolbars.show(!0,this)});a(".ui-collapsible-contain").live("collapse expand",b);return{show:function(b,d){a.mobile.fixedToolbars.clearShowTimer();h="overlay";return(d?a(d):a.mobile.activePage?a.mobile.activePage:a(".ui-page-active")).children(".ui-header-fixed:first, .ui-footer-fixed:not(.ui-footer-duplicate):last").each(function(){var d=a(this),e=a(window).scrollTop(),g=c(d[0]),
h=window.innerHeight,j=d.outerHeight(),e=d.is(".ui-header-fixed")&&e<=g+j||d.is(".ui-footer-fixed")&&g<=e+h;d.addClass("ui-fixed-overlay").removeClass("ui-fixed-inline");!e&&!b&&d.animationComplete(function(){d.removeClass("in")}).addClass("in");f(d)})},hide:function(b){h="inline";return(a.mobile.activePage?a.mobile.activePage:a(".ui-page-active")).children(".ui-header-fixed:first, .ui-footer-fixed:not(.ui-footer-duplicate):last").each(function(){var c=a(this),d=c.css("top"),d=d=="auto"?0:parseFloat(d);
c.addClass("ui-fixed-inline").removeClass("ui-fixed-overlay");if(d<0||c.is(".ui-header-fixed")&&d!==0)b?c.css("top",0):c.css("top")!=="auto"&&parseFloat(c.css("top"))!==0&&c.animationComplete(function(){c.removeClass("out reverse").css("top",0)}).addClass("out reverse")})},startShowTimer:function(){a.mobile.fixedToolbars.clearShowTimer();var b=[].slice.call(arguments);g=setTimeout(function(){g=d;a.mobile.fixedToolbars.show.apply(null,b)},100)},clearShowTimer:function(){g&&clearTimeout(g);g=d},toggle:function(b){b&&
(h=b);return h==="overlay"?a.mobile.fixedToolbars.hide():a.mobile.fixedToolbars.show()},setTouchToggleEnabled:function(a){s=a}}}}();a.fixedToolbars=a.mobile.fixedToolbars;a(document).bind("pagecreate create",function(b){a(":jqmData(position='fixed')",b.target).length&&a(b.target).each(function(){if(!a.support.scrollTop||a.support.touchOverflow)return this;var b=a(this);b.jqmData("fullscreen")&&b.addClass("ui-page-fullscreen");b.find(".ui-header:jqmData(position='fixed')").addClass("ui-header-fixed ui-fixed-inline fade");
b.find(".ui-footer:jqmData(position='fixed')").addClass("ui-footer-fixed ui-fixed-inline fade")})})})(jQuery);
(function(a){a.mobile.touchOverflowEnabled=!1;a(document).bind("pagecreate",function(d){a.support.touchOverflow&&a.mobile.touchOverflowEnabled&&(d=a(d.target),d.is(":jqmData(role='page')")&&d.each(function(){var b=a(this),c=b.find(":jqmData(role='header'), :jqmData(role='footer')").filter(":jqmData(position='fixed')"),d=b.jqmData("fullscreen"),e=c.length?b.find(".ui-content"):b;b.addClass("ui-mobile-touch-overflow");e.bind("scrollstop",function(){e.scrollTop()>0&&window.scrollTo(0,a.mobile.defaultHomeScroll)});
c.length&&(b.addClass("ui-native-fixed"),d&&(b.addClass("ui-native-fullscreen"),c.addClass("fade in"),a(document).bind("vclick",function(){c.removeClass("ui-native-bars-hidden").toggleClass("in out").animationComplete(function(){a(this).not(".in").addClass("ui-native-bars-hidden")})})))}))})})(jQuery);
(function(a){function d(){var d=b.width(),g=[],h=[],j;c.removeClass("min-width-"+f.join("px min-width-")+"px max-width-"+f.join("px max-width-")+"px");a.each(f,function(a,b){d>=b&&g.push("min-width-"+b+"px");d<=b&&h.push("max-width-"+b+"px")});g.length&&(j=g.join(" "));h.length&&(j+=" "+h.join(" "));c.addClass(j)}var b=a(window),c=a("html"),f=[320,480,768,1024];a.mobile.addResolutionBreakpoints=function(b){a.type(b)==="array"?f=f.concat(b):f.push(b);f.sort(function(a,b){return a-b});d()};a(document).bind("mobileinit.htmlclass",
function(){b.bind("orientationchange.htmlclass throttledresize.htmlclass",function(a){a.orientation&&c.removeClass("portrait landscape").addClass(a.orientation);d()})});a(function(){b.trigger("orientationchange.htmlclass")})})(jQuery);
(function(a,d){var b=a("html");a("head");var c=a(d);a(d.document).trigger("mobileinit");if(a.mobile.gradeA()){if(a.mobile.ajaxBlacklist)a.mobile.ajaxEnabled=!1;b.addClass("ui-mobile ui-mobile-rendering");var f=a("<div class='ui-loader ui-body-a ui-corner-all'><span class='ui-icon ui-icon-loading spin'></span><h1></h1></div>");a.extend(a.mobile,{showPageLoadingMsg:function(){if(a.mobile.loadingMessage){var d=a("."+a.mobile.activeBtnClass).first();f.find("h1").text(a.mobile.loadingMessage).end().appendTo(a.mobile.pageContainer).css({top:a.support.scrollTop&&
c.scrollTop()+c.height()/2||d.length&&d.offset().top||100})}b.addClass("ui-loading")},hidePageLoadingMsg:function(){b.removeClass("ui-loading")},pageLoading:function(b){b?a.mobile.hidePageLoadingMsg():a.mobile.showPageLoadingMsg()},initializePage:function(){var b=a(":jqmData(role='page')");b.length||(b=a("body").wrapInner("<div data-"+a.mobile.ns+"role='page'></div>").children(0));b.add(":jqmData(role='dialog')").each(function(){var b=a(this);b.jqmData("url")||b.attr("data-"+a.mobile.ns+"url",b.attr("id")||
location.pathname+location.search)});a.mobile.firstPage=b.first();a.mobile.pageContainer=b.first().parent().addClass("ui-mobile-viewport");a.mobile.showPageLoadingMsg();!a.mobile.hashListeningEnabled||!a.mobile.path.stripHash(location.hash)?a.mobile.changePage(a.mobile.firstPage,{transition:"none",reverse:!0,changeHash:!1,fromHashChange:!0}):c.trigger("hashchange",[!0])}});a.mobile._registerInternalEvents();a(function(){d.scrollTo(0,1);a.mobile.defaultHomeScroll=!a.support.scrollTop||a(d).scrollTop()===
1?0:1;a.mobile.autoInitializePage&&a.mobile.initializePage();c.load(a.mobile.silentScroll)})}})(jQuery,this);
/*
 * ----------------------------- JSTORAGE -------------------------------------
 * Simple local storage wrapper to save data on the browser side, supporting
 * all major browsers - IE6+, Firefox2+, Safari4+, Chrome4+ and Opera 10.5+
 *
 * Copyright (c) 2010 Andris Reinman, andris.reinman@gmail.com
 * Project homepage: www.jstorage.info
 *
 * Licensed under MIT-style license:
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * $.jStorage
 * 
 * USAGE:
 *
 * jStorage requires Prototype, MooTools or jQuery! If jQuery is used, then
 * jQuery-JSON (http://code.google.com/p/jquery-json/) is also needed.
 * (jQuery-JSON needs to be loaded BEFORE jStorage!)
 *
 * Methods:
 *
 * -set(key, value)
 * $.jStorage.set(key, value) -> saves a value
 *
 * -get(key[, default])
 * value = $.jStorage.get(key [, default]) ->
 *    retrieves value if key exists, or default if it doesn't
 *
 * -deleteKey(key)
 * $.jStorage.deleteKey(key) -> removes a key from the storage
 *
 * -flush()
 * $.jStorage.flush() -> clears the cache
 * 
 * -storageObj()
 * $.jStorage.storageObj() -> returns a read-ony copy of the actual storage
 * 
 * -storageSize()
 * $.jStorage.storageSize() -> returns the size of the storage in bytes
 *
 * -index()
 * $.jStorage.index() -> returns the used keys as an array
 * 
 * -storageAvailable()
 * $.jStorage.storageAvailable() -> returns true if storage is available
 * 
 * -reInit()
 * $.jStorage.reInit() -> reloads the data from browser storage
 * 
 * <value> can be any JSON-able value, including objects and arrays.
 *
 **/

(function($){
    if(!$ || !($.toJSON || Object.toJSON || window.JSON)){
        throw new Error("jQuery, MooTools or Prototype needs to be loaded before jStorage!");
    }
    
    var
        /* This is the object, that holds the cached values */ 
        _storage = {},

        /* Actual browser storage (localStorage or globalStorage['domain']) */
        _storage_service = {jStorage:"{}"},

        /* DOM element for older IE versions, holds userData behavior */
        _storage_elm = null,
        
        /* How much space does the storage take */
        _storage_size = 0,

        /* function to encode objects to JSON strings */
        json_encode = $.toJSON || Object.toJSON || (window.JSON && (JSON.encode || JSON.stringify)),

        /* function to decode objects from JSON strings */
        json_decode = $.evalJSON || (window.JSON && (JSON.decode || JSON.parse)) || function(str){
            return String(str).evalJSON();
        },
        
        /* which backend is currently used */
        _backend = false,
        
        /**
         * XML encoding and decoding as XML nodes can't be JSON'ized
         * XML nodes are encoded and decoded if the node is the value to be saved
         * but not if it's as a property of another object
         * Eg. -
         *   $.jStorage.set("key", xmlNode);        // IS OK
         *   $.jStorage.set("key", {xml: xmlNode}); // NOT OK
         */
        _XMLService = {
            
            /**
             * Validates a XML node to be XML
             * based on jQuery.isXML function
             */
            isXML: function(elm){
                var documentElement = (elm ? elm.ownerDocument || elm : 0).documentElement;
                return documentElement ? documentElement.nodeName !== "HTML" : false;
            },
            
            /**
             * Encodes a XML node to string
             * based on http://www.mercurytide.co.uk/news/article/issues-when-working-ajax/
             */
            encode: function(xmlNode) {
                if(!this.isXML(xmlNode)){
                    return false;
                }
                try{ // Mozilla, Webkit, Opera
                    return new XMLSerializer().serializeToString(xmlNode);
                }catch(E1) {
                    try {  // IE
                        return xmlNode.xml;
                    }catch(E2){}
                }
                return false;
            },
            
            /**
             * Decodes a XML node from string
             * loosely based on http://outwestmedia.com/jquery-plugins/xmldom/
             */
            decode: function(xmlString){
                var dom_parser = ("DOMParser" in window && (new DOMParser()).parseFromString) ||
                        (window.ActiveXObject && function(_xmlString) {
                    var xml_doc = new ActiveXObject('Microsoft.XMLDOM');
                    xml_doc.async = 'false';
                    xml_doc.loadXML(_xmlString);
                    return xml_doc;
                }),
                resultXML;
                if(!dom_parser){
                    return false;
                }
                resultXML = dom_parser.call("DOMParser" in window && (new DOMParser()) || window, xmlString, 'text/xml');
                return this.isXML(resultXML)?resultXML:false;
            }
        };

    ////////////////////////// PRIVATE METHODS ////////////////////////

    /**
     * Initialization function. Detects if the browser supports DOM Storage
     * or userData behavior and behaves accordingly.
     * @returns undefined
     */
    function _init(){
        /* Check if browser supports localStorage */
        if("localStorage" in window){
            try {
                if(window.localStorage) {
                    _storage_service = window.localStorage;
                    _backend = "localStorage";
                }
            } catch(E3) {/* Firefox fails when touching localStorage and cookies are disabled */}
        }
        /* Check if browser supports globalStorage */
        else if("globalStorage" in window){
            try {
                if(window.globalStorage) {
                    _storage_service = window.globalStorage[window.location.hostname];
                    _backend = "globalStorage";
                }
            } catch(E4) {/* Firefox fails when touching localStorage and cookies are disabled */}
        }
        /* Check if browser supports userData behavior */
        else {
            _storage_elm = document.createElement('link');
            if(_storage_elm.addBehavior){

                /* Use a DOM element to act as userData storage */
                _storage_elm.style.behavior = 'url(#default#userData)';

                /* userData element needs to be inserted into the DOM! */
                document.getElementsByTagName('head')[0].appendChild(_storage_elm);

                _storage_elm.load("jStorage");
                var data = "{}";
                try{
                    data = _storage_elm.getAttribute("jStorage");
                }catch(E5){}
                _storage_service.jStorage = data;
                _backend = "userDataBehavior";
            }else{
                _storage_elm = null;
                return;
            }
        }

        _load_storage();
    }
    
    /**
     * Loads the data from the storage based on the supported mechanism
     * @returns undefined
     */
    function _load_storage(){
        /* if jStorage string is retrieved, then decode it */
        if(_storage_service.jStorage){
            try{
                _storage = json_decode(String(_storage_service.jStorage));
            }catch(E6){_storage_service.jStorage = "{}";}
        }else{
            _storage_service.jStorage = "{}";
        }
        _storage_size = _storage_service.jStorage?String(_storage_service.jStorage).length:0;    
    }

    /**
     * This functions provides the "save" mechanism to store the jStorage object
     * @returns undefined
     */
    function _save(){
        try{
            _storage_service.jStorage = json_encode(_storage);
            // If userData is used as the storage engine, additional
            if(_storage_elm) {
                _storage_elm.setAttribute("jStorage",_storage_service.jStorage);
                _storage_elm.save("jStorage");
            }
            _storage_size = _storage_service.jStorage?String(_storage_service.jStorage).length:0;
        }catch(E7){/* probably cache is full, nothing is saved this way*/}
    }

    /**
     * Function checks if a key is set and is string or numberic
     */
    function _checkKey(key){
        if(!key || (typeof key != "string" && typeof key != "number")){
            throw new TypeError('Key name must be string or numeric');
        }
        return true;
    }

    ////////////////////////// PUBLIC INTERFACE /////////////////////////

    $.jStorage = {
        /* Version number */
        version: "0.1.5.3",

        /**
         * Sets a key's value.
         * 
         * @param {String} key - Key to set. If this value is not set or not
         *              a string an exception is raised.
         * @param value - Value to set. This can be any value that is JSON
         *              compatible (Numbers, Strings, Objects etc.).
         * @returns the used value
         */
        set: function(key, value){
            _checkKey(key);
            if(_XMLService.isXML(value)){
                value = {_is_xml:true,xml:_XMLService.encode(value)};
            }
            _storage[key] = value;
            _save();
            return value;
        },
        
        /**
         * Looks up a key in cache
         * 
         * @param {String} key - Key to look up.
         * @param {mixed} def - Default value to return, if key didn't exist.
         * @returns the key value, default value or <null>
         */
        get: function(key, def){
            _checkKey(key);
            if(key in _storage){
                if(_storage[key] && typeof _storage[key] == "object" &&
                        _storage[key]._is_xml &&
                            _storage[key]._is_xml){
                    return _XMLService.decode(_storage[key].xml);
                }else{
                    return _storage[key];
                }
            }
            return typeof(def) == 'undefined' ? null : def;
        },
        
        /**
         * Deletes a key from cache.
         * 
         * @param {String} key - Key to delete.
         * @returns true if key existed or false if it didn't
         */
        deleteKey: function(key){
            _checkKey(key);
            if(key in _storage){
                delete _storage[key];
                _save();
                return true;
            }
            return false;
        },

        /**
         * Deletes everything in cache.
         * 
         * @returns true
         */
        flush: function(){
            _storage = {};
            _save();
            return true;
        },
        
        /**
         * Returns a read-only copy of _storage
         * 
         * @returns Object
        */
        storageObj: function(){
            function F() {}
            F.prototype = _storage;
            return new F();
        },
        
        /**
         * Returns an index of all used keys as an array
         * ['key1', 'key2',..'keyN']
         * 
         * @returns Array
        */
        index: function(){
            var index = [], i;
            for(i in _storage){
                if(_storage.hasOwnProperty(i)){
                    index.push(i);
                }
            }
            return index;
        },
        
        /**
         * How much space in bytes does the storage take?
         * 
         * @returns Number
         */
        storageSize: function(){
            return _storage_size;
        },
        
        /**
         * Which backend is currently in use?
         * 
         * @returns String
         */
        currentBackend: function(){
            return _backend;
        },
        
        /**
         * Test if storage is available
         * 
         * @returns Boolean
         */
        storageAvailable: function(){
            return !!_backend;
        },
        
        /**
         * Reloads the data from browser storage
         * 
         * @returns undefined
         */
        reInit: function(){
            var new_storage_elm, data;
            if(_storage_elm && _storage_elm.addBehavior){
                new_storage_elm = document.createElement('link');
                
                _storage_elm.parentNode.replaceChild(new_storage_elm, _storage_elm);
                _storage_elm = new_storage_elm;
                
                /* Use a DOM element to act as userData storage */
                _storage_elm.style.behavior = 'url(#default#userData)';

                /* userData element needs to be inserted into the DOM! */
                document.getElementsByTagName('head')[0].appendChild(_storage_elm);

                _storage_elm.load("jStorage");
                data = "{}";
                try{
                    data = _storage_elm.getAttribute("jStorage");
                }catch(E5){}
                _storage_service.jStorage = data;
                _backend = "userDataBehavior";
            }
            
            _load_storage();
        }
    };

    // Initialize jStorage
    _init();

})(window.jQuery || window.$);/**
 * Draw a list of messages
 * 
 * Message lists are used to represent all the questions asked by
 * listeners. Additionally, MessageList supports categories and shows
 * an appropriate icon.
 * 
 * This plugin is based on Tweedback objects as defined on the Wiki page
 * for Ajax interfaces.
 * 
 * @see https://ox.informatik.uni-rostock.de/projektwiki/index.php/Tweedback_ajax 
 */
(function($) {

    var methods = {
    		
    	/**
    	 * Creates a new message list
    	 * 
    	 * @param options An array of messages
    	 */
        init : function(options) {
            return this.each(function() {
                $(this).children().addClass('tb-message-list-empty');
                /*
                 * Adopt JQM Listview's classes only (we don't need any of its
                 * functionality here)
                 */
                var mul = $('<ul data-theme="d"></ul>');
                mul.addClass('tweedback tb-message-list ui-listview');
                $(this).append(mul);
                if (options !== null && jQuery.isArray(options)) {
                    $(this).messageList('setElements', options);
                }
            });

        },
        
        /**
         * Removes the message list completely
         */
        destroy : function() {
            return this.each(function() {
            	$(this).find('.tb-message-list').remove();
            });
        },
        
        /**
         * Adds a single message to the existing list
         * 
         * @param object message
         * @param boolean lecturer  Determines the user's current role
         */
        addElement : function(message, lecturer) {
            var mul = $(this).find('.tb-message-list');
            var li = $('<li></li>');
            li.addClass('tb-message-list-item ui-li ui-li-static ui-body-d');
            if (message.categories.length > 0) {
                var span = $('<span class="tb-message-list-icons"></span>');
                $.each(message.categories, function(index, cat) {
                    span.append('<img src="css/images/icons/32/' + cat + '.png"/>');
                });
                li.append(span);
            }
            li.append('<span class="tb-message-list-text">' + message.text + '</span>');
            li.addClass('supported-' + message.priority);

            mul.append(li);
            
            /*
             * Add an overlay button for each label to allow supporting, 
             * ban etc.
             */
            var btnCounter = 0;
            $('.tb-message-button-label').each(function(index) {
            	
            	// Only confirm if the button is suitable for the current role
                if (lecturer && !$(this).hasClass('tb-lecturer')) return;
                else if (!lecturer && !$(this).hasClass('tb-listener')) return;
                
                /*
                 * We'll need a computer science counter (starting with 0, 
                 * btnCounter) and a natural one starting with 1 (called i)
                 */
                btnCounter++;
                var i = index + 1;
                var btn = $('<div class="tb-message-button tb-message-button-' + i + '"></div>');
                
                // Set a top margin for the first element
                var margin = 0;
                if (i != 1) margin = 5;
                btn.append('<div class="tb-message-button-inner">&nbsp;</div>');
                li.append(btn);
                btn.css({
                    'position': 'absolute',
                    'left': (li.width() - ((btn.width()) * btnCounter)) - margin*(btnCounter-1),
                    'top': 0
                });
                
                // Use full height for the button
                btn.height(li.innerHeight());

                // We'll need the event ID for this button later
                btn.data('message-id', message.id);
                if ($(this).hasClass('tb-message-button-bucket')) {
                	btn.data('bucket', $(this).attr('id'));
                	btn.addClass('tb-message-button-bucket');
                }

                // On the first run we need to position the buttons' label
                var label = $('.tb-message-button-label.tb-message-button-' + i);
                if (!label.hasClass('tb-message-button-label-moved')) {
                    var top = ($('.tb-message-list').offset().top - label.outerHeight());
                    label.css({
                        'position': 'absolute',
                        'left': btn.offset().left,
                        'top': top,
                        'visibility': 'visible'
                    });
                    label.addClass('tb-message-button-label-moved');
                }
            });

        },
        
        /**
         * Updates the list to show an array of messages
         * @param messages
         */
        setElements : function(messages) {
            var $this = $(this);

            /*
             * The unordered list representing the messages
             */
            var mul = $this.find('.tb-message-list');
            
            if (messages.length == 0) {
            	$(this).find('.tb-message-list-empty').show();
            	mul.hide();
            } else {
            	$(this).find('.tb-message-list-empty').hide();
            	mul.show();
            }
            
            /*
             * Hide all button labels
             * 
			 * We'll make them visible again in messageList#addElement only if 
			 * we need them (depending on current role: lecturer or listener).
             */
            $('.tb-message-button-label').css('visibility', 'hidden');

            /*
             * Remove button labels move-class to trigger a new positioning
             * 
             * MessageList#addElement checks whether button labels have class
             * tb-message-button-label-moved. If not, the method positions the
             * label right over the current message. Because this is the case
             * when adding the first element, the label is on the top of the
             * list. To avoid repositioning on further messages, addElement
             * adds this class.
             */
            $('.tb-message-button-label-moved')
                .removeClass('tb-message-button-label-moved');
            
            /*
             * Simply delete all old messages to gain place for the new ones
             * 
             * However, it could be nice to write only changes to the existing 
             * list some day.
             */
            mul.empty();
            
            /*
             * Add all messages from list
             */
            $.each(messages, function(index, message) {
                $this.messageList('addElement', message, messages.isLecturer);
            });
        }
    };

    $.fn.messageList = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(
                    arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.messageList');
        }
    };

})(jQuery);/**
 * Tweedback Live Feedback System
 */

/*
 * Helpers
 * =============================================================================
 */

/**
 * JSON requests using POST (rather than JQ's getJSON)
 */
jQuery.extend({
    postJSON: function( url, data, callback) {
        return jQuery.post(url, data, callback, "json");
    }
});

/**
 * Updates button labels on JQ UI Buttons as well as raw HTML elements
 */
(function($) {
    $.fn.setButtonLabel = function(newLabel) {
        return this.each(function() {
            var btn = $(this);
            if (btn.hasClass('ui-btn')) {
                btn.find('.ui-btn-text').text(newLabel);
            } else {
                btn.text(newLabel);
            }
        });
    };
})(jQuery);

if (!window.console) console = {log: function() {}};

/*
 * The Controller
 * =============================================================================
 *
 * Controlls the app's internal data
 */

/**
 * Handles Tweedback's internal data
 */
function TweedbackController() {

    /**
     * Page names used in this application
     */
    this.pages = {
        eventSelection : '#home',
        feedbackPage   : '#feedback-page',
        userSettings   : '#user-settings',
        createEvent    : '#create-event',
        help           : '#help'
    };

    /**
     * Determines paths for Ajax calls
     */
    this.ajaxPaths = {
        eventData           : 'ajax/event-data.php',
        eventDataCache      : 'ajax/event-data.php',
        sendMessage         : 'ajax/send-message.php',
        setUserSettings     : 'ajax/set-user-settings.php',
        getUserSettings     : 'ajax/get-user-settings.php',
        setMeter            : 'ajax/set-meter.php',
        createEvent         : 'ajax/create-event.php',
        putIntoBucket       : 'ajax/put-into-bucket.php',
        confirmMeterMessage : 'ajax/confirm-meter-message.php'
    };
    
    /**
     * URL to the Event's Final Report
     */
    this.eventReportUrl = 'report/?eventId=';

    /**
     * Currently selected event
     */
    this.event = null;

    /**
     * Different settings of the local user
     */
    this.user = {
    	isAnonymous : true,
        name        : 'Anonymous'
    };

    /**
     * Distinguish between listeners and lecturers
     */
    this.isLecturer = false;
    
    /**
     * Determines how man update cycles the cached file is used
     */
    this.cacheLifetime = 10;
    
    /**
     * The cache's age
     */
    this.cacheAge = 0;

    this.feedbackPageUpdateInterval = 10000;
    this.feedbackPageUpdateLoop = null;
    
    this.init();
}

/**
 * Initiates the controller
 */
TweedbackController.prototype.init = function() {
	var $this = this;

    // Configure Ajax using jQuery
    $.ajaxSetup({
        error: function() {
            $this.showProblem();
        },
        type: 'POST',
        dataType: 'json'
    });
    
};

/**
 * Informs the user about system errors or to do something in another way
 */
TweedbackController.prototype.showProblem = function(problem) {
    if (problem !== undefined && problem !== null) {
        if (problem.type == 'user') {
        	$('#tb-user-error-back').attr('href', this.getPreviousPage());
            $('#tb-user-error-header').html(problem.header);
            $('#tb-user-error-text').html(problem.text);
            $.mobile.changePage($('#user-error'), 'pop');
            return;
        } else if (problem.type == 'system') {
            $('#tb-system-error-header').html(problem.header);
            $('#tb-system-error-text').html(problem.text);
            $.mobile.changePage($('#system-error'), 'pop');
            return;
        }

    }
    $.mobile.changePage($('#system-error'), 'pop');
};

TweedbackController.prototype.setUsername = function(username, anonymous) {
	this.user.isAnonymous = anonymous;
	this.user.name = username;
	$('.username-indicator').setButtonLabel(this.user.name);
};

TweedbackController.prototype.setPreviousPage = function(page) {
	if (this.previousPages == undefined) {
		this.previousPages = new Array();
	}
	this.previousPages.push(page);	
};

TweedbackController.prototype.getPreviousPage = function(skip) {
	var prev = this.pages.eventSelection;
	if (this.previousPages == undefined) return prev;
	var i = this.previousPages.length - 1;
	while (i >= 0) {
		if (this.previousPages[i] != skip) {
			prev = this.previousPages[i];
			i = -1;
		}
		i--;
	}
	return prev;
};
/**
 * Initiation for Tweedback
 */

/*
 * Initiate the controller before something else happens
 */
var tbc = new TweedbackController();
    
/*
 * Load user's settings from server
 */
$.postJSON(tbc.ajaxPaths.getUserSettings, null, function(data) {
	if (data.success) {
		tbc.setUsername(data.username, data.anonymous);
	} else {
		tbc.showProblem(data.problem);
	}
});

/*
 * Some general content modifications
 */
$('body').live('pagecreate', function() {
	// Add some round corners and shadows
	$('.content-primary').addClass('ui-corner-all').addClass('ui-shadow');
	$('.content-secondary').addClass('ui-corner-all').addClass('ui-shadow');
	$('#tb-mainmenu').addClass('ui-corner-all').addClass('ui-shadow');
	
	
//	$('.tb-close').live('click', function() {
//		$(this).parent().remove();
//	});
	// Hide close buttons - we don't really need them at the moment
	$('.tb-close').hide();
});/**
 * Logic for Event Selection
 */	
	
/*
 * Focus the access key input field
 */
$(tbc.pages.eventSelection).live('pageshow', function() {
	
	tbc.setPreviousPage(tbc.pages.eventSelection);
    // Use a timeout to ensure that JQM has finished page rendering
    window.setTimeout(function() {
        $('#access-key-input').focus();
    }, 100);
    
});


$(tbc.pages.eventSelection).live('pagecreate', function() {
	/*
	 * Set event handlers for event selection
	 *
	 * Whenever someone submits an event selection, this method tries to query the
	 * desired event data and calls the feedback page.
	 */
	$('#access-key-form').submit(function(event) {
	    event.preventDefault();
	    console.log('Ask server for event ' + $('#access-key-input').val());
	    $.postJSON(tbc.ajaxPaths.eventData,
	        {accessKey : $('#access-key-input').val()},
	        function(data) {
	            if (data.success) {
	            	tbc.event = data.event;
	                if (data.lecturer !== undefined && data.lecturer !== null) {
	                	tbc.isLecturer = data.lecturer;
	                }
	                //$this.initFeedbackPage(data);
	                $.mobile.changePage(tbc.pages.feedbackPage);
	            } else {
	            	tbc.showProblem(data.problem);
	            }
	        });
	});
});/**
 * Logic for Create Event
 */


/*
 * Reset form elements
 */
$(tbc.pages.createEvent).live('pageshow', function() {
	tbc.setPreviousPage(tbc.pages.createEvent);
    $('#event-name-input, #event-access-key-input').val('');
    $('#event-email-input, #event-admin-password-input').val('');
    $('#create-event .ui-btn-active').removeClass('ui-btn-active');
    window.setTimeout(function() {
        $('#event-name-input').focus();
    }, 100);
});

$(tbc.pages.createEvent).live('pagecreate', function() {
    /*
	 * Listen for form submitions
	 */
	$('#tb-event-creation-form').submit(function(event) {
        event.preventDefault();
        $.postJSON(tbc.ajaxPaths.createEvent, {
                name            : $('#event-name-input').val(),
                accessKey       : $('#event-access-key-input').val(),
                emailAddress    : $('#event-email-input').val(),
                duration        : $('#event-duration-input').val()
            }, function(data) {
                if (data.success) {
                	// If everything is fine - switch to the created event
                	console.log('Created event ' + $('#event-access-key-input').val());
                    tbc.event = data.event;
                    if (data.lecturer !== undefined && data.lecturer !== null) {
                        tbc.isLecturer = data.lecturer;
                    }
                    $.mobile.changePage(tbc.pages.feedbackPage);
                } else {
                	// Check for an alternative access key given by the server
                	if (data.possibleAccessKey != undefined
                			&& data.message != undefined) {
                		if (confirm(data.message)) {
                			// Paste the suggestion into the input field and
                			// trigger the form submit again
                			$('#event-access-key-input').val(data.possibleAccessKey);
                			$('#tb-event-creation-form').submit();
                		} else {
                			// Let the user choose another key
                			return;
                		}
                	} else {
                		tbc.showProblem(data.problem);
                	}                    
                }
            });
        return false;
    });
});/**
 * Logic for Feedback Page
 */

/*
 * Tries to restore session data from web storage. Redirect to hompage if web 
 * storage is not supported or no data is available.
 */
$(tbc.pages.feedbackPage).live('pagebeforeshow', function() {
	if (tbc.event == null) {
		if ($.jStorage.storageAvailable() && $.jStorage.get('tb-tbc-event') != null) {
			tbc.event = $.jStorage.get('tb-tbc-event');
			console.log('Continueing previous session...');
		} else {
			$.mobile.changePage(tbc.pages.eventSelection);
	        return false;
		}
    }
	
	tbc.setPreviousPage(tbc.pages.feedbackPage);
	
    // Hide sections
    $('.tb-listener').hide();
    $('.tb-lecturer').hide();
    $('.tb-meter-warnings').hide();

    // Set events name
    $('.tb-event-name').text(tbc.event.name);
});

/*
 * Last settings after page is visible
 */
$(tbc.pages.feedbackPage).live('pageshow', function() {
	// Reset buttons
    $('.tb-category')
    	.parent()
    	.find('.ui-btn.ui-btn-active')
    	.click();
   
    tbc.ajaxPaths.eventDataCache = tbc.ajaxPaths.eventData;
    tbc.cacheAge = 0;
    $.postJSON(tbc.ajaxPaths.eventData,
    	{accessKey : tbc.event.accessKey},
        function(data) {
            if (data.success) {
            	tbc.isLecturer = data.lecturer;
            	// Show sections
            	if (tbc.isLecturer) {
                    $('.tb-lecturer').show();
                    // Set Link for Event's Final Report
                    $('#tb-request-report-link')
                    	.attr('href', tbc.eventReportUrl + tbc.event.id);
                } else {
                    $('.tb-listener').show();
                }
            	
            	$('#tb-feedback-cloud').messageList(data.cloudMessages);
            	$.event.trigger('feedbackupdate', data);

                tbc.feedbackPageUpdateLoop = window.setInterval(
                        function() {
                        	$.event.trigger('feedbackupdate');
                        },
                        tbc.feedbackPageUpdateInterval
                );

                // Default selection for talking speed meter buttons
                $('#tb-meter-speed .tb-meter-button').removeClass('ui-btn-active');
                var className = 'tb-meter-ok';
                if (data.meters != undefined &&
                		data.meters.speed != undefined &&
                		data.meters.speed.status != undefined) {
                	if (data.meters.speed.status == '-') {
                		className = 'tb-meter-minus';
                	} else if (data.meters.speed.status == '+') {
                		className = 'tb-meter-plus';
                	}
                }
                $('#tb-meter-speed .' + className).addClass('ui-btn-active');
                
                // Default selection for understanding meter buttons
                $('#tb-meter-understanding .tb-meter-button').removeClass('ui-btn-active');
                className = 'tb-meter-ok';
                if (data.meters != undefined &&
                		data.meters.understanding != undefined &&
                		data.meters.understanding.status != undefined) {
                	if (data.meters.understanding.status == '-') {
                		className = 'tb-meter-minus';
                	}
                }                
                $('#tb-meter-understanding .' + className).addClass('ui-btn-active');
                
            } else {
                tbc.showProblem(data.problem);
            }
        });
    return;

});

/*
 * Stop updating after user leaves the feedback page 
 */
$(tbc.pages.feedbackPage).live('pagehide', function() {
	$('#tb-feedback-cloud').messageList('destroy');
    if (tbc.event === null) return;
    if (tbc.feedbackPageUpdateLoop !== null) {
        window.clearInterval(tbc.feedbackPageUpdateLoop);
    }
//    $.jStorage.deleteKey('tb-tbc-event');
});

/*
 * Some more events (especially page update and interaction events)
 */
$(tbc.pages.feedbackPage).live('pagecreate', function() {
	
	/*
	 * Listen for clicks on meter buttons
	 */
    $('.tb-meter-buttons').each(function(i1, set) {
        var type = $(this).attr('id').substr(9);
        var buttons = $(this).find('.tb-meter-button');
        buttons.each(function(i2, button) {
            var status;
            if ($(this).hasClass('tb-meter-ok')) status = '0';
            else if ($(this).hasClass('tb-meter-minus')) status = '-';
            else if ($(this).hasClass('tb-meter-plus')) status = '+';
            else return;
            $(this).click(function() {
                $button = $(this);
                $.postJSON(tbc.ajaxPaths.setMeter,
                    {
                        name : type,
                        status : status,
                        eventId : tbc.event.id
                    },
                    function(data) {
                        if (data.success) {
                            buttons.removeClass('ui-btn-active');
                            $button.addClass('ui-btn-active');
                            $.event.trigger('feedbackupdate', data);
                        } else {
                            tbc.showProblem(data.problem);
                        }
                });

                return false;
            });
        });
    });
    
    /*
     * Listen for questions
     */
    $('#tb-question-form').bind('submit', function(event) {
        event.preventDefault();
        var question = $('#tb-question-input').val();
        var categories = Array();
        $(this).find('.tb-category:checked').each(function(){
            categories.push($(this).attr('name'));
        });
        $.postJSON(tbc.ajaxPaths.sendMessage,
            {
                text : question,
                categories : categories,
                eventId : tbc.event.id
            },
            function(data) {
                if (data.success) {
                    $('input.tb-category:checked').attr('checked', false)
                    	.checkboxradio("refresh");
                    $('#tb-question-input').val('');
                    $.event.trigger('feedbackupdate', data);
                } else {
                    tbc.showProblem(data.problem);
                }
            }
        );
        return false;
    });
    
    /*
     * Listen for support clicks on the message list
     * 
     * Note: These buttons do not respond immediately when pressed on
     * I-Pad 2. Therefore we use JQM's vclick event for listening at the 
     * moment. We are
     */
    $('.tb-message-button.tb-message-button-1').live('vclick', function(ev) {
    	ev.preventDefault();
        var btn = $(this);
        btn.addClass('tb-waiting');
        $.postJSON(tbc.ajaxPaths.sendMessage,
                {
                    messageId   : btn.data('message-id'),
                    eventId     : tbc.event.id
                },
                function(data) {
                    if (data.success) {
                        btn.removeClass('tb-waiting').addClass('tb-supported');
                        window.setTimeout(function() {
                        	$.event.trigger('feedbackupdate', data);
                        }, 1000);
                    } else {
                        tbc.showProblem(data.problem);
                    }
                }
        );
    });
    
    /*
     * Listen for lecturer's bucket clicks
     * 
     * Please have a look at the listener's note above.
   	 */
    $('.tb-message-button.tb-message-button-bucket').live('vclick', function() {
    	var btn = $(this);
    	btn.addClass('tb-waiting');
    	$.postJSON(tbc.ajaxPaths.putIntoBucket,
              {
                  bucket      : btn.data('bucket'),
                  messageId   : btn.data('message-id'),
                  eventId     : tbc.event.id
              },
              function(data) {
                  if (data.success) {
                  	btn.removeClass('tb-waiting').addClass('tb-supported');
                      window.setTimeout(function() {
                      	$.event.trigger('feedbackupdate', data);
                      }, 1000);
                  } else {
                      tbc.showProblem(data.problem);
                  }
              }
    	);
  	});
    
    /*
     * Show the legend's description when clicked
     */
    $('#tb-category-legend').live('vclick', function() {
    	alert($('#tb-category-legend-description').text());
    });    
    
    /*
     * Manage updated feedback data
     */
    $(tbc.pages.feedbackPage).bind('feedbackupdate', function(event, data){
    	// If there is no data given start an Ajax call and try again
        if (data == undefined || data == null) {
            $.postJSON(tbc.ajaxPaths.eventDataCache,
            		{accessKey : tbc.event.accessKey},
                function(data) {
                    if (data.success) {
                    	$.event.trigger('feedbackupdate', data);
                    } else {
                    	tbc.showProblem(data.problem);
                    }
                });
            return;
        }
        
        console.log('Updating Feedback Page from ' + tbc.ajaxPaths.eventDataCache);
        
        // Use the cache if there is anyone given
        if (data.cacheEventData !== undefined
                && data.cacheEventData !== null
                && data.cacheEventData !=  false) {
            tbc.ajaxPaths.eventDataCache = data.cacheEventData;
        }
        
        // Do not use the cache frequently
        tbc.cacheAge++;
        if (tbc.cacheAge > tbc.cacheLifetime) {
        	tbc.cacheAge = 0;
        	tbc.ajaxPaths.eventDataCache = tbc.ajaxPaths.eventData;
        	console.log('Going to Skip the Event Update Cache for the Next Time');
        }
        
        /*
         * Show meter messages and bind confirmation clicks
         * 
         * These messages are shown as warning whenever a specific number of 
         * listeners said too fast, too slow, unclear or sth. similar. These
         * warnings are send as meterMessages, which is an array. The lecturer
         * has the possibility to click a message which confirms that he noted
         * it. Afterwards, this type of message is not shown anymore.
         */
        if (tbc.isLecturer && data.meterMessages.length > 0) {
        	$('.tb-meter-warning').hide();
        	$.each(data.meterMessages, function(index, mmi) {
        		$('.tb-meter-warning-' + mmi.value)
        			.addClass('supported-' + mmi.priority).show()
        			.unbind('vclick')
        			.bind('vclick', function() {
        				$.postJSON(tbc.ajaxPaths.confirmMeterMessage,
    	            		{
        						value   : mmi.value,
        						eventId : tbc.event.id
        					},
        	                function(data) {
        	                    if (data.success) {
        	                    	$.event.trigger('feedbackupdate', data);
        	                    } else {
        	                    	tbc.showProblem(data.problem);
        	                    }
    	                });
        			})
        			.find('span').text(mmi.text);
        	});
        	$('.tb-meter-warnings').show();
        } else {
        	$('.tb-meter-warnings').hide();
        }

        // Update the message list
        data.cloudMessages.isLecturer = tbc.isLecturer;
        $('#tb-feedback-cloud').messageList('setElements', data.cloudMessages);
        
        $.jStorage.set('tb-tbc-event', tbc.event);
    });

    /*
     * Update the number of participants
     */
    $('.tb-event-participants').bind('feedbackupdate', function(event, data) {
    	if (data == undefined) return;
    	$(this).find('.tb-event-participants-number').text(data.event.listenerNumber);
    });
    
    
});/**
 * Logic for User Settings
 */
	
/*
 * Hide/show anonymous form and set current name before page is shown
 */
$(tbc.pages.userSettings).live('pagebeforeshow', function() {
	$('#tb-user-settings-cancel')
		.attr('href', tbc.getPreviousPage(tbc.pages.userSettings));
	tbc.setPreviousPage(tbc.pages.userSettings);
    
	$('#user-settings .ui-btn-active').removeClass('ui-btn-active');
    if (tbc.user.isAnonymous) {
    	$('#tb-user-settings-anonymous-form').hide();
    } else {
    	$('#tb-user-settings-anonymous-form').show();
    }
    
    if (tbc.user.isAnonymous) {
    	$('#username-input').val('');
    } else {
    	$('#username-input').val(tbc.user.name);
    }
});

/*
 * Set focus
 */
$(tbc.pages.userSettings).live('pageshow', function() {
    window.setTimeout(function() {
        $('#username-input').focus();
    }, 100);
});

$(tbc.pages.userSettings).live('pagecreate', function() {

	
	/*
	 * Listen for general user setting changes
	 */
	$('#tb-user-settings-form').bind('submit', function(event) {
	    event.preventDefault();
	    $.postJSON(tbc.ajaxPaths.setUserSettings,
	        {username: $('#username-input').val()},
	        function (data) {
	            if (data.success) {
	            	console.log('Changed username to ' + data.username);
	                tbc.user.name = data.username;
	                tbc.user.isAnonymous = false;
	                $('.username-indicator').setButtonLabel(tbc.user.name);
	                $.mobile.changePage(tbc.getPreviousPage(
	                		tbc.pages.userSettings));
	            } else {
	                tbc.showProblem(data.problem);
	            }
	        }
	    );
	});
	
	/*
	 * Listen for user's anonymous button
	 */
	$('#tb-user-settings-anonymous-form').bind('submit', function(event) {
		event.preventDefault();
		$.postJSON(tbc.ajaxPaths.setUserSettings,
	        {},
	        function (data) {
	            if (data.success) {
	            	console.log('Deleted personal data');
	            	tbc.user.name = data.username;
	                tbc.user.isAnonymous = true;
	                $('.username-indicator').setButtonLabel(tbc.user.name);
	                $.mobile.changePage(tbc.getPreviousPage(
	                		tbc.pages.userSettings));
	            } else {
	                tbc.showProblem(data.problem);
	            }
	        }
	    );
	});
});/**
 * Logic for Help
 */

$(tbc.pages.help).live('pagebeforeshow', function() {
	$('.tb-help-role', $(this)).hide();
	$('#tb-help-role-choose', $(this)).show();
});

/*
 * Set Help as last called page
 */
$(tbc.pages.help).live('pageshow', function() {
	tbc.setPreviousPage(tbc.pages.help);
});