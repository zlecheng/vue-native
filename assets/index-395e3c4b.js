import{d as e,h as o,c as t,a as r,b as n,e as i,i as l,f as a,p as c,r as d,F as v,N as s,g as m,u,j as h,k as p,l as C,m as x,n as g,o as f,q as z,s as b,t as w,w as I,v as y,x as A,y as H,z as S,A as N,B as T,C as P,D as k,E as R,G as L,R as F,H as M,I as _,T as E,J as O,K as B,L as j}from"./index-7f005f90.js";import{l as V,_ as $,a as K,b as D}from"./LayoutSider-e244c801.js";import{d as U,N as q}from"./Dropdown-3be927c0.js";import{t as G,N as W,k as J,u as Q,a as Z,c as X,V as Y}from"./Tooltip-be5c1a31.js";import{k as ee,c as oe,V as te,N as re}from"./Icon-69c6f82c.js";import{_ as ne}from"./plugin-vueexport-helper-1b428a4d.js";const ie=e({name:"ChevronDownFilled",render:()=>o("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}),le=t({name:"Menu",common:r,peers:{Tooltip:G,Dropdown:U},self:e=>{const{borderRadius:o,textColor3:t,primaryColor:r,textColor2:i,textColor1:l,fontSize:a,dividerColor:c,hoverColor:d,primaryColorHover:v}=e;return Object.assign({borderRadius:o,color:"#0000",groupTextColor:t,itemColorHover:d,itemColorActive:n(r,{alpha:.1}),itemColorActiveHover:n(r,{alpha:.1}),itemColorActiveCollapsed:n(r,{alpha:.1}),itemTextColor:i,itemTextColorHover:i,itemTextColorActive:r,itemTextColorActiveHover:r,itemTextColorChildActive:r,itemTextColorChildActiveHover:r,itemTextColorHorizontal:i,itemTextColorHoverHorizontal:v,itemTextColorActiveHorizontal:r,itemTextColorActiveHoverHorizontal:r,itemTextColorChildActiveHorizontal:r,itemTextColorChildActiveHoverHorizontal:r,itemIconColor:l,itemIconColorHover:l,itemIconColorActive:r,itemIconColorActiveHover:r,itemIconColorChildActive:r,itemIconColorChildActiveHover:r,itemIconColorCollapsed:l,itemIconColorHorizontal:l,itemIconColorHoverHorizontal:v,itemIconColorActiveHorizontal:r,itemIconColorActiveHoverHorizontal:r,itemIconColorChildActiveHorizontal:r,itemIconColorChildActiveHoverHorizontal:r,itemHeight:"42px",arrowColor:i,arrowColorHover:i,arrowColorActive:r,arrowColorActiveHover:r,arrowColorChildActive:r,arrowColorChildActiveHover:r,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:a,dividerColor:c},{itemColorHoverInverted:"#0000",itemColorActiveInverted:m=r,itemColorActiveHoverInverted:m,itemColorActiveCollapsedInverted:m,itemTextColorInverted:s="#BBB",itemTextColorHoverInverted:u="#FFF",itemTextColorChildActiveInverted:u,itemTextColorChildActiveHoverInverted:u,itemTextColorActiveInverted:u,itemTextColorActiveHoverInverted:u,itemTextColorHorizontalInverted:s,itemTextColorHoverHorizontalInverted:u,itemTextColorChildActiveHorizontalInverted:u,itemTextColorChildActiveHoverHorizontalInverted:u,itemTextColorActiveHorizontalInverted:u,itemTextColorActiveHoverHorizontalInverted:u,itemIconColorInverted:s,itemIconColorHoverInverted:u,itemIconColorActiveInverted:u,itemIconColorActiveHoverInverted:u,itemIconColorChildActiveInverted:u,itemIconColorChildActiveHoverInverted:u,itemIconColorCollapsedInverted:s,itemIconColorHorizontalInverted:s,itemIconColorHoverHorizontalInverted:u,itemIconColorActiveHorizontalInverted:u,itemIconColorActiveHoverHorizontalInverted:u,itemIconColorChildActiveHorizontalInverted:u,itemIconColorChildActiveHoverHorizontalInverted:u,arrowColorInverted:s,arrowColorHoverInverted:u,arrowColorActiveInverted:u,arrowColorActiveHoverInverted:u,arrowColorChildActiveInverted:u,arrowColorChildActiveHoverInverted:u,groupTextColorInverted:"#AAA"});var s,m,u}}),ae=i("n-menu"),ce=i("n-submenu"),de=i("n-menu-item-group");function ve(e){const o=l(ae),{props:t,mergedCollapsedRef:r}=o,n=l(ce,null),i=l(de,null),c=a((()=>"horizontal"===t.mode)),d=a((()=>c.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right")),v=a((()=>{var e;return Math.max(null!==(e=t.collapsedIconSize)&&void 0!==e?e:t.iconSize,t.iconSize)})),s=a((()=>{var o;return!c.value&&e.root&&r.value&&null!==(o=t.collapsedIconSize)&&void 0!==o?o:t.iconSize})),m=a((()=>{if(c.value)return;const{collapsedWidth:o,indent:l,rootIndent:a}=t,{root:d,isGroup:s}=e,m=void 0===a?l:a;return d?r.value?o/2-v.value/2:m:i&&"number"==typeof i.paddingLeftRef.value?l/2+i.paddingLeftRef.value:n&&"number"==typeof n.paddingLeftRef.value?(s?l/2:l)+n.paddingLeftRef.value:0})),u=a((()=>{const{collapsedWidth:o,indent:n,rootIndent:i}=t,{value:l}=v,{root:a}=e;return c.value?8:a&&r.value?(void 0===i?n:i)+l+8-(o+l)/2:8}));return{dropdownPlacement:d,activeIconSize:s,maxIconSize:v,paddingLeft:m,iconMarginRight:u,NMenu:o,NSubmenu:n}}const se={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},me=Object.assign(Object.assign({},se),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),ue=e({name:"MenuOptionGroup",props:me,setup(e){c(ce,null);const t=ve(e);c(de,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:r,props:n}=l(ae);return function(){const{value:i}=r,l=t.paddingLeft.value,{nodeProps:a}=n,c=null==a?void 0:a(e.tmNode.rawNode);return o("div",{class:`${i}-menu-item-group`,role:"group"},o("div",Object.assign({},c,{class:[`${i}-menu-item-group-title`,null==c?void 0:c.class],style:[(null==c?void 0:c.style)||"",void 0!==l?`padding-left: ${l}px;`:""]}),d(e.title),e.extra?o(v,null," ",d(e.extra)):null),o("div",null,e.tmNodes.map((e=>ye(e,n)))))}}}),he=e({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:o}=l(ae);return{menuProps:o,style:a((()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}})),iconStyle:a((()=>{const{maxIconSize:o,activeIconSize:t,iconMarginRight:r}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${t}px`,marginRight:`${r}px`}}))}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:r,renderLabel:n,renderExtra:i,expandIcon:l}}=this,a=r?r(t.rawNode):d(this.icon);return o("div",{onClick:e=>{var o;null===(o=this.onClick)||void 0===o||o.call(this,e)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},a&&o("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[a]),o("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:n?n(t.rawNode):d(this.title),this.extra||i?o("span",{class:`${e}-menu-item-content-header__extra`}," ",i?i(t.rawNode):d(this.extra)):null),this.showArrow?o(s,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>l?l(t.rawNode):o(ie,null)}):null)}}),pe=Object.assign(Object.assign({},se),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),Ce=e({name:"Submenu",props:pe,setup(e){const o=ve(e),{NMenu:t,NSubmenu:r}=o,{props:n,mergedCollapsedRef:i,mergedThemeRef:l}=t,d=a((()=>{const{disabled:o}=e;return!!(null==r?void 0:r.mergedDisabledRef.value)||!!n.disabled||o})),v=m(!1);return c(ce,{paddingLeftRef:o.paddingLeft,mergedDisabledRef:d}),c(de,null),{menuProps:n,mergedTheme:l,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,iconMarginRight:o.iconMarginRight,dropdownPlacement:o.dropdownPlacement,dropdownShow:v,paddingLeft:o.paddingLeft,mergedDisabled:d,mergedValue:t.mergedValueRef,childActive:u((()=>{var o;return null!==(o=e.virtualChildActive)&&void 0!==o?o:t.activePathRef.value.includes(e.internalKey)})),collapsed:a((()=>!("horizontal"===n.mode||!i.value&&t.mergedExpandedKeysRef.value.includes(e.internalKey)))),dropdownEnabled:a((()=>!d.value&&("horizontal"===n.mode||i.value))),handlePopoverShowChange:function(e){v.value=e},handleClick:function(){d.value||(i.value||t.toggleExpand(e.internalKey),function(){const{onClick:o}=e;o&&o()}())}}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:r,renderLabel:n}}=this,i=()=>{const{isHorizontal:e,paddingLeft:t,collapsed:r,mergedDisabled:n,maxIconSize:i,activeIconSize:l,title:a,childActive:c,icon:d,handleClick:v,menuProps:{nodeProps:s},dropdownShow:m,iconMarginRight:u,tmNode:h,mergedClsPrefix:p,isEllipsisPlaceholder:C,extra:x}=this,g=null==s?void 0:s(h.rawNode);return o("div",Object.assign({},g,{class:[`${p}-menu-item`,null==g?void 0:g.class],role:"menuitem"}),o(he,{tmNode:h,paddingLeft:t,collapsed:r,disabled:n,iconMarginRight:u,maxIconSize:i,activeIconSize:l,title:a,extra:x,showArrow:!e,childActive:c,clsPrefix:p,icon:d,hover:m,onClick:v,isEllipsisPlaceholder:C}))},l=()=>o(h,null,{default:()=>{const{tmNodes:e,collapsed:r}=this;return r?null:o("div",{class:`${t}-submenu-children`,role:"menu"},e.map((e=>ye(e,this.menuProps))))}});return this.root?o(q,Object.assign({size:"large",trigger:"hover"},null===(e=this.menuProps)||void 0===e?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:r,renderLabel:n}),{default:()=>o("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed,id:this.domId},i(),this.isHorizontal?null:l())}):o("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed,id:this.domId},i(),l())}}),xe=Object.assign(Object.assign({},se),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),ge=e({name:"MenuOption",props:xe,setup(e){const o=ve(e),{NSubmenu:t,NMenu:r}=o,{props:n,mergedClsPrefixRef:i,mergedCollapsedRef:l}=r,c=t?t.mergedDisabledRef:{value:!1},d=a((()=>c.value||e.disabled));return{mergedClsPrefix:i,dropdownPlacement:o.dropdownPlacement,paddingLeft:o.paddingLeft,iconMarginRight:o.iconMarginRight,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:n,dropdownEnabled:u((()=>e.root&&l.value&&"horizontal"!==n.mode&&!d.value)),selected:u((()=>r.mergedValueRef.value===e.internalKey)),mergedDisabled:d,handleClick:function(o){d.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),function(o){const{onClick:t}=e;t&&t(o)}(o))}}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:r,menuProps:{renderLabel:n,nodeProps:i}}=this,l=null==i?void 0:i(r.rawNode);return o("div",Object.assign({},l,{role:"menuitem",class:[`${e}-menu-item`,null==l?void 0:l.class]}),o(W,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||void 0===this.title,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(r.rawNode):d(this.title),trigger:()=>o(he,{tmNode:r,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),fe=e({name:"MenuDivider",setup(){const e=l(ae),{mergedClsPrefixRef:t,isHorizontalRef:r}=e;return()=>r.value?null:o("div",{class:`${t.value}-menu-divider`})}}),ze=ee(me),be=ee(xe),we=ee(pe);function Ie(e){return"divider"===e.type||"render"===e.type}function ye(e,t){const{rawNode:r}=e,{show:n}=r;if(!1===n)return null;if(Ie(r))return"divider"===r.type?o(fe,Object.assign({key:e.key},r.props)):null;const{labelField:i}=t,{key:l,level:a,isGroup:c}=e,d=Object.assign(Object.assign({},r),{title:r.title||r[i],extra:r.titleExtra||r.extra,key:l,internalKey:l,level:a,root:0===a,isGroup:c});return e.children?e.isGroup?o(ue,J(d,ze,{tmNode:e,tmNodes:e.children,key:l})):o(Ce,J(d,we,{key:l,rawNodes:r[t.childrenField],tmNodes:e.children,tmNode:e})):o(ge,J(d,be,{key:l,tmNode:e}))}const Ae=[p("&::before","background-color: var(--n-item-color-hover);"),g("arrow","\n color: var(--n-arrow-color-hover);\n "),g("icon","\n color: var(--n-item-icon-color-hover);\n "),C("menu-item-content-header","\n color: var(--n-item-text-color-hover);\n ",[p("a","\n color: var(--n-item-text-color-hover);\n "),g("extra","\n color: var(--n-item-text-color-hover);\n ")])],He=[g("icon","\n color: var(--n-item-icon-color-hover-horizontal);\n "),C("menu-item-content-header","\n color: var(--n-item-text-color-hover-horizontal);\n ",[p("a","\n color: var(--n-item-text-color-hover-horizontal);\n "),g("extra","\n color: var(--n-item-text-color-hover-horizontal);\n ")])],Se=p([C("menu","\n background-color: var(--n-color);\n color: var(--n-item-text-color);\n overflow: hidden;\n transition: background-color .3s var(--n-bezier);\n box-sizing: border-box;\n font-size: var(--n-font-size);\n padding-bottom: 6px;\n ",[x("horizontal","\n max-width: 100%;\n width: 100%;\n display: flex;\n overflow: hidden;\n padding-bottom: 0;\n ",[C("submenu","margin: 0;"),C("menu-item","margin: 0;"),C("menu-item-content","\n padding: 0 20px;\n border-bottom: 2px solid #0000;\n ",[p("&::before","display: none;"),x("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),C("menu-item-content",[x("selected",[g("icon","color: var(--n-item-icon-color-active-horizontal);"),C("menu-item-content-header","\n color: var(--n-item-text-color-active-horizontal);\n ",[p("a","color: var(--n-item-text-color-active-horizontal);"),g("extra","color: var(--n-item-text-color-active-horizontal);")])]),x("child-active","\n border-bottom: 2px solid var(--n-border-color-horizontal);\n ",[C("menu-item-content-header","\n color: var(--n-item-text-color-child-active-horizontal);\n ",[p("a","\n color: var(--n-item-text-color-child-active-horizontal);\n "),g("extra","\n color: var(--n-item-text-color-child-active-horizontal);\n ")]),g("icon","\n color: var(--n-item-icon-color-child-active-horizontal);\n ")]),f("disabled",[f("selected, child-active",[p("&:focus-within",He)]),x("selected",[Ne(null,[g("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),C("menu-item-content-header","\n color: var(--n-item-text-color-active-hover-horizontal);\n ",[p("a","color: var(--n-item-text-color-active-hover-horizontal);"),g("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),x("child-active",[Ne(null,[g("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),C("menu-item-content-header","\n color: var(--n-item-text-color-child-active-hover-horizontal);\n ",[p("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),g("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),Ne("border-bottom: 2px solid var(--n-border-color-horizontal);",He)]),C("menu-item-content-header",[p("a","color: var(--n-item-text-color-horizontal);")])])]),f("responsive",[C("menu-item-content-header","\n overflow: hidden;\n text-overflow: ellipsis;\n ")]),x("collapsed",[C("menu-item-content",[x("selected",[p("&::before","\n background-color: var(--n-item-color-active-collapsed) !important;\n ")]),C("menu-item-content-header","opacity: 0;"),g("arrow","opacity: 0;"),g("icon","color: var(--n-item-icon-color-collapsed);")])]),C("menu-item","\n height: var(--n-item-height);\n margin-top: 6px;\n position: relative;\n "),C("menu-item-content",'\n box-sizing: border-box;\n line-height: 1.75;\n height: 100%;\n display: grid;\n grid-template-areas: "icon content arrow";\n grid-template-columns: auto 1fr auto;\n align-items: center;\n cursor: pointer;\n position: relative;\n padding-right: 18px;\n transition:\n background-color .3s var(--n-bezier),\n padding-left .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n ',[p("> *","z-index: 1;"),p("&::before",'\n z-index: auto;\n content: "";\n background-color: #0000;\n position: absolute;\n left: 8px;\n right: 8px;\n top: 0;\n bottom: 0;\n pointer-events: none;\n border-radius: var(--n-border-radius);\n transition: background-color .3s var(--n-bezier);\n '),x("disabled","\n opacity: .45;\n cursor: not-allowed;\n "),x("collapsed",[g("arrow","transform: rotate(0);")]),x("selected",[p("&::before","background-color: var(--n-item-color-active);"),g("arrow","color: var(--n-arrow-color-active);"),g("icon","color: var(--n-item-icon-color-active);"),C("menu-item-content-header","\n color: var(--n-item-text-color-active);\n ",[p("a","color: var(--n-item-text-color-active);"),g("extra","color: var(--n-item-text-color-active);")])]),x("child-active",[C("menu-item-content-header","\n color: var(--n-item-text-color-child-active);\n ",[p("a","\n color: var(--n-item-text-color-child-active);\n "),g("extra","\n color: var(--n-item-text-color-child-active);\n ")]),g("arrow","\n color: var(--n-arrow-color-child-active);\n "),g("icon","\n color: var(--n-item-icon-color-child-active);\n ")]),f("disabled",[f("selected, child-active",[p("&:focus-within",Ae)]),x("selected",[Ne(null,[g("arrow","color: var(--n-arrow-color-active-hover);"),g("icon","color: var(--n-item-icon-color-active-hover);"),C("menu-item-content-header","\n color: var(--n-item-text-color-active-hover);\n ",[p("a","color: var(--n-item-text-color-active-hover);"),g("extra","color: var(--n-item-text-color-active-hover);")])])]),x("child-active",[Ne(null,[g("arrow","color: var(--n-arrow-color-child-active-hover);"),g("icon","color: var(--n-item-icon-color-child-active-hover);"),C("menu-item-content-header","\n color: var(--n-item-text-color-child-active-hover);\n ",[p("a","color: var(--n-item-text-color-child-active-hover);"),g("extra","color: var(--n-item-text-color-child-active-hover);")])])]),x("selected",[Ne(null,[p("&::before","background-color: var(--n-item-color-active-hover);")])]),Ne(null,Ae)]),g("icon","\n grid-area: icon;\n color: var(--n-item-icon-color);\n transition:\n color .3s var(--n-bezier),\n font-size .3s var(--n-bezier),\n margin-right .3s var(--n-bezier);\n box-sizing: content-box;\n display: inline-flex;\n align-items: center;\n justify-content: center;\n "),g("arrow","\n grid-area: arrow;\n font-size: 16px;\n color: var(--n-arrow-color);\n transform: rotate(180deg);\n opacity: 1;\n transition:\n color .3s var(--n-bezier),\n transform 0.2s var(--n-bezier),\n opacity 0.2s var(--n-bezier);\n "),C("menu-item-content-header","\n grid-area: content;\n transition:\n color .3s var(--n-bezier),\n opacity .3s var(--n-bezier);\n opacity: 1;\n white-space: nowrap;\n color: var(--n-item-text-color);\n ",[p("a","\n outline: none;\n text-decoration: none;\n transition: color .3s var(--n-bezier);\n color: var(--n-item-text-color);\n ",[p("&::before",'\n content: "";\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n ')]),g("extra","\n font-size: .93em;\n color: var(--n-group-text-color);\n transition: color .3s var(--n-bezier);\n ")])]),C("submenu","\n cursor: pointer;\n position: relative;\n margin-top: 6px;\n ",[C("menu-item-content","\n height: var(--n-item-height);\n "),C("submenu-children","\n overflow: hidden;\n padding: 0;\n ",[z({duration:".2s"})])]),C("menu-item-group",[C("menu-item-group-title","\n margin-top: 6px;\n color: var(--n-group-text-color);\n cursor: default;\n font-size: .93em;\n height: 36px;\n display: flex;\n align-items: center;\n transition:\n padding-left .3s var(--n-bezier),\n color .3s var(--n-bezier);\n ")])]),C("menu-tooltip",[p("a","\n color: inherit;\n text-decoration: none;\n ")]),C("menu-divider","\n transition: background-color .3s var(--n-bezier);\n background-color: var(--n-divider-color);\n height: 1px;\n margin: 6px 18px;\n ")]);function Ne(e,o){return[x("hover",e,o),p("&:hover",e,o)]}const Te=e({name:"Menu",props:Object.assign(Object.assign({},w.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=b(e),n=w("Menu","-menu",Se,le,e,t),i=l(V,null),d=a((()=>{var o;const{collapsed:t}=e;if(void 0!==t)return t;if(i){const{collapseModeRef:e,collapsedRef:t}=i;if("width"===e.value)return null!==(o=t.value)&&void 0!==o&&o}return!1})),v=a((()=>{const{keyField:o,childrenField:t,disabledField:r}=e;return oe(e.items||e.options,{getIgnored:e=>Ie(e),getChildren:e=>e[t],getDisabled:e=>e[r],getKey(e){var t;return null!==(t=e[o])&&void 0!==t?t:e.name}})})),s=a((()=>new Set(v.value.treeNodes.map((e=>e.key))))),{watchProps:u}=e,h=m(null);(null==u?void 0:u.includes("defaultValue"))?I((()=>{h.value=e.defaultValue})):h.value=e.defaultValue;const p=y(e,"value"),C=Q(p,h),x=m([]),g=()=>{x.value=e.defaultExpandAll?v.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||v.value.getPath(C.value,{includeSelf:!1}).keyPath};(null==u?void 0:u.includes("defaultExpandedKeys"))?I(g):g();const f=Z(e,["expandedNames","expandedKeys"]),z=Q(f,x),S=a((()=>v.value.treeNodes)),N=a((()=>v.value.getPath(C.value).keyPath));function T(o){const{"onUpdate:expandedKeys":t,onUpdateExpandedKeys:r,onExpandedNamesChange:n,onOpenNamesChange:i}=e;t&&X(t,o),r&&X(r,o),n&&X(n,o),i&&X(i,o),x.value=o}c(ae,{props:e,mergedCollapsedRef:d,mergedThemeRef:n,mergedValueRef:C,mergedExpandedKeysRef:z,activePathRef:N,mergedClsPrefixRef:t,isHorizontalRef:a((()=>"horizontal"===e.mode)),invertedRef:y(e,"inverted"),doSelect:function(o,t){const{"onUpdate:value":r,onUpdateValue:n,onSelect:i}=e;n&&X(n,o,t),r&&X(r,o,t),i&&X(i,o,t),h.value=o},toggleExpand:function(o){const t=Array.from(z.value),r=t.findIndex((e=>e===o));if(~r)t.splice(r,1);else{if(e.accordion&&s.value.has(o)){const e=t.findIndex((e=>s.value.has(e)));e>-1&&t.splice(e,1)}t.push(o)}T(t)}});const P=a((()=>{const{inverted:o}=e,{common:{cubicBezierEaseInOut:t},self:r}=n.value,{borderRadius:i,borderColorHorizontal:l,fontSize:a,itemHeight:c,dividerColor:d}=r,v={"--n-divider-color":d,"--n-bezier":t,"--n-font-size":a,"--n-border-color-horizontal":l,"--n-border-radius":i,"--n-item-height":c};return o?(v["--n-group-text-color"]=r.groupTextColorInverted,v["--n-color"]=r.colorInverted,v["--n-item-text-color"]=r.itemTextColorInverted,v["--n-item-text-color-hover"]=r.itemTextColorHoverInverted,v["--n-item-text-color-active"]=r.itemTextColorActiveInverted,v["--n-item-text-color-child-active"]=r.itemTextColorChildActiveInverted,v["--n-item-text-color-child-active-hover"]=r.itemTextColorChildActiveInverted,v["--n-item-text-color-active-hover"]=r.itemTextColorActiveHoverInverted,v["--n-item-icon-color"]=r.itemIconColorInverted,v["--n-item-icon-color-hover"]=r.itemIconColorHoverInverted,v["--n-item-icon-color-active"]=r.itemIconColorActiveInverted,v["--n-item-icon-color-active-hover"]=r.itemIconColorActiveHoverInverted,v["--n-item-icon-color-child-active"]=r.itemIconColorChildActiveInverted,v["--n-item-icon-color-child-active-hover"]=r.itemIconColorChildActiveHoverInverted,v["--n-item-icon-color-collapsed"]=r.itemIconColorCollapsedInverted,v["--n-item-text-color-horizontal"]=r.itemTextColorHorizontalInverted,v["--n-item-text-color-hover-horizontal"]=r.itemTextColorHoverHorizontalInverted,v["--n-item-text-color-active-horizontal"]=r.itemTextColorActiveHorizontalInverted,v["--n-item-text-color-child-active-horizontal"]=r.itemTextColorChildActiveHorizontalInverted,v["--n-item-text-color-child-active-hover-horizontal"]=r.itemTextColorChildActiveHoverHorizontalInverted,v["--n-item-text-color-active-hover-horizontal"]=r.itemTextColorActiveHoverHorizontalInverted,v["--n-item-icon-color-horizontal"]=r.itemIconColorHorizontalInverted,v["--n-item-icon-color-hover-horizontal"]=r.itemIconColorHoverHorizontalInverted,v["--n-item-icon-color-active-horizontal"]=r.itemIconColorActiveHorizontalInverted,v["--n-item-icon-color-active-hover-horizontal"]=r.itemIconColorActiveHoverHorizontalInverted,v["--n-item-icon-color-child-active-horizontal"]=r.itemIconColorChildActiveHorizontalInverted,v["--n-item-icon-color-child-active-hover-horizontal"]=r.itemIconColorChildActiveHoverHorizontalInverted,v["--n-arrow-color"]=r.arrowColorInverted,v["--n-arrow-color-hover"]=r.arrowColorHoverInverted,v["--n-arrow-color-active"]=r.arrowColorActiveInverted,v["--n-arrow-color-active-hover"]=r.arrowColorActiveHoverInverted,v["--n-arrow-color-child-active"]=r.arrowColorChildActiveInverted,v["--n-arrow-color-child-active-hover"]=r.arrowColorChildActiveHoverInverted,v["--n-item-color-hover"]=r.itemColorHoverInverted,v["--n-item-color-active"]=r.itemColorActiveInverted,v["--n-item-color-active-hover"]=r.itemColorActiveHoverInverted,v["--n-item-color-active-collapsed"]=r.itemColorActiveCollapsedInverted):(v["--n-group-text-color"]=r.groupTextColor,v["--n-color"]=r.color,v["--n-item-text-color"]=r.itemTextColor,v["--n-item-text-color-hover"]=r.itemTextColorHover,v["--n-item-text-color-active"]=r.itemTextColorActive,v["--n-item-text-color-child-active"]=r.itemTextColorChildActive,v["--n-item-text-color-child-active-hover"]=r.itemTextColorChildActiveHover,v["--n-item-text-color-active-hover"]=r.itemTextColorActiveHover,v["--n-item-icon-color"]=r.itemIconColor,v["--n-item-icon-color-hover"]=r.itemIconColorHover,v["--n-item-icon-color-active"]=r.itemIconColorActive,v["--n-item-icon-color-active-hover"]=r.itemIconColorActiveHover,v["--n-item-icon-color-child-active"]=r.itemIconColorChildActive,v["--n-item-icon-color-child-active-hover"]=r.itemIconColorChildActiveHover,v["--n-item-icon-color-collapsed"]=r.itemIconColorCollapsed,v["--n-item-text-color-horizontal"]=r.itemTextColorHorizontal,v["--n-item-text-color-hover-horizontal"]=r.itemTextColorHoverHorizontal,v["--n-item-text-color-active-horizontal"]=r.itemTextColorActiveHorizontal,v["--n-item-text-color-child-active-horizontal"]=r.itemTextColorChildActiveHorizontal,v["--n-item-text-color-child-active-hover-horizontal"]=r.itemTextColorChildActiveHoverHorizontal,v["--n-item-text-color-active-hover-horizontal"]=r.itemTextColorActiveHoverHorizontal,v["--n-item-icon-color-horizontal"]=r.itemIconColorHorizontal,v["--n-item-icon-color-hover-horizontal"]=r.itemIconColorHoverHorizontal,v["--n-item-icon-color-active-horizontal"]=r.itemIconColorActiveHorizontal,v["--n-item-icon-color-active-hover-horizontal"]=r.itemIconColorActiveHoverHorizontal,v["--n-item-icon-color-child-active-horizontal"]=r.itemIconColorChildActiveHorizontal,v["--n-item-icon-color-child-active-hover-horizontal"]=r.itemIconColorChildActiveHoverHorizontal,v["--n-arrow-color"]=r.arrowColor,v["--n-arrow-color-hover"]=r.arrowColorHover,v["--n-arrow-color-active"]=r.arrowColorActive,v["--n-arrow-color-active-hover"]=r.arrowColorActiveHover,v["--n-arrow-color-child-active"]=r.arrowColorChildActive,v["--n-arrow-color-child-active-hover"]=r.arrowColorChildActiveHover,v["--n-item-color-hover"]=r.itemColorHover,v["--n-item-color-active"]=r.itemColorActive,v["--n-item-color-active-hover"]=r.itemColorActiveHover,v["--n-item-color-active-collapsed"]=r.itemColorActiveCollapsed),v})),k=r?A("menu",a((()=>e.inverted?"a":"b")),P,e):void 0,R=H(),L=m(null),F=m(null);let M=!0;const _=()=>{var e;M?M=!1:null===(e=L.value)||void 0===e||e.sync({showAllItemsBeforeCalculate:!0})},E=m(-1),O=a((()=>{const o=E.value;return{children:-1===o?[]:e.options.slice(o)}})),B=a((()=>{const{childrenField:o,disabledField:t,keyField:r}=e;return oe([O.value],{getIgnored:e=>Ie(e),getChildren:e=>e[o],getDisabled:e=>e[t],getKey(e){var o;return null!==(o=e[r])&&void 0!==o?o:e.name}})})),j=a((()=>oe([{}]).treeNodes[0]));return{mergedClsPrefix:t,controlledExpandedKeys:f,uncontrolledExpanededKeys:x,mergedExpandedKeys:z,uncontrolledValue:h,mergedValue:C,activePath:N,tmNodes:S,mergedTheme:n,mergedCollapsed:d,cssVars:r?void 0:P,themeClass:null==k?void 0:k.themeClass,overflowRef:L,counterRef:F,updateCounter:()=>{},onResize:_,onUpdateOverflow:function(e){e||(E.value=-1)},onUpdateCount:function(o){E.value=e.options.length-o},renderCounter:function(){var e;if(-1===E.value)return o(Ce,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:j.value,domId:R,isEllipsisPlaceholder:!0});const t=B.value.treeNodes[0],r=N.value,n=!!(null===(e=t.children)||void 0===e?void 0:e.some((e=>r.includes(e.key))));return o(Ce,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:n,tmNode:t,domId:R,rawNodes:t.rawNode.children||[],tmNodes:t.children||[],isEllipsisPlaceholder:!0})},getCounter:function(){return document.getElementById(R)},onRender:null==k?void 0:k.onRender,showOption:o=>{const t=v.value.getPath(null!=o?o:C.value,{includeSelf:!1}).keyPath;if(!t.length)return;const r=Array.from(z.value),n=new Set([...r,...t]);e.accordion&&s.value.forEach((e=>{n.has(e)&&!t.includes(e)&&n.delete(e)})),T(Array.from(n))},deriveResponsiveState:_}},render(){const{mergedClsPrefix:e,mode:t,themeClass:r,onRender:n}=this;null==n||n();const i=()=>this.tmNodes.map((e=>ye(e,this.$props))),l="horizontal"===t&&this.responsive,a=()=>o("div",{role:"horizontal"===t?"menubar":"menu",class:[`${e}-menu`,r,`${e}-menu--${t}`,l&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},l?o(te,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:i,counter:this.renderCounter}):i());return l?o(Y,{onResize:this.onResize},{default:a}):a()}}),Pe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ke=[T("circle",{fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32",cx:"256",cy:"56",r:"40"},null,-1),T("path",{fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32",d:"M204.23 274.44c2.9-18.06 4.2-35.52-.5-47.59c-4-10.38-12.7-16.19-23.2-20.15L88 176.76c-12-4-23.21-10.7-24-23.94c-1-17 14-28 29-24c0 0 88 31.14 163 31.14s162-31 162-31c18-5 30 9 30 23.79c0 14.21-11 19.21-24 23.94l-88 31.91c-8 3-21 9-26 18.18c-6 10.75-5 29.53-2.1 47.59l5.9 29.63l37.41 163.9c2.8 13.15-6.3 25.44-19.4 27.74S308 489 304.12 476.28l-37.56-115.93q-2.71-8.34-4.8-16.87L256 320l-5.3 21.65q-2.52 10.35-5.8 20.48L208 476.18c-4 12.85-14.5 21.75-27.6 19.46s-22.4-15.59-19.46-27.74l37.39-163.83z"},null,-1)],Re=e({name:"AccessibilityOutline",render:function(e,o){return S(),N("svg",Pe,ke)}}),Le={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Fe=[T("path",{d:"M392 208h-24v-5.74A63.93 63.93 0 0 0 321.65 96a111 111 0 0 0-27.59-47.29A108.62 108.62 0 0 0 216 16c-29.91 0-57.78 12.28-79 34.68a56 56 0 0 0-67.51 77.54A63.91 63.91 0 0 0 80 231.39V440a56.06 56.06 0 0 0 56 56h176a56.06 56.06 0 0 0 56-56v-8h24a72.08 72.08 0 0 0 72-72v-80a72.08 72.08 0 0 0-72-72zM176 416a16 16 0 0 1-32 0V256a16 16 0 0 1 32 0zm64 0a16 16 0 0 1-32 0V256a16 16 0 0 1 32 0zm64 0a16 16 0 0 1-32 0V256a16 16 0 0 1 32 0zm16-224c-8.33 0-20.55-5.18-26.69-11.31A16 16 0 0 0 282 176H160a16 16 0 0 0-15 10.53c-6.83 18.68-23.6 21.47-33 21.47a32 32 0 0 1 0-64c.09 0 9.12.34 16.4 5.8a16 16 0 1 0 19.2-25.6A63.69 63.69 0 0 0 112 112a63.55 63.55 0 0 0-14 1.57A24 24 0 0 1 120 80a23.78 23.78 0 0 1 19.38 9.84a51.35 51.35 0 0 1 4.71 7.9A16 16 0 0 0 176 96c0-6.77-3.61-15.17-10.76-25c-.46-.63-1-1.25-1.45-1.86C178.39 55.44 196.64 48 216 48a76.86 76.86 0 0 1 55.23 23.18A80.2 80.2 0 0 1 292.61 142a16 16 0 0 0 12.73 18.71a16.29 16.29 0 0 0 3 .28a16 16 0 0 0 15.7-13a111.78 111.78 0 0 0 1.96-19.42a32 32 0 0 1-6 63.43zm112 168a40 40 0 0 1-40 40h-24V240h24a40 40 0 0 1 40 40z",fill:"currentColor"},null,-1)],Me=e({name:"Beer",render:function(e,o){return S(),N("svg",Le,Fe)}}),_e={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Ee=[T("path",{d:"M488.1 414.7V303.4L300.9 428l83.6 55.8zm254.1 137.7v-79.8l-59.8 39.9zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm278 533c0 1.1-.1 2.1-.2 3.1c0 .4-.1.7-.2 1a14.16 14.16 0 0 1-.8 3.2c-.2.6-.4 1.2-.6 1.7c-.2.4-.4.8-.5 1.2c-.3.5-.5 1.1-.8 1.6c-.2.4-.4.7-.7 1.1c-.3.5-.7 1-1 1.5c-.3.4-.5.7-.8 1c-.4.4-.8.9-1.2 1.3c-.3.3-.6.6-1 .9c-.4.4-.9.8-1.4 1.1c-.4.3-.7.6-1.1.8c-.1.1-.3.2-.4.3L525.2 786c-4 2.7-8.6 4-13.2 4c-4.7 0-9.3-1.4-13.3-4L244.6 616.9c-.1-.1-.3-.2-.4-.3l-1.1-.8c-.5-.4-.9-.7-1.3-1.1c-.3-.3-.6-.6-1-.9c-.4-.4-.8-.8-1.2-1.3a7 7 0 0 1-.8-1c-.4-.5-.7-1-1-1.5c-.2-.4-.5-.7-.7-1.1c-.3-.5-.6-1.1-.8-1.6c-.2-.4-.4-.8-.5-1.2c-.2-.6-.4-1.2-.6-1.7c-.1-.4-.3-.8-.4-1.2c-.2-.7-.3-1.3-.4-2c-.1-.3-.1-.7-.2-1c-.1-1-.2-2.1-.2-3.1V427.9c0-1 .1-2.1.2-3.1c.1-.3.1-.7.2-1a14.16 14.16 0 0 1 .8-3.2c.2-.6.4-1.2.6-1.7c.2-.4.4-.8.5-1.2c.2-.5.5-1.1.8-1.6c.2-.4.4-.7.7-1.1c.6-.9 1.2-1.7 1.8-2.5c.4-.4.8-.9 1.2-1.3c.3-.3.6-.6 1-.9c.4-.4.9-.8 1.3-1.1c.4-.3.7-.6 1.1-.8c.1-.1.3-.2.4-.3L498.7 239c8-5.3 18.5-5.3 26.5 0l254.1 169.1c.1.1.3.2.4.3l1.1.8l1.4 1.1c.3.3.6.6 1 .9c.4.4.8.8 1.2 1.3c.7.8 1.3 1.6 1.8 2.5c.2.4.5.7.7 1.1c.3.5.6 1 .8 1.6c.2.4.4.8.5 1.2c.2.6.4 1.2.6 1.7c.1.4.3.8.4 1.2c.2.7.3 1.3.4 2c.1.3.1.7.2 1c.1 1 .2 2.1.2 3.1V597zm-254.1 13.3v111.3L723.1 597l-83.6-55.8zM281.8 472.6v79.8l59.8-39.9zM512 456.1l-84.5 56.4l84.5 56.4l84.5-56.4zM723.1 428L535.9 303.4v111.3l103.6 69.1zM384.5 541.2L300.9 597l187.2 124.6V610.3l-103.6-69.1z",fill:"currentColor"},null,-1)],Oe=e({name:"CodepenCircleFilled",render:function(e,o){return S(),N("svg",_e,Ee)}}),Be={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},je=[P('<path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3l150.1 178L658.1 489L888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z" fill-opacity=".8" fill="currentColor"></path><path d="M424.6 765.8l-150.1-178L136 752.1V792h752v-30.4L658.1 489z" fill-opacity=".1" fill="currentColor"></path><path d="M136 652.7l132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136v420.7zM304 280a88 88 0 1 1 0 176a88 88 0 0 1 0-176z" fill-opacity=".1" fill="currentColor"></path><path d="M276 368a28 28 0 1 0 56 0a28 28 0 1 0-56 0z" fill-opacity=".1" fill="currentColor"></path><path d="M304 456a88 88 0 1 0 0-176a88 88 0 0 0 0 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28s-28-12.5-28-28s12.5-28 28-28z" fill-opacity=".8" fill="currentColor"></path>',5)],Ve=e({name:"PictureTwotone",render:function(e,o){return S(),N("svg",Be,je)}}),$e={__name:"SideBar",setup(e){const t=k();function r(e){return()=>o(re,null,{default:()=>o(e)})}const n=[{label:()=>o(F,{to:{path:"/home"}},{default:()=>"Ant x6 流程图"}),key:"home",icon:r(Re)},{label:()=>o(F,{to:{path:"/about"}},{default:()=>"汉字转拼音"}),key:"about",icon:r(Me)},{label:()=>o(F,{to:{path:"/drag"}},{default:()=>"框选裁剪"}),key:"drag",icon:r(Ve)},{label:()=>o(F,{to:{path:"/editor"}},{default:()=>"SQL编辑器"}),key:"editor",icon:r(Oe)}],i=(e,o)=>{};return(e,o)=>{const r=Te;return S(),N("div",null,[R(r,{"collapsed-width":64,"collapsed-icon-size":22,options:n,value:L(t).name,accordion:"","onUpdate:value":i},null,8,["value"])])}}},Ke=ne({},[["render",function(e,o){const t=M("router-view");return S(),N("div",null,[R(t,null,{default:_((({Component:e,route:o})=>[R(E,{name:"fade",mode:"out-in",appear:""},{default:_((()=>[o.meta.link?j("",!0):(S(),O(B(e),{key:o.path}))])),_:2},1024)])),_:1})])}],["__scopeId","data-v-f39c223e"]]),De={class:"app-container"},Ue=ne({__name:"index",setup:e=>(e,o)=>{const t=K,r=D,n=$;return S(),N("div",De,[R(n,{position:"absolute"},{default:_((()=>[R(n,{"has-sider":""},{default:_((()=>[R(t,{bordered:"","collapse-mode":"width","collapsed-width":64,"show-trigger":"bar",width:240,style:{height:"calc(100vh - 24px)"}},{default:_((()=>[R(L($e))])),_:1}),R(n,{style:{"margin-left":"18px"}},{default:_((()=>[R(r,{position:"absolute",class:"cu-layout","content-style":"padding: 2px 24px;"},{default:_((()=>[R(L(Ke))])),_:1})])),_:1})])),_:1})])),_:1})])}},[["__scopeId","data-v-a5957f32"]]);export{Ue as default};
