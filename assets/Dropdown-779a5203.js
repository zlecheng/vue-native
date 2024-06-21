import{K as e,C as o,V as n,R as t,T as r,D as i,B as d,U as l,Q as a,k as s,M as p,O as u}from"./Tooltip-c74667b9.js";import{g as c,P as f,aY as v,bh as h,X as b,Q as m,bi as x,c as w,a as g,b as y,d as S,h as k,e as C,i as P,f as N,p as R,u as I,T as z,aH as A,r as O,aM as F,F as T,l as H,k as $,o as B,m as M,n as L,v as j,s as D,t as K,aD as W,x as _}from"./index-5d1466b3.js";import{N as E,C as U,h as q,c as G}from"./Icon-c3277175.js";import{o as V,d as Q,X,u as Y,c as J}from"./Scrollbar-6e58624e.js";function Z(e){return o=>{e.value=o?o.$el:null}}const ee={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"},oe=w({name:"Dropdown",common:g,peers:{Popover:e},self:e=>{const{primaryColor:o,textColor2:n,dividerColor:t,hoverColor:r,popoverColor:i,invertedColor:d,borderRadius:l,fontSizeSmall:a,fontSizeMedium:s,fontSizeLarge:p,fontSizeHuge:u,heightSmall:c,heightMedium:f,heightLarge:v,heightHuge:h,textColor3:b,opacityDisabled:m}=e;return Object.assign(Object.assign({},ee),{optionHeightSmall:c,optionHeightMedium:f,optionHeightLarge:v,optionHeightHuge:h,borderRadius:l,fontSizeSmall:a,fontSizeMedium:s,fontSizeLarge:p,fontSizeHuge:u,optionTextColor:n,optionTextColorHover:n,optionTextColorActive:o,optionTextColorChildActive:o,color:i,dividerColor:t,suffixColor:n,prefixColor:n,optionColorHover:r,optionColorActive:y(o,{alpha:.1}),groupHeaderTextColor:b,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:d,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:o,optionColorActiveInverted:o,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:m})}}),ne=S({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return k("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),te=C("n-dropdown-menu"),re=C("n-dropdown"),ie=C("n-dropdown-option");function de(e,o){return"submenu"===e.type||void 0===e.type&&void 0!==e[o]}function le(e){return"divider"===e.type}const ae=S({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const n=P(re),{hoverKeyRef:t,keyboardKeyRef:r,lastToggledSubmenuKeyRef:i,pendingKeyPathRef:d,activeKeyPathRef:l,animatedRef:a,mergedShowRef:s,renderLabelRef:p,renderIconRef:u,labelFieldRef:v,childrenFieldRef:h,renderOptionRef:b,nodePropsRef:m,menuPropsRef:x}=n,w=P(ie,null),g=P(te),y=P(o),S=N((()=>e.tmNode.rawNode)),k=N((()=>{const{value:o}=h;return de(e.tmNode.rawNode,o)})),C=N((()=>{const{disabled:o}=e.tmNode;return o})),z=function(e,o,n){const t=c(e.value);let r=null;return f(e,(e=>{null!==r&&window.clearTimeout(r),!0===e?n&&!n.value?t.value=!0:r=window.setTimeout((()=>{t.value=!0}),300):t.value=!1})),t}(N((()=>{if(!k.value)return!1;const{key:o,disabled:n}=e.tmNode;if(n)return!1;const{value:l}=t,{value:a}=r,{value:s}=i,{value:p}=d;return null!==l?p.includes(o):null!==a?p.includes(o)&&p[p.length-1]!==o:null!==s&&p.includes(o)})),0,N((()=>null===r.value&&!a.value))),A=N((()=>!!(null==w?void 0:w.enteringSubmenuRef.value))),O=c(!1);function F(){const{parentKey:o,tmNode:n}=e;n.disabled||s.value&&(i.value=o,r.value=null,t.value=n.key)}return R(ie,{enteringSubmenuRef:O}),{labelField:v,renderLabel:p,renderIcon:u,siblingHasIcon:g.showIconRef,siblingHasSubmenu:g.hasSubmenuRef,menuProps:x,popoverBody:y,animated:a,mergedShowSubmenu:N((()=>z.value&&!A.value)),rawNode:S,hasSubmenu:k,pending:I((()=>{const{value:o}=d,{key:n}=e.tmNode;return o.includes(n)})),childActive:I((()=>{const{value:o}=l,{key:n}=e.tmNode,t=o.findIndex((e=>n===e));return-1!==t&&t<o.length-1})),active:I((()=>{const{value:o}=l,{key:n}=e.tmNode,t=o.findIndex((e=>n===e));return-1!==t&&t===o.length-1})),mergedDisabled:C,renderOption:b,nodeProps:m,handleClick:function(){const{value:o}=k,{tmNode:t}=e;s.value&&(o||t.disabled||(n.doSelect(t.key,t.rawNode),n.doUpdateShow(!1)))},handleMouseMove:function(){const{tmNode:o}=e;o.disabled||s.value&&t.value!==o.key&&F()},handleMouseEnter:F,handleMouseLeave:function(o){if(e.tmNode.disabled)return;if(!s.value)return;const{relatedTarget:n}=o;!n||q({target:n},"dropdownOption")||q({target:n},"scrollbarRail")||(t.value=null)},handleSubmenuBeforeEnter:function(){O.value=!0},handleSubmenuAfterEnter:function(){O.value=!1}}},render(){var e,o;const{animated:i,rawNode:d,mergedShowSubmenu:l,clsPrefix:a,siblingHasIcon:s,siblingHasSubmenu:p,renderLabel:u,renderIcon:c,renderOption:f,nodeProps:v,props:h,scrollable:b}=this;let m=null;if(l){const o=null===(e=this.menuProps)||void 0===e?void 0:e.call(this,d,d.children);m=k(ce,Object.assign({},o,{clsPrefix:a,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const x={class:[`${a}-dropdown-option-body`,this.pending&&`${a}-dropdown-option-body--pending`,this.active&&`${a}-dropdown-option-body--active`,this.childActive&&`${a}-dropdown-option-body--child-active`,this.mergedDisabled&&`${a}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},w=null==v?void 0:v(d),g=k("div",Object.assign({class:[`${a}-dropdown-option`,null==w?void 0:w.class],"data-dropdown-option":!0},w),k("div",A(x,h),[k("div",{class:[`${a}-dropdown-option-body__prefix`,s&&`${a}-dropdown-option-body__prefix--show-icon`]},[c?c(d):O(d.icon)]),k("div",{"data-dropdown-option":!0,class:`${a}-dropdown-option-body__label`},u?u(d):O(null!==(o=d[this.labelField])&&void 0!==o?o:d.title)),k("div",{"data-dropdown-option":!0,class:[`${a}-dropdown-option-body__suffix`,p&&`${a}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?k(E,null,{default:()=>k(U,null)}):null)]),this.hasSubmenu?k(n,null,{default:()=>[k(t,null,{default:()=>k("div",{class:`${a}-dropdown-offset-container`},k(r,{show:this.mergedShowSubmenu,placement:this.placement,to:b&&this.popoverBody||void 0,teleportDisabled:!b},{default:()=>k("div",{class:`${a}-dropdown-menu-wrapper`},i?k(z,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>m}):m)}))})]}):null);return f?f({node:g,option:d}):g}}),se=S({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=P(te),{renderLabelRef:n,labelFieldRef:t,nodePropsRef:r,renderOptionRef:i}=P(re);return{labelField:t,showIcon:e,hasSubmenu:o,renderLabel:n,nodeProps:r,renderOption:i}},render(){var e;const{clsPrefix:o,hasSubmenu:n,showIcon:t,nodeProps:r,renderLabel:i,renderOption:d}=this,{rawNode:l}=this.tmNode,a=k("div",Object.assign({class:`${o}-dropdown-option`},null==r?void 0:r(l)),k("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},k("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,t&&`${o}-dropdown-option-body__prefix--show-icon`]},O(l.icon)),k("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(l):O(null!==(e=l.title)&&void 0!==e?e:l[this.labelField])),k("div",{class:[`${o}-dropdown-option-body__suffix`,n&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return d?d({node:a,option:l}):a}}),pe=S({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:n}=this,{children:t}=e;return k(T,null,k(se,{clsPrefix:n,tmNode:e,key:e.key}),null==t?void 0:t.map((e=>{const{rawNode:t}=e;return!1===t.show?null:le(t)?k(ne,{clsPrefix:n,key:e.key}):e.isGroup?(F("dropdown","`group` node is not allowed to be put in `group` node."),null):k(ae,{clsPrefix:n,tmNode:e,parentKey:o,key:e.key})})))}}),ue=S({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return k("div",o,[null==e?void 0:e()])}}),ce=S({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:t}=P(re);R(te,{showIconRef:N((()=>{const o=n.value;return e.tmNodes.some((e=>{var n;if(e.isGroup)return null===(n=e.children)||void 0===n?void 0:n.some((({rawNode:e})=>o?o(e):e.icon));const{rawNode:t}=e;return o?o(t):t.icon}))})),hasSubmenuRef:N((()=>{const{value:o}=t;return e.tmNodes.some((e=>{var n;if(e.isGroup)return null===(n=e.children)||void 0===n?void 0:n.some((({rawNode:e})=>de(e,o)));const{rawNode:t}=e;return de(t,o)}))}))});const r=c(null);return R(i,null),R(d,null),R(o,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:o,scrollable:n}=this,t=this.tmNodes.map((t=>{const{rawNode:r}=t;return!1===r.show?null:"render"===r.type?k(ue,{tmNode:t,key:t.key}):le(r)?k(ne,{clsPrefix:o,key:t.key}):function(e){return"group"===e.type}(r)?k(pe,{clsPrefix:o,tmNode:t,parentKey:e,key:t.key}):k(ae,{clsPrefix:o,tmNode:t,parentKey:e,key:t.key,props:r.props,scrollable:n})}));return k("div",{class:[`${o}-dropdown-menu`,n&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},n?k(X,{contentClass:`${o}-dropdown-menu__content`},{default:()=>t}):t,this.showArrow?l({clsPrefix:o,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),fe=H("dropdown-menu","\n transform-origin: var(--v-transform-origin);\n background-color: var(--n-color);\n border-radius: var(--n-border-radius);\n box-shadow: var(--n-box-shadow);\n position: relative;\n transition:\n background-color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n",[a(),H("dropdown-option","\n position: relative;\n ",[$("a","\n text-decoration: none;\n color: inherit;\n outline: none;\n ",[$("&::before",'\n content: "";\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n ')]),H("dropdown-option-body","\n display: flex;\n cursor: pointer;\n position: relative;\n height: var(--n-option-height);\n line-height: var(--n-option-height);\n font-size: var(--n-font-size);\n color: var(--n-option-text-color);\n transition: color .3s var(--n-bezier);\n ",[$("&::before",'\n content: "";\n position: absolute;\n top: 0;\n bottom: 0;\n left: 4px;\n right: 4px;\n transition: background-color .3s var(--n-bezier);\n border-radius: var(--n-border-radius);\n '),B("disabled",[M("pending","\n color: var(--n-option-text-color-hover);\n ",[L("prefix, suffix","\n color: var(--n-option-text-color-hover);\n "),$("&::before","background-color: var(--n-option-color-hover);")]),M("active","\n color: var(--n-option-text-color-active);\n ",[L("prefix, suffix","\n color: var(--n-option-text-color-active);\n "),$("&::before","background-color: var(--n-option-color-active);")]),M("child-active","\n color: var(--n-option-text-color-child-active);\n ",[L("prefix, suffix","\n color: var(--n-option-text-color-child-active);\n ")])]),M("disabled","\n cursor: not-allowed;\n opacity: var(--n-option-opacity-disabled);\n "),M("group","\n font-size: calc(var(--n-font-size) - 1px);\n color: var(--n-group-header-text-color);\n ",[L("prefix","\n width: calc(var(--n-option-prefix-width) / 2);\n ",[M("show-icon","\n width: calc(var(--n-option-icon-prefix-width) / 2);\n ")])]),L("prefix","\n width: var(--n-option-prefix-width);\n display: flex;\n justify-content: center;\n align-items: center;\n color: var(--n-prefix-color);\n transition: color .3s var(--n-bezier);\n z-index: 1;\n ",[M("show-icon","\n width: var(--n-option-icon-prefix-width);\n "),H("icon","\n font-size: var(--n-option-icon-size);\n ")]),L("label","\n white-space: nowrap;\n flex: 1;\n z-index: 1;\n "),L("suffix","\n box-sizing: border-box;\n flex-grow: 0;\n flex-shrink: 0;\n display: flex;\n justify-content: flex-end;\n align-items: center;\n min-width: var(--n-option-suffix-width);\n padding: 0 8px;\n transition: color .3s var(--n-bezier);\n color: var(--n-suffix-color);\n z-index: 1;\n ",[M("has-submenu","\n width: var(--n-option-icon-suffix-width);\n "),H("icon","\n font-size: var(--n-option-icon-size);\n ")]),H("dropdown-menu","pointer-events: all;")]),H("dropdown-offset-container","\n pointer-events: none;\n position: absolute;\n left: 0;\n right: 0;\n top: -4px;\n bottom: -4px;\n ")]),H("dropdown-divider","\n transition: background-color .3s var(--n-bezier);\n background-color: var(--n-divider-color);\n height: 1px;\n margin: 4px 0;\n "),H("dropdown-menu-wrapper","\n transform-origin: var(--v-transform-origin);\n width: fit-content;\n "),$(">",[H("scrollbar","\n height: inherit;\n max-height: inherit;\n ")]),B("scrollable","\n padding: var(--n-padding);\n "),M("scrollable",[L("content","\n padding: var(--n-padding);\n ")])]),ve={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},he=Object.keys(u),be=S({name:"Dropdown",inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign({},u),ve),K.props),setup(e){const o=c(!1),n=Y(j(e,"show"),o),t=N((()=>{const{keyField:o,childrenField:n}=e;return G(e.options,{getKey:e=>e[o],getDisabled:e=>!0===e.disabled,getIgnored:e=>"divider"===e.type||"render"===e.type,getChildren:e=>e[n]})})),r=N((()=>t.value.treeNodes)),i=c(null),d=c(null),l=c(null),a=N((()=>{var e,o,n;return null!==(n=null!==(o=null!==(e=i.value)&&void 0!==e?e:d.value)&&void 0!==o?o:l.value)&&void 0!==n?n:null})),s=N((()=>t.value.getPath(a.value).keyPath)),p=N((()=>t.value.getPath(e.value).keyPath));!function(e={},o){const n=v({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:t,keyup:r}=e,i=e=>{switch(e.key){case"Control":n.ctrl=!0;break;case"Meta":n.command=!0,n.win=!0;break;case"Shift":n.shift=!0;break;case"Tab":n.tab=!0}void 0!==t&&Object.keys(t).forEach((o=>{if(o!==e.key)return;const n=t[o];if("function"==typeof n)n(e);else{const{stop:o=!1,prevent:t=!1}=n;o&&e.stopPropagation(),t&&e.preventDefault(),n.handler(e)}}))},d=e=>{switch(e.key){case"Control":n.ctrl=!1;break;case"Meta":n.command=!1,n.win=!1;break;case"Shift":n.shift=!1;break;case"Tab":n.tab=!1}void 0!==r&&Object.keys(r).forEach((o=>{if(o!==e.key)return;const n=r[o];if("function"==typeof n)n(e);else{const{stop:o=!1,prevent:t=!1}=n;o&&e.stopPropagation(),t&&e.preventDefault(),n.handler(e)}}))},l=()=>{(void 0===o||o.value)&&(Q("keydown",document,i),Q("keyup",document,d)),void 0!==o&&f(o,(e=>{e?(Q("keydown",document,i),Q("keyup",document,d)):(V("keydown",document,i),V("keyup",document,d))}))};h()?(b(l),m((()=>{(void 0===o||o.value)&&(V("keydown",document,i),V("keyup",document,d))}))):l(),x(n)}({keydown:{ArrowUp:{prevent:!0,handler:function(){P("up")}},ArrowRight:{prevent:!0,handler:function(){P("right")}},ArrowDown:{prevent:!0,handler:function(){P("down")}},ArrowLeft:{prevent:!0,handler:function(){P("left")}},Enter:{prevent:!0,handler:function(){const e=C();(null==e?void 0:e.isLeaf)&&n.value&&(y(e.key,e.rawNode),S(!1))}},Escape:function(){S(!1)}}},I((()=>e.keyboard&&n.value)));const{mergedClsPrefixRef:u,inlineThemeDisabled:w}=D(e),g=K("Dropdown","-dropdown",fe,oe,e,u);function y(o,n){const{onSelect:t}=e;t&&J(t,o,n)}function S(n){const{"onUpdate:show":t,onUpdateShow:r}=e;t&&J(t,n),r&&J(r,n),o.value=n}function k(){i.value=null,d.value=null,l.value=null}function C(){var e;const{value:o}=t,{value:n}=a;return o&&null!==n&&null!==(e=o.getNode(n))&&void 0!==e?e:null}function P(e){const{value:o}=a,{value:{getFirstAvailableNode:n}}=t;let r=null;if(null===o){const e=n();null!==e&&(r=e.key)}else{const o=C();if(o){let n;switch(e){case"down":n=o.getNext();break;case"up":n=o.getPrev();break;case"right":n=o.getChild();break;case"left":n=o.getParent()}n&&(r=n.key)}}null!==r&&(i.value=null,d.value=r)}R(re,{labelFieldRef:j(e,"labelField"),childrenFieldRef:j(e,"childrenField"),renderLabelRef:j(e,"renderLabel"),renderIconRef:j(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:d,lastToggledSubmenuKeyRef:l,pendingKeyPathRef:s,activeKeyPathRef:p,animatedRef:j(e,"animated"),mergedShowRef:n,nodePropsRef:j(e,"nodeProps"),renderOptionRef:j(e,"renderOption"),menuPropsRef:j(e,"menuProps"),doSelect:y,doUpdateShow:S}),f(n,(o=>{e.animated||o||k()}));const z=N((()=>{const{size:o,inverted:n}=e,{common:{cubicBezierEaseInOut:t},self:r}=g.value,{padding:i,dividerColor:d,borderRadius:l,optionOpacityDisabled:a,[W("optionIconSuffixWidth",o)]:s,[W("optionSuffixWidth",o)]:p,[W("optionIconPrefixWidth",o)]:u,[W("optionPrefixWidth",o)]:c,[W("fontSize",o)]:f,[W("optionHeight",o)]:v,[W("optionIconSize",o)]:h}=r,b={"--n-bezier":t,"--n-font-size":f,"--n-padding":i,"--n-border-radius":l,"--n-option-height":v,"--n-option-prefix-width":c,"--n-option-icon-prefix-width":u,"--n-option-suffix-width":p,"--n-option-icon-suffix-width":s,"--n-option-icon-size":h,"--n-divider-color":d,"--n-option-opacity-disabled":a};return n?(b["--n-color"]=r.colorInverted,b["--n-option-color-hover"]=r.optionColorHoverInverted,b["--n-option-color-active"]=r.optionColorActiveInverted,b["--n-option-text-color"]=r.optionTextColorInverted,b["--n-option-text-color-hover"]=r.optionTextColorHoverInverted,b["--n-option-text-color-active"]=r.optionTextColorActiveInverted,b["--n-option-text-color-child-active"]=r.optionTextColorChildActiveInverted,b["--n-prefix-color"]=r.prefixColorInverted,b["--n-suffix-color"]=r.suffixColorInverted,b["--n-group-header-text-color"]=r.groupHeaderTextColorInverted):(b["--n-color"]=r.color,b["--n-option-color-hover"]=r.optionColorHover,b["--n-option-color-active"]=r.optionColorActive,b["--n-option-text-color"]=r.optionTextColor,b["--n-option-text-color-hover"]=r.optionTextColorHover,b["--n-option-text-color-active"]=r.optionTextColorActive,b["--n-option-text-color-child-active"]=r.optionTextColorChildActive,b["--n-prefix-color"]=r.prefixColor,b["--n-suffix-color"]=r.suffixColor,b["--n-group-header-text-color"]=r.groupHeaderTextColor),b})),A=w?_("dropdown",N((()=>`${e.size[0]}${e.inverted?"i":""}`)),z,e):void 0;return{mergedClsPrefix:u,mergedTheme:g,tmNodes:r,mergedShow:n,handleAfterLeave:()=>{e.animated&&k()},doUpdateShow:S,cssVars:w?void 0:z,themeClass:null==A?void 0:A.themeClass,onRender:null==A?void 0:A.onRender}},render(){const{mergedTheme:e}=this,o={show:this.mergedShow,theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:(e,o,n,t,r)=>{var i;const{mergedClsPrefix:d,menuProps:l}=this;null===(i=this.onRender)||void 0===i||i.call(this);const a=(null==l?void 0:l(void 0,this.tmNodes.map((e=>e.rawNode))))||{},s={ref:Z(o),class:[e,`${d}-dropdown`,this.themeClass],clsPrefix:d,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:t,onMouseleave:r};return k(ce,A(this.$attrs,s,a))},onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return k(p,Object.assign({},s(this.$props,he),o),{trigger:()=>{var e,o;return null===(o=(e=this.$slots).default)||void 0===o?void 0:o.call(e)}})}});export{be as N,Z as c,oe as d};
