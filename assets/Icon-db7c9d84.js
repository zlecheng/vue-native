import{a as o,l as e,m as n,k as t,t as i,d as r,s,f as a,x as c,aF as l,h as p,aH as d}from"./index-6f90f808.js";import{f as h}from"./Scrollbar-ea102d1b.js";const m={name:"Icon",common:o,self:o=>{const{textColorBase:e,opacity1:n,opacity2:t,opacity3:i,opacity4:r,opacity5:s}=o;return{color:e,opacity1Depth:n,opacity2Depth:t,opacity3Depth:i,opacity4Depth:r,opacity5Depth:s}}},y=e("icon","\n height: 1em;\n width: 1em;\n line-height: 1em;\n text-align: center;\n display: inline-block;\n position: relative;\n fill: currentColor;\n transform: translateZ(0);\n",[n("color-transition",{transition:"color .3s var(--n-bezier)"}),n("depth",{color:"var(--n-color)"},[t("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),t("svg",{height:"1em",width:"1em"})]),u=r({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:Object.assign(Object.assign({},i.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),setup(o){const{mergedClsPrefixRef:e,inlineThemeDisabled:n}=s(o),t=i("Icon","-icon",y,m,o,e),r=a((()=>{const{depth:e}=o,{common:{cubicBezierEaseInOut:n},self:i}=t.value;if(void 0!==e){const{color:o,[`opacity${e}Depth`]:t}=i;return{"--n-bezier":n,"--n-color":o,"--n-opacity":t}}return{"--n-bezier":n,"--n-color":"","--n-opacity":""}})),l=n?c("icon",a((()=>`${o.depth||"d"}`)),r,o):void 0;return{mergedClsPrefix:e,mergedStyle:a((()=>{const{size:e,color:n}=o;return{fontSize:h(e),color:n}})),cssVars:n?void 0:r,themeClass:null==l?void 0:l.themeClass,onRender:null==l?void 0:l.onRender}},render(){var o;const{$parent:e,depth:n,mergedClsPrefix:t,component:i,onRender:r,themeClass:s}=this;return(null===(o=null==e?void 0:e.$options)||void 0===o?void 0:o._n_icon__)&&l("icon","don't wrap `n-icon` inside `n-icon`"),null==r||r(),p("i",d(this.$attrs,{role:"img",class:[`${t}-icon`,s,{[`${t}-icon--depth`]:n,[`${t}-icon--color-transition`]:void 0!==n}],style:[this.cssVars,this.mergedStyle]}),i?p(i):this.$slots)}});export{u as N};