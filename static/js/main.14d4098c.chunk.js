(this["webpackJsonpgoit-react-hw-07-phonebook-createAsyncThunk"]=this["webpackJsonpgoit-react-hw-07-phonebook-createAsyncThunk"]||[]).push([[0],{19:function(t,e,n){t.exports={input:"Filter_input__3M402",label:"Filter_label__cICAe"}},35:function(t,e,n){},36:function(t,e,n){},63:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(14),u=n.n(a),i=(n(35),n(36),n(3)),o=n(9),s=n.n(o),l=n(7),b=n.n(l),j=n(16),d=n(5),f=n(11),p=n.n(f);p.a.defaults.baseURL="https://61bf061fb25c3a00173f4c43.mockapi.io/contacts/";var O=Object(d.c)("contacts/fetchContacts",function(){var t=Object(j.a)(b.a.mark((function t(e,n){var c,r,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,p.a.get("contacts");case 4:return r=t.sent,a=r.data,t.abrupt("return",a);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",c(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),m=Object(d.c)("contacts/deleteContacts",function(){var t=Object(j.a)(b.a.mark((function t(e,n){var c,r,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,p.a.delete("contacts/".concat(e));case 4:return r=t.sent,a=r.data,t.abrupt("return",a.id);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",c(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),h=Object(d.c)("contacts/addContacts",function(){var t=Object(j.a)(b.a.mark((function t(e,n){var c,r,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,p.a.post("contacts",e);case 4:return r=t.sent,a=r.data,t.abrupt("return",a);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",c(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),v=function(t){return t.contacts.items},x=function(t){return t.contacts.filter},_=function(t){return t.contacts.loading},C=function(t){var e=v(t),n=x(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},g=n(1);function N(){var t=Object(i.c)(C),e=Object(i.b)();return Object(g.jsx)("div",{className:s.a.wrapper,children:Object(g.jsx)("ul",{className:s.a.list,children:t.map((function(t){var n=t.id,c=t.name,r=t.number;return Object(g.jsxs)("li",{className:s.a.item,children:[Object(g.jsxs)("p",{className:s.a.text,children:[c,": ",r]}),Object(g.jsx)("button",{type:"button",className:s.a.btn,onClick:function(){return e(m(n))},children:"Delete"})]},n)}))})})}var y=n(20),w=n(8),k=n.n(w);function A(){var t=Object(i.c)(v),e=Object(i.b)(),n=Object(c.useState)(""),r=Object(y.a)(n,2),a=r[0],u=r[1],o=Object(c.useState)(""),s=Object(y.a)(o,2),l=s[0],b=s[1],j=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":u(c);break;case"number":b(c);break;default:return}},d=function(){u(""),b("")};return Object(g.jsxs)("form",{onSubmit:function(n){n.preventDefault(),t.map((function(t){return t.name})).includes(a)?alert("".concat(a," is already in contacts")):e(h({name:a,number:l})),d()},className:k.a.form,children:[Object(g.jsx)("label",{className:k.a.title,htmlFor:"user-name",children:"Name"}),Object(g.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:j,value:a,id:"user-name",className:k.a.input}),Object(g.jsx)("label",{className:k.a.title,htmlFor:"user-number",children:"Number"}),Object(g.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:j,value:l,id:"user-number",className:k.a.input}),Object(g.jsx)("button",{type:"submit",className:k.a.btn,children:"Add Contact"})]})}var L=Object(d.b)("contacts/changeContacts"),F=n(19),E=n.n(F);function S(){var t=Object(i.c)(x),e=Object(i.b)();return Object(g.jsxs)("label",{className:E.a.label,children:["\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0438\u043c\u0435\u043d\u0438",Object(g.jsx)("input",{type:"text",value:t,onChange:function(t){return e(L(t.target.value))},className:E.a.input})]})}function z(){var t=Object(i.b)(),e=Object(i.c)(_);return Object(c.useEffect)((function(){t(O())}),[t]),Object(g.jsxs)("div",{className:"wrapper",children:[Object(g.jsx)("h2",{className:"title",children:"Phonebook"}),Object(g.jsx)(A,{}),Object(g.jsx)("h2",{className:"title",children:"Contacts"}),Object(g.jsx)(S,{}),Object(g.jsx)(N,{}),e&&Object(g.jsx)("h1",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c..."})]})}var B,I,J,W=n(2),q=n(30),M=n(6),T=Object(d.d)([],(B={},Object(W.a)(B,O.fulfilled,(function(t,e){return e.payload})),Object(W.a)(B,h.fulfilled,(function(t,e){return[e.payload].concat(Object(q.a)(t))})),Object(W.a)(B,m.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),B)),U=Object(d.d)("",Object(W.a)({},L,(function(t,e){return e.payload}))),V=Object(d.d)(!1,(I={},Object(W.a)(I,O.pending,(function(){return!0})),Object(W.a)(I,O.fulfilled,(function(){return!1})),Object(W.a)(I,O.rejected,(function(){return!1})),Object(W.a)(I,h.pending,(function(){return!0})),Object(W.a)(I,h.fulfilled,(function(){return!1})),Object(W.a)(I,h.rejected,(function(){return!1})),Object(W.a)(I,m.pending,(function(){return!0})),Object(W.a)(I,m.fulfilled,(function(){return!1})),Object(W.a)(I,m.rejected,(function(){return!1})),I)),Z=Object(d.d)(null,(J={},Object(W.a)(J,O.rejected,(function(t){return console.log(t)})),Object(W.a)(J,O.pending,(function(){return null})),Object(W.a)(J,h.rejected,(function(t){return console.log(t)})),Object(W.a)(J,h.pending,(function(){return null})),Object(W.a)(J,m.rejected,(function(t){return console.log(t)})),Object(W.a)(J,m.pending,(function(){return null})),J)),D=Object(M.b)({items:T,filter:U,loading:V,error:Z}),R=Object(d.a)({reducer:{contacts:D},devTools:!1});u.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(i.a,{store:R,children:Object(g.jsx)(z,{})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={title:"FormEditor_title__8J-Bp",form:"FormEditor_form__2ly39",btn:"FormEditor_btn__18L_I",input:"FormEditor_input__2fIqC"}},9:function(t,e,n){t.exports={list:"ContactList_list__15RjH",item:"ContactList_item__3BShU",btn:"ContactList_btn__3W720",text:"ContactList_text__2UCdC",title:"ContactList_title__3E8pf"}}},[[63,1,2]]]);
//# sourceMappingURL=main.14d4098c.chunk.js.map