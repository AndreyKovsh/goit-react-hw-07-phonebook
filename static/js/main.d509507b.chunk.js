(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{46:function(t,e,n){},67:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(0),a=n.n(r),o=n(9),u=n.n(o),b=n(6),i=(n(46),n(30)),j=n(31),s=n(35),O=n(34),l=function(t){var e=t.children;return Object(c.jsx)("div",{children:e})},d=n(19),f=n(7),h=(n(18),n(32),n(11)),m=n.n(h),p=n(2),x=Object(p.b)("contacts/fetchcontactsRequest"),v=Object(p.b)("contacts/fetchcontactsSuccess"),C=Object(p.b)("contacts/fetchContactsError"),g=Object(p.b)("contacts/addContactRequest"),y=Object(p.b)("contacts/addContactSuccess"),k=Object(p.b)("contacts/addContactError"),w=Object(p.b)("contacts/deleteContactRequest"),S=Object(p.b)("contacts/deleteContactSuccess"),F=Object(p.b)("contacts/deleteContactError"),E=Object(p.b)("contacs/changeFilter");m.a.defaults.baseURL="http://localhost:4040";var L=function(t,e){return function(n){var c={name:t,number:e};n(g),m.a.post("/contacts",c).then((function(t){var e=t.data;return n(y(e))})).catch((function(t){return n(k(t))}))}},P=function(t){return function(e){e(w()),m.a.delete("/contacts/".concat(t)).then((function(){return e(S(t))})).catch((function(t){return e(F(t))}))}},R=function(t){return t.contacts.items},q=function(t){return t.contacts.filter},A=function(t){var e=R(t),n=q(t).toLowerCase();return e.filter((function(t){var e=t.name;return e&&e.toLowerCase&&e.toLowerCase().includes(n)}))};var T=function(){var t=Object(b.b)(),e=Object(b.c)(R),n=Object(r.useState)(""),a=Object(d.a)(n,2),o=a[0],u=a[1],i=Object(r.useState)(""),j=Object(d.a)(i,2),s=j[0],O=j[1],l=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":u(c);break;case"number":O(c);break;default:return}},h=function(){u(""),O("")};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("form",{onSubmit:function(n){n.preventDefault(),!function(t){return e.find((function(e){return e.name===t}))}(o)?!function(t){return e.find((function(e){return e.number===t}))}(s)?!function(t,e){return""===t.trim()||""===e.trim()}(o,s)?!function(t){return!/\d{3}[-]\d{2}[-]\d{2}/g.test(t)}(s)?t(L(o,s)):f.b.error(" Enter the correct phone number "):f.b.info(" Enter the correct name and number "):Object(f.b)(" ".concat(s," is already in use ")):Object(f.b)(" ".concat(o,"' is already in use ")),h()},children:Object(c.jsxs)("div",{children:[Object(c.jsxs)("label",{children:["Name",Object(c.jsx)("input",{type:"text",name:"name",value:o,onChange:l,placeholder:"Andrey Kovsh"})]}),Object(c.jsxs)("label",{children:["Phone number",Object(c.jsx)("input",{type:"text",name:"number",value:s,onChange:l,placeholder:"817-18-41"})]}),Object(c.jsx)("button",{type:"submit",children:"Add contact"})]})})})};function B(){var t=Object(b.c)(q),e=Object(b.b)();return Object(c.jsxs)("label",{children:["Find contacts by name",Object(c.jsx)("input",{type:"text",value:t,onChange:function(t){return e(E(t.target.value))}})]})}function D(){var t=Object(b.b)(),e=Object(b.c)(A);return Object(c.jsx)("ul",{children:e.map((function(e){var n=e.id,r=e.name,a=e.number;return Object(c.jsxs)("li",{children:[Object(c.jsxs)("p",{children:[Object(c.jsxs)("b",{children:[r," "]}),Object(c.jsx)("em",{children:a})]}),Object(c.jsx)("button",{type:"button",onClick:function(){return function(e){return t(P(e))}(n)},children:"delete"})]},n)}))})}n(66);var I,J,z=function(t){Object(s.a)(n,t);var e=Object(O.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(c.jsxs)(l,{children:[Object(c.jsx)("h1",{children:"Phonebook"}),Object(c.jsx)(T,{}),Object(c.jsx)("h2",{children:"Contacts"}),Object(c.jsx)(B,{}),Object(c.jsx)(D,{}),Object(c.jsx)(f.a,{autoClose:5e3})]})}}]),n}(r.Component),K=n(13),M=n(33),N=n.n(M),U=n(8),G=n(4),H=n(3),Q=Object(p.c)([],(I={},Object(G.a)(I,v,(function(t,e){return e.payload})),Object(G.a)(I,y,(function(t,e){return[e.payload].concat(Object(K.a)(t))})),Object(G.a)(I,S,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),I)),V=Object(p.c)(!1,(J={},Object(G.a)(J,g,(function(){return!0})),Object(G.a)(J,y,(function(){return!1})),Object(G.a)(J,k,(function(){return!1})),Object(G.a)(J,x,(function(){return!0})),Object(G.a)(J,v,(function(){return!1})),Object(G.a)(J,C,(function(){return!1})),Object(G.a)(J,w,(function(){return!0})),Object(G.a)(J,S,(function(){return!1})),Object(G.a)(J,F,(function(){return!1})),J)),W=Object(p.c)(null,{}),X=Object(p.c)("",Object(G.a)({},E,(function(t,e){return e.payload}))),Y=Object(H.c)({items:Q,loading:V,error:W,filter:X}),Z=[].concat(Object(K.a)(Object(p.d)({serializableCheck:{ignoredActions:[U.a,U.f,U.b,U.c,U.d,U.e]}})),[N.a]),$=Object(p.a)({reducer:{contacts:Y},middleware:Z,devTools:!1}),_=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),r(t),a(t),o(t)}))};u.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(b.a,{store:$,children:Object(c.jsx)(z,{})})}),document.getElementById("root")),_()}},[[67,1,2]]]);
//# sourceMappingURL=main.d509507b.chunk.js.map