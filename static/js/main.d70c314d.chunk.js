(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(6),o=a(2),s=(a(13),a(1)),c=a(8),l=a.n(c),d=a(0),u=function(e){var t=e.user;return Object(d.jsx)("a",{className:"UserInfo",href:"mailto:".concat(null===t||void 0===t?void 0:t.email),children:null===t||void 0===t?void 0:t.name},null===t||void 0===t?void 0:t.id)},m=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],j=function(e){var t=e.todo;return Object(d.jsxs)("article",{"data-id":t.id,className:l()("TodoInfo",{"TodoInfo--completed":t.completed}),children:[Object(d.jsx)("h2",{className:"TodoInfo__title",children:t.title}),Object(d.jsx)(u,{user:m.find((function(e){return e.id===t.userId}))})]},t.id)},b=function(e){var t=e.todos;return Object(d.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(d.jsx)(j,{todo:e},e.id)}))})},h=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],O=function(){var e=Object(s.useState)(h),t=Object(o.a)(e,2),a=t[0],n=t[1],i=Object(s.useState)(""),c=Object(o.a)(i,2),l=c[0],u=c[1],j=Object(s.useState)(!0),O=Object(o.a)(j,2),f=O[0],p=O[1],x=Object(s.useState)(0),v=Object(o.a)(x,2),y=v[0],S=v[1],N=Object(s.useState)(!0),I=Object(o.a)(N,2),g=I[0],C=I[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Add todo form"}),Object(d.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){if(e.preventDefault(),""===l.trim()&&p(!1),0===y&&C(!1),""===l.trim()||0===y)return 0;var t={id:Math.max.apply(Math,Object(r.a)(a.map((function(e){return e.id}))))+1,title:l,completed:!1,userId:y};return n((function(e){return[].concat(Object(r.a)(e),[t])})),u(""),S(0),0},children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{htmlFor:"title",children:"Title: "}),Object(d.jsx)("input",{name:"title",type:"text","data-cy":"titleInput",placeholder:"Enter title",value:l,onChange:function(e){p(!0),u(e.target.value)}}),!f&&Object(d.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{htmlFor:"user",children:"User: "}),Object(d.jsxs)("select",{name:"title","data-cy":"userSelect",value:y,onChange:function(e){C(!0),S(+e.target.value)},children:[Object(d.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),m.map((function(e,t){return Object(d.jsx)("option",{value:1+t,children:e.name},e.id)}))]}),!g&&Object(d.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(d.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(d.jsx)(b,{todos:a})]})};i.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.d70c314d.chunk.js.map