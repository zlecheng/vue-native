import{_ as Z}from"./TheFooter-DHtWABs4.js";import{bk as J,cj as X,j as t,c as m,a9 as Y,b as G,a as p,e as Q,u as W,l as u,P as ee,y as C,t as oe,ac as te,h as y,br as L,ck as ne,f as R,o as re,b9 as ae,i as se,ae as le,bn as ie,ak as B,aq as ce,s as de,ar as ue,ap as fe,z as k,F as he,I as S,B as me,J as ve,K as be,r as _,A as pe,aK as ge}from"./index-CiQlDF9f.js";function we(e){return e.nodeType===9?null:e.parentNode}function E(e){if(e===null)return null;const o=we(e);if(o===null)return null;if(o.nodeType===9)return document.documentElement;if(o.nodeType===1){const{overflow:i,overflowX:s,overflowY:a}=getComputedStyle(o);if(/(auto|scroll|overlay)/.test(i+a+s))return o}return E(o)}function xe(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e}function T(e){return e.nodeName==="#document"}const Ce=e=>{const{popoverColor:o,textColor2:i,primaryColorHover:s,primaryColorPressed:a}=e;return Object.assign(Object.assign({},X),{color:o,textColor:i,iconColor:i,iconColorHover:s,iconColorPressed:a,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .12)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .18)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .18)"})},ye={name:"BackTop",common:J,self:Ce},Le=t("svg",{viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlinkHref:"http://www.w3.org/1999/xlink"},t("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},t("g",{transform:"translate(-139.000000, -4423.000000)","fill-rule":"nonzero"},t("g",{transform:"translate(120.000000, 4285.000000)"},t("g",{transform:"translate(7.000000, 126.000000)"},t("g",{transform:"translate(24.000000, 24.000000) scale(1, -1) translate(-24.000000, -24.000000) translate(12.000000, 12.000000)"},t("g",{transform:"translate(4.000000, 2.000000)"},t("path",{d:"M8,0 C8.51283584,0 8.93550716,0.38604019 8.99327227,0.883378875 L9,1 L9,10.584 L12.2928932,7.29289322 C12.6834175,6.90236893 13.3165825,6.90236893 13.7071068,7.29289322 C14.0675907,7.65337718 14.0953203,8.22060824 13.7902954,8.61289944 L13.7071068,8.70710678 L8.70710678,13.7071068 L8.62544899,13.7803112 L8.618,13.784 L8.59530661,13.8036654 L8.4840621,13.8753288 L8.37133602,13.9287745 L8.22929083,13.9735893 L8.14346259,13.9897165 L8.03324678,13.9994506 L7.9137692,13.9962979 L7.77070917,13.9735893 L7.6583843,13.9401293 L7.57677845,13.9063266 L7.47929125,13.8540045 L7.4048407,13.8036865 L7.38131006,13.7856883 C7.35030318,13.7612383 7.32077858,13.7349921 7.29289322,13.7071068 L2.29289322,8.70710678 L2.20970461,8.61289944 C1.90467972,8.22060824 1.93240926,7.65337718 2.29289322,7.29289322 C2.65337718,6.93240926 3.22060824,6.90467972 3.61289944,7.20970461 L3.70710678,7.29289322 L7,10.585 L7,1 L7.00672773,0.883378875 C7.06449284,0.38604019 7.48716416,0 8,0 Z"}),t("path",{d:"M14.9333333,15.9994506 C15.5224371,15.9994506 16,16.4471659 16,16.9994506 C16,17.5122865 15.5882238,17.9349578 15.0577292,17.9927229 L14.9333333,17.9994506 L1.06666667,17.9994506 C0.477562934,17.9994506 0,17.5517354 0,16.9994506 C0,16.4866148 0.411776203,16.0639435 0.9422708,16.0061783 L1.06666667,15.9994506 L14.9333333,15.9994506 Z"})))))))),ke=m("back-top",`
 position: fixed;
 right: 40px;
 bottom: 40px;
 cursor: pointer;
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 height: var(--n-height);
 min-width: var(--n-width);
 box-shadow: var(--n-box-shadow);
 background-color: var(--n-color);
