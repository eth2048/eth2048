(this.webpackJsonp2048ETH=this.webpackJsonp2048ETH||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),r=n(10),o=n.n(r),a=n(3),u=(n(17),n(0)),s=function(e){var t=e.children,n=e.onClick;return Object(u.jsx)("button",{className:"button",onClick:n,children:t})},l=n(26),d=n(2),j=n(7),b=c.a.createContext({containerWidth:0,tileCount:h}),f=function(e){var t=e.children,n=e.containerWidth,i=void 0===n?0:n,c=e.tileCount,r=void 0===c?h:c;return Object(u.jsx)(b.Provider,{value:{containerWidth:i,tileCount:r},children:t})},O=function(){var e=Object(i.useContext)(b);return[e.containerWidth,e.tileCount]},h=(n(19),4),v=n(8),p=(n(20),function(){var e=O(),t=Object(a.a)(e,2)[1];return Object(u.jsx)("div",{className:"grid",children:function(){for(var e=t*t,n=[],i=0;i<e;i+=1)n.push(Object(u.jsx)("div",{className:"grid-cell"},"".concat(i)));return n}()})}),x=n(11),E=(n(21),function(e){var t=e.value,n=e.position,c=e.zIndex,r=O(),o=Object(a.a)(r,2),s=o[0],l=o[1],d=Object(i.useState)(1),j=Object(a.a)(d,2),b=j[0],f=j[1],h=function(e){var t=Object(i.useRef)();return Object(i.useEffect)((function(){t.current=e})),t.current}(t),v=n[0]<l&&n[1]<l;Object(x.a)(v,"Tile out of bound");var p=void 0===h||h!==t;Object(i.useEffect)((function(){p&&(f(1.1),setTimeout((function(){return f(1)}),100))}),[p,b]);var E=function(e){return e/l*s},g={top:E(n[1]),left:E(n[0]),transform:"scale(".concat(b,")"),zIndex:c};return Object(u.jsx)("div",{className:"tile tile-".concat(t),style:g,children:t})}),g=(n(22),["id"]),C=function(e){var t=e.tiles,n=e.tileCountPerRow,i=void 0===n?h:n,c=116*i,r=c+16,o=t.map((function(e){var t=e.id,n=Object(v.a)(e,g);return Object(u.jsx)(E,Object(d.a)(Object(d.a)({},n),{},{zIndex:t}),"tile-".concat(t))}));return Object(u.jsx)("div",{className:"board",style:{width:r},children:Object(u.jsxs)(f,{containerWidth:c,tileCount:i,children:[Object(u.jsx)("div",{className:"tile-container",children:o}),Object(u.jsx)(p,{})]})})},w=1,m=n(12),T=n(4),y={tiles:{},byIds:[],hasChanged:!1,inMotion:!1},I=function(e,t){switch(t.type){case"CREATE_TILE":return Object(d.a)(Object(d.a)({},e),{},{tiles:Object(d.a)(Object(d.a)({},e.tiles),{},Object(T.a)({},t.tile.id,t.tile)),byIds:[].concat(Object(j.a)(e.byIds),[t.tile.id]),hasChanged:!1});case"UPDATE_TILE":return Object(d.a)(Object(d.a)({},e),{},{tiles:Object(d.a)(Object(d.a)({},e.tiles),{},Object(T.a)({},t.tile.id,t.tile)),hasChanged:!0});case"MERGE_TILE":var n=e.tiles,i=t.source.id,c=t.destination.id,r=(n[i],n[c],Object(v.a)(n,[i,c].map(m.a)));return Object(d.a)(Object(d.a)({},e),{},{tiles:Object(d.a)(Object(d.a)({},r),{},Object(T.a)({},t.destination.id,{id:t.destination.id,value:t.source.value+t.destination.value,position:t.destination.position})),byIds:e.byIds.filter((function(e){return e!==t.source.id})),hasChanged:!0});case"START_MOVE":return Object(d.a)(Object(d.a)({},e),{},{inMotion:!0});case"END_MOVE":return Object(d.a)(Object(d.a)({},e),{},{inMotion:!1});default:return e}},M=void 0,k=function(){var e=Object(i.useRef)(!0),t=[function(){return w++}],n=Object(a.a)(t,1)[0],c=Object(i.useReducer)(I,y),r=Object(a.a)(c,2),o=r[0],u=r[1],s=o.tiles,l=o.byIds,b=o.hasChanged,f=o.inMotion,O=Object(i.useCallback)((function(e){var t=e.position,i=e.value,c={id:n(),position:t,value:i};u({type:"CREATE_TILE",tile:c})}),[n]),v=function(e,t){setTimeout((function(){return function(e,t){u({type:"MERGE_TILE",source:e,destination:t})}(e,t)}),250)},p=function(e){u({type:"UPDATE_TILE",tile:e})},x=Object(i.useCallback)((function(){var e=new Array(h*h).fill(0);return l.forEach((function(t){var n=s[t].position,i=C(n);e[i]=t})),e}),[l,s]),E=Object(i.useCallback)((function(){return x().reduce((function(e,t,n){return 0===t?[].concat(Object(j.a)(e),[m(n)]):e}),[])}),[x]),g=Object(i.useCallback)((function(){var e=E();if(e.length>0){var t=e[Math.floor(Math.random()*e.length)];O({position:t,value:2})}}),[E,O]),C=function(e){return e[1]*h+e[0]},m=function(e){return[e%h,Math.floor(e/h)]},T=function(e,t){u({type:"START_MOVE"});for(var n=h-1,i=function(i){var c=e(i),r=void 0,o=0;c.forEach((function(e,c){var a=s[e];if(void 0!==r&&r.value===a.value){var u=Object(d.a)(Object(d.a)({},a),{},{position:r.position,mergeWith:r.id});return v(u,r),r=void 0,o+=1,p(u)}var l=Object(d.a)(Object(d.a)({},a),{},{position:m(t(i,c,o,n))});if(r=l,function(e,t){var n=e.position[0]!==t.position[0],i=e.position[1]!==t.position[1];return n||i}(a,l))return p(l)}))},c=0;c<h;c+=1)i(c);setTimeout((function(){return u({type:"END_MOVE"})}),250)};return Object(i.useEffect)((function(){if(e.current)return O({position:[0,1],value:2}),O({position:[0,2],value:2}),void(e.current=!1);!f&&b&&g()}),[b,f,O,g]),[l.map((function(e){return s[e]})),T.bind(M,(function(e){var t=x();return[t[e*h+0],t[e*h+1],t[e*h+2],t[e*h+3]].filter((function(e){return 0!==e}))}),(function(e,t,n,i){return e*h+t-n})),T.bind(M,(function(e){var t=x();return[t[e*h+0],t[e*h+1],t[e*h+2],t[e*h+3]].filter((function(e){return 0!==e})).reverse()}),(function(e,t,n,i){return e*h+i+n-t})),T.bind(M,(function(e){var t=x();return[t[e+0*h],t[e+1*h],t[e+2*h],t[e+3*h]].filter((function(e){return 0!==e}))}),(function(e,t,n,i){return e+h*(t-n)})),T.bind(M,(function(e){var t=x();return[t[e+0*h],t[e+1*h],t[e+2*h],t[e+3*h]].filter((function(e){return 0!==e})).reverse()}),(function(e,t,n,i){return e+h*(i-t+n)}))]},R=function(){var e=k(),t=Object(a.a)(e,5),n=t[0],c=t[1],r=t[2],o=t[3],s=t[4],d=Object(l.a)((function(e){switch(e.preventDefault(),e.code){case"ArrowLeft":c();break;case"ArrowRight":r();break;case"ArrowUp":o();break;case"ArrowDown":s()}}),250,{leading:!0,trailing:!1});return Object(i.useEffect)((function(){return window.addEventListener("keydown",d),function(){window.removeEventListener("keydown",d)}}),[d]),Object(u.jsx)(C,{tiles:n,tileCountPerRow:h})},A=(n(23),function(){var e=Object(i.useState)(new Date),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"2048 ETH"})}),Object(u.jsx)("div",{children:Object(u.jsx)(s,{onClick:function(){c(new Date)},children:"Restart"})})]}),Object(u.jsx)(R,{},n.toISOString()),Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"This game (2048) was built for degens."})," so I hope you can learn your lesson from it."]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Wondering what is next for the game?"})," You can find a plan here:"]}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"Dapp Intergration soon"}),Object(u.jsx)("li",{children:"Chat soon"}),Object(u.jsx)("li",{children:"Scoreboard soon"}),Object(u.jsx)("li",{children:"Reward soon"}),Object(u.jsx)("li",{children:"Mooning soon"})]})]}),Object(u.jsxs)("div",{className:"footer",children:["Made with \u2764\ufe0f by"," ","bunch of degens"]})]})}),L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),i(e),c(e),r(e),o(e)}))};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(A,{})}),document.getElementById("root")),L()}],[[24,1,2]]]);
//# sourceMappingURL=main.a14ab61b.chunk.js.map