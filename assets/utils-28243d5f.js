import{a2 as e,W as u}from"./index-7f005f90.js";var t;const n=(t={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},function(e){return null==t?void 0:t[e]});var a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g"),f=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,r=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,s="\\ud800-\\udfff",d="\\u2700-\\u27bf",i="a-z\\xdf-\\xf6\\xf8-\\xff",x="A-Z\\xc0-\\xd6\\xd8-\\xde",c="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",l="["+c+"]",h="\\d+",g="["+d+"]",p="["+i+"]",A="[^"+s+c+h+d+i+x+"]",b="(?:\\ud83c[\\udde6-\\uddff]){2}",v="[\\ud800-\\udbff][\\udc00-\\udfff]",E="["+x+"]",m="(?:"+p+"|"+A+")",O="(?:"+E+"|"+A+")",z="(?:['’](?:d|ll|m|re|s|t|ve))?",I="(?:['’](?:D|LL|M|RE|S|T|VE))?",j="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",U="[\\ufe0e\\ufe0f]?",Z=U+j+"(?:\\u200d(?:"+["[^"+s+"]",b,v].join("|")+")"+U+j+")*",R="(?:"+[g,b,v].join("|")+")"+Z,S=RegExp([E+"?"+p+"+"+z+"(?="+[l,E,"$"].join("|")+")",O+"+"+I+"(?="+[l,E+m,"$"].join("|")+")",E+"?"+m+"+"+z,E+"+"+I,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",h,R].join("|"),"g");var w=RegExp("['’]","g");function y(u){return function(t){return function(e,u,t,n){for(var a=-1,o=null==e?0:e.length;++a<o;)t=u(t,e[a],a,e);return t}(function(u,t,n){return u=e(u),void 0===(t=n?void 0:t)?(a=u,r.test(a)?function(e){return e.match(S)||[]}(u):function(e){return e.match(f)||[]}(u)):u.match(t)||[];var a}((s=t,(s=e(s))&&s.replace(a,n).replace(o,"")).replace(w,"")),u,"");var s}}const L=u&&"loading"in document.createElement("img"),T=new WeakMap,D=new WeakMap,M=new WeakMap,N=(e,u,t)=>{if(!e)return()=>{};const n=((e={})=>{var u;const{root:t=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):null!==(u=e.threshold)&&void 0!==u?u:"0"}`,options:Object.assign(Object.assign({},e),{root:("string"==typeof t?document.querySelector(t):t)||document.documentElement})}})(u),{root:a}=n.options;let o;const f=T.get(a);let r,s;f?o=f:(o=new Map,T.set(a,o)),o.has(n.hash)?(s=o.get(n.hash),s[1].has(e)||(r=s[0],s[1].add(e),r.observe(e))):(r=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){const u=D.get(e.target),t=M.get(e.target);u&&u(),t&&(t.value=!0)}}))}),n.options),r.observe(e),s=[r,new Set([e])],o.set(n.hash,s));let d=!1;const i=()=>{d||(D.delete(e),M.delete(e),d=!0,s[1].has(e)&&(s[0].unobserve(e),s[1].delete(e)),s[1].size<=0&&o.delete(n.hash),o.size||T.delete(a))};return D.set(e,i),M.set(e,t),i};export{y as c,L as i,N as o};
