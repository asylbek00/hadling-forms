(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{11:function(e,t,r){"use strict";r.r(t);var c=r(4),n=r.n(c),a=(r(9),r(2)),s=r(1),i=r(0),l=function(e){var t=Object(s.useRef)(),r=Object(s.useState)(!0),c=Object(a.a)(r,2),n=c[0],l=c[1],o=Object(s.useState)(""),j=Object(a.a)(o,2),u=(j[0],j[1]),b=Object(s.useState)(!1),m=Object(a.a)(b,2),d=m[0],O=m[1],h=function(){if(l(!0),O(!0),t.current.value.trim().length<3)return l(!1),void O(!1)},v=function(e){var r=t.current.value;if(l(!0),O(!0),u(e.target.value),r.trim().includes("@"))return l(!1),void O(!1);u("")},x=n?"form-control":"form-control invalid";return Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r=t.current.value;if(l(!0),O(!0),u(e.target.value),r.trim().length<3)return l(!1),void O(!1);t.current.value=""},children:[Object(i.jsxs)("div",{className:"control-group",children:[Object(i.jsxs)("div",{className:x,children:[Object(i.jsx)("label",{htmlFor:"name",children:"First Name"}),Object(i.jsx)("input",{type:"text",id:"name",onChange:v,onBlur:h,ref:t}),!n&&Object(i.jsx)("p",{className:"error-text",children:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u043d\u043f\u0443\u0442\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0432\u044b\u0448\u0435 3!"})]}),Object(i.jsxs)("div",{className:x,children:[Object(i.jsx)("label",{htmlFor:"name",children:"Last Name"}),Object(i.jsx)("input",{type:"text",id:"name",onBlur:h,ref:t,onChange:v}),!n&&Object(i.jsx)("p",{className:"error-text",children:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u043d\u043f\u0443\u0442\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0432\u044b\u0448\u0435 3!"})]})]}),Object(i.jsxs)("div",{className:x,children:[Object(i.jsx)("label",{htmlFor:"name",children:"E-Mail Address"}),Object(i.jsx)("input",{type:"email",id:"name",onBlur:h,ref:t,onChange:v}),!n&&Object(i.jsx)("p",{className:"error-text",children:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u043d\u043f\u0443\u0442\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0432\u044b\u0448\u0435 3!"})]}),Object(i.jsx)("div",{className:"form-actions",children:Object(i.jsx)("button",{disabled:!d,children:"Submit"})})]})},o=function(e){var t=Object(s.useRef)(),r=Object(s.useState)(!0),c=Object(a.a)(r,2),n=c[0],l=c[1],o=Object(s.useState)(""),j=Object(a.a)(o,2),u=(j[0],j[1]),b=Object(s.useState)(!1),m=Object(a.a)(b,2),d=m[0],O=m[1],h=n?"form-control":"form-control invalid";return Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r=t.current.value;if(l(!0),O(!0),r.trim().length<5)return l(!1),void O(!1);t.current.value=""},children:[Object(i.jsxs)("div",{className:h,children:[Object(i.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(i.jsx)("input",{type:"text",id:"name",ref:t,onBlur:function(){if(l(!0),O(!0),""===t.current.value.trim())return l(!1),O(!1),void console.log("empty")},onChange:function(e){u(e.target.value);var r=t.current.value;if(l(!0),O(!0),""===r.trim())return l(!1),O(!1),void console.log("empty")}}),!n&&Object(i.jsx)("p",{className:"error-text",children:"Name should be more 5 characters!"})]}),Object(i.jsx)("div",{className:"form-actions",children:Object(i.jsx)("button",{disabled:!d,children:"Submit"})})]})};var j=function(){return Object(i.jsxs)("div",{className:"app",children:[Object(i.jsx)(o,{})," ",Object(i.jsx)("br",{}),Object(i.jsx)("hr",{}),Object(i.jsx)(l,{})]})};n.a.render(Object(i.jsx)(j,{}),document.getElementById("root"))},9:function(e,t,r){}},[[11,1,2]]]);
//# sourceMappingURL=main.e1a6135a.chunk.js.map