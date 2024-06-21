import{c as o,a as e,aA as r,e as t,l,m as n,d as s,t as a,g as i,s as c,p as d,f as b,x as g,h as u,n as p,k as h,N as v,i as f,v as m}from"./index-1b0283d3.js";import{C as y}from"./Icon-e06b2b9d.js";import{s as C,b as x,N as S,u as T,c as B}from"./Scrollbar-cef01755.js";import{G as z}from"./Tooltip-f622a002.js";const w=o({name:"Layout",common:e,peers:{Scrollbar:C},self:o=>{const{baseColor:e,textColor2:t,bodyColor:l,cardColor:n,dividerColor:s,actionColor:a,scrollbarColor:i,scrollbarColorHover:c,invertedColor:d}=o;return{textColor:t,textColorInverted:"#FFF",color:l,colorEmbedded:a,headerColor:n,headerColorInverted:d,footerColor:a,footerColorInverted:d,headerBorderColor:s,headerBorderColorInverted:d,footerBorderColor:s,footerBorderColorInverted:d,siderBorderColor:s,siderBorderColorInverted:d,siderColor:n,siderColorInverted:d,siderToggleButtonBorder:`1px solid ${s}`,siderToggleButtonColor:e,siderToggleButtonIconColor:t,siderToggleButtonIconColorInverted:t,siderToggleBarColor:r(l,i),siderToggleBarColorHover:r(l,c),__invertScrollbar:"true"}}}),k=t("n-layout-sider"),$={type:String,default:"static"},I=l("layout","\n color: var(--n-text-color);\n background-color: var(--n-color);\n box-sizing: border-box;\n position: relative;\n z-index: auto;\n flex: auto;\n overflow: hidden;\n transition:\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n",[l("layout-scroll-container","\n overflow-x: hidden;\n box-sizing: border-box;\n height: 100%;\n "),n("absolute-positioned","\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n ")]),j={embedded:Boolean,position:$,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},O=t("n-layout");function P(o){return s({name:o?"LayoutContent":"Layout",props:Object.assign(Object.assign({},a.props),j),setup(o){const e=i(null),r=i(null),{mergedClsPrefixRef:t,inlineThemeDisabled:l}=c(o),n=a("Layout","-layout",I,w,o,t);d(O,o);let s=0,u=0;x((()=>{if(o.nativeScrollbar){const o=e.value;o&&(o.scrollTop=u,o.scrollLeft=s)}}));const p={scrollTo:function(t,l){if(o.nativeScrollbar){const{value:o}=e;o&&(void 0===l?o.scrollTo(t):o.scrollTo(t,l))}else{const{value:o}=r;o&&o.scrollTo(t,l)}}},h=b((()=>{const{common:{cubicBezierEaseInOut:e},self:r}=n.value;return{"--n-bezier":e,"--n-color":o.embedded?r.colorEmbedded:r.color,"--n-text-color":r.textColor}})),v=l?g("layout",b((()=>o.embedded?"e":"")),h,o):void 0;return Object.assign({mergedClsPrefix:t,scrollableElRef:e,scrollbarInstRef:r,hasSiderStyle:{display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},mergedTheme:n,handleNativeElScroll:e=>{var r;const t=e.target;s=t.scrollLeft,u=t.scrollTop,null===(r=o.onScroll)||void 0===r||r.call(o,e)},cssVars:l?void 0:h,themeClass:null==v?void 0:v.themeClass,onRender:null==v?void 0:v.onRender},p)},render(){var e;const{mergedClsPrefix:r,hasSider:t}=this;null===(e=this.onRender)||void 0===e||e.call(this);const l=t?this.hasSiderStyle:void 0,n=[this.themeClass,o&&`${r}-layout-content`,`${r}-layout`,`${r}-layout--${this.position}-positioned`];return u("div",{class:n,style:this.cssVars},this.nativeScrollbar?u("div",{ref:"scrollableElRef",class:[`${r}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,l],onScroll:this.handleNativeElScroll},this.$slots):u(S,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,l]}),this.$slots))}})}const R=P(!1),E=P(!0),_=l("layout-sider","\n flex-shrink: 0;\n box-sizing: border-box;\n position: relative;\n z-index: 1;\n color: var(--n-text-color);\n transition:\n color .3s var(--n-bezier),\n border-color .3s var(--n-bezier),\n min-width .3s var(--n-bezier),\n max-width .3s var(--n-bezier),\n transform .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n background-color: var(--n-color);\n display: flex;\n justify-content: flex-end;\n",[n("bordered",[p("border",'\n content: "";\n position: absolute;\n top: 0;\n bottom: 0;\n width: 1px;\n background-color: var(--n-border-color);\n transition: background-color .3s var(--n-bezier);\n ')]),p("left-placement",[n("bordered",[p("border","\n right: 0;\n ")])]),n("right-placement","\n justify-content: flex-start;\n ",[n("bordered",[p("border","\n left: 0;\n ")]),n("collapsed",[l("layout-toggle-button",[l("base-icon","\n transform: rotate(180deg);\n ")]),l("layout-toggle-bar",[h("&:hover",[p("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),p("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),l("layout-toggle-button","\n left: 0;\n transform: translateX(-50%) translateY(-50%);\n ",[l("base-icon","\n transform: rotate(0);\n ")]),l("layout-toggle-bar","\n left: -28px;\n transform: rotate(180deg);\n ",[h("&:hover",[p("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),p("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),n("collapsed",[l("layout-toggle-bar",[h("&:hover",[p("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),p("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),l("layout-toggle-button",[l("base-icon","\n transform: rotate(0);\n ")])]),l("layout-toggle-button","\n transition:\n color .3s var(--n-bezier),\n right .3s var(--n-bezier),\n left .3s var(--n-bezier),\n border-color .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n cursor: pointer;\n width: 24px;\n height: 24px;\n position: absolute;\n top: 50%;\n right: 0;\n border-radius: 50%;\n display: flex;\n align-items: center;\n justify-content: center;\n font-size: 18px;\n color: var(--n-toggle-button-icon-color);\n border: var(--n-toggle-button-border);\n background-color: var(--n-toggle-button-color);\n box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);\n transform: translateX(50%) translateY(-50%);\n z-index: 1;\n ",[l("base-icon","\n transition: transform .3s var(--n-bezier);\n transform: rotate(180deg);\n ")]),l("layout-toggle-bar","\n cursor: pointer;\n height: 72px;\n width: 32px;\n position: absolute;\n top: calc(50% - 36px);\n right: -28px;\n ",[p("top, bottom","\n position: absolute;\n width: 4px;\n border-radius: 2px;\n height: 38px;\n left: 14px;\n transition: \n background-color .3s var(--n-bezier),\n transform .3s var(--n-bezier);\n "),p("bottom","\n position: absolute;\n top: 34px;\n "),h("&:hover",[p("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),p("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),p("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),h("&:hover",[p("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),p("border","\n position: absolute;\n top: 0;\n right: 0;\n bottom: 0;\n width: 1px;\n transition: background-color .3s var(--n-bezier);\n "),l("layout-sider-scroll-container","\n flex-grow: 1;\n flex-shrink: 0;\n box-sizing: border-box;\n height: 100%;\n opacity: 0;\n transition: opacity .3s var(--n-bezier);\n max-width: 100%;\n "),n("show-content",[l("layout-sider-scroll-container",{opacity:1})]),n("absolute-positioned","\n position: absolute;\n left: 0;\n top: 0;\n bottom: 0;\n ")]),F=s({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:o}=this;return u("div",{class:`${o}-layout-toggle-button`,onClick:this.onClick},u(v,{clsPrefix:o},{default:()=>u(y,null)}))}}),L=s({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:o}=this;return u("div",{onClick:this.onClick,class:`${o}-layout-toggle-bar`},u("div",{class:`${o}-layout-toggle-bar__top`}),u("div",{class:`${o}-layout-toggle-bar__bottom`}))}}),Y={position:$,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},A=s({name:"LayoutSider",props:Object.assign(Object.assign({},a.props),Y),setup(o){const e=f(O),r=i(null),t=i(null),l=b((()=>z(p.value?o.collapsedWidth:o.width))),n=b((()=>"transform"!==o.collapseMode?{}:{minWidth:z(o.width)})),s=b((()=>e?e.siderPlacement:"left")),u=i(o.defaultCollapsed),p=T(m(o,"collapsed"),u);let h=0,v=0;x((()=>{if(o.nativeScrollbar){const o=r.value;o&&(o.scrollTop=v,o.scrollLeft=h)}})),d(k,{collapsedRef:p,collapseModeRef:m(o,"collapseMode")});const{mergedClsPrefixRef:y,inlineThemeDisabled:C}=c(o),S=a("Layout","-layout-sider",_,w,o,y),$={scrollTo:function(e,l){if(o.nativeScrollbar){const{value:o}=r;o&&(void 0===l?o.scrollTo(e):o.scrollTo(e,l))}else{const{value:o}=t;o&&o.scrollTo(e,l)}}},I=b((()=>{const{common:{cubicBezierEaseInOut:e},self:r}=S.value,{siderToggleButtonColor:t,siderToggleButtonBorder:l,siderToggleBarColor:n,siderToggleBarColorHover:s}=r,a={"--n-bezier":e,"--n-toggle-button-color":t,"--n-toggle-button-border":l,"--n-toggle-bar-color":n,"--n-toggle-bar-color-hover":s};return o.inverted?(a["--n-color"]=r.siderColorInverted,a["--n-text-color"]=r.textColorInverted,a["--n-border-color"]=r.siderBorderColorInverted,a["--n-toggle-button-icon-color"]=r.siderToggleButtonIconColorInverted,a.__invertScrollbar=r.__invertScrollbar):(a["--n-color"]=r.siderColor,a["--n-text-color"]=r.textColor,a["--n-border-color"]=r.siderBorderColor,a["--n-toggle-button-icon-color"]=r.siderToggleButtonIconColor),a})),j=C?g("layout-sider",b((()=>o.inverted?"a":"b")),I,o):void 0;return Object.assign({scrollableElRef:r,scrollbarInstRef:t,mergedClsPrefix:y,mergedTheme:S,styleMaxWidth:l,mergedCollapsed:p,scrollContainerStyle:n,siderPlacement:s,handleNativeElScroll:e=>{var r;const t=e.target;h=t.scrollLeft,v=t.scrollTop,null===(r=o.onScroll)||void 0===r||r.call(o,e)},handleTransitionend:function(e){var r,t;"max-width"===e.propertyName&&(p.value?null===(r=o.onAfterLeave)||void 0===r||r.call(o):null===(t=o.onAfterEnter)||void 0===t||t.call(o))},handleTriggerClick:function(){const{"onUpdate:collapsed":e,onUpdateCollapsed:r,onExpand:t,onCollapse:l}=o,{value:n}=p;r&&B(r,!n),e&&B(e,!n),u.value=!n,n?t&&B(t):l&&B(l)},inlineThemeDisabled:C,cssVars:I,themeClass:null==j?void 0:j.themeClass,onRender:null==j?void 0:j.onRender},$)},render(){var o;const{mergedClsPrefix:e,mergedCollapsed:r,showTrigger:t}=this;return null===(o=this.onRender)||void 0===o||o.call(this),u("aside",{class:[`${e}-layout-sider`,this.themeClass,`${e}-layout-sider--${this.position}-positioned`,`${e}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${e}-layout-sider--bordered`,r&&`${e}-layout-sider--collapsed`,(!r||this.showCollapsedContent)&&`${e}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:z(this.width)}]},this.nativeScrollbar?u("div",{class:[`${e}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):u(S,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&"true"===this.cssVars.__invertScrollbar?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),t?u("bar"===t?L:F,{clsPrefix:e,class:r?this.collapsedTriggerClass:this.triggerClass,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?u("div",{class:`${e}-layout-sider__border`}):null)}});export{R as _,A as a,E as b,w as c,k as l,$ as p};