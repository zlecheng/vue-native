import{_ as G}from"./AppPage-CXP6ifE_.js";import{b1 as A,aU as H,aW as g,l as K,z as L,A as Q,B as n,I as e,C as t,J as r,E as f,D as d,aY as b,aX as Z,ci as ee,ao as ae,a_ as te,ba as le}from"./index-ByY1MUmQ.js";import{u as B,_ as ne,b as oe}from"./useForm-DbI5Dw97.js";import{_ as se}from"./Avatar--_GTxUUa.js";import{_ as re,a as de}from"./DescriptionsItem-BG4rupPs.js";import{_ as ue}from"./Input-ChV5V0-M.js";import{a as ie}from"./Select-ZTUexSZd.js";import"./TheFooter-Q43lmCYa.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./utils-B7q5C8ne.js";import"./Tag-CWlqptWg.js";import"./Eye-CthB5UBc.js";import"./create-C-N2FVLF.js";const y={changePassword:_=>A.post("/auth/password",_),updateProfile:_=>A.patch(`/user/profile/${_.id}`,_)},pe={class:"ml-20"},_e={class:"flex items-center text-16"},me=r("span",null,"用户名:",-1),fe={class:"ml-12 opacity-80"},ce=r("i",{class:"i-fe:edit mr-4"},null,-1),ve={class:"mt-16 flex items-center"},we=r("span",{class:"ml-12 opacity-60"}," 修改头像只支持在线链接，不提供上传图片功能，如有需要可自行对接！ ",-1),ge=r("i",{class:"i-fe:edit mr-4"},null,-1),Se={__name:"index",setup(_){var U,I,R;const o=H(),k={required:!0,message:"此为必填项",trigger:["blur","change"]},[x]=g(),[C,u,V]=B();async function q(){await V(),await y.changePassword(u.value),$message.success("密码修改成功"),v()}const m=K(o.avatar),[P]=g();async function O(){if(!m.value)return $message.error("请输入头像地址"),!1;await y.updateProfile({id:o.userId,avatar:m.value}),$message.success("头像修改成功"),v()}const $=[{label:"保密",value:0},{label:"男",value:1},{label:"女",value:2}],[h]=g(),[z,s,D]=B({id:o.userId,nickName:o.nickName,gender:((U=o.userInfo)==null?void 0:U.gender)??0,address:(I=o.userInfo)==null?void 0:I.address,email:(R=o.userInfo)==null?void 0:R.email});async function E(){await D(),await y.updateProfile(s.value),$message.success("资料修改成功"),v()}async function v(){const N=await ee();o.setUser(N)}return(N,l)=>{const J=se,w=ae,T=te,F=le,c=re,W=de,i=ue,p=ne,M=oe,X=ie,Y=G;return L(),Q(Y,{"show-footer":""},{default:n(()=>[e(F,null,{default:n(()=>[e(T,{align:"center"},{default:n(()=>[e(J,{round:"",size:100,src:t(o).avatar},null,8,["src"]),r("div",pe,[r("div",_e,[me,r("span",fe,f(t(o).username),1),e(w,{class:"ml-32",type:"primary",text:"",onClick:l[0]||(l[0]=a=>t(x).open())},{default:n(()=>[ce,d(" 修改密码 ")]),_:1})]),r("div",ve,[e(w,{type:"primary",ghost:"",onClick:l[1]||(l[1]=a=>t(P).open())},{default:n(()=>[d(" 更改头像 ")]),_:1}),we])])]),_:1})]),_:1}),e(F,{class:"mt-20",title:"个人资料信息"},{"header-extra":n(()=>[e(w,{type:"primary",text:"",onClick:l[2]||(l[2]=a=>t(h).open())},{default:n(()=>[ge,d(" 修改资料 ")]),_:1})]),default:n(()=>[e(W,{"label-placement":"left","label-style":{width:"200px",textAlign:"center"},column:1,bordered:""},{default:n(()=>[e(c,{label:"昵称"},{default:n(()=>[d(f(t(o).nickName),1)]),_:1}),e(c,{label:"性别"},{default:n(()=>{var a;return[d(f(((a=$.find(j=>{var S;return j.value===((S=t(o).userInfo)==null?void 0:S.gender)}))==null?void 0:a.label)??"未知"),1)]}),_:1}),e(c,{label:"地址"},{default:n(()=>{var a;return[d(f((a=t(o).userInfo)==null?void 0:a.address),1)]}),_:1}),e(c,{label:"邮箱"},{default:n(()=>{var a;return[d(f((a=t(o).userInfo)==null?void 0:a.email),1)]}),_:1})]),_:1})]),_:1}),e(t(b),{ref_key:"avatarModalRef",ref:P,width:"420px",title:"更改头像",onOk:l[4]||(l[4]=a=>O())},{default:n(()=>[e(i,{value:t(m),"onUpdate:value":l[3]||(l[3]=a=>Z(m)?m.value=a:null)},null,8,["value"])]),_:1},512),e(t(b),{ref_key:"pwdModalRef",ref:x,title:"修改密码",width:"420px",onOk:l[7]||(l[7]=a=>q())},{default:n(()=>[e(M,{ref_key:"pwdFormRef",ref:C,model:t(u),"label-placement":"left","require-mark-placement":"left"},{default:n(()=>[e(p,{label:"原密码",path:"oldPassword",rule:k},{default:n(()=>[e(i,{value:t(u).oldPassword,"onUpdate:value":l[5]||(l[5]=a=>t(u).oldPassword=a),type:"password",placeholder:"请输入原密码"},null,8,["value"])]),_:1}),e(p,{label:"新密码",path:"newPassword",rule:k},{default:n(()=>[e(i,{value:t(u).newPassword,"onUpdate:value":l[6]||(l[6]=a=>t(u).newPassword=a),type:"password",placeholder:"请输入新密码"},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},512),e(t(b),{ref_key:"profileModalRef",ref:h,title:"修改资料",width:"420px",onOk:l[12]||(l[12]=a=>E())},{default:n(()=>[e(M,{ref_key:"profileFormRef",ref:z,model:t(s),"label-placement":"left"},{default:n(()=>[e(p,{label:"昵称",path:"nickName"},{default:n(()=>[e(i,{value:t(s).nickName,"onUpdate:value":l[8]||(l[8]=a=>t(s).nickName=a),placeholder:"请输入昵称"},null,8,["value"])]),_:1}),e(p,{label:"性别",path:"gender"},{default:n(()=>[e(X,{value:t(s).gender,"onUpdate:value":l[9]||(l[9]=a=>t(s).gender=a),options:$,placeholder:"请选择性别"},null,8,["value"])]),_:1}),e(p,{label:"地址",path:"address"},{default:n(()=>[e(i,{value:t(s).address,"onUpdate:value":l[10]||(l[10]=a=>t(s).address=a),placeholder:"请输入地址"},null,8,["value"])]),_:1}),e(p,{label:"邮箱",path:"email"},{default:n(()=>[e(i,{value:t(s).email,"onUpdate:value":l[11]||(l[11]=a=>t(s).email=a),placeholder:"请输入邮箱"},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},512)]),_:1})}}};export{Se as default};
