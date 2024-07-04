import{b1 as e,F as t,bJ as n,cv as o,d as r,g as i,bm as s,P as l,f as a,e as u,v as c,h as d,aY as f,O as h,aB as v,Q as p,bq as b,y as g,bn as m,bo as w,a as y,k as x,aE as S,l as E,m as T,n as z,t as R,s as B,aD as O,w as k,x as $,T as M,aH as I}from"./index-6f90f808.js";function C(e){return e.composedPath()[0]||null}function P(o,r=!0,i=[]){return o.forEach((o=>{if(null!==o)if("object"==typeof o)if(Array.isArray(o))P(o,r,i);else if(o.type===t){if(null===o.children)return;Array.isArray(o.children)&&P(o.children,r,i)}else{if(o.type===n&&r)return;i.push(o)}else"string"!=typeof o&&"number"!=typeof o||i.push(e(String(o)))})),i}function D(e,...t){if(!Array.isArray(e))return e(...t);e.forEach((e=>D(e,...t)))}function F(e){return e.some((e=>!o(e)||e.type!==n&&!(e.type===t&&!F(e.children))))?e:null}function L(e,t){return e&&F(e())||t()}function N(e,t,n){return e&&F(e(t))||n(t)}function W(e,t){return t(e&&F(e())||null)}function H(e){return!(e&&F(e()))}const A=r({render(){var e,t;return null===(t=(e=this.$slots).default)||void 0===t?void 0:t.call(e)}}),j=/^(\d|\.)+$/,X=/(\d|\.)+/;function Z(e,{c:t=1,offset:n=0,attachPx:o=!0}={}){if("number"==typeof e){const o=(e+n)*t;return 0===o?"0":`${o}px`}if("string"==typeof e){if(j.test(e)){const r=(Number(e)+n)*t;return o?0===r?"0":`${r}px`:`${r}`}{const o=X.exec(e);return o?e.replace(X,String((Number(o[0])+n)*t)):e}}return e}function _(e){const t=i(!!e.value);if(t.value)return s(t);const n=l(e,(e=>{e&&(t.value=!0,n())}));return s(t)}function V(e){return e.composedPath()[0]}const Y={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function q(e,t,n){const o=Y[e];let r=o.get(t);void 0===r&&o.set(t,r=new WeakMap);let i=r.get(n);return void 0===i&&r.set(n,i=function(e,t,n){if("mousemoveoutside"===e){const e=e=>{t.contains(V(e))||n(e)};return{mousemove:e,touchstart:e}}if("clickoutside"===e){let e=!1;const o=n=>{e=!t.contains(V(n))},r=o=>{e&&(t.contains(V(o))||n(o))};return{mousedown:o,mouseup:r,touchstart:o,touchend:r}}return{}}(e,t,n)),i}const{on:U,off:G}=function(){if("undefined"==typeof window)return{on:()=>{},off:()=>{}};const e=new WeakMap,t=new WeakMap;function n(){e.set(this,!0)}function o(){e.set(this,!0),t.set(this,!0)}function r(e,t,n){const o=e[t];return e[t]=function(){return n.apply(e,arguments),o.apply(e,arguments)},e}function i(e,t){e[t]=Event.prototype[t]}const s=new WeakMap,l=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function a(){var e;return null!==(e=s.get(this))&&void 0!==e?e:null}function u(e,t){void 0!==l&&Object.defineProperty(e,"currentTarget",{configurable:!0,enumerable:!0,get:null!=t?t:l.get})}const c={bubble:{},capture:{}},d={},f=function(){const l=function(l){const{type:d,eventPhase:f,bubbles:h}=l,v=V(l);if(2===f)return;const p=1===f?"capture":"bubble";let b=v;const g=[];for(;null===b&&(b=window),g.push(b),b!==window;)b=b.parentNode||null;const m=c.capture[d],w=c.bubble[d];if(r(l,"stopPropagation",n),r(l,"stopImmediatePropagation",o),u(l,a),"capture"===p){if(void 0===m)return;for(let n=g.length-1;n>=0&&!e.has(l);--n){const e=g[n],o=m.get(e);if(void 0!==o){s.set(l,e);for(const e of o){if(t.has(l))break;e(l)}}if(0===n&&!h&&void 0!==w){const n=w.get(e);if(void 0!==n)for(const e of n){if(t.has(l))break;e(l)}}}}else if("bubble"===p){if(void 0===w)return;for(let n=0;n<g.length&&!e.has(l);++n){const e=g[n],o=w.get(e);if(void 0!==o){s.set(l,e);for(const e of o){if(t.has(l))break;e(l)}}}}i(l,"stopPropagation"),i(l,"stopImmediatePropagation"),u(l)};return l.displayName="evtdUnifiedHandler",l}(),h=function(){const e=function(e){const{type:t,eventPhase:n}=e;if(2!==n)return;const o=d[t];void 0!==o&&o.forEach((t=>t(e)))};return e.displayName="evtdUnifiedWindowEventHandler",e}();function v(e,t){const n=c[e];return void 0===n[t]&&(n[t]=new Map,window.addEventListener(t,f,"capture"===e)),n[t]}function p(e,t){let n=e.get(t);return void 0===n&&e.set(t,n=new Set),n}function b(e,t,n,o){if(function(e,t,n,o){if("mousemoveoutside"===e||"clickoutside"===e){const r=q(e,t,n);return Object.keys(r).forEach((e=>{G(e,document,r[e],o)})),!0}return!1}(e,t,n,o))return;const r=!0===o||"object"==typeof o&&!0===o.capture,i=r?"capture":"bubble",s=v(i,e),l=p(s,t);if(t===window&&!function(e,t,n,o){const r=c[t][n];if(void 0!==r){const t=r.get(e);if(void 0!==t&&t.has(o))return!0}return!1}(t,r?"bubble":"capture",e,n)&&function(e,t){const n=d[e];return!(void 0===n||!n.has(t))}(e,n)){const t=d[e];t.delete(n),0===t.size&&(window.removeEventListener(e,h),d[e]=void 0)}l.has(n)&&l.delete(n),0===l.size&&s.delete(t),0===s.size&&(window.removeEventListener(e,f,"capture"===i),c[i][e]=void 0)}return{on:function(e,t,n,o){let r;if(r="object"==typeof o&&!0===o.once?i=>{b(e,t,r,o),n(i)}:n,function(e,t,n,o){if("mousemoveoutside"===e||"clickoutside"===e){const r=q(e,t,n);return Object.keys(r).forEach((e=>{U(e,document,r[e],o)})),!0}return!1}(e,t,r,o))return;const i=p(v(!0===o||"object"==typeof o&&!0===o.capture?"capture":"bubble",e),t);if(i.has(r)||i.add(r),t===window){const t=(void 0===d[s=e]&&(d[s]=new Set,window.addEventListener(s,h)),d[s]);t.has(r)||t.add(r)}var s},off:b}}();function J(e,t){return l(e,(e=>{void 0!==e&&(t.value=e)})),a((()=>void 0===e.value?t.value:e.value))}const Q="undefined"!=typeof window&&(/iPad|iPhone|iPod/.test(navigator.platform)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)&&!window.MSStream;const K=u("n-modal-body"),ee=u("n-drawer-body"),te=u("n-drawer"),ne=u("n-popover-body");function oe(e,t,n="default"){const o=t[n];if(void 0===o)throw new Error(`[vueuc/${e}]: slot[${n}] is empty.`);return o()}function re(o,r=!0,i=[]){return o.forEach((o=>{if(null!==o)if("object"==typeof o)if(Array.isArray(o))re(o,r,i);else if(o.type===t){if(null===o.children)return;Array.isArray(o.children)&&re(o.children,r,i)}else o.type!==n&&i.push(o);else"string"!=typeof o&&"number"!=typeof o||i.push(e(String(o)))})),i}function ie(e,t,n="default"){const o=t[n];if(void 0===o)throw new Error(`[vueuc/${e}]: slot[${n}] is empty.`);const r=re(o());if(1===r.length)return r[0];throw new Error(`[vueuc/${e}]: slot[${n}] should have exactly one child.`)}const se="@@coContext",le={mounted(e,{value:t,modifiers:n}){e[se]={handler:void 0},"function"==typeof t&&(e[se].handler=t,U("clickoutside",e,t,{capture:n.capture}))},updated(e,{value:t,modifiers:n}){const o=e[se];"function"==typeof t?o.handler?o.handler!==t&&(G("clickoutside",e,o.handler,{capture:n.capture}),o.handler=t,U("clickoutside",e,t,{capture:n.capture})):(e[se].handler=t,U("clickoutside",e,t,{capture:n.capture})):o.handler&&(G("clickoutside",e,o.handler,{capture:n.capture}),o.handler=void 0)},unmounted(e,{modifiers:t}){const{handler:n}=e[se];n&&G("clickoutside",e,n,{capture:t.capture}),e[se].handler=void 0}},ae=le,ue=new class{constructor(){this.elementZIndex=new Map,this.nextZIndex=2e3}get elementCount(){return this.elementZIndex.size}ensureZIndex(e,t){const{elementZIndex:n}=this;if(void 0!==t)return e.style.zIndex=`${t}`,void n.delete(e);const{nextZIndex:o}=this;n.has(e)&&n.get(e)+1===this.nextZIndex||(e.style.zIndex=`${o}`,n.set(e,o),this.nextZIndex=o+1,this.squashState())}unregister(e,t){const{elementZIndex:n}=this;n.has(e)&&n.delete(e),this.squashState()}squashState(){const{elementCount:e}=this;e||(this.nextZIndex=2e3),this.nextZIndex-e>2500&&this.rearrange()}rearrange(){const e=Array.from(this.elementZIndex.entries());e.sort(((e,t)=>e[1]-t[1])),this.nextZIndex=2e3,e.forEach((e=>{const t=e[0],n=this.nextZIndex++;`${n}`!==t.style.zIndex&&(t.style.zIndex=`${n}`)}))}},ce="@@ziContext",de={mounted(e,t){const{value:n={}}=t,{zIndex:o,enabled:r}=n;e[ce]={enabled:!!r,initialized:!1},r&&(ue.ensureZIndex(e,o),e[ce].initialized=!0)},updated(e,t){const{value:n={}}=t,{zIndex:o,enabled:r}=n,i=e[ce].enabled;r&&!i&&(ue.ensureZIndex(e,o),e[ce].initialized=!0),e[ce].enabled=!!r},unmounted(e,t){if(!e[ce].initialized)return;const{value:n={}}=t,{zIndex:o}=n;ue.unregister(e,o)}};function fe(e){return"string"==typeof e?document.querySelector(e):e()}const he=r({name:"LazyTeleport",props:{to:{type:[String,Object],default:void 0},disabled:Boolean,show:{type:Boolean,required:!0}},setup:e=>({showTeleport:_(c(e,"show")),mergedTo:a((()=>{const{to:t}=e;return null!=t?t:"body"}))}),render(){return this.showTeleport?this.disabled?oe("lazy-teleport",this.$slots):d(f,{disabled:this.disabled,to:this.mergedTo},oe("lazy-teleport",this.$slots)):null}});var ve,pe,be=[],ge="ResizeObserver loop completed with undelivered notifications.";(pe=ve||(ve={})).BORDER_BOX="border-box",pe.CONTENT_BOX="content-box",pe.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box";var me,we=function(e){return Object.freeze(e)},ye=function(e,t){this.inlineSize=e,this.blockSize=t,we(this)},xe=function(){function e(e,t,n,o){return this.x=e,this.y=t,this.width=n,this.height=o,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,we(this)}return e.prototype.toJSON=function(){var e=this;return{x:e.x,y:e.y,top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),Se=function(e){return e instanceof SVGElement&&"getBBox"in e},Ee=function(e){if(Se(e)){var t=e.getBBox(),n=t.width,o=t.height;return!n&&!o}var r=e,i=r.offsetWidth,s=r.offsetHeight;return!(i||s||e.getClientRects().length)},Te=function(e){var t;if(e instanceof Element)return!0;var n=null===(t=null==e?void 0:e.ownerDocument)||void 0===t?void 0:t.defaultView;return!!(n&&e instanceof n.Element)},ze="undefined"!=typeof window?window:{},Re=new WeakMap,Be=/auto|scroll/,Oe=/^tb|vertical/,ke=/msie|trident/i.test(ze.navigator&&ze.navigator.userAgent),$e=function(e){return parseFloat(e||"0")},Me=function(e,t,n){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===n&&(n=!1),new ye((n?t:e)||0,(n?e:t)||0)},Ie=we({devicePixelContentBoxSize:Me(),borderBoxSize:Me(),contentBoxSize:Me(),contentRect:new xe(0,0,0,0)}),Ce=function(e,t){if(void 0===t&&(t=!1),Re.has(e)&&!t)return Re.get(e);if(Ee(e))return Re.set(e,Ie),Ie;var n=getComputedStyle(e),o=Se(e)&&e.ownerSVGElement&&e.getBBox(),r=!ke&&"border-box"===n.boxSizing,i=Oe.test(n.writingMode||""),s=!o&&Be.test(n.overflowY||""),l=!o&&Be.test(n.overflowX||""),a=o?0:$e(n.paddingTop),u=o?0:$e(n.paddingRight),c=o?0:$e(n.paddingBottom),d=o?0:$e(n.paddingLeft),f=o?0:$e(n.borderTopWidth),h=o?0:$e(n.borderRightWidth),v=o?0:$e(n.borderBottomWidth),p=d+u,b=a+c,g=(o?0:$e(n.borderLeftWidth))+h,m=f+v,w=l?e.offsetHeight-m-e.clientHeight:0,y=s?e.offsetWidth-g-e.clientWidth:0,x=r?p+g:0,S=r?b+m:0,E=o?o.width:$e(n.width)-x-y,T=o?o.height:$e(n.height)-S-w,z=E+p+y+g,R=T+b+w+m,B=we({devicePixelContentBoxSize:Me(Math.round(E*devicePixelRatio),Math.round(T*devicePixelRatio),i),borderBoxSize:Me(z,R,i),contentBoxSize:Me(E,T,i),contentRect:new xe(d,a,E,T)});return Re.set(e,B),B},Pe=function(e,t,n){var o=Ce(e,n),r=o.borderBoxSize,i=o.contentBoxSize,s=o.devicePixelContentBoxSize;switch(t){case ve.DEVICE_PIXEL_CONTENT_BOX:return s;case ve.BORDER_BOX:return r;default:return i}},De=function(e){var t=Ce(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=we([t.borderBoxSize]),this.contentBoxSize=we([t.contentBoxSize]),this.devicePixelContentBoxSize=we([t.devicePixelContentBoxSize])},Fe=function(e){if(Ee(e))return 1/0;for(var t=0,n=e.parentNode;n;)t+=1,n=n.parentNode;return t},Le=function(){var e=1/0,t=[];be.forEach((function(n){if(0!==n.activeTargets.length){var o=[];n.activeTargets.forEach((function(t){var n=new De(t.target),r=Fe(t.target);o.push(n),t.lastReportedSize=Pe(t.target,t.observedBox),r<e&&(e=r)})),t.push((function(){n.callback.call(n.observer,o,n.observer)})),n.activeTargets.splice(0,n.activeTargets.length)}}));for(var n=0,o=t;n<o.length;n++)(0,o[n])();return e},Ne=function(e){be.forEach((function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach((function(n){n.isActive()&&(Fe(n.target)>e?t.activeTargets.push(n):t.skippedTargets.push(n))}))}))},We=[],He=0,Ae={attributes:!0,characterData:!0,childList:!0,subtree:!0},je=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],Xe=function(e){return void 0===e&&(e=0),Date.now()+e},Ze=!1,_e=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;if(void 0===e&&(e=250),!Ze){Ze=!0;var n,o=Xe(e);n=function(){var n=!1;try{n=function(){var e,t=0;for(Ne(t);be.some((function(e){return e.activeTargets.length>0}));)t=Le(),Ne(t);return be.some((function(e){return e.skippedTargets.length>0}))&&("function"==typeof ErrorEvent?e=new ErrorEvent("error",{message:ge}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=ge),window.dispatchEvent(e)),t>0}()}finally{if(Ze=!1,e=o-Xe(),!He)return;n?t.run(1e3):e>0?t.run(e):t.start()}},function(e){if(!me){var t=0,n=document.createTextNode("");new MutationObserver((function(){return We.splice(0).forEach((function(e){return e()}))})).observe(n,{characterData:!0}),me=function(){n.textContent="".concat(t?t--:t++)}}We.push(e),me()}((function(){requestAnimationFrame(n)}))}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,Ae)};document.body?t():ze.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),je.forEach((function(t){return ze.addEventListener(t,e.listener,!0)})))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),je.forEach((function(t){return ze.removeEventListener(t,e.listener,!0)})),this.stopped=!0)},e}()),Ve=function(e){!He&&e>0&&_e.start(),!(He+=e)&&_e.stop()},Ye=function(){function e(e,t){this.target=e,this.observedBox=t||ve.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e,t=Pe(this.target,this.observedBox,!0);return e=this.target,Se(e)||function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(e)||"inline"!==getComputedStyle(e).display||(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),qe=function(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t},Ue=new WeakMap,Ge=function(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return-1},Je=function(){function e(){}return e.connect=function(e,t){var n=new qe(e,t);Ue.set(e,n)},e.observe=function(e,t,n){var o=Ue.get(e),r=0===o.observationTargets.length;Ge(o.observationTargets,t)<0&&(r&&be.push(o),o.observationTargets.push(new Ye(t,n&&n.box)),Ve(1),_e.schedule())},e.unobserve=function(e,t){var n=Ue.get(e),o=Ge(n.observationTargets,t),r=1===n.observationTargets.length;o>=0&&(r&&be.splice(be.indexOf(n),1),n.observationTargets.splice(o,1),Ve(-1))},e.disconnect=function(e){var t=this,n=Ue.get(e);n.observationTargets.slice().forEach((function(n){return t.unobserve(e,n.target)})),n.activeTargets.splice(0,n.activeTargets.length)},e}(),Qe=function(){function e(e){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof e)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");Je.connect(this,e)}return e.prototype.observe=function(e,t){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Te(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");Je.observe(this,e,t)},e.prototype.unobserve=function(e){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!Te(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");Je.unobserve(this,e)},e.prototype.disconnect=function(){Je.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();const Ke=new class{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new("undefined"!=typeof window&&window.ResizeObserver||Qe)(this.handleResize),this.elHandlersMap=new Map}handleResize(e){for(const t of e){const e=this.elHandlersMap.get(t.target);void 0!==e&&e(t)}}registerHandler(e,t){this.elHandlersMap.set(e,t),this.observer.observe(e)}unregisterHandler(e){this.elHandlersMap.has(e)&&(this.elHandlersMap.delete(e),this.observer.unobserve(e))}},et=r({name:"ResizeObserver",props:{onResize:Function},setup(e){let t=!1;const n=h().proxy;function o(t){const{onResize:n}=e;void 0!==n&&n(t)}v((()=>{const e=n.$el;void 0!==e&&(e.nextElementSibling===e.nextSibling||3!==e.nodeType||""===e.nodeValue)&&null!==e.nextElementSibling&&(Ke.registerHandler(e.nextElementSibling,o),t=!0)})),p((()=>{t&&Ke.unregisterHandler(n.$el.nextElementSibling)}))},render(){return b(this.$slots,"default")}});function tt(e){return e instanceof HTMLElement}function nt(e){for(let t=0;t<e.childNodes.length;t++){const n=e.childNodes[t];if(tt(n)&&(rt(n)||nt(n)))return!0}return!1}function ot(e){for(let t=e.childNodes.length-1;t>=0;t--){const n=e.childNodes[t];if(tt(n)&&(rt(n)||ot(n)))return!0}return!1}function rt(e){if(!function(e){if(e.tabIndex>0||0===e.tabIndex&&null!==e.getAttribute("tabIndex"))return!0;if(e.getAttribute("disabled"))return!1;switch(e.nodeName){case"A":return!!e.href&&"ignore"!==e.rel;case"INPUT":return"hidden"!==e.type&&"file"!==e.type;case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}}(e))return!1;try{e.focus({preventScroll:!0})}catch(t){}return document.activeElement===e}let it=[];const st=r({name:"FocusTrap",props:{disabled:Boolean,active:Boolean,autoFocus:{type:Boolean,default:!0},onEsc:Function,initialFocusTo:String,finalFocusTo:String,returnFocusOnDeactivated:{type:Boolean,default:!0}},setup(e){const t=g(),n=i(null),o=i(null);let r=!1,s=!1;const a="undefined"==typeof document?null:document.activeElement;function u(){return it[it.length-1]===t}function c(t){var n;"Escape"===t.code&&u()&&(null===(n=e.onEsc)||void 0===n||n.call(e,t))}function d(e){if(!s&&u()){const t=f();if(null===t)return;if(t.contains(C(e)))return;b("first")}}function f(){const e=n.value;if(null===e)return null;let t=e;for(;t=t.nextSibling,!(null===t||t instanceof Element&&"DIV"===t.tagName););return t}function h(){var n;if(e.disabled)return;if(document.removeEventListener("focus",d,!0),it=it.filter((e=>e!==t)),u())return;const{finalFocusTo:o}=e;void 0!==o?null===(n=fe(o))||void 0===n||n.focus({preventScroll:!0}):e.returnFocusOnDeactivated&&a instanceof HTMLElement&&(s=!0,a.focus({preventScroll:!0}),s=!1)}function b(t){if(u()&&e.active){const e=n.value,r=o.value;if(null!==e&&null!==r){const n=f();if(null==n||n===r)return s=!0,e.focus({preventScroll:!0}),void(s=!1);s=!0;const o="first"===t?nt(n):ot(n);s=!1,o||(s=!0,e.focus({preventScroll:!0}),s=!1)}}}return v((()=>{l((()=>e.active),(n=>{n?(function(){var n;if(!e.disabled){if(it.push(t),e.autoFocus){const{initialFocusTo:t}=e;void 0===t?b("first"):null===(n=fe(t))||void 0===n||n.focus({preventScroll:!0})}r=!0,document.addEventListener("focus",d,!0)}}(),U("keydown",document,c)):(G("keydown",document,c),r&&h())}),{immediate:!0})})),p((()=>{G("keydown",document,c),r&&h()})),{focusableStartRef:n,focusableEndRef:o,focusableStyle:"position: absolute; height: 0; width: 0;",handleStartFocus:function(e){if(s)return;const t=f();null!==t&&(null!==e.relatedTarget&&t.contains(e.relatedTarget)?b("last"):b("first"))},handleEndFocus:function(e){s||(null!==e.relatedTarget&&e.relatedTarget===n.value?b("last"):b("first"))}}},render(){const{default:e}=this.$slots;if(void 0===e)return null;if(this.disabled)return e();const{active:n,focusableStyle:o}=this;return d(t,null,[d("div",{"aria-hidden":"true",tabindex:n?"0":"-1",ref:"focusableStartRef",style:o,onFocus:this.handleStartFocus}),e(),d("div",{"aria-hidden":"true",style:o,ref:"focusableEndRef",tabindex:n?"0":"-1",onFocus:this.handleEndFocus})])}});function lt(e){const t={isDeactivated:!1};let n=!1;return m((()=>{t.isDeactivated=!1,n?e():n=!0})),w((()=>{t.isDeactivated=!0,n||(n=!0)})),t}const at={name:"Scrollbar",common:y,self:e=>{const{scrollbarColor:t,scrollbarColorHover:n}=e;return{color:t,colorHover:n}}},{cubicBezierEaseInOut:ut}=S;function ct({name:e="fade-in",enterDuration:t="0.2s",leaveDuration:n="0.2s",enterCubicBezier:o=ut,leaveCubicBezier:r=ut}={}){return[x(`&.${e}-transition-enter-active`,{transition:`all ${t} ${o}!important`}),x(`&.${e}-transition-leave-active`,{transition:`all ${n} ${r}!important`}),x(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`,{opacity:0}),x(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`,{opacity:1})]}const dt=E("scrollbar","\n overflow: hidden;\n position: relative;\n z-index: auto;\n height: 100%;\n width: 100%;\n",[x(">",[E("scrollbar-container","\n width: 100%;\n overflow: scroll;\n height: 100%;\n min-height: inherit;\n max-height: inherit;\n scrollbar-width: none;\n ",[x("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb","\n width: 0;\n height: 0;\n display: none;\n "),x(">",[E("scrollbar-content","\n box-sizing: border-box;\n min-width: 100%;\n ")])])]),x(">, +",[E("scrollbar-rail","\n position: absolute;\n pointer-events: none;\n user-select: none;\n -webkit-user-select: none;\n ",[T("horizontal","\n left: 2px;\n right: 2px;\n bottom: 4px;\n height: var(--n-scrollbar-height);\n ",[x(">",[z("scrollbar","\n height: var(--n-scrollbar-height);\n border-radius: var(--n-scrollbar-border-radius);\n right: 0;\n ")])]),T("vertical","\n right: 4px;\n top: 2px;\n bottom: 2px;\n width: var(--n-scrollbar-width);\n ",[x(">",[z("scrollbar","\n width: var(--n-scrollbar-width);\n border-radius: var(--n-scrollbar-border-radius);\n bottom: 0;\n ")])]),T("disabled",[x(">",[z("scrollbar","pointer-events: none;")])]),x(">",[z("scrollbar","\n z-index: 1;\n position: absolute;\n cursor: pointer;\n pointer-events: all;\n background-color: var(--n-scrollbar-color);\n transition: background-color .2s var(--n-scrollbar-bezier);\n ",[ct(),x("&:hover","background-color: var(--n-scrollbar-color-hover);")])])])])]),ft=r({name:"Scrollbar",props:Object.assign(Object.assign({},R.props),{size:{type:Number,default:5},duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,trigger:{type:String,default:"hover"},useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:[String,Array],contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function,internalHoistYRail:Boolean}),inheritAttrs:!1,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedRtlRef:o}=B(e),r=O("Scrollbar",o,t),s=i(null),l=i(null),u=i(null),c=i(null),d=i(null),f=i(null),h=i(null),b=i(null),g=i(null),m=i(null),w=i(null),y=i(0),x=i(0),S=i(!1),E=i(!1);let T,z,M=!1,I=!1,P=0,D=0,F=0,L=0;const N=Q,W=a((()=>{const{value:t}=b,{value:n}=f,{value:o}=m;return null===t||null===n||null===o?0:Math.min(t,o*t/n+1.5*e.size)})),H=a((()=>`${W.value}px`)),A=a((()=>{const{value:t}=g,{value:n}=h,{value:o}=w;return null===t||null===n||null===o?0:o*t/n+1.5*e.size})),j=a((()=>`${A.value}px`)),X=a((()=>{const{value:e}=b,{value:t}=y,{value:n}=f,{value:o}=m;if(null===e||null===n||null===o)return 0;{const r=n-e;return r?t/r*(o-W.value):0}})),Z=a((()=>`${X.value}px`)),_=a((()=>{const{value:e}=g,{value:t}=x,{value:n}=h,{value:o}=w;if(null===e||null===n||null===o)return 0;{const r=n-e;return r?t/r*(o-A.value):0}})),V=a((()=>`${_.value}px`)),Y=a((()=>{const{value:e}=b,{value:t}=f;return null!==e&&null!==t&&t>e})),q=a((()=>{const{value:e}=g,{value:t}=h;return null!==e&&null!==t&&t>e})),J=a((()=>{const{trigger:t}=e;return"none"===t||S.value})),K=a((()=>{const{trigger:t}=e;return"none"===t||E.value})),ee=a((()=>{const{container:t}=e;return t?t():l.value})),te=a((()=>{const{content:t}=e;return t?t():u.value})),ne=lt((()=>{e.container||oe({top:y.value,left:x.value})})),oe=(t,n)=>{if(!e.scrollable)return;if("number"==typeof t)return void re(null!=n?n:0,t,0,!1,"auto");const{left:o,top:r,index:i,elSize:s,position:l,behavior:a,el:u,debounce:c=!0}=t;void 0===o&&void 0===r||re(null!=o?o:0,null!=r?r:0,0,!1,a),void 0!==u?re(0,u.offsetTop,u.offsetHeight,c,a):void 0!==i&&void 0!==s?re(0,i*s,s,c,a):"bottom"===l?re(0,Number.MAX_SAFE_INTEGER,0,!1,a):"top"===l&&re(0,0,0,!1,a)};function re(e,t,n,o,r){const{value:i}=ee;if(i){if(o){const{scrollTop:o,offsetHeight:s}=i;if(t>o)return void(t+n<=o+s||i.scrollTo({left:e,top:t+n-s,behavior:r}))}i.scrollTo({left:e,top:t,behavior:r})}}function ie(){void 0!==z&&window.clearTimeout(z),z=window.setTimeout((()=>{E.value=!1}),e.duration),void 0!==T&&window.clearTimeout(T),T=window.setTimeout((()=>{S.value=!1}),e.duration)}function se(){const{value:e}=ee;e&&(y.value=e.scrollTop,x.value=e.scrollLeft*((null==r?void 0:r.value)?-1:1))}function le(){const{value:e}=ee;e&&(y.value=e.scrollTop,x.value=e.scrollLeft*((null==r?void 0:r.value)?-1:1),b.value=e.offsetHeight,g.value=e.offsetWidth,f.value=e.scrollHeight,h.value=e.scrollWidth);const{value:t}=d,{value:n}=c;t&&(w.value=t.offsetWidth),n&&(m.value=n.offsetHeight)}function ae(){e.scrollable&&(e.useUnifiedContainer?le():(function(){const{value:e}=te;e&&(f.value=e.offsetHeight,h.value=e.offsetWidth);const{value:t}=ee;t&&(b.value=t.offsetHeight,g.value=t.offsetWidth);const{value:n}=d,{value:o}=c;n&&(w.value=n.offsetWidth),o&&(m.value=o.offsetHeight)}(),se()))}function ue(e){var t;return!(null===(t=s.value)||void 0===t?void 0:t.contains(C(e)))}function ce(t){if(!I)return;void 0!==T&&window.clearTimeout(T),void 0!==z&&window.clearTimeout(z);const{value:n}=g,{value:o}=h,{value:i}=A;if(null===n||null===o)return;const s=(null==r?void 0:r.value)?window.innerWidth-t.clientX-F:t.clientX-F,l=o-n;let a=D+s*(o-n)/(n-i);a=Math.min(l,a),a=Math.max(a,0);const{value:u}=ee;if(u){u.scrollLeft=a*((null==r?void 0:r.value)?-1:1);const{internalOnUpdateScrollLeft:t}=e;t&&t(a)}}function de(e){e.preventDefault(),e.stopPropagation(),G("mousemove",window,ce,!0),G("mouseup",window,de,!0),I=!1,ae(),ue(e)&&ie()}function fe(e){if(!M)return;void 0!==T&&window.clearTimeout(T),void 0!==z&&window.clearTimeout(z);const{value:t}=b,{value:n}=f,{value:o}=W;if(null===t||null===n)return;const r=e.clientY-L,i=n-t;let s=P+r*(n-t)/(t-o);s=Math.min(i,s),s=Math.max(s,0);const{value:l}=ee;l&&(l.scrollTop=s)}function he(e){e.preventDefault(),e.stopPropagation(),G("mousemove",window,fe,!0),G("mouseup",window,he,!0),M=!1,ae(),ue(e)&&ie()}k((()=>{const{value:e}=q,{value:n}=Y,{value:o}=t,{value:r}=d,{value:i}=c;r&&(e?r.classList.remove(`${o}-scrollbar-rail--disabled`):r.classList.add(`${o}-scrollbar-rail--disabled`)),i&&(n?i.classList.remove(`${o}-scrollbar-rail--disabled`):i.classList.add(`${o}-scrollbar-rail--disabled`))})),v((()=>{e.container||ae()})),p((()=>{void 0!==T&&window.clearTimeout(T),void 0!==z&&window.clearTimeout(z),G("mousemove",window,fe,!0),G("mouseup",window,he,!0)}));const ve=R("Scrollbar","-scrollbar",dt,at,e,t),pe=a((()=>{const{common:{cubicBezierEaseInOut:e,scrollbarBorderRadius:t,scrollbarHeight:n,scrollbarWidth:o},self:{color:r,colorHover:i}}=ve.value;return{"--n-scrollbar-bezier":e,"--n-scrollbar-color":r,"--n-scrollbar-color-hover":i,"--n-scrollbar-border-radius":t,"--n-scrollbar-width":o,"--n-scrollbar-height":n}})),be=n?$("scrollbar",void 0,pe,e):void 0,ge={scrollTo:oe,scrollBy:(t,n)=>{if(!e.scrollable)return;const{value:o}=ee;o&&("object"==typeof t?o.scrollBy(t):o.scrollBy(t,n||0))},sync:ae,syncUnifiedContainer:le,handleMouseEnterWrapper:function(){void 0!==T&&window.clearTimeout(T),S.value=!0,void 0!==z&&window.clearTimeout(z),E.value=!0,ae()},handleMouseLeaveWrapper:function(){ie()}};return Object.assign(Object.assign({},ge),{mergedClsPrefix:t,rtlEnabled:r,containerScrollTop:y,wrapperRef:s,containerRef:l,contentRef:u,yRailRef:c,xRailRef:d,needYBar:Y,needXBar:q,yBarSizePx:H,xBarSizePx:j,yBarTopPx:Z,xBarLeftPx:V,isShowXBar:J,isShowYBar:K,isIos:N,handleScroll:function(t){const{onScroll:n}=e;n&&n(t),se()},handleContentResize:()=>{ne.isDeactivated||ae()},handleContainerResize:t=>{if(ne.isDeactivated)return;const{onResize:n}=e;n&&n(t),ae()},handleYScrollMouseDown:function(e){e.preventDefault(),e.stopPropagation(),M=!0,U("mousemove",window,fe,!0),U("mouseup",window,he,!0),P=y.value,L=e.clientY},handleXScrollMouseDown:function(e){e.preventDefault(),e.stopPropagation(),I=!0,U("mousemove",window,ce,!0),U("mouseup",window,de,!0),D=x.value,F=(null==r?void 0:r.value)?window.innerWidth-e.clientX:e.clientX},cssVars:n?void 0:pe,themeClass:null==be?void 0:be.themeClass,onRender:null==be?void 0:be.onRender})},render(){var e;const{$slots:n,mergedClsPrefix:o,triggerDisplayManually:r,rtlEnabled:i,internalHoistYRail:s}=this;if(!this.scrollable)return null===(e=n.default)||void 0===e?void 0:e.call(n);const l="none"===this.trigger,a=(e,t)=>d("div",{ref:"yRailRef",class:[`${o}-scrollbar-rail`,`${o}-scrollbar-rail--vertical`,e],"data-scrollbar-rail":!0,style:[t||"",this.verticalRailStyle],"aria-hiddens":!0},d(l?A:M,l?null:{name:"fade-in-transition"},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?d("div",{class:`${o}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),u=()=>{var e,t;return null===(e=this.onRender)||void 0===e||e.call(this),d("div",I(this.$attrs,{role:"none",ref:"wrapperRef",class:[`${o}-scrollbar`,this.themeClass,i&&`${o}-scrollbar--rtl`],style:this.cssVars,onMouseenter:r?void 0:this.handleMouseEnterWrapper,onMouseleave:r?void 0:this.handleMouseLeaveWrapper}),[this.container?null===(t=n.default)||void 0===t?void 0:t.call(n):d("div",{role:"none",ref:"containerRef",class:[`${o}-scrollbar-container`,this.containerClass],style:this.containerStyle,onScroll:this.handleScroll,onWheel:this.onWheel},d(et,{onResize:this.handleContentResize},{default:()=>d("div",{ref:"contentRef",role:"none",style:[{width:this.xScrollable?"fit-content":null},this.contentStyle],class:[`${o}-scrollbar-content`,this.contentClass]},n)})),s?null:a(void 0,void 0),this.xScrollable&&d("div",{ref:"xRailRef",class:[`${o}-scrollbar-rail`,`${o}-scrollbar-rail--horizontal`],style:this.horizontalRailStyle,"data-scrollbar-rail":!0,"aria-hidden":!0},d(l?A:M,l?null:{name:"fade-in-transition"},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?d("div",{class:`${o}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,right:i?this.xBarLeftPx:void 0,left:i?void 0:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])},c=this.container?u():d(et,{onResize:this.handleContainerResize},{default:u});return s?d(t,null,c,a(this.themeClass,this.cssVars)):c}}),ht=ft,vt=ft;export{st as F,he as L,ht as N,et as V,A as W,vt as X,W as a,P as b,D as c,lt as d,ct as e,Z as f,U as g,ee as h,Ke as i,N as j,ae as k,C as l,K as m,oe as n,G as o,ne as p,ie as q,L as r,at as s,H as t,J as u,te as v,de as z};