"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[278],{278:function(t,e,r){r.r(e);var n=r(439),a=r(791),u=r(87),c=r(689),o=r(737),s=r(184);e.default=function(){var t=(0,a.useState)(""),e=(0,n.Z)(t,2),r=e[0],i=e[1],p=(0,a.useState)([]),l=(0,n.Z)(p,2),f=l[0],h=l[1],v=(0,u.lr)(),d=(0,n.Z)(v,2),m=d[0],y=d[1],x=(0,c.TH)(),g=(0,a.useState)(""),k=(0,n.Z)(g,2),Z=k[0],w=k[1];return(0,a.useEffect)((function(){var t,e=null!==(t=m.get("query"))&&void 0!==t?t:"";i(e)}),[m]),(0,a.useEffect)((function(){""!==r&&(0,o.Ph)(r).then((function(t){h(t.results)})).catch((function(){console.log("Fetch error")}))}),[r]),(0,s.jsxs)("div",{children:[(0,s.jsxs)("form",{onSubmit:function(t){var e;t.preventDefault(),y({query:Z});var r=null!==(e=m.get("query"))&&void 0!==e?e:"";i(r)},children:[(0,s.jsx)("input",{type:"text",onChange:function(t){var e=t.currentTarget.value;w(e)},autoFocus:!0,placeholder:"Search movies"}),(0,s.jsx)("button",{type:"submit",children:"Search"})]}),(0,s.jsx)("ul",{children:f.map((function(t){var e=t.id,r=t.title;return(0,s.jsx)("li",{children:(0,s.jsx)(u.rU,{to:"".concat(e),state:{from:x},children:r})},e)}))})]})}},737:function(t,e,r){r.d(e,{JN:function(){return i},Pg:function(){return l},Ph:function(){return y},tx:function(){return d},zv:function(){return h}});var n=r(861),a=r(687),u=r.n(a),c=r(243),o="https://api.themoviedb.org/3",s="909c04d45dd4c126cd2df97943bce308";function i(){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/trending/movie/day",t.prev=1,e={method:"GET",url:o+"/trending/movie/day",params:{api_key:s}},t.next=5,(0,c.Z)(e);case 5:return r=t.sent,t.abrupt("return",r.data);case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function l(t){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(u().mark((function t(e){var r,n,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/movie/".concat(e),t.prev=1,n={method:"GET",url:o+r,params:{api_key:s}},t.next=5,(0,c.Z)(n);case 5:return a=t.sent,t.abrupt("return",a.data);case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(u().mark((function t(e){var r,n,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/movie/".concat(e,"/credits"),t.prev=1,n={method:"GET",url:o+r,params:{api_key:s}},t.next=5,(0,c.Z)(n);case 5:return a=t.sent,t.abrupt("return",a.data);case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function d(t){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(u().mark((function t(e){var r,n,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/movie/".concat(e,"/reviews"),t.prev=1,n={method:"GET",url:o+r,params:{api_key:s}},t.next=5,(0,c.Z)(n);case 5:return a=t.sent,t.abrupt("return",a.data);case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function y(t){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/search/movie",t.prev=1,r={method:"GET",url:o+"/search/movie",params:{api_key:s,query:e}},t.next=5,(0,c.Z)(r);case 5:return n=t.sent,t.abrupt("return",n.data);case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=278.488d1894.chunk.js.map