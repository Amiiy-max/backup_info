/**
 * @Source ../member/js/pay/charge/app-all.js
 */
/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
 //@ sourceMappingURL=jquery.min.map
 */(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
    return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);




//md5
(function($){

    var rotateLeft = function(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }

    var addUnsigned = function(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        if (lX4 | lY4) {
            if (lResult & 0x40000000) return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            else return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
        } else {
            return (lResult ^ lX8 ^ lY8);
        }
    }

    var F = function(x, y, z) {
        return (x & y) | ((~ x) & z);
    }

    var G = function(x, y, z) {
        return (x & z) | (y & (~ z));
    }

    var H = function(x, y, z) {
        return (x ^ y ^ z);
    }

    var I = function(x, y, z) {
        return (y ^ (x | (~ z)));
    }

    var FF = function(a, b, c, d, x, s, ac) {
        a = addUnsigned(a, addUnsigned(addUnsigned(F(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    };

    var GG = function(a, b, c, d, x, s, ac) {
        a = addUnsigned(a, addUnsigned(addUnsigned(G(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    };

    var HH = function(a, b, c, d, x, s, ac) {
        a = addUnsigned(a, addUnsigned(addUnsigned(H(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    };

    var II = function(a, b, c, d, x, s, ac) {
        a = addUnsigned(a, addUnsigned(addUnsigned(I(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    };

    var convertToWordArray = function(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWordsTempOne = lMessageLength + 8;
        var lNumberOfWordsTempTwo = (lNumberOfWordsTempOne - (lNumberOfWordsTempOne % 64)) / 64;
        var lNumberOfWords = (lNumberOfWordsTempTwo + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    };

    var wordToHex = function(lValue) {
        var WordToHexValue = "", WordToHexValueTemp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValueTemp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValueTemp.substr(WordToHexValueTemp.length - 2, 2);
        }
        return WordToHexValue;
    };

    var uTF8Encode = function(string) {
        string = string.toString().replace(/\x0d\x0a/g, "\x0a");
        var output = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                output += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                output += String.fromCharCode((c >> 6) | 192);
                output += String.fromCharCode((c & 63) | 128);
            } else {
                output += String.fromCharCode((c >> 12) | 224);
                output += String.fromCharCode(((c >> 6) & 63) | 128);
                output += String.fromCharCode((c & 63) | 128);
            }
        }
        return output;
    };

    $.extend({
        md5: function(string) {
            var x = Array();
            var k, AA, BB, CC, DD, a, b, c, d;
            var S11=7, S12=12, S13=17, S14=22;
            var S21=5, S22=9 , S23=14, S24=20;
            var S31=4, S32=11, S33=16, S34=23;
            var S41=6, S42=10, S43=15, S44=21;
            string = uTF8Encode(string);
            x = convertToWordArray(string);
            a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;
            for (k = 0; k < x.length; k += 16) {
                AA = a; BB = b; CC = c; DD = d;
                a = FF(a, b, c, d, x[k+0], S11, 0xD76AA478);
                d = FF(d, a, b, c, x[k+1], S12, 0xE8C7B756);
                c = FF(c, d, a, b, x[k+2], S13, 0x242070DB);
                b = FF(b, c, d, a, x[k+3], S14, 0xC1BDCEEE);
                a = FF(a, b, c, d, x[k+4], S11, 0xF57C0FAF);
                d = FF(d, a, b, c, x[k+5], S12, 0x4787C62A);
                c = FF(c, d, a, b, x[k+6], S13, 0xA8304613);
                b = FF(b, c, d, a, x[k+7], S14, 0xFD469501);
                a = FF(a, b, c, d, x[k+8], S11, 0x698098D8);
                d = FF(d, a, b, c, x[k+9], S12, 0x8B44F7AF);
                c = FF(c, d, a, b, x[k+10], S13, 0xFFFF5BB1);
                b = FF(b, c, d, a, x[k+11], S14, 0x895CD7BE);
                a = FF(a, b, c, d, x[k+12], S11, 0x6B901122);
                d = FF(d, a, b, c, x[k+13], S12, 0xFD987193);
                c = FF(c, d, a, b, x[k+14], S13, 0xA679438E);
                b = FF(b, c, d, a, x[k+15], S14, 0x49B40821);
                a = GG(a, b, c, d, x[k+1], S21, 0xF61E2562);
                d = GG(d, a, b, c, x[k+6], S22, 0xC040B340);
                c = GG(c, d, a, b, x[k+11], S23, 0x265E5A51);
                b = GG(b, c, d, a, x[k+0], S24, 0xE9B6C7AA);
                a = GG(a, b, c, d, x[k+5], S21, 0xD62F105D);
                d = GG(d, a, b, c, x[k+10], S22, 0x2441453);
                c = GG(c, d, a, b, x[k+15], S23, 0xD8A1E681);
                b = GG(b, c, d, a, x[k+4], S24, 0xE7D3FBC8);
                a = GG(a, b, c, d, x[k+9], S21, 0x21E1CDE6);
                d = GG(d, a, b, c, x[k+14], S22, 0xC33707D6);
                c = GG(c, d, a, b, x[k+3], S23, 0xF4D50D87);
                b = GG(b, c, d, a, x[k+8], S24, 0x455A14ED);
                a = GG(a, b, c, d, x[k+13], S21, 0xA9E3E905);
                d = GG(d, a, b, c, x[k+2], S22, 0xFCEFA3F8);
                c = GG(c, d, a, b, x[k+7], S23, 0x676F02D9);
                b = GG(b, c, d, a, x[k+12], S24, 0x8D2A4C8A);
                a = HH(a, b, c, d, x[k+5], S31, 0xFFFA3942);
                d = HH(d, a, b, c, x[k+8], S32, 0x8771F681);
                c = HH(c, d, a, b, x[k+11], S33, 0x6D9D6122);
                b = HH(b, c, d, a, x[k+14], S34, 0xFDE5380C);
                a = HH(a, b, c, d, x[k+1], S31, 0xA4BEEA44);
                d = HH(d, a, b, c, x[k+4], S32, 0x4BDECFA9);
                c = HH(c, d, a, b, x[k+7], S33, 0xF6BB4B60);
                b = HH(b, c, d, a, x[k+10], S34, 0xBEBFBC70);
                a = HH(a, b, c, d, x[k+13], S31, 0x289B7EC6);
                d = HH(d, a, b, c, x[k+0], S32, 0xEAA127FA);
                c = HH(c, d, a, b, x[k+3], S33, 0xD4EF3085);
                b = HH(b, c, d, a, x[k+6], S34, 0x4881D05);
                a = HH(a, b, c, d, x[k+9], S31, 0xD9D4D039);
                d = HH(d, a, b, c, x[k+12], S32, 0xE6DB99E5);
                c = HH(c, d, a, b, x[k+15], S33, 0x1FA27CF8);
                b = HH(b, c, d, a, x[k+2], S34, 0xC4AC5665);
                a = II(a, b, c, d, x[k+0], S41, 0xF4292244);
                d = II(d, a, b, c, x[k+7], S42, 0x432AFF97);
                c = II(c, d, a, b, x[k+14], S43, 0xAB9423A7);
                b = II(b, c, d, a, x[k+5], S44, 0xFC93A039);
                a = II(a, b, c, d, x[k+12], S41, 0x655B59C3);
                d = II(d, a, b, c, x[k+3], S42, 0x8F0CCC92);
                c = II(c, d, a, b, x[k+10], S43, 0xFFEFF47D);
                b = II(b, c, d, a, x[k+1], S44, 0x85845DD1);
                a = II(a, b, c, d, x[k+8], S41, 0x6FA87E4F);
                d = II(d, a, b, c, x[k+15], S42, 0xFE2CE6E0);
                c = II(c, d, a, b, x[k+6], S43, 0xA3014314);
                b = II(b, c, d, a, x[k+13], S44, 0x4E0811A1);
                a = II(a, b, c, d, x[k+4], S41, 0xF7537E82);
                d = II(d, a, b, c, x[k+11], S42, 0xBD3AF235);
                c = II(c, d, a, b, x[k+2], S43, 0x2AD7D2BB);
                b = II(b, c, d, a, x[k+9], S44, 0xEB86D391);
                a = addUnsigned(a, AA);
                b = addUnsigned(b, BB);
                c = addUnsigned(c, CC);
                d = addUnsigned(d, DD);
            }
            var tempValue = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
            return tempValue.toLowerCase();
        }
    });
})(jQuery);


define('penguin/observer',[],function(){

    /* lang support */
    var toString = {}.toString,
        isFunction = function( it ){
            return toString.call( it ) === '[object Function]';
        },
            isArray = Array.isArray || function( it ){
            return toString.call( it ) === '[object Array]';
        },
        isString = function( str ){
            return 'string' === typeof str;
        },
        slice = Array.prototype.slice;


    var wrap = function( names, performer ){

        var name;

        if ( isArray( names ) ){
            while ( name = names.shift() ){
                performer( name );
            }
        } else {
            performer( names );
        }
    },

    attach = function( observerGroup, name, listener, context ){

        if ( !isString( name ) ){
            return;
        }

        var listeners = observerGroup[name] || ( observerGroup[name] = [] );
        listeners.push({
            listener: listener,
            context: context
        });
    },

    detach = function( observerGroup, name, listener, context ){

        var listeners, item;

        if ( !isString( name ) || !( listeners = observerGroup[name] ) ){
            return;
        }

        if ( listener || context ){
            for ( var i = 0; i < listeners.length; ){
                item = listeners[i];
                if ( ( listener && item.listener === listener ) || ( context && item.context === context ) ){
                    listeners.splice( i, 1 );
                } else {
                    i++;
                }
            }
        } else {
            delete observerGroup[name];
        }
    },

    notify = function( observerGroup, name, args ){

        var listeners, item;

        if ( !isString( name ) || !( listeners = observerGroup[name] ) ){
            return;
        }

        for ( var i = 0, l = listeners.length; i < l; i++ ){
            item = listeners[i];
            item.listener.apply( item.context || this._observer_context || this, args );
        }
    },

    notifyOne = function( observerGroup, name, args ){
        var listeners, item;

        if( !isString( name ) || !( listeners = observerGroup[name] ) ) {
            return;
        }

        item = listeners[0];

        return item.listener.apply( item.context || this._observer_context || this, args );
    };

    var MakeObserver = function( context ){
        this._observer_context = context;
    };

    MakeObserver.prototype = {
        attach: function( names, listener, context ){

            var observerGroup;

            if ( !isFunction( listener ) ){
                return this;
            }

            observerGroup = this._observer_group || ( this._observer_group = {} );

            wrap( names, function( name ){
                attach( observerGroup, name, listener, context );
            });

            return this;
        },

        detach: function( names, listener, context ){

            var observerGroup;

            if ( !( observerGroup = this._observer_group ) ){
                return this;
            }

            if ( !names ){
                delete this._observer_group;
                return this;
            }

            wrap( names, function( name ){
                detach( observerGroup, name, listener, context );
            } );

            return this;
        },

        notify: function( names ){

            var observerGroup, args, _this;

            if ( !( observerGroup = this._observer_group ) ){
                return this;
            }

            args = slice.call( arguments, 1 );
            _this = this;

            wrap( names, function( name ){
                notify.call( _this, observerGroup, name, args );
            } );

            return this;
        },

        notifyOne: function( name ) {

            var observerGroup, args, _this;

            if ( !( observerGroup = this._observer_group ) ){
                return this;
            }

            args = slice.call( arguments, 1 );
            _this = this;

            return notifyOne.call( _this, observerGroup, name, args );
        }
    };

    MakeObserver.prototype.on = MakeObserver.prototype.attach;
    MakeObserver.prototype.off = MakeObserver.prototype.detach;
    MakeObserver.prototype.trigger = MakeObserver.prototype.notify;
    MakeObserver.prototype.fire = MakeObserver.prototype.notifyOne;
    MakeObserver.prototype.emit = MakeObserver.prototype.notify;    


    /* api */
    var observer = new MakeObserver( window );

    observer.create = function( context ){

        return new MakeObserver( context );
    };

    observer.mixTo = function( target ){

        target = target || {};

        var observerProto = MakeObserver.prototype;

        for ( var fn in observerProto ){
            target[fn] = observerProto[fn];
        }

        return target;
    };


    return observer;

} );

define('penguin/promise',[],function(){

    var PENDING = undefined, FULFILLED = 1, REJECTED = 2;

    var isFunction = function(obj){
        return 'function' === typeof obj;
    }
    var isArray = function(obj) {
        return Object.prototype.toString.call(obj) === "[object Array]";
    }
    var isThenable = function(obj){
        return obj && typeof obj['then'] == 'function';
    }

    var transition = function(status,value){
        var promise = this;
        if(promise._status !== PENDING) return;
        // 所以的执行都是异步调用，保证then是先执行的
        setTimeout(function(){
            promise._status = status;
            publish.call(promise,value);
        });
    }
    var publish = function(val){
        var promise = this,
            fn,
            st = promise._status === FULFILLED,
            queue = promise[st ? '_resolves' : '_rejects'];
        
        while(fn = queue.shift()) {
            val = fn.call(promise, val) || val;
        }
        promise[st ? '_value' : '_reason'] = val;
        promise['_resolves'] = promise['_rejects'] = undefined;
    }

    var Promise = function(resolver){
        if (!isFunction(resolver))
            throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
        if(!(this instanceof Promise)) return new Promise(resolver);

        var promise = this;
        promise._value;
        promise._reason;
        promise._status = PENDING;
        promise._resolves = [];
        promise._rejects = [];
        
        var resolve = function(value){
            transition.apply(promise,[FULFILLED].concat([value]));
        }
        var reject = function(reason){
            transition.apply(promise,[REJECTED].concat([reason]));
        }
        
        resolver(resolve,reject);
    }

    Promise.prototype.then = function(onFulfilled,onRejected){
        var promise = this;
        // 每次返回一个promise，保证是可thenable的
        return Promise(function(resolve,reject){
            function callback(value){
              var ret = isFunction(onFulfilled) && onFulfilled(value) || value;
              if(isThenable(ret)){
                ret.then(function(value){
                   resolve(value);
                },function(reason){
                   reject(reason);
                });
              }else{
                resolve(ret);
              }
            }
            function errback(reason){
                reason = isFunction(onRejected) && onRejected(reason) || reason;
                reject(reason);
            }
            if(promise._status === PENDING){
                promise._resolves.push(callback);
                promise._rejects.push(errback);
            }else if(promise._status === FULFILLED){ // 状态改变后的then操作，立刻执行
                callback(promise._value);
            }else if(promise._status === REJECTED){
                errback(promise._reason);
            }
        });
    }

    Promise.prototype.catch = function(onRejected){
        return this.then(undefined, onRejected)
    }

    Promise.prototype.delay = function(ms,val){
        return this.then(function(ori){
            return Promise.delay(ms,val || ori);
        })
    }

    Promise.delay = function(ms,val){
        return Promise(function(resolve,reject){
            setTimeout(function(){
                resolve(val);
            },ms);
        })
    }

    Promise.resolve = function(arg){
        return Promise(function(resolve,reject){
            resolve(arg)
        })
    }

    Promise.reject = function(arg){
        return Promise(function(resolve,reject){
            reject(arg)
        })
    }

    Promise.all = function(promises){
        if (!isArray(promises)) {
            throw new TypeError('You must pass an array to all.');
        }
        return Promise(function(resolve,reject){
            var i = 0,
                result = [],
                len = promises.length,
                count = len

            function resolver(index) {
              return function(value) {
                resolveAll(index, value);
              };
            }

            function rejecter(reason){
                reject(reason);
            }

            function resolveAll(index,value){
                result[index] = value;
                if( --count == 0){
                    resolve(result)
                }
            }

            for (; i < len; i++) {
                promises[i].then(resolver(i),rejecter);
            }
        });
    }

    Promise.race = function(promises){
        if (!isArray(promises)) {
            throw new TypeError('You must pass an array to race.');
        }
        return Promise(function(resolve,reject){
            var i = 0,
                len = promises.length;

            function resolver(value) {
                resolve(value);
            }

            function rejecter(reason){
                reject(reason);
            }

            for (; i < len; i++) {
                promises[i].then(resolver,rejecter);
            }
        });
    }

    return Promise;
    // var noop = function(){};

    // var Promise = function( len ){

    //     var _this = this,
    //         thens = [],
    //         resolved = 0,
    //         rejected = 0;

    //     len = len || 0;

    //     var probe = function(){
    //         if ( resolved + rejected === len ){
    //             complete();
    //         }
    //     },

    //     complete = function(){
    //         _this.then = !rejected ?
    //             function( resolved, rejected ){ resolved && resolved(); } :
    //             function( resolved, rejected ){ rejected && rejected(); };

    //         complete = noop;

    //         notify( !rejected ? 0 : 1 );

    //         notify = noop;
    //         thens = [];
    //     },

    //     notify = function( which ){
    //         var then, callback, i = 0;

    //         while ( ( then = thens[i++] ) ){
    //             callback = then[which];
    //             callback && callback();
    //         }
    //     };

    //     this.then = function( resolved, rejected ){
    //         thens.push( [resolved, rejected] );
    //     };

    //     this.resolve = function(){
    //         resolved++;
    //         probe();
    //     };

    //     this.reject = function(){
    //         rejected++;
    //         probe();
    //     };

    //     probe();
    // };


// var when = function(){
//     var l = arguments.length,
//         promise = new Promise(l),
//         fn, i = 0;

//     while ( ( fn = arguments[i++] ) ){
//         fn( promise );
//     }

//     return promise;
// };


// return when;

    // return Promise;
});
define('penguin/ployfill', [],function() {
    (function () {
        // Production steps of ECMA-262, Edition 5, 15.4.4.18
        // Reference: http://es5.github.io/#x15.4.4.18
        if (!Array.prototype.forEach) {

            Array.prototype.forEach = function (callback, thisArg) {

                var T, k;

                if (this === null) {
                    throw new TypeError(' this is null or not defined');
                }

                // 1. Let O be the result of calling toObject() passing the
                // |this| value as the argument.
                var O = Object(this);

                // 2. Let lenValue be the result of calling the Get() internal
                // method of O with the argument "length".
                // 3. Let len be toUint32(lenValue).
                var len = O.length >>> 0;

                // 4. If isCallable(callback) is false, throw a TypeError exception. 
                // See: http://es5.github.com/#x9.11
                if (typeof callback !== "function") {
                    throw new TypeError(callback + ' is not a function');
                }

                // 5. If thisArg was supplied, let T be thisArg; else let
                // T be undefined.
                if (arguments.length > 1) {
                    T = thisArg;
                }

                // 6. Let k be 0
                k = 0;

                // 7. Repeat, while k < len
                while (k < len) {

                    var kValue;

                    // a. Let Pk be ToString(k).
                    //    This is implicit for LHS operands of the in operator
                    // b. Let kPresent be the result of calling the HasProperty
                    //    internal method of O with argument Pk.
                    //    This step can be combined with c
                    // c. If kPresent is true, then
                    if (k in O) {

                        // i. Let kValue be the result of calling the Get internal
                        // method of O with argument Pk.
                        kValue = O[k];

                        // ii. Call the Call internal method of callback with T as
                        // the this value and argument list containing kValue, k, and O.
                        callback.call(T, kValue, k, O);
                    }
                    // d. Increase k by 1.
                    k++;
                }
                // 8. return undefined
            };
        }

        if (!String.prototype.trim) {
            String.prototype.trim = function () {
                return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
            };
        }

        if (!Object.getOwnPropertyNames) {
            Object.getOwnPropertyNames = function getOwnPropertyNames(object) {
                var buffer = [];
                var key;

                // Non-enumerable properties cannot be discovered but can be checked for by name.
                // Define those used internally by JS to allow an incomplete solution
                var commonProps = ['length', "name", "arguments", "caller", "prototype", "observe", "unobserve"];

                if (typeof object === 'undefined' || object === null) {
                    throw new TypeError('Cannot convert undefined or null to object');
                }

                object = Object(object);

                // Enumerable properties only
                for (key in object) {
                    if (Object.prototype.hasOwnProperty.call(object, key)) {
                        buffer.push(key);
                    }
                }

                // Check for and add the common non-enumerable properties
                for (var i = 0, s = commonProps.length; i < s; i++) {
                    if (commonProps[i] in object) buffer.push(commonProps[i]);
                }

                return buffer;
            };
        }

        if (!Array.prototype.indexOf) {
            Array.prototype.indexOf = function(searchElement, fromIndex) {

                var k;

                // 1. Let o be the result of calling ToObject passing
                //    the this value as the argument.
                if (this == null) {
                throw new TypeError('"this" is null or not defined');
                }

                var o = Object(this);

                // 2. Let lenValue be the result of calling the Get
                //    internal method of o with the argument "length".
                // 3. Let len be ToUint32(lenValue).
                var len = o.length >>> 0;

                // 4. If len is 0, return -1.
                if (len === 0) {
                return -1;
                }

                // 5. If argument fromIndex was passed let n be
                //    ToInteger(fromIndex); else let n be 0.
                var n = +fromIndex || 0;

                if (Math.abs(n) === Infinity) {
                n = 0;
                }

                // 6. If n >= len, return -1.
                if (n >= len) {
                return -1;
                }

                // 7. If n >= 0, then Let k be n.
                // 8. Else, n<0, Let k be len - abs(n).
                //    If k is less than 0, then let k be 0.
                k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

                // 9. Repeat, while k < len
                while (k < len) {
                // a. Let Pk be ToString(k).
                //   This is implicit for LHS operands of the in operator
                // b. Let kPresent be the result of calling the
                //    HasProperty internal method of o with argument Pk.
                //   This step can be combined with c
                // c. If kPresent is true, then
                //    i.  Let elementK be the result of calling the Get
                //        internal method of o with the argument ToString(k).
                //   ii.  Let same be the result of applying the
                //        Strict Equality Comparison Algorithm to
                //        searchElement and elementK.
                //  iii.  If same is true, return k.
                if (k in o && o[k] === searchElement) {
                    return k;
                }
                k++;
                }
                return -1;
            };
        }
    })();
});

define('penguin/fetch',[
    'penguin/promise',
    'jquery',
    'penguin/ployfill'
], function (Promise, $) {
(function () {
      var _super = $.ajaxSettings.xhr,
        xhrCorsHeaders = [ "Cache-Control", "Content-Language", "Content-Type", "Expires", "Last-Modified", "Pragma" ];
     
      $.ajaxSettings.xhr = function () {
        var xhr = _super(),
          getAllResponseHeaders = xhr.getAllResponseHeaders;
     
        xhr.getAllResponseHeaders = function () {
          var allHeaders = "";
          try {
            allHeaders = getAllResponseHeaders.apply( xhr );
            if ( allHeaders ) {
              return allHeaders;
            }
          } catch ( e ) {
          }
     
          $.each( xhrCorsHeaders, function ( i, headerName ) {
            if ( xhr.getResponseHeader( headerName ) ) {
              allHeaders += headerName + ": " + xhr.getResponseHeader( headerName ) + "\n";
            }
          });
          return allHeaders;
        };
     
        return xhr;
      };
    })();

    var self = window;

    // if (window.fetch) {
    //     return window.fetch;
    // }
    var support = {
        searchParams: 'URLSearchParams' in self,
        iterable: 'Symbol' in self && 'iterator' in Symbol,
        blob: 'FileReader' in self && 'Blob' in self && (function () {
            try {
                new Blob()
                return true
            } catch (e) {
                return false
            }
        })(),
        formData: 'FormData' in self,
        arrayBuffer: 'ArrayBuffer' in self
    }

    function normalizeName(name) {
        if (typeof name !== 'string') {
            name = String(name)
        }
        if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
            throw new TypeError('Invalid character in header field name')
        }
        return name.toLowerCase()
    }

    function normalizeValue(value) {
        if (typeof value !== 'string') {
            value = String(value)
        }
        return value
    }

    // Build a destructive iterator for the value list
    function iteratorFor(items) {
        var iterator = {
            next: function () {
                var value = items.shift()
                return {
                    done: value === undefined,
                    value: value
                }
            }
        }

        if (support.iterable) {
            iterator[Symbol.iterator] = function () {
                return iterator
            }
        }

        return iterator
    }

    function Headers(headers) {
        this.map = {}

        if (headers instanceof Headers) {
            headers.forEach(function (value, name) {
                this.append(name, value)
            }, this)

        } else if (headers) {
            Object.getOwnPropertyNames(headers).forEach(function (name) {
                this.append(name, headers[name])
            }, this)
        }
    }

    Headers.prototype.append = function (name, value) {
        name = normalizeName(name)
        value = normalizeValue(value)
        var list = this.map[name]
        if (!list) {
            list = []
            this.map[name] = list
        }
        list.push(value)
    }

    Headers.prototype['delete'] = function (name) {
        delete this.map[normalizeName(name)]
    }

    Headers.prototype.get = function (name) {
        var values = this.map[normalizeName(name)]
        return values ? values[0] : null
    }

    Headers.prototype.getAll = function (name) {
        return this.map[normalizeName(name)] || []
    }

    Headers.prototype.has = function (name) {
        return this.map.hasOwnProperty(normalizeName(name))
    }

    Headers.prototype.set = function (name, value) {
        this.map[normalizeName(name)] = [normalizeValue(value)]
    }

    Headers.prototype.forEach = function (callback, thisArg) {
        Object.getOwnPropertyNames(this.map).forEach(function (name) {
            this.map[name].forEach(function (value) {
                callback.call(thisArg, value, name, this)
            }, this)
        }, this)
    }

    Headers.prototype.keys = function () {
        var items = []
        this.forEach(function (value, name) {
            items.push(name)
        })
        return iteratorFor(items)
    }

    Headers.prototype.values = function () {
        var items = []
        this.forEach(function (value) {
            items.push(value)
        })
        return iteratorFor(items)
    }

    Headers.prototype.entries = function () {
        var items = []
        this.forEach(function (value, name) {
            items.push([name, value])
        })
        return iteratorFor(items)
    }

    if (support.iterable) {
        Headers.prototype[Symbol.iterator] = Headers.prototype.entries
    }

    function consumed(body) {
        if (body.bodyUsed) {
            return Promise.reject(new TypeError('Already read'))
        }
        body.bodyUsed = true
    }

    function fileReaderReady(reader) {
        return new Promise(function (resolve, reject) {
            reader.onload = function () {
                resolve(reader.result)
            }
            reader.onerror = function () {
                reject(reader.error)
            }
        })
    }

    function readBlobAsArrayBuffer(blob) {
        var reader = new FileReader()
        reader.readAsArrayBuffer(blob)
        return fileReaderReady(reader)
    }

    function readBlobAsText(blob) {
        var reader = new FileReader()
        reader.readAsText(blob)
        return fileReaderReady(reader)
    }

    function Body() {
        this.bodyUsed = false

        this._initBody = function (body) {
            this._bodyInit = body
            if (typeof body === 'string') {
                this._bodyText = body
            } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
                this._bodyBlob = body
            } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
                this._bodyFormData = body
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                this._bodyText = body.toString()
            } else if (!body) {
                this._bodyText = ''
            } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
                // Only support ArrayBuffers for POST method.
                // Receiving ArrayBuffers happens via Blobs, instead.
            } else {
                throw new Error('unsupported BodyInit type')
            }

            if (!this.headers.get('content-type')) {
                if (typeof body === 'string') {
                    this.headers.set('content-type', 'text/plain;charset=UTF-8')
                } else if (this._bodyBlob && this._bodyBlob.type) {
                    this.headers.set('content-type', this._bodyBlob.type)
                } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                    this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
                }
            }
        }

        if (support.blob) {
            this.blob = function () {
                var rejected = consumed(this)
                if (rejected) {
                    return rejected
                }

                if (this._bodyBlob) {
                    return Promise.resolve(this._bodyBlob)
                } else if (this._bodyFormData) {
                    throw new Error('could not read FormData body as blob')
                } else {
                    return Promise.resolve(new Blob([this._bodyText]))
                }
            }

            this.arrayBuffer = function () {
                return this.blob().then(readBlobAsArrayBuffer)
            }

            this.text = function () {
                var rejected = consumed(this)
                if (rejected) {
                    return rejected
                }

                if (this._bodyBlob) {
                    return readBlobAsText(this._bodyBlob)
                } else if (this._bodyFormData) {
                    throw new Error('could not read FormData body as text')
                } else {
                    return Promise.resolve(this._bodyText)
                }
            }
        } else {
            this.text = function () {
                var rejected = consumed(this)
                return rejected ? rejected : Promise.resolve(this._bodyText)
            }
        }

        if (support.formData) {
            this.formData = function () {
                return this.text().then(decode)
            }
        }

        this.json = function () {
            return this.text().then(JSON.parse)
        }

        return this
    }

    // HTTP methods whose capitalization should be normalized
    var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

    function normalizeMethod(method) {
        var upcased = method.toUpperCase()
        return (methods.indexOf(upcased) > -1) ? upcased : method
    }

    function Request(input, options) {
        options = options || {}
        var body = options.body
        if (Request.prototype.isPrototypeOf(input)) {
            if (input.bodyUsed) {
                throw new TypeError('Already read')
            }
            this.url = input.url
            this.credentials = input.credentials
            if (!options.headers) {
                this.headers = new Headers(input.headers)
            }
            this.method = input.method
            this.mode = input.mode
            if (!body) {
                body = input._bodyInit
                input.bodyUsed = true
            }
        } else {
            this.url = input
        }

        this.credentials = options.credentials || this.credentials || 'omit'
        if (options.headers || !this.headers) {
            this.headers = new Headers(options.headers)
        }
        this.method = normalizeMethod(options.method || this.method || 'GET')
        this.mode = options.mode || this.mode || null
        this.referrer = null

        if ((this.method === 'GET' || this.method === 'HEAD') && body) {
            throw new TypeError('Body not allowed for GET or HEAD requests')
        }
        this._initBody(body)
    }

    Request.prototype.clone = function () {
        return new Request(this)
    }

    function decode(body) {
        var form = new FormData()
        body.trim().split('&').forEach(function (bytes) {
            if (bytes) {
                var split = bytes.split('=')
                var name = split.shift().replace(/\+/g, ' ')
                var value = split.join('=').replace(/\+/g, ' ')
                form.append(decodeURIComponent(name), decodeURIComponent(value))
            }
        })
        return form
    }

    function headers(xhr) {
        var head = new Headers()
        var pairs = (xhr.getAllResponseHeaders() || '').trim().split('\n')
        pairs.forEach(function (header) {
            var split = header.trim().split(':')
            var key = split.shift().trim()
            var value = split.join(':').trim()
            head.append(key, value)
        })
        return head
    }

    Body.call(Request.prototype)

    function Response(bodyInit, options) {
        if (!options) {
            options = {}
        }

        this.type = 'default'
        this.status = options.status
        this.ok = this.status >= 200 && this.status < 300
        this.statusText = options.statusText
        this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
        this.url = options.url || ''
        this._initBody(bodyInit)
    }

    Body.call(Response.prototype)

    Response.prototype.clone = function () {
        return new Response(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new Headers(this.headers),
            url: this.url
        })
    }

    Response.error = function () {
        var response = new Response(null, {
            status: 0,
            statusText: ''
        })
        response.type = 'error'
        return response
    }

    var redirectStatuses = [301, 302, 303, 307, 308]

    Response.redirect = function (url, status) {
        if (redirectStatuses.indexOf(status) === -1) {
            throw new RangeError('Invalid status code')
        }

        return new Response(null, {
            status: status,
            headers: {
                location: url
            }
        })
    }

    self.Headers = Headers
    self.Request = Request
    self.Response = Response

    self.fetch = function (input, init) {
        return new Promise(function (resolve, reject) {
            // console.log();
            // $.ajax({ 
            //     type: options.method, 
            //     url: url, 
            //     contentType: options.headers['Content-Type'], 
            //     data: JSON.stringify(options.body), 
            //     dataType: "json", 
            //     xhrFields: {  withCredentials: true},
            //     success: function (response) { 
            //         resolve(response);
            //     }, 
            //     error: function (response) { 
            //         reject(response);
            //     } 
            // });

            var request,options
            if (Request.prototype.isPrototypeOf(input) && !init) {
                request = input
            } else {
                request = new Request(input, init)
            }
            
            options = { 
                type: request.method, 
                url: request.url, 
                headers: {},
                // contentType: request.headers['Content-Type'], 
                // data: JSON.stringify(options.body), 
                // dataType: "text", 
                xhrFields: {},
                // traditional: true,
                complete: function (xhr, status) { 
                    if('success' == status){
                        if ('responseType' in xhr && support.blob) {
                            xhr.responseType = 'blob'
                        }
                        var options = {
                            status: xhr.status,
                            statusText: xhr.statusText,
                            headers: headers(xhr),
                            url: ('responseURL' in xhr) ? xhr.responseURL : (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders()) ? xhr.getResponseHeader('X-Request-URL') : '')
                        }
                        var body = 'response' in xhr ? xhr.response : xhr.responseText
                        resolve(new Response(body, options))
                    }else{
                        reject(new TypeError(xhr.statusText))
                    }
                }
            }
            request.headers.forEach(function (value, name) {
                options.headers[name] = value;
            })

            if (request.credentials === 'include') {
                options.xhrFields.withCredentials = true
            }

            if (request.dataType) {
                options.dataType = request.dataType
            }

            options.data = typeof request._bodyInit === 'undefined' ? null : request._bodyInit

            $.ajax(options);

            return ;
            var xhr = new XMLHttpRequest()

            function responseURL() {
                if ('responseURL' in xhr) {
                    return xhr.responseURL
                }

                // Avoid security warnings on getResponseHeader when not allowed by CORS
                if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
                    return xhr.getResponseHeader('X-Request-URL')
                }

                return
            }

            xhr.onload = function () {
                var options = {
                    status: xhr.status,
                    statusText: xhr.statusText,
                    headers: headers(xhr),
                    url: responseURL()
                }
                var body = 'response' in xhr ? xhr.response : xhr.responseText
                resolve(new Response(body, options))
            }

            xhr.onerror = function () {
                reject(new TypeError('Network request failed'))
            }

            xhr.ontimeout = function () {
                reject(new TypeError('Network request failed'))
            }

            xhr.open(request.method, request.url, true)

            if (request.credentials === 'include') {
                xhr.withCredentials = true
            }

            if ('responseType' in xhr && support.blob) {
                xhr.responseType = 'blob'
            }

            request.headers.forEach(function (value, name) {
                xhr.setRequestHeader(name, value)
            })

            xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
        })
    }
    self.fetch.polyfill = true
    return self.fetch;
});
define('common/js/srv/request', [
    'jquery',
    'penguin/promise',
    'penguin/fetch'
], function ($, Promise, fetch) {

    var host = PROXY_HOST || '';

    host = '';

    function ObjectFormatGetUrl(url, data) {
        var num = 0;
        for (var a in data) {
            if (num === 0) {
                url += "?" + a + "=" + data[a];
            }
            else {
                url += "&" + a + "=" + data[a];
            }
            num++;
        }
        return url;
    }

    function format(data) {

        if (jQuery.type(data) === 'string') {
            return data;
        }

        if (!data) {
            return '';
        }

        var ret = '';

        for (var i in data) {

            var tmp_each = data[i];

            if ($.isArray(tmp_each) && tmp_each.length) {
                ret += i + '=';

                $.each(tmp_each, function (k, item) {
                    ret += encodeURIComponent($.trim(String(item))) + ',';
                });
                ret = ret.replace(/(.*),$/, '$1&');
                continue;
            }

            ret += i + '=' + encodeURIComponent($.trim(String(tmp_each))) + '&';
        }

        return ret.replace(/(.*)&$/, '$1');
    }

    function request(url, options) {
        var opts = $.extend({}, {
            credentials: 'include',
            method: 'GET',
            headers: {}
        }, options);

        return fetch(host + url, opts).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response;
            }
            var error = new Error(response.statusText);
            error.response = response;
            throw error;

        });
    }

    request.getJSON = function (url, data) {
        return new Promise(function (resolve, reject) {
            $.getJSON(url, data)
                .done(function (res, textStatus, jqXHR) {
                    resolve(res, textStatus, jqXHR);
                })
                .fail(function (jqXHR, textStatus, errorThrown) {
                    reject(jqXHR, textStatus, errorThrown);
                });
        });
    };

    request.post = function (url, options) {
        options = $.extend({
            credentials: 'include',
            method: 'POST',
            headers: {}
        }, options);

        // return new Promise(function(resolve, reject){
        //     $.ajax({ 
        //         type: options.method, 
        //         url: url, 
        //         contentType: options.headers['Content-Type'], 
        //         data: JSON.stringify(options.body), 
        //         dataType: "json", 
        //         success: function (response) { 
        //             resolve(response);
        //         }, 
        //         error: function (response) { 
        //             reject(response);
        //         } 
        //     }); 
        // });

        options.body = JSON.stringify(options.body);

        return fetch(host + url, options).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            var error = new Error(response.statusText);
            error.response = response;
            throw error;

        });
    };

    request.postNoString = function (url, options) {
        options = $.extend({
            credentials: 'include',
            method: 'POST',
            headers: {}
        }, options);

        return fetch(host + url, options).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            var error = new Error(response.statusText);
            error.response = response;
            throw error;

        });
    };

    request.get = function (url, options) {
        options = $.extend({
            credentials: 'include',
            method: 'GET'
            // headers: {
            //     "Content-Type": "application/json"
            // }
        }, options);

        // options.body = JSON.stringify(options.body);
        return fetch(host + url, options).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            var error = new Error(response.statusText);
            error.response = response;
            throw error;

        });
    };

    request.$post = function (url, options) {
        var body = options.body || '';
        return new Promise(function (resolve, reject) {
            $.ajax({
                type: 'POST',
                url: url,
                data: options.body,
                dataType: 'json',
                success: function (response) {
                    resolve(response);
                },
                error: function (response) {
                    reject(response);
                }
            });
        });
    };

    request.postJson = function (url, options) {
        options = $.extend({
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: {}
        }, options);

        return new Promise(function (resolve, reject) {
            $.ajax({
                type: options.method,
                url: url,
                contentType: options.headers['Content-Type'],
                data: JSON.stringify(options.body),
                dataType: "json",
                success: function (response) {
                    resolve(response);
                },
                error: function (response) {
                    reject(response);
                }
            });
        });
    };

    request.jsonp = function (url, options) {
        options = $.extend({
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
            body: {}
        }, options);

        return new Promise(function (resolve, reject) {
            $.ajax({
                type: options.method,
                url: url,
                contentType: options.headers['Content-Type'],
                data: format(options.body),
                // jsonp: 'jsoncallback', 
                dataType: "json",
                success: function (response) {
                    resolve(response);
                },
                error: function (response) {
                    reject(response);
                }
            });
        });
    },
    request.html = function (url, options) {
        options = $.extend({
            method: 'GET',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }, options);

        return new Promise(function (resolve, reject) {
            $.ajax({
                type: options.method,
                url: host + url,
                contentType: options.headers['Content-Type'],
                data: options.body,
                async: options.async !== false,
                dataType: options.dataType || 'html',
                success: function (response) {
                    resolve(response);
                },
                error: function (response) {
                    reject(response);
                }
            });
        });
    },
    request.form = function (url, options) {
        options = $.extend({
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }, options);

        if (options.method.toUpperCase() == 'GET') {
            url += "?"+ format(options.body);
            options.body = '';
        }
        else {
            options.body = format(options.body);
        }

        return fetch(host + url, options).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            }
            var error = new Error(response.statusText);
            error.response = response;
            throw error;

        });
    },
    request.formNoJson = function (url, options) {
        options = $.extend({
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }, options);

        if (options.method.toUpperCase() == 'GET') {
            url += "?"+ format(options.body);
            options.body = '';
        }
        else {
            options.body = format(options.body);
        }

        return fetch(host + url, options).then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response;
            }
            var error = new Error(response.statusText);
            error.response = response;
            throw error;

        });
    },
    request.html2 = function (url, options) {
        options = $.extend({
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
            body: {}
        }, options);

        return new Promise(function (resolve, reject) {
            $.ajax({
                type: options.method,
                url: url,
                contentType: options.headers['Content-Type'],
                data: format(options.body),
                dataType: 'html',
                success: function (response) {
                    resolve(response);
                },
                error: function (response) {
                    reject(response);
                }
            });
        });
    };

    request.serialize = format;
    request.ObjectFormatGetUrl = ObjectFormatGetUrl;
    return request;
});

