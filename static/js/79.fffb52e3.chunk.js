"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[79],{79:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r,c=e(885),a=e(791),o=e(390),u=e(303),i=e(168),s=e(751).ZP.h1(r||(r=(0,i.Z)(["\n  font-size: 28px;\n  margin-bottom: 20px;\n"]))),f=e(184);function l(){var n=(0,a.useState)(null),t=(0,c.Z)(n,2),e=t[0],r=t[1];return(0,a.useEffect)((function(){(0,o.wr)().then((function(n){r(n.results)}))}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s,{children:"Trending today"}),e&&(0,f.jsx)(u.Z,{list:e})]})}},303:function(n,t,e){e.d(t,{Z:function(){return s}});var r,c=e(523),a=e(271),o=e(168),u=e(751).ZP.ul(r||(r=(0,o.Z)(["\n  font-size: 20px;\n  \n"]))),i=e(184);function s(n){var t=n.list,e=(0,a.TH)();return(0,i.jsx)(u,{children:t&&t.map((function(n){var t=n.id,r=n.title,a=n.name;return(0,i.jsx)("li",{children:(0,i.jsxs)(c.rU,{to:{pathname:"/movies/".concat(t),state:{from:e}},children:[a||r,r]})},t)}))})}},390:function(n,t,e){e.d(t,{wr:function(){return f},Ai:function(){return l},Y5:function(){return d},xc:function(){return p},Hx:function(){return h}});var r=e(861),c=e(757),a=e.n(c),o="https://api.themoviedb.org/3",u="65d9701d0227b60ddad8e7d6a13e988e";function i(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(a().mark((function n(){var t,e,r,c=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",e=c.length>1&&void 0!==c[1]?c[1]:{},n.next=4,fetch(t,e);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function f(){return i("".concat(o,"/trending/all/day?api_key=").concat(u))}function l(n){return i("".concat(o,"/search/movie?api_key=").concat(u,"&language=en-US&page=1&include_adult=false&query=").concat(n))}function d(n){return i("".concat(o,"/movie/").concat(n,"?api_key=").concat(u,"&language=en-US"))}function p(n){return i("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(u,"&language=en-US"))}function h(n){return i("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(u,"&language=en-US&page=1"))}}}]);
//# sourceMappingURL=79.fffb52e3.chunk.js.map