import{l as y,z as w,F as B,I as n,B as k,J as p,C as u,aX as C,ao as d,D,j as c,aJ as x,a_ as z}from"./index-BQFhm18y.js";import{_ as N,a as R}from"./ResAddOrEdit-DANEcOob.js";import{_ as T}from"./Tree-DMJcmur3.js";import{_ as V}from"./Input-D7Nhhjzj.js";import"./_isme_icons-CUZYZBf_.js";import"./QuestionLabel-D_IHMj9N.js";import"./useForm-LybGlgPA.js";import"./Eye-C1RVOemb.js";import"./create-D2jlQwuI.js";import"./Select-BfAK0Sh_.js";import"./Tag-XcbKKxh9.js";import"./Switch-DZh_FOzZ.js";import"./InputNumber-BdwdED7Z.js";import"./Add-Bogf4eq8.js";import"./Checkbox-C9XwupZp.js";const j=p("h3",null,"菜单",-1),A={class:"flex"},E=p("i",{class:"i-material-symbols:add mr-4 text-14"},null,-1),Y={__name:"MenuTree",props:{treeData:{type:Array,default:()=>[]},currentMenu:{type:Object,default:()=>null}},emits:["refresh","update:currentMenu"],setup(l,{emit:h}){const a=h,r=y(""),m=y(null);async function f(e={}){var t;(t=m.value)==null||t.handleOpen({action:"add",title:"新增菜单",row:{type:"MENU",...e},okText:"保存"})}function M(e,t,{action:o,node:i}){a("update:currentMenu",o==="select"?i:null)}function v({option:e}){return c("i",{class:`${e.icon}?mask text-16`})}function g({option:e}){return[c(d,{text:!0,type:"primary",title:"新增下级菜单",size:"tiny",onClick:x(()=>f({parentId:e.id}),["stop"])},{default:()=>"新增"}),c(d,{text:!0,type:"error",size:"tiny",style:"margin-left: 12px;",onClick:x(()=>$(e),["stop"])},{default:()=>"删除"})]}function $(e){$dialog.confirm({content:`确认删除【${e.name}】？`,async confirm(){try{$message.loading("正在删除",{key:"deleteMenu"}),await R.deletePermission(e.id),$message.success("删除成功",{key:"deleteMenu"}),a("refresh"),a("update:currentMenu",null)}catch{$message.destroy("deleteMenu")}}})}return(e,t)=>{const o=V,i=T,b=z;return w(),B("div",null,[n(b,{vertical:"",size:12},{default:k(()=>{var s;return[j,p("div",A,[n(o,{value:u(r),"onUpdate:value":t[0]||(t[0]=_=>C(r)?r.value=_:null),placeholder:"搜索",clearable:""},null,8,["value"]),n(u(d),{class:"ml-12",type:"primary",onClick:t[1]||(t[1]=_=>f())},{default:k(()=>[E,D(" 新增 ")]),_:1})]),n(i,{"show-irrelevant-nodes":!1,pattern:u(r),data:l.treeData,"selected-keys":[(s=l.currentMenu)==null?void 0:s.code],"render-prefix":v,"render-suffix":g,"on-update:selected-keys":M,"key-field":"code","label-field":"name","default-expand-all":"","block-line":""},null,8,["pattern","data","selected-keys"])]}),_:1}),n(N,{ref_key:"modalRef",ref:m,menus:l.treeData,onRefresh:t[2]||(t[2]=s=>a("refresh",s))},null,8,["menus"])])}}};export{Y as default};