define('common/js/srv/user',[
    'penguin/promise',
    'common/js/srv/request',
],function(Promise, request){
    return {
        userHistory: function(){
            return request.post("/member/cp/get_user_history");
        },
        followList: function(){
            return request.post("/member/cp/get_follow_list");
        },
        myInfo: function(){
            return request.post("/api/ajax/my_info");
        },
        logout: function(){
            return request.post("/member/logout/ajax");
        },
        addFollow:function (uid, sign) {
            return request.form("/api/video/add_follow",{
                body: {
                    user_id: uid,
                    sign: sign
                },
                method: 'POST'
            })
        },
        cancelFollow: function(uid){
            return request.post("/api/video/cancel_follow?user_id="+uid, {method:'GET'});
        },
        checkDanmuUser:function(){
            return request.get("/api/video/check_danmu_user");
        },
        getFollowNum:function(){
            return request.get("/api/ajax/get_follow_num");
        }
    }
});
define('penguin/cookie',[],function() {

    var Vars = {
        // cookie 前缀
        keypre: ''
    };

    function config(key, value) {
        if(key === 'keypre') {
            Vars.keypre = value;
        }
    }

    function get(name) {
        var result;

        name = Vars.keypre ? Vars.keypre + name : name;
        result = document.cookie.match( new RegExp("(^| )" + name + "=([^;]*)(;|$)") );

        if (result !== null) {
            return decodeURIComponent( result[2] );
        }

        return null;
    }

    function set(name, value, seconds) {
        var date,
            expires = '';

        seconds = seconds || 0;

        if (seconds && (typeof seconds === 'number') ) {
            date = new Date();
            date.setTime( date.getTime() + (seconds * 1000) );
            expires = "; expires=" + date.toGMTString();
        }

        name = Vars.keypre ? Vars.keypre + name : name;
        document.cookie = name + "=" + escape(value) + expires + "; path=/";
    }

    function remove(name) {
        var date = new Date();

        date.setTime(date.getTime() - 10000);
        set( name, '', date.toGMTString() );
    }

    return {
        get: get,
        set: set,
        remove: function(name) {
            if(typeof name === 'string') {
                remove(name);
            } else {
                for(var i=0, len=name.length; i<len; i++) {
                    remove( name[i] );
                }
            }
        },
        config: config
    };
});

/*!
 * artDialog 4.1.7
 * Date: 2013-03-03 08:04
 * http://code.google.com/p/artdialog/
 * (c) 2009-2012 TangBin, http://www.planeArt.cn
 *
 * This is licensed under the GNU LGPL, version 2.1 or later.
 * For details, see: http://creativecommons.org/licenses/LGPL/2.1/
 */
