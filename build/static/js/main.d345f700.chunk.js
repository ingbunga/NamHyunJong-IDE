(this["webpackJsonpnamhyunjong-ide"]=this["webpackJsonpnamhyunjong-ide"]||[]).push([[0],{358:function(n,e,t){"use strict";t.r(e);var r=t(110),o=t.n(r),c=t(252),u=t.n(c),a=t(20),i=t(21),f=t(253),s=t(182),l=t(37),h=t(220),d=t(0),v=t(1),b=function(){function n(e){Object(d.a)(this,n),this.name=e}return Object(v.a)(n,[{key:"toString",value:function(){return this.name}}]),n}(),p=function(){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;Object(d.a)(this,n),this.scope=Object(h.a)(Object(h.a)({},this.scope),e.reduce((function(n,e,r){return Object(h.a)(Object(h.a)({},n),{},Object(l.a)({},e.name,t[r]))}),{})),this.outer=r}return Object(v.a)(n,[{key:"find",value:function(n){if(void 0!==this.scope[n])return this.scope;if(this.outer)return this.outer.find(n);throw SyntaxError("cannot find symbol ".concat(n))}}]),n}();function g(n,e,t){var r=function(){for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];var u=new p(n,o,t);return u.scope.arguments=arguments,e.reduce((function(n,e){return k(e,u)}),void 0)};return r.toString=function(){return"[Procedure (".concat(n.map((function(n){return null===n||void 0===n?void 0:n.name})),")]")},r}function j(n,e,t){var r=function(){for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];var u=new p(n,o,t);return u.scope.arguments=arguments,e.reduce((function(n,e){return k(e,u)}),void 0)};return r.toString=function(){return"[Macro (".concat(n.map((function(n){return null===n||void 0===n?void 0:n.name})),")]")},r.isMacro=!0,r}var y=function(){function n(e){Object(d.a)(this,n),this.body=e}return Object(v.a)(n,[{key:"toString",value:function(){return M(this.body)}}]),n}();function O(n){return n instanceof y?n.body:n}function m(n){return n instanceof b}function w(n){return"string"===typeof n||n instanceof String}function x(n){return"number"===typeof n||n instanceof Number}function S(n){return!(n instanceof Array)}function k(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:N;if(m(n))return e.find(n.name)[n.name];if(S(n))return n;var t=Object(s.a)(n),r=t[0],o=t.slice(1);switch(null===r||void 0===r?void 0:r.name){case"quote":return new y(o[0]);case"if":var c=Object(i.a)(o,3),u=c[0],f=c[1],l=c[2],h=k(u,e)?f:l;return k(h,e);case"define":var d=Object(i.a)(o,2),v=d[0];h=d[1];return e.scope[v.name]=k(h,e),e.scope[v.name];case"set!":var b=Object(i.a)(o,2);v=b[0],h=b[1];e.find(v.name)[v.name]=k(h,e);break;case"lambda":var p=Object(s.a)(o);return g(p[0],p.slice(1),e);case"macro":var w=Object(s.a)(o);return j(w[0],w.slice(1),e);case".":return o.slice(1).reduce((function(n,e){return n[e.name]instanceof Function?n[e.name].bind(n):n[e.name]}),k(o[0],e));default:var x=k(n[0],e);if(null===x||void 0===x?void 0:x.isMacro){var M=o.map((function(n){return new y(n)}));return k(O(x.apply(void 0,Object(a.a)(M))))}var A=o.map((function(n){return k(n,e)}));return x.apply(void 0,Object(a.a)(A))}}function M(n){return w(n)?'"'.concat(n,'"'):n instanceof Array?"("+n.map(M).join(" ")+")":String(n)}var A=window,E=new p;E.scope=A;var C=new p;C.scope=Math,C.outer=E;var N=function(){var n=new p;return n.scope={"+":function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return e.reduce((function(n,e){return n+e}))},"-":function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return 1===e.length?-e[0]:e.reduce((function(n,e){return n-e}))},"*":function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return e.reduce((function(n,e){return n*e}))},"/":function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return e.reduce((function(n,e){return n/e}))},">":function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return e.slice(1).reduce((function(n,t,r){return n&&e[r]>t}),!0)},"<":function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return e.slice(1).reduce((function(n,t,r){return n&&e[r]<t}),!0)},">=":function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return e.slice(1).reduce((function(n,t,r){return n&&e[r]>=t}),!0)},"<=":function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return e.slice(1).reduce((function(n,t,r){return n&&e[r]<=t}),!0)},"=":function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return e.slice(1).reduce((function(n,t,r){return n&&e[r]==t}),!0)},append:function(n,e){return n.concat(e)},apply:function(n,e){return e.apply(void 0,Object(a.a)(n))},begin:function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return e.slice(-1)[0]},car:function(n){return n[0]},cdr:function(n){return n.slice(1)},cons:function(n,e){return[n].concat(e)},"eq?":function(n,e){return JSON.stringify(n)===JSON.stringify(e)},expt:Math.pow,"equal?":function(n,e){return n===e},length:function(n){return n.length},list:function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return e},"list?":function(n){return n instanceof Array},map:function(n,e){return e.map(n)},max:function(){return 1===arguments.length?Math.max.apply(Math,Object(a.a)(arguments.length<=0?void 0:arguments[0])):Math.max.apply(Math,arguments)},min:function(){return 1===arguments.length?Math.min.apply(Math,Object(a.a)(arguments.length<=0?void 0:arguments[0])):Math.min.apply(Math,arguments)},not:function(n){return!n},null:function(n){return n instanceof Array&&n.length<1},"number?":x,print:console.log,"produre?":function(n){return n instanceof Function},round:Math.round,"symbol?":m,"string?":w,Math:Math,new:function(n){return new n},eval:function(n){return k(O(n))}},n}();function F(n){var e=[];function t(){var e=n.shift();switch(e){case void 0:throw SyntaxError("uncomplete input");case"(":for(var r=[];")"!==n[0];)r.push(t());return n.shift(),r;case")":throw SyntaxError("unexpected )");default:return function(n){var e=parseFloat(n);if(!isNaN(e))return e;return function(n){return n.length>=2&&'"'==n[0]&&'"'==n[n.length-1]}(n)?String(n.slice(1,-1)):new b(n)}(e)}}for(;n.length>0;)e.push(t());return e}function I(n){return F(function(n){var e=[],t="";function r(){t=""}function o(){""!==t&&e.push(t)}function c(){if(""!==t)throw SyntaxError(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"no space")}for(var u=0;u<n.length;u++){var a=n[u];switch(a){case"(":case")":o(),e.push(a),r();break;case'"':c("nospace"+t);var i='"';for(u+=1;u<n.length;u++){var f=n[u-1],s=n[u];if(i+=s,'"'===s&&"\\"!==f)break}e.push(i);break;case";":for(o(),r(),u+=1;u<n.length&&"\n"!==n[u];u++);break;case"\n":case" ":o(),r();break;default:t+=a}}return o(),e}(n))}N.outer=C;var J=t(109);function q(n){var e=n.onClick,t=n.children,o=Object(r.useState)(!1),c=Object(i.a)(o,2),u=c[0],a=c[1],f={backgroundColor:"#00000000",color:"#a2a2a2",border:"0px",borderRight:"1px solid #a2a2a2"};u&&(f.cursor="pointer");var s=function(){a((function(n){return!n}))};return Object(J.jsx)("button",{style:f,onMouseEnter:s,onMouseLeave:s,onClick:e,children:t})}var R=function(n){var e=n.onExec,t=n.onSave,r={backgroundColor:"#00000000",color:"#a2a2a2",border:"0px",borderRight:"1px solid #a2a2a2","&:hover":{backgroundColor:"#a2a2a2"}};return Object(J.jsxs)("div",{style:{display:"flex",height:"25px",width:"100%",backgroundColor:"rgb(29,29,29)"},children:[Object(J.jsx)(q,{style:r,onClick:t,children:"save"}),Object(J.jsx)(q,{onClick:e,style:r,children:"exec"})]})};t(354);var L=function(){return Object(J.jsx)("div",{style:{background:"#616161",width:"100%",height:"2px"}})},z=function(){var n=Object(r.useState)((function(){return window.localStorage.getItem("code")||"; type your code..."})),e=Object(i.a)(n,2),t=e[0],o=e[1],c=Object(r.useState)([]),u=Object(i.a)(c,2),s=u[0],l=u[1];function h(n){l((function(e){return[].concat(Object(a.a)(e),[n])}))}N.scope.print=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];h(e.map(String).join(" "))};var d=Object(r.useRef)(null),v=Object(r.useState)(0),b=Object(i.a)(v,2),p=b[0],g=b[1],j=Object(r.useState)(0),y=Object(i.a)(j,2),O=y[0],m=y[1],w=function(){setInterval((function(){g(d.current.offsetHeight),m(d.current.offsetWidth)}),0)};return window.onresize=function(){w()},Object(r.useEffect)((function(){w()}),[]),Object(J.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[Object(J.jsx)(R,{onExec:function(){l([]);try{I(t.replace(/\r\n/gi,"\n")).forEach((function(n){return k(n)}))}catch(n){h(n),console.error(n)}},onSave:function(){localStorage.setItem("code",t)}}),Object(J.jsx)("div",{style:{flex:1},ref:d,children:Object(J.jsx)("div",{style:{position:"absolute"},children:Object(J.jsx)(f.a,{width:String(O)+"px",height:String(p)+"px",language:"clojure",theme:"vs-dark",value:t,options:{selectOnLineNumbers:!0},onChange:function(n,e){o(n)}})})}),Object(J.jsx)(L,{}),Object(J.jsx)("div",{id:"output",style:{background:"rgb(29, 29, 29)",color:"white",width:"100%",height:"200px",fontFamily:"monospace",overflowY:"auto"},children:s.map((function(n){return Object(J.jsx)("div",{children:n},n)}))})]})};u.a.render(Object(J.jsx)(o.a.StrictMode,{children:Object(J.jsx)(z,{})}),document.getElementById("root"))}},[[358,1,2]]]);
//# sourceMappingURL=main.d345f700.chunk.js.map