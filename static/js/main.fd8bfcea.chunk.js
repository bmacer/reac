(this.webpackJsonpreac=this.webpackJsonpreac||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(8),r=n.n(i),a=(n(13),n(3)),o=n(4),j=n(7),l=n(6),u=(n(14),n(5)),d=n(0),h=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.call(this)}return Object(o.a)(n,[{key:"componentWillMount",value:function(){this.getData()}},{key:"getData",value:function(){fetch("https://api.amp.cisco.com/v1/events").then((function(e){return e.json()})).then((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)("p",{children:"AMP"})})}}]),n}(c.Component),b=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).state={img:"images/scissor-icon.jpeg"},c}return Object(o.a)(n,[{key:"componentDidMount",value:function(){(new Image).src="images/scissor-icon.jpeg"}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"scissors",children:Object(d.jsx)("img",{src:"images/scissor-icon.jpeg",alt:"nothin"})})}}]),n}(s.a.Component);var O=function(){return console.log(u),Object(d.jsxs)("div",{className:"clipperz-app",children:[Object(d.jsxs)("div",{className:"heading",children:[Object(d.jsx)(h,{}),Object(d.jsx)(b,{}),Object(d.jsx)("h1",{className:"scissors",children:"Clipperz"}),Object(d.jsx)(b,{})]}),Object(d.jsxs)("table",{children:[Object(d.jsxs)("thead",{children:[Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Review"})]}),Object(d.jsx)("tbody",{children:u.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.name}),Object(d.jsxs)("td",{children:['"',e.review,'"']})]})}))})]})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),i(e),r(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),p()},5:function(e){e.exports=JSON.parse('[{"id":1,"name":"brandon","review":"it was great"},{"id":2,"name":"aurora","review":"it was awesome"}]')}},[[16,1,2]]]);
//# sourceMappingURL=main.fd8bfcea.chunk.js.map