(function(e,t,n){e.noop=e.noop||function(){};var r,i,s,o,u=0,a=e(t),f=e(document),l=e("html"),c=document.documentElement,h=t.VBArray&&!t.XMLHttpRequest,p="createTouch"in document&&!("onmousemove"in c)||/(iPhone|iPad|iPod)/i.test(navigator.userAgent),d="artDialog"+ +(new Date),v=function(t,i,s){t=t||{};if(typeof t=="string"||t.nodeType===1)t={content:t,fixed:!p};var o,a=v.defaults,f=t.follow=this.nodeType===1&&this||t.follow;for(var l in a)t[l]===n&&(t[l]=a[l]);return e.each({ok:"yesFn",cancel:"noFn",close:"closeFn",init:"initFn",okVal:"yesText",cancelVal:"noText"},function(e,r){t[e]=t[e]!==n?t[e]:t[r]}),typeof f=="string"&&(f=e(f)[0]),t.id=f&&f[d+"follow"]||t.id||d+u,o=v.list[t.id],f&&o?o.follow(f).zIndex().focus():o?o.zIndex().focus():(p&&(t.fixed=!1),e.isArray(t.button)||(t.button=t.button?[t.button]:[]),i!==n&&(t.ok=i),s!==n&&(t.cancel=s),t.ok&&t.button.push({name:t.okVal,callback:t.ok,focus:!0}),t.cancel&&t.button.push({name:t.cancelVal,callback:t.cancel}),v.defaults.zIndex=t.zIndex,u++,v.list[t.id]=r?r._init(t):new v.fn._init(t))};v.fn=v.prototype={version:"4.1.7",closed:!0,_init:function(e){var n=this,i,s=e.icon,o=s&&(h?{png:"icons/"+s+".png"}:{backgroundImage:"url('"+e.path+"/skins/icons/"+s+".png')"});return n.closed=!1,n.config=e,n.DOM=i=n.DOM||n._getDOM(),i.wrap.addClass(e.skin),i.close[e.cancel===!1?"hide":"show"](),i.icon[0].style.display=s?"":"none",i.iconBg.css(o||{background:"none"}),i.se.css("cursor",e.resize?"se-resize":"auto"),i.title.css("cursor",e.drag?"move":"auto"),i.content.css("padding",e.padding),n[e.show?"show":"hide"](!0),n.button(e.button).title(e.title).content(e.content,!0).size(e.width,e.height).time(e.time),e.follow?n.follow(e.follow):n.position(e.left,e.top),n.zIndex().focus(),e.lock&&n.lock(),n._addEvent(),n._ie6PngFix(),r=null,e.init&&e.init.call(n,t),n},content:function(e){var t,r,i,s,o=this,u=o.DOM,a=u.wrap[0],f=a.offsetWidth,l=a.offsetHeight,c=parseInt(a.style.left),h=parseInt(a.style.top),p=a.style.width,d=u.content,v=d[0];return o._elemBack&&o._elemBack(),a.style.width="auto",e===n?v:(typeof e=="string"?d.html(e):e&&e.nodeType===1&&(s=e.style.display,t=e.previousSibling,r=e.nextSibling,i=e.parentNode,o._elemBack=function(){t&&t.parentNode?t.parentNode.insertBefore(e,t.nextSibling):r&&r.parentNode?r.parentNode.insertBefore(e,r):i&&i.appendChild(e),e.style.display=s,o._elemBack=null},d.html(""),v.appendChild(e),e.style.display="block"),arguments[1]||(o.config.follow?o.follow(o.config.follow):(f=a.offsetWidth-f,l=a.offsetHeight-l,c-=f/2,h-=l/2,a.style.left=Math.max(c,0)+"px",a.style.top=Math.max(h,0)+"px"),p&&p!=="auto"&&(a.style.width=a.offsetWidth+"px"),o._autoPositionType()),o._ie6SelectFix(),o._runScript(v),o)},title:function(e){var t=this.DOM,r=t.wrap,i=t.title,s="aui_state_noTitle";return e===n?i[0]:(e===!1?(i.hide().html(""),r.addClass(s)):(i.show().html(e||""),r.removeClass(s)),this)},position:function(e,t){var r=this,i=r.config,s=r.DOM.wrap[0],o=h?!1:i.fixed,u=h&&r.config.fixed,l=f.scrollLeft(),c=f.scrollTop(),p=o?0:l,d=o?0:c,v=a.width(),m=a.height(),g=s.offsetWidth,y=s.offsetHeight,b=s.style;if(e||e===0)r._left=e.toString().indexOf("%")!==-1?e:null,e=r._toNumber(e,v-g),typeof e=="number"?(e=u?e+=l:e+p,b.left=Math.max(e,p)+"px"):typeof e=="string"&&(b.left=e);if(t||t===0)r._top=t.toString().indexOf("%")!==-1?t:null,t=r._toNumber(t,m-y),typeof t=="number"?(t=u?t+=c:t+d,b.top=Math.max(t,d)+"px"):typeof t=="string"&&(b.top=t);return e!==n&&t!==n&&(r._follow=null,r._autoPositionType()),r},size:function(e,t){var n,r,i,s,o=this,u=o.config,f=o.DOM,l=f.wrap,c=f.main,h=l[0].style,p=c[0].style;return e&&(o._width=e.toString().indexOf("%")!==-1?e:null,n=a.width()-l[0].offsetWidth+c[0].offsetWidth,i=o._toNumber(e,n),e=i,typeof e=="number"?(h.width="auto",p.width=Math.max(o.config.minWidth,e)+"px",h.width=l[0].offsetWidth+"px"):typeof e=="string"&&(p.width=e,e==="auto"&&l.css("width","auto"))),t&&(o._height=t.toString().indexOf("%")!==-1?t:null,r=a.height()-l[0].offsetHeight+c[0].offsetHeight,s=o._toNumber(t,r),t=s,typeof t=="number"?p.height=Math.max(o.config.minHeight,t)+"px":typeof t=="string"&&(p.height=t)),o._ie6SelectFix(),o},follow:function(t){var n,r=this,i=r.config;if(typeof t=="string"||t&&t.nodeType===1)n=e(t),t=n[0];if(!t||!t.offsetWidth&&!t.offsetHeight)return r.position(r._left,r._top);var s=d+"follow",o=a.width(),u=a.height(),l=f.scrollLeft(),c=f.scrollTop(),p=n.offset(),v=t.offsetWidth,m=t.offsetHeight,g=h?!1:i.fixed,y=g?p.left-l:p.left,b=g?p.top-c:p.top,w=r.DOM.wrap[0],E=w.style,S=w.offsetWidth,x=w.offsetHeight,T=y-(S-v)/2,N=b+m,C=g?0:l,k=g?0:c;return T=T<C?y:T+S>o&&y-S>C?y-S+v:T,N=N+x>u+k&&b-x>k?b-x:N,E.left=T+"px",E.top=N+"px",r._follow&&r._follow.removeAttribute(s),r._follow=t,t[s]=i.id,r._autoPositionType(),r},button:function(){var t=this,r=arguments,i=t.DOM,s=i.buttons,o=s[0],u="aui_state_highlight",a=t._listeners=t._listeners||{},f=e.isArray(r[0])?r[0]:[].slice.call(r);return r[0]===n?o:(e.each(f,function(n,r){var i=r.name,s=!a[i],f=s?document.createElement("button"):a[i].elem;a[i]||(a[i]={}),r.callback&&(a[i].callback=r.callback),r.className&&(f.className=r.className),r.focus&&(t._focus&&t._focus.removeClass(u),t._focus=e(f).addClass(u),t.focus()),f.setAttribute("type","button"),f[d+"callback"]=i,f.disabled=!!r.disabled,s&&(f.innerHTML=i,a[i].elem=f,o.appendChild(f))}),s[0].style.display=f.length?"":"none",t._ie6SelectFix(),t)},show:function(){return this.DOM.wrap.show(),!arguments[0]&&this._lockMaskWrap&&this._lockMaskWrap.show(),this},hide:function(){return this.DOM.wrap.hide(),!arguments[0]&&this._lockMaskWrap&&this._lockMaskWrap.hide(),this},close:function(){if(this.closed)return this;var e=this,n=e.DOM,i=n.wrap,s=v.list,o=e.config.close,u=e.config.follow;e.time();if(typeof o=="function"&&o.call(e,t)===!1)return e;e.unlock(),e._elemBack&&e._elemBack(),i[0].className=i[0].style.cssText="",n.title.html(""),n.content.html(""),n.buttons.html(""),v.focus===e&&(v.focus=null),u&&u.removeAttribute(d+"follow"),delete s[e.config.id],e._removeEvent(),e.hide(!0)._setAbsolute();for(var a in e)e.hasOwnProperty(a)&&a!=="DOM"&&delete e[a];return r?i.remove():r=e,e},time:function(e){var t=this,n=t.config.cancelVal,r=t._timer;return r&&clearTimeout(r),e&&(t._timer=setTimeout(function(){t._click(n)},1e3*e)),t},focus:function(){try{if(this.config.focus){var e=this._focus&&this._focus[0]||this.DOM.close[0];e&&e.focus()}}catch(t){}return this},zIndex:function(){var e=this,t=e.DOM,n=t.wrap,r=v.focus,i=v.defaults.zIndex++;return n.css("zIndex",i),e._lockMask&&e._lockMask.css("zIndex",i-1),r&&r.DOM.wrap.removeClass("aui_state_focus"),v.focus=e,n.addClass("aui_state_focus"),e},lock:function(){if(this._lock)return this;var t=this,n=v.defaults.zIndex-1,r=t.DOM.wrap,i=t.config,s=f.width(),o=f.height(),u=t._lockMaskWrap||e(document.body.appendChild(document.createElement("div"))),a=t._lockMask||e(u[0].appendChild(document.createElement("div"))),l="(document).documentElement",c=p?"width:"+s+"px;height:"+o+"px":"width:100%;height:100%",d=h?"position:absolute;left:expression("+l+".scrollLeft);top:expression("+l+".scrollTop);width:expression("+l+".clientWidth);height:expression("+l+".clientHeight)":"";return t.zIndex(),r.addClass("aui_state_lock"),u[0].style.cssText=c+";position:fixed;z-index:"+n+";top:0;left:0;overflow:hidden;"+d,a[0].style.cssText="height:100%;background:"+i.background+";filter:alpha(opacity=0);opacity:0",h&&a.html('<iframe src="about:blank" style="width:100%;height:100%;position:absolute;top:0;left:0;z-index:-1;filter:alpha(opacity=0)"></iframe>'),a.stop(),a.bind("click",function(){t._reset()}).bind("dblclick",function(){t._click(t.config.cancelVal)}),i.duration===0?a.css({opacity:i.opacity}):a.animate({opacity:i.opacity},i.duration),t._lockMaskWrap=u,t._lockMask=a,t._lock=!0,t},unlock:function(){var e=this,t=e._lockMaskWrap,n=e._lockMask;if(!e._lock)return e;var i=t[0].style,s=function(){h&&(i.removeExpression("width"),i.removeExpression("height"),i.removeExpression("left"),i.removeExpression("top")),i.cssText="display:none",r&&t.remove()};return n.stop().unbind(),e.DOM.wrap.removeClass("aui_state_lock"),e.config.duration?n.animate({opacity:0},e.config.duration,s):s(),e._lock=!1,e},_getDOM:function(){var t=document.createElement("div"),n=document.body;t.style.cssText="position:absolute;left:0;top:0",t.innerHTML=v._templates,n.insertBefore(t,n.firstChild);var r,i=0,s={wrap:e(t)},o=t.getElementsByTagName("*"),u=o.length;for(;i<u;i++)r=o[i].className.split("aui_")[1],r&&(s[r]=e(o[i]));return s},_toNumber:function(e,t){if(!e&&e!==0||typeof e=="number")return e;var n=e.length-1;return e.lastIndexOf("px")===n?e=parseInt(e):e.lastIndexOf("%")===n&&(e=parseInt(t*e.split("%")[0]/100)),e},_ie6PngFix:h?function(){var e=0,t,n,r,i,s=v.defaults.path+"/skins/",o=this.DOM.wrap[0].getElementsByTagName("*");for(;e<o.length;e++)t=o[e],n=t.currentStyle.png,n&&(r=s+n,i=t.runtimeStyle,i.backgroundImage="none",i.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+r+"',sizingMethod='crop')")}:e.noop,_ie6SelectFix:h?function(){var e=this.DOM.wrap,t=e[0],n=d+"iframeMask",r=e[n],i=t.offsetWidth,s=t.offsetHeight;i+="px",s+="px",r?(r.style.width=i,r.style.height=s):(r=t.appendChild(document.createElement("iframe")),e[n]=r,r.src="about:blank",r.style.cssText="position:absolute;z-index:-1;left:0;top:0;filter:alpha(opacity=0);width:"+i+";height:"+s)}:e.noop,_runScript:function(e){var t,n=0,r=0,i=e.getElementsByTagName("script"),s=i.length,o=[];for(;n<s;n++)i[n].type==="text/dialog"&&(o[r]=i[n].innerHTML,r++);o.length&&(o=o.join(""),t=new Function(o),t.call(this))},_autoPositionType:function(){this[this.config.fixed?"_setFixed":"_setAbsolute"]()},_setFixed:function(){return h&&e(function(){var t="backgroundAttachment";l.css(t)!=="fixed"&&e("body").css(t)!=="fixed"&&l.css({zoom:1,backgroundImage:"url(about:blank)",backgroundAttachment:"fixed"})}),function(){var e=this.DOM.wrap,t=e[0].style;if(h){var n=parseInt(e.css("left")),r=parseInt(e.css("top")),i=f.scrollLeft(),s=f.scrollTop(),o="(document.documentElement)";this._setAbsolute(),t.setExpression("left","eval("+o+".scrollLeft + "+(n-i)+') + "px"'),t.setExpression("top","eval("+o+".scrollTop + "+(r-s)+') + "px"')}else t.position="fixed"}}(),_setAbsolute:function(){var e=this.DOM.wrap[0].style;h&&(e.removeExpression("left"),e.removeExpression("top")),e.position="absolute"},_click:function(e){var n=this,r=n._listeners[e]&&n._listeners[e].callback;return typeof r!="function"||r.call(n,t)!==!1?n.close():n},_reset:function(e){var t,n=this,r=n._winSize||a.width()*a.height(),i=n._follow,s=n._width,o=n._height,u=n._left,f=n._top;if(e){t=n._winSize=a.width()*a.height();if(r===t)return}(s||o)&&n.size(s,o),i?n.follow(i):(u||f)&&n.position(u,f)},_addEvent:function(){var e,n=this,r=n.config,i="CollectGarbage"in t,s=n.DOM;n._winResize=function(){e&&clearTimeout(e),e=setTimeout(function(){n._reset(i)},40)},a.bind("resize",n._winResize),s.wrap.bind("click",function(e){var t=e.target,i;if(t.disabled)return!1;if(t===s.close[0])return n._click(r.cancelVal),!1;i=t[d+"callback"],i&&n._click(i),n._ie6SelectFix()}).bind("mousedown",function(){n.zIndex()})},_removeEvent:function(){var e=this,t=e.DOM;t.wrap.unbind(),a.unbind("resize",e._winResize)}},v.fn._init.prototype=v.fn,e.fn.dialog=e.fn.artDialog=function(){var e=arguments;return this[this.live?"live":"bind"]("click",function(){return v.apply(this,e),!1}),this},v.focus=null,v.get=function(e){return e===n?v.list:v.list[e]},v.list={},f.bind("keydown",function(e){var t=e.target,n=t.nodeName,r=/^INPUT|TEXTAREA$/,i=v.focus,s=e.keyCode;if(!i||!i.config.esc||r.test(n))return;s===27&&i._click(i.config.cancelVal)}),o=t._artDialog_path||function(e,t,n){for(t in e)e[t].src&&e[t].src.indexOf("artDialog")!==-1&&(n=e[t]);return i=n||e[e.length-1],n=i.src.replace(/\\/g,"/"),n.lastIndexOf("/")<0?".":n.substring(0,n.lastIndexOf("/"))}(document.getElementsByTagName("script")),s=i.src.split("skin=")[1];if(s){var m=document.createElement("link");m.rel="stylesheet",m.href=o+"/skins/"+s+".css?"+v.fn.version,i.parentNode.insertBefore(m,i)}a.bind("load",function(){setTimeout(function(){if(u)return;v({left:"-9999em",time:9,fixed:!1,lock:!1,focus:!1})},150)});try{document.execCommand("BackgroundImageCache",!1,!0)}catch(g){}v._templates='<div class="aui_outer"><table class="aui_border"><tbody><tr><td class="aui_nw"></td><td class="aui_n"></td><td class="aui_ne"></td></tr><tr><td class="aui_w"></td><td class="aui_c"><div class="aui_inner"><table class="aui_dialog"><tbody><tr><td colspan="2" class="aui_header"><div class="aui_titleBar"><div class="aui_title"></div><a class="aui_close" href="javascript:/*artDialog*/;">\u00d7</a></div></td></tr><tr><td class="aui_icon"><div class="aui_iconBg"></div></td><td class="aui_main"><div class="aui_content"></div></td></tr><tr><td colspan="2" class="aui_footer"><div class="aui_buttons"></div></td></tr></tbody></table></div></td><td class="aui_e"></td></tr><tr><td class="aui_sw"></td><td class="aui_s"></td><td class="aui_se"></td></tr></tbody></table></div>',v.defaults={content:'<div class="aui_loading"><span>loading..</span></div>',title:"提示",button:null,ok:null,cancel:null,init:null,close:null,okVal:"\u786e\u5b9a",cancelVal:"\u53d6\u6d88",width:"auto",height:"auto",minWidth:96,minHeight:32,padding:"20px 25px",skin:"",icon:null,time:null,esc:!0,focus:!0,show:!0,follow:null,path:o,lock:!1,background:"#000",opacity:.7,duration:300,fixed:!1,left:"50%",top:"38.2%",zIndex:1987,resize:!0,drag:!0},t.artDialog=e.dialog=e.artDialog=v})(this.art||this.jQuery&&(this.art=jQuery),this),function(e){var t,n,r=e(window),i=e(document),s=document.documentElement,o=!("minWidth"in s.style),u="onlosecapture"in s,a="setCapture"in s;artDialog.dragEvent=function(){var e=this,t=function(t){var n=e[t];e[t]=function(){return n.apply(e,arguments)}};t("start"),t("move"),t("end")},artDialog.dragEvent.prototype={onstart:e.noop,start:function(e){return i.bind("mousemove",this.move).bind("mouseup",this.end),this._sClientX=e.clientX,this._sClientY=e.clientY,this.onstart(e.clientX,e.clientY),!1},onmove:e.noop,move:function(e){return this._mClientX=e.clientX,this._mClientY=e.clientY,this.onmove(e.clientX-this._sClientX,e.clientY-this._sClientY),!1},onend:e.noop,end:function(e){return i.unbind("mousemove",this.move).unbind("mouseup",this.end),this.onend(e.clientX,e.clientY),!1}},n=function(e){var n,s,f,l,c,h,p=artDialog.focus,d=p.DOM,v=d.wrap,m=d.title,g=d.main,y="getSelection"in window?function(){window.getSelection().removeAllRanges()}:function(){try{document.selection.empty()}catch(e){}};t.onstart=function(e,n){h?(s=g[0].offsetWidth,f=g[0].offsetHeight):(l=v[0].offsetLeft,c=v[0].offsetTop),i.bind("dblclick",t.end),!o&&u?m.bind("losecapture",t.end):r.bind("blur",t.end),a&&m[0].setCapture(),v.addClass("aui_state_drag"),p.focus()},t.onmove=function(e,t){if(h){var r=v[0].style,i=g[0].style,o=e+s,u=t+f;r.width="auto",i.width=Math.max(0,o)+"px",r.width=v[0].offsetWidth+"px",i.height=Math.max(0,u)+"px"}else{var i=v[0].style,a=Math.max(n.minX,Math.min(n.maxX,e+l)),d=Math.max(n.minY,Math.min(n.maxY,t+c));i.left=a+"px",i.top=d+"px"}y(),p._ie6SelectFix()},t.onend=function(e,n){i.unbind("dblclick",t.end),!o&&u?m.unbind("losecapture",t.end):r.unbind("blur",t.end),a&&m[0].releaseCapture(),o&&!p.closed&&p._autoPositionType(),v.removeClass("aui_state_drag")},h=e.target===d.se[0]?!0:!1,n=function(){var e,t,n=p.DOM.wrap[0],s=n.style.position==="fixed",o=n.offsetWidth,u=n.offsetHeight,a=r.width(),f=r.height(),l=s?0:i.scrollLeft(),c=s?0:i.scrollTop(),e=a-o+l;return t=f-u+c,{minX:l,minY:c,maxX:e,maxY:t}}(),t.start(e)},i.bind("mousedown",function(e){var r=artDialog.focus;if(!r)return;var i=e.target,s=r.config,o=r.DOM;if(s.drag!==!1&&i===o.title[0]||s.resize!==!1&&i===o.se[0])return t=t||new artDialog.dragEvent,n(e),!1})}(this.art||this.jQuery&&(this.art=jQuery));
/*!
 * artDialog iframeTools
 * Date: 2011-12-08 1:32
 * http://code.google.com/p/artdialog/
 * (c) 2009-2011 TangBin, http://www.planeArt.cn
 *
 * This is licensed under the GNU LGPL, version 2.1 or later.
 * For details, see: http://creativecommons.org/licenses/LGPL/2.1/
 */
;(function($,window,artDialog,undefined){var _topDialog,_proxyDialog,_zIndex,_data='@ARTDIALOG.DATA',_open='@ARTDIALOG.OPEN',_opener='@ARTDIALOG.OPENER',_winName=window.name=window.name||'@ARTDIALOG.WINNAME'+ +new Date,_isIE6=window.VBArray&&!window.XMLHttpRequest;$(function(){!window.jQuery&&document.compatMode==='BackCompat'&&alert('artDialog Error: document.compatMode === "BackCompat"')});var _top=artDialog.top=function(){var top=window,test=function(name){try{var doc=window[name].document;doc.getElementsByTagName;}catch(e){return false};return window[name].artDialog&&doc.getElementsByTagName('frameset').length===0};if(test('top')){top=window.top}else if(test('parent')){top=window.parent};return top}();artDialog.parent=_top;_topDialog=_top.artDialog;_zIndex=function(){return _topDialog.defaults.zIndex};artDialog.data=function(name,value){var top=artDialog.top,cache=top[_data]||{};top[_data]=cache;if(value!==undefined){cache[name]=value}else{return cache[name]};return cache};artDialog.removeData=function(name){var cache=artDialog.top[_data];if(cache&&cache[name])delete cache[name]};artDialog.through=_proxyDialog=function(){var api=_topDialog.apply(this,arguments);if(_top!==window)artDialog.list[api.config.id]=api;return api};_top!==window&&$(window).bind('unload',function(){var list=artDialog.list,config;for(var i in list){if(list[i]){config=list[i].config;if(config)config.duration=0;list[i].close();}}});artDialog.open=function(url,options,cache){options=options||{};var api,DOM,$content,$main,iframe,$iframe,$idoc,iwin,ibody,top=artDialog.top,initCss='position:absolute;left:-9999em;top:-9999em;border:none 0;background:transparent',loadCss='width:100%;height:100%;border:none 0';if(cache===false){var ts=+new Date,ret=url.replace(/([?&])_=[^&]*/,"$1_="+ts);url=ret+((ret===url)?(/\?/.test(url)?"&":"?")+"_="+ts:"")};var load=function(){var iWidth,iHeight,loading=DOM.content.find('.aui_loading'),aConfig=api.config;$content.addClass('aui_state_full');loading&&loading.hide();try{iwin=iframe.contentWindow;$idoc=$(iwin.document);ibody=iwin.document.body}catch(e){iframe.style.cssText=loadCss;aConfig.follow?api.follow(aConfig.follow):api.position(aConfig.left,aConfig.top);options.init&&options.init.call(api,iwin,top);options.init=null;return};iWidth=aConfig.width==='auto'?$idoc.width()+(_isIE6?0:parseInt($(ibody).css('marginLeft'))):aConfig.width;iHeight=aConfig.height==='auto'?$idoc.height():aConfig.height;setTimeout(function(){iframe.style.cssText=loadCss},0);api.size(iWidth,iHeight);aConfig.follow?api.follow(aConfig.follow):api.position(aConfig.left,aConfig.top);options.init&&options.init.call(api,iwin,top);options.init=null};var config={zIndex:_zIndex(),init:function(){api=this;DOM=api.DOM;$main=DOM.main;$content=DOM.content;iframe=api.iframe=top.document.createElement('iframe');iframe.src=url;iframe.name='Open'+api.config.id;iframe.style.cssText=initCss;iframe.setAttribute('frameborder',0,0);iframe.setAttribute('allowTransparency',true);$iframe=$(iframe);api.content().appendChild(iframe);iwin=iframe.contentWindow;try{iwin.name=iframe.name;artDialog.data(iframe.name+_open,api);artDialog.data(iframe.name+_opener,window)}catch(e){};$iframe.bind('load',load)},close:function(){$iframe.css('display','none').unbind('load',load);if(options.close&&options.close.call(this,iframe.contentWindow,top)===false){return false};$content.removeClass('aui_state_full');$iframe[0].src='about:blank';$iframe.remove();try{artDialog.removeData(iframe.name+_open);artDialog.removeData(iframe.name+_opener)}catch(e){}}};if(typeof options.ok==='function')config.ok=function(){return options.ok.call(api,iframe.contentWindow,top)};if(typeof options.cancel==='function')config.cancel=function(){return options.cancel.call(api,iframe.contentWindow,top)};delete options.content;for(var i in options){if(config[i]===undefined)config[i]=options[i]};return _proxyDialog(config)};artDialog.open.api=artDialog.data(_winName+_open);artDialog.opener=artDialog.data(_winName+_opener)||window;artDialog.open.origin=artDialog.opener;artDialog.close=function(){var api=artDialog.data(_winName+_open);api&&api.close();return false};_top!=window&&$(document).bind('mousedown',function(){var api=artDialog.open.api;api&&api.zIndex()});artDialog.load=function(url,options,cache){cache=cache||false;var opt=options||{};var config={zIndex:_zIndex(),init:function(here){var api=this,aConfig=api.config;$.ajax({url:url,success:function(content){api.content(content);opt.init&&opt.init.call(api,here)},cache:cache})}};delete options.content;for(var i in opt){if(config[i]===undefined)config[i]=opt[i]};return _proxyDialog(config)};artDialog.alert=function(content,callback){return _proxyDialog({id:'Alert',zIndex:_zIndex(),icon:'warning',fixed:true,lock:true,content:content,ok:true,close:callback})};artDialog.confirm=function(content,yes,no){return _proxyDialog({id:'Confirm',zIndex:_zIndex(),icon:'question',fixed:true,lock:true,opacity:.7,content:content,ok:function(here){return yes.call(this,here)},cancel:function(here){return no&&no.call(this,here)}})};artDialog.prompt=function(content,yes,value){value=value||'';var input;return _proxyDialog({id:'Prompt',zIndex:_zIndex(),icon:'question',fixed:true,lock:true,opacity:.7,content:['<div style="margin-bottom:5px;font-size:12px">',content,'</div>','<div>','<input value="',value,'" style="width:18em;padding:6px 4px" />','</div>'].join(''),init:function(){input=this.DOM.content.find('input')[0];input.select();input.focus()},ok:function(here){return yes&&yes.call(this,input.value,here)},cancel:true})};artDialog.tips=function(content,time){return _proxyDialog({id:'Tips',zIndex:_zIndex(),title:false,cancel:false,fixed:true,lock:false}).content('<div style="padding: 0 1em;">'+content+'</div>').time(time||1.5)};artDialog.tips_black=function(content,time){return _proxyDialog({id:'Tips',zIndex:_zIndex(),title:false,cancel:false,fixed:true,lock:false,padding:0,margin:0}).content('<div class="infodrmation">'+content+'</div>').time(time||3)};$(function(){var event=artDialog.dragEvent;if(!event)return;var $window=$(window),$document=$(document),positionType=_isIE6?'absolute':'fixed',dragEvent=event.prototype,mask=document.createElement('div'),style=mask.style;style.cssText='display:none;position:'+positionType+';left:0;top:0;width:100%;height:100%;'+'cursor:move;filter:alpha(opacity=0);opacity:0;background:#FFF';document.body.appendChild(mask);dragEvent._start=dragEvent.start;dragEvent._end=dragEvent.end;dragEvent.start=function(){var DOM=artDialog.focus.DOM,main=DOM.main[0],iframe=DOM.content[0].getElementsByTagName('iframe')[0];dragEvent._start.apply(this,arguments);style.display='block';style.zIndex=artDialog.defaults.zIndex+3;if(positionType==='absolute'){style.width=$window.width()+'px';style.height=$window.height()+'px';style.left=$document.scrollLeft()+'px';style.top=$document.scrollTop()+'px'};if(iframe&&main.offsetWidth*main.offsetHeight>307200){main.style.visibility='hidden'}};dragEvent.end=function(){var dialog=artDialog.focus;dragEvent._end.apply(this,arguments);style.display='none';if(dialog)dialog.DOM.main[0].style.visibility='visible'}})})(this.art||this.jQuery,this,this.artDialog);
define('common/js/userinfo/userinfo', [
    'jquery',
    'penguin/cookie',
    'common/third/artDialog',
    'common/third/iframeTools'
], function ($, cookie) {
    var api = {
        userInfo: function () {
            return $.ajax({
                url: '/api/ajax/my_info',
                dataType: 'json',
                type: 'POST'
            });
        }
    };

    var Undef;

    var userinfo = {
        backList: [],
        init: function () {
            if (this.initialized) {
                return this;
            }
            // this.initData();
            return this;
        },
        loading: false,
        initData: function () {
            var _this = this;

            if (_this.loading) {
                return;
            }
            this.userInfoData = null;
            _this.loading = true;
            api.userInfo().done(function (data) {
                if (data.error === Undef) {
                    _this.loading = false;
                    _this.userInfoData = data;
                    _this.initialized = true;
                    _this.runCallback();
                }
                else if (data.error === -1) {
                    cookie.remove([
                        'qie_auth', 'qie_auth_wl', 'qie_uid',
                        'qie_nickname', 'qie_username',
                        'qie_own_room', 'qie_groupid',
                        'qie_notification', 'qie_phonestatus'
                    ]);
                    $.dialog.tips_black('登录失效，请重新登录！', 5);
                    setTimeout(function () {
                        location.reload();
                    }, 5000);
                }
            });
            return this;
        },
        updateUserInfoForce: function (cb) {
            var _this = this;
            api.userInfo().done(function (data) {
                if (data.error === Undef) {
                    _this.userInfoData = data;
                    cb && cb();
                }
                else if (data.error === -1) {
                    cookie.remove([
                        'qie_auth', 'qie_auth_wl', 'qie_uid',
                        'qie_nickname', 'qie_username',
                        'qie_own_room', 'qie_groupid',
                        'qie_notification', 'qie_phonestatus'
                    ]);
                    $.dialog.tips_black('登录失效，请重新登录！', 5);
                    setTimeout(function () {
                        location.reload();
                    }, 5000);
                }
            });

            return this;
        },
        runCallback: function () {
            for (var i = 0, length = this.backList.length; i < length; i++) {
                this.backList[i] && this.backList[i](this.userInfoData);
            }
            return this;
        },
        then: function (callback) {
            if (cookie.get('qie_uid')) {
                if (this.initialized) {
                    callback && callback(this.userInfoData);
                }
                else {
                    this.backList.push(callback);
                    this.initData();
                }
            }
            return this;
        }
    };

    return userinfo.init();
});

define('penguin/class', [],function() {
var toString = {}.toString,
        isFunction = function( it ){
            return toString.call( it ) === '[object Function]';
        },
        mixin = function( target, src ){
            var val, name;

            for ( name in src ){
                val = src[name];
                if ( val !== undefined ){
                    target[name] = val;
                }
            }

            return target;
        };

    function Proxy(){}

    var makeClass = function( parent, o ){
        if ( !o ){
            o = parent;
            parent = null;
        }

        var Klass = function(){

            var init = this.initialize || this.init;
            isFunction( init ) && init.apply( this, arguments );
        };

        var proto = {};

        if ( parent ){
            Proxy.prototype = Klass.superclass = isFunction( parent ) ? parent.prototype : parent;
            proto = new Proxy();
        }

        Klass.prototype = mixin( proto, o );
        Klass.prototype.constructor = Klass;

        return Klass;
    };

    return makeClass;

});

define('penguin/lang', [
    'jquery',
    'penguin/class'
], function($, Class) {
    var safec = function(fn, isPrint) {
        try {
            fn();
        } catch(e) {
            if(isPrint) {
                console.error(e);
            }
        }
    };

    // 遍历
    var each = function(o, next) {
        if( {}.toString.call(o) === '[object Object]' ) {
            for(var p in o) {
                if( next( o[p], p ) === false ) {
                    break;
                }
            }
        } else {
            for(var i=0, len=o.length; i<len; i++) {
                if( next( o[i], i ) === false ) {
                    break;
                }
            }
        }
    };

    // 合并对象
    var mixin = function(target){
        var val, name, src,
            srcs = [].slice.call(arguments, 1);

        each(srcs, function(o, i) {
            src = o.prototype || o;

            for ( name in src ){
                val = src[name];
                if ( val !== undefined ){
                    target[name] = val;
                }
            }
        });

        return target;
    };

    // 高性能时钟循环器
    var interval = function(fn, step, right) {
        setTimeout(function() {
    		if( fn() !== false ) {
    			interval(fn, step);
    		}
    	}, step);

    	if(right === true) {
    		fn();
    	}
    };

    // 字符串工具
    var string = {
        // 通过参数的方式拼接字符串
        join: function() {
            return [].slice.call(arguments).join('');
        },

        // 通过占位符格式化字符串
        format: function(s) {
            var args = [].slice.call(arguments, 1);

            return s.replace(/{(\d+)}/g, function(match, number) { 
                return typeof args[number] != 'undefined' ? args[number] : match;
            });
        },

        // 获取字符串字节长度
        bytelen: function(s) {
            var len = s.length,
                reg = /[^\x00-\xff]/ig;

            if( s.match(reg) != null ) {
                len = len + s.match(reg).length * 2;
            }

            return len;
        }
    };

    // 浮点计算工具
    var floatMath = {
        //加法计算
        accAdd: function(arg1, arg2, num) {
            var r1 = 0, r2 = 0, m; 

            try {
                r1 = arg1.toString().split(".")[1].length;
            } catch(e) {} 

            try {
                r2 = arg2.toString().split(".")[1].length;
            } catch(e) {}  

            m = Math.pow(10, Math.max(r1, r2));

            // 默认保留2位小数
            if (typeof(num)=="undefined" || num < 1) {
                var num = 2;
            }

            return ((arg1 * m + arg2 * m) / m).toFixed(num);
        },
 
        //减法计算
        Subtr: function(arg1, arg2, num) {  
            var r1 = 0, r2 = 0, m;  

            try {
                r1 = arg1.toString().split(".")[1].length;
            } catch(e) {}

            try {
                r2 = arg2.toString().split(".")[1].length;
            } catch(e) {}

            m = Math.pow(10, Math.max(r1, r2));

            // 默认保留2位小数
            if (typeof(num)=="undefined" || num < 1) {
                var num = 2;
            }

            return ((arg1 * m - arg2 * m) / m).toFixed(num);  
        },

        //除法函数  
        accDiv: function(arg1, arg2) {   
            var t1 = 0, t2 = 0,
                s1 = arg1.toString(), 
                s2 = arg2.toString(); 

            try {
                t1 = s1.split(".")[1].length;
            } catch(e) {}

            try {
                t2 = s2.split(".")[1].length;
            } catch(e) {}  

            return (Number(s1.replace(".", "")) / Number(s2.replace(".", ""))) * Math.pow(10, t2 - t1);    
        },
          
        //乘法函数  
        accMul: function(arg1, arg2) {   
            var m = 0, 
                s1 = arg1.toString(), 
                s2 = arg2.toString(); 

            try {
                m += s1.split(".")[1].length;
            } catch(e) {}

            try { 
                m += s2.split(".")[1].length;
            } catch(e) {}  

            return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);  
        }
    };

    // num-万-字处理 a为要处理的数字,b为保留的小数位数
    var calNumber = function(a, b) {
        if (a < 10000) {
            return a > 0 ? a : 0;
        }
        else {
            return (Math.round(a / 10000 * 100)/100).toFixed(b > 1 ? b : 1) + "万" ;
        }
    };

    var getByteLen = function(val) {
      var len = 0;
      for (var i = 0; i < val.length; i++) {
        var a = val.charAt(i);
        if (a.match(/[^\x00-\xff]/ig) != null) {
          len += 2;
        }
        else {
          len += 1;
        }
      }
      return len;
    };

    var getStrLen = function(val) {
      var len = 0;
      for (var i = 0; i < val.length; i++) {
        var a = val.charAt(i);
        if (a.match(/[^\x00-\xff]/ig) != null) {
          len += 1;
        }
        len += 1;
      }
      return len;
    };

    // ie浏览器版本判断
    var getBrowserV = function(num) {
        var DEFAULT_VERSION = num || 8;
        var ua = navigator.userAgent.toLowerCase();
        var isIE = ua.indexOf("msie")>-1;
        var ieVersion;

        if(isIE){
            ieVersion =  ua.match(/msie ([\d.]+)/)[1];

            console.log("ieVersion=" + (ieVersion | 0));
            
            if((ieVersion | 0) <= DEFAULT_VERSION ){
                return false;
            }
        }

        return true;
    };

    // 判断浏览器是否支持flash(老版IE可能会报错)
    var isInstallFlash = function() {
        try {
            if (typeof window.ActiveXObject != "undefined") {
                return new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            }
            else {
                return navigator.plugins['Shockwave Flash'];
            }
        }
        catch(e) {
            return false;
        }
    };

    // api
    return {
        safec: safec,
        mixin: mixin,
        each: each,
        interval: interval,
        string: string,
        floatMath: floatMath,
        calNumber: calNumber,
        getByteLen: getByteLen,
        getStrLen: getStrLen,
        getBrowserV: getBrowserV,
        isInstallFlash: isInstallFlash
    }
});

