import{e as j,l as W,Q as D,R as B,o as V,ap as $,j as M,r as q,S as z}from"./index-DZMTEAwI.js";function ke(e,n){let{target:t}=e;for(;t;){if(t.dataset&&t.dataset[n]!==void 0)return!0;t=t.parentElement}return!1}const S="v-hidden",Q=z("[v-hidden]",{display:"none!important"}),Ae=j({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:n}){const t=W(null),r=W(null);function s(i){const{value:u}=t,{getCounter:h,getTail:a}=e;let c;if(h!==void 0?c=h():c=r.value,!u||!c)return;c.hasAttribute(S)&&c.removeAttribute(S);const{children:d}=u;if(i.showAllItemsBeforeCalculate)for(const g of d)g.hasAttribute(S)&&g.removeAttribute(S);const A=u.offsetWidth,N=[],y=n.tail?a==null?void 0:a():null;let C=y?y.offsetWidth:0,x=!1;const w=u.children.length-(n.tail?1:0);for(let g=0;g<w-1;++g){if(g<0)continue;const o=d[g];if(x){o.hasAttribute(S)||o.setAttribute(S,"");continue}else o.hasAttribute(S)&&o.removeAttribute(S);const l=o.offsetWidth;if(C+=l,N[g]=l,C>A){const{updateCounter:v}=e;for(let m=g;m>=0;--m){const k=w-1-m;v!==void 0?v(k):c.textContent=`${k}`;const b=c.offsetWidth;if(C-=N[m],C+b<=A||m===0){x=!0,g=m-1,y&&(g===-1?(y.style.maxWidth=`${A-b}px`,y.style.boxSizing="border-box"):y.style.maxWidth="");const{onUpdateCount:p}=e;p&&p(k);break}}}}const{onUpdateOverflow:K}=e;x?K!==void 0&&K(!0):(K!==void 0&&K(!1),c.setAttribute(S,""))}const f=D();return Q.mount({id:"vueuc/overflow",head:!0,anchorMetaName:B,ssr:f}),V(()=>s({showAllItemsBeforeCalculate:!1})),{selfRef:t,counterRef:r,sync:s}},render(){const{$slots:e}=this;return $(()=>this.sync({showAllItemsBeforeCalculate:!1})),M("div",{class:"v-overflow",ref:"selfRef"},[q(e,"default"),e.counter?e.counter():M("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function F(e){return Array.isArray(e)?e:[e]}const O={STOP:"STOP"};function R(e,n){const t=n(e);e.children!==void 0&&t!==O.STOP&&e.children.forEach(r=>R(r,n))}function Z(e,n={}){const{preserveGroup:t=!1}=n,r=[],s=t?i=>{i.isLeaf||(r.push(i.key),f(i.children))}:i=>{i.isLeaf||(i.isGroup||r.push(i.key),f(i.children))};function f(i){i.forEach(s)}return f(e),r}function H(e,n){const{isLeaf:t}=e;return t!==void 0?t:!n(e)}function J(e){return e.children}function X(e){return e.key}function Y(){return!1}function ee(e,n){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(n(e)))}function te(e){return e.disabled===!0}function ne(e,n){return e.isLeaf===!1&&!Array.isArray(n(e))}function P(e){var n;return e==null?[]:Array.isArray(e)?e:(n=e.checkedKeys)!==null&&n!==void 0?n:[]}function E(e){var n;return e==null||Array.isArray(e)?[]:(n=e.indeterminateKeys)!==null&&n!==void 0?n:[]}function re(e,n){const t=new Set(e);return n.forEach(r=>{t.has(r)||t.add(r)}),Array.from(t)}function ie(e,n){const t=new Set(e);return n.forEach(r=>{t.has(r)&&t.delete(r)}),Array.from(t)}function se(e){return(e==null?void 0:e.type)==="group"}function be(e){const n=new Map;return e.forEach((t,r)=>{n.set(t.key,r)}),t=>{var r;return(r=n.get(t))!==null&&r!==void 0?r:null}}class oe extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function le(e,n,t,r){return L(n.concat(e),t,r,!1)}function ae(e,n){const t=new Set;return e.forEach(r=>{const s=n.treeNodeMap.get(r);if(s!==void 0){let f=s.parent;for(;f!==null&&!(f.disabled||t.has(f.key));)t.add(f.key),f=f.parent}}),t}function ue(e,n,t,r){const s=L(n,t,r,!1),f=L(e,t,r,!0),i=ae(e,t),u=[];return s.forEach(h=>{(f.has(h)||i.has(h))&&u.push(h)}),u.forEach(h=>s.delete(h)),s}function G(e,n){const{checkedKeys:t,keysToCheck:r,keysToUncheck:s,indeterminateKeys:f,cascade:i,leafOnly:u,checkStrategy:h,allowNotLoaded:a}=e;if(!i)return r!==void 0?{checkedKeys:re(t,r),indeterminateKeys:Array.from(f)}:s!==void 0?{checkedKeys:ie(t,s),indeterminateKeys:Array.from(f)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(f)};const{levelTreeNodeMap:c}=n;let d;s!==void 0?d=ue(s,t,n,a):r!==void 0?d=le(r,t,n,a):d=L(t,n,a,!1);const A=h==="parent",N=h==="child"||u,y=d,C=new Set,x=Math.max.apply(null,Array.from(c.keys()));for(let w=x;w>=0;w-=1){const K=w===0,g=c.get(w);for(const o of g){if(o.isLeaf)continue;const{key:l,shallowLoaded:v}=o;if(N&&v&&o.children.forEach(p=>{!p.disabled&&!p.isLeaf&&p.shallowLoaded&&y.has(p.key)&&y.delete(p.key)}),o.disabled||!v)continue;let m=!0,k=!1,b=!0;for(const p of o.children){const I=p.key;if(!p.disabled){if(b&&(b=!1),y.has(I))k=!0;else if(C.has(I)){k=!0,m=!1;break}else if(m=!1,k)break}}m&&!b?(A&&o.children.forEach(p=>{!p.disabled&&y.has(p.key)&&y.delete(p.key)}),y.add(l)):k&&C.add(l),K&&N&&y.has(l)&&y.delete(l)}}return{checkedKeys:Array.from(y),indeterminateKeys:Array.from(C)}}function L(e,n,t,r){const{treeNodeMap:s,getChildren:f}=n,i=new Set,u=new Set(e);return e.forEach(h=>{const a=s.get(h);a!==void 0&&R(a,c=>{if(c.disabled)return O.STOP;const{key:d}=c;if(!i.has(d)&&(i.add(d),u.add(d),ne(c.rawNode,f))){if(r)return O.STOP;if(!t)throw new oe}})}),u}function ce(e,{includeGroup:n=!1,includeSelf:t=!0},r){var s;const f=r.treeNodeMap;let i=e==null?null:(s=f.get(e))!==null&&s!==void 0?s:null;const u={keyPath:[],treeNodePath:[],treeNode:i};if(i!=null&&i.ignored)return u.treeNode=null,u;for(;i;)!i.ignored&&(n||!i.isGroup)&&u.treeNodePath.push(i),i=i.parent;return u.treeNodePath.reverse(),t||u.treeNodePath.pop(),u.keyPath=u.treeNodePath.map(h=>h.key),u}function de(e){if(e.length===0)return null;const n=e[0];return n.isGroup||n.ignored||n.disabled?n.getNext():n}function fe(e,n){const t=e.siblings,r=t.length,{index:s}=e;return n?t[(s+1)%r]:s===t.length-1?null:t[s+1]}function _(e,n,{loop:t=!1,includeDisabled:r=!1}={}){const s=n==="prev"?he:fe,f={reverse:n==="prev"};let i=!1,u=null;function h(a){if(a!==null){if(a===e){if(!i)i=!0;else if(!e.disabled&&!e.isGroup){u=e;return}}else if((!a.disabled||r)&&!a.ignored&&!a.isGroup){u=a;return}if(a.isGroup){const c=T(a,f);c!==null?u=c:h(s(a,t))}else{const c=s(a,!1);if(c!==null)h(c);else{const d=ye(a);d!=null&&d.isGroup?h(s(d,t)):t&&h(s(a,!0))}}}}return h(e),u}function he(e,n){const t=e.siblings,r=t.length,{index:s}=e;return n?t[(s-1+r)%r]:s===0?null:t[s-1]}function ye(e){return e.parent}function T(e,n={}){const{reverse:t=!1}=n,{children:r}=e;if(r){const{length:s}=r,f=t?s-1:0,i=t?-1:s,u=t?-1:1;for(let h=f;h!==i;h+=u){const a=r[h];if(!a.disabled&&!a.ignored)if(a.isGroup){const c=T(a,n);if(c!==null)return c}else return a}}return null}const ge={getChild(){return this.ignored?null:T(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return _(this,"next",e)},getPrev(e={}){return _(this,"prev",e)}};function pe(e,n){const t=n?new Set(n):void 0,r=[];function s(f){f.forEach(i=>{r.push(i),!(i.isLeaf||!i.children||i.ignored)&&(i.isGroup||t===void 0||t.has(i.key))&&s(i.children)})}return s(e),r}function ve(e,n){const t=e.key;for(;n;){if(n.key===t)return!0;n=n.parent}return!1}function U(e,n,t,r,s,f=null,i=0){const u=[];return e.forEach((h,a)=>{var c;const d=Object.create(r);if(d.rawNode=h,d.siblings=u,d.level=i,d.index=a,d.isFirstChild=a===0,d.isLastChild=a+1===e.length,d.parent=f,!d.ignored){const A=s(h);Array.isArray(A)&&(d.children=U(A,n,t,r,s,d,i+1))}u.push(d),n.set(d.key,d),t.has(i)||t.set(i,[]),(c=t.get(i))===null||c===void 0||c.push(d)}),u}function Ce(e,n={}){var t;const r=new Map,s=new Map,{getDisabled:f=te,getIgnored:i=Y,getIsGroup:u=se,getKey:h=X}=n,a=(t=n.getChildren)!==null&&t!==void 0?t:J,c=n.ignoreEmptyChildren?o=>{const l=a(o);return Array.isArray(l)?l.length?l:null:l}:a,d=Object.assign({get key(){return h(this.rawNode)},get disabled(){return f(this.rawNode)},get isGroup(){return u(this.rawNode)},get isLeaf(){return H(this.rawNode,c)},get shallowLoaded(){return ee(this.rawNode,c)},get ignored(){return i(this.rawNode)},contains(o){return ve(this,o)}},ge),A=U(e,r,s,d,c);function N(o){if(o==null)return null;const l=r.get(o);return l&&!l.isGroup&&!l.ignored?l:null}function y(o){if(o==null)return null;const l=r.get(o);return l&&!l.ignored?l:null}function C(o,l){const v=y(o);return v?v.getPrev(l):null}function x(o,l){const v=y(o);return v?v.getNext(l):null}function w(o){const l=y(o);return l?l.getParent():null}function K(o){const l=y(o);return l?l.getChild():null}const g={treeNodes:A,treeNodeMap:r,levelTreeNodeMap:s,maxLevel:Math.max(...s.keys()),getChildren:c,getFlattenedNodes(o){return pe(A,o)},getNode:N,getPrev:C,getNext:x,getParent:w,getChild:K,getFirstAvailableNode(){return de(A)},getPath(o,l={}){return ce(o,l,g)},getCheckedKeys(o,l={}){const{cascade:v=!0,leafOnly:m=!1,checkStrategy:k="all",allowNotLoaded:b=!1}=l;return G({checkedKeys:P(o),indeterminateKeys:E(o),cascade:v,leafOnly:m,checkStrategy:k,allowNotLoaded:b},g)},check(o,l,v={}){const{cascade:m=!0,leafOnly:k=!1,checkStrategy:b="all",allowNotLoaded:p=!1}=v;return G({checkedKeys:P(l),indeterminateKeys:E(l),keysToCheck:o==null?[]:F(o),cascade:m,leafOnly:k,checkStrategy:b,allowNotLoaded:p},g)},uncheck(o,l,v={}){const{cascade:m=!0,leafOnly:k=!1,checkStrategy:b="all",allowNotLoaded:p=!1}=v;return G({checkedKeys:P(l),indeterminateKeys:E(l),keysToUncheck:o==null?[]:F(o),cascade:m,leafOnly:k,checkStrategy:b,allowNotLoaded:p},g)},getNonLeafKeys(o={}){return Z(A,o)}};return g}export{Ae as V,be as a,Ce as c,pe as f,ke as h};
