(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{11:function(e,a,t){e.exports=t(26)},22:function(e,a,t){},23:function(e,a,t){},24:function(e,a,t){},26:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(1),i=t.n(o),c=t(3),l=t(2),s=(t(22),t(9)),m=(t(23),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",isPet:!1},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",isPet:!1},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",isPet:!1},{id:4,name:"Churrita",username:"churris",email:"lis@kory.org",isPet:!1},{id:5,name:"Edwin Torres",username:"codesandtags",email:"codesandtags@gmail.com",isPet:!1},{id:6,name:"Mrs. Dennis",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",isPet:!1},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",isPet:!1},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",isPet:!1},{id:9,name:"Nala",username:"Delphine",email:"lamichimueca@cats.com",isPet:!0},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",isPet:!1}]),u=function(e){var a=e.robot,t=a.name,n=a.email,o=(a.id,a.isPet?4:1),i="https://robohash.org/".concat(t,"?size=").concat(150,"x").concat(150,"&set=set").concat(o);return r.a.createElement("div",{className:"tc grow bg-light-blue br3 pa2 ma3 dib bw2 shadow-5 w5 mr2"},r.a.createElement("img",{src:i,alt:t}),r.a.createElement("div",null,r.a.createElement("h2",{className:"f4"},t),r.a.createElement("p",{className:"ttl f6 lh-copy"},n)))},h=function(e){var a=e.robots;return r.a.createElement("div",{className:"flex flex-wrap w-80 center mw9 justify-center-m"},a.map((function(e){return r.a.createElement(u,{key:e.id,robot:e})})))},d=function(e){var a=e.searchChange;return r.a.createElement("div",{className:"pa2 ma2 flex justify-center center"},r.a.createElement("input",{type:"search",autoFocus:!0,placeholder:"Search your favorite robot \ud83e\udd16 ",className:"pa3 ba b--green bg-lightest-blue w-100 w-50-ns br2",onChange:a}))},b=function(){return r.a.createElement("footer",{className:"white-80 center w-100  pa2 ma4"},r.a.createElement("a",{href:"https://robohash.org/",className:"white",target:"_blank"},"Images taken from Robohash \ud83e\udd16"))},f=(t(24),function(e){var a=e.url;return r.a.createElement("div",{className:"absolute top-0 right-0"},r.a.createElement("a",{href:a,target:"_blank",className:"github-corner","aria-label":"View source on GitHub"},r.a.createElement("svg",{width:"80",height:"80",viewBox:"0 0 250 250",style:{fill:"#151513",color:"#fff",position:"absolute",top:0,border:0,right:0},"aria-hidden":"true"},r.a.createElement("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),r.a.createElement("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:"octo-arm"}),r.a.createElement("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"}))))}),g=Object(c.b)((function(e){return{searchField:e.searchField}}),(function(e){return{onSearchChange:function(a){return e((t=a.target.value,console.log("Action [".concat("CHANGE_SEARCH_FIELD","] with: "),t),{type:"CHANGE_SEARCH_FIELD",payload:t}));var t}}}))((function(e){var a=Object(n.useState)(m),t=Object(s.a)(a,1)[0].filter((function(a){return a.name.toLowerCase().includes(e.searchField.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement(f,{url:"https://github.com/codesandtags/robofriends"}),r.a.createElement("h1",{className:"ma4 mt5-m f2 f1-l"},"RoboFriends"),r.a.createElement(d,{searchChange:e.onSearchChange}),r.a.createElement(h,{robots:t}),r.a.createElement(b,null))}));t(25),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=t(10),E={searchField:"",robots:{}},p=Object(l.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(console.log("Reducer Called with Action Type [".concat(a.type,"]")),a.type){case"CHANGE_SEARCH_FIELD":return Object(C.a)({},e,{searchField:a.payload});default:return e}}));i.a.render(r.a.createElement(c.a,{store:p},r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.028b0f29.chunk.js.map