/*!
 * artTemplate - Template Engine
 * https://github.com/aui/artTemplate
 * Released under the MIT, BSD, and GPL Licenses
 */

!(function () {


/**
 * 模板引擎
 * @name    template
 * @param   {String}            模板名
 * @param   {Object, String}    数据。如果为字符串则编译并缓存编译结果
 * @return  {String, Function}  渲染好的HTML字符串或者渲染方法
 */
 
var template = function (filename, content) {
    return typeof content === 'string'
    ?   compile(content, {
            filename: filename
        })
    :   renderFile(filename, content);
};


template.version = '3.0.0';


/**
 * 设置全局配置
 * @name    template.config
 * @param   {String}    名称
 * @param   {Any}       值
 */
template.config = function (name, value) {
    defaults[name] = value;
};



var defaults = template.defaults = {
    openTag: '<%',    // 逻辑语法开始标签
    closeTag: '%>',   // 逻辑语法结束标签
    escape: true,     // 是否编码输出变量的 HTML 字符
    cache: true,      // 是否开启缓存（依赖 options 的 filename 字段）
    compress: false,  // 是否压缩输出
    parser: null      // 自定义语法格式器 @see: template-syntax.js
};


var cacheStore = template.cache = {};


/**
 * 渲染模板
 * @name    template.render
 * @param   {String}    模板
 * @param   {Object}    数据
 * @return  {String}    渲染好的字符串
 */
template.render = function (source, options) {
    return compile(source, options);
};


/**
 * 渲染模板(根据模板名)
 * @name    template.render
 * @param   {String}    模板名
 * @param   {Object}    数据
 * @return  {String}    渲染好的字符串
 */
var renderFile = template.renderFile = function (filename, data) {
    var fn = template.get(filename) || showDebugInfo({
        filename: filename,
        name: 'Render Error',
        message: 'Template not found'
    });
    return data ? fn(data) : fn;
};


/**
 * 获取编译缓存（可由外部重写此方法）
 * @param   {String}    模板名
 * @param   {Function}  编译好的函数
 */
template.get = function (filename) {

    var cache;

    if (cacheStore[filename]) {
        // 使用内存缓存
        cache = cacheStore[filename];
    } else if (typeof document === 'object') {
        // 加载模板并编译
        var elem = document.getElementById(filename);

        if (elem) {
            var source = (elem.value || elem.innerHTML)
            .replace(/^\s*|\s*$/g, '');
            cache = compile(source, {
                filename: filename
            });
        }
    }

    return cache;
};


var toString = function (value, type) {

    if (typeof value !== 'string') {

        type = typeof value;
        if (type === 'number') {
            value += '';
        } else if (type === 'function') {
            value = toString(value.call(value));
        } else {
            value = '';
        }
    }

    return value;

};


var escapeMap = {
    "<": "&#60;",
    ">": "&#62;",
    '"': "&#34;",
    "'": "&#39;",
    "&": "&#38;"
};


var escapeFn = function (s) {
    return escapeMap[s];
};

var escapeHTML = function (content) {
    return toString(content)
    .replace(/&(?![\w#]+;)|[<>"']/g, escapeFn);
};


var isArray = Array.isArray || function (obj) {
    return ({}).toString.call(obj) === '[object Array]';
};


var each = function (data, callback) {
    var i, len;
    if (isArray(data)) {
        for (i = 0, len = data.length; i < len; i++) {
            callback.call(data, data[i], i, data);
        }
    } else {
        for (i in data) {
            callback.call(data, data[i], i);
        }
    }
};


var utils = template.utils = {

    $helpers: {},

    $include: renderFile,

    $string: toString,

    $escape: escapeHTML,

    $each: each

};/**
 * 添加模板辅助方法
 * @name    template.helper
 * @param   {String}    名称
 * @param   {Function}  方法
 */
template.helper = function (name, helper) {
    helpers[name] = helper;
};

var helpers = template.helpers = utils.$helpers;




/**
 * 模板错误事件（可由外部重写此方法）
 * @name    template.onerror
 * @event
 */
template.onerror = function (e) {
    var message = 'Template Error\n\n';
    for (var name in e) {
        message += '<' + name + '>\n' + e[name] + '\n\n';
    }

    if (typeof console === 'object') {
        console.error(message);
    }
};


// 模板调试器
var showDebugInfo = function (e) {

    template.onerror(e);

    return function () {
        return '{Template Error}';
    };
};


/**
 * 编译模板
 * 2012-6-6 @TooBug: define 方法名改为 compile，与 Node Express 保持一致
 * @name    template.compile
 * @param   {String}    模板字符串
 * @param   {Object}    编译选项
 *
 *      - openTag       {String}
 *      - closeTag      {String}
 *      - filename      {String}
 *      - escape        {Boolean}
 *      - compress      {Boolean}
 *      - debug         {Boolean}
 *      - cache         {Boolean}
 *      - parser        {Function}
 *
 * @return  {Function}  渲染方法
 */
var compile = template.compile = function (source, options) {

    // 合并默认配置
    options = options || {};
    for (var name in defaults) {
        if (options[name] === undefined) {
            options[name] = defaults[name];
        }
    }


    var filename = options.filename;


    try {

        var Render = compiler(source, options);

    } catch (e) {

        e.filename = filename || 'anonymous';
        e.name = 'Syntax Error';

        return showDebugInfo(e);

    }


    // 对编译结果进行一次包装

    function render (data) {

        try {

            return new Render(data, filename) + '';

        } catch (e) {

            // 运行时出错后自动开启调试模式重新编译
            if (!options.debug) {
                options.debug = true;
                return compile(source, options)(data);
            }

            return showDebugInfo(e)();

        }

    }


    render.prototype = Render.prototype;
    render.toString = function () {
        return Render.toString();
    };


    if (filename && options.cache) {
        cacheStore[filename] = render;
    }


    return render;

};




// 数组迭代
var forEach = utils.$each;


// 静态分析模板变量
var KEYWORDS =
    // 关键字
    'break,case,catch,continue,debugger,default,delete,do,else,false'
    + ',finally,for,function,if,in,instanceof,new,null,return,switch,this'
    + ',throw,true,try,typeof,var,void,while,with'

    // 保留字
    + ',abstract,boolean,byte,char,class,const,double,enum,export,extends'
    + ',final,float,goto,implements,import,int,interface,long,native'
    + ',package,private,protected,public,short,static,super,synchronized'
    + ',throws,transient,volatile'

    // ECMA 5 - use strict
    + ',arguments,let,yield'

    + ',undefined';

var REMOVE_RE = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g;
var SPLIT_RE = /[^\w$]+/g;
var KEYWORDS_RE = new RegExp(["\\b" + KEYWORDS.replace(/,/g, '\\b|\\b') + "\\b"].join('|'), 'g');
var NUMBER_RE = /^\d[^,]*|,\d[^,]*/g;
var BOUNDARY_RE = /^,+|,+$/g;
var SPLIT2_RE = /^$|,+/;


// 获取变量
function getVariable (code) {
    return code
    .replace(REMOVE_RE, '')
    .replace(SPLIT_RE, ',')
    .replace(KEYWORDS_RE, '')
    .replace(NUMBER_RE, '')
    .replace(BOUNDARY_RE, '')
    .split(SPLIT2_RE);
};


// 字符串转义
function stringify (code) {
    return "'" + code
    // 单引号与反斜杠转义
    .replace(/('|\\)/g, '\\$1')
    // 换行符转义(windows + linux)
    .replace(/\r/g, '\\r')
    .replace(/\n/g, '\\n') + "'";
}


function compiler (source, options) {

    var debug = options.debug;
    var openTag = options.openTag;
    var closeTag = options.closeTag;
    var parser = options.parser;
    var compress = options.compress;
    var escape = options.escape;



    var line = 1;
    var uniq = {$data:1,$filename:1,$utils:1,$helpers:1,$out:1,$line:1};



    var isNewEngine = ''.trim;// '__proto__' in {}
    var replaces = isNewEngine
    ? ["$out='';", "$out+=", ";", "$out"]
    : ["$out=[];", "$out.push(", ");", "$out.join('')"];

    var concat = isNewEngine
        ? "$out+=text;return $out;"
        : "$out.push(text);";

    var print = "function(){"
    +      "var text=''.concat.apply('',arguments);"
    +       concat
    +  "}";

    var include = "function(filename,data){"
    +      "data=data||$data;"
    +      "var text=$utils.$include(filename,data,$filename);"
    +       concat
    +   "}";

    var headerCode = "'use strict';"
    + "var $utils=this,$helpers=$utils.$helpers,"
    + (debug ? "$line=0," : "");

    var mainCode = replaces[0];

    var footerCode = "return new String(" + replaces[3] + ");"

    // html与逻辑语法分离
    forEach(source.split(openTag), function (code) {
        code = code.split(closeTag);

        var $0 = code[0];
        var $1 = code[1];

        // code: [html]
        if (code.length === 1) {

            mainCode += html($0);

        // code: [logic, html]
        } else {

            mainCode += logic($0);

            if ($1) {
                mainCode += html($1);
            }
        }


    });

    var code = headerCode + mainCode + footerCode;

    // 调试语句
    if (debug) {
        code = "try{" + code + "}catch(e){"
        +       "throw {"
        +           "filename:$filename,"
        +           "name:'Render Error',"
        +           "message:e.message,"
        +           "line:$line,"
        +           "source:" + stringify(source)
        +           ".split(/\\n/)[$line-1].replace(/^\\s+/,'')"
        +       "};"
        + "}";
    }



    try {


        var Render = new Function("$data", "$filename", code);
        Render.prototype = utils;

        return Render;

    } catch (e) {
        e.temp = "function anonymous($data,$filename) {" + code + "}";
        throw e;
    }




    // 处理 HTML 语句
    function html (code) {

        // 记录行号
        line += code.split(/\n/).length - 1;

        // 压缩多余空白与注释
        if (compress) {
            code = code
            .replace(/\s+/g, ' ')
            .replace(/<!--[\w\W]*?-->/g, '');
        }

        if (code) {
            code = replaces[1] + stringify(code) + replaces[2] + "\n";
        }

        return code;
    }


    // 处理逻辑语句
    function logic (code) {

        var thisLine = line;

        if (parser) {

             // 语法转换插件钩子
            code = parser(code, options);

        } else if (debug) {

            // 记录行号
            code = code.replace(/\n/g, function () {
                line ++;
                return "$line=" + line +  ";";
            });

        }


        // 输出语句. 编码: <%=value%> 不编码:<%=#value%>
        // <%=#value%> 等同 v2.0.3 之前的 <%==value%>
        if (code.indexOf('=') === 0) {

            var escapeSyntax = escape && !/^=[=#]/.test(code);

            code = code.replace(/^=[=#]?|[\s;]*$/g, '');

            // 对内容编码
            if (escapeSyntax) {

                var name = code.replace(/\s*\([^\)]+\)/, '');

                // 排除 utils.* | include | print

                if (!utils[name] && !/^(include|print)$/.test(name)) {
                    code = "$escape(" + code + ")";
                }

            // 不编码
            } else {
                code = "$string(" + code + ")";
            }


            code = replaces[1] + code + replaces[2];

        }

        if (debug) {
            code = "$line=" + thisLine + ";" + code;
        }

        // 提取模板中的变量名
        forEach(getVariable(code), function (name) {

            // name 值可能为空，在安卓低版本浏览器下
            if (!name || uniq[name]) {
                return;
            }

            var value;

            // 声明模板变量
            // 赋值优先级:
            // [include, print] > utils > helpers > data
            if (name === 'print') {

                value = print;

            } else if (name === 'include') {

                value = include;

            } else if (utils[name]) {

                value = "$utils." + name;

            } else if (helpers[name]) {

                value = "$helpers." + name;

            } else {

                value = "$data." + name;
            }

            headerCode += name + "=" + value + ",";
            uniq[name] = true;


        });

        return code + "\n";
    }


};



// 定义模板引擎的语法


defaults.openTag = '{{';
defaults.closeTag = '}}';


var filtered = function (js, filter) {
    var parts = filter.split(':');
    var name = parts.shift();
    var args = parts.join(':') || '';

    if (args) {
        args = ', ' + args;
    }

    return '$helpers.' + name + '(' + js + args + ')';
}


defaults.parser = function (code, options) {

    // var match = code.match(/([\w\$]*)(\b.*)/);
    // var key = match[1];
    // var args = match[2];
    // var split = args.split(' ');
    // split.shift();

    code = code.replace(/^\s/, '');

    var split = code.split(' ');
    var key = split.shift();
    var args = split.join(' ');



    switch (key) {

        case 'if':

            code = 'if(' + args + '){';
            break;

        case 'else':

            if (split.shift() === 'if') {
                split = ' if(' + split.join(' ') + ')';
            } else {
                split = '';
            }

            code = '}else' + split + '{';
            break;

        case '/if':

            code = '}';
            break;

        case 'each':

            var object = split[0] || '$data';
            var as     = split[1] || 'as';
            var value  = split[2] || '$value';
            var index  = split[3] || '$index';

            var param   = value + ',' + index;

            if (as !== 'as') {
                object = '[]';
            }

            code =  '$each(' + object + ',function(' + param + '){';
            break;

        case '/each':

            code = '});';
            break;

        case 'echo':

            code = 'print(' + args + ');';
            break;

        case 'print':
        case 'include':

            code = key + '(' + split.join(',') + ');';
            break;

        default:

            // 过滤器（辅助方法）
            // {{value | filterA:'abcd' | filterB}}
            // >>> $helpers.filterB($helpers.filterA(value, 'abcd'))
            // TODO: {{ddd||aaa}} 不包含空格
            if (/^\s*\|\s*[\w\$]/.test(args)) {

                var escape = true;

                // {{#value | link}}
                if (code.indexOf('#') === 0) {
                    code = code.substr(1);
                    escape = false;
                }

                var i = 0;
                var array = code.split('|');
                var len = array.length;
                var val = array[i++];

                for (; i < len; i ++) {
                    val = filtered(val, array[i]);
                }

                code = (escape ? '=' : '=#') + val;

            // 即将弃用 {{helperName value}}
            } else if (template.helpers[key]) {

                code = '=#' + key + '(' + split.join(',') + ');';

            // 内容直接输出 {{value}}
            } else {

                code = '=' + code;
            }

            break;
    }


    return code;
};

define('penguin/template', [],function() {
    return template;
});

})();

define('penguin/context',[
    'penguin/cookie'
], function(Cookie) {

    var VARS = {
        prefix: '$',
        keys: [ 'SYS', 'ROOM', 'PAGE', 'DATA', 'QIETV'],
        source: {},
        scope: window
    };

    for(var i=0; i<VARS.keys.length; i++) {
        var key = VARS.keys[i],
            fkey = VARS.prefix + key,
            obj = VARS.scope[fkey];

        if(obj) {
            VARS.source[ key.toLowerCase() ] = obj;
        }
    }

    /**
     * 根据“路由变量”在“上下文”中赋值
     * “路由变量”：str = 'a.b.c.d.e'
     * “上下文”：VARS.source
     * 例子：
     *        var menuId = get('sys.menuId')
     *        sys 对应于 VARS.keys[0]
     * 在路由赋值的过程中，如果遇到 undefined 则认为路由失败，直接返回 undefined
     */
    function set(str, value) {
        var p,
            cur = VARS.source,
            ps = str.split('.'),
            ks = [],
            fns = '';

        for(var i=0, len=ps.length; i<len; i++) {
            p = ps[i];
            cur = cur[p];
            ks.push( '["' + ps[i] + '"]' );
        }

        // 修改注意
        fns = 'VARS.source' + ks.join('') + '="' + value + '"';

        eval('(' + fns + ')');
    }

    function setAll(keys, value) {
        VARS.source[ keys.toLowerCase() ] = value;
    }

    /** 
     * 根据 “路由变量” 在 “上下文” 中寻找值
     * “路由变量”：str = 'a.b.c.d.e'
     * “上下文”： VARS.source
     * 例子：
     *      var menuId = get('sys.menuId')
     *      vars 对应于 VARS.keys[1]
     * 在路由寻找的过程中，如果遇到 undefined 则认为路由失败，直接返回 undefined
     */
    function get(str) {
        var cur,
            tar = VARS.source,
            path = str.split('.');

        for(var i=0, il=path.length; i<il; i++) {
            tar = tar[ path[i] ];

            if(tar === undefined) {
                return;
            }
        }

        return tar;
    }

    // 环境配置
    // Cookie.config( 'keypre', get('sys.cookie_pre') || '' );

    return {
        get: get,
        set: set,
        setAll: setAll
    };
});
/**
 * @module js.common.loginpop
 * @desc 弹窗：登录，退出，获取状态,持有用户数据，持有登录框,使用该模块必须执行init
 */
define('common/js/loginpop', [
    'jquery',
    'penguin/cookie',
    'penguin/context',
    'common/third/artDialog',
    'common/third/iframeTools'
], function ($, Cookie, Context) {

    var Vars = {
        el: {
            pop: '.login-pop',
            shadow: '.login-pop-shadow',
            loginClose: '.login-pop-close',
            _switch: '.login-pop-switch-a'
        },

        _timeout: 1000,

        // eslint-disable-next-line no-empty-function
        noop: function () {},

        _content: '确认退出吗？'
    };
    var User = {};

    /**
     * @method init
     * @description 登录弹窗初始化
     */
    User.init = function () {
        User.view.init();
        User.control.init();
    };

    User._inited = false;

    User.view = {

        /**
         * @method view.init
         * @description 初始化登录弹窗视图
         */
        init: function () {
            var view = User.view;
            view.doms();

            // ref_url返回当前引用页用
            view.$switch.attr('href', '/member/login?ref_url=' + window.location.pathname);

            // 用于控制登录弹窗是否显示的标志变量
            // eslint-disable-next-line camelcase
            view._is_show = false;

            if (User._inited) {
                return;
            }

            User._inited = true;

            // 初始化事件
            setTimeout(function () {
                view.evt();
            }, 50);
        },

        /**
         * @method view.doms
         * @description 初始化获取视图节点
         */
        doms: function () {
            var view = User.view;
            var el = Vars.el;
            view.$pop = $(el.pop);
            view.$shadow = $(el.shadow);
            view.$close = $(el.loginClose);
            view.$switch = $(el._switch);
        },

        /**
         * @method view.evt
         * @description 设置事件监听
         */
        evt: function () {
            var view = User.view;

            // 设置关闭事件
            view.$close.click(function (e) {
                view._evt_stop(e);
                view.hide();
            });

            // 设置背景遮罩层双击事件
            view.$shadow.on('dblclick', function (e) {
                view._evt_stop(e);
                view.hide();
            });

            // 重置遮罩层高度
            $(window).resize(function () {
                if (view._is_show) {
                    view.layout();
                }
            });
        },

        /**
         * @method view.layout
         * @description 重设遮罩层高度，重设弹出框位置
         */
        layout: function () {
            var top;
            var $body = $('body');
            var $wind = $(window);
            var bodyh = $body.height();
            var windh = $wind.height();
            var poph = User.view.$pop.outerHeight(true);
            var height = bodyh < windh ? windh : bodyh;
            if (windh - poph <= 100) {
                top = 0;
            }
            else {
                top = windh * 0.3;
            }
            User.view.$shadow.height(height);
            User.view.$pop.css('top', top);
        },

        /**
         * @method view._evt_stop
         * @description 禁止事件冒泡，防止点击时触发其他响应
         */
        // eslint-disable-next-line camelcase
        _evt_stop: function (e) {
            e.stopPropagation();
            e.preventDefault();
        },

        /**
         * @method view.hide
         * @description 隐藏登录弹窗
         */
        hide: function () {
            var view = User.view;
            view.$pop.fadeOut(function () {
                // eslint-disable-next-line camelcase
                view._is_show = false;
            });
            view.$shadow.fadeOut();
        },

        /**
         * @method view.show
         * @description 显示登录弹窗
         */
        show: function () {
            var view = User.view;
            view.layout();
            view.$pop.fadeIn(function () {
                // eslint-disable-next-line camelcase
                view._is_show = true;
            });
            view.$shadow.fadeIn();
        },

        /**
         * @method view.toggle
         * @description 切换登录弹窗显示隐藏状态
         */
        toggle: function () {
            var view = User.view;
            if (view._is_show) {
                view.hide();
            }
            else {
                view.show();
            }
        }
    };

    User.control = {

        /**
         * @method control._on_auto_login
         * @description 内部方法，覆盖用
         */
        // eslint-disable-next-line no-empty-function,camelcase
        _on_auto_login: function () {},
        init: function () {
            User.control.auto();
        },

        /**
         * @method control.check
         * @param {Boolean} flag 是否清除cookie信息
         * @return {Boolean}
         * @description 检查登录状态，如果未登录，返回false
         */
        check: function (clear) {
            var flag = Boolean(Cookie.get('qie_nickname'));

            if (clear === true && !flag) {
                Cookie.remove([
                    'qie_auth', 'qie_auth_wl', 'qie_uid',
                    'qie_nickname', 'qie_username',
                    'qie_own_room', 'qie_groupid',
                    'qie_notification', 'qie_phonestatus'
                ]);
            }
            // return Cookie.get('uid') ? true : false;

            return Boolean(Cookie.get('qie_uid'));
        },

        /**
         * @method control._exit
         * @param {Object} options 在退出完成时执行的方法,参数
         * @description 内部函数，供内部调用
         */
        _exit: function (options) {
            $.post('/member/logout/ajax', function () {
                options.onExist(
                    options.url,
                    options.timeout
                );
            }, 'json');
        },

        /**
         * @method control._onExist
         * @param {String|Undefined} url 当退出完成时需要重定向的url地址
         * @param {Number|Undefined} timeout 重定向所需时间设置
         * @description 内部函数，默认的退出时完成动作（提示退出登录成功，并刷新当页）
         */
        _onExist: function (url, timeout) {
            Cookie.remove('illAchorCheck');
            $.dialog.tips_black('退出成功！', 2);
            if (!User.control._setRedirect(url, timeout)) {
                setTimeout(function () {
                    location.reload();
                }, timeout || Vars._timeout);
            }
        },

        /**
         * @method control._setRedirect
         * @param {String|Undefined} url 当退出完成时需要重定向的url地址
         * @param {Number|Undefined} timeout 重定向所需时间设置
         * @return {Boolean} 返回是否有设置重定向
         * @description 设置自定义退出重定向
         */
        _setRedirect: function (url, timeout) {
            if (url) {
                setTimeout(function () {
                    location.href = url;
                }, timeout || 50);
                return true;
            }
            return false;
        },

        /**
         * @method control.exit
         * @param {Object|Undefined} options 传入的参数
         * @description 暴露出去的exit方法，如果未传入参数，将会使用默认动作
         */
        exit: function (options) {
            var that = User.control;

            var extOpts = {
                onExist: that._onExist
            };

            if (!options) {
                User.control._exit(extOpts);
                return;
            }

            extOpts = $.extend(extOpts, options);

            var content = options.content || Vars._content;
            var onExist = function () {
                User.control._exit(extOpts);
            };
            var onCancel = options.onCancel || Vars.noop;

            $.dialog.confirm(content, onExist, onCancel);
        },

        /**
         * @method control.auto
         * @description 自动登录,如果有响应自动登录需求
         * loginpop.init({
         *      onAuto: function (isLogin) {
         *          if (!isLogin) {
         *              $.dialog.confirm('该页面必须登录', function ok() {  }, function cancel() {  })
         *          }
         *      }
         * })
         */
        auto: function () {
            var flag = User.control.check(true);

            // if(flag) {
            // 	Cookie.set( 'qie_uid', Cookie.get('uid') );
            // 	Cookie.set( 'qie_username', Cookie.get('username') );
            // 	Cookie.set( 'qie_nickname', Cookie.get('nickname') );
            // 	Cookie.set( 'qie_password', Cookie.get('auth_wl') );
            // 	Cookie.set( 'qie_own_room', Cookie.get('own_room') );
            // 	Cookie.set( 'qie_groupid', Cookie.get('groupid') );
            // 	Cookie.set( 'qie_notification', Cookie.get('notification') );
            // 	Cookie.set( 'qie_phonestatus', Cookie.get('phonestatus') );
            // }
            if (flag) {
                Context.set('sys.uid', Cookie.get('qie_uid'));
                Context.set('sys.username', Cookie.get('qie_username'));
                Context.set('sys.nickname', Cookie.get('qie_nickname'));
                Context.set('sys.password', Cookie.get('qie_auth_wl'));
                Context.set('sys.own_room', Cookie.get('qie_own_room'));
                Context.set('sys.groupid', Cookie.get('qie_groupid'));
                Context.set('sys.notification', Cookie.get('qie_notification'));
                Context.set('sys.phonestatus', Cookie.get('qie_phonestatus'));
            }

            User.control._on_auto_login(flag);
        }
    };

    var Proxy = {
        init: function (config) {
            config = config || {};

            if ($.isFunction(config.onAuto)) {
                // eslint-disable-next-line camelcase
                User.control._on_auto_login = config.onAuto;
            }

            User.init();
        },
        show: User.view.show,
        hide: User.view.hide,
        toggle: User.view.toggle,
        check: User.control.check,
        exit: User.control.exit
    };
    window.LoginPop = Proxy;
    return Proxy;
});

define('common/hmt',[
    'jquery',
],function($) {
var Vars = {
        id: '436e0af00b4308082985d33e8abe407e'
    };

    function pushTimeout(ev, count){
        count = count || 0;
        if(count !== 20){
            setTimeout(function() {
                push(ev, ++count);
            }, 300);
        }
        return true;
    }

    $(document).on("click", "[data-hmt]", function(){
        var evs = $(this).data().hmt || false;
        if(evs){
            var ev = evs.split(',');
            ev.splice(0, 0, ev[3] || '_trackEvent');
            ev.splice(4);
            // ev[2] = 'click';
            push(ev);
        }
    });

    function push (ev, count){
        count = count || 0;
        if(typeof(ev) === 'string'){
            ev = Array.prototype.slice.call(arguments, 0, 4);
        }
        if(window._hmt && 'id' in window._hmt){ 
            if($.isArray(ev)){
                if('id' in window._hmt && window._hmt.id === Vars.id){
                    window._hmt.push(ev);
                }else if('cmd' in window._hmt && typeof(window._hmt.cmd) === 'object'){
                    for(var id in window._hmt.cmd){
                        if(id === Vars.id && 'push' in window._hmt.cmd[id]){
                            return window._hmt.cmd[id].push(ev);
                        }
                    }
                    pushTimeout(ev, count);
                }else if('push' in window._hmt){
                    pushTimeout(ev, count) && window._hmt.push(ev);
                }
            }
        }else{
            pushTimeout(ev, count);
        }
    }

    function ret(){
        push.apply(this, Array.prototype.slice.call(arguments, 0));
    }
    
    ret.push = push;

    // window._hmt = {
    //     id: 'e99aee90ec1b2106afe7ec3b199020a7',
    //     push: function(e){
    //         console.log(e);
    //     }
    // };

    window.QieHmt = ret;


    // require([
    //     '//hm.baidu.com/hm.js?e99aee90ec1b2106afe7ec3b199020a7',
    //     '//hm.baidu.com/hm.js?436e0af00b4308082985d33e8abe407e',
    //     '//hm.baidu.com/hm.js?acb0b768a874d7735d188628b12ee199',
    //     '//pingjs.qq.com/ping.js'
    // ], function(){
    //     if(typeof(pgvMain) == 'function'){
    //       pgvMain();
    //     }
    // });
    return ret;
});
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define('common/sa',factory) :
  (global.howLongUntilLunch = factory());
}(this, (function () { 'use strict';

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function getKey() {
    return window.location.pathname;
  }

  // data 为： '${name}/@/${JSON.stringify(param)}'
  function decodeEventMsg(data) {
    var name = "";
    var param = "";

    try {
      var str = typeof data === "string" ? data : data.toString();
      var arr = str.split("/@/");
      name = arr[0];
      param = JSON.parse(arr[1]);
    } catch (e) {
      console.log(e);
    }

    return {
      name: name,
      param: param
    };
  }

  // name 为 string ; param 为 obj
  function codeEventMsg(name, param) {
    var str = "";

    if (typeof name === "string" && (typeof param === "undefined" ? "undefined" : _typeof(param)) === "object") {
      try {
        str = name + "/@/" + JSON.stringify(param);
      } catch (e) {
        console.log(e);
      }
    }

    return str;
  }

  function decodeTimerMsg(str) {
    var arr = str.split("/@/");
    return {
      key: arr[0],
      time: arr[1],
      startTime: arr[2],
      updateTime: arr[3],
      name: arr[4],
      param: arr[5] ? JSON.parse(arr[5]) : ''
    };
  }

  function codeTimerMsg(key, time, startTime, updateTime, name) {
    var param = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

    return key + "/@/" + time + "/@/" + startTime + "/@/" + updateTime + "/@/" + name + "/@/" + JSON.stringify(param);
  }

  // 随机字符串生成
  function randomChar() {
    var l = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;

    var x = "0123456789qwertyuioplkjhgfdsazxcvbnm";
    var tmp = "";
    for (var i = 0; i < l; i++) {
      tmp += x.charAt(Math.ceil(Math.random() * 100000000) % x.length);
    }
    return tmp;
  }

  // 可存储的配置
  var Config = {
    timer: 'timer',
    track: 'track'
  };

  var separatorStr = '/@@/';

  /**
   * 参数（options）
   * saName      数据结构 - 索引前缀  (可选)
   * key         数据结构 - 索引后缀  (可选，默认通过域名解析出来)
   */

  var Store = function () {
    function Store() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      classCallCheck(this, Store);

      this.saName = options.saName;
      this.saKey = options.saName + '_' + (options.key || Store.getKey()) + '_';
      this.storeDebug = !!options.storeDebug;
    }

    createClass(Store, [{
      key: 'log',
      value: function log(data) {
        if (this.storeDebug) {
          if (typeof data === 'function') {
            console.log(data());
            return;
          }
          console.log(data);
        }
      }

      /**
       * [getKey description]
       * window.location.pathname
       * @return {[type]} [description]
       */

    }, {
      key: 'getAllStore',


      /**
       * [getAllStore description]
       * 获取所有储存信息
       * @return {[type]} [description]
       */
      value: function getAllStore() {
        var stores = Store.buildAllStoreObject();

        var _RE = new RegExp('^' + this.saName + '(\\S*)_(' + Store.getConfigKeys() + ')$', 'i');

        Store.eachStorageKey(function (keyName) {
          var matched = keyName.match(_RE);
          if (matched) {
            var data = window.localStorage.getItem(keyName);
            stores[matched[2]].push({
              key: keyName,
              data: data ? data.split(separatorStr) : []
            });
          }
        });

        return stores;
      }

      /**
       * [getStore description]
       * 获取某类Store
       * @param  {[type]} type [description]
       * @return {[type]}      [description]
       */

    }, {
      key: 'getStore',
      value: function getStore(type) {
        var str = '';
        str = window.localStorage.getItem(this.saKey + Config[type]);
        return str ? str.split(separatorStr) : [];
      }

      /**
       * [getTimerStore description]
       * 获取timer的store
       * @param  {[type]} key [description]
       * @return {[type]}     [description]
       */

    }, {
      key: 'getTimerStore',
      value: function getTimerStore(key) {
        var store = this.getStore(Config.timer);

        if (store.length) {
          for (var i = 0, len = store.length; i < len; i++) {
            var obj = Store.decodeTimerMsg(store[i]);
            if (obj.key == key) {
              return [store, obj, i];
            }
          }
          return [store, null, store.length];
        }
        return null;
      }

      /**
       * [getTrackStore description]
       * 获取Track的Store
       * @param  {[type]} key [description]
       * @return {[type]}     [description]
       */

    }, {
      key: 'getTrackStore',
      value: function getTrackStore(key) {
        var store = this.getStore(Config.track);
        if (store.length) {
          for (var i = 0, len = store.length; i < len; i++) {
            var obj = decodeEventMsg(store[i]);
            if (obj.key == key) {
              return [store, obj, i];
            }
          }
        }
        return null;
      }

      /**
       * [setStore description]
       * 设置store
       * @param {[type]} type [description]
       * @param {[type]} data [description]
       */

    }, {
      key: 'setStore',
      value: function setStore(type, data) {
        var str = '';
        if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === "object") {
          str = '' + codeEventMsg(data.name, data.param);
        } else {
          str = data;
        }

        this.log(this.saKey + Config[type] + ': ' + str);
        window.localStorage.setItem(this.saKey + Config[type], '' + str);
      }

      /**
       * [updateTimerStore description]
       * 更新timerStore
       * @param  {[type]} data [description]
       * @return {[type]}      [description]
       */

    }, {
      key: 'updateTimerStore',
      value: function updateTimerStore(data) {
        var str = '';
        if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
          str = '' + codeTimerMsg(data.key, data.time, data.startTime, data.updateTime, data.name, data.param);
        } else if (typeof data === 'string') {
          str = data;
        }

        if (!str) {
          return;
        }

        var result = this.getTimerStore(data.key);

        if (result) {
          result.push(str);
          this._restoreTimerStore.apply(this, result);
          return;
        }
        this.setStore(Config.timer, str);
      }

      /**
       * [_restoreTimerStore description]
       * 存储TimerStore
       * @param  {[type]} store   [description]
       * @param  {[type]} oldData [description]
       * @param  {[type]} index   [description]
       * @param  {[type]} newData [description]
       * @return {[type]}         [description]
       */

    }, {
      key: '_restoreTimerStore',
      value: function _restoreTimerStore(store, oldData, index, newData) {
        store[index] = newData;
        this.log(store);
        this.setStore(Config.timer, store.join(separatorStr));
      }

      /**
       * [updateTrackStore description]
       * 更新trackStore
       * @param  {[type]} data [description]
       * @return {[type]}      [description]
       */

    }, {
      key: 'updateTrackStore',
      value: function updateTrackStore(data) {
        var str = '';
        if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
          str = '' + codeEventMsg(data.name, data.param);
        } else if (typeof data === 'string') {
          str = data;
        }
        if (!str) {
          return;
        }

        var result = this.getStore(Config.track);

        result.push(str);

        this.setStore(Config.track, result.join(separatorStr));
      }

      /**
       * [updateStore description]
       * 保留原有的Store,更新入内
       * @param  {[type]} type [description]
       * @param  {[type]} data [description]
       * @return {[type]}      [description]
       */

    }, {
      key: 'updateStore',
      value: function updateStore(type, data) {
        var arr = this.getStore(type) || [];

        if (type === Config.track) {
          this.updateTrackStore(data);
        } else if (type === Config.timer) {
          this.updateTimerStore(data);
        }
      }

      /**
       * [_deleteTypedStore description]
       * 删除某类型的数组
       * @param  {[type]} type [description]
       * @return {[type]}      [description]
       */

    }, {
      key: '_deleteTypedStore',
      value: function _deleteTypedStore(type) {
        window.localStorage.removeItem(this.saKey + Config[type]);
      }

      /**
       * [_deleteTimerStore description]
       * 删除TimerStore
       * @param  {[type]} key [description]
       * @return {[type]}     [description]
       */

    }, {
      key: '_deleteTimerStore',
      value: function _deleteTimerStore(key) {
        var _this = this;

        if (key) {
          var results = this.getTimerStore(key);
          if (results && results[1]) {
            results[0].splice(results[2], 1);

            if (results[0].length === 0) {
              this._deleteTypedStore(Config.timer);
            } else {
              this.setStore(Config.timer, results[0].join(separatorStr));
            }
          }
          this.log(function () {
            return _this.getTimerStore(key);
          });
          return;
        }
        this._deleteTypedStore(Config.timer);
        this.log(function () {
          return _this.getTimerStore(key);
        });
      }

      /**
       * [deleteStore description]
       * 删除
       * @param  {[type]} type [description]
       * @param  {[type]} key  [description]
       * @return {[type]}      [description]
       */

    }, {
      key: 'deleteStore',
      value: function deleteStore(type, key) {
        switch (type) {
          case Config.timer:
            this._deleteTimerStore(key);
            break;
          case Config.track:
            this._deleteTypedStore(type);
            break;
          default:
            this._deleteTypedStore(type);
            break;
        }
      }

      /**
       * [removeItem description]
       * 直接删除项
       * @param  {[type]} key [description]
       * @return {[type]}     [description]
       */

    }, {
      key: 'removeItem',
      value: function removeItem(key) {
        window.localStorage.removeItem(key);
      }
    }, {
      key: 'setItem',
      value: function setItem(key, data) {
        window.localStorage.setItem(key, data);
      }

      /**
       * [removeTimerItem description]
       * 删除相关内容
       * @param  {[type]} key         [description]
       * @param  {[type]} itemKeyName [description]
       * @return {[type]}             [description]
       */

    }, {
      key: 'removeTimerItem',
      value: function removeTimerItem(key, itemKeyName) {
        if (!itemKeyName) {
          this.removeItem(key);
          return;
        }

        var str = window.localStorage.getItem(key);
        if (str === '') {
          this.removeItem(key);
          return;
        }
        if (str === null) {
          return;
        }

        var data = str.split(separatorStr);

        for (var i = 0; i < data.length; i++) {
          var obj = Store.decodeTimerMsg(data[i]);
          if (obj.key == itemKeyName) {
            data.splice(i, 1);
            if (data.length === 0) {
              this.removeItem(key);
            } else {
              this.setItem(key, data.join(separatorStr));
            }
            return;
          }
        }
      }
    }], [{
      key: 'getKey',
      value: function getKey$$1() {
        return getKey();
      }

      /**
       * [randomChar description]
       * 返回随机字符串
       * @param  {[type]} length [description]
       * @return {[type]}        [description]
       */

    }, {
      key: 'randomChar',
      value: function randomChar$$1(length) {
        return randomChar(length);
      }

      /**
       * [codeEventMsg description]
       * encodeEventMsg
       * @param  {...[type]} args [description]
       * @return {[type]}         [description]
       */

    }, {
      key: 'codeEventMsg',
      value: function codeEventMsg$$1() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return codeEventMsg.apply(this, args);
      }

      /**
       * [decodeEventMsg description]
       * decodeEventMsg
       * @param  {...[type]} args [description]
       * @return {[type]}         [description]
       */

    }, {
      key: 'decodeEventMsg',
      value: function decodeEventMsg$$1() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return decodeEventMsg.apply(this, args);
      }

      /**
       * [codeTimerMsg description]
       * encodeTimerMsg
       * @param  {...[type]} args [description]
       * @return {[type]}         [description]
       */

    }, {
      key: 'codeTimerMsg',
      value: function codeTimerMsg$$1() {
        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        return codeTimerMsg.apply(this, args);
      }

      /**
       * [decodeTimerMsg description]
       * decodeTimerMsg
       * @param  {...[type]} args [description]
       * @return {[type]}         [description]
       */

    }, {
      key: 'decodeTimerMsg',
      value: function decodeTimerMsg$$1() {
        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        return decodeTimerMsg.apply(this, args);
      }

      /**
       * [eachStorageKey description]
       * 获取键值
       * @param  {Function} callback [description]
       * @return {[type]}            [description]
       */

    }, {
      key: 'eachStorageKey',
      value: function eachStorageKey(callback) {
        if (Object.keys) {
          Object.keys(window.localStorage).forEach(function (key) {
            callback(key);
          });
          return;
        }

        for (var i = 0; i < window.localStorage.length; i++) {
          callback(window.localStorage.key(i));
        }
      }

      /**
       * [getConfigKeys description]
       * 获取键值
       * @return {[type]} [description]
       */

    }, {
      key: 'getConfigKeys',
      value: function getConfigKeys() {
        var keys = [];
        for (var key in Config) {
          keys.push(Config[key]);
        }
        return keys.join('|');
      }

      /**
       * [buildAllStoreObject description]
       * 构建一个符合Config的 collection
       * @return {[type]} [description]
       */

    }, {
      key: 'buildAllStoreObject',
      value: function buildAllStoreObject() {
        var obj = {};
        var keys = Store.getConfigKeys().split('|');
        for (var i = 0; i < keys.length; i++) {
          obj[keys[i]] = [];
        }
        return obj;
      }
    }]);
    return Store;
  }();

  Store.separatorStr = separatorStr;

  Store.Config = Config;

  Store.OVERFLOW_TIME = 1000 * 60 * 60 * 4;

  /**
   * 参数（options）
   * distinct_id 是用来标识用户的，是一段唯一的字符串 (登录用户使用uid设置)
   * saName      数据结构 - 索引前缀  (可选)
   * sdk_url     神策sdk地址 1.10+
   * name        全局变量名          (可选)
   * server_url  数据接收地址
   * 其他参考神策js sdk文档 https://www.sensorsdata.cn/manual/js_sdk.html
   */

  var Main = function () {
    function Main() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      classCallCheck(this, Main);

      this.Store = Store;

      this.options = _extends(this._getDefaultConfig(), options);

      this.onInited = options.inited;

      this._setPageTimerConfig();

      this._init();
    }

    createClass(Main, [{
      key: "_init",
      value: function _init() {
        var _this = this;

        this.store = new Store(this.options);

        this.initSDK(function (sa) {
          if (!sa) {
            return;
          }

          _this.sa = sa;

          _this.onInited && _this.onInited(_this);

          _this.postCache();

          if (_this.options.distinct_id) {
            _this.sa.login(_this.options.distinct_id);
          }

          if (_this.options.autoTrack) {
            _this.sa.quick("autoTrack");
          }
        });
      }
    }, {
      key: "_setPageTimerConfig",
      value: function _setPageTimerConfig() {
        // 开启页面计时的时间配置，默认10s
        if (!this.options.pageTimer.time) {
          this.options.pageTimer.time = 1000 * 10;
        }

        // 页面计时的上报名，默认域名后缀
        if (!this.options.pageTimer.name) {
          this.options.pageTimer.name = "pageTimer_" + Store.getKey();
        }
      }
    }, {
      key: "_getDefaultConfig",
      value: function _getDefaultConfig() {
        var sdk_url = "";
        var heatmap_url = "";
        var show_log = true;
        var server_url = "//sclog.qiecdn.com/sa?project=production";

        // 增加首选配置
        if (window.$SYS && window.$SYS.web_url) {
          sdk_url = window.$SYS.web_url + "common/third/sensorsdata/1.14.5/sensorsdata.min.js";
          heatmap_url = sdk_url.replace(/[^\/]+\.js[^\/]*$/, "heatmap.min.js");
        }

        if (window.$SYS && window.$SYS.env === "production") {
          show_log = false;
        } else {
          server_url = "//sclog.qiecdn.com/sa?project=default";
        }

        return {
          distinct_id: "",
          saName: "saName",

          // sdk 默认cdn地址
          sdk_url: sdk_url || "https://static.sensorsdata.cn/sdk/1.14.5/sensorsdata.min.js",

          // sdk heatmap 默认cdn地址
          // sdk中会自动取，写不写少句判断的问题
          // 
          // 下方是sdk策略
          /*
            //优化自动取heatmap.min.js
            if(!sd.para.heatmap_url && sd.para.sdk_url){
              sd.para.heatmap_url = sd.para.sdk_url.replace(/[^\/]+\.js[^\/]*$/,'heatmap.min.js');
            }
           */
          heatmap_url: heatmap_url || "https://static.sensorsdata.cn/sdk/1.14.5/heatmap.min.js",
          name: "saTQT",
          server_url: server_url,
          heatmap: {
            clickmap: "default",
            scroll_notice_map: "not_collect"
          },

          // 增加显示log控制
          show_log: show_log,

          pageTimer: {
            param: {}
          },

          autoTrack: true
        };
      }
    }, {
      key: "initSDK",
      value: function initSDK(cb) {
        var para = this.options;

        window["sensorsDataAnalytic201505"] = para.name;

        window[para.name] = window[para.name] || function (a) {
          return function () {
            (window[para.name]._q = window[para.name]._q || []).push([a, arguments]);
          };
        };

        var ifs = ["track", "quick", "register", "registerPage", "registerOnce", "clearAllRegister", "trackSignup", "trackAbtest", "setProfile", "setOnceProfile", "appendProfile", "incrementProfile", "deleteProfile", "unsetProfile", "identify", "login", "logout", "trackLink", "clearAllRegister"];

        for (var i = 0; i < ifs.length; i++) {
          window[para.name][ifs[i]] = window[para.name].call(null, ifs[i]);
        }

        if (!window[para.name]._t) {
          var x = document.createElement("script");
          x.type = "text/javascript";
          x.async = 1;
          x.src = para.sdk_url;
          x.onload = function () {
            cb && cb(window[para.name]);
          };

          var y = document.getElementsByTagName("script")[0];
          y.parentNode.insertBefore(x, y);

          window[para.name].para = para;
        }
      }
    }, {
      key: "postCache",
      value: function postCache() {
        var obj = this.store.getAllStore();

        var arrTimer = obj.timer;
        var arrTrack = obj.track;

        // 上报所有缓存的track点
        for (var i = 0, l = arrTrack.length; i < l; i++) {
          for (var j = 0, jlen = arrTrack[i].data.length; j < jlen; j++) {
            var _Store$decodeEventMsg = Store.decodeEventMsg(arrTrack[i].data[j]),
                name = _Store$decodeEventMsg.name,
                param = _Store$decodeEventMsg.param;

            this.sa.track(name, param || {});
          }
          // 删除track缓存点
          this.store.removeItem(arrTrack[i].key);
        }

        for (var _i = 0, _l = arrTimer.length; _i < _l; _i++) {
          for (var _j = 0, _jlen = arrTimer[_i].data.length; _j < _jlen; _j++) {
            var endTime = +new Date();

            var _Store$decodeTimerMsg = Store.decodeTimerMsg(arrTimer[_i].data[_j]),
                key = _Store$decodeTimerMsg.key,
                time = _Store$decodeTimerMsg.time,
                startTime = _Store$decodeTimerMsg.startTime,
                updateTime = _Store$decodeTimerMsg.updateTime,
                _name = _Store$decodeTimerMsg.name,
                _param = _Store$decodeTimerMsg.param;

            // 清除负数计时器
            // 清除超过4小时的计时器
            // 处理特别情况，如果用户更改了系统时间，忽略点


            if (updateTime < startTime || updateTime - startTime > Store.OVERFLOW_TIME) {
              this.store.removeTimerItem(arrTimer[_i].key, key);
              continue;
            }

            if (endTime - updateTime - 1000 * 5 > time) {
              this.sa.track(_name, _extends({}, _param, {
                pageStartTime: startTime,
                pageTimer: updateTime - startTime
              }));
              this.store.removeTimerItem(arrTimer[_i].key, key);
            }
          }
        }
      }
    }, {
      key: "triggerTrack",
      value: function triggerTrack(name, param) {
        if (typeof name != "string" || (typeof param === "undefined" ? "undefined" : _typeof(param)) != "object") {
          return;
        }

        // 如果sdk已加载完成，直接尝试上报
        if (this.sa) {
          try {
            this.sa.track(name, param || {});
          } catch (e) {
            // 防止报错产生影响
            console && console.error && console.error(e);
          }
          return;
        }

        // 否则，计入待上报缓存队列
        try {
          this.store.updateStore(Store.Config.track, {
            name: name,
            param: param
          });
        } catch (e) {
          // 防止报错产生影响
          console && console.error && console.error(e);
        }
      }

      /**
       * [addEventPageLoad description]
       * 增加页面时间打点
       * @param {Object} obj [description]
       */

    }, {
      key: "addEventPageLoad",
      value: function addEventPageLoad() {
        var _this2 = this;

        var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (this.startPageTimer) {
          return;
        }
        this.startPageTimer = true;

        /**
         * [pageTimer description]
         * 混入参数
         * @type {[type]}
         */
        this.options.pageTimer = _extends({}, this.options.pageTimer, obj);
        var _options$pageTimer = this.options.pageTimer,
            name = _options$pageTimer.name,
            param = _options$pageTimer.param,
            time = _options$pageTimer.time;

        var startTime = +new Date();
        var key = "" + Store.randomChar() + startTime;

        /**
         * 开始页面计时
         */
        this.setPageTimer(key, time, startTime, name, param);

        if (window.addEventListener) {
          window.addEventListener('unload', function () {
            _this2._unload(name, param, startTime, key);
          }, false);
        } else if (window.attachEvent) {
          window.attachEvent('unload', function () {
            _this2._unload(name, param, startTime, key);
          });
        }
      }
    }, {
      key: "_unload",
      value: function _unload(name, param, startTime, key) {
        this.clearPageTimer();
        var nowDate = new Date().getTime();
        // 处理特别情况，如果用户更改了系统时间，忽略点
        if (nowDate < startTime || nowDate - startTime > Store.OVERFLOW_TIME) {
          this.store.deleteStore(Store.Config.timer, key);
          return;
        }
        if (this.sa) {
          this.sa.track(name, _extends({}, param, {
            pageStartTime: startTime,
            pageTimer: +new Date() - startTime
          }));
          this.store.deleteStore(Store.Config.timer, key);
        }
      }
    }, {
      key: "setPageTimer",
      value: function setPageTimer(key, time, startTime, name, param) {
        var _this3 = this;

        this.pageTimer = setTimeout(function () {
          _this3.store.updateStore(Store.Config.timer, {
            key: key,
            time: time,
            startTime: startTime,
            updateTime: +new Date(),
            name: name,
            param: param
          });

          _this3.setPageTimer(key, time, startTime, name, param);
        }, time);
      }
    }, {
      key: "clearPageTimer",
      value: function clearPageTimer() {
        clearTimeout(this.pageTimer);
        this.pageTimer = null;
      }
    }]);
    return Main;
  }();

  // 返回单例


  var main = (function () {
    var instance;
    return function (param) {
      if (!instance) {
        instance = new Main(param);
      }
      return instance;
    };
  })();

  return main;

})));

