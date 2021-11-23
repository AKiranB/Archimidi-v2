(this["webpackJsonpfile-upload-client"]=this["webpackJsonpfile-upload-client"]||[]).push([[0],{120:function(e,t,n){},148:function(e,t,n){},149:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(44),r=n.n(a),s=(n(120),n(18)),i=n(6),o=n(14),u=n(17),l=n(40),j=n.n(l),d=j.a.create({baseURL:"/api"}),b=function(e){throw e},h={service:d,handleUpload:function(e){return d.post("/upload",e).then((function(e){return e.data})).catch((function(e){b("error uploading file:")}))},saveNewSong:function(e){return d.post("/songs/create",e).then((function(e){return e.data})).catch((function(e){b("error saving new song")}))},findAllSongs:function(){return d.get("/songs").then((function(e){return e.data})).catch((function(e){b("error retrieving all songs")}))},getSong:function(e){return d.get("/songs/".concat(e)).then((function(e){return e.data})).catch((function(e){b("error retrieving song:")}))},signup:function(e,t){return d.post("/auth/signup",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},login:function(e,t){return d.post("/auth/login",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},logout:function(){return d.delete("/auth/logout").then((function(e){return e.data})).catch((function(e){return e.response.data}))},errorHandler:b,deleteSong:function(e){return d.delete("/".concat(e)).then((function(e){return e.data})).catch((function(e){b("error deleting song:")}))}},O=n(184),f=n(188),g=n(1);var p=function(e){var t=Object(o.f)(),n=e.user._id,a=Object(c.useState)(""),r=Object(i.a)(a,2),s=r[0],l=r[1],j=Object(c.useState)(""),d=Object(i.a)(j,2),b=d[0],p=d[1],x=Object(c.useState)(""),m=Object(i.a)(x,2),v=m[0],y=m[1],S=Object(c.useState)(n),N=Object(i.a)(S,1)[0],C=Object(c.useState)(""),w=Object(i.a)(C,2),k=w[0],U=w[1],F=Object(c.useState)([]),B=Object(i.a)(F,2),E=B[0],D=B[1],I=Object(c.useState)(null),A=Object(i.a)(I,2),_=A[0],L=A[1],T=Object(c.useState)(0),M=Object(i.a)(T,2),z=M[0],P=M[1],J=Object(c.useState)(null),R=Object(i.a)(J,2),H=R[0],W=R[1],Y=Object(g.jsx)(f.a,{variant:"contained",className:"bottomMargin",type:"submit",children:"Save new song"}),q=Object(g.jsx)("p",{children:"Loading"}),G=Object(g.jsx)("p",{style:{fontSize:15},children:"Waiting for file..."});Object(c.useEffect)((function(){return null!==_&&D(Object(u.a)(E).filter((function(e){return e!==_}))),function(){L(null)}}),[_,E]);var K=function(e){e.preventDefault(),L(e.target.tagButton.value)};return Object(c.useEffect)((function(){E.length>=5&&W("max tags number: 5")}),[E]),Object(g.jsxs)("div",{className:"secondaryContainer",children:[Object(g.jsx)("h2",{children:"Add a New MIDI song"}),Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s.length>0?h.saveNewSong({title:s,author:b,songUrl:v,createdBy:N,tags:E}).then((function(e){t.push("/songs/".concat(e._id))})).catch((function(e){return console.log("Error while adding the new song: ",e)})):W("enter a title")},className:"baseForm",children:[Object(g.jsx)(O.a,{type:"text",name:"title",value:s,onChange:function(e){return l(e.target.value)},id:"outlined-basic",label:"Title",variant:"outlined",placeholder:"Title",className:"Input"}),Object(g.jsx)(O.a,{className:"Input",type:"text",name:"author",value:b,onChange:function(e){return p(e.target.value)},id:"outlined-basic",label:"Author",variant:"outlined",placeholder:"Author"}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("label",{className:"fileUpload",children:["Choose a file",Object(g.jsx)("input",{type:"file",onChange:function(e){P(1);var t=new FormData;t.append("songUrl",e.target.files[0]),h.handleUpload(t).then((function(e){y(e.secure_url),P(2)})).catch((function(e){return console.log("Error while uploading the file: ",e)}))}})]}),Object(g.jsx)("div",{children:z>1?Y:z>0?q:G})]})]}),E.length<5&&Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),W(null),D((function(e){return[k].concat(Object(u.a)(e)).map((function(e){return e.toLowerCase()})).filter((function(e,t,n){return""===e?(W("cannot add an empty tag"),!1):n.indexOf(e)===t||(W("".concat(e," is already a tag")),!1)}))})),U("")},className:"baseForm",children:[Object(g.jsx)(O.a,{type:"text",name:"tag",value:k,placeholder:"Add tags",onChange:function(e){return U(e.target.value)}}),Object(g.jsx)(f.a,{type:"submit",children:"Add"})]}),H&&Object(g.jsx)("p",{children:H}),Object(g.jsx)("div",{className:"tagsBox",children:E.map((function(e,t){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("p",{children:e}),Object(g.jsx)("form",{onSubmit:K,children:Object(g.jsx)(f.a,{name:"tagButton",type:"submit",value:e,children:"x"})})]})}))})]})},x=n(61),m=n(31),v=n.n(m),y=n(42),S=(n(148),n(20)),N=n(102),C=n.n(N),w=n(82),k=n.n(w),U=n(103),F=n.n(U);function B(e){var t=e.title,n=e._id,a=e.songUrl,r=e.author,s=e.tags,o=e.likes,u=e.user,l=e.likedUsers,d=Object(c.useState)({title:t,_id:n,songUrl:a,author:r,tags:s,likes:o,likedUsers:l}),b=Object(i.a)(d,2),h=b[0],O=b[1],f=u?u._id:"",p=n;return console.log(u),Object(g.jsxs)("div",{className:"songCard",children:[Object(g.jsx)(S.b,{className:"Link",to:"/songs/".concat(n),children:Object(g.jsxs)("div",{className:"cardTop",children:[Object(g.jsx)("h3",{children:h.title}),Object(g.jsxs)("h4",{children:["By ",h.author]})]})}),Object(g.jsx)("div",{className:"tagsBox",children:s&&s.map((function(e,t){return Object(g.jsx)("p",{children:e},t)}))}),Object(g.jsxs)("div",{className:"likeAndDownloadContainer",children:[Object(g.jsx)("a",{href:a,download:"".concat(h.title,"_").concat(h.author,".mid"),children:Object(g.jsx)(C.a,{className:"customButton"})}),""!==f?Object(g.jsx)("div",{children:h.likedUsers.includes(f)?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(k.a,{className:"customButton",onClick:function(){j.a.put("/api/unlike/".concat(p),{currentUserId:f}).then((function(e){O(e.data)})).catch((function(e){throw new Error("Cannot update likes:",e)}))}}),h.likes]}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(F.a,{className:"customButton",onClick:function(){j.a.put("/api/like/".concat(p),{currentUserId:f}).then((function(e){O(e.data)})).catch((function(e){throw new Error("Cannot update likes:",e)}))}}),h.likes]})}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(k.a,{className:"customButton"}),h.likes]})]})]},n)}var E=n(186);var D=function(e){var t=Object(c.useState)([]),n=Object(i.a)(t,2),a=n[0],r=n[1],o=e.search,l=Object(c.useState)({title:!0,author:!0,tags:!1}),j=Object(i.a)(l,2),d=j[0],b=j[1],O=function(){var e=Object(y.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.findAllSongs();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){O()}),[]);var f=o.split(" ")||[];function p(e,t){for(var n=0;n<=t.length;n++)if(t.substring(n,n+e.length).toLowerCase()===e.toLowerCase())return!0;return!1}var m=a.filter((function(e){var t,n=e.title.split(" "),c=e.author.split(" "),a=Object(u.a)(e.tags),r=Object(x.a)(f);try{for(r.s();!(t=r.n()).done;){var s=t.value;if(!0===d.title){var i,o=Object(x.a)(n);try{for(o.s();!(i=o.n()).done;){if(p(s,i.value))return!0}}catch(O){o.e(O)}finally{o.f()}}if(!0===d.author){var l,j=Object(x.a)(c);try{for(j.s();!(l=j.n()).done;){if(p(s,l.value))return!0}}catch(O){j.e(O)}finally{j.f()}}if(!0===d.tags){var b,h=Object(x.a)(a);try{for(h.s();!(b=h.n()).done;){if(p(s,b.value))return!0}}catch(O){h.e(O)}finally{h.f()}}return!1}}catch(O){r.e(O)}finally{r.f()}return!0}));return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"searchTickBoxesContainer",children:[Object(g.jsxs)("label",{children:["Search by Title",Object(g.jsx)(E.a,{name:"title",type:"checkbox",checked:d.title,onChange:function(e){return b(Object(s.a)(Object(s.a)({},d),{},{title:e.target.checked}))}})]}),Object(g.jsx)("br",{}),Object(g.jsxs)("label",{children:["Search by Author",Object(g.jsx)(E.a,{name:"author",type:"checkbox",checked:d.author,onChange:function(e){return b(Object(s.a)(Object(s.a)({},d),{},{author:e.target.checked}))}})]}),Object(g.jsx)("br",{}),Object(g.jsxs)("label",{children:["Search through the tags",Object(g.jsx)(E.a,{name:"tags",type:"checkbox",checked:d.tags,onChange:function(e){return b(Object(s.a)(Object(s.a)({},d),{},{tags:e.target.checked}))}})]}),Object(g.jsx)("br",{})]}),Object(g.jsx)("div",{className:"songsListContainer",children:m.length>0?m.map((function(t){return Object(g.jsx)(B,Object(s.a)({className:"songCard",user:e.user},t),t._id)})):Object(g.jsx)("p",{children:" No songs match your search"})})]})},I=n(189);function A(e){var t=Object(o.g)().pathname,n=Object(o.f)(),c=e.search,a=e.setSearch,r=Object(g.jsxs)("form",{className:"searchBar",children:[Object(g.jsx)(I.a,{type:"search",name:"search",value:c,onChange:function(e){return a(e.target.value)},placeholder:"Type your search here"}),"/"!==t&&Object(g.jsx)("button",{onClick:function(e){e.preventDefault(),n.push("/")},children:" Search  "})]});return Object(g.jsxs)("nav",{className:"navBar",children:[Object(g.jsxs)("div",{className:"leftNav",children:[Object(g.jsx)(S.b,{to:"/",children:Object(g.jsx)("p",{children:"ArchiMIDI"})}),r]}),e.user?Object(g.jsxs)("div",{className:"rightNav",children:[Object(g.jsx)(S.b,{to:"/",onClick:function(){h.logout().then((function(){e.setUser(null)}))},children:Object(g.jsx)("p",{children:"Logout"})}),"/songs/add"!==t&&Object(g.jsx)(S.b,{to:"/songs/add",children:Object(g.jsx)("p",{children:"Upload Song"})}),Object(g.jsx)(S.b,{to:"/mysongs",children:Object(g.jsx)("p",{children:"My songs"})})]}):Object(g.jsxs)("div",{className:"rightNav",children:["/login"===t&&Object(g.jsx)("p",{children:"Don't have an account?"}),"/signup"!==t&&Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(S.b,{to:"/signup",children:Object(g.jsx)("p",{children:"Sign up"})})}),"/signup"!==t&&"/login"!==t&&Object(g.jsx)("p",{children:"or"}),"/signup"===t&&Object(g.jsx)("p",{children:"Already a user?"}),"/login"!==t&&Object(g.jsx)(S.b,{to:"/login",children:Object(g.jsx)("p",{children:"Log in"})}),"/signup"!==t&&"/login"!==t&&Object(g.jsx)("p",{children:"To upload a song "})]})]})}function _(e){var t=Object(c.useState)(null),n=Object(i.a)(t,2),a=n[0],r=n[1],u=Object(c.useState)({body:null}),l=Object(i.a)(u,2),j=l[0],d=l[1],b=Object(o.f)(),O=e.user?e.user._id:"",p=e.match.params.id;return Object(c.useEffect)((function(){var e=function(){var e=Object(y.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getSong(t);case 2:n=e.sent,r(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e(p)}),[p]),Object(c.useEffect)((function(){var e=document.createElement("script");return e.src="https://cdn.jsdelivr.net/combine/npm/tone@14.7.58,npm/@magenta/music@1.22.1/es6/core.js,npm/focus-visible@5,npm/html-midi-player@1.4.0",e.async=!0,document.body.appendChild(e),function(){document.body.removeChild(e)}}),[]),Object(c.useEffect)((function(){a&&d({body:Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("section",{id:"player2",children:[Object(g.jsx)("midi-player",{src:a.songUrl,visualizer:"#player2 midi-visualizer"}),Object(g.jsx)("midi-visualizer",{type:"piano-roll",src:a.songUrl})]})})})}),[a]),Object(g.jsxs)("div",{className:"detailsContainer",children:[""===O&&Object(g.jsx)(S.b,{to:"/login",children:Object(g.jsx)("div",{style:{color:"red"},children:"Log in to download and like this MIDI song"})}),a&&Object(g.jsxs)("div",{className:"baseForm",children:[Object(g.jsx)(B,Object(s.a)({id:"songCardDetails",user:e.user},a),a._id),Object(g.jsxs)("div",{children:[O===a.createdBy&&Object(g.jsxs)(f.a,{variant:"contained",onClick:function(){return function(e){try{h.deleteSong(e),b.push("/")}catch(t){return console.log(t)}}(a._id)},children:["Delete ",a.title]}),O===a.createdBy&&Object(g.jsx)(S.b,{to:"/songs/edit/".concat(a._id),children:Object(g.jsxs)(f.a,{variant:"contained",children:["Edit ",a.title]})})]}),null!==j.body?Object(g.jsx)("div",{children:j.body}):Object(g.jsx)("p",{children:"There's nothing to play"})]})]})}function L(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),o=Object(i.a)(s,2),u=o[0],l=o[1],j=Object(c.useState)(""),d=Object(i.a)(j,2),b=d[0],p=d[1];return Object(g.jsxs)("div",{className:"secondaryContainer",children:[Object(g.jsx)("h3",{children:"Sign up"}),Object(g.jsxs)("form",{onSubmit:function(t){t.preventDefault(),h.signup(a,u).then((function(t){t.message?(r(""),l(""),p(t.message)):(e.setUser(t),e.history.push("/"))})).catch((function(e){return console.log(e)}))},className:"baseForm",children:[Object(g.jsx)(O.a,{type:"text",name:"username",value:a,onChange:function(e){return r(e.target.value)},className:"Input",error:!!b,label:"Username",variant:"outlined"}),Object(g.jsx)(O.a,{type:"password",name:"password",value:u,onChange:function(e){return l(e.target.value)},className:"Input",error:!!b,label:"Password",variant:"outlined"}),Object(g.jsx)(f.a,{variant:"contained",type:"submit",children:"Sign Up "}),b&&Object(g.jsx)("h3",{children:b})]})]})}function T(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),o=Object(i.a)(s,2),u=o[0],l=o[1],j=Object(c.useState)(""),d=Object(i.a)(j,2),b=d[0],p=d[1];return Object(g.jsxs)("div",{className:"secondaryContainer",children:[Object(g.jsx)("h3",{children:"Log in"}),Object(g.jsxs)("form",{onSubmit:function(t){t.preventDefault(),h.login(a,u).then((function(t){console.log("handlesubmit service.login response:",t),t.message?(p(t.message),r(""),l("")):(e.setUser(t),e.history.push("/"))})).catch((function(e){console.log(e)}))},className:"baseForm",children:[Object(g.jsx)(O.a,{type:"text",name:"username",value:a,onChange:function(e){return r(e.target.value)},className:"Input",error:!!b,label:"Username",variant:"outlined",style:{color:"grey"}}),Object(g.jsx)(O.a,{type:"password",name:"password",value:u,onChange:function(e){return l(e.target.value)},className:"Input",label:"Password",variant:"outlined",error:!!b}),Object(g.jsx)(f.a,{variant:"contained",type:"submit",children:"Log in"}),b&&Object(g.jsx)("h3",{children:b})]})]})}function M(e){var t=Object(c.useState)([]),n=Object(i.a)(t,2),a=n[0],r=n[1],o=function(){var e=Object(y.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.findAllSongs();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){o()}),[]);var u=a.filter((function(t){return t.createdBy===e.user._id}));return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h3",{children:"My Songs"}),Object(g.jsx)("div",{className:"songsListContainer",children:u.length>=1?Object(g.jsx)(g.Fragment,{children:u.map((function(e){return Object(g.jsx)(B,Object(s.a)({},e),e._id)}))}):Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("h1",{children:"You haven't uploaded any songs yet"})})})]})}function z(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),o=Object(i.a)(s,2),u=o[0],l=o[1],d=e.match.params.id;Object(c.useEffect)((function(){var e=function(){var e=Object(y.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getSong(t);case 2:n=e.sent,r(n.title),l(n.author);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e(d)}),[d]);return Object(g.jsxs)("div",{className:"secondaryContainer",children:[Object(g.jsx)("h3",{children:"Edit song"}),Object(g.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,author:u};j.a.put("/api/".concat(d),n).then((function(){e.history.push("/songs/".concat(d))})).catch((function(e){return console.log(e)}))},className:"baseForm",children:[Object(g.jsx)("label",{htmlFor:"title",children:"Title:"}),Object(g.jsx)("input",{type:"text",name:"title",value:a,onChange:function(e){return r(e.target.value)}}),Object(g.jsx)("label",{htmlFor:"author",children:"Author: "}),Object(g.jsx)("input",{type:"text",name:"author",value:u,onChange:function(e){return l(e.target.value)}}),Object(g.jsx)("button",{type:"submit",children:"Update this project"})]})]})}var P=function(e){var t=Object(c.useState)(e.search),n=Object(i.a)(t,2),a=n[0],r=n[1],u=Object(c.useState)(e.user),l=Object(i.a)(u,2),j=l[0],d=l[1],b=function(e){d(e)};return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(A,{user:j,setUser:d,search:a,setSearch:r,currentPage:e}),Object(g.jsx)("div",{className:"mainContainer",children:Object(g.jsxs)(o.c,{children:[Object(g.jsx)(o.a,{exact:!0,path:"/",render:function(e){return Object(g.jsx)(D,{search:a,setSearch:r,user:j})}}),Object(g.jsx)(o.a,{exact:!0,path:"/songs/add",render:j?function(e){return Object(g.jsx)(p,{user:j,setUser:d})}:function(e){return Object(g.jsx)(T,Object(s.a)({setUser:b},e))}}),Object(g.jsx)(o.a,{exact:!0,path:"/songs/:id",render:j?function(e){return Object(g.jsx)(_,Object(s.a)({user:j},e))}:function(e){return Object(g.jsx)(_,Object(s.a)({user:null},e))}}),Object(g.jsx)(o.a,{exact:!0,path:"/signup",render:function(e){return Object(g.jsx)(L,Object(s.a)({setUser:b},e))}}),Object(g.jsx)(o.a,{exact:!0,path:"/login",render:function(e){return Object(g.jsx)(T,Object(s.a)({setUser:b},e))}}),Object(g.jsx)(o.a,{exact:!0,path:"/mysongs",render:function(e){return Object(g.jsx)(M,{user:j,setUser:d})}}),Object(g.jsx)(o.a,{exact:!0,path:"/songs/edit/:id",component:z}),Object(g.jsx)(o.a,{component:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h1",{children:"404 - Not Found"}),"  ",Object(g.jsx)(S.b,{to:"/",children:"Return home"})]})}}),"2"]})})]})};j.a.get("/api/auth/loggedin").then((function(e){var t=e.data;r.a.render(Object(g.jsx)(S.a,{children:Object(g.jsx)(P,{user:t,search:""})}),document.getElementById("root"))}))}},[[149,1,2]]]);
//# sourceMappingURL=main.ee417f96.chunk.js.map