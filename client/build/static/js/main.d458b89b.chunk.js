(this["webpackJsonpfile-upload-client"]=this["webpackJsonpfile-upload-client"]||[]).push([[0],{127:function(e,t,n){},155:function(e,t,n){},156:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(48),r=n.n(a),s=(n(127),n(19)),i=n(7),o=n(14),u=n(17),l=n(42),j=n.n(l),d=j.a.create({baseURL:"/api"}),b=function(e){throw e},h={service:d,handleUpload:function(e){return d.post("/upload",e).then((function(e){return e.data})).catch((function(e){b("error uploading file:")}))},saveNewSong:function(e){return d.post("/songs/create",e).then((function(e){return e.data})).catch((function(e){b("error saving new song")}))},findAllSongs:function(){return d.get("/songs").then((function(e){return e.data})).catch((function(e){b("error retrieving all songs")}))},getSong:function(e){return d.get("/songs/".concat(e)).then((function(e){return e.data})).catch((function(e){b("error retrieving song:")}))},signup:function(e,t){return d.post("/auth/signup",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},login:function(e,t){return d.post("/auth/login",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},logout:function(){return d.delete("/auth/logout").then((function(e){return e.data})).catch((function(e){return e.response.data}))},errorHandler:b,deleteSong:function(e){return d.delete("/".concat(e)).then((function(e){return e.data})).catch((function(e){b("error deleting song:")}))}},O=n(195),f=n(200),g=n(1);var x=function(e){var t=Object(o.f)(),n=e.user._id,a=Object(c.useState)(""),r=Object(i.a)(a,2),s=r[0],l=r[1],j=Object(c.useState)(""),d=Object(i.a)(j,2),b=d[0],x=d[1],p=Object(c.useState)(""),m=Object(i.a)(p,2),v=m[0],y=m[1],N=Object(c.useState)(n),S=Object(i.a)(N,1)[0],C=Object(c.useState)(""),w=Object(i.a)(C,2),k=w[0],U=w[1],I=Object(c.useState)([]),F=Object(i.a)(I,2),B=F[0],E=F[1],D=Object(c.useState)(null),A=Object(i.a)(D,2),L=A[0],_=A[1],T=Object(c.useState)(0),M=Object(i.a)(T,2),z=M[0],R=M[1],P=Object(c.useState)(null),J=Object(i.a)(P,2),H=J[0],W=J[1],Y=Object(g.jsx)(f.a,{variant:"contained",className:"bottomMargin",type:"submit",children:"Save new song"}),q=Object(g.jsx)("p",{children:"Loading"}),G=Object(g.jsx)("p",{style:{fontSize:15},children:"Waiting for file..."});Object(c.useEffect)((function(){return null!==L&&E(Object(u.a)(B).filter((function(e){return e!==L}))),function(){_(null)}}),[L,B]);var K=function(e){e.preventDefault(),_(e.target.tagButton.value)};return Object(c.useEffect)((function(){B.length>=5&&W("max tags number: 5")}),[B]),Object(g.jsxs)("div",{className:"secondaryContainer",children:[Object(g.jsx)("h2",{children:"Add a New MIDI song"}),Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s.length>0?h.saveNewSong({title:s,author:b,songUrl:v,createdBy:S,tags:B}).then((function(e){t.push("/songs/".concat(e._id))})).catch((function(e){return console.log("Error while adding the new song: ",e)})):W("enter a title")},className:"baseForm",children:[Object(g.jsx)(O.a,{type:"text",name:"title",value:s,onChange:function(e){return l(e.target.value)},id:"outlined-basic",label:"Title",variant:"outlined",placeholder:"Title",className:"Input"}),Object(g.jsx)(O.a,{className:"Input",type:"text",name:"author",value:b,onChange:function(e){return x(e.target.value)},id:"outlined-basic",label:"Author",variant:"outlined",placeholder:"Author"}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("label",{className:"fileUpload",children:["Choose a file",Object(g.jsx)("input",{type:"file",onChange:function(e){R(1);var t=new FormData;t.append("songUrl",e.target.files[0]),h.handleUpload(t).then((function(e){y(e.secure_url),R(2)})).catch((function(e){return console.log("Error while uploading the file: ",e)}))}})]}),Object(g.jsx)("div",{children:z>1?Y:z>0?q:G})]})]}),B.length<5&&Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),W(null),E((function(e){return[k].concat(Object(u.a)(e)).map((function(e){return e.toLowerCase()})).filter((function(e,t,n){return""===e?(W("cannot add an empty tag"),!1):n.indexOf(e)===t||(W("".concat(e," is already a tag")),!1)}))})),U("")},className:"baseForm",children:[Object(g.jsx)(O.a,{type:"text",name:"tag",value:k,placeholder:"Add tags",onChange:function(e){return U(e.target.value)}}),Object(g.jsx)(f.a,{type:"submit",children:"Add"})]}),H&&Object(g.jsx)("p",{children:H}),Object(g.jsx)("div",{className:"tagsBox",children:B.map((function(e,t){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("p",{children:e}),Object(g.jsx)("form",{onSubmit:K,children:Object(g.jsx)(f.a,{name:"tagButton",type:"submit",value:e,children:"x"})})]})}))})]})},p=n(66),m=n(32),v=n.n(m),y=n(46),N=(n(155),n(21)),S=n(110),C=n.n(S),w=n(91),k=n.n(w),U=n(111),I=n.n(U);function F(e){var t=e.title,n=e._id,a=e.songUrl,r=e.author,s=e.tags,o=e.likes,u=e.user,l=e.likedUsers,d=Object(c.useState)({title:t,_id:n,songUrl:a,author:r,tags:s,likes:o,likedUsers:l}),b=Object(i.a)(d,2),h=b[0],O=b[1],f=u?u._id:"",x=n;return Object(g.jsxs)("div",{className:"songCard",children:[Object(g.jsx)(N.b,{className:"Link",to:"/songs/".concat(n),children:Object(g.jsxs)("div",{className:"cardTop",children:[Object(g.jsx)("h3",{children:h.title}),Object(g.jsxs)("h4",{children:["By ",h.author]})]})}),Object(g.jsx)("div",{className:"tagsBox",children:s&&s.map((function(e,t){return Object(g.jsx)("p",{children:e},t)}))}),Object(g.jsxs)("div",{className:"likeAndDownloadContainer",children:[Object(g.jsx)("a",{href:a,download:"".concat(h.title,"_").concat(h.author,".mid"),children:Object(g.jsx)(C.a,{className:"customButton"})}),""!==f?Object(g.jsx)("div",{children:h.likedUsers.includes(f)?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(k.a,{id:"heartIcon",className:"customButton",onClick:function(){j.a.put("/api/unlike/".concat(x),{currentUserId:f}).then((function(e){O(e.data)})).catch((function(e){throw new Error("Cannot update likes:",e)}))}}),h.likes]}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(I.a,{id:"heartIcon",className:"customButton",onClick:function(){j.a.put("/api/like/".concat(x),{currentUserId:f}).then((function(e){O(e.data)})).catch((function(e){throw new Error("Cannot update likes:",e)}))}}),h.likes]})}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(k.a,{id:"heartIcon",className:"customButton"}),h.likes]})]})]},n)}var B=n(197),E=n(198),D=n(202),A=n(203),L=n(201),_=n(112),T=n.n(_);var M=function(e){var t=Object(c.useState)([]),n=Object(i.a)(t,2),a=n[0],r=n[1],o=e.search,l=Object(c.useState)({title:!0,author:!0,tags:!1}),j=Object(i.a)(l,2),d=j[0],b=j[1],O=function(){var e=Object(y.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.findAllSongs();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){O()}),[]);var f=o.split(" ")||[];function x(e,t){for(var n=0;n<=t.length;n++)if(t.substring(n,n+e.length).toLowerCase()===e.toLowerCase())return!0;return!1}var m=a.filter((function(e){var t,n=e.title.split(" "),c=e.author.split(" "),a=Object(u.a)(e.tags),r=Object(p.a)(f);try{for(r.s();!(t=r.n()).done;){var s=t.value;if(!0===d.title){var i,o=Object(p.a)(n);try{for(o.s();!(i=o.n()).done;){if(x(s,i.value))return!0}}catch(O){o.e(O)}finally{o.f()}}if(!0===d.author){var l,j=Object(p.a)(c);try{for(j.s();!(l=j.n()).done;){if(x(s,l.value))return!0}}catch(O){j.e(O)}finally{j.f()}}if(!0===d.tags){var b,h=Object(p.a)(a);try{for(h.s();!(b=h.n()).done;){if(x(s,b.value))return!0}}catch(O){h.e(O)}finally{h.f()}}return!1}}catch(O){r.e(O)}finally{r.f()}return!0})),N=Object(g.jsxs)("div",{className:"searchTickBoxesContainer",children:[Object(g.jsxs)("label",{children:["Title",Object(g.jsx)(B.a,{name:"title",type:"checkbox",checked:d.title,onChange:function(e){return b(Object(s.a)(Object(s.a)({},d),{},{title:e.target.checked}))}})]}),Object(g.jsx)("br",{}),Object(g.jsxs)("label",{children:["Author",Object(g.jsx)(B.a,{name:"author",type:"checkbox",checked:d.author,onChange:function(e){return b(Object(s.a)(Object(s.a)({},d),{},{author:e.target.checked}))}})]}),Object(g.jsx)("br",{}),Object(g.jsxs)("label",{children:["Tags",Object(g.jsx)(B.a,{name:"tags",type:"checkbox",checked:d.tags,onChange:function(e){return b(Object(s.a)(Object(s.a)({},d),{},{tags:e.target.checked}))}})]}),Object(g.jsx)("br",{})]});return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:"accordionContainer",children:Object(g.jsxs)(E.a,{color:"black",children:[Object(g.jsx)(D.a,{expandIcon:Object(g.jsx)(T.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(g.jsx)(L.a,{children:"Search by"})}),Object(g.jsx)(A.a,{children:Object(g.jsx)(L.a,{component:"span",children:N})})]})}),Object(g.jsx)("div",{className:"songsListContainer",children:m.length>0?m.map((function(t){return Object(g.jsx)(F,Object(s.a)({className:"songCard",user:e.user},t),t._id)})):Object(g.jsx)("p",{children:" No songs match your search"})})]})},z=n(204),R=n(113),P=n.n(R);function J(e){var t=Object(o.g)().pathname,n=Object(o.f)(),c=e.search,a=e.setSearch,r=Object(g.jsxs)("form",{className:"searchBar",children:[Object(g.jsx)(z.a,{type:"search",name:"search",value:c,onChange:function(e){return a(e.target.value)},placeholder:"Type your search here"}),"/"!==t&&Object(g.jsxs)("button",{onClick:function(e){e.preventDefault(),n.push("/")},children:[" ",Object(g.jsx)(P.a,{})]})]});return Object(g.jsxs)("nav",{className:"navBar",children:[Object(g.jsxs)("div",{className:"leftNav",children:[Object(g.jsx)(N.b,{to:"/",children:Object(g.jsx)("p",{children:"ArchiMIDI"})}),r]}),e.user?Object(g.jsxs)("div",{className:"rightNav",children:[Object(g.jsx)(N.b,{to:"/",onClick:function(){h.logout().then((function(){e.setUser(null)}))},children:Object(g.jsx)("p",{children:"Logout"})}),"/songs/add"!==t&&Object(g.jsx)(N.b,{to:"/songs/add",children:Object(g.jsx)("p",{children:"Upload Song"})}),Object(g.jsx)(N.b,{to:"/mysongs",children:Object(g.jsx)("p",{children:"My songs"})})]}):Object(g.jsxs)("div",{className:"rightNav",children:["/login"===t&&Object(g.jsx)("p",{children:"Don't have an account?"}),"/signup"!==t&&Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(N.b,{to:"/signup",children:Object(g.jsx)("p",{children:"Sign up"})})}),"/signup"===t&&Object(g.jsx)("p",{children:"Already a user?"}),"/login"!==t&&Object(g.jsx)(N.b,{to:"/login",children:Object(g.jsx)("p",{children:"Log in"})})]})]})}function H(e){var t=Object(c.useState)(null),n=Object(i.a)(t,2),a=n[0],r=n[1],u=Object(c.useState)({body:null}),l=Object(i.a)(u,2),j=l[0],d=l[1],b=Object(o.f)(),O=e.user?e.user._id:"",x=e.match.params.id;return Object(c.useEffect)((function(){var e=function(){var e=Object(y.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getSong(t);case 2:n=e.sent,r(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e(x)}),[x]),Object(c.useEffect)((function(){var e=document.createElement("script");return e.src="https://cdn.jsdelivr.net/combine/npm/tone@14.7.58,npm/@magenta/music@1.22.1/es6/core.js,npm/focus-visible@5,npm/html-midi-player@1.4.0",e.async=!0,document.body.appendChild(e),function(){document.body.removeChild(e)}}),[]),Object(c.useEffect)((function(){a&&d({body:Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("section",{id:"player2",children:[Object(g.jsx)("midi-player",{src:a.songUrl,visualizer:"#player2 midi-visualizer"}),Object(g.jsx)("midi-visualizer",{type:"piano-roll",src:a.songUrl})]})})})}),[a]),Object(g.jsxs)("div",{className:"detailsContainer",children:[""===O&&Object(g.jsx)(N.b,{to:"/login",style:{},children:Object(g.jsx)("div",{children:"Log in to download and like this MIDI song"})}),a&&Object(g.jsxs)("div",{className:"baseForm",children:[Object(g.jsx)(F,Object(s.a)({id:"songCardDetails",user:e.user},a),a._id),Object(g.jsxs)("div",{children:[O===a.createdBy&&Object(g.jsxs)(f.a,{variant:"contained",onClick:function(){return function(e){try{h.deleteSong(e),b.push("/")}catch(t){return console.log(t)}}(a._id)},children:['Delete "',a.title,'"']}),O===a.createdBy&&Object(g.jsx)(N.b,{to:"/songs/edit/".concat(a._id),children:Object(g.jsxs)(f.a,{style:{marginLeft:30},variant:"contained",children:['Edit "',a.title,'"']})})]}),null!==j.body?Object(g.jsx)("div",{children:j.body}):Object(g.jsx)("p",{children:"There's nothing to play"})]})]})}function W(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),o=Object(i.a)(s,2),u=o[0],l=o[1],j=Object(c.useState)(""),d=Object(i.a)(j,2),b=d[0],x=d[1];return Object(g.jsxs)("div",{className:"secondaryContainer",children:[Object(g.jsx)("h3",{children:"Register"}),Object(g.jsxs)("form",{onSubmit:function(t){t.preventDefault(),h.signup(a,u).then((function(t){t.message?(r(""),l(""),x(t.message)):(e.setUser(t),e.history.push("/"))})).catch((function(e){return console.log(e)}))},className:"baseForm",children:[Object(g.jsx)(O.a,{type:"text",name:"username",value:a,onChange:function(e){return r(e.target.value)},className:"Input",error:!!b,label:"Username",variant:"outlined"}),Object(g.jsx)(O.a,{type:"password",name:"password",value:u,onChange:function(e){return l(e.target.value)},className:"Input",error:!!b,label:"Password",variant:"outlined"}),Object(g.jsx)(f.a,{variant:"contained",type:"submit",children:"Register "}),b&&Object(g.jsx)("h3",{children:b})]})]})}function Y(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),o=Object(i.a)(s,2),u=o[0],l=o[1],j=Object(c.useState)(""),d=Object(i.a)(j,2),b=d[0],x=d[1];return Object(g.jsxs)("div",{className:"secondaryContainer",children:[Object(g.jsx)("h3",{children:"Log in"}),Object(g.jsxs)("form",{onSubmit:function(t){t.preventDefault(),h.login(a,u).then((function(t){console.log("handlesubmit service.login response:",t),t.message?(x(t.message),r(""),l("")):(e.setUser(t),e.history.push("/"))})).catch((function(e){console.log(e)}))},className:"baseForm",children:[Object(g.jsx)(O.a,{type:"text",name:"username",value:a,onChange:function(e){return r(e.target.value)},className:"Input",error:!!b,label:"Username",variant:"outlined",style:{color:"grey"}}),Object(g.jsx)(O.a,{type:"password",name:"password",value:u,onChange:function(e){return l(e.target.value)},className:"Input",label:"Password",variant:"outlined",error:!!b}),Object(g.jsx)(f.a,{variant:"contained",type:"submit",children:"Log in"}),b&&Object(g.jsx)("h3",{children:b})]})]})}function q(e){var t=Object(c.useState)([]),n=Object(i.a)(t,2),a=n[0],r=n[1],o=function(){var e=Object(y.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.findAllSongs();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){o()}),[]);var u=a.filter((function(t){return t.createdBy===e.user._id}));return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h3",{children:"My Songs"}),Object(g.jsx)("div",{className:"songsListContainer",children:u.length>=1?Object(g.jsx)(g.Fragment,{children:u.map((function(e){return Object(g.jsx)(F,Object(s.a)({},e),e._id)}))}):Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("h1",{children:"You haven't uploaded any songs yet"})})})]})}function G(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),o=Object(i.a)(s,2),u=o[0],l=o[1],d=e.match.params.id;Object(c.useEffect)((function(){var e=function(){var e=Object(y.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getSong(t);case 2:n=e.sent,r(n.title),l(n.author);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e(d)}),[d]);return Object(g.jsxs)("div",{className:"secondaryContainer",children:[Object(g.jsx)("h3",{children:"Edit song"}),Object(g.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,author:u};j.a.put("/api/".concat(d),n).then((function(){e.history.push("/songs/".concat(d))})).catch((function(e){return console.log(e)}))},className:"baseForm",children:[Object(g.jsx)(O.a,{type:"text",name:"title",value:a,onChange:function(e){return r(e.target.value)},className:"Input",label:"Title",variant:"outlined"}),Object(g.jsx)(O.a,{type:"text",name:"author",value:u,onChange:function(e){return l(e.target.value)},className:"Input",label:"Author",variant:"outlined"}),Object(g.jsx)(f.a,{variant:"contained",type:"submit",children:"Update this project"})]})]})}var K=function(e){var t=Object(c.useState)(e.search),n=Object(i.a)(t,2),a=n[0],r=n[1],u=Object(c.useState)(e.user),l=Object(i.a)(u,2),j=l[0],d=l[1],b=function(e){d(e)};return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(J,{user:j,setUser:d,search:a,setSearch:r,currentPage:e}),Object(g.jsx)("div",{className:"mainContainer",children:Object(g.jsxs)(o.c,{children:[Object(g.jsx)(o.a,{exact:!0,path:"/",render:function(e){return Object(g.jsx)(M,{search:a,setSearch:r,user:j})}}),Object(g.jsx)(o.a,{exact:!0,path:"/songs/add",render:j?function(e){return Object(g.jsx)(x,{user:j,setUser:d})}:function(e){return Object(g.jsx)(Y,Object(s.a)({setUser:b},e))}}),Object(g.jsx)(o.a,{exact:!0,path:"/songs/:id",render:j?function(e){return Object(g.jsx)(H,Object(s.a)({user:j},e))}:function(e){return Object(g.jsx)(H,Object(s.a)({user:null},e))}}),Object(g.jsx)(o.a,{exact:!0,path:"/signup",render:function(e){return Object(g.jsx)(W,Object(s.a)({setUser:b},e))}}),Object(g.jsx)(o.a,{exact:!0,path:"/login",render:function(e){return Object(g.jsx)(Y,Object(s.a)({setUser:b},e))}}),Object(g.jsx)(o.a,{exact:!0,path:"/mysongs",render:function(e){return Object(g.jsx)(q,{user:j,setUser:d})}}),Object(g.jsx)(o.a,{exact:!0,path:"/songs/edit/:id",component:G}),Object(g.jsx)(o.a,{component:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h1",{children:"404 - Not Found"}),"  ",Object(g.jsx)(N.b,{to:"/",children:"Return home"})]})}}),"2"]})})]})};j.a.get("/api/auth/loggedin").then((function(e){var t=e.data;r.a.render(Object(g.jsx)(N.a,{children:Object(g.jsx)(K,{user:t,search:""})}),document.getElementById("root"))}))}},[[156,1,2]]]);
//# sourceMappingURL=main.d458b89b.chunk.js.map