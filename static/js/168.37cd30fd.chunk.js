"use strict";(self.webpackChunkfilm_watcher=self.webpackChunkfilm_watcher||[]).push([[168],{443:function(n,e,t){t.d(e,{IO:function(){return i},IQ:function(){return a},Jh:function(){return o},Pg:function(){return u},qz:function(){return s}});var r=t(340),c="baccf3335fd59a3ac4ec1caadf6ebad8";r.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){return r.Z.get("trending/movie/day?api_key=".concat(c)).then((function(n){return n.data})).catch((function(n){return console.error(n)}))},u=function(n){return r.Z.get("movie/".concat(n,"?api_key=").concat(c)).then((function(n){return n.data})).catch((function(n){return console.error(n)}))},a=function(n){return r.Z.get("movie/".concat(n,"/credits?api_key=").concat(c)).then((function(n){return n.data})).then((function(n){return n.cast})).catch((function(n){return console.error(n)}))},o=function(n){return r.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(c)).then((function(n){return n.data})).then((function(n){return n.results})).catch((function(n){return console.error(n)}))},s=function(n){return r.Z.get("search/movie?api_key=".concat(c,"&language=en-US&page=1&query=").concat(n)).then((function(n){return n.data})).then((function(n){return n.results})).catch((function(n){return console.error(n)}))}},946:function(n,e,t){t.r(e),t.d(e,{default:function(){return d}});var r=t(439),c=t(443),i=t(791),u=t(689),a="Reviews_title__t265C",o="Reviews_list__okdpy",s="Reviews_author__CqYAZ",f="Reviews_item__DJKij",h="Reviews_info__ij-Go",l=t(184),d=function(){var n=(0,u.UO)().movieId,e=(0,i.useState)([]),t=(0,r.Z)(e,2),d=t[0],v=t[1];return(0,i.useEffect)((function(){(0,c.Jh)(n).then((function(n){return v(n)}))}),[n,d]),(0,l.jsx)(l.Fragment,{children:0===d.length?(0,l.jsx)("div",{className:h,children:"We don't Have any reviews to this movie."}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h2",{className:a,children:"Reviews:"}),(0,l.jsx)("ul",{className:o,children:d.map((function(n){return(0,l.jsxs)("li",{className:f,children:[(0,l.jsx)("h4",{className:s,children:n.author}),(0,l.jsx)("div",{children:n.content})]},n.id)}))})]})})}}}]);
//# sourceMappingURL=168.37cd30fd.chunk.js.map