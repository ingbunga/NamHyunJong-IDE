(this["webpackJsonpnamhyunjong-ide"]=this["webpackJsonpnamhyunjong-ide"]||[]).push([[0],{356:function(n,r,t){"use strict";t.r(r);var e=t(145),c=t.n(e),u=t(240),o=t.n(u),a=t(20),i=t(21),f=t(253),s=t(182),l=t(37),h=t(220),v=t(0),d=t(1),p=function(){function n(r){Object(v.a)(this,n),this.name=r}return Object(d.a)(n,[{key:"toString",value:function(){return this.name}}]),n}(),g=function(){function n(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;Object(v.a)(this,n),this.scope=Object(h.a)(Object(h.a)({},this.scope),r.reduce((function(n,r,e){return Object(h.a)(Object(h.a)({},n),{},Object(l.a)({},r.name,t[e]))}),{})),this.outer=e}return Object(d.a)(n,[{key:"find",value:function(n){if(void 0!==this.scope[n])return this.scope;if(this.outer)return this.outer.find(n);throw SyntaxError("cannot find symbol ".concat(n))}}]),n}();function b(n,r,t){var e=function(){for(var e=arguments.length,c=new Array(e),u=0;u<e;u++)c[u]=arguments[u];var o=new g(n,c,t);return o.scope.arguments=arguments,r.reduce((function(n,r){return M(r,o)}),void 0)};return e.toString=function(){return"[Procedure (".concat(n.map((function(n){return null===n||void 0===n?void 0:n.name})),")]")},e}function y(n,r,t){var e=function(){for(var e=arguments.length,c=new Array(e),u=0;u<e;u++)c[u]=arguments[u];var o=new g(n,c,t);return o.scope.arguments=arguments,r.reduce((function(n,r){return M(r,o)}),void 0)};return e.toString=function(){return"[Macro (".concat(n.map((function(n){return null===n||void 0===n?void 0:n.name})),")]")},e.isMacro=!0,e}var j=function(){function n(r){Object(v.a)(this,n),this.body=r}return Object(d.a)(n,[{key:"toString",value:function(){return S(this.body)}}]),n}();function m(n){return n instanceof j?n.body:n}function w(n){return n instanceof p}function O(n){return"string"===typeof n||n instanceof String}function x(n){return"number"===typeof n||n instanceof Number}function A(n){return!(n instanceof Array)}function M(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:F;if(w(n))return r.find(n.name)[n.name];if(A(n))return n;var t=Object(s.a)(n),e=t[0],c=t.slice(1);switch(null===e||void 0===e?void 0:e.name){case"quote":return new j(c[0]);case"if":var u=Object(i.a)(c,3),o=u[0],f=u[1],l=u[2],h=M(o,r)?f:l;return M(h,r);case"define":var v=Object(i.a)(c,2),d=v[0];h=v[1];return r.scope[d.name]=M(h,r),r.scope[d.name];case"set!":var p=Object(i.a)(c,2);d=p[0],h=p[1];r.find(d.name)[d.name]=M(h,r);break;case"lambda":var g=Object(s.a)(c);return b(g[0],g.slice(1),r);case"macro":var O=Object(s.a)(c);return y(O[0],O.slice(1),r);case".":return c.slice(1).reduce((function(n,r){return n[r.name]instanceof Function?n[r.name].bind(n):n[r.name]}),M(c[0],r));default:var x=M(n[0],r);if(null===x||void 0===x?void 0:x.isMacro){var S=c.map((function(n){return new j(n)}));return M(m(x.apply(void 0,Object(a.a)(S))))}var k=c.map((function(n){return M(n,r)}));return x.apply(void 0,Object(a.a)(k))}}function S(n){return O(n)?'"'.concat(n,'"'):n instanceof Array?"("+n.map(S).join(" ")+")":String(n)}var k=window,E=new g;E.scope=k;var N=new g;N.scope=Math,N.outer=E;var F=function(){var n=new g;return n.scope={"+":function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return r.reduce((function(n,r){return n+r}))},"-":function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return 1===r.length?-r[0]:r.reduce((function(n,r){return n-r}))},"*":function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return r.reduce((function(n,r){return n*r}))},"/":function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return r.reduce((function(n,r){return n/r}))},">":function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return r.slice(1).reduce((function(n,t,e){return n&&r[e]>t}),!0)},"<":function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return r.slice(1).reduce((function(n,t,e){return n&&r[e]<t}),!0)},">=":function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return r.slice(1).reduce((function(n,t,e){return n&&r[e]>=t}),!0)},"<=":function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return r.slice(1).reduce((function(n,t,e){return n&&r[e]<=t}),!0)},"=":function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return r.slice(1).reduce((function(n,t,e){return n&&r[e]==t}),!0)},append:function(n,r){return n.concat(r)},apply:function(n,r){return r.apply(void 0,Object(a.a)(n))},begin:function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return r.slice(-1)[0]},car:function(n){return n[0]},cdr:function(n){return n.slice(1)},cons:function(n,r){return[n].concat(r)},"eq?":function(n,r){return JSON.stringify(n)===JSON.stringify(r)},expt:Math.pow,"equal?":function(n,r){return n===r},length:function(n){return n.length},list:function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return r},"list?":function(n){return n instanceof Array},map:function(n,r){return r.map(n)},max:function(){return 1===arguments.length?Math.max.apply(Math,Object(a.a)(arguments.length<=0?void 0:arguments[0])):Math.max.apply(Math,arguments)},min:function(){return 1===arguments.length?Math.min.apply(Math,Object(a.a)(arguments.length<=0?void 0:arguments[0])):Math.min.apply(Math,arguments)},not:function(n){return!n},null:function(n){return n instanceof Array&&n.length<1},"number?":x,print:console.log,"produre?":function(n){return n instanceof Function},round:Math.round,"symbol?":w,"string?":O,Math:Math,new:function(n){return new n},eval:function(n){return M(m(n))}},n}();function J(n){var r=[];function t(){var r=n.shift();switch(r){case void 0:throw SyntaxError("uncomplete input");case"(":for(var e=[];")"!==n[0];)e.push(t());return n.shift(),e;case")":throw SyntaxError("unexpected )");default:return function(n){var r=parseFloat(n);if(!isNaN(r))return r;return function(n){return n.length>=2&&'"'==n[0]&&'"'==n[n.length-1]}(n)?String(n.slice(1,-1)):new p(n)}(r)}}for(;n.length>0;)r.push(t());return r}function q(n){return J(function(n){var r=[],t="";function e(){t=""}function c(){""!==t&&r.push(t)}function u(){if(""!==t)throw SyntaxError(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"no space")}for(var o=0;o<n.length;o++){var a=n[o];switch(a){case"(":case")":c(),r.push(a),e();break;case'"':u("nospace"+t);var i='"';for(o+=1;o<n.length;o++){var f=n[o-1],s=n[o];if(i+=s,'"'===s&&"\\"!==f)break}r.push(i);break;case";":for(c(),e(),o+=1;o<n.length&&"\n"!==n[o];o++);break;case"\n":case" ":c(),e();break;default:t+=a}}return c(),r}(n))}F.outer=N;var C=t(158);var B=function(){var n=Object(e.useState)("; type your code..."),r=Object(i.a)(n,2),t=r[0],c=r[1],u=Object(e.useState)([]),o=Object(i.a)(u,2),s=o[0],l=o[1];function h(n){l((function(r){return[].concat(Object(a.a)(r),[n])}))}return F.scope.print=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];h(r.map(String).join(" "))},Object(C.jsxs)("div",{children:[Object(C.jsx)(f.a,{width:"800",height:"600",language:"clojure",theme:"vs-dark",value:t,options:{selectOnLineNumbers:!0},onChange:function(n,r){c(n)}}),Object(C.jsx)("div",{children:Object(C.jsx)("button",{onClick:function(){l("");try{q(t.replace(/\r\n/gi,"\n")).forEach((function(n){return M(n)}))}catch(n){h(n),console.error(n)}},children:"exec"})}),Object(C.jsx)("div",{id:"output",style:{background:"rgb(29, 29, 29)",color:"white",width:"800px",height:"100px",fontFamily:"monospace",overflowY:"auto"},children:s.map((function(n){return Object(C.jsx)("div",{children:n})}))})]})};o.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(B,{})}),document.getElementById("root"))}},[[356,1,2]]]);
//# sourceMappingURL=main.057c19f0.chunk.js.map