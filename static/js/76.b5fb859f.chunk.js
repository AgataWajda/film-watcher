"use strict";(self.webpackChunkfilm_watcher=self.webpackChunkfilm_watcher||[]).push([[76],{443:function(n,t,e){e.d(t,{IO:function(){return a},IQ:function(){return o},Jh:function(){return i},Pg:function(){return u},qz:function(){return s}});var r=e(340),c="baccf3335fd59a3ac4ec1caadf6ebad8";r.Z.defaults.baseURL="https://api.themoviedb.org/3/";var a=function(){return r.Z.get("trending/movie/day?api_key=".concat(c)).then((function(n){return n.data})).catch((function(n){return console.error(n)}))},u=function(n){return r.Z.get("movie/".concat(n,"?api_key=").concat(c)).then((function(n){return n.data})).catch((function(n){return console.error(n)}))},o=function(n){return r.Z.get("movie/".concat(n,"/credits?api_key=").concat(c)).then((function(n){return n.data})).then((function(n){return n.cast})).catch((function(n){return console.error(n)}))},i=function(n){return r.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(c)).then((function(n){return n.data})).then((function(n){return n.results})).catch((function(n){return console.error(n)}))},s=function(n){return r.Z.get("search/movie?api_key=".concat(c,"&language=en-US&page=1&query=").concat(n)).then((function(n){return n.data})).then((function(n){return n.results})).catch((function(n){return console.error(n)}))}},76:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r=e(439),c=e(443),a=e(791),u=e(689),o="Cast_list__GlWio",i="Cast_item__a0CDL",s="Cast_photo__lvFLf",f="Cast_description__uN0VA",h=e(184),l=function(){var n=(0,u.UO)().movieId,t=(0,a.useState)([]),e=(0,r.Z)(t,2),l=e[0],d=e[1];return(0,a.useEffect)((function(){0===l.length&&(0,c.IQ)(n).then((function(n){return d(n)}))}),[n,l]),(0,h.jsx)("ul",{className:o,children:l.map((function(n){return(0,h.jsxs)("li",{className:i,children:[n.profile_path?(0,h.jsx)("img",{className:s,src:"https://image.tmdb.org/t/p/w300".concat(n.profile_path),alt:n.name}):(0,h.jsx)(h.Fragment,{}),(0,h.jsxs)("div",{className:f,children:[(0,h.jsx)("p",{children:n.name}),(0,h.jsxs)("p",{children:["Character: ",n.character]})]})]},n.id)}))})}}}]);
//# sourceMappingURL=76.b5fb859f.chunk.js.map