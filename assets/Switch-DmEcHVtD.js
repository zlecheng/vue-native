import{bk as se,cf as de,bS as ce,c as U,d as t,bw as H,a as W,b as l,av as I,e as ue,u as he,f as L,aa as be,l as K,t as fe,ac as ve,h as z,ad as w,bA as M,aD as s,i as ge,cg as O,j as i,aB as m,bv as we,bB as me,an as P}from"./index-ByY1MUmQ.js";const pe=e=>{const{primaryColor:d,opacityDisabled:f,borderRadius:n,textColor3:r}=e;return Object.assign(Object.assign({},de),{iconColor:r,textColor:"white",loadingColor:d,opacityDisabled:f,railColor:"rgba(0, 0, 0, .14)",railColorActive:d,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:n,railBorderRadiusMedium:n,railBorderRadiusLarge:n,buttonBorderRadiusSmall:n,buttonBorderRadiusMedium:n,buttonBorderRadiusLarge:n,boxShadowFocus:`0 0 0 2px ${ce(d,{alpha:.2})}`})},ye={name:"Switch",common:se,self:pe},xe=U("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[t("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),t("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),t("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),U("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[H({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),t("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),t("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),t("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),W("&:focus",[t("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),l("round",[t("rail","border-radius: calc(var(--n-rail-height) / 2);",[t("button","border-radius: calc(var(--n-button-height) / 2);")])]),I("disabled",[I("icon",[l("rubber-band",[l("pressed",[t("rail",[t("button","max-width: var(--n-button-width-pressed);")])]),t("rail",[W("&:active",[t("button","max-width: var(--n-button-width-pressed);")])]),l("active",[l("pressed",[t("rail",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),t("rail",[W("&:active",[t("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),l("active",[t("rail",[t("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),t("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[t("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[H()]),t("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),l("active",[t("rail","background-color: var(--n-rail-color-active);")]),l("loading",[t("rail",`
 cursor: wait;
 `)]),l("disabled",[t("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),ke=Object.assign(Object.assign({},L.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let B;const Ce=ue({name:"Switch",props:ke,setup(e){B===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?B=CSS.supports("width","max(1px)"):B=!1:B=!0);const{mergedClsPrefixRef:d,inlineThemeDisabled:f}=he(e),n=L("Switch","-switch",xe,ye,e,d),r=be(e),{mergedSizeRef:x,mergedDisabledRef:v}=r,k=K(e.defaultValue),R=fe(e,"value"),g=ve(R,k),S=z(()=>g.value===e.checkedValue),p=K(!1),o=K(!1),c=z(()=>{const{railStyle:a}=e;if(a)return a({focused:o.value,checked:S.value})});function u(a){const{"onUpdate:value":$,onChange:V,onUpdateValue:_}=e,{nTriggerFormInput:F,nTriggerFormChange:T}=r;$&&P($,a),_&&P(_,a),V&&P(V,a),k.value=a,F(),T()}function E(){const{nTriggerFormFocus:a}=r;a()}function X(){const{nTriggerFormBlur:a}=r;a()}function Y(){e.loading||v.value||(g.value!==e.checkedValue?u(e.checkedValue):u(e.uncheckedValue))}function q(){o.value=!0,E()}function G(){o.value=!1,X(),p.value=!1}function J(a){e.loading||v.value||a.key===" "&&(g.value!==e.checkedValue?u(e.checkedValue):u(e.uncheckedValue),p.value=!1)}function Q(a){e.loading||v.value||a.key===" "&&(a.preventDefault(),p.value=!0)}const A=z(()=>{const{value:a}=x,{self:{opacityDisabled:$,railColor:V,railColorActive:_,buttonBoxShadow:F,buttonColor:T,boxShadowFocus:Z,loadingColor:ee,textColor:te,iconColor:ae,[w("buttonHeight",a)]:h,[w("buttonWidth",a)]:oe,[w("buttonWidthPressed",a)]:ie,[w("railHeight",a)]:b,[w("railWidth",a)]:C,[w("railBorderRadius",a)]:ne,[w("buttonBorderRadius",a)]:re},common:{cubicBezierEaseInOut:le}}=n.value;let D,N,j;return B?(D=`calc((${b} - ${h}) / 2)`,N=`max(${b}, ${h})`,j=`max(${C}, calc(${C} + ${h} - ${b}))`):(D=M((s(b)-s(h))/2),N=M(Math.max(s(b),s(h))),j=s(b)>s(h)?C:M(s(C)+s(h)-s(b))),{"--n-bezier":le,"--n-button-border-radius":re,"--n-button-box-shadow":F,"--n-button-color":T,"--n-button-width":oe,"--n-button-width-pressed":ie,"--n-button-height":h,"--n-height":N,"--n-offset":D,"--n-opacity-disabled":$,"--n-rail-border-radius":ne,"--n-rail-color":V,"--n-rail-color-active":_,"--n-rail-height":b,"--n-rail-width":C,"--n-width":j,"--n-box-shadow-focus":Z,"--n-loading-color":ee,"--n-text-color":te,"--n-icon-color":ae}}),y=f?ge("switch",z(()=>x.value[0]),A,e):void 0;return{handleClick:Y,handleBlur:G,handleFocus:q,handleKeyup:J,handleKeydown:Q,mergedRailStyle:c,pressed:p,mergedClsPrefix:d,mergedValue:g,checked:S,mergedDisabled:v,cssVars:f?void 0:A,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:d,checked:f,mergedRailStyle:n,onRender:r,$slots:x}=this;r==null||r();const{checked:v,unchecked:k,icon:R,"checked-icon":g,"unchecked-icon":S}=x,p=!(O(R)&&O(g)&&O(S));return i("div",{role:"switch","aria-checked":f,class:[`${e}-switch`,this.themeClass,p&&`${e}-switch--icon`,f&&`${e}-switch--active`,d&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},i("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:n},m(v,o=>m(k,c=>o||c?i("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},i("div",{class:`${e}-switch__rail-placeholder`},i("div",{class:`${e}-switch__button-placeholder`}),o),i("div",{class:`${e}-switch__rail-placeholder`},i("div",{class:`${e}-switch__button-placeholder`}),c)):null)),i("div",{class:`${e}-switch__button`},m(R,o=>m(g,c=>m(S,u=>i(we,null,{default:()=>this.loading?i(me,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(c||o)?i("div",{class:`${e}-switch__button-icon`,key:c?"checked-icon":"icon"},c||o):!this.checked&&(u||o)?i("div",{class:`${e}-switch__button-icon`,key:u?"unchecked-icon":"icon"},u||o):null})))),m(v,o=>o&&i("div",{key:"checked",class:`${e}-switch__checked`},o)),m(k,o=>o&&i("div",{key:"unchecked",class:`${e}-switch__unchecked`},o)))))}});export{Ce as N};