/**
 * @module common/js/sensorsdata/sa
 * @desc 神策单例，做初始化用
 * @author lipenghui@qie.tv
 */
define('common/js/sensorsdata/sa', [
    'jquery',
    'penguin/cookie',
    'common/sa'
], function ($, Cookie, SaCreate) {
    var sa = SaCreate({
        autoTrack: true,
        inited: function (ctx) {
            var sa = ctx.sa;
            var uid = Cookie.get('qie_uid');
            sa.registerPage({
                Client: 'Web'
            });
            if (uid) {
                sa.login(uid);
            }
        }
    });
    return sa;
});

/**
 * @module js.common.level
 * @desc 返回level图标等相关信息
 */
define('common/js/level', [
    'penguin/context'
], function (Context) {

    // magic
    var highLevel = 100;
    // magic
    var highExp = 713965215;

    function verify(currentLevel) {
        if (!currentLevel) {
            currentLevel = 1;
        }
        if (currentLevel > highLevel) {
            currentLevel = highLevel;
        }
        return currentLevel;
    }

    function getSource(currentLevel) {
        var CDN = Context.get('sys.web_url');
        var publicPath = 'common/res/userlevel/';
        var suffix = '@2x.png';
        return CDN + publicPath + currentLevel + suffix;
    }

    function isOverLevel(currentLevel) {
        return currentLevel >= highLevel;
    }

    function getLevelInfo(currentLevel) {
        if (isOverLevel(currentLevel)) {
            return '已达最大等级: ' + highLevel;
        }
        return '用户等级: ' + currentLevel;
    }

    function getIcon(currentLevel) {
        var info = getLevelInfo(currentLevel);
        var source = getSource(verify(currentLevel));
        return '<img title="' + info + '" src="' + source + '" width="50" height="15">';
    }

    return {
        getSource: getSource,
        isOverLevel: isOverLevel,
        getIcon: getIcon,
        verify: verify,
        highLevel: highLevel,
        highExp: highExp
    };
});

