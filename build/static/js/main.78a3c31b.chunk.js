(this["webpackJsonpfront-tt"]=this["webpackJsonpfront-tt"]||[]).push([[0],{27:function(t,e,n){},28:function(t,e,n){},38:function(t,e,n){t.exports=n(65)},65:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(19),l=n.n(c),o=(n(27),n(3)),i=n(4),s=n(6),u=n(5),m=(n(28),n(15)),p=n(2),h=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement("h1",null,"Welcome to TrackBackers"),r.a.createElement("h3",null,"Begin by clicking below to add track:"),r.a.createElement(m.b,{to:"/tracks/new"},r.a.createElement("img",{src:"https://media1.tenor.com/images/8755c322542a57dadf787cbec2d92b50/tenor.gif?itemid=16348608",className:"home-icon",alt:"logo"})," "))}}]),n}(a.Component),d=n(13),b=function(){return function(t){return t({type:"LOADING_TRACKS"}),fetch("http://localhost:3001/tracks").then((function(t){return t.json()})).then((function(e){return t({type:"TRACKS_LOADED",payload:e})}))}};var f=Object(d.b)(null,{removeTrack:function(t){return function(t){t({type:"REMOVE_TRACK"}),fetch("http://localhost:3001/tracks",{method:"DELETE",headers:{"Content-Type":"application/json",Accept:"application/json"}})}}})((function(t){var e=t.title,n=t.status,a=t.id,c=t.track,l=t.props;return r.a.createElement("li",{className:"status",key:a},r.a.createElement("h2",null," ",e," "),r.a.createElement("br",null),r.a.createElement("button",{id:c,onClick:function(){return l.remove(l.track)}},"X"),"Status: ",n)}));function E(){return r.a.createElement("h3",null,"Loading.....")}var k=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.getTracks()}},{key:"render",value:function(){var t=this,e=this.props.tracks.map((function(e,n){return r.a.createElement(f,{key:n,title:e.title,status:e.status,id:e.id,track:e,delete:t.props.delete})}));return r.a.createElement("div",null,r.a.createElement("h1",null,"TrackList"),r.a.createElement("ul",null,this.props.loading?r.a.createElement(E,null):e))}}]),n}(a.Component),v=Object(d.b)((function(t){return{tracks:t.trackReducer.tracks,loading:t.trackReducer.loading}}),{getTracks:b})(k),O=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement(m.b,{to:"/"},"Home"),r.a.createElement(m.b,{to:"/tracks/new"},"Addtrack "),r.a.createElement(m.b,{to:"/tracks"},"Status "),r.a.createElement(m.b,{to:"/instrumentals"},"Instrumentals ")))}}]),n}(a.Component),j=n(21),y=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={title:"",status:"Unknown",instrumental:"",notes:"",loading:!1},t.handleChange=function(e){t.setState(Object(j.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault();var n={title:t.state.title,status:t.state.status,links_attributes:[{instrumental:t.state.instrumental,notes:t.state.notes}]};t.props.addTrack(n),t.setState({title:"",status:"",instrumental:"",notes:"",loading:!1})},t}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h2",null,"Add New Track"),"Title:",r.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:this.handleChange}),"Instrumental:",r.a.createElement("input",{type:"text",name:"instrumental",value:this.state.instrumental,onChange:this.handleChange}),"Notes:",r.a.createElement("textarea",{name:"notes",value:this.state.notes,onChange:this.handleChange}),r.a.createElement("br",null),"Status:",r.a.createElement("select",{name:"status",value:this.state.status,onChange:this.handleChange},r.a.createElement("option",{value:"Unknown"},'Choose Status / Default "Unknown"'),r.a.createElement("option",{value:"Complete"},"Complete"),r.a.createElement("option",{value:"Written But Not Recorded"},"Written, But Not Recorded"),r.a.createElement("option",{value:"Partialy Written And Recorded"},"Partialy Written & Recorded"),r.a.createElement("option",{value:"Lyrics No Beat"},"Lyrics No Instrumental"),r.a.createElement("option",{value:"Beat No Lyrics"},"Instrumental No Lyrics ")),r.a.createElement("input",{type:"submit",value:"Submit Track"})),r.a.createElement("img",{src:"https://i.pinimg.com/originals/ab/45/bb/ab45bb4451536652faca51ae4f42d5dd.gif",className:"icon",alt:"logo"}))}}]),n}(a.Component),g=Object(d.b)(null,{addTrack:function(t){return function(e){e({type:"ADDING_TRACK"}),fetch("http://localhost:3001/tracks",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){return e({type:"TRACK_ADDED",payload:t})}))}}})(y),C=n(34),T=n.n(C),A=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={show:!1,note:""},t.handleClick=function(){t.setState({show:!t.state.show,note:t.props.link.notes})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state.note.split(/[\n\r]/g).map((function(t){return r.a.createElement("p",{className:"split"},t)}));return r.a.createElement("div",null,r.a.createElement("h2",null,this.props.title),r.a.createElement(T.a,{className:"p",url:this.props.instrumental}),r.a.createElement("button",{onClick:this.handleClick},"Notes"),this.state.show?r.a.createElement("p",{className:"myBox"},t):"")}}]),n}(a.Component),w=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.getTracks()}},{key:"render",value:function(){var t=this,e=this.props.instrumental.map((function(e,n){return r.a.createElement(A,{key:n,instrumental:e.instrumental,notes:e.notes,link:e,title:t.props.track.find((function(t){return t.id===e.track_id})).title})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,this.props.loading?r.a.createElement(E,null):e))}}]),n}(a.Component),N=Object(d.b)((function(t){return{track:t.trackReducer.tracks.map((function(t){return t})),instrumental:t.trackReducer.tracks.map((function(t){return t.links[0]}))}}),{getTracks:b})(w),D=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},"Contact Me",r.a.createElement("br",null),"Phone: 646.337.6294",r.a.createElement("br",null),"Email: VincentServio@gmail.com")}}]),n}(a.Component),R=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(O,null),r.a.createElement("div",{className:"App"},r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/tracks/new",exact:!0,component:g}),r.a.createElement(p.a,{path:"/instrumentals",exact:!0,component:N}),r.a.createElement(p.a,{path:"/tracks",exact:!0,component:v}),r.a.createElement(p.a,{path:"/",exact:!0,component:h}))),r.a.createElement(D,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=n(16),_=n(37),L=n(14),K=Object(S.combineReducers)({trackReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{tracks:[],loading:!1},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"LOADING_TRACKS":return Object(L.a)(Object(L.a)({},t),{},{loading:!0});case"TRACKS_LOADED":return Object(L.a)(Object(L.a)({},t),{},{tracks:e.payload,loading:!1});case"ADDING_TRACK":return Object(L.a)(Object(L.a)({},t),{},{loading:!0});case"TRACK_ADDED":return Object(L.a)(Object(L.a)({},t),{},{tracks:[].concat(Object(_.a)(t.tracks),[e.payload]),loading:!1});case"REMOVE_TRACK":return Object(L.a)({},t.tracks.filter((function(t){return t!==e.payload})));default:return t}}}),x=n(35),B=n(36),I=Object(S.createStore)(K,Object(x.composeWithDevTools)(Object(S.applyMiddleware)(B.a)));l.a.render(r.a.createElement(d.a,{store:I},r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.78a3c31b.chunk.js.map