import{u as x}from"./useForm-BtNGLut_.js";import{l as A,aW as C}from"./index-CiQlDF9f.js";const T={view:"查看",edit:"编辑",add:"新增"};function S({name:w,initForm:c={},doCreate:g,doDelete:p,doUpdate:h,refresh:u}){const n=A(""),[d,o]=C(),[y,i,r]=x(c);function k(e={},a){s({action:"add",title:a,row:{...c,...e}})}function O(e,a){s({action:"edit",title:a,row:e})}function $(e,a){s({action:"view",title:a,row:e})}function s(e={}){var m;const{action:a,row:t,title:l,onOk:v}=e;n.value=a,i.value={...t},(m=d.value)==null||m.open({...e,async onOk(){return typeof v=="function"?await v():await f()},title:l??(T[n.value]||"")+w})}async function f(e){if(!e&&!["edit","add"].includes(n.value))return!1;await r(),e=e||{add:{api:()=>g(i.value),cb:()=>$message.success("新增成功")},edit:{api:()=>h(i.value),cb:()=>$message.success("保存成功")}}[n.value];try{o.value=!0;const t=await e.api();e.cb(),o.value=!1,t&&u(t)}catch{return o.value=!1,!1}}function b(e,a){if(!e&&e!==0)return;const t=$dialog.warning({content:"确定删除？",title:"提示",positiveText:"确定",negativeText:"取消",async onPositiveClick(){try{t.loading=!0;const l=await p(e);$message.success("删除成功"),t.loading=!1,u(l,!0)}catch{t.loading=!1}},...a})}return{modalRef:d,modalFormRef:y,modalAction:n,modalForm:i,okLoading:o,validation:r,handleAdd:k,handleDelete:b,handleEdit:O,handleView:$,handleOpen:s,handleSave:f}}export{S as u};
