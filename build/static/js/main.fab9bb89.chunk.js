(this["webpackJsonplsyk4.com"]=this["webpackJsonplsyk4.com"]||[]).push([[0],{46:function(e,t,c){},47:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(17),r=c.n(a),i=c(3),l=c.n(i),o=c(5),j=c(4),d=(c(7),c(0));var m=function(e){var t=e.image,c=void 0===t?"":t,s=e.link,n=void 0===s?"":s,a=e.title,r=void 0===a?"":a,i=e.media,l=void 0===i?"":i;return Object(d.jsx)("div",{className:"col-6 col-md-3 mb-3 mt-3 d-flex align-items-stretch",children:Object(d.jsx)("div",{className:"card",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("img",{src:c,className:"card-img-top"}),Object(d.jsx)("a",{target:"_blank",href:n,children:Object(d.jsx)("h5",{className:"card-title",children:r})}),""!==l?Object(d.jsxs)("video",{className:"col-12",controls:!0,name:"media",children:[Object(d.jsx)("source",{src:l,type:"audio/x-m4a"}),l]}):""]})})})};var u=function(e){var t=e.image,c=void 0===t?"":t,s=e.link,n=void 0===s?"":s,a=e.title,r=void 0===a?"":a,i=e.media,l=void 0===i?"":i;return Object(d.jsx)("div",{className:"col-6 col-md-3 mb-3 mt-3 d-flex align-items-stretch",children:Object(d.jsx)("div",{className:"card",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("img",{src:c,className:"card-img-top"}),Object(d.jsx)("a",{target:"_blank",href:n,children:Object(d.jsx)("h5",{className:"card-title",children:r})}),""!==l?Object(d.jsxs)("video",{className:"col-12",controls:!0,name:"media",children:[Object(d.jsx)("source",{src:l,type:"audio/x-m4a"}),l]}):""]})})})};var b=function(e){var t=e.id,c=void 0===t?"":t,s=e.nombre,n=void 0===s?"":s,a=e.dob,r=void 0===a?"":a,i=e.ssn,l=void 0===i?"":i;return Object(d.jsx)("div",{className:"col-12 col-md-4 mb-3 mt-3 d-flex align-items-stretch",children:Object(d.jsx)("div",{className:"alert alert-dark col-12",role:"alert",children:Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{children:["ID: ",c]}),Object(d.jsxs)("li",{children:["Nombre: ",n]}),Object(d.jsxs)("li",{children:["Nacimiento: ",r]}),Object(d.jsxs)("li",{children:["Seguro Social: ",l]})]})})})};c(8),c(42),c(46);var h=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)([]),r=Object(j.a)(a,2),i=r[0],h=r[1],x=Object(s.useState)([]),O=Object(j.a)(x,2),p=O[0],v=O[1],f=Object(s.useState)([]),N=Object(j.a)(f,2),g=N[0],w=N[1],k=Object(s.useState)([]),y=Object(j.a)(k,2),S=y[0],F=y[1],T=Object(s.useState)([]),U=Object(j.a)(T,2),D=U[0],B=U[1];function C(){return I.apply(this,arguments)}function I(){return(I=Object(o.a)(l.a.mark((function e(){var t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://itunes.apple.com/search?media=music&limit=12&term=".concat(c));case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,h(s.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(){return(V=Object(o.a)(l.a.mark((function e(){var t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://itunes.apple.com/search?media=movie&limit=12&term=".concat(c));case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,v(s.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=Object(o.a)(l.a.mark((function e(){var t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://itunes.apple.com/search?media=ebook&limit=12&term=".concat(c));case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,w(s.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(){return(q=Object(o.a)(l.a.mark((function e(){var t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://api.tvmaze.com/search/shows?page=1&q=".concat(c));case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,F(s);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=Object(o.a)(l.a.mark((function e(){var t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://lsyk4.com/testmncapi/api.php?q=".concat(c));case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,B(s.QueryByName);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.useEffect)((function(){C()}),[]),Object(d.jsx)("div",{className:"col-12",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault(),n(document.querySelector("#searchTerms").value.trim().replace(" ","+").toLowerCase()),C(),function(){V.apply(this,arguments)}(),function(){P.apply(this,arguments)}(),function(){q.apply(this,arguments)}(),function(){E.apply(this,arguments)}()},children:Object(d.jsxs)("div",{className:"input-group mb-3 mt-3",children:[Object(d.jsx)("input",{type:"text",name:"searchTerms",id:"searchTerms",className:"form-control bg-dark",placeholder:"\xbfQue deseas buscar?"}),Object(d.jsx)("button",{className:"btn btn-outline-secondary",type:"submit",children:Object(d.jsx)("i",{className:"fas fa-search"})})]})})}),Object(d.jsx)("div",{className:"col-12 mt-5 mb-5",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("h1",{children:"Canciones (iTunes)"}),i.length>0?i.map((function(e){return Object(d.jsx)(m,{image:e.artworkUrl100,title:e.trackName,link:e.trackViewUrl,media:e.previewUrl})})):Object(d.jsx)(d.Fragment,{children:"Sin resultados ..."})]})}),Object(d.jsx)("div",{className:"col-12 mt-5 mb-5",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("h1",{children:"Pel\xedculas (iTunes)"}),p.length>0?p.map((function(e){return Object(d.jsx)(m,{image:e.artworkUrl100,title:e.trackName,link:e.trackViewUrl,media:e.previewUrl})})):Object(d.jsx)(d.Fragment,{children:"Sin resultados ..."})]})}),Object(d.jsx)("div",{className:"col-12 mt-5 mb-5",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("h1",{children:"Ebooks (iTunes)"}),g.length>0?g.map((function(e){return Object(d.jsx)(m,{image:e.artworkUrl100,title:e.trackName,link:e.trackViewUrl,media:e.previewUrl})})):Object(d.jsx)(d.Fragment,{children:"Sin resultados ..."})]})}),Object(d.jsx)("div",{className:"col-12 mt-5 mb-5",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("h1",{children:"Shows TV (TV Maze)"}),S.length>0?S.map((function(e){return Object(d.jsx)(u,{image:null!==e.show.image?e.show.image.original:"",title:e.show.name,link:e.show.url})})):Object(d.jsx)(d.Fragment,{children:"Sin resultados ..."})]})}),Object(d.jsx)("div",{className:"col-12 mt-5 mb-5",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("h1",{children:"Personas"}),null!=D&&D.length>0?D.map((function(e){return Object(d.jsx)(b,{id:e.ID,nombre:e.Name,dob:e.DOB,ssn:e.SSN})})):Object(d.jsx)(d.Fragment,{children:"undefined"==typeof D?Object(d.jsx)(d.Fragment,{children:"Sin resultados ..."}):Object(d.jsx)(b,{id:D.ID,nombre:D.Name,dob:D.DOB,ssn:D.SSN})})]})})]})})};c(47);var x=function(){return Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)(h,{})})})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,56)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};c(48),c(49),c(51),c(53),c(54);r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),O()},7:function(e,t,c){}},[[55,1,2]]]);
//# sourceMappingURL=main.fab9bb89.chunk.js.map