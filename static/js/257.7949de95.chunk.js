"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[257],{257:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r,a,c,s=n(439),i=n(791),o=n(87),u=n(689),l=n(737),p=n(766),d=n(934),h=d.Z.div(r||(r=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 30px 0;\n  border-bottom: 1px solid black;\n"]))),f=d.Z.div(a||(a=(0,p.Z)(["\n  display: flex;\n  align-items: start;\n  flex-direction: column;\n  margin-left: 50px;\n  /* justify-content: start; */\n"]))),v=d.Z.div(c||(c=(0,p.Z)(["\n  padding: 10px 0;\n  border-bottom: 1px solid black;\n"]))),x=n(184),m=function(){var e,t,n=(0,i.useState)(""),r=(0,s.Z)(n,2),a=r[0],c=r[1],p=(0,i.useState)(""),d=(0,s.Z)(p,2),m=d[0],j=d[1],g=(0,i.useState)(""),Z=(0,s.Z)(g,2),y=Z[0],w=Z[1],b=(0,i.useState)(""),k=(0,s.Z)(b,2),S=k[0],_=k[1],G=(0,i.useState)([]),E=(0,s.Z)(G,2),T=E[0],U=E[1],C=(0,i.useState)(""),P=(0,s.Z)(C,2),F=P[0],O=P[1],R=(0,u.TH)(),q=(0,i.useRef)(null!==(e=null===(t=R.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"),z=(0,u.UO)().movieId;return(0,i.useEffect)((function(){(0,l.Pg)(z).then((function(e){var t="https://image.tmdb.org/t/p/w500".concat(e.poster_path),n=e.release_date.slice(0,4),r=10*e.vote_average,a=e.genres.map((function(e){return e.name}));c(e.title),j(t),w(n),_(r.toFixed(0)),U(e.overview),O(a.join(" "))})).catch((function(){console.log("Fetch error")}))}),[z]),(0,x.jsxs)("div",{children:[(0,x.jsx)(o.rU,{to:q.current,children:"Go back"}),(0,x.jsxs)(h,{children:[(0,x.jsx)("img",{src:m,alt:"".concat(a," poster"),width:"300"}),(0,x.jsxs)(f,{children:[(0,x.jsxs)("h2",{children:[a," (",y,")"]}),(0,x.jsxs)("p",{children:["User Score: ",S,"%"]}),(0,x.jsx)("h3",{children:"Overview"}),(0,x.jsx)("p",{children:T}),(0,x.jsx)("h4",{children:"Genres"}),(0,x.jsx)("p",{children:F})]})]}),(0,x.jsxs)(v,{children:[(0,x.jsx)("p",{children:"Additional information"}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:(0,x.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,x.jsx)(i.Suspense,{fallback:(0,x.jsx)("div",{children:"Loading additional info..."}),children:(0,x.jsx)(u.j3,{})})]})}},737:function(e,t,n){n.d(t,{JN:function(){return u},Pg:function(){return p},Ph:function(){return m},tx:function(){return v},zv:function(){return h}});var r=n(861),a=n(687),c=n.n(a),s=n(243),i="https://api.themoviedb.org/3",o="909c04d45dd4c126cd2df97943bce308";function u(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/trending/movie/day",e.prev=1,t={method:"GET",url:i+"/trending/movie/day",params:{api_key:o}},e.next=5,(0,s.Z)(t);case 5:return n=e.sent,e.abrupt("return",n.data);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/movie/".concat(t),e.prev=1,r={method:"GET",url:i+n,params:{api_key:o}},e.next=5,(0,s.Z)(r);case 5:return a=e.sent,e.abrupt("return",a.data);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function h(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/movie/".concat(t,"/credits"),e.prev=1,r={method:"GET",url:i+n,params:{api_key:o}},e.next=5,(0,s.Z)(r);case 5:return a=e.sent,e.abrupt("return",a.data);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function v(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function e(t){var n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/movie/".concat(t,"/reviews"),e.prev=1,r={method:"GET",url:i+n,params:{api_key:o}},e.next=5,(0,s.Z)(r);case 5:return a=e.sent,e.abrupt("return",a.data);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function m(e){return j.apply(this,arguments)}function j(){return(j=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/search/movie",e.prev=1,n={method:"GET",url:i+"/search/movie",params:{api_key:o,query:t}},e.next=5,(0,s.Z)(n);case 5:return r=e.sent,e.abrupt("return",r.data);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=257.7949de95.chunk.js.map