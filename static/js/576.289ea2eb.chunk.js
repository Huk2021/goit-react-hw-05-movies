"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[576],{576:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(885),c=t(791),a=t(271),i=t(523),o=t(390),s=t(184),u=(0,c.lazy)((function(){return t.e(709).then(t.bind(t,541))})),l=(0,c.lazy)((function(){return t.e(753).then(t.bind(t,785))}));function d(){var e,n=(0,a.UO)().movieId,t=(0,a.$B)().path,d=(0,c.useState)(null),h=(0,r.Z)(d,2),p=h[0],f=h[1],v=(0,a.TH)(),x=(0,a.k6)();(0,c.useEffect)((function(){(0,o.Y5)(n).then(f)}),[n]);return(0,s.jsxs)(s.Fragment,{children:[p&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{type:"button",onClick:function(){var e,n;x.push(null!==(e=null===v||void 0===v||null===(n=v.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies")},children:"Go back"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(p.poster_path),alt:p.title,width:"300"}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("h2",{children:[p.title," "]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{children:"Release date: "}),p.release_date]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{children:"Popularity: "}),p.popularity]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{children:"Overview: "}),p.overview]}),(0,s.jsx)("p",{children:(0,s.jsx)("span",{children:"Genres: "})}),(0,s.jsx)("ul",{children:p.genres.map((function(e){return(0,s.jsx)("li",{children:e.name},e.id)}))})]})]})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("nav",{children:[(0,s.jsx)(i.OL,{to:"/movies/".concat(n,"/cast"),state:{from:null===(e=v.from)||void 0===e?void 0:e.location},children:"Cast"}),(0,s.jsx)(i.OL,{to:"/movies/".concat(n,"/reviews"),state:{from:v.from},children:"Reviews"})]})}),(0,s.jsxs)(c.Suspense,{fallback:(0,s.jsx)("h1",{children:"LOADING..."}),children:[(0,s.jsx)(a.AW,{path:"".concat(t,"/cast"),children:(0,s.jsx)(u,{})}),(0,s.jsx)(a.AW,{path:"".concat(t,"/reviews"),children:(0,s.jsx)(l,{})})]})]})}},390:function(e,n,t){t.d(n,{wr:function(){return l},Ai:function(){return d},Y5:function(){return h},xc:function(){return p},Hx:function(){return f}});var r=t(861),c=t(757),a=t.n(c),i="https://api.themoviedb.org/3",o="65d9701d0227b60ddad8e7d6a13e988e";function s(){return u.apply(this,arguments)}function u(){return u=(0,r.Z)(a().mark((function e(){var n,t,r,c=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:"",t=c.length>1&&void 0!==c[1]?c[1]:{},e.next=4,fetch(n,t);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function l(){return s("".concat(i,"/trending/all/day?api_key=").concat(o))}function d(e){return s("".concat(i,"/search/movie?api_key=").concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(e))}function h(e){return s("".concat(i,"/movie/").concat(e,"?api_key=").concat(o,"&language=en-US"))}function p(e){return s("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"))}function f(e){return s("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"))}}}]);
//# sourceMappingURL=576.289ea2eb.chunk.js.map