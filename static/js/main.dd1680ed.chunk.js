(this["webpackJsonpa-chugunov.github.io"]=this["webpackJsonpa-chugunov.github.io"]||[]).push([[0],{51:function(e,t,c){},52:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(17),i=c.n(a),r=(c(51),c(33)),j=c(29),l=c(18),o=c(83),d=c(43),b=c(84),h=(c(52),c(79)),O=c(86),u=c(80),x=c(81),m=c(85),f=c(82),v=c(77),p=c(2),g=Object(v.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(1),marginLeft:e.spacing(1)},title:{alignItems:"center"},myToolbar:{justifyContent:"space-between"}}})),y=function(e){var t=e.themeClick,c=e.isThemeLight,n=g(),s=Object(h.a)({disableHysteresis:!0,threshold:0});return Object(p.jsxs)("div",{className:n.root,children:[Object(p.jsx)(O.a,{elevation:s?4:0,color:s?"default":"transparent",children:Object(p.jsxs)(u.a,{className:n.myToolbar,children:[Object(p.jsx)(x.a,{variant:"h6",color:"inherit",className:n.title,children:"chugunov.dev"}),Object(p.jsxs)("div",{children:[Object(p.jsx)(m.a,{className:n.menuButton,color:"inherit",component:l.b,to:"/",children:"Home"}),Object(p.jsx)(m.a,{className:n.menuButton,color:"inherit",component:l.b,to:"/cv",children:"CV"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)(m.a,{color:"inherit",target:"_blank",href:"https://github.com/a-chugunov/",children:Object(p.jsx)(f.a,{className:"fab fa-github"})}),Object(p.jsx)(m.a,{color:"inherit",target:"_blank",href:"https://www.linkedin.com/in/alexeychugunov/",children:Object(p.jsx)(f.a,{className:"fab fa-linkedin-in"})}),Object(p.jsx)(m.a,{color:"inherit",onClick:t,children:c?Object(p.jsx)(f.a,{className:"fas fa-moon"}):Object(p.jsx)(f.a,{className:"fas fa-sun"})})]})]})}),Object(p.jsx)(u.a,{className:n.myToolbar})]})},k=c(5),N=c(42),T=function(e){var t=e.name,c=e.contacts,n=(c=void 0===c?{}:c).phone,s=c.email;return Object(p.jsxs)("div",{id:"contact-info",className:"vcard",children:[Object(p.jsx)("h1",{className:"fn",children:t}),Object(p.jsxs)("p",{children:["Cell: ",Object(p.jsx)("span",{className:"tel",children:n}),Object(p.jsx)("br",{}),"Email:"," ",Object(p.jsx)("a",{className:"email",href:"mailto:".concat(s),children:s})]})]})},w=function(e){var t=e.summary;return Object(p.jsx)("div",{id:"objective",children:Object(p.jsx)("p",{children:t})})},C=function(e){var t=e.work,c=(void 0===t?[]:t).map((function(e){var t=e.company,c=e.years,n=e.location,s=e.position,a=e.summary,i=e.highlights;return Object(p.jsxs)("dd",{children:[Object(p.jsxs)("h2",{children:[t,Object(p.jsx)("span",{children:c})]}),Object(p.jsxs)("h2",{children:[s,Object(p.jsx)("span",{children:n})]}),Object(p.jsxs)("p",{children:[a,Object(p.jsx)("br",{}),Object(p.jsx)("ul",{children:i.map((function(e){return Object(p.jsx)("li",{children:e},e)}))})]})]},t)}));return Object(p.jsxs)("div",{children:[Object(p.jsx)("dt",{children:"Experience"}),c]})},B=function(e){var t=e.education,c=(void 0===t?[]:t).map((function(e){var t=e.institution,c=e.degree,n=e.years,s=e.highlights;return Object(p.jsxs)("dd",{children:[Object(p.jsxs)("h2",{children:[t,Object(p.jsx)("span",{children:n})]}),Object(p.jsxs)("p",{children:[c,Object(p.jsx)("br",{}),s]})]},t)}));return Object(p.jsxs)("div",{children:[Object(p.jsx)("dt",{children:"Education"}),c]})},E=function(e){var t=e.skills,c=(void 0===t?[]:t).map((function(e){var t=e.category,c=e.skill;return Object(p.jsxs)("dd",{children:[Object(p.jsx)("h2",{children:t}),Object(p.jsx)("p",{children:Object(p.jsx)("ul",{children:c.map((function(e){return Object(p.jsx)("li",{children:e},e)}))})})]},t)}));return Object(p.jsxs)("div",{children:[Object(p.jsx)("dt",{children:"Skills"}),c]})},F=(c(59),function(){var e=Object(n.useState)({}),t=Object(j.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){fetch("/data/CV.yaml").then((function(e){return e.text()})).then((function(e){var t=N.a.loadAll(e);s(t[0])}))}),[]),Object(p.jsx)("div",{children:Object(p.jsxs)("div",{id:"page-wrap",children:[Object(p.jsx)("div",{className:"clear"}),Object(p.jsx)(T,{name:c.name,contacts:c.contacts}),Object(p.jsx)("div",{className:"clear"}),Object(p.jsx)(w,{summary:c.summary}),Object(p.jsx)("div",{className:"clear"}),Object(p.jsxs)("dl",{children:[Object(p.jsx)(C,{work:c.work}),Object(p.jsx)("div",{className:"clear"}),Object(p.jsx)(B,{education:c.education}),Object(p.jsx)("div",{className:"clear"}),Object(p.jsx)(E,{skills:c.skills}),Object(p.jsx)("div",{className:"clear"})]})]})})}),L=function(){return Object(p.jsx)(F,{})},S=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("div",{children:" NoPageFound "})})};function I(){return Object(p.jsxs)(k.c,{children:[Object(p.jsx)(k.a,{exact:!0,path:"/",component:L}),Object(p.jsx)(k.a,{path:"/cv",component:F}),Object(p.jsx)(k.a,{component:S})]})}var P=function(e){var t=e.themeToggler,c=e.themeType;return Object(p.jsxs)("div",{children:[Object(p.jsx)(y,{themeClick:t,isThemeLight:c}),Object(p.jsx)(I,{})]})},A=Object(d.a)({palette:{type:"light",primary:{light:"#757ce8",main:"#3f50b5",dark:"#002884",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}}}),H=Object(d.a)({palette:{type:"dark",primary:{light:"#c31e60",main:"#ff0067",dark:"#d00808",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}}});var J=function(){var e=Object(n.useState)(!0),t=Object(j.a)(e,2),c=t[0],s=t[1];return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(o.a,{}),Object(p.jsx)(b.a,{theme:c?Object(r.a)({},A):Object(r.a)({},H),children:Object(p.jsx)(l.a,{children:Object(p.jsx)(P,{themeToggler:function(){s(!c)},themeType:c})})})]})},V=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,87)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(J,{})}),document.getElementById("root")),V()}},[[60,1,2]]]);
//# sourceMappingURL=main.dd1680ed.chunk.js.map