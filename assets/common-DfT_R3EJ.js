import{bU as a}from"./index-fTFNPYHW.js";function u(t=void 0,e="YYYY-MM-DD HH:mm:ss"){return a(t).format(e)}function m(t,e){let n,o,r=0;return function(...i){const s=+new Date;n=this,o=i,s-r>e&&(t.apply(n,o),r=s)}}function c(t){return new Promise(e=>setTimeout(e,t))}export{u as f,c as s,m as t};