/**
 * @module penguin/com/zoom
 * @desc 判断浏览器是否缩放
 * @author meibiying@douyu.tv
 */
define('common/js/zoom', [
    'jquery',
    'penguin/observer',
    'penguin/cookie'
], function($, Observer, Cookie) {
    var zoomPop = {
        cookieVal: '1',
        isPop: false,
        init: function() {
            this.pop();
            // this.bindEvt();
            Observer.on('mod.layout.screen.change', function(type) {
                if (zoomPop.detect()) {
                    zoomPop.pop();
                }
            });
        },

        detect: function() {
            this.ua = navigator.userAgent.toLowerCase();
            if (this.ua.indexOf('windows') == -1) {
                return false;
            }
            if (!!Cookie.get('zoomtip')) {
                return false;
            }
            return true;
        },

        cal: function() {
            var ratio = 0,
                screen = window.screen;
            if (window.devicePixelRatio !== undefined) {
                ratio = window.devicePixelRatio;
            } else if (~this.ua.indexOf('msie')) {
                if (screen.deviceXDPI && screen.logicalXDPI) {
                    ratio = screen.deviceXDPI / screen.logicalXDPI;
                }
            } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
                ratio = window.outerWidth / window.innerWidth;
            }
            if (this.ua.indexOf('mac') !== -1) {
                ratio = ratio / 2;
            }
            if (ratio) {
                ratio = Math.round(ratio * 100);
            }
            // 360安全浏览器下浏览器最大化时诡异的outerWidth和innerWidth不相等
            if (ratio === 99 || ratio === 101) {
                ratio = 100;
            }

            return ratio;
        },

        resize: function() {
            var zoom = this.cal();
            if (this.isPop && zoom && zoom == 100) {
                this.close();
                return;
            }

            var defaultW = 540,
                defaultH = 440,
                curw = defaultW * 100 / zoom,
                curh = defaultH * 100 / zoom;

            $('.pop-zoom-container').css({
                width: curw + 'px',
                height: curh + 'px',
                marginLeft: -curw / 2 + 'px',
                marginTop: -curh / 2 + 'px'
            });
        },

        pop: function() {
            var zoom = this.cal();
            if (!this.isPop && zoom !== 100) {
                var imgbg      = STATIC_CDN + 'common/res/zoom-error.png?v=' + VERSION;
                var imguncheck = STATIC_CDN + 'common/res/zoom-hide-uncheck.png?v=' + VERSION;
                var imgchecked = STATIC_CDN + 'common/res/zoom-hide-checked.png?v=' + VERSION;
                var str = [
                    '<div class="pop-zoom-container">',
                        '<div class="pop-zoom">',
                            '<img class="pop-zoom-bg" src="',
                            imgbg,
                            '">',
                            '<div class="pop-zoom-close">close</div>',
                            '<div class="pop-zoom-hide">',
                                '<img class="pop-zoom-hide-uncheck on" src="' + imguncheck + '">',
                                '<img class="pop-zoom-hide-checked" src="' + imgchecked + '">',
                            '</div>',
                        '</div>',
                    '</div>'
                ].join('');

                $('body').append(str);
                
                this.bindEvt();

                this.isPop = !this.isPop;
            }
            this.resize();
        },

        close: function() {

            if ($('.pop-zoom-hide-checked').hasClass('on')) {
                Cookie.set('zoomtip', this.cookieVal, 86400);
            }
            
            $('.pop-zoom-container').remove();

            this.isPop = !this.isPop;
        },

        bindEvt: function() {
            var _this = this;
            $('.pop-zoom-close').on('click', function() {
                _this.close();
            });

            $('.pop-zoom-hide').on('click', function() {
                $(this).find('.on').removeClass('on').siblings().addClass('on');
            });
        }
    };


    var application = function() {
        if (zoomPop.detect()) {
            zoomPop.init();
        }
    };

    $(application);
});

define('common/js/usermsg/app', [
    'jquery',
    'common/js/userinfo/userinfo',
    'penguin/observer'
], function($,userinfo,observer) {
   var usermsg = {
       init:function () {
           var _this = this;
           userinfo.then(function (data) {
               _this.setnum(data.message_num)
           })
       },
       setnum:function(num){
           this.num = num
           this.formatnum()
           observer.trigger('user.msg.num',this.fnum)
       },
       formatnum:function () {
           if(this.num>99){
               this.fnum = '99+'
           }else{
               this.fnum = this.num
           }
       },
       clearnum:function(){
           this.setnum(0)
       }

   }
    usermsg.init();
    return usermsg;
});

/**
 * @module js/common/header/header'
 * @desc 点播头部
 * @author tangqitao@qie.tv
 */
define('common/js/header/header', [
    'jquery',
    'penguin/observer',
    'common/js/srv/user',
    'common/js/userinfo/userinfo',
    'penguin/class',
    'penguin/lang',
    'penguin/template',
    'common/js/loginpop',
    'penguin/cookie',
    'common/hmt',
    'common/js/sensorsdata/sa',
    'common/js/level',
    'common/js/zoom',
    'common/js/usermsg/app',
    'common/third/artDialog',
    'common/third/iframeTools'
], function ($, Observer, User, UserInfo, Class, Util, template, loginpop, Cookie, _hmt, sa, level) {
    var Ticket = 0;

    var formatHisTime = function (ntime, htime) {
        var gap = ntime - htime;

        if (gap >= 604800) {
            return '很久以前';
        }
        if (gap >= 86400) {
            return Math.floor(gap / 86400) + '天前';
        }
        if (gap >= 3600) {
            return Math.floor(gap / 3600) + '小时前';
        }
        if (gap >= 1200) {
            return (Math.floor(Math.floor(gap / 60) / 15) * 15) + '分钟前';
        }
        if (gap >= 900) {
            return '15分钟前';
        }
        if (gap >= 60) {
            return Math.floor(gap / 60) + '分钟前';
        }

        return '刚刚';
    };
    var formatOnline = function (num) {
        num = parseInt(num, 10);

        if (num < 1) {
            return 0;
        }

        if (num >= 10000) {
            return (num / 10000).toFixed(1) + '万';
        }

        return num;
    };

    var Actions = {
        'action.user.balance.guess': function () {
            $('[data-login-user="guess"]').html(Ticket);
        },
        'action.user.balance.all': function () {
            var $login = $('.head-oth .o-login'),
                $levelimg = $login.find('.level'),
                $edan = $('[data-login-user="silver"]'),
                $egan = $('[data-login-user="gold"]'),
                $ticket = $('[data-login-user="guess"]'),
                $leverline = $login.find('.experience .leverline'),
                $leverscore = $login.find('.experience .leverscore'),
                $leveltip = $login.find('.experience [data-login-user="up-exp-num"]'),
                $userAuth = $login.find('.room-auth');
            UserInfo.then(function (data) {
                if (data.error === -1) {
                    return;
                }

                //等级
                $levelimg.html(level.getIcon(data.exp_info.current.lv));
                //还差经验
                if (data.exp_info.last_zdl === 0) {
                    // 满级啦
                    $leveltip.parent().html('您已经达到最高等级');
                }
                else {
                    $leveltip.html(data.exp_info.last_zdl);
                }
                $leverline.css({
                    width: data.exp_info.bar_l + '%'
                });
                $leverscore.html(data.exp_info.bar_l + '%');
                //鹅蛋 鹅肝 乐币
                $edan.html(data.edan);
                var gold = String(data.egan / 100);
                if (gold.indexOf(".") > -1) {
                    //鹅肝保留最多两位小数  var str = s.substring(0,s.indexOf(".") + 3);
                    gold = gold.substring(0, gold.indexOf(".")+3);
                }
                $egan.html(gold);

                Ticket = data.ticket ? data.ticket : 0;
                $ticket.html(data.ticket);

                $edan.parent().attr("title", "鹅蛋：" + data.edan);
                $egan.parent().attr("title", "鹅肝：" + gold);
                $ticket.parent().attr('title', '乐币：' + data.ticket);

                if (data.official_status) {
                    $userAuth.show();
                }
            });
        },
        'user.msg.num': function (num) {
            var $login = $('.head-oth .o-login'),
                msgnum = $login.find('.hmessagenum'),
                photonum = $login.find('.user-msg');
            if (num) {
                msgnum.show();
                photonum.show();
                photonum.html(num);
                msgnum.html(num);
            }
            else {
                msgnum.hide();
                photonum.hide();
            }

        }
    };

    var Header = Class({
        init: function (config) {
            this.config = $.extend(true, {}, {
                target: '#header'
            }, config);

            loginpop.init();

            this.render();
            this.bindEvt();
            this.login();
            this.initAction();

            this._sa = sa;
        },
        initAction: function () {
            for (var evt in Actions) {
                Observer.on(evt, Actions[evt]);
            }
        },
        render: function () {
            this.config.$el = $(this.config.target);
        },

        /**
         * [flanch description]
         * 搜索框
         * @return {[type]} [description]
         */
        flanch: function () {
            var $box = this.config.$el.find('.head-oth .o-search'),
                $ipt = $box.find('.s-ipt'),
                $ico = $box.find('i');

            if (!this.config.search) {
                this.config.search = {
                    boxw: $box.width(),
                    iptw: $ipt.width(),
                    icow: $ico.width()
                };
            }

            var conf = this.config.search,
                gap = conf.boxw - conf.iptw,
                // 增宽 20px
                inc = 38,
                newBoxw = conf.boxw + inc,
                newIptw = newBoxw - gap;

            $box.animate({
                width: newBoxw
            });
            $ipt.animate({
                width: newIptw
            });
        },

        narrowing: function () {
            if (!this.config.search) {
                return;
            }

            var $box = this.config.$el.find('.head-oth .o-search'),
                $ipt = $box.find('.s-ipt'),
                conf = this.config.search;

            $box.animate({
                width: conf.boxw
            });
            $ipt.animate({
                width: conf.iptw
            });
        },

        search: function ($ipt, failure) {
            /*eslint-disable */
            _hmt.push(["_trackEvent", "search", "click", "顶部导航-搜索输入框点击次数"]);
            /*eslint-enable */
            var word = $ipt.val(),
                fr = $ipt.data().from;
            var ver = '?v=' + new Date().getTime() + (fr ? '&from=' + fr : '');

            word = $.trim(word);
            failure = $.isFunction(failure) ? failure : function () {
                // empty function
            };

            if (!word) {
                $.dialog({
                    lock: true,
                    content: '搜索关键词还没有填写',
                    icon: 'warning',
                    ok: failure,
                    close: failure
                });
                return false;
            }

            word = encodeURIComponent(word).replace(new RegExp('\'', "g"), "");

            try {
                this._sa.triggerTrack('search', {
                    keyWord: word
                });
            }
            catch (e) {
                // nothing
            }

            location.href = '/search/' + word + ver;

        },

        /**
         * [preLoadHistory description]
         * 历史
         * @return {[type]} [description]
         */
        preLoadHistory: function () {
            var $box = this.config.$el.find('.head-oth .o-history'),
                $pop = $box.find('.h-pop');

            $pop.removeClass('state-2 state-3').addClass('state-1');
            $box.addClass('open');
            this.reqHistoryData();
            /*eslint-disable */
            _hmt.push(["_trackEvent", "h-history", "show", "顶部导航-历史记录总展示次数"]);
            /*eslint-enable */
        },

        reqHistoryData: function () {
            var _self = this;
            User.userHistory().then(function (data) {
                _self.resHistoryView(data);
            });
        },

        resHistoryView: function (data) {
            var $box = this.config.$el.find('.head-oth .o-history'),
                $pop = $box.find('.h-pop');

            if (!data || !data.nowtime || !data.history_list || !data.history_list.length) {
                $pop.removeClass('state-1 state-2').addClass('state-3');
                return;
            }

            var html,
                item,
                list = data.history_list,
                time = data.nowtime,
                /*eslint-disable */
                source = Util.string.join(
                    '{{each list as item i}}',
                        '{{if i < 5}}',
                            '<li data-hmt="h-history,click,顶部导航-历史弹窗总点击">',
                                '<p>',
                                    '<a href="/{{item.rid}}" target="_blank">',
                                        '<span class="historyVIcon {{item.video}}">视频</span>{{item.n}}',
                                    '</a>',
                                '</p>',
                                '<span>',
                                    '<a href="#" class="{{item.headCls}}">{{item.timegap}}</a>',
                                    '<a href="#" class="head-ico2">{{item.on}}</a>',
                                    '<a href="#" class="head-ico3">{{item.onlineStr}}</a>',
                                '</span>',
                            '</li>',
                        '{{/if}}',
                    '{{/each}}'
                ),
                /*eslint-enable */
                render = template.compile(source);

            for (var i = 0, len = list.length; i < len; i++) {
                item = list[i];
                if (Number(item.ls) === 9) {
                    item.rid = "video/v/" + item.oid;
                    item.video = '';
                }
                else {
                    item.video = 'none';
                    item.n = '[直播]' + item.n;
                }

                item.headCls = Number(item.ls) === 0 ? 'head-ico4' : 'head-ico1';
                item.timegap = formatHisTime(time, item.lt);
                item.onlineStr = formatOnline(item.room_hotv);
            }

            html = render({
                list: list
            });
            $pop.find('.h-list').html(html);
            $pop.removeClass('state-1 state-3').addClass('state-2');
        },

        clsHistoryView: function () {
            var $box = this.config.$el.find('.head-oth .o-history'),
                $pop = $box.find('.h-pop');

            $box.removeClass('open');
            $pop.removeClass('state-1 state-2 state-3');
        },

        /**
         * [preLoadFollow description]
         * 关注
         * @return {[type]} [description]
         */
        preLoadFollow: function () {
            var $box = this.config.$el.find('.head-oth .o-follow'),
                $pop = $box.find('.f-pop');

            $pop.removeClass('state-2 state-3').addClass('state-1');
            $box.addClass('open');
            this.reqFollowData();

            /*eslint-disable */
            _hmt.push(["_trackEvent", "h-follow", "show", "顶部导航-关注弹窗总展示次数"]);
            /*eslint-enable */
        },

        reqFollowData: function () {
            var _self = this;

            User.followList().then(function (data) {
                _self.resFollowView(data);
            });
        },

        resFollowView: function (data) {
            var $box = this.config.$el.find('.head-oth .o-follow'),
                $pop = $box.find('.f-pop');

            if (!data || !data.nowtime || !data.room_list || !data.room_list.length) {
                $pop.removeClass('state-1 state-2').addClass('state-3');
                return;
            }

            var html,
                item,
                list = data.room_list,
                time = data.nowtime,
                /*eslint-disable */
                source = Util.string.join(
                    '{{each list as item}}',
                        '<li data-hmt="h-follow,click,顶部导航-关注弹窗总点击">',
                            '<p>',
                                '<a href="/{{item.room_id}}" target="_blank">{{item.room_name}}</a>',
                            '</p>',
                            '<span>',
                                '<a href="/{{item.room_id}}" class="head-ico1">已播{{item.minnum}}分钟</a>',
                                '<a href="/{{item.room_id}}" class="head-ico2">{{item.nickname}}</a>',
                                '<a href="/{{item.room_id}}" class="head-ico3">{{item.onlineStr}}</a>',
                            '</span>',
                        '</li>',
                    '{{/each}}'
                ),
                /*eslint-enable */
                render = template.compile(source);

            for (var i = 0, len = list.length; i < len; i++) {
                item = list[i];
                item.minnum = parseInt((time - item.show_time) / 60, 10);
                item.onlineStr = formatOnline(item.room_hotv);
            }

            html = render({
                list: list
            });
            $pop.find('.f-list').html(html);
            $pop.removeClass('state-1 state-3').addClass('state-2');
        },

        clsFollowView: function () {
            var $box = this.config.$el.find('.head-oth .o-follow'),
                $pop = $box.find('.f-pop');

            $box.removeClass('open');
            $pop.removeClass('state-1 state-2 state-3');
        },

        login: function () {
            var uid = Cookie.get('qie_uid'),
                nick = Cookie.get('qie_nickname'),
                orid = Cookie.get('qie_own_room');

            if (!nick || !uid) {
                return;
            }

            this.initUser(uid, nick, orid || 0);
        },

        exit: function () {
            $.dialog.confirm('确认退出吗？', this.config.onExit);
        },

        renderUserInfo: function () {
            var $login = this.config.$el.find('.head-oth .o-login'),
                $levelimg = $login.find('.level'),
                $edan = $('[data-login-user="silver"]'),
                $egan = $('[data-login-user="gold"]'),
                $ticket = $('[data-login-user="guess"]'),
                $leverline = $login.find('.experience .leverline'),
                $leverscore = $login.find('.experience .leverscore'),
                $leveltip = $login.find('.experience [data-login-user="up-exp-num"]'),
                $userAuth = $login.find('.room-auth'),
                $medal = $login.find('.medal-list');

            UserInfo.then(function (data) {
                if (data.error === -1) {
                    return;
                }
                $login.addClass('success');
                //头像
                var imgsrc = data.avatar.middle;

                // var timestamp =  '&' + (new Date()).valueOf();

                $login.find('.l-pic').html('<img src="' + imgsrc + '">');
                $login.find('.l-menu .user-profile > .pic').html('<img src="' + imgsrc + '">');

                //等级
                $levelimg.html(level.getIcon(data.exp_info.current.lv));
                //还差经验
                if (data.exp_info.last_zdl === 0) {
                    // 满级啦
                    $leveltip.parent().html('您已经达到最高等级');
                }
                else {
                    $leveltip.html(data.exp_info.last_zdl);
                }
                $leverline.css({
                    width: data.exp_info.bar_l + '%'
                });
                $leverscore.html(data.exp_info.bar_l + '%');
                //鹅蛋 鹅肝 乐币
                $edan.html(data.edan);
                var gold = String(data.egan / 100);
                if (gold.indexOf(".") > -1) {
                    //鹅肝保留最多两位小数  var str = s.substring(0,s.indexOf(".") + 3);
                    gold = gold.substring(0, gold.indexOf(".")+3);
                }
                $egan.html(gold);

                Ticket = data.ticket ? data.ticket : 0;
                $ticket.html(data.ticket);
                $edan.parent().attr("title", "鹅蛋：" + data.edan);
                $egan.parent().attr("title", "鹅肝：" + gold);
                $ticket.parent().attr('title', '乐币：' + data.ticket);

                if (data.official_status) {
                    $userAuth.show();
                }

                // 奖牌
                var medalHtml = '';
                var ml = data.user_medal.data.length;
                var mState = data.user_medal.status === 0 ? 'unlock' : 'open';
                if (ml > 0) {
                    for (var i = 0; i < ml; i++) {
                        imgsrc = UPLOAD_CDN + 'effect_info/' + data.user_medal.data[i] + '_' + mState + '.png';
                        medalHtml += '<span><img src="' + imgsrc + '"></span>';
                    }
                }
                $medal.html(medalHtml);
            });
        },

        initUser: function (uid, nick, orid) {
            var _self = this;
            var $history = this.config.$el.find('.head-oth .o-history'),
                $follow = this.config.$el.find('.head-oth .o-follow'),
                $unlogin = this.config.$el.find('.head-oth .o-unlogin'),
                $login = this.config.$el.find('.head-oth .o-login');

            $login.find('.l-txt').text(nick);
            $login.find('.l-menu h4').text(nick);
            $history.removeClass('hide');
            $follow.removeClass('hide');
            $unlogin.addClass('hide');
            $login.removeClass('hide');

            //没有直播间的用户隐藏设置按钮
            if (Number(orid) === 0) {
                $login.find(".l-menu .set .setting").remove();
                $login.find(".l-menu .set .apply").show();
            }
            else {
                $login.find(".l-menu .set .apply").remove();
                $login.find(".l-menu .set .setting").show();
            }

            // 将用户数据请求从中拆解出来惰性请求
            _self.renderUserInfo();
        },

        bindEvt: function () {
            var $assort = this.config.$el.find('.head-nav .assort'),
                $search = this.config.$el.find('.head-oth .o-search'),
                $history = this.config.$el.find('.head-oth .o-history'),
                $follow = this.config.$el.find('.head-oth .o-follow'),
                $download = this.config.$el.find('.head-oth .o-download'),
                $unlogin = this.config.$el.find('.head-oth .o-unlogin'),
                $login = this.config.$el.find('.head-oth .o-login'),
                $expBarTip = this.config.$el.find('[data-exp-bar="tip"]'),
                $expBar = this.config.$el.find('[data-exp-bar="box"]'),
                self = this;

            // 简单显示隐藏事件绑定
            this.evtMenuToggle($assort, $download, $login);

            // 搜索输入框特效
            $search.find('input')
                .on('focus', function () {
                    self.flanch();
                })
                .on('blur', function () {
                    self.narrowing();
                })
                .on('keydown', function (e) {
                    if (e.keyCode === 13) {
                        var $ipt = $(this);

                        self.search($ipt, function () {
                            $ipt.focus();
                        });
                    }
                });

            $search.on('click', '.s-ico', function () {
                var $ipt = $search.find('input');

                self.search($ipt, function () {
                    $ipt.focus();
                });

                return false;
            });

            $history
                .on('mouseenter', function () {
                    var $el = $(this),
                        stop = $el.data('stop'),
                        timer = $el.data('timer');

                    if (timer) {
                        clearTimeout(timer);
                    }

                    timer = setTimeout(function () {
                        if (stop) {
                            return $el.data('stop', false);
                        }
                        self.preLoadHistory();
                    }, 100);

                    $el.data('timer', timer);
                })
                .on('mouseleave', function (evt) {
                    var $el = $(this),
                        mpos = {
                            x: evt.screenX,
                            y: evt.screenY
                        },
                        stop = $el.data('stop'),
                        timer = $el.data('timer');

                    if (timer) {
                        clearTimeout(timer);
                    }

                    timer = setTimeout(function () {
                        if (stop) {
                            var flag = self._checkMousePointIsInArea(mpos, $history, $history.find('.h-pop'));
                            if (!flag) {
                                self.clsFollowView();
                            }
                            return $el.data('stop', false);
                        }
                        self.clsHistoryView();
                    }, 100);

                    $el.data('timer', timer);
                });

            $history
                .on('mouseenter', '.h-pop', function () {
                    $history.data('stop', true);
                    setTimeout(function () {
                        $history.data('stop', false);
                    }, 100);
                }).on('mouseleave', '.h-pop', function () {
                    self.clsHistoryView();
                });

            $follow
                .on('mouseenter', function () {
                    var $el = $(this),
                        stop = $el.data('stop'),
                        timer = $el.data('timer');

                    if (timer) {
                        clearTimeout(timer);
                    }

                    timer = setTimeout(function () {
                        if (stop) {
                            return $el.data('stop', false);
                        }
                        self.preLoadFollow();
                    }, 100);

                    $el.data('timer', timer);
                })
                .on('mouseleave', function (evt) {
                    var $el = $(this),
                        mpos = {
                            x: evt.screenX,
                            y: evt.screenY
                        },
                        stop = $el.data('stop'),
                        timer = $el.data('timer');

                    if (timer) {
                        clearTimeout(timer);
                    }

                    timer = setTimeout(function () {
                        if (stop) {
                            var flag = self._checkMousePointIsInArea(mpos, $follow, $follow.find('.f-pop'));
                            if (!flag) {
                                self.clsFollowView();
                            }
                            return $el.data('stop', false);
                        }
                        self.clsFollowView();
                    }, 100);

                    $el.data('timer', timer);
                });

            $follow.on('mouseenter', '.f-pop', function () {
                $follow.data('stop', true);
                setTimeout(function () {
                    $follow.data('stop', false);
                }, 100);
            });

            $login
                .find('.quit')
                .eq(0)
                .click(function () {
                    loginpop.exit({
                        content: '确认退出吗？'
                    });
                });
            $('.head-oth').on('mouseenter', '.o-login.success', function () {
                /*eslint-disable */
                _hmt.push(["_trackEvent", "h-personal", "show", "顶部导航-个人中心展示次数"]);
                /*eslint-enable */
            });
            $unlogin.on('click', function () {
                loginpop.show();
                return false;
            });
            $expBar.on('mouseenter', function () {
                $expBarTip.removeClass('hide');
            });
            $expBar.on('mouseleave', function () {
                $expBarTip.addClass('hide');
            });
            $('.header-zt-entrance').on('click', 'a', function () {
                sa.triggerTrack('AdClick', {
                    sourceType: 'PC端顶部入口',
                    sourcePosition: 0,
                    roomID: '',
                    contentType: '',
                    // eslint-disable-next-line
                    Content_SubType: ''
                });
            });
        },

        // 简单的展示或隐藏事件
        evtMenuToggle: function () {
            var el, els = [].slice.call(arguments, 0), self = this;

            for (var i = 0, len = els.length; i < len; i++) {
                el = els[i];

                $(el)
                    .on('mouseenter', function () {
                        var $el = $(this),
                            timer = $el.data('timer');

                        if (timer) {
                            clearTimeout(timer);
                        }

                        timer = setTimeout(function () {
                            $el
                                .removeClass('out')
                                .addClass('open')
                                .find('.l-menu,.o-download-erweima')
                                .show();
                            if ($el.hasClass('o-login') && !$el.hasClass('success')) {
                                self.login();
                            }
                        }, 100);

                        $el.data('timer', timer);
                    })
                    .on('mouseleave', function () {
                        var $el = $(this),
                            timer = $el.data('timer');

                        if (timer) {
                            clearTimeout(timer);
                        }

                        timer = setTimeout(function () {
                            $el
                                .removeClass('open')
                                .addClass('out')
                                .find('.l-menu,.o-download-erweima')
                                .fadeOut(400);
                        }, 100);

                        $el.data('timer', timer);
                    });
            }
        },

        _checkMousePointIsInArea: function () {
            var args = [].slice.call(arguments, 0),
                mpos = args[0],
                doms = args.slice(1),
                flag = true;

            $.each(doms, function (i, dom) {
                var pos = dom.offset(),
                    siz = {
                        w: dom.width(),
                        h: dom.height()
                    },
                    xsco = {
                        s: pos.left,
                        e: pos.left + siz.w
                    },
                    ysco = {
                        s: pos.top,
                        e: pos.top + siz.h
                    },
                    isin = mpos.x >= xsco.s && mpos.x <= xsco.e && mpos.y >= ysco.s && mpos.y <= ysco.e;

                if (!isin) {
                    flag = false;
                    return false;
                }
            });

            return flag;
        }
    });

    var Proxy = {
        init: function (config) {
            return new Header(config);
        }
    };

    return Proxy;
});

