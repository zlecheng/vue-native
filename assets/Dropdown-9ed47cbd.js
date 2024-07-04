import{C as e,V as o,F as n,G as t,H as r,B as i,k as d,_ as l,D as a}from"./Tooltip-ecaccc73.js";import{g as s,P as p,aW as u,bk as c,bl as f,Q as v,bm as h,c as m,a as b,b as x,d as w,h as g,e as y,i as S,f as k,p as C,u as P,T as N,aH as I,r as R,aF as z,F as A,l as F,k as O,o as H,m as T,n as $,v as B,s as j,t as L,aA as M,x as W}from"./index-6f90f808.js";import{o as _,g as D,p as K,m as E,h as q,X as U,u as G,c as V}from"./Scrollbar-ea102d1b.js";import{N as Q}from"./Icon-db7c9d84.js";import{C as X,h as J,c as Y}from"./create-3e92c402.js";function Z(e){return o=>{e.value=o?o.$el:null}}const ee={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"},oe=m({name:"Dropdown",common:b,peers:{Popover:e},self:e=>{const{primaryColor:o,textColor2:n,dividerColor:t,hoverColor:r,popoverColor:i,invertedColor:d,borderRadius:l,fontSizeSmall:a,fontSizeMedium:s,fontSizeLarge:p,fontSizeHuge:u,heightSmall:c,heightMedium:f,heightLarge:v,heightHuge:h,textColor3:m,opacityDisabled:b}=e;return Object.assign(Object.assign({},ee),{optionHeightSmall:c,optionHeightMedium:f,optionHeightLarge:v,optionHeightHuge:h,borderRadius:l,fontSizeSmall:a,fontSizeMedium:s,fontSizeLarge:p,fontSizeHuge:u,optionTextColor:n,optionTextColorHover:n,optionTextColorActive:o,optionTextColorChildActive:o,color:i,dividerColor:t,suffixColor:n,prefixColor:n,optionColorHover:r,optionColorActive:x(o,{alpha:.1}),groupHeaderTextColor:m,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:d,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:o,optionColorActiveInverted:o,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:b})}}),ne=w({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return g("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),te=y("n-dropdown-menu"),re=y("n-dropdown"),ie=y("n-dropdown-option");function de(e,o){return"submenu"===e.type||void 0===e.type&&void 0!==e[o]}function le(e){return"divider"===e.type}const ae=w({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=S(re),{hoverKeyRef:n,keyboardKeyRef:t,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:i,activeKeyPathRef:d,animatedRef:l,mergedShowRef:a,renderLabelRef:u,renderIconRef:c,labelFieldRef:f,childrenFieldRef:v,renderOptionRef:h,nodePropsRef:m,menuPropsRef:b}=o,x=S(ie,null),w=S(te),g=S(K),y=k((()=>e.tmNode.rawNode)),N=k((()=>{const{value:o}=v;return de(e.tmNode.rawNode,o)})),I=k((()=>{const{disabled:o}=e.tmNode;return o})),R=function(e,o,n){const t=s(e.value);let r=null;return p(e,(e=>{null!==r&&window.clearTimeout(r),!0===e?n&&!n.value?t.value=!0:r=window.setTimeout((()=>{t.value=!0}),300):t.value=!1})),t}(k((()=>{if(!N.value)return!1;const{key:o,disabled:d}=e.tmNode;if(d)return!1;const{value:l}=n,{value:a}=t,{value:s}=r,{value:p}=i;return null!==l?p.includes(o):null!==a?p.includes(o)&&p[p.length-1]!==o:null!==s&&p.includes(o)})),0,k((()=>null===t.value&&!l.value))),z=k((()=>!!(null==x?void 0:x.enteringSubmenuRef.value))),A=s(!1);function F(){const{parentKey:o,tmNode:i}=e;i.disabled||a.value&&(r.value=o,t.value=null,n.value=i.key)}return C(ie,{enteringSubmenuRef:A}),{labelField:f,renderLabel:u,renderIcon:c,siblingHasIcon:w.showIconRef,siblingHasSubmenu:w.hasSubmenuRef,menuProps:b,popoverBody:g,animated:l,mergedShowSubmenu:k((()=>R.value&&!z.value)),rawNode:y,hasSubmenu:N,pending:P((()=>{const{value:o}=i,{key:n}=e.tmNode;return o.includes(n)})),childActive:P((()=>{const{value:o}=d,{key:n}=e.tmNode,t=o.findIndex((e=>n===e));return-1!==t&&t<o.length-1})),active:P((()=>{const{value:o}=d,{key:n}=e.tmNode,t=o.findIndex((e=>n===e));return-1!==t&&t===o.length-1})),mergedDisabled:I,renderOption:h,nodeProps:m,handleClick:function(){const{value:n}=N,{tmNode:t}=e;a.value&&(n||t.disabled||(o.doSelect(t.key,t.rawNode),o.doUpdateShow(!1)))},handleMouseMove:function(){const{tmNode:o}=e;o.disabled||a.value&&n.value!==o.key&&F()},handleMouseEnter:F,handleMouseLeave:function(o){if(e.tmNode.disabled)return;if(!a.value)return;const{relatedTarget:t}=o;!t||J({target:t},"dropdownOption")||J({target:t},"scrollbarRail")||(n.value=null)},handleSubmenuBeforeEnter:function(){A.value=!0},handleSubmenuAfterEnter:function(){A.value=!1}}},render(){var e,r;const{animated:i,rawNode:d,mergedShowSubmenu:l,clsPrefix:a,siblingHasIcon:s,siblingHasSubmenu:p,renderLabel:u,renderIcon:c,renderOption:f,nodeProps:v,props:h,scrollable:m}=this;let b=null;if(l){const o=null===(e=this.menuProps)||void 0===e?void 0:e.call(this,d,d.children);b=g(ce,Object.assign({},o,{clsPrefix:a,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const x={class:[`${a}-dropdown-option-body`,this.pending&&`${a}-dropdown-option-body--pending`,this.active&&`${a}-dropdown-option-body--active`,this.childActive&&`${a}-dropdown-option-body--child-active`,this.mergedDisabled&&`${a}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},w=null==v?void 0:v(d),y=g("div",Object.assign({class:[`${a}-dropdown-option`,null==w?void 0:w.class],"data-dropdown-option":!0},w),g("div",I(x,h),[g("div",{class:[`${a}-dropdown-option-body__prefix`,s&&`${a}-dropdown-option-body__prefix--show-icon`]},[c?c(d):R(d.icon)]),g("div",{"data-dropdown-option":!0,class:`${a}-dropdown-option-body__label`},u?u(d):R(null!==(r=d[this.labelField])&&void 0!==r?r:d.title)),g("div",{"data-dropdown-option":!0,class:[`${a}-dropdown-option-body__suffix`,p&&`${a}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?g(Q,null,{default:()=>g(X,null)}):null)]),this.hasSubmenu?g(o,null,{default:()=>[g(n,null,{default:()=>g("div",{class:`${a}-dropdown-offset-container`},g(t,{show:this.mergedShowSubmenu,placement:this.placement,to:m&&this.popoverBody||void 0,teleportDisabled:!m},{default:()=>g("div",{class:`${a}-dropdown-menu-wrapper`},i?g(N,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>b}):b)}))})]}):null);return f?f({node:y,option:d}):y}}),se=w({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=S(te),{renderLabelRef:n,labelFieldRef:t,nodePropsRef:r,renderOptionRef:i}=S(re);return{labelField:t,showIcon:e,hasSubmenu:o,renderLabel:n,nodeProps:r,renderOption:i}},render(){var e;const{clsPrefix:o,hasSubmenu:n,showIcon:t,nodeProps:r,renderLabel:i,renderOption:d}=this,{rawNode:l}=this.tmNode,a=g("div",Object.assign({class:`${o}-dropdown-option`},null==r?void 0:r(l)),g("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},g("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,t&&`${o}-dropdown-option-body__prefix--show-icon`]},R(l.icon)),g("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(l):R(null!==(e=l.title)&&void 0!==e?e:l[this.labelField])),g("div",{class:[`${o}-dropdown-option-body__suffix`,n&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return d?d({node:a,option:l}):a}}),pe=w({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:n}=this,{children:t}=e;return g(A,null,g(se,{clsPrefix:n,tmNode:e,key:e.key}),null==t?void 0:t.map((e=>{const{rawNode:t}=e;return!1===t.show?null:le(t)?g(ne,{clsPrefix:n,key:e.key}):e.isGroup?(z("dropdown","`group` node is not allowed to be put in `group` node."),null):g(ae,{clsPrefix:n,tmNode:e,parentKey:o,key:e.key})})))}}),ue=w({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return g("div",o,[null==e?void 0:e()])}}),ce=w({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:n}=S(re);C(te,{showIconRef:k((()=>{const n=o.value;return e.tmNodes.some((e=>{var o;if(e.isGroup)return null===(o=e.children)||void 0===o?void 0:o.some((({rawNode:e})=>n?n(e):e.icon));const{rawNode:t}=e;return n?n(t):t.icon}))})),hasSubmenuRef:k((()=>{const{value:o}=n;return e.tmNodes.some((e=>{var n;if(e.isGroup)return null===(n=e.children)||void 0===n?void 0:n.some((({rawNode:e})=>de(e,o)));const{rawNode:t}=e;return de(t,o)}))}))});const t=s(null);return C(E,null),C(q,null),C(K,t),{bodyRef:t}},render(){const{parentKey:e,clsPrefix:o,scrollable:n}=this,t=this.tmNodes.map((t=>{const{rawNode:r}=t;return!1===r.show?null:"render"===r.type?g(ue,{tmNode:t,key:t.key}):le(r)?g(ne,{clsPrefix:o,key:t.key}):function(e){return"group"===e.type}(r)?g(pe,{clsPrefix:o,tmNode:t,parentKey:e,key:t.key}):g(ae,{clsPrefix:o,tmNode:t,parentKey:e,key:t.key,props:r.props,scrollable:n})}));return g("div",{class:[`${o}-dropdown-menu`,n&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},n?g(U,{contentClass:`${o}-dropdown-menu__content`},{default:()=>t}):t,this.showArrow?r({clsPrefix:o,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),fe=F("dropdown-menu","\n transform-origin: var(--v-transform-origin);\n background-color: var(--n-color);\n border-radius: var(--n-border-radius);\n box-shadow: var(--n-box-shadow);\n position: relative;\n transition:\n background-color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n",[i(),F("dropdown-option","\n position: relative;\n ",[O("a","\n text-decoration: none;\n color: inherit;\n outline: none;\n ",[O("&::before",'\n content: "";\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n ')]),F("dropdown-option-body","\n display: flex;\n cursor: pointer;\n position: relative;\n height: var(--n-option-height);\n line-height: var(--n-option-height);\n font-size: var(--n-font-size);\n color: var(--n-option-text-color);\n transition: color .3s var(--n-bezier);\n ",[O("&::before",'\n content: "";\n position: absolute;\n top: 0;\n bottom: 0;\n left: 4px;\n right: 4px;\n transition: background-color .3s var(--n-bezier);\n border-radius: var(--n-border-radius);\n '),H("disabled",[T("pending","\n color: var(--n-option-text-color-hover);\n ",[$("prefix, suffix","\n color: var(--n-option-text-color-hover);\n "),O("&::before","background-color: var(--n-option-color-hover);")]),T("active","\n color: var(--n-option-text-color-active);\n ",[$("prefix, suffix","\n color: var(--n-option-text-color-active);\n "),O("&::before","background-color: var(--n-option-color-active);")]),T("child-active","\n color: var(--n-option-text-color-child-active);\n ",[$("prefix, suffix","\n color: var(--n-option-text-color-child-active);\n ")])]),T("disabled","\n cursor: not-allowed;\n opacity: var(--n-option-opacity-disabled);\n "),T("group","\n font-size: calc(var(--n-font-size) - 1px);\n color: var(--n-group-header-text-color);\n ",[$("prefix","\n width: calc(var(--n-option-prefix-width) / 2);\n ",[T("show-icon","\n width: calc(var(--n-option-icon-prefix-width) / 2);\n ")])]),$("prefix","\n width: var(--n-option-prefix-width);\n display: flex;\n justify-content: center;\n align-items: center;\n color: var(--n-prefix-color);\n transition: color .3s var(--n-bezier);\n z-index: 1;\n ",[T("show-icon","\n width: var(--n-option-icon-prefix-width);\n "),F("icon","\n font-size: var(--n-option-icon-size);\n ")]),$("label","\n white-space: nowrap;\n flex: 1;\n z-index: 1;\n "),$("suffix","\n box-sizing: border-box;\n flex-grow: 0;\n flex-shrink: 0;\n display: flex;\n justify-content: flex-end;\n align-items: center;\n min-width: var(--n-option-suffix-width);\n padding: 0 8px;\n transition: color .3s var(--n-bezier);\n color: var(--n-suffix-color);\n z-index: 1;\n ",[T("has-submenu","\n width: var(--n-option-icon-suffix-width);\n "),F("icon","\n font-size: var(--n-option-icon-size);\n ")]),F("dropdown-menu","pointer-events: all;")]),F("dropdown-offset-container","\n pointer-events: none;\n position: absolute;\n left: 0;\n right: 0;\n top: -4px;\n bottom: -4px;\n ")]),F("dropdown-divider","\n transition: background-color .3s var(--n-bezier);\n background-color: var(--n-divider-color);\n height: 1px;\n margin: 4px 0;\n "),F("dropdown-menu-wrapper","\n transform-origin: var(--v-transform-origin);\n width: fit-content;\n "),O(">",[F("scrollbar","\n height: inherit;\n max-height: inherit;\n ")]),H("scrollable","\n padding: var(--n-padding);\n "),T("scrollable",[$("content","\n padding: var(--n-padding);\n ")])]),ve={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},he=Object.keys(a),me=w({name:"Dropdown",inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign({},a),ve),L.props),setup(e){const o=s(!1),n=G(B(e,"show"),o),t=k((()=>{const{keyField:o,childrenField:n}=e;return Y(e.options,{getKey:e=>e[o],getDisabled:e=>!0===e.disabled,getIgnored:e=>"divider"===e.type||"render"===e.type,getChildren:e=>e[n]})})),r=k((()=>t.value.treeNodes)),i=s(null),d=s(null),l=s(null),a=k((()=>{var e,o,n;return null!==(n=null!==(o=null!==(e=i.value)&&void 0!==e?e:d.value)&&void 0!==o?o:l.value)&&void 0!==n?n:null})),m=k((()=>t.value.getPath(a.value).keyPath)),b=k((()=>t.value.getPath(e.value).keyPath));!function(e={},o){const n=u({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:t,keyup:r}=e,i=e=>{switch(e.key){case"Control":n.ctrl=!0;break;case"Meta":n.command=!0,n.win=!0;break;case"Shift":n.shift=!0;break;case"Tab":n.tab=!0}void 0!==t&&Object.keys(t).forEach((o=>{if(o!==e.key)return;const n=t[o];if("function"==typeof n)n(e);else{const{stop:o=!1,prevent:t=!1}=n;o&&e.stopPropagation(),t&&e.preventDefault(),n.handler(e)}}))},d=e=>{switch(e.key){case"Control":n.ctrl=!1;break;case"Meta":n.command=!1,n.win=!1;break;case"Shift":n.shift=!1;break;case"Tab":n.tab=!1}void 0!==r&&Object.keys(r).forEach((o=>{if(o!==e.key)return;const n=r[o];if("function"==typeof n)n(e);else{const{stop:o=!1,prevent:t=!1}=n;o&&e.stopPropagation(),t&&e.preventDefault(),n.handler(e)}}))},l=()=>{(void 0===o||o.value)&&(D("keydown",document,i),D("keyup",document,d)),void 0!==o&&p(o,(e=>{e?(D("keydown",document,i),D("keyup",document,d)):(_("keydown",document,i),_("keyup",document,d))}))};c()?(f(l),v((()=>{(void 0===o||o.value)&&(_("keydown",document,i),_("keyup",document,d))}))):l(),h(n)}({keydown:{ArrowUp:{prevent:!0,handler:function(){R("up")}},ArrowRight:{prevent:!0,handler:function(){R("right")}},ArrowDown:{prevent:!0,handler:function(){R("down")}},ArrowLeft:{prevent:!0,handler:function(){R("left")}},Enter:{prevent:!0,handler:function(){const e=I();(null==e?void 0:e.isLeaf)&&n.value&&(y(e.key,e.rawNode),S(!1))}},Escape:function(){S(!1)}}},P((()=>e.keyboard&&n.value)));const{mergedClsPrefixRef:x,inlineThemeDisabled:w}=j(e),g=L("Dropdown","-dropdown",fe,oe,e,x);function y(o,n){const{onSelect:t}=e;t&&V(t,o,n)}function S(n){const{"onUpdate:show":t,onUpdateShow:r}=e;t&&V(t,n),r&&V(r,n),o.value=n}function N(){i.value=null,d.value=null,l.value=null}function I(){var e;const{value:o}=t,{value:n}=a;return o&&null!==n&&null!==(e=o.getNode(n))&&void 0!==e?e:null}function R(e){const{value:o}=a,{value:{getFirstAvailableNode:n}}=t;let r=null;if(null===o){const e=n();null!==e&&(r=e.key)}else{const o=I();if(o){let n;switch(e){case"down":n=o.getNext();break;case"up":n=o.getPrev();break;case"right":n=o.getChild();break;case"left":n=o.getParent()}n&&(r=n.key)}}null!==r&&(i.value=null,d.value=r)}C(re,{labelFieldRef:B(e,"labelField"),childrenFieldRef:B(e,"childrenField"),renderLabelRef:B(e,"renderLabel"),renderIconRef:B(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:d,lastToggledSubmenuKeyRef:l,pendingKeyPathRef:m,activeKeyPathRef:b,animatedRef:B(e,"animated"),mergedShowRef:n,nodePropsRef:B(e,"nodeProps"),renderOptionRef:B(e,"renderOption"),menuPropsRef:B(e,"menuProps"),doSelect:y,doUpdateShow:S}),p(n,(o=>{e.animated||o||N()}));const z=k((()=>{const{size:o,inverted:n}=e,{common:{cubicBezierEaseInOut:t},self:r}=g.value,{padding:i,dividerColor:d,borderRadius:l,optionOpacityDisabled:a,[M("optionIconSuffixWidth",o)]:s,[M("optionSuffixWidth",o)]:p,[M("optionIconPrefixWidth",o)]:u,[M("optionPrefixWidth",o)]:c,[M("fontSize",o)]:f,[M("optionHeight",o)]:v,[M("optionIconSize",o)]:h}=r,m={"--n-bezier":t,"--n-font-size":f,"--n-padding":i,"--n-border-radius":l,"--n-option-height":v,"--n-option-prefix-width":c,"--n-option-icon-prefix-width":u,"--n-option-suffix-width":p,"--n-option-icon-suffix-width":s,"--n-option-icon-size":h,"--n-divider-color":d,"--n-option-opacity-disabled":a};return n?(m["--n-color"]=r.colorInverted,m["--n-option-color-hover"]=r.optionColorHoverInverted,m["--n-option-color-active"]=r.optionColorActiveInverted,m["--n-option-text-color"]=r.optionTextColorInverted,m["--n-option-text-color-hover"]=r.optionTextColorHoverInverted,m["--n-option-text-color-active"]=r.optionTextColorActiveInverted,m["--n-option-text-color-child-active"]=r.optionTextColorChildActiveInverted,m["--n-prefix-color"]=r.prefixColorInverted,m["--n-suffix-color"]=r.suffixColorInverted,m["--n-group-header-text-color"]=r.groupHeaderTextColorInverted):(m["--n-color"]=r.color,m["--n-option-color-hover"]=r.optionColorHover,m["--n-option-color-active"]=r.optionColorActive,m["--n-option-text-color"]=r.optionTextColor,m["--n-option-text-color-hover"]=r.optionTextColorHover,m["--n-option-text-color-active"]=r.optionTextColorActive,m["--n-option-text-color-child-active"]=r.optionTextColorChildActive,m["--n-prefix-color"]=r.prefixColor,m["--n-suffix-color"]=r.suffixColor,m["--n-group-header-text-color"]=r.groupHeaderTextColor),m})),A=w?W("dropdown",k((()=>`${e.size[0]}${e.inverted?"i":""}`)),z,e):void 0;return{mergedClsPrefix:x,mergedTheme:g,tmNodes:r,mergedShow:n,handleAfterLeave:()=>{e.animated&&N()},doUpdateShow:S,cssVars:w?void 0:z,themeClass:null==A?void 0:A.themeClass,onRender:null==A?void 0:A.onRender}},render(){const{mergedTheme:e}=this,o={show:this.mergedShow,theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:(e,o,n,t,r)=>{var i;const{mergedClsPrefix:d,menuProps:l}=this;null===(i=this.onRender)||void 0===i||i.call(this);const a=(null==l?void 0:l(void 0,this.tmNodes.map((e=>e.rawNode))))||{},s={ref:Z(o),class:[e,`${d}-dropdown`,this.themeClass],clsPrefix:d,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:t,onMouseleave:r};return g(ce,I(this.$attrs,s,a))},onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return g(l,Object.assign({},d(this.$props,he),o),{trigger:()=>{var e,o;return null===(o=(e=this.$slots).default)||void 0===o?void 0:o.call(e)}})}});export{me as N,Z as c,oe as d};
