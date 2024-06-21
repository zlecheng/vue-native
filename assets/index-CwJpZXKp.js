import{_ as Z}from"./CommonPage-BXvFE4Uc.js";import{bk as ee,bQ as oe,bR as R,bS as $,c as A,d as g,b as D,aR as re,a as le,e as te,u as ne,f as Q,bL as ae,h as K,aA as se,ad as _,i as ie,l as N,j as a,aq as ce,at as de,s as ue,ar as me,bf as pe,be as fe,bc as be,bd as ge,aB as ve,aO as he,b1 as E,o as Ce,bT as _e,z as B,A as H,B as m,al as ye,C as o,ao as L,D as O,I as f,aX as xe,aY as Ie,aK as U,J as ke}from"./index-BQFhm18y.js";import{f as ze}from"./common-uLsPWwnQ.js";import{u as Re}from"./useCrud-Bf_ONyNn.js";import{_ as $e}from"./index-CSvN0TV1.js";import{_ as M}from"./QueryItem-BiYrk7Xq.js";import{N as J}from"./Switch-DZh_FOzZ.js";import{_ as we}from"./Avatar-CwgxQesM.js";import{N as Se}from"./Tag-XcbKKxh9.js";import{_ as Te}from"./Input-D7Nhhjzj.js";import{a as Pe}from"./Select-BfAK0Sh_.js";import{_ as Ae,b as Ee}from"./useForm-LybGlgPA.js";import"./TheFooter-DzPHSUs0.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AppCard-DeirnzYY.js";import"./Checkbox-C9XwupZp.js";import"./Dropdown-CKg0gHUS.js";import"./create-D2jlQwuI.js";import"./Eye-C1RVOemb.js";import"./download-sglA049O.js";import"./utils-DG_YTfWA.js";const Be=t=>{const{lineHeight:l,borderRadius:c,fontWeightStrong:y,baseColor:p,dividerColor:x,actionColor:W,textColor1:i,textColor2:n,closeColorHover:v,closeColorPressed:I,closeIconColor:k,closeIconColorHover:h,closeIconColorPressed:u,infoColor:s,successColor:S,warningColor:z,errorColor:e,fontSize:r}=t;return Object.assign(Object.assign({},oe),{fontSize:r,lineHeight:l,titleFontWeight:y,borderRadius:c,border:`1px solid ${x}`,color:W,titleTextColor:i,iconColor:n,contentTextColor:n,closeBorderRadius:c,closeColorHover:v,closeColorPressed:I,closeIconColor:k,closeIconColorHover:h,closeIconColorPressed:u,borderInfo:`1px solid ${R(p,$(s,{alpha:.25}))}`,colorInfo:R(p,$(s,{alpha:.08})),titleTextColorInfo:i,iconColorInfo:s,contentTextColorInfo:n,closeColorHoverInfo:v,closeColorPressedInfo:I,closeIconColorInfo:k,closeIconColorHoverInfo:h,closeIconColorPressedInfo:u,borderSuccess:`1px solid ${R(p,$(S,{alpha:.25}))}`,colorSuccess:R(p,$(S,{alpha:.08})),titleTextColorSuccess:i,iconColorSuccess:S,contentTextColorSuccess:n,closeColorHoverSuccess:v,closeColorPressedSuccess:I,closeIconColorSuccess:k,closeIconColorHoverSuccess:h,closeIconColorPressedSuccess:u,borderWarning:`1px solid ${R(p,$(z,{alpha:.33}))}`,colorWarning:R(p,$(z,{alpha:.08})),titleTextColorWarning:i,iconColorWarning:z,contentTextColorWarning:n,closeColorHoverWarning:v,closeColorPressedWarning:I,closeIconColorWarning:k,closeIconColorHoverWarning:h,closeIconColorPressedWarning:u,borderError:`1px solid ${R(p,$(e,{alpha:.25}))}`,colorError:R(p,$(e,{alpha:.08})),titleTextColorError:i,iconColorError:e,contentTextColorError:n,closeColorHoverError:v,closeColorPressedError:I,closeIconColorError:k,closeIconColorHoverError:h,closeIconColorPressedError:u})},He={name:"Alert",common:ee,self:Be},We=A("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[g("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),D("closable",[A("alert-body",[g("title",`
 padding-right: 24px;
 `)])]),g("icon",{color:"var(--n-icon-color)"}),A("alert-body",{padding:"var(--n-padding)"},[g("title",{color:"var(--n-title-text-color)"}),g("content",{color:"var(--n-content-text-color)"})]),re({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),g("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),g("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),D("show-icon",[A("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),D("right-adjust",[A("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),A("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[g("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[le("& +",[g("content",{marginTop:"9px"})])]),g("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),g("icon",{transition:"color .3s var(--n-bezier)"})]),Le=Object.assign(Object.assign({},Q.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),Oe=te({name:"Alert",inheritAttrs:!1,props:Le,setup(t){const{mergedClsPrefixRef:l,mergedBorderedRef:c,inlineThemeDisabled:y,mergedRtlRef:p}=ne(t),x=Q("Alert","-alert",We,He,t,l),W=ae("Alert",p,l),i=K(()=>{const{common:{cubicBezierEaseInOut:u},self:s}=x.value,{fontSize:S,borderRadius:z,titleFontWeight:e,lineHeight:r,iconSize:b,iconMargin:T,iconMarginRtl:P,closeIconSize:j,closeBorderRadius:F,closeSize:V,closeMargin:q,closeMarginRtl:d,padding:X}=s,{type:C}=t,{left:Y,right:G}=se(T);return{"--n-bezier":u,"--n-color":s[_("color",C)],"--n-close-icon-size":j,"--n-close-border-radius":F,"--n-close-color-hover":s[_("closeColorHover",C)],"--n-close-color-pressed":s[_("closeColorPressed",C)],"--n-close-icon-color":s[_("closeIconColor",C)],"--n-close-icon-color-hover":s[_("closeIconColorHover",C)],"--n-close-icon-color-pressed":s[_("closeIconColorPressed",C)],"--n-icon-color":s[_("iconColor",C)],"--n-border":s[_("border",C)],"--n-title-text-color":s[_("titleTextColor",C)],"--n-content-text-color":s[_("contentTextColor",C)],"--n-line-height":r,"--n-border-radius":z,"--n-font-size":S,"--n-title-font-weight":e,"--n-icon-size":b,"--n-icon-margin":T,"--n-icon-margin-rtl":P,"--n-close-size":V,"--n-close-margin":q,"--n-close-margin-rtl":d,"--n-padding":X,"--n-icon-margin-left":Y,"--n-icon-margin-right":G}}),n=y?ie("alert",K(()=>t.type[0]),i,t):void 0,v=N(!0),I=()=>{const{onAfterLeave:u,onAfterHide:s}=t;u&&u(),s&&s()};return{rtlEnabled:W,mergedClsPrefix:l,mergedBordered:c,visible:v,handleCloseClick:()=>{var u;Promise.resolve((u=t.onClose)===null||u===void 0?void 0:u.call(t)).then(s=>{s!==!1&&(v.value=!1)})},handleAfterLeave:()=>{I()},mergedTheme:x,cssVars:y?void 0:i,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var t;return(t=this.onRender)===null||t===void 0||t.call(this),a(he,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:l,$slots:c}=this,y={class:[`${l}-alert`,this.themeClass,this.closable&&`${l}-alert--closable`,this.showIcon&&`${l}-alert--show-icon`,!this.title&&this.closable&&`${l}-alert--right-adjust`,this.rtlEnabled&&`${l}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?a("div",Object.assign({},ce(this.$attrs,y)),this.closable&&a(de,{clsPrefix:l,class:`${l}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&a("div",{class:`${l}-alert__border`}),this.showIcon&&a("div",{class:`${l}-alert__icon`,"aria-hidden":"true"},ue(c.icon,()=>[a(me,{clsPrefix:l},{default:()=>{switch(this.type){case"success":return a(ge,null);case"info":return a(be,null);case"warning":return a(fe,null);case"error":return a(pe,null);default:return null}}})])),a("div",{class:[`${l}-alert-body`,this.mergedBordered&&`${l}-alert-body--bordered`]},ve(c.header,p=>{const x=p||this.title;return x?a("div",{class:`${l}-alert-body__title`},x):null}),c.default&&a("div",{class:`${l}-alert-body__content`},c))):null}})}}),w={create:t=>E.post("/user",t),read:(t={})=>E.get("/user",{params:t}),update:t=>E.patch(`/user/${t.id}`,t),delete:t=>E.delete(`/user/${t}`),resetPwd:(t,l)=>E.patch(`/user/password/reset/${t}`,l),getAllRoles:()=>E.get("/role?enable=1")},Ue=ke("i",{class:"i-material-symbols:add mr-4 text-18"},null,-1),so=Object.assign({name:"UserMgt"},{__name:"index",setup(t){const l=N(null),c=N({});Ce(()=>{var e;(e=l.value)==null||e.handleSearch()});const y=[{label:"男",value:1},{label:"女",value:2}],p=N([]);w.getAllRoles().then(({data:e=[]})=>p.value=e);const{modalRef:x,modalFormRef:W,modalForm:i,modalAction:n,handleAdd:v,handleDelete:I,handleOpen:k,handleSave:h}=Re({name:"用户",initForm:{enable:!0},doCreate:w.create,doDelete:w.delete,doUpdate:w.update,refresh:()=>{var e;return(e=l.value)==null?void 0:e.handleSearch()}}),u=[{title:"头像",key:"avatar",width:80,render:({avatar:e})=>a(we,{size:"medium",src:e})},{title:"用户名",key:"username",width:150,ellipsis:{tooltip:!0}},{title:"角色",key:"roles",width:200,ellipsis:{tooltip:!0},render:({roles:e})=>e!=null&&e.length?e.map((r,b)=>a(Se,{type:"success",style:b>0?"margin-left: 8px;":""},{default:()=>r.name})):"暂无角色"},{title:"性别",key:"gender",width:80,render:({gender:e})=>{var r;return((r=y.find(b=>e===b.value))==null?void 0:r.label)??""}},{title:"邮箱",key:"email",width:150,ellipsis:{tooltip:!0}},{title:"创建时间",key:"createDate",width:180,render(e){return a("span",ze(e.createTime))}},{title:"状态",key:"enable",width:120,render:e=>a(J,{size:"small",rubberBand:!1,value:e.enable,loading:!!e.enableLoading,onUpdateValue:()=>s(e)},{checked:()=>"启用",unchecked:()=>"停用"})},{title:"操作",key:"actions",width:320,align:"right",fixed:"right",hideInExcel:!0,render(e){return[a(L,{size:"small",type:"primary",secondary:!0,onClick:()=>S(e)},{default:()=>"分配角色",icon:()=>a("i",{class:"i-carbon:user-role text-14"})}),a(L,{size:"small",type:"primary",style:"margin-left: 12px;",onClick:()=>k({action:"reset",title:"重置密码",row:e,onOk:z})},{default:()=>"重置密码",icon:()=>a("i",{class:"i-radix-icons:reset text-14"})}),a(L,{size:"small",type:"error",style:"margin-left: 12px;",onClick:()=>I(e.id)},{default:()=>"删除",icon:()=>a("i",{class:"i-material-symbols:delete-outline text-14"})})]}}];async function s(e){var r;e.enableLoading=!0;try{await w.update({id:e.id,enable:!e.enable}),e.enableLoading=!1,$message.success("操作成功"),(r=l.value)==null||r.handleSearch()}catch{e.enableLoading=!1}}function S(e){const r=e.roles.map(b=>b.id);k({action:"setRole",title:"分配角色",row:{id:e.id,username:e.username,roleIds:r},onOk:z})}function z(){if(n.value==="setRole")return h({api:()=>w.update(i.value),cb:()=>$message.success("分配成功")});if(n.value==="reset")return h({api:()=>w.resetPwd(i.value.id,i.value),cb:()=>$message.success("密码重置成功")});h()}return(e,r)=>{const b=Te,T=Pe,P=Ae,j=Ee,F=Oe,V=Z,q=_e("permission");return B(),H(V,null,{action:m(()=>[ye((B(),H(o(L),{type:"primary",onClick:r[0]||(r[0]=d=>o(v)())},{default:m(()=>[Ue,O(" 创建新用户 ")]),_:1})),[[q,"AddUser"]])]),default:m(()=>[f(o($e),{ref_key:"$table",ref:l,"query-items":o(c),"onUpdate:queryItems":r[4]||(r[4]=d=>xe(c)?c.value=d:null),"scroll-x":1200,columns:u,"get-data":o(w).read},{default:m(()=>[f(o(M),{label:"用户名","label-width":50},{default:m(()=>[f(b,{value:o(c).username,"onUpdate:value":r[1]||(r[1]=d=>o(c).username=d),type:"text",placeholder:"请输入用户名",clearable:""},null,8,["value"])]),_:1}),f(o(M),{label:"性别","label-width":50},{default:m(()=>[f(T,{value:o(c).gender,"onUpdate:value":r[2]||(r[2]=d=>o(c).gender=d),clearable:"",options:y},null,8,["value"])]),_:1}),f(o(M),{label:"状态","label-width":50},{default:m(()=>[f(T,{value:o(c).enable,"onUpdate:value":r[3]||(r[3]=d=>o(c).enable=d),clearable:"",options:[{label:"启用",value:1},{label:"停用",value:0}]},null,8,["value"])]),_:1})]),_:1},8,["query-items","get-data"]),f(o(Ie),{ref_key:"modalRef",ref:x,width:"520px"},{default:m(()=>[f(j,{ref_key:"modalFormRef",ref:W,"label-placement":"left","label-align":"left","label-width":80,model:o(i),disabled:o(n)==="view"},{default:m(()=>[f(P,{label:"用户名",path:"username",rule:{required:!0,message:"请输入用户名",trigger:["input","blur"]}},{default:m(()=>[f(b,{value:o(i).username,"onUpdate:value":r[5]||(r[5]=d=>o(i).username=d),disabled:o(n)!=="add"},null,8,["value","disabled"])]),_:1}),["add","reset"].includes(o(n))?(B(),H(P,{key:0,label:o(n)==="reset"?"重置密码":"初始密码",path:"password",rule:{required:!0,message:"请输入密码",trigger:["input","blur"]}},{default:m(()=>[f(b,{value:o(i).password,"onUpdate:value":r[6]||(r[6]=d=>o(i).password=d)},null,8,["value"])]),_:1},8,["label"])):U("",!0),["add","setRole"].includes(o(n))?(B(),H(P,{key:1,label:"角色",path:"roleIds"},{default:m(()=>[f(T,{value:o(i).roleIds,"onUpdate:value":r[7]||(r[7]=d=>o(i).roleIds=d),options:o(p),"label-field":"name","value-field":"id",clearable:"",filterable:"",multiple:""},null,8,["value","options"])]),_:1})):U("",!0),o(n)==="add"?(B(),H(P,{key:2,label:"状态",path:"enable"},{default:m(()=>[f(o(J),{value:o(i).enable,"onUpdate:value":r[8]||(r[8]=d=>o(i).enable=d)},{checked:m(()=>[O(" 启用 ")]),unchecked:m(()=>[O(" 停用 ")]),_:1},8,["value"])]),_:1})):U("",!0)]),_:1},8,["model","disabled"]),o(n)==="add"?(B(),H(F,{key:0,type:"warning",closable:""},{default:m(()=>[O(" 详细信息需由用户本人补充修改 ")]),_:1})):U("",!0)]),_:1},512)]),_:1})}}});export{so as default};
