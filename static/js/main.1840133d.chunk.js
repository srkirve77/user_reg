(this.webpackJsonpuser_reg=this.webpackJsonpuser_reg||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(15),s=n.n(r),i=(n(44),n(45),n(11)),o=(n(46),n(81)),j=n(83),l=n(84),u=n(12),d=n.n(u),b=n(17),O=n(77),g=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,c,a,r,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.pageNo,e.next=3,fetch("https://gorest.co.in/public-api/users?page="+n,{});case 3:return c=e.sent,e.next=6,c.json();case 6:if(a=e.sent,2!==parseInt(a.code/100)){for(s="",r=0;r<a.data.length;r++)s=s+a.data[r].field+" "+a.data[r].message+",";alert(s)}return e.abrupt("return",a.data);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=n(79),h=n(80),p=n(31),f=n.n(p),m=n(32),v=n.n(m),N=(n(48),n(2)),w=function(e){e.pageNo;var t=Object(c.useState)(["its loading"]),n=Object(i.a)(t,2),a=n[0],r=n[1];function s(){return(s=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:n=e.sent,r(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(e){s.apply(this,arguments)}()})),Object(N.jsx)(O.a,{children:a&&a.map((function(e){return Object(N.jsxs)(x.a,{children:[Object(N.jsx)(h.a,{align:"center",children:e.id}),Object(N.jsx)(h.a,{align:"center",children:e.name}),Object(N.jsx)(h.a,{align:"center",children:e.email}),Object(N.jsx)(h.a,{align:"center",children:e.gender}),Object(N.jsx)(h.a,{align:"center",children:e.status}),Object(N.jsx)(h.a,{align:"center",children:Object(N.jsx)(f.a,{className:"editicon"})}),Object(N.jsx)(h.a,{align:"center",children:Object(N.jsx)(v.a,{className:"deleteicon"})})]},e.id)}))})},k=n(82),y=(n(55),Object(o.a)({root:{background:"#4856FD",color:"white",fontWeight:"900"}})),F=function(){var e=y();return Object(N.jsx)(k.a,{children:Object(N.jsxs)(x.a,{children:[Object(N.jsx)(h.a,{className:e.root,align:"center",children:"Id"}),Object(N.jsx)(h.a,{className:e.root,align:"center",children:"Name"}),Object(N.jsx)(h.a,{className:e.root,align:"center",children:"Email"}),Object(N.jsx)(h.a,{className:e.root,align:"center",children:"Gender"}),Object(N.jsx)(h.a,{className:e.root,align:"center",children:"Status"}),Object(N.jsx)(h.a,{className:e.root,align:"center",children:"Edit"}),Object(N.jsx)(h.a,{className:e.root,align:"center",children:"Delete"})]})})},I=(n(56),Object(o.a)({roundborder:{borderRadius:"30px"}})),S=function(e){var t=I();return Object(N.jsx)("div",{children:Object(N.jsx)(j.a,{className:"userpaper",children:Object(N.jsxs)(l.a,{stickyHeader:!0,className:t.roundborder,children:[Object(N.jsx)(F,{}),Object(N.jsx)(w,{pageNo:e})]})})})},C=(n(57),function(e){var t=e.onPage;return Object(N.jsxs)("div",{className:"pagination",children:["page \xa0",Object(N.jsx)("input",{type:"text",className:"pageinput",onChange:function(e){return n=e.target.value,void t(parseInt(n));var n}}),"\xa0 of 70"]})}),E=function(){var e=Object(c.useState)(),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"sidebar"}),Object(N.jsx)(S,{pageNo:n}),Object(N.jsx)(C,{onPage:function(e){null!==e&&(a(e),console.log(n))}})]})};var P=function(){return Object(N.jsx)("div",{className:"App",children:Object(N.jsx)(E,{})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(P,{})}),document.getElementById("root")),D()}},[[59,1,2]]]);
//# sourceMappingURL=main.1840133d.chunk.js.map