`,[Y(),G("transition-disabled",{transition:"none !important"}),m("base-icon",`
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),p("svg",{pointerEvents:"none"}),p("&:hover",{boxShadow:"var(--n-box-shadow-hover)"},[m("base-icon",{color:"var(--n-icon-color-hover)"})]),p("&:active",{boxShadow:"var(--n-box-shadow-pressed)"},[m("base-icon",{color:"var(--n-icon-color-pressed)"})])]),Se=Object.assign(Object.assign({},R.props),{show:{type:Boolean,default:void 0},right:{type:[Number,String],default:40},bottom:{type:[Number,String],default:40},to:{type:[String,Object],default:"body"},visibilityHeight:{type:Number,default:180},listenTo:[String,Object,Function],"onUpdate:show":{type:Function,default:()=>{}},target:Function,onShow:Function,onHide:Function}),_e=Q({name:"BackTop",inheritAttrs:!1,props:Se,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:i}=W(e),s=u(null),a=u(!1);ee(()=>{const{value:r}=s;if(r===null){a.value=!1;return}a.value=r>=e.visibilityHeight});const f=u(!1);C(a,r=>{var n;f.value&&((n=e["onUpdate:show"])===null||n===void 0||n.call(e,r))});const P=oe(e,"show"),v=te(P,a),b=u(!0),g=u(null),z=y(()=>({right:`calc(${L(e.right)} + ${ne.value})`,bottom:L(e.bottom)}));let c,w;C(v,r=>{var n,l;f.value&&(r&&((n=e.onShow)===null||n===void 0||n.call(e)),(l=e.onHide)===null||l===void 0||l.call(e))});const H=R("BackTop","-back-top",ke,ye,e,o);function N(){var r;if(w)return;w=!0;const n=((r=e.target)===null||r===void 0?void 0:r.call(e))||xe(e.listenTo)||E(g.value);if(!n)return;c=n===document.documentElement?document:n;const{to:l}=e;typeof l=="string"&&document.querySelector(l),c.addEventListener("scroll",h),h()}function $(){(T(c)?document.documentElement:c).scrollTo({top:0,behavior:"smooth"})}function h(){s.value=(T(c)?document.documentElement:c).scrollTop,f.value||fe(()=>{f.value=!0})}function j(){b.value=!1}re(()=>{N(),b.value=v.value}),ae(()=>{c&&c.removeEventListener("scroll",h)});const x=y(()=>{const{self:{color:r,boxShadow:n,boxShadowHover:l,boxShadowPressed:F,iconColor:M,iconColorHover:D,iconColorPressed:I,width:O,height:V,iconSize:A,borderRadius:U,textColor:q},common:{cubicBezierEaseInOut:K}}=H.value;return{"--n-bezier":K,"--n-border-radius":U,"--n-height":V,"--n-width":O,"--n-box-shadow":n,"--n-box-shadow-hover":l,"--n-box-shadow-pressed":F,"--n-color":r,"--n-icon-size":A,"--n-icon-color":M,"--n-icon-color-hover":D,"--n-icon-color-pressed":I,"--n-text-color":q}}),d=i?se("back-top",void 0,x,e):void 0;return{placeholderRef:g,style:z,mergedShow:v,isMounted:le(),scrollElement:u(null),scrollTop:s,DomInfoReady:f,transitionDisabled:b,mergedClsPrefix:o,handleAfterEnter:j,handleScroll:h,handleClick:$,cssVars:i?void 0:x,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){const{mergedClsPrefix:e}=this;return t("div",{ref:"placeholderRef",class:`${e}-back-top-placeholder`,style:"display: none","aria-hidden":!0},t(ie,{to:this.to,show:this.mergedShow},{default:()=>t(B,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterEnter:this.handleAfterEnter},{default:()=>{var o;return(o=this.onRender)===null||o===void 0||o.call(this),this.mergedShow?t("div",ce(this.$attrs,{class:[`${e}-back-top`,this.themeClass,this.transitionDisabled&&`${e}-back-top--transition-disabled`],style:[this.style,this.cssVars],onClick:this.handleClick}),de(this.$slots.default,()=>[t(ue,{clsPrefix:e},{default:()=>Le})])):null}})}))}}),Te={class:"cus-scroll h-full flex-col flex-1 bg-#f5f6fb dark:bg-#121212"},Ee={__name:"AppPage",props:{full:{type:Boolean,default:!1},showFooter:{type:Boolean,default:!1}},setup(e){return(o,i)=>{const s=Z,a=_e;return k(),he("main",Te,[S(B,{name:"fade-slide",mode:"out-in",appear:""},{default:me(()=>[ve("main",{class:be([{"flex-1":e.full},"m-12"])},[_(o.$slots,"default")],2)]),_:3}),o.$slots.footer?_(o.$slots,"footer",{key:0}):e.showFooter?(k(),pe(s,{key:1,class:"mb-12 mt-auto"})):ge("",!0),S(a,{bottom:20})])}}};export{Ee as _};
