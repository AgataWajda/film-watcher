"use strict";(self.webpackChunkfilm_watcher=self.webpackChunkfilm_watcher||[]).push([[375],{443:function(n,e,t){t.d(e,{IO:function(){return i},IQ:function(){return a},Jh:function(){return s},Pg:function(){return c},qz:function(){return u}});var r=t(340),o="baccf3335fd59a3ac4ec1caadf6ebad8";r.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){return r.Z.get("trending/movie/day?api_key=".concat(o)).then((function(n){return n.data})).catch((function(n){return console.error(n)}))},c=function(n){return r.Z.get("movie/".concat(n,"?api_key=").concat(o)).then((function(n){return n.data})).catch((function(n){return console.error(n)}))},a=function(n){return r.Z.get("movie/".concat(n,"/credits?api_key=").concat(o)).then((function(n){return n.data})).then((function(n){return n.cast})).catch((function(n){return console.error(n)}))},s=function(n){return r.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(o)).then((function(n){return n.data})).then((function(n){return n.results})).catch((function(n){return console.error(n)}))},u=function(n){return r.Z.get("search/movie?api_key=".concat(o,"&language=en-US&page=1&query=").concat(n)).then((function(n){return n.data})).then((function(n){return n.results})).catch((function(n){return console.error(n)}))}},375:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,o,i,c,a,s,u=t(439),d=t(443),l=t(689),h=t(791),f=t(168),p=t(867),x=t(87),g=p.ZP.div(r||(r=(0,f.Z)(["\n  padding-top: 30px;\n  background-color: rgb(218, 214, 214);\n  padding-bottom: 100px;\n"]))),v=p.ZP.div(o||(o=(0,f.Z)(["\n  padding-left: 20px;\n  display: flex;\n  gap: 50px;\n  padding-top: 20px;\n  padding-right: 20px;\n"]))),j=p.ZP.img(i||(i=(0,f.Z)(["\n  box-shadow: 4px 8px 24px 0px rgba(66, 68, 90, 1);\n"]))),m=p.ZP.h2(c||(c=(0,f.Z)(["\n  font-size: 40px;\n  font-weight: 800;\n  color: #171717;\n  text-shadow: 1px 2px 6px rgb(98, 100, 119);\n"]))),b=(0,p.ZP)(x.rU)(a||(a=(0,f.Z)(["\n  color: black;\n  text-decoration: none;\n  padding-top: 4px;\n  font-size: 16px;\n  font-weight: 600;\n\n  &:hover {\n    color: rgb(197, 98, 32);\n  }\n"]))),Z=(0,p.ZP)(x.rU)(s||(s=(0,f.Z)(["\n  color: black;\n  text-decoration: none;\n  padding-top: 4px;\n  font-size: 20px;\n  font-weight: 600;\n  padding-left: 20px;\n\n  &:hover {\n    color: rgb(197, 98, 32);\n  }\n"]))),k=t(184),w=function(){var n,e,t=(0,h.useState)([]),r=(0,u.Z)(t,2),o=r[0],i=r[1],c=(0,h.useRef)(null),a=(0,l.UO)().movieId,s=null!==(n=null===(e=(0,l.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/home";(0,h.useEffect)((function(){0===o.length&&(0,d.Pg)(a).then((function(n){i(n)}))}),[a,o]);var f=function(){c.current&&c.current.scrollIntoView({behavior:"smooth",block:"start"})};return(0,k.jsxs)(g,{children:[(0,k.jsx)(Z,{to:s,children:"\u25c0 Go Back "}),(0,k.jsxs)(v,{children:[o.poster_path?(0,k.jsx)(j,{src:"https://image.tmdb.org/t/p/w300".concat(o.poster_path),alt:o.original_title}):(0,k.jsx)(k.Fragment,{}),(0,k.jsxs)("div",{children:[(0,k.jsxs)(m,{children:[o.original_title," (",o.release_date?o.release_date.slice(0,4):(0,k.jsx)(k.Fragment,{}),")"]}),(0,k.jsxs)("p",{children:["User Score: ",Math.round(10*o.vote_average),"%"]}),(0,k.jsxs)("div",{children:[(0,k.jsx)("h3",{children:"Overview"}),(0,k.jsx)("span",{children:o.overview})]}),(0,k.jsxs)("div",{children:[(0,k.jsx)("h3",{children:"Genres"}),(0,k.jsx)("span",{children:o.genres?o.genres.map((function(n){return n.name})).join(", "):(0,k.jsx)(k.Fragment,{})})]}),(0,k.jsxs)("div",{children:[(0,k.jsx)("h3",{children:"Additional information"}),(0,k.jsxs)("ul",{children:[(0,k.jsx)("li",{children:(0,k.jsx)(b,{to:"cast",state:{from:s},onClick:f,children:"Cast"})}),(0,k.jsx)("li",{children:(0,k.jsx)(b,{to:"reviews",state:{from:s},onClick:f,children:"Reviews"})})]})]})]})]}),(0,k.jsxs)(h.Suspense,{fallback:(0,k.jsx)("div",{children:"Loading"}),children:[(0,k.jsx)("div",{ref:c}),(0,k.jsx)(l.j3,{})]})]})}}}]);
//# sourceMappingURL=375.41961a14.chunk.js.map