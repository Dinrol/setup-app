(this["webpackJsonpsetup-app"]=this["webpackJsonpsetup-app"]||[]).push([[0],{77:function(e,t,a){},78:function(e,t,a){},84:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a(0),r=a.n(i),s=a(10),c=a.n(s),l=(a(77),a(21)),o=a(48),d=a(44),u=a(96),j=a(134),m=a(94),b=a(143),h=a(135),p=a(136),O=(a(78),a(130)),x=Object(O.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"90%"}},button:{margin:e.spacing(1)}}}));function f(e){var t=e.setUserList,a=e.userList,r=e.setViewAddUserForm,s=Object(i.useState)(a.length?+a[a.length-1].id+1:0),c=Object(l.a)(s,2),o=c[0],O=c[1];var f=x();return Object(n.jsxs)("form",{onSubmit:function(e){var a=new FormData(e.target),n=JSON.parse(localStorage.getItem("users")||"[]"),i={};e.preventDefault();var s,c=Object(d.a)(a.entries());try{for(c.s();!(s=c.n()).done;){var l=s.value;"id"===l[0]&&0===o&&O(o+1),i[l[0]]=l[1],O(o+1)}}catch(u){c.e(u)}finally{c.f()}n.push(i),localStorage.setItem("users",JSON.stringify(n)),t(n),r()},className:"add-user-form ".concat(f.root),children:[Object(n.jsx)("input",{type:"hidden",name:"id",value:o}),Object(n.jsx)("input",{type:"hidden",name:"dateCrate",value:new Date}),Object(n.jsx)(u.a,{htmlFor:"username",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f:"}),Object(n.jsx)(j.a,{variant:"outlined",id:"username",name:"username",placeholder:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",type:"text",required:!0}),Object(n.jsx)(u.a,{htmlFor:"email",children:" \u0412\u0432\u0435\u0434\u0438\u0442\u0435 email: "}),Object(n.jsx)(j.a,{id:"email",placeholder:"Email",variant:"outlined",name:"email",type:"email",required:!0}),Object(n.jsx)(u.a,{htmlFor:"password",children:" \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c: "}),Object(n.jsx)(j.a,{id:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",variant:"outlined",name:"password",type:"password",required:!0}),Object(n.jsx)(u.a,{htmlFor:"telephone",children:" \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430: "}),Object(n.jsx)(j.a,{id:"telephone",variant:"outlined",name:"telephone",type:"tel",placeholder:"+7(999) 999-9999",required:!0}),Object(n.jsx)(u.a,{children:" \u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441: "}),Object(n.jsxs)(m.a,{name:"status",required:!0,children:[Object(n.jsx)(b.a,{value:"client",children:"\u041a\u043b\u0438\u0435\u043d\u0442"}),Object(n.jsx)(b.a,{value:"admin",children:"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440"}),Object(n.jsx)(b.a,{value:"partner",children:"\u041f\u0430\u0440\u0442\u043d\u0435\u0440"})]}),Object(n.jsx)("br",{}),Object(n.jsx)(h.a,{variant:"contained",color:"primary",className:f.button,endIcon:Object(n.jsx)(p.a,{children:"send"}),type:"submit",children:"Send"})]})}a(84);var v=a(137),g=a(138),y=a(139),S=a(62),w=a.n(S),N=a(60),I=a.n(N),F=a(61),k=a.n(F),C=Object(O.a)((function(e){return{root:{minWidth:275,maxWidth:375,marginBottom:20},editMode:{"& > *":{margin:e.spacing(1),width:"90%"}},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},button:{margin:"20px 0 0"},buttonSave:{margin:e.spacing(1)}}}));function L(e){var t=e.username,a=e.email,r=e.status,s=e.telephone,c=e.id,o=e.setUserList,p=Object(i.useState)(!1),O=Object(l.a)(p,2),x=O[0],f=O[1],S=C();return Object(n.jsx)(v.a,{className:S.root,variant:"outlined",children:Object(n.jsxs)(g.a,{children:[!x&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(y.a,{children:["\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: ",t]}),Object(n.jsxs)(y.a,{children:["Email: ",a]}),Object(n.jsxs)(y.a,{children:["\u0421\u0442\u0430\u0442\u0443\u0441: ",r]}),Object(n.jsxs)(y.a,{children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d: ",s]}),Object(n.jsx)(I.a,{className:"edit-icon",onClick:function(){return f(!0)}}),Object(n.jsx)(k.a,{className:"delete-icon",onClick:function(){var e=JSON.parse(localStorage.getItem("users")||"[]");e.forEach((function(t,a){c===t.id&&e.splice(a,1)})),localStorage.setItem("users",JSON.stringify(e)),o(e)}})]}),x&&Object(n.jsxs)("form",{onSubmit:function(e){var t=new FormData(e.target),a=JSON.parse(localStorage.getItem("users")||"[]");e.preventDefault(),a.forEach((function(e){if(c===e.id){var a,n=Object(d.a)(t.entries());try{for(n.s();!(a=n.n()).done;){var i=a.value;e[i[0]]=i[1]}}catch(r){n.e(r)}finally{n.f()}}})),localStorage.setItem("users",JSON.stringify(a)),o(a),f(!1)},className:S.editMode,children:[Object(n.jsx)("input",{type:"hidden",name:"dateEdit",value:new Date}),Object(n.jsx)(u.a,{htmlFor:"username",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f:"}),Object(n.jsx)(j.a,{variant:"outlined",defaultValue:t,id:"username",name:"username",placeholder:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",type:"text",required:!0}),Object(n.jsx)(u.a,{htmlFor:"email",children:" \u0412\u0432\u0435\u0434\u0438\u0442\u0435 email: "}),Object(n.jsx)(j.a,{id:"email",defaultValue:a,placeholder:"Email",variant:"outlined",name:"email",type:"email",required:!0}),Object(n.jsx)(u.a,{htmlFor:"telephone",children:" \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430: "}),Object(n.jsx)(j.a,{id:"telephone",defaultValue:s,variant:"outlined",name:"telephone",type:"tel",placeholder:"+7(999) 999-9999",required:!0}),Object(n.jsx)(u.a,{children:" \u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441: "}),Object(n.jsxs)(m.a,{name:"status",defaultValue:r,required:!0,children:[Object(n.jsx)(b.a,{value:"client",children:"\u041a\u043b\u0438\u0435\u043d\u0442"}),Object(n.jsx)(b.a,{value:"admin",children:"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440"}),Object(n.jsx)(b.a,{value:"partner",children:"\u041f\u0430\u0440\u0442\u043d\u0435\u0440"})]}),Object(n.jsx)(h.a,{variant:"contained",color:"primary",className:S.buttonSave,startIcon:Object(n.jsx)(w.a,{}),type:"submit",children:"Save"}),Object(n.jsx)(h.a,{variant:"contained",onClick:function(){return f(!1)},children:"\u041e\u0442\u043c\u0435\u043d\u0430"})]})]})})}a(86);var q=a(15),E=a(63),J=a.n(E),U=a(140),D=a(141),B=a(142),V=a(66),A=a(91),R=a(92),W=Object(O.a)((function(e){return{root:{flexGrow:1,marginBottom:10},title:Object(o.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(o.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(q.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(q.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2},inputRoot:{color:"inherit"},inputInput:Object(o.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),paddingRight:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%",textOverflow:"ellipsis"},e.breakpoints.up("sm"),{width:"30ch"}),selectEmpty:{marginTop:e.spacing(2)},formControl:{margin:e.spacing(1),minWidth:120},btnAddUser:{height:55,margin:e.spacing(1)}}}));var z=function(){var e=JSON.parse(localStorage.getItem("users")||"[]"),t=Object(i.useState)(e),a=Object(l.a)(t,2),s=a[0],c=a[1],o=Object(i.useState)(!1),d=Object(l.a)(o,2),j=d[0],p=d[1],O=r.a.useState(""),x=Object(l.a)(O,2),v=x[0],g=x[1],S=W();return Object(n.jsxs)(U.a,{maxWidth:"lg",children:[Object(n.jsx)("div",{className:S.root,children:Object(n.jsx)(D.a,{position:"static",children:Object(n.jsxs)(B.a,{children:[Object(n.jsx)(y.a,{className:S.title,variant:"h6",noWrap:!0,children:"Admin panel"}),Object(n.jsxs)("div",{className:S.search,children:[Object(n.jsx)("div",{className:S.searchIcon,onClick:function(){var t=document.getElementById("site-search");if(""!==t.value){var a=e.filter((function(e){return t.value===e.email||t.value===e.telephone}));c(a)}else c(e)},children:Object(n.jsx)(J.a,{})}),Object(n.jsx)(V.a,{id:"site-search",placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e email \u0438\u043b\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443",classes:{root:S.inputRoot,input:S.inputInput},inputProps:{"aria-label":"search"}})]})]})})}),Object(n.jsxs)("div",{className:"top",children:[Object(n.jsxs)(A.a,{variant:"outlined",className:S.formControl,children:[Object(n.jsx)(u.a,{id:"demo-simple-select-outlined-label",children:"\u0421\u0442\u0430\u0442\u0443\u0441"}),Object(n.jsxs)(m.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:v,onChange:function(t){var a=t.target.value;if(g(a),"all"!==a){var n=e.filter((function(e){return e.status===a}));c(n)}else c(e)},label:"\u0421\u0442\u0430\u0442\u0443\u0441",children:[Object(n.jsx)(b.a,{value:"all",children:"\u0412\u0441\u0435"}),Object(n.jsx)(b.a,{value:"client",children:"\u041a\u043b\u0438\u0435\u043d\u0442"}),Object(n.jsx)(b.a,{value:"admin",children:"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440"}),Object(n.jsx)(b.a,{value:"partner",children:"\u041f\u0430\u0440\u0442\u043d\u0435\u0440"})]}),Object(n.jsx)(R.a,{children:"\u041e\u0442\u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e \u0441\u0442\u0430\u0442\u0443\u0441\u0443"})]}),Object(n.jsx)(h.a,{variant:"outlined",className:S.btnAddUser,size:"small",color:"primary",onClick:function(){return p(!j)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"})]}),Object(n.jsx)("div",{className:"form",children:j&&Object(n.jsx)(f,{userList:s,setUserList:function(e){return c(e)},setViewAddUserForm:function(){return p(!1)}})}),Object(n.jsx)("div",{className:"users-block",children:s&&s.map((function(e){return Object(n.jsx)(L,{username:e.username,telephone:e.telephone,status:e.status,email:e.email,id:e.id,setUserList:function(e){return c(e)}},e.id)}))})]})},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,144)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),r(e),s(e)}))};c.a.render(Object(n.jsx)(z,{}),document.getElementById("root")),P()}},[[87,1,2]]]);
//# sourceMappingURL=main.184a59e9.chunk.js.map