/*! qieDialog v1.0.1 - Mon Mar 13 2017 19:52:19. (c) 2017 Miguel Castillo. Licensed under MIT */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define('common/qie/dialog/core',[],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.qieDialog = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Empty module
 */
(function() {
var _STATUS_OPEN = 'open';

    var _STATUS_CLOSE = 'close';

    var _config = {
        defaultTemplate: [
            '<div class="qie-dialog-mask">',
                '<div class="qie-dialog-dialog">',
                    '<div class="qie-dialog-header">',
                        '<div class="qie-dialog-title"></div>',
                        '<input class="qie-dialog-close" type="button" value="\xd7" />',
                    '</div>',
                    '<div class="qie-dialog-content"></div>',
                    '<div class="qie-dialog-footer">',
                        '<div class="qie-dialog-buttons"></div>',
                    '</div>',
                '</div>',
            '</div>'
        ].join(''),
        defaultzIndex: 1988,
        defaultCache: [],
    };

    var _noop = function () {};

    var _PREFIX_REG = /^qie-dialog-/;

    var _PREFIX_DEFAULT_REG = /^default/;

    var _css = function (el, styles) {
        el.style.cssText = styles;
    };

    var _hide = function (obj) {
        obj.style.display = 'none';
    };

    var _show = function (obj) {
        obj.style.display = 'block';
    };

    var _html = function (obj, html) {
        obj.innerHTML = html;
    };

    var _transToCamels = function (str) {
        var arr = str.split('-');

        for (var i = 1, len = arr.length; i < len; i++) {
            arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
        }
        return arr.join('');
    };

    var __toString = Object.prototype.toString;

    var __indexOf = Array.prototype.indexOf;

    var __trim = String.prototype.trim;

    var __slice = Array.prototype.slice;

    var _type = function (type) {
        return function (obj) {
            return __toString.call(obj) === '[object ' + type + ']';
        };
    };

    var _isArray = (function () {
        if (Array.isArray) {
            return Array.isArray;
        }
        return _type('Array');
    })();

    var _inArray = (function () {
        if (__indexOf) {
            return function (arr, s) {
                return !!~__indexOf.call(arr, s);
            };
        }
       return function (arr, s) {
            for (var i = 0, len = arr.length; i < len; i++) {
                if (arr[i] === s) {
                    return true;
                }
            }
            return false;
        };
    })();

    var _trim = (function () {
        if (__trim) {
            return function (str) {
                return __trim.call(str);
            };
        }
        return function (str) {
            return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        };
    })();

    var _dom = document.createElement('a');

    var _hasClass = (function () {
        if (_dom.classList) {
            return function (elm, name) {
                return elm.classList.contains(name);
            };
        }
        return function (elm, name) {
            return el.className.match(new RegExp('(\\s|^)(' + name + ')(\\s|$)'));
        };
    })();

    var _addClass = (function () {
        if (_dom.classList) {
            return function (elm, name) {
                if (elm && name && !_hasClass(elm, name)) {
                    elm.classList.add(name);
                }
            };
        }
        return function (elm, name) {
            if (elm && name && !_hasClass(elm, name)) {
                elm.className += _trim(elm.className) + ' ' + name;
            }
        };
    })();

    var _removeClass = (function () {
        if (_dom.classList) {
            return function (elm, name) {
                if (elm && name && _hasClass(elm, name)) {
                    elm.classList.remove(name);
                }
            };
        }
        return function (elm, name) {
            if (elm && name && _hasClass(elm, name)) {
                el.className = el.className.replace(RegExp('(\\s|^)(' + cls + ')(\\s|$)'), '$3');
            }
        };
    })();

    var _fix = function (evt) {
        var event = evt || window.event;

        if (event.target) {
            return event;
        }

        var ret = {};

        for (var i in event) {
            ret[i] = event[i];
        }

        ret.target = event.srcElement || document;
        ret.preventDefault = function preventDefault() {
            event.returnValue = false;
        };
        ret.stopPropagation = function stopPropagation() {
            event.cancelBubble = false;
        };

        return ret;
    };

    var _ElementExp = /Element/;

    var _isDom = function (obj) {
        return _ElementExp.test(__toString.call(obj));
    };

    var _MAXLENGTH = 4294967296;

    var _isArrayLike = function (o) {
        if (
            o &&
            typeof o === 'object' &&
            isFinite(o.length) &&
            o.length >= 0 &&
            o.length === Math.floor(o.length) &&
            o.length < _MAXLENGTH
        ) {
            return true;
        }
        return false;
    };

    var _toArray = function (arr) {
        if (arr === undefined) {
            return [];
        }
        if (!_isArrayLike(arr)) {
            arr = [arr];
        }
        return __slice.call(arr);
    };

    var _isObject = _type('Object');

    var _isFunction = _type('Function');

    var _isString = _type('String');

    var _extend = function () {
        var args = arguments;
        var main;
        var extend;

        if (!args.length) {
            return;
        }

        if (args.length === 1) {
            main = DialogProto;
            extend = args[0];
        }

        if (args.length === 2) {
            main = args[0];
            extend = args[1];
        }

        if (!_isObject(extend)) {
            return;
        }

        for (var property in extend) {
            if (extend.hasOwnProperty(property)) {
                main[property] = extend[property];
            }
        }
    };

    var _random = function () {
        return Math.random().toString(16).substring(2);
    };

    var _observable = function (ctx) {
        ctx = ctx || {};

        var _callback = {};

        ctx.trigger = function () {
            var argv = _toArray(arguments);
            var name = argv[0];
            if (_callback[name]) {
                for (var i = 0, len = _callback[name].length; i < len; i++) {
                    _callback[name][i].apply(_callback[name][i].ctx || ctx, argv.slice(1));
                }
            }
        };

        ctx.off = function (name, fn) {
            if (!name) {
                _callback = {};
                return;
            }

            if (!fn) {
                _callback[name] = [];
                return;
            }

            if (_callback[name]) {
                for (var i = 0, len = _callback[name].length; i < len; i++) {
                    if (_callback[name][i] === fn) {
                        return _callback[name].splice(i, 1);
                    }
                }
            }
            return ctx;
        };

        ctx.on = function (name, fn) {
            if (_isArray(fn)) {
                fn.ctx = name;
                return ctx.on(fn[0], fn[1]);
            }
            var _callbacks = _callback[name] ? _callback[name] : (_callback[name] = []);
            _callbacks.push(fn);
            return ctx;
        };

        return ctx;
    };

    var _every = function (arr, fn) {
        var len = arr.length;
        var i = 0;
        while (i < len) {
            var value = arr[i];
            if (!fn.call(null, value, i)) {
                return false;
            }
            i++;
        }

        return true;
    };

    var _offset = function (dom, value) {
        // fix bug
        if (!dom || !dom.getBoundingClientRect) {
            return {
                top: 0,
                left: 0
            }
        }
        // fix bug
        if (!dom.getClientRects().length) {
            return {
                top: 0,
                left: 0
            }
        }
        var rect = dom.getBoundingClientRect();
        var wind = window;
        var docElem = document.documentElement;
        return {
            top: rect.top + (wind.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
            left: rect.left + (wind.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
        };
    }

    var _addEvent = (function () {
        if (window.addEventListener) {
            return function (el, evt, fn) {
                el.addEventListener(evt, fn, false);
            };
        }
        return function (el, evt, fn) {
            el.attachEvent('on' + evt, fn);
        };
    })();

    var _removeEvent = (function () {
        if (window.removeEventListener) {
            return function (el, evt, fn) {
                el.removeEventListener(evt, fn, false);
            };
        }
        return function (el, evt, fn) {
            el.detachEvent('on' + evt, fn);
        };
    })();

    function Button(ctx, wrap, options) {
        this.init(ctx, wrap, options);
    };

    var ButtonProto = Button.prototype;

    ButtonProto.init = function (ctx, wrap, options) {
        this.parent = ctx;
        this.wrap = wrap;
        this.options = options;
        var newButton = document.createElement('button');
        newButton.value = this.options.value === undefined ? '' : this.options.value;
        newButton.innerHTML = this.options.text || (this.options.value === undefined ? '' : this.options.value) || '';
        if (this.options.id) {
            newButton.id = this.options.id;
        }

        if (this.options.name) {
            newButton.name = this.options.name;
        }
        newButton.className = 'qie-dialog-btn' + (this.options.className ? (' ' + this.options.className) : '');
        this.wrap.appendChild(newButton);
        this.dom = newButton;
        newButton.onclick = _noop;
        this.proxy(this.options.callback);
        if (this.options.proxy) {
            this.proxy(this.options.proxy);
        }

        if (this.options.disabled !== undefined) {
            this.disable(this.options.disabled);
        }
    };

    ButtonProto.disable = function (disabled) {
        if (disabled === undefined) {
            if (this.dom.hasAttribute) {
                return this.dom.hasAttribute('disabled');
            }
            else {
                return this.dom.getAttribute('disabled') !== null;
            }
        }
        disabled = !!disabled;
        if (disabled) {
            this.dom.setAttribute('disabled', 'disabled');
        }
        else {
            this.dom.removeAttribute('disabled');
        }
    };

    ButtonProto.free = function () {
        this.dom.onclick = null;
        this.wrap = null;
        this.options = null;
        this.dom = null;
    };

    ButtonProto.proxy = function (fn) {
        var cb = this.dom.onclick;
        var self = this;

        this.dom.onclick = function (evt) {
            var event = _fix(evt);
            if (fn.call(self, event) !== false) {
                cb.call(self, event);
            }
        };
    };

    ButtonProto.value = function (v) {
        if (v) {
            this.dom.value = v;
            return;
        }
        return this.dom.value;
    };

    ButtonProto.show = function () {
        _show(this.dom);
    };

    ButtonProto.hide = function () {
        _hide(this.dom);
    };

    function Dialog(options) {
        options = options || {};
        if ((this instanceof Dialog) === false) {
            return new Dialog(options);
        }
        _observable(this);
        this._init(options);
        return this;
    }

    Dialog.set = function (key, value) {
        if (_PREFIX_DEFAULT_REG.test(key)) {
            throw new Error('Word `default` can\'t be use as key\'s prefix');
        }
        _config[key] = value;
        return Dialog;
    };

    Dialog.get = function (key) {
        return _config[key];
    };

    Dialog.opened = function () {
        var list = Dialog.get('defaultCache');
        if (list.length === 0) {
            return false;
        }
        return _every(list, function (item) {
            return item._status === 'open';
        });
    };

    Dialog.Button = Button;

    var util = {
        inArray: function (arr, s) {
            if (!_isArray(arr) || s === undefined) {
                return false;
            }
            return _inArray(arr, s);
        },
        isArray: _isArray,
        isObject: _isObject,
        isFunction: _isFunction,
        isString: _isString,
        hasClass: function (elm, className) {
            if (!elm || !className) {
                return false;
            }
            return _hasClass(elm, className);
        },
        trim: _trim,
        addClass: _addClass,
        removeClass: _removeClass,
        isDom: _isDom,
        toArray: _toArray,
        extend: _extend,
        observable: _observable,
        randomStr: _random,
        isArrayLike: _isArrayLike,
        hide: _hide,
        show: _show,
        css: _css,
        toCamels: _transToCamels,
        every: _every,
        addEvt: _addEvent,
        removeEvt: _removeEvent,
        eventFix: _fix,
        html: _html,
        _offset: _offset
    };

    Dialog.util = util;

    Dialog.VERSION = '1.0.0';

    var DialogProto = Dialog.prototype;

    DialogProto._init = function (options) {
        this.options = options;
        this._id = _random();
        this.btnGroups = [];
        this.time(this.options.time);

        this.options.init && this.options.init.call(this);

        this._create();

        this._getDom();

        this._initMask();

        this._initHeader();

        this._initContent();

        this._initFooter();

        this._initVisible();

        this._setPos();

        this._bindEvt();

        var _cache = Dialog.get('defaultCache');
        _cache.push(this);

        this.options.inited && this.options.inited.call(this);

        this._resize();
    };

    DialogProto._resize = function () {
        
    };

    DialogProto.resize = function () {
        this._setPos();
    };

    DialogProto._bindEvt = function () {
        var self = this;

        self.on('resize', function () {
            self._setPos();
            self.options.resize && self.options.resize.call(self);
        });

        self.on('close', function () {
            self.options.close && self.options.close.call(self);
        });

        var _close = function () {
            self.trigger('close');
        };

        var _click = function (e) {
            var event = _fix(e);
            self.trigger('click', event);
        };

        var __isfirefox = document.mozHidden;

        var __supportOnWheel = 'onwheel' in document;

        var mousewheel = __isfirefox ? 'DOMMouseScroll' : __supportOnWheel ? 'wheel' : 'mousewheel';

        var _prevent = function (e) {
            e.preventDefault();
            e.stopPropagation();
        };

        self._customCallback = [{
            tag: 'wrap',
            evt: 'dbclick',
            fn: _close
        },
        {
            tag: 'close',
            evt: 'click',
            fn: _close
        },
        {
            tag: 'wrap',
            evt: 'click',
            fn: _click
        }
        ,
        {
            tag: 'mask',
            evt: mousewheel,
            fn: _prevent
        }
        ];

        for (var i = 0, len = self._customCallback.length; i < len; i++) {
            var evt = self._customCallback[i];
            _addEvent(self.dom[evt.tag], evt.evt, evt.fn);
        }

        if (self.options.events) {
            for (var i = 0, len = self.options.events.length; i < len; i++) {
                var evt = self.options.events[i];
                if (self.dom[evt.tag]) {
                    var fn = function (evts) {
                        var event = _fix(evts);
                        evt.fn.call(self, event);
                    };
                    var cb = {
                        evt: evt.evt,
                        tag: evt.tag,
                        fn: fn
                    };
                    _addEvent(self.dom[evt.tag], evt.evt, fn);
                    self._customCallback.push(cb);
                }
            }
        }
    };

    DialogProto._initVisible = function () {
        if (this.options.visible) {
            this.show();
        }
        else {
            this.hide();
        }
    };

    DialogProto.show = function () {
        _removeClass(this.dom.wrap, 'status-close');
        _addClass(this.dom.wrap, 'status-open');
        this._status = _STATUS_OPEN;
        this.dom.mask.style.visibility = 'visible';
    };

    DialogProto.hide = function () {
        _removeClass(this.dom.wrap, 'status-open');
        _addClass(this.dom.wrap, 'status-close');
        this._status = _STATUS_CLOSE;
        this.dom.mask.style.visibility = 'hidden';
    };

    DialogProto.visible = function (booleanVal) {
        if (booleanVal === undefined) {
            return this.dom.mask.style.visibility !== 'hidden';
        }
        else {
            if (booleanVal) {
                this.show();
            }
            else {
                this.hide();
            }
        }
    };

    DialogProto._initContent = function () {
        var content = this.options.content || '';
        this.content(content);
    };

    DialogProto._getDom = function () {
        var wrap = document.getElementById(this._id);
        this.dom = {};
        var elements = wrap.getElementsByTagName('*');

        for (var i = 0, len = elements.length; i < len; i++) {
            var name = _transToCamels(elements[i].className.split(' ')[0].replace(_PREFIX_REG, ''));
            this.dom[name] = elements[i];
        }
        this.dom.wrap = wrap;
    };

    DialogProto._create = function () {
        var body = this.options.attach || document.body;
        var wrap = document.createElement('div');
        wrap.id = this._id;
        var className = 'qie-dialog status-close';
        if (this.options.theme) {
            className += ' ' + this.options.theme;
        }
        wrap.className = className;
        var css = [
            'position:absolute',
            'z-index:' + (this.options.zIndex || Dialog.get('defaultzIndex'))
        ];
        if (this.options.attach) {
            css = css.concat(['top:0','left:0']);
        }
        _css(wrap, css.join(';'));
        var template = this.options.template || Dialog.get('defaultTemplate');
        _html(wrap, template);
        body.appendChild(wrap);
    };

    DialogProto._setPos = function () {
        var dialogWidth = this.dom.dialog.offsetWidth;
        var dialogHeight = this.dom.dialog.offsetHeight;
        var left = 0;
        var top = 0;
        var maskWidth = 0;
        var maskHeight = 0;
        var windowWidth = 0;
        var windowHeight = 0;
        

        if (this.options.attach) {
            var attachDomWidth = this.options.attach.offsetWidth;
            var attachDomHeight = this.options.attach.offsetHeight;
            top = (attachDomHeight - dialogHeight) / 2;
            left = (attachDomWidth - dialogWidth) / 2;
        }
        else {
            if (this.options.lock) {
                maskWidth = this.dom.mask.offsetWidth;
                maskHeight = this.dom.mask.offsetHeight;
                left = (maskWidth - dialogWidth) / 2;
                top = (maskHeight - dialogHeight) / 2;
            }
            else {
                var rootElement = document.documentElement;
                windowWidth = rootElement.clientWidth;
                windowHeight = rootElement.clientHeight;
                left = (windowWidth - dialogWidth) / 2;
                top = (windowHeight - dialogHeight) / 2;
            }
        }

        var zIndex = (this.options.zIndex || Dialog.get('defaultzIndex')) + 2;

        var css = [
            'position:absolute',
            'zIndex:' + zIndex,
            'left:' + parseInt(left) + 'px',
            'top:' + parseInt(top) + 'px'
        ]

        if (!this.options.lock) {
            css[0] = 'position:fixed';
        }

        if (this.options.attach) {
            css[0] = 'position: absolute';
        }

        css = css.join(';');

        _css(this.dom.dialog, css);
    };

    DialogProto._initMask = function () {
        var css = [
            'position:fixed',
            'z-index:' + ((this.options.zIndex || Dialog.get('defaultzIndex')) + 1),
            'left:0',
            'top:0',
            'right:0',
            'bottom:0',
            'margin:auto',
            'overflow:hidden',
        ];
        if (this.options.lock) {
            _css(this.dom.mask, css.join(';'));
        }
    };

    DialogProto.destroy = function () {
        for (var i = 0, len = this.btnGroups.length; i < len; i++) {
            this.btnGroups[i].free();
        }

        this.btnGroups = null;

        for (var i = 0, len = this._customCallback; i < len; i++) {
            var evt = this._customCallback[i];
            _removeEvent(this.dom[evt.tag], evt.evt, evt.fn);
        }

        this._customCallback = null;

        var _cache = Dialog.get('defaultCache');

        for (var i = 0, len = _cache.length; i < len; i++) {
            if (_cache[i] === this) {
                _cache.splice(i, 1);
                break;
            }
        }

        var dom = document.getElementById(this._id);

        var parent = dom.parentNode;

        parent.removeChild(dom);

        this.options = null;
        this._id = null;

        this.trigger('closed');

        this.off();

        this.dom = null;

        this._status = null;
    };

    DialogProto.close = function () {
        this.destroy();
    };

    DialogProto.lock = function () {
        this.options.lock = true;
        this._initMask();
        this.trigger('resize');
    };

    DialogProto.unlock = function () {
        this.options.lock = false;
        this._initMask();
        this.trigger('resize');
    };

    DialogProto._initHeader = function () {
        if (this.options.header === false) {
            _hide(this.dom.header);
            return;
        }

        this._initClose();

        var title = this.options.title || '';

        this.title(title);
    };

    DialogProto._initFooter = function () {
        if (this.options.footer === false) {
            _hide(this.dom.footer);
            return;
        }

        var buttons = this.options.buttons || [];

        this.button(buttons);
    };

    DialogProto._initClose = function () {
        if (this.options.closebtn === false) {
            _hide(this.dom.close);
        }
    };

    DialogProto.title = function (title) {
        _html(this.dom.title, title);
        this.trigger('resize');
    };

    DialogProto.button = function (list) {
        for (var i = 0, len = list.length; i < len; i++) {
            this.btnGroups.push(new Button(this, this.dom.buttons, list[i]));
        }
        this.trigger('resize');
    };

    DialogProto.content = function (htmlstr) {
        _html(this.dom.content, htmlstr);
        this.trigger('resize');
    };

    // 自动关闭功能
    DialogProto.time = function (time) {
        var self = this;
        if (self._timer) {
            clearTimeout(self._timer);
        }

        if (time) {
            self._timer = setTimeout(function () {
                self.trigger('close');
            }, time);
        }
    };

    _addEvent(window, 'resize', function () {
        var list = Dialog.get('defaultCache');
        for (var i = 0, len = list.length; i < len; i++) {
            list[i].trigger('resize');
        }
    });

    DialogProto.animate = function () {};

    module.exports = Dialog;
})();

},{}]},{},[1])(1)
});
define("member/js/pay/charge/mod/guessPayDialog",[
    'common/qie/dialog/core'
],function(Dialog){
    function toQfw(n) {
        var reg = /(?=(?!(\b))(\d{3})+$)/g;
        if(n<1000||!n){
            return n;
        }
        return n.toString().replace(reg,',');
    }
    var util = Dialog.util;

    util.extend(Dialog, {
        success: function (options, callbacks) {
            if(Dialog.util.isFunction(options)){
                callbacks = options;
                options   = {};
            }

            if (!callbacks) {
                callbacks = function () {
                    this.parent.trigger('close');
                };
            }
            else {
                var fn = callbacks;
                callbacks = function (evt) {
                    fn.call(this, evt);
                    this.parent.trigger('close');
                };
            }
            var title = options.title || (options.title === false ? '' : '提示');
            var content = options.content;
            var ok = options.ok || callbacks;
            var cancel = options.cancel || callbacks;
            var okText = options.okText || '确定';
            var cancelText = options.cancelText || '取消';
            var opts = {
                title: title,
                closebtn: false,
                content: content,
                buttons: [
                    {
                        value: true,
                        callback: ok,
                        text: okText,
                        className: 'ok'
                    }
                    // {
                    //     value: false,
                    //     callback: cancel,
                    //     text: cancelText,
                    //     className: 'cancel'
                    // }
                ],
                close: function () {
                    var self = this;
                    self.hide();
                    setTimeout(function () {
                        self.close();
                    }, 300);
                },
                theme: 'confirm guessPaySuccess',
                lock: true,
                visible: false,
                inited: function () {
                    var self = this;
                    self.visible(true);
                    self.resize();
                }
            };

            return Dialog(opts);
        },
        convertConfirm: function (options, callbacks) {
            if(Dialog.util.isFunction(options)){
                callbacks = options;
                options   = {};
            }

            if (!callbacks) {
                callbacks = function () {
                    this.parent.trigger('close');
                };
            }
            else {
                var fn = callbacks;
                callbacks = function (evt) {
                    fn.call(this, evt);
                    this.parent.trigger('close');
                };
            }
            var title = '是否确定兑换';
            // var content = options.content;
            var content = [
                '<p>兑换详情 ：<span>'+options.convert+'</span>乐币</p>',
                '<p>应付鹅肝 ：<span>'+options.pay+'</span>鹅肝</p>'
            ].join('')
            var ok = options.ok || callbacks;
            var cancel = options.cancel || callbacks;
            var okText = options.okText || '确定';
            var cancelText = options.cancelText || '取消';
            var opts = {
                title: title,
                closebtn: false,
                content: content,
                buttons: [
                    {
                        value: true,
                        callback: ok,
                        text: okText,
                        className: 'ok'
                    },
                    {
                        value: false,
                        callback: cancel,
                        text: cancelText,
                        className: 'cancel'
                    }
                ],
                close: function () {
                    var self = this;
                    self.hide();
                    setTimeout(function () {
                        self.close();
                    }, 300);
                },
                theme: 'confirm convertConfirm',
                lock: true,
                visible: false,
                inited: function () {
                    var self = this;
                    self.visible(true);
                    self.resize();
                }
            };

            return Dialog(opts);
        },
        awardConfirm: function (options, callbacks) {
            if(Dialog.util.isFunction(options)){
                callbacks = options;
                options   = {};
            }

            if (!callbacks) {
                callbacks = function () {
                    this.parent.trigger('close');
                };
            }
            else {
                var fn = callbacks;
                callbacks = function (evt) {
                    fn.call(this, evt);
                    this.parent.trigger('close');
                };
            }
            var title = '是否确定兑换';
            // var content = options.content;
            var content = [
                '<p>兑换详情 ：<span>'+options.convert+'</span>个道具</p>',
                '<p>应付鹅肝 ：<span>'+options.pay+'</span>鹅肝</p>'
            ].join('')
            var ok = options.ok || callbacks;
            var cancel = options.cancel || callbacks;
            var okText = options.okText || '确定';
            var cancelText = options.cancelText || '取消';
            var opts = {
                title: title,
                closebtn: false,
                content: content,
                buttons: [
                    {
                        value: true,
                        callback: ok,
                        text: okText,
                        className: 'ok'
                    },
                    {
                        value: false,
                        callback: cancel,
                        text: cancelText,
                        className: 'cancel'
                    }
                ],
                close: function () {
                    var self = this;
                    self.hide();
                    setTimeout(function () {
                        self.close();
                    }, 300);
                },
                theme: 'confirm convertConfirm',
                lock: true,
                visible: false,
                inited: function () {
                    var self = this;
                    self.visible(true);
                    self.resize();
                }
            };

            return Dialog(opts);
        },

        noEnoughConfirm: function ( options,callbacks) {
            if(Dialog.util.isFunction(options)){
                callbacks = options;
                options   = {};
            }

            if (!callbacks) {
                callbacks = function () {
                    this.parent.trigger('close');
                };
            }
            else {
                var fn = callbacks;
                callbacks = function (evt) {
                    fn.call(this, evt);
                    this.parent.trigger('close');
                };
            }
            var title = '当前鹅肝不足';

            var content = [
                '<span class="noEnoughTitle">是否充值所需鹅肝，并直接兑换乐币?</span>',
                '<div class="noEnoughMessage">',
                    '<p>应付鹅肝 : <span>'+toQfw(options.pay)+'</span>鹅肝</p>',
                    '<p>当前鹅肝 : <span>'+toQfw(options.hasEg)+'</span>鹅肝</p>',
                '</div>',
                '<div class="oEnoughTip">还需充值<p>'+toQfw(Math.floor(options.pay)-Math.floor(options.hasEg))+'</p>元<span>(1元＝1鹅肝)</span></div>',
                '<div class="noEnoughSelect">',
                    '<p val="1"><i class="optionIcon"></i><i class="guessZIcon"></i>支付宝</p>',
                    '<p val="2"><i class="optionIcon"></i><i class="guessWIcon"></i>微信</p>',
                '</div>'
            ].join('');
            var ok = options.ok || callbacks;
            var cancel = options.cancel || callbacks;
            var okText = options.okText || '确定';
            var cancelText = options.cancelText || '取消';
            var opts = {
                title: title,
                closebtn: false,
                content: content,
                buttons: [
                    {
                        value: true,
                        callback: ok,
                        text: okText,
                        className: 'ok'
                    },
                    {
                        value: false,
                        callback: cancel,
                        text: cancelText,
                        className: 'cancel'
                    }
                ],
                close: function () {
                    var self = this;
                    self.hide();
                    setTimeout(function () {
                        self.close();
                    }, 300);
                },
                theme: 'confirm noEnough',
                lock: true,
                visible: false,
                inited: function () {
                    var self = this;
                    self.visible(true);
                    self.resize();
                }
            };
            $('body').on('click','.noEnoughSelect p',function () {
                var $this = $(this);
                $this.siblings().removeClass('select')
                $this.addClass('select');
            })
            return Dialog(opts);
        }
    });

    return Dialog;

});


