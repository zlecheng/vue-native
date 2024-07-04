import{d as e,g as t,U as n,aB as r,aN as o,h as i,bq as s}from"./index-6f90f808.js";import{c as l,a}from"./Tooltip-ecaccc73.js";function c(e,t){let{target:n}=e;for(;n;){if(n.dataset&&void 0!==n.dataset[t])return!0;n=n.parentElement}return!1}function u(e){return Object.keys(e)}const d="v-hidden",f=a("[v-hidden]",{display:"none!important"}),h=e({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:o}){const i=t(null),s=t(null);function a(t){const{value:n}=i,{getCounter:r,getTail:l}=e;let a;if(a=void 0!==r?r():s.value,!n||!a)return;a.hasAttribute(d)&&a.removeAttribute(d);const{children:c}=n;if(t.showAllItemsBeforeCalculate)for(const e of c)e.hasAttribute(d)&&e.removeAttribute(d);const u=n.offsetWidth,f=[],h=o.tail?null==l?void 0:l():null;let y=h?h.offsetWidth:0,g=!1;const p=n.children.length-(o.tail?1:0);for(let o=0;o<p-1;++o){if(o<0)continue;const t=c[o];if(g){t.hasAttribute(d)||t.setAttribute(d,"");continue}t.hasAttribute(d)&&t.removeAttribute(d);const n=t.offsetWidth;if(y+=n,f[o]=n,y>u){const{updateCounter:t}=e;for(let n=o;n>=0;--n){const r=p-1-n;void 0!==t?t(r):a.textContent=`${r}`;const i=a.offsetWidth;if(y-=f[n],y+i<=u||0===n){g=!0,o=n-1,h&&(-1===o?(h.style.maxWidth=u-i+"px",h.style.boxSizing="border-box"):h.style.maxWidth="");const{onUpdateCount:t}=e;t&&t(r);break}}}}const{onUpdateOverflow:v}=e;g?void 0!==v&&v(!0):(void 0!==v&&v(!1),a.setAttribute(d,""))}const c=n();return f.mount({id:"vueuc/overflow",head:!0,anchorMetaName:l,ssr:c}),r((()=>a({showAllItemsBeforeCalculate:!1}))),{selfRef:i,counterRef:s,sync:a}},render(){const{$slots:e}=this;return o((()=>this.sync({showAllItemsBeforeCalculate:!1}))),i("div",{class:"v-overflow",ref:"selfRef"},[s(e,"default"),e.counter?e.counter():i("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}}),y=e({name:"ChevronRight",render:()=>i("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))});function g(e){return Array.isArray(e)?e:[e]}const p={STOP:"STOP"};function v(e,t){const n=t(e);void 0!==e.children&&n!==p.STOP&&e.children.forEach((e=>v(e,t)))}function k(e){return e.children}function w(e){return e.key}function m(){return!1}function b(e){return!0===e.disabled}function N(e){var t;return null==e?[]:Array.isArray(e)?e:null!==(t=e.checkedKeys)&&void 0!==t?t:[]}function A(e){var t;return null==e||Array.isArray(e)?[]:null!==(t=e.indeterminateKeys)&&void 0!==t?t:[]}function C(e,t){const n=new Set(e);return t.forEach((e=>{n.has(e)||n.add(e)})),Array.from(n)}function L(e,t){const n=new Set(e);return t.forEach((e=>{n.has(e)&&n.delete(e)})),Array.from(n)}function x(e){return"group"===(null==e?void 0:e.type)}function S(e){const t=new Map;return e.forEach(((e,n)=>{t.set(e.key,n)})),e=>{var n;return null!==(n=t.get(e))&&void 0!==n?n:null}}class K extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function P(e,t){const{checkedKeys:n,keysToCheck:r,keysToUncheck:o,indeterminateKeys:i,cascade:s,leafOnly:l,checkStrategy:a,allowNotLoaded:c}=e;if(!s)return void 0!==r?{checkedKeys:C(n,r),indeterminateKeys:Array.from(i)}:void 0!==o?{checkedKeys:L(n,o),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(n),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:u}=t;let d;var f,h,y;d=void 0!==o?function(e,t,n,r){const o=O(t,n,r,!1),i=O(e,n,r,!0),s=function(e,t){const n=new Set;return e.forEach((e=>{const r=t.treeNodeMap.get(e);if(void 0!==r){let e=r.parent;for(;null!==e&&!e.disabled&&!n.has(e.key);)n.add(e.key),e=e.parent}})),n}(e,n),l=[];return o.forEach((e=>{(i.has(e)||s.has(e))&&l.push(e)})),l.forEach((e=>o.delete(e))),o}(o,n,t,c):void 0!==r?(f=r,h=t,y=c,O(n.concat(f),h,y,!1)):O(n,t,c,!1);const g="parent"===a,p="child"===a||l,v=d,k=new Set;for(let w=Math.max.apply(null,Array.from(u.keys()));w>=0;w-=1){const e=0===w,t=u.get(w);for(const n of t){if(n.isLeaf)continue;const{key:t,shallowLoaded:r}=n;if(p&&r&&n.children.forEach((e=>{!e.disabled&&!e.isLeaf&&e.shallowLoaded&&v.has(e.key)&&v.delete(e.key)})),n.disabled||!r)continue;let o=!0,i=!1,s=!0;for(const e of n.children){const t=e.key;if(!e.disabled)if(s&&(s=!1),v.has(t))i=!0;else{if(k.has(t)){i=!0,o=!1;break}if(o=!1,i)break}}o&&!s?(g&&n.children.forEach((e=>{!e.disabled&&v.has(e.key)&&v.delete(e.key)})),v.add(t)):i&&k.add(t),e&&p&&v.has(t)&&v.delete(t)}}return{checkedKeys:Array.from(v),indeterminateKeys:Array.from(k)}}function O(e,t,n,r){const{treeNodeMap:o,getChildren:i}=t,s=new Set,l=new Set(e);return e.forEach((e=>{const t=o.get(e);void 0!==t&&v(t,(e=>{if(e.disabled)return p.STOP;const{key:t}=e;if(!s.has(t)&&(s.add(t),l.add(t),o=e.rawNode,a=i,!1===o.isLeaf&&!Array.isArray(a(o)))){if(r)return p.STOP;if(!n)throw new K}var o,a}))})),l}function E(e,t){const n=e.siblings,r=n.length,{index:o}=e;return t?n[(o+1)%r]:o===n.length-1?null:n[o+1]}function G(e,t,{loop:n=!1,includeDisabled:r=!1}={}){const o="prev"===t?T:E,i={reverse:"prev"===t};let s=!1,l=null;return function t(a){if(null!==a){if(a===e)if(s){if(!e.disabled&&!e.isGroup)return void(l=e)}else s=!0;else if((!a.disabled||r)&&!a.ignored&&!a.isGroup)return void(l=a);if(a.isGroup){const e=M(a,i);null!==e?l=e:t(o(a,n))}else{const e=o(a,!1);if(null!==e)t(e);else{const e=a.parent;(null==e?void 0:e.isGroup)?t(o(e,n)):n&&t(o(a,!0))}}}}(e),l}function T(e,t){const n=e.siblings,r=n.length,{index:o}=e;return t?n[(o-1+r)%r]:0===o?null:n[o-1]}function M(e,t={}){const{reverse:n=!1}=t,{children:r}=e;if(r){const{length:e}=r,o=n?-1:e,i=n?-1:1;for(let s=n?e-1:0;s!==o;s+=i){const e=r[s];if(!e.disabled&&!e.ignored){if(!e.isGroup)return e;{const n=M(e,t);if(null!==n)return n}}}}return null}const F={getChild(){return this.ignored?null:M(this)},getParent(){const{parent:e}=this;return(null==e?void 0:e.isGroup)?e.getParent():e},getNext(e={}){return G(this,"next",e)},getPrev(e={}){return G(this,"prev",e)}};function U(e,t){const n=t?new Set(t):void 0,r=[];return function e(t){t.forEach((t=>{r.push(t),t.isLeaf||!t.children||t.ignored||(t.isGroup||void 0===n||n.has(t.key))&&e(t.children)}))}(e),r}function W(e,t,n,r,o,i=null,s=0){const l=[];return e.forEach(((a,c)=>{var u;const d=Object.create(r);if(d.rawNode=a,d.siblings=l,d.level=s,d.index=c,d.isFirstChild=0===c,d.isLastChild=c+1===e.length,d.parent=i,!d.ignored){const e=o(a);Array.isArray(e)&&(d.children=W(e,t,n,r,o,d,s+1))}l.push(d),t.set(d.key,d),n.has(s)||n.set(s,[]),null===(u=n.get(s))||void 0===u||u.push(d)})),l}function j(e,t={}){var n;const r=new Map,o=new Map,{getDisabled:i=b,getIgnored:s=m,getIsGroup:l=x,getKey:a=w}=t,c=null!==(n=t.getChildren)&&void 0!==n?n:k,u=t.ignoreEmptyChildren?e=>{const t=c(e);return Array.isArray(t)?t.length?t:null:t}:c,d=Object.assign({get key(){return a(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return l(this.rawNode)},get isLeaf(){return function(e,t){const{isLeaf:n}=e;return void 0!==n?n:!t(e)}(this.rawNode,u)},get shallowLoaded(){return function(e,t){const{isLeaf:n}=e;return!(!1===n&&!Array.isArray(t(e)))}(this.rawNode,u)},get ignored(){return s(this.rawNode)},contains(e){return function(e,t){const n=e.key;for(;t;){if(t.key===n)return!0;t=t.parent}return!1}(this,e)}},F),f=W(e,r,o,d,u);function h(e){if(null==e)return null;const t=r.get(e);return t&&!t.ignored?t:null}const y={treeNodes:f,treeNodeMap:r,levelTreeNodeMap:o,maxLevel:Math.max(...o.keys()),getChildren:u,getFlattenedNodes:e=>U(f,e),getNode:function(e){if(null==e)return null;const t=r.get(e);return!t||t.isGroup||t.ignored?null:t},getPrev:function(e,t){const n=h(e);return n?n.getPrev(t):null},getNext:function(e,t){const n=h(e);return n?n.getNext(t):null},getParent:function(e){const t=h(e);return t?t.getParent():null},getChild:function(e){const t=h(e);return t?t.getChild():null},getFirstAvailableNode:()=>function(e){if(0===e.length)return null;const t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}(f),getPath:(e,t={})=>function(e,{includeGroup:t=!1,includeSelf:n=!0},r){var o;const i=r.treeNodeMap;let s=null==e?null:null!==(o=i.get(e))&&void 0!==o?o:null;const l={keyPath:[],treeNodePath:[],treeNode:s};if(null==s?void 0:s.ignored)return l.treeNode=null,l;for(;s;)s.ignored||!t&&s.isGroup||l.treeNodePath.push(s),s=s.parent;return l.treeNodePath.reverse(),n||l.treeNodePath.pop(),l.keyPath=l.treeNodePath.map((e=>e.key)),l}(e,t,y),getCheckedKeys(e,t={}){const{cascade:n=!0,leafOnly:r=!1,checkStrategy:o="all",allowNotLoaded:i=!1}=t;return P({checkedKeys:N(e),indeterminateKeys:A(e),cascade:n,leafOnly:r,checkStrategy:o,allowNotLoaded:i},y)},check(e,t,n={}){const{cascade:r=!0,leafOnly:o=!1,checkStrategy:i="all",allowNotLoaded:s=!1}=n;return P({checkedKeys:N(t),indeterminateKeys:A(t),keysToCheck:null==e?[]:g(e),cascade:r,leafOnly:o,checkStrategy:i,allowNotLoaded:s},y)},uncheck(e,t,n={}){const{cascade:r=!0,leafOnly:o=!1,checkStrategy:i="all",allowNotLoaded:s=!1}=n;return P({checkedKeys:N(t),indeterminateKeys:A(t),keysToUncheck:null==e?[]:g(e),cascade:r,leafOnly:o,checkStrategy:i,allowNotLoaded:s},y)},getNonLeafKeys:(e={})=>function(e,t={}){const{preserveGroup:n=!1}=t,r=[],o=n?e=>{e.isLeaf||(r.push(e.key),i(e.children))}:e=>{e.isLeaf||(e.isGroup||r.push(e.key),i(e.children))};function i(e){e.forEach(o)}return i(e),r}(f,e)};return y}export{y as C,h as V,S as a,j as c,U as f,c as h,u as k};