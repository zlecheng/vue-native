import{n as m}from"./index-ByY1MUmQ.js";const M=m&&"loading"in document.createElement("img"),O=(e={})=>{var o;const{root:n=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(o=e.threshold)!==null&&o!==void 0?o:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof n=="string"?document.querySelector(n):n)||document.documentElement})}},c=new WeakMap,h=new WeakMap,u=new WeakMap,x=(e,o,n)=>{if(!e)return()=>{};const r=O(o),{root:i}=r.options;let s;const v=c.get(i);v?s=v:(s=new Map,c.set(i,s));let a,t;s.has(r.hash)?(t=s.get(r.hash),t[1].has(e)||(a=t[0],t[1].add(e),a.observe(e))):(a=new IntersectionObserver(p=>{p.forEach(d=>{if(d.isIntersecting){const f=h.get(d.target),g=u.get(d.target);f&&f(),g&&(g.value=!0)}})},r.options),a.observe(e),t=[a,new Set([e])],s.set(r.hash,t));let l=!1;const b=()=>{l||(h.delete(e),u.delete(e),l=!0,t[1].has(e)&&(t[0].unobserve(e),t[1].delete(e)),t[1].size<=0&&s.delete(r.hash),s.size||c.delete(i))};return h.set(e,b),u.set(e,n),b};export{M as i,x as o};