/**
 * 个人中心支付页
 * @author  李笑
 * @date 2016-08-29
 * @mail lixiao@qie.tv
 */

define("member/js/pay/charge/mod/payPage",[
    'jquery',
    'member/js/pay/charge/mod/guessPayDialog',
    'common/js/userinfo/userinfo'
],function ($,payDialog,userInfo){
    var api = {
        rmbPayGuessBi:function (payData) {
            return $.ajax({
                "url":'/pay/submitcharge_guess',
                "data":payData,
                "type":"post"
            })
        },
        egPayGuessBi:function (payData) {
            return $.ajax({
                "url":'/pay/egan_exchange',
                "data":payData,
                "type":"post"
            })
        },
        isFirstPay:function () {
            return $.ajax({
                "url":'/api/member/get_first_buy_status',
                "type":"post"
            })
        },
        'isAward':function () {
            return $.ajax({
                "url":'/pay/get_pay_status',
                "type":"post"
            })
        }
    }
    var params = {
        rate : 1000
    }

    //充值
    var app = {
        init:function (callback) {
            this.leftNav = $("[qie-charge-left-tab]");
            this.leftContent =$('[qie-charge-nav-tab-content]');
            this.bottomMessage = $(".qie-recharge-result-message")
            this.callback = callback;
            this.initEvent();
            this.setDefault();
            this.firstPay();
            this.isSwitchEg();
        },
        initEvent:function () {
            var _this = this;
            this.leftNav.on("click",function () {
                var attr = $(this).attr("qie-charge-left-tab");
                _this.leftNav.removeClass("cur");
                $(this).addClass("cur");
               
                _this.leftContent.hide();
                
                $("[qie-charge-nav-tab-content="+attr+"]").fadeIn();
                _this.callback&&_this.callback();
                _this.showBottomMessage(attr);
                
                
            
            })
        },
        firstPay:function () {
            api.isFirstPay().done(function (data) {
                if(data.error==0&&data.data.first_buy_status==1){
                    $(".first-pay-get-tip,.first-pay-select-tip").removeClass('none');
                }else{
                    $(".first-pay-get-tip,.first-pay-select-tip").addClass('none');
                }
            })
        },
        isSwitchEg:function () {
            var _this = this;
            api.isAward().done(function (data) {
                if(data.error==0&&data.data.status==0){
                    _this.showAward()
                }else{
                    _this.showEg();
                }
            })
        },
        showAward:function () {
            $('[qie-charge-left-tab="award"]').removeClass('none');
            $('[qie-charge-left-tab="guess"]').remove();
            $('[qie-charge-nav-tab-content=guess]').remove();
        },
        showEg:function () {
            $('[qie-charge-left-tab="award"]').remove();
            $('[qie-charge-nav-tab-content=award]').remove();
            $('[qie-charge-left-tab="guess"]').removeClass('none');
        },
        showBottomMessage:function (val) {
           if(val=='pay'){
               this.bottomMessage.show();
           }else{
               this.bottomMessage.hide();
           }
        },
        setDefault:function(){
            this.leftNav.filter(":eq(0)").click();
            $('#recharge-num a:eq(0)').click();
        }
    }

    //充值乐币
    var guessApp = {
        "init":function () {
            this.nav = $("[qie-guess-nav-tab]");
            this.navContent = $("[qie-guess-nav-tab-content]");
            this.rate = $("[guessbi-rate]")
            this.render();
            this.initEvent();
            this.setDefault();
        },
        "render":function () {
            this.rate.html('(1元='+params.rate+'乐币)')
        },
        "initEvent":function () {
            var _this = this;
            this.nav.on("click",function () {
                var attr = $(this).attr("qie-guess-nav-tab");
                _this.nav.removeClass("cur");
                $(this).addClass("cur");
                _this.navContent.hide();
                $("[qie-guess-nav-tab-content="+attr+"]").fadeIn();
            })
        },
        setDefault:function () {
            this.nav.filter(":eq(0)").click();
        }
    }


    //鹅肝兑换乐币
    var egGuessBi = {
        'init':function () {
            this.paySection = $('#eg-recharge-guess-num')
            this.getNum = this.paySection.find('input');
            this.quickSelect = this.paySection.find('a');
            this.userGet = $("#eg-recharge-get-guessbi");
            this.userPay = $("#user-need-recharge-eg");
            this.submit = $("#eg-charge-submit");
            // this.form = $("#rmb_pay_guess_bi");
            this.firstPayMessage = $('[qie-charge-nav-tab-content=guess] .pay-eg-message')
            this.userHasEgan=$('[user-has-egan]');
            this.userHasGuessBi=$('[user-has-guess-bi]');
            this.initEvent();
            this.first = false;
            this.firstPay()
        },

        countPayNum:function (num) {
            return Math.floor(num/params.rate);
        },
        validateBuyNum:function (num) {
            var buyNum = num;
            if(isNaN(num)){
                buyNum = parseInt(num)
                this.getNum.val(buyNum);
            }
            return buyNum;
        },
        enoughEg:function (guessBi) {
            if(Number(userEgan)<Number(guessBi)){
                return false;
            }else{
                return true;
            }
        },
        firstPay:function (message) {
            var _this = this;
            userInfo.then(function (data) {
                if(data.first_exchange_guess_coin_status){
                    _this.first = true;
                    message&&_this.firstPayMessage.html(message)
                    $("[qie-charge-nav-tab-content=guess]").addClass('firstPay');
                }
            })
        },
        removeFirstPay:function () {
            this.first = false;
            userInfo.userInfoData.first_exchange_guess_coin_status = 0;
            $("[qie-charge-nav-tab-content=guess]").removeClass('firstPay');
        },
        clearUserSelect:function (clearType) {
            this.getNum.val('')
            this.firstPayMessage.html('');
            this.userGet.html(0);
            this.userPay.html(0);
            this.quickSelect.removeClass('curOther');
            if(clearType){
                this.getNum.blur();
            }
        },
        initEvent:function () {
            var _this = this;
            this.getNum.on("keyup",function () {
                var buyNum = _this.validateBuyNum($(this).val().trim()),
                    userGet = toQfw(_this.countPayNum(buyNum)*params.rate);
                _this.userGet.html(userGet);
                _this.firstPay('赠送'+userGet+'乐币')
                _this.userPay.html(toQfw(_this.countPayNum(buyNum)))
            })
            this.quickSelect.on('click',function () {
                _this.clearUserSelect(true);
                $(this).siblings().removeClass('curOther')
                if($(this)[0].tagName === 'INPUT'){
                    $(this).parent('.other-num').addClass("curOther");
                }
                $(this).addClass('curOther')
                  
                var buyNum = $(this).attr('val');
                _this.userGet.html(toQfw(buyNum));
                _this.userPay.html(toQfw(_this.countPayNum(buyNum)))
            })
            // 获取焦点时添加父级class
            this.getNum.focus(function(){
                _this.clearUserSelect();
                $('.other-num').addClass("curOther");
            })

            this.getNum.blur(function(){
                $('.other-num').removeClass("curOther");
            });

            this.submit.on("click",function () {
                var val = _this.quickSelect.filter('.curOther').attr("val")||_this.getNum.val();
                    getNum = _this.validateBuyNum(val.trim()),
                    payNum = _this.countPayNum(getNum);

                if(!getNum){
                    $.dialog.tips_black('请输入乐币');
                    return;
                }
                if(getNum%params.rate == 0){
                    // selecUseEG.show(
                    //     '确定兑换<span>'+getNum+'</span>乐币么',
                    //     '兑换',
                    //     function () {
                    //         api.egPayGuessBi({
                    //             amount:getNum/100
                    //         }).done(function (data) {
                    //             var nData = JSON.parse(data)
                    //             $.dialog.tips_black(nData["data"]);
                    //         })
                    //         selecUseEG.hide();
                    //     })
                    if(_this.enoughEg(payNum)) {
                        payDialog.convertConfirm({
                            'convert': toQfw(getNum),
                            'pay': toQfw(payNum),
                            'ok': function () {
                                var alertThis = this;
                                api.egPayGuessBi({
                                        amount:Number(payNum)
                                    }).done(function (data) {
                                        var nData = JSON.parse(data)
                                        if(nData.error==0){
                                            payDialog.success({
                                                'title': '兑换成功，祝您好运',
                                                'content': '兑换详情 ：<span class="red">'+getNum+'</span>乐币'
                                            })
                                            _this.userHasEgan.html(nData.data.egan);
                                            _this.userHasGuessBi.html(nData.data.coin);
                                            _this.clearUserSelect(true)
                                            _this.removeFirstPay();
                                        }else{
                                            $.dialog.tips_black(nData.msg);
                                        }
                                        alertThis.parent.trigger('close');
                                    })
                            }
                        })
                    }else{
                        $.dialog.tips_black('兑换额度不足，请先充值鹅肝');
                        // payDialog.noEnoughConfirm({
                        //     'pay':payNum,
                        //     'hasEg':Number(userEgan),
                        //     'guessbi':getNum,
                        //     ok:function () {
                        //         var guessbi = _this.getNum.val(),
                        //             payType = $('.qie-dialog.noEnough').find('.select').attr("val");
                        //         if(guessbi%params.rate != 0){
                        //             $.dialog.tips_black('乐币数量需为1000的整数倍');
                        //             return ;
                        //         }
                        //         if(!payType){
                        //             $.dialog.tips_black('请选择支付方式');
                        //         }
                        //         if(isNaN(guessbi)||guessbi==""||!payType){
                        //             // _this.disabledBtn();
                        //             return false;
                        //         }
                        //         _this.form.find('[name=pt]').val(payType);
                        //         _this.form.find('[name=amount]').val(Number(payNum));
                        //         _this.form.submit()
                        //     }
                        // })
                    }
                }else{
                    $.dialog.tips_black('请输入1000的整数倍');
                }

            })
        }
    }


    var awardGuessBi ={
        'init':function () {
            this.ratio = 1000;
            this.paySection = $('#award-recharge-guess-num')
            this.getNum = this.paySection.find('input');
            this.quickSelect = this.paySection.find('a');
            this.userGet = $("#eg-recharge-get-award");
            this.userPay = $("#user-need-recharge-eg-award");
            this.userGetGuessBi = $('[qie-charge-nav-tab-content=award] .qie-recharge-earnings i')
            this.submit = $("#eg-charge-award-submit");
            this.form = $("#rmb_pay_guess_bi");
            this.firstPayMessage = $('[qie-charge-nav-tab-content=award] .pay-eg-message')
            this.userHasEgan=$('[user-has-egan]');
            this.userHasGuessBi=$('[user-has-guess-bi]');
            this.initEvent();
            this.first = false;
            this.firstPay()
        },

        countPayNum:function (num) {
            return Math.floor(num);
        },
        validateBuyNum:function (num) {
            var buyNum = num;
            if(isNaN(num)){
                buyNum = parseInt(num)
                this.getNum.val(buyNum);
            }
            return buyNum;
        },
        enoughEg:function (guessBi) {
            if(Number(userEgan)<Number(guessBi)){
                return false;
            }else{
                return true;
            }
        },
        firstPay:function (message) {
            var _this = this;
            userInfo.then(function (data) {
                if(data.first_exchange_guess_coin_status){
                    _this.first = true;
                    $("[qie-charge-nav-tab-content=award]").addClass('firstPay');
                }
            })
        },
        removeFirstPay:function () {
            this.first = false;
            userInfo.userInfoData.first_exchange_guess_coin_status = 0;
            $("[qie-charge-nav-tab-content=award]").removeClass('firstPay');
        },
        clearUserSelect:function (clearType) {
            this.getNum.val('')
            this.firstPayMessage.html('');
            this.userGetGuessBi.html('');
            this.userGet.html(0);
            this.userPay.html(0);
            this.quickSelect.removeClass('curOther');
            if(clearType){
                this.getNum.blur();
            }
        },
        initEvent:function () {
            var _this = this;
            this.getNum.on("keyup",function () {
                var buyNum = _this.validateBuyNum($(this).val().trim()),
                    userGetNum = _this.countPayNum(buyNum),
                    userGet = toQfw(userGetNum),
                    getGuessBi = _this.first?buyNum*_this.ratio*2:buyNum*_this.ratio;
                _this.userGet.html(userGet);
                _this.firstPayMessage.html('赠送'+getGuessBi+'乐币')
                _this.userPay.html(toQfw(_this.countPayNum(buyNum)))
                _this.userGetGuessBi.html('(额外获赠'+getGuessBi+'乐币)');
            })
            this.quickSelect.on('click',function () {
                _this.clearUserSelect(true);
                $(this).siblings().removeClass('curOther')
                if($(this)[0].tagName === 'INPUT'){
                    $(this).parent('.other-num').addClass("curOther");
                }
                $(this).addClass('curOther')

                var buyNum = $(this).attr('val'),
                    getGuessBi = _this.first?buyNum*_this.ratio*2:buyNum*_this.ratio;
                _this.userGet.html(toQfw(buyNum));
                _this.userGetGuessBi.html('(额外获赠'+getGuessBi+'乐币)')
                _this.userPay.html(toQfw(_this.countPayNum(buyNum)))
            })
            // 获取焦点时添加父级class
            this.getNum.focus(function(){
                _this.clearUserSelect()
                $('.other-num').addClass("curOther");
            })

            this.getNum.blur(function(){
                $('.other-num').removeClass("curOther");
            });

            this.submit.on("click",function () {
                var val = _this.quickSelect.filter('.curOther').attr("val")||_this.getNum.val();
                    getNum = _this.validateBuyNum(val.trim()),
                    payNum = _this.countPayNum(getNum);


                if(getNum){
                    // selecUseEG.show(
                    //     '确定兑换<span>'+getNum+'</span>乐币么',
                    //     '兑换',
                    //     function () {
                    //         api.egPayGuessBi({
                    //             amount:getNum/100
                    //         }).done(function (data) {
                    //             var nData = JSON.parse(data)
                    //             $.dialog.tips_black(nData["data"]);
                    //         })
                    //         selecUseEG.hide();
                    //     })
                    if(_this.enoughEg(payNum)) {
                        payDialog.awardConfirm({
                            'convert': toQfw(getNum),
                            'pay': toQfw(payNum),
                            'ok': function () {
                                var alertThis = this;
                                api.egPayGuessBi({
                                    amount:Number(payNum)
                                }).done(function (data) {
                                    var nData = JSON.parse(data)
                                    if(nData.error==0){
                                        payDialog.success({
                                            'title': '兑换成功，祝您好运',
                                            'content': '兑换详情 ：<span class="red">'+getNum+'</span>个道具'
                                        })
                                        _this.userHasEgan.html(nData.data.egan);
                                        _this.userHasGuessBi.html(nData.data.coin);
                                        _this.clearUserSelect(true)
                                        _this.removeFirstPay();
                                    }else if(nData.error==2){
                                        payDialog.success({
                                            'title': '背包空间不足',
                                            'content': '本次兑换只能获得<span class="red">'+nData.msg+'</span>道具,赠送的乐币正常发放。'
                                        })
                                        _this.userHasEgan.html(nData.data.egan);
                                        _this.userHasGuessBi.html(nData.data.coin);
                                        _this.clearUserSelect(true)
                                        _this.removeFirstPay();
                                    }else{

                                        $.dialog.tips_black(nData.msg);
                                    }
                                    alertThis.parent.trigger('close');
                                })
                            }
                        })
                    }else{

                        payDialog.noEnoughConfirm({
                            'pay':payNum,
                            'hasEg':Number(userEgan),
                            'guessbi':getNum,
                            ok:function () {
                                var guessbi = _this.getNum.val(),
                                    payType = $('.qie-dialog.noEnough').find('.select').attr("val");

                                if(!payType){
                                    $.dialog.tips_black('请选择支付方式');
                                }
                                if(isNaN(guessbi)||guessbi==""||!payType){
                                    // _this.disabledBtn();
                                    return false;
                                }
                                _this.form.find('[name=pt]').val(payType);
                                _this.form.find('[name=amount]').val(Number(payNum));
                                _this.form.submit()
                            }
                        })
                    }
                }else{
                    $.dialog.tips_black('请输整数');
                }

            })
        }
    }
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
    function setDefaultTab() {
        var tab = getQueryString('tab');
        if(tab){
            $("[qie-charge-left-tab="+tab+"]").click();
        }
    }
    function toQfw(n) {
        var reg = /(?=(?!(\b))(\d{3})+$)/g;
        return n.toString().replace(reg,',');
    }
    var proxy = {
        init:function () {
            // selecUseEG.init();
            egGuessBi.init();
            // payGuessBi.init();
            guessApp.init();
            app.init(function () {
                // payGuessBi.clear();
            });
            awardGuessBi.init();
            setDefaultTab()
        }
    }
    return proxy;
});
define('member/js/srv/member/cp',[
    'common/js/srv/request',
],function(request){
    return {
        cpRpcAjax             : function(page){
            return request.get('/api/member/cp_rpc_ajax');
        },
        getTaskStatus         : function(){
            return request.form('/member/cp/get_task_status');
        },
        finishedTaskSendGooegg: function(task){
            return request.form('/member/cp/finished_task_send_gooegg', {
                body: {
                    task: task
                }
            });
        }
    }
})
;

/**
 * 个人中心支付
 * @author  李笑
 * @date 2016-08-29
 * @mail lixiao@qie.tv
 */

define("member/js/pay/charge/main", [
    'jquery',
    'member/js/srv/member/cp',
    'common/third/artDialog'
], function ($, CP) {
    var chargeForm = {
        form: $("#charge_form"),
        isPay: false,
        set: function (name, value) {
            this.form.find('[name=' + name + ']').val(value);
        },
        submit: function () {
            // var amount = this.userNeedRecharge.html();
            // $("#js_ipt_amount").val(amount);
            this.form.submit();
        }
    };
    var app = {
        init: function () {
            window.rmbRange = JSON.parse(window.rmbRange);
            this.rechageNum = $("#recharge-num");
            this.rechargeType = $("#recharge-type");
            this.userNeedRecharge = $("#user-need-recharge");
            this.userGetEg = $("#user-get-eg");
            this.submitForm = $("#charge_form");
            this.chargeSubmit = $("#charge-submit");
            this.initEvent();
            this.setDefault();
            // this.judeStatus();
        },
        submit: function () {
            var amount = this.userNeedRecharge.html();
            $("#js_ipt_amount").val(amount);
            this.submitForm.submit();
        },
        setDefault: function () {
            this.rechageNum.find('.item:eq(0)').click();
        },
        //判断可使用支付方式
        valiPayType: function () {
            var selval = Number(this.rechageNum.find('.curOther').attr('val')||this.rechageNum.find('.curOther input').val() || 0);
            var max = Number(this.rechargeType.find('.cur').attr('paymax'));
            this.rechargeType.find('[paymax]').each(function () {
                var $this = $(this);
                var val = $this.attr('paymax');
                if (selval <= Number(val)) {
                    $this.addClass('canselect');
                }
                else {
                    $this.removeClass('canselect');
                }
            });
            if (selval > max) {
                this.rechargeType.find('[paymax]:eq(0)').click();
            }

        },
        selectRechage: function () {
            // 更换className    
            var selectRecharge = this.rechageNum.find(".curOther"),
                userInput = this.rechageNum.find("input.curOther"),
                // 如果点击了充值金额，显示充值金额收益
                rechargeNum = selectRecharge.attr("val")
                    // 如果输入了其他金额，显示其他金额
                    // || (!isNaN(selectRecharge.val()) && parseInt(selectRecharge.val()))
                    || (!isNaN(userInput.val()) && parseInt(userInput.val(), 10))
                    // 如果输入不合法或者未输入，显示0
                    || 0;
            this.userNeedRecharge.html(rechargeNum);
            this.userGetEg.html(rechargeNum);
        },
        inputPreferential: function () {
            var rotate = 0;
            // var max = 0;
            var input = Number(this.rechageNum.find('input').val());
            var inputMsg = this.rechageNum.find('.other-num .msg');
            for (var i = 0; i < window.rmbRange.length; i++) {
                var item = window.rmbRange[i];
                var curMin = Number(item.min);
                var curMax = Number(item.max);
                if (Number(item.min) > input) {
                    continue;
                }
                if (
                    input >= curMin
                    && input <= curMax
                ) {
                    // max = Number(item.max);
                    rotate = Number(item.rebate);
                }
            }
            if (rotate > 0) {
                inputMsg.html('赠送' + Math.floor(input * rotate) + '鹅肝');
                inputMsg.show();
            }
            else {
                inputMsg.hide();
            }
        },
        initEvent: function () {
            var self = this;
            this.rechageNum.on("click", ".egan-pay-option .item,.other-num input", function () {
                // 更换className 
                self.rechageNum.find(".egan-pay-option .item,.other-num").removeClass("curOther");
                // 边框添加style
                if ($(this)[0].tagName === 'INPUT') {
                    $(this)
                        .parent('.other-num')
                        .addClass("curOther");
                    // var val = $(this).val();
                    // console.log(val)
                }
                $(this).addClass("curOther");
                // 更换className 
                // var val = this.getAttribute('val');
                //
                //
                // if ( chargeForm.isPay === false ) {
                //     if ( val == '100' || val == '500' || val == '1000' ) {
                //         $('.jl100').show();
                //     }else{
                //         $('.jl100').hide();
                //     };
                // };
                self.valiPayType();
                self.selectRechage();
                return false;
            });
            this.rechageNum.on('keyup', 'input', function () {
                var $this = $(this);
                var inputval = Number($this.val());
                var max = Number(self.rechargeType.find('.cur').attr('paymax'));
                if (inputval < 0 || isNaN(inputval)) {
                    $this.val('');
                }
                else if (inputval >= max) {
                    $this.val(max);
                }
                else {
                    $this.val(parseInt(inputval, 10));
                }
                self.valiPayType();
                self.selectRechage();
                self.inputPreferential();
                return false;
            });
            this.rechageNum.on("blur", "input", function () {
                var $this = $(this);
                var inputval = Number($this.val());
                var max = Number(self.rechargeType.find('.cur').attr('paymax'));
                if (inputval < 0 || isNaN(inputval)) {
                    $this.val('');
                }
                else if (inputval >= max) {
                    $this.val(max);
                }
                else {
                    $this.val(parseInt(inputval, 10));
                }
                self.valiPayType();
                self.selectRechage();
                return false;
            });
            // 付款方式样式
            this.rechargeType.on("click", "a.canselect", function () {
                self.rechargeType.find("a").removeClass("cur");
                $(this).addClass("cur");
                // if ($(this).attr("val") == "2") {
                //     $('.dae').show();
                // }else {
                //     $('.dae').hide();
                // }
            });

            this.chargeSubmit.on("click", function () {
                var amount = self.userNeedRecharge.html(),
                    chargeType = self.rechargeType.find(".cur").attr("val");
                chargeForm.set("amount", amount);
                chargeForm.set("pt", chargeType);
                if (amount <= 0) {
                    return false;
                }
                chargeForm.submit();
            });
        },
        judeStatus: function () {

            var msgBbox = document.getElementById('msg-b-box');
            var rechargeNum = document.getElementById('recharge-num');
            var allitag = rechargeNum.getElementsByTagName('i');

            CP.getTaskStatus().then(function (msg) {
                var status = Number(msg.data.month_first_pay_100_status);
                var obj;
                if (status === 1) {

                    chargeForm.isPay = false;

                    obj = document.createElement('a');
                    obj.href = '/pay/charge';
                    obj.className = 'msg-b-a1';
                    obj.innerHTML = '未完成';

                    for (var i = 0; i < allitag.length; i++) {
                        allitag[i].style.display = 'block';
                    }
                }
                else if (status === 2) {

                    chargeForm.isPay = true;

                    obj = document.createElement('a');
                    obj.href = 'javascript:;';
                    obj.id = 'msg_b_a2';
                    obj.className = 'msg-b-a2';
                    obj.innerHTML = '领取';

                }
                else if (status === 3) {

                    chargeForm.isPay = true;

                    obj = document.createElement('p');
                    obj.className = 'msg-b-p1';
                    obj.innerHTML = '已领取';

                }

                msgBbox.appendChild(obj);

                var msgBa2 = document.getElementById('msg_b_a2');

                if (!msgBa2) {
                    return;
                }

                msgBa2.onclick = function () {
                    CP.finishedTaskSendGooegg('pay_task')
                        .then(function (data) {
                            if (Number(data.error) !== 0) {
                                return $.dialog.alert(data.data);
                            }
                            var obj;
                            msgBbox.removeChild(msgBbox.children[2]);

                            obj = document.createElement('p');
                            obj.className = 'msg-b-p1';
                            obj.innerHTML = '已领取';

                            msgBbox.appendChild(obj);

                            $.dialog.alert('领取成功!');
                        })
                        .catch(function () {
                            $.dialog.alert('网络错误!');
                        });
                };
            });
        }
    };
    app.init();
});

require([
    'jquery',
    'common/js/header/header',
    'member/js/pay/charge/mod/payPage',
    'member/js/pay/charge/main'
], function ($, Header, payPage) {
    Header.init();
    payPage.init();
});

