(function(e){function t(t){for(var s,i,o=t[0],c=t[1],u=t[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],s=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(s=!1)}s&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var s={},r={app:0},a=[];function i(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"3e80":function(e,t,n){"use strict";n("6768")},4066:function(e,t,n){"use strict";n("a372")},4678:function(e,t,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf755","./tlh.js":"cf755","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=a,e.exports=r,r.id="4678"},"48ad":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view",{key:e.reload,attrs:{user:e.user,socket:e.socket,configuration:e.configuration,cachedMovie:e.cachedMovie},on:{login:e.login,signout:e.signout,setCachedMovie:e.setCachedMovie,declineRequest:e.declineRequest}}),e.modal?n("Modal",{on:{close:e.closeModal}},["request"===e.modalType?n("div",[n("h4",[e._v("You have a new request!")]),n("p",[e._v(" "+e._s(e.modalUser.name)+" "),n("b-button",{attrs:{id:e.modalUser.id,variant:"outline-success"},on:{click:function(t){return e.acceptRequest(t)}}},[e._v("Accept")]),n("b-button",{attrs:{id:e.modalUser.id,variant:"outline-danger"},on:{click:function(t){return e.declineRequest(t)}}},[e._v("Decline")])],1)]):e._e(),"accept"===e.modalType?n("div",[n("h4",[e._v("You're request to "+e._s(e.modalUser.name)+" got accepted!")])]):e._e()]):e._e()],1)},a=[],i=(n("fb6a"),n("b0c0"),n("b64b"),n("ac1f"),n("96cf"),n("1da1")),o=(n("99af"),n("bc3a")),c=n.n(o),u=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n,s){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r="",e.prev=1,e.next=4,c()({method:t,url:"".concat(r,"/v1").concat(n),headers:{Authorization:"Bearer ".concat(localStorage.getItem("user-token"))},data:s});case 4:return a=e.sent,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e["catch"](1),console.log("fetchServerData",e.t0.response.data),e.abrupt("return",e.t0.response);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n,s){return e.apply(this,arguments)}}(),l=u,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Backdrop",{nativeOn:{click:function(t){return e.$emit("close")}}}),n("div",{staticClass:"_modal"},[n("b-icon",{ref:"x",staticClass:"rounded-circle bg-light p2",attrs:{icon:"x",variant:"dark","font-scale":"2.3"},on:{click:function(t){return e.$emit("close")}}}),e._t("default")],2)],1)},f=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"backdrop"})},h=[],p={name:"Backdrop"},v=p,g=(n("3e80"),n("2877")),b=Object(g["a"])(v,m,h,!1,null,null,null),k=b.exports,j={name:"Modal",components:{Backdrop:k}},_=j,w=(n("4066"),Object(g["a"])(_,d,f,!1,null,"0a8fa496",null)),y=w.exports,M={name:"App",data:function(){return{user:{},modalType:"",modal:!1,modalUser:{},socket:null,configuration:{},cachedMovie:{},reload:0}},components:{Modal:y},methods:{closeModal:function(){var e=this;this.modal=!1,this.modalUser={},setTimeout((function(){e.reload++}),300)},setCachedMovie:function(e){this.cachedMovie=e},login:function(e){console.log(e),this.user=e,this.user.name=this.user.name.charAt(0).toUpperCase()+this.user.name.slice(1),localStorage.setItem("user-id",e.id),this.$router.push({path:"/rate"}),this.getConfigurationTMDB(),this.wsConnect()},getUser:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("get","/users/".concat(t));case 3:n=e.sent,this.user=n.data,this.user.name=this.user.name.charAt(0).toUpperCase()+this.user.name.slice(1),this.$router.push({path:"/rate"}),this.getConfigurationTMDB(),this.wsConnect(),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));function t(t){return e.apply(this,arguments)}return t}(),acceptRequest:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("post","/connect/accept/".concat(t.currentTarget.id),{email:this.requestEmail});case 3:n=e.sent,this.modal=!1,this.socket.send(JSON.stringify({type:"accept",data:{sender:{name:this.user.name,id:this.user.id},receiver:{name:n.data.receiver.name,id:n.data.receiver.id}}})),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:setTimeout((function(){s.reload++}),300);case 12:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(t){return e.apply(this,arguments)}return t}(),declineRequest:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("post","/connect/decline/".concat(t.currentTarget.id));case 3:n=e.sent,this.modal=!1,console.log(n.data),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(t){return e.apply(this,arguments)}return t}(),wsConnect:function(){var e,t=this;console.log("Initiating ws connect...");var n=/.*\/\/([\w.]*)/,s=window.location.href;e="ws://"+n.exec(s),this.socket=new WebSocket(e),this.socket.onopen=function(){t.socket.send(JSON.stringify({type:"login",data:{user:{name:t.user.name,id:t.user.id}}}))},this.socket.onmessage=function(e){var n=JSON.parse(e.data);switch(n.type){case"message":console.log(n.data);break;case"newRequest":console.log(n.sender),t.modal||(t.modal=!0,t.modalType="request",t.modalUser=n.sender);break;case"accept":t.modal||(t.newAccept=n.sender,t.modal=!0,t.modalType="accept",t.modalUser=n.sender);break}},this.socket.onclose=function(){Object.keys(t.user).length>0?(console.log("Reconnect in 10 seconds..."),setTimeout((function(){t.wsConnect()}),1e4)):console.log("Socket disconnected")},this.socket.onerror=function(e){console.log("error",e)}},getConfigurationTMDB:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("get","/movie/configuration");case 3:t=e.sent,console.log("CONFIG",t.data),this.configuration.TMDB=t.data.configuration,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}(),signout:function(){this.user={},localStorage.removeItem("user-id"),localStorage.removeItem("user-token"),this.socket.close(),this.$router.push({path:"/"})}},mounted:function(){var e=this;setTimeout((function(){var t=localStorage.getItem("user-token"),n=localStorage.getItem("user-id");t&&n?e.getUser(n):"/"!==e.$router.history.current.path&&e.$router.push({path:"/"})}),1e3)}},x=M,q=(n("034f"),Object(g["a"])(x,r,a,!1,null,null,null)),R=q.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-jumbotron",[n("h1",[e._v("MovieMatcher")]),n("p",[e._v(" Tof dat je de eerste versie van moviematcher wilt testen! Als het goed is kan je al: ")]),n("p"),n("ul",[n("li",[e._v("Een account aanmaken")]),n("li",[e._v("Vrienden toevoegen")]),n("li",[e._v(" Films beoordelen. Als je gaat voor het hartje (swipe naar rechts op mobiel) dan wordt er gekeken of je een match met een vriend hebt. Swipe naar links als je wilt disliken. ")]),n("li",[e._v(" Klik op je naam en ga naar 'friends' en kijk met welke vrienden je welke films kunt kijken. ")])]),n("p",[e._v(" Wat nog niet werkt: ")]),n("ul",[n("li",[e._v(" Je kunt ook aangeven dat je de film al gezien hebt (oog met streep er doorheen), of je kunt de film aan je favourites toevoegen (gele ster). Op dit moment is daar nog geen functie aan verbonden ")])]),n("p",[e._v(" Check even of er geen foutjes tot nu toe inzitten. ")]),n("ul",[n("li",[e._v(" Als het goed is kan je een film maar 1 keer raten, daarna komt ie niet meer voobij ")]),n("li",[e._v("Check of vrienden toevoegen goed werkt")]),n("li",[e._v("Designfoutjes zullen er ook misschien wel inzitten")])])]),n("b-container",[n("b-alert",{attrs:{fade:"",variant:"danger",show:""!==e.errorMessage}},[e._v(" "+e._s(e.errorMessage)+" ")]),n("b-tabs",{attrs:{"content-class":"mt-3"}},[n("b-tab",{attrs:{title:"Register",active:""},on:{click:function(t){e.errorMessage=""}}},[n("b-form",{on:{submit:e.submitRegister}},[n("b-form-group",{attrs:{label:"Name"}},[n("b-form-input",{attrs:{type:"text",required:""},model:{value:e.register.name,callback:function(t){e.$set(e.register,"name",t)},expression:"register.name"}})],1),n("b-form-group",{attrs:{label:"Email"}},[n("b-form-input",{attrs:{type:"email",required:""},model:{value:e.register.email,callback:function(t){e.$set(e.register,"email",t)},expression:"register.email"}})],1),n("b-form-group",{attrs:{label:"Password"}},[n("b-form-input",{attrs:{type:"password",required:""},model:{value:e.register.password,callback:function(t){e.$set(e.register,"password",t)},expression:"register.password"}})],1),n("b-form-group",{attrs:{label:"Confirm password"}},[n("b-form-input",{attrs:{type:"password",required:""},model:{value:e.register.password2,callback:function(t){e.$set(e.register,"password2",t)},expression:"register.password2"}})],1),n("b-button",{attrs:{type:"submit"}},[e._v("Submit")])],1)],1),n("b-tab",{attrs:{title:"Login"},on:{click:function(t){e.errorMessage=""}}},[n("b-form",{on:{submit:e.submitLogin}},[n("b-form-group",{attrs:{label:"Email"}},[n("b-form-input",{attrs:{type:"email",required:""},model:{value:e.login.email,callback:function(t){e.$set(e.login,"email",t)},expression:"login.email"}})],1),n("b-form-group",{attrs:{label:"Password"}},[n("b-form-input",{attrs:{type:"password",required:""},model:{value:e.login.password,callback:function(t){e.$set(e.login,"password",t)},expression:"login.password"}})],1),n("b-button",{attrs:{type:"submit"}},[e._v("Submit")])],1)],1)],1)],1)],1)},C=[],S={name:"Landing",data:function(){return{register:{name:"",email:"",password:"",password2:""},login:{email:"",password:""},errorMessage:""}},props:["user"],mounted:function(){this.user.id&&this.$router.push("/rate")},methods:{submitRegister:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n,s,r,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,this.register.password===this.register.password2){e.next=5;break}this.displayError("Passwords don't match!"),e.next=12;break;case 5:return t=this.register,n=t.name,s=t.password,r=this.register.email.toLowerCase(),a={name:n,email:r,password:s},e.next=10,l("post","/auth/register",a);case 10:i=e.sent,201===i.status?(localStorage.setItem("user-token",i.data.tokens.access.token),this.$emit("login",i.data.user)):(console.log(i),i.data.message&&this.displayError(i.data.message));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](0),console.log(e.t0.message);case 17:case"end":return e.stop()}}),e,this,[[0,14]])})));function t(){return e.apply(this,arguments)}return t}(),submitLogin:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n,s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.login.password,n=this.login.email.toLowerCase(),s={email:n,password:t},e.prev=3,e.next=6,l("post","/auth/login",s);case 6:r=e.sent,200===r.status?(localStorage.setItem("user-token",r.data.tokens.access.token),this.$emit("login",r.data.user)):(console.log(r.data.message),r.data.message&&this.displayError(r.data.message)),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](3),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));function t(){return e.apply(this,arguments)}return t}(),displayError:function(e){var t=this;this.errorMessage="",setTimeout((function(){t.errorMessage=e}),200)}}},$=S,E=(n("624f"),Object(g["a"])($,O,C,!1,null,null,null)),T=E.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.userIsLoggedIn?n("div",{staticClass:"cockpit"},[n("Navbar",{attrs:{user:e.user},on:{signout:function(t){return e.$emit("signout")}}}),n("Matcher",{attrs:{user:e.user,configuration:e.configuration,cachedMovie:e.cachedMovie},on:{setCachedMovie:e.setCachedMovie}})],1):e._e()},z=[],D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("b-navbar",{attrs:{type:"dark",variant:"primary",fixed:"top"}},[n("b-navbar-brand",{attrs:{href:"#/rate"}},[e._v("MovieMatch")]),n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[n("em",[e._v(e._s(e.user.name))])]},proxy:!0}])},[n("b-dropdown-item",{attrs:{href:"#"}},[e._v("Profile")]),n("b-dropdown-item",{attrs:{href:"#/friends"}},[e._v(" Friends ")]),n("b-dropdown-item",{attrs:{href:"#"},on:{click:function(t){return e.$emit("signout")}}},[e._v("Sign Out")])],1)],1)],1)],1)])},I=[],N={name:"Navbar",props:["user"]},F=N,P=Object(g["a"])(F,D,I,!1,null,null,null),A=P.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.loading?n("Loader"):e._e(),n("div",{staticClass:"matcher"},[e.info||e.loading?e._e():n("div",{directives:[{name:"touch",rawName:"v-touch:swipe",value:e.swiped,expression:"swiped",arg:"swipe"},{name:"touch",rawName:"v-touch:tap",value:e.clickedPoster,expression:"clickedPoster",arg:"tap"},{name:"touch",rawName:"v-touch:moving",value:e.touchMoving,expression:"touchMoving",arg:"moving"},{name:"touch",rawName:"v-touch:start",value:e.touchStart,expression:"touchStart",arg:"start"},{name:"touch",rawName:"v-touch:end",value:e.touchEnd,expression:"touchEnd",arg:"end"}],staticClass:"content-wrapper"},[e.movie.poster_path?n("img",{ref:"poster",staticClass:"poster",attrs:{src:e.posterSource,alt:""},on:{click:e.clickedPoster}}):e._e(),n("div",{staticClass:"text-wrapper"},[e.movie.title?n("h1",{staticClass:"title"},[e._v(e._s(e.movie.title))]):e._e(),e.movie.overview?n("p",{staticClass:"overview"},[n("span",{staticClass:"inline-title"},[e._v(e._s(e.movie.title)+" ("+e._s(e.releaseYear)+")")]),e._v(" "+e._s(e.movie.overview)+" ")]):e._e()])]),e.info?e._e():n("div",{staticClass:"icons"},[n("b-icon",{ref:"x",staticClass:"rounded-circle bg-danger p2",attrs:{icon:"x",variant:"dark","font-scale":"5"},on:{click:function(t){return e.rate("dislikes")}}}),n("b-icon",{attrs:{icon:"eye-slash-fill",variant:"primary","font-scale":"5"},on:{click:function(t){return e.rate("seen")}}}),n("b-icon",{attrs:{icon:"star-fill",variant:"warning","font-scale":"5"},on:{click:function(t){return e.rate("favourites")}}}),n("b-icon",{attrs:{icon:"heart-fill",variant:"danger","font-scale":"5"},on:{click:function(t){return e.rate("likes")}}})],1)]),e.info?n("Info",{attrs:{configuration:e.configuration,movie:e.movieDetails,backdropSource:e.backdropSource},on:{close:function(t){e.info=!1}}}):e._e(),e.matches.length>0?n("Modal",{on:{close:function(t){return e.closeMatchModal()}}},[e._v(" You've got a match! "),n("br"),e._v(" Go, and watch "),n("strong",[e._v(e._s(this.movie.title))]),e._v(" with: "),n("ul",e._l(e.matches,(function(t){return n("li",{key:t.friend.id},[e._v(" "+e._s(t.friend.name)+" ")])})),0)]):e._e()],1)},B=[],U=(n("45fc"),n("d3b7"),n("25f0"),n("c1df")),J=n.n(U),G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.loading?n("Loader"):e._e(),n("div",{directives:[{name:"show",rawName:"v-show",value:!1===e.loading,expression:"loading === false"},{name:"touch",rawName:"v-touch:tap",value:e.close,expression:"close",arg:"tap"}],staticClass:"info"},[n("img",{staticClass:"backdrop-image desktop",attrs:{src:e.backdropSource},on:{load:function(t){e.loading=!1}}}),n("img",{ref:"backdropMobile",staticClass:"backdrop-image mobile",on:{load:function(t){e.loading=!1}}}),n("div",{staticClass:"filter"}),n("div",{staticClass:"text"},[n("ul",{staticClass:"list"},[n("li",[n("a",{attrs:{href:"https://www.imdb.com/title/"+e.movie.imdb_id,target:"_blank"}},[e._v("View on IMDB")]),n("a",{attrs:{href:"https://www.themoviedb.org/movie/"+e.movie.id,target:"_blank"}},[e._v("View on TMDB")])]),n("div"),n("li",[e._v(" Original title: ")]),n("li",[n("strong",[e._v(e._s(e.movie.original_title))])]),e.movie.tagline?n("li",[e._v(" Tagline: ")]):e._e(),e.movie.tagline?n("li",[n("strong",[e._v('"'+e._s(e.movie.tagline)+'"')])]):e._e(),n("li",[e._v(" Genres: ")]),n("ul",e._l(e.movie.genres,(function(t){return n("li",{key:t.id,staticClass:"tag"},[e._v(" "+e._s(t.name)+" ")])})),0),n("li",[e._v(" Production countries: ")]),n("ul",e._l(e.movie.production_countries,(function(t){return n("li",{key:t.id,staticClass:"tag"},[e._v(" "+e._s(t.name)+" ")])})),0),n("li",[e._v("Release date:")]),n("li",[n("strong",[e._v(e._s(e.movie.release_date))])]),n("li",[e._v("Runtime:")]),n("li",[n("strong",[e._v(e._s(e.movie.runtime)+" minutes")])]),n("li",[e._v(" Spoken languages: ")]),n("ul",e._l(e.movie.spoken_languages,(function(t){return n("li",{key:t.iso_639_1,staticClass:"tag"},[e._v(" "+e._s(t.english_name)+" ")])})),0),n("li",[e._v("Average vote:")]),n("li",[n("strong",[e._v(e._s(e.movie.vote_average))])]),n("li",[e._v("Vote count:")]),n("li",[n("strong",[e._v(e._s(e.movie.vote_count))])]),n("li",[e._v("Popularity:")]),n("li",[n("strong",[e._v(e._s(e.movie.popularity))])])]),n("h4",[e._v("Overview")]),n("p",[e._v(e._s(e.movie.overview))])]),n("b-button",{staticClass:"back",on:{click:e.close}},[e._v(" Back ")])],1)],1)},V=[],W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-spinner",{attrs:{label:"Spinning"}})},X=[],K={name:"Loader"},H=K,Q=(n("ac88"),Object(g["a"])(H,W,X,!1,null,null,null)),Z=Q.exports,ee={name:"info",props:["configuration","movie","backdropSource"],components:{Loader:Z},data:function(){return{loading:!0}},mounted:function(){console.log(this.backdropSource),this.$refs.backdropMobile.style.backgroundImage="url(".concat(this.backdropSource,")")},methods:{close:function(){this.$emit("close")}}},te=ee,ne=(n("df9a"),Object(g["a"])(te,G,V,!1,null,"73faf7ca",null)),se=ne.exports,re={name:"Matcher",mounted:function(){0===Object.keys(this.cachedMovie).length?this.randomMovie():this.movie=this.cachedMovie},data:function(){return{movie:{},info:!1,movieDetails:{},loading:!1,matches:[],swipeStart:null,swipeEnd:null}},props:["user","configuration","cachedMovie"],components:{Info:se,Loader:Z,Modal:y},methods:{touchMoving:function(e){this.swipeEnd=e.touches[0].clientX;var t=this.swipeEnd-this.swipeStart;this.$refs.poster.style.transform="translateX(".concat(Math.round(t),"px)")},touchStart:function(e){this.swipeStart=e.touches[0].clientX},touchEnd:function(){this.$refs.poster.style.transform="none",this.swipeStart=null,this.swipeEnd=null},swiped:function(e){switch(e){case"left":this.rate("dislikes");break;case"right":this.rate("likes");break;default:break}},clickedPoster:function(){this.info=!0,this.getInfo(this.movie.id),this.preloadBackdrop},tapped:function(){console.log("tapped!"),this.info=!0},getInfo:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,this.movieDetails.id==this.movie.id){e.next=7;break}return e.next=4,l("get","/movie/single/".concat(t));case 4:n=e.sent,s=n.data.movie,this.movieDetails=s;case 7:e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(t){return e.apply(this,arguments)}return t}(),randomDate:function(){return J()(new Date(+new Date-Math.floor(1.5*Math.random()*Math.pow(10,12)))).format("YYYY-MM-DD")},randomMovie:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n,s,r,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.loading=!0,this.movieDetails={},t=this.randomDate(),n=J()(t).subtract(1,"years").format("YYYY-MM-DD"),console.log("Looking for a movie with release date between ".concat(n," and ").concat(t)),e.next=8,l("post","/movie/random",{query:"/discover/movie?vote_average.gte=6&vote_count.gte=1000&primary_release_date.gte=".concat(n,"&primary_release_date.lte=").concat(t)});case 8:s=e.sent,console.log("API.DATA",s.data),r=s.data.chosenMovie,r.id=r.id.toString(),this.user.dislikes.some((function(e){return e.id===r.id}))||this.user.seen.some((function(e){return e.id===r.id}))||this.user.favourites.some((function(e){return e.id===r.id}))||this.user.likes.some((function(e){return e.id===r.id}))?setTimeout((function(){console.log("!!!Already rated this movie, looking for another one..."),a.randomMovie()}),500):(this.loading=!1,this.movie=r,this.$emit("setCachedMovie",r),console.log(this.movie)),e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](0),e.t0.response&&console.log(e.t0.response.data);case 18:case"end":return e.stop()}}),e,this,[[0,15]])})));function t(){return e.apply(this,arguments)}return t}(),rate:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:e.prev=0,e.t0=t,e.next="dislikes"===e.t0?4:"likes"===e.t0?6:8;break;case 4:return this.$refs.poster.classList.add("move-left"),e.abrupt("break",9);case 6:return this.$refs.poster.classList.add("move-right"),e.abrupt("break",9);case 8:return e.abrupt("break",9);case 9:return console.log(this.movie),e.next=12,l("post","/rate/".concat(t),{movie:{title:this.movie.title,id:this.movie.id}});case 12:n=e.sent,200===n.status?(this.user[t].push(this.movie.id),console.log("Succesfully added to ".concat(t," ")),n.data.matches&&n.data.matches.length>0?this.matches=n.data.matches:this.randomMovie()):401===n.status?this.$emit("signout"):403!==n.status&&404!==n.status||(console.log(n.error),this.randomMovie()),this.info=!1,e.next=21;break;case 17:e.prev=17,e.t1=e["catch"](0),console.log(e.t1),this.randomMovie();case 21:case"end":return e.stop()}}),e,this,[[0,17]])})));function t(t){return e.apply(this,arguments)}return t}(),closeMatchModal:function(){this.matches=[],this.randomMovie()}},computed:{posterSource:function(){return this.configuration.TMDB.images.secure_base_url+"w342"+this.movie.poster_path},backdropSource:function(){return this.movie.backdrop_path?this.configuration.TMDB.images.secure_base_url+"w1280"+this.movie.backdrop_path:null},releaseYear:function(){var e=/^..../;return e.exec(this.movie.release_date)[0]}}},ae=re,ie=(n("d26b"),Object(g["a"])(ae,Y,B,!1,null,"50fe3b45",null)),oe=ie.exports,ce={name:"Cockpit",components:{Navbar:A,Matcher:oe},props:["user","configuration","cachedMovie"],mounted:function(){this.userIsLoggedIn||this.$router.push("/")},methods:{setCachedMovie:function(e){this.$emit("setCachedMovie",e)}},computed:{userIsLoggedIn:function(){return 0!==Object.keys(this.user).length}}},ue=ce,le=(n("88d6"),Object(g["a"])(ue,L,z,!1,null,null,null)),de=le.exports,fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"friends"},[n("Navbar",{attrs:{user:e.user},on:{signout:function(t){return e.$emit("signout")}}}),e.requestModal?n("Modal",{on:{close:e.closeRequestModal}},[n("p",[e._v("Add a friend by typing her/his email here, and clicking submit.")]),n("b-form",{on:{submit:e.request}},[n("b-form-group",{attrs:{label:"Email:","label-for":"email"}},[n("b-form-input",{attrs:{type:"email"},model:{value:e.requestEmail,callback:function(t){e.requestEmail=t},expression:"requestEmail"}})],1),n("b-form-group",[n("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")])],1)],1),e.error?n("h4",{staticClass:"error"},[e._v(e._s(e.error))]):e._e()],1):e._e(),e.mutualLikesModal?n("Modal",{on:{close:e.closeMutualLikesModal}},[e.mutualLikes.length>0?[n("h4",[e._v("You and "+e._s(e.requestedFriend.name)+" both like these movies:")]),n("ul",{staticClass:"mutual-movies"},e._l(e.mutualLikes,(function(t){return n("li",{key:t.id},[n("a",{attrs:{href:"https://www.themoviedb.org/movie/"+t.id,target:"_blank"}},[e._v(e._s(t.title))])])})),0)]:[n("h4",[e._v("You and "+e._s(e.requestedFriend.name)+" don't have any movies in common!")])]],2):e._e(),n("b-container",[n("div",[n("b-tabs",{attrs:{"content-class":"mt-3"}},[n("b-tab",{attrs:{title:"Friends",active:""},on:{click:function(t){return e.getFriends()}}},[n("p",[n("ul",[0===e.friends.length?n("p",[e._v("You don't have any friends yet! "),n("a",{attrs:{href:"#"},on:{click:function(t){e.requestModal=!0}}},[e._v("Add a friend")])]):n("ul",e._l(e.friends,(function(t){return n("li",{key:t.id},[n("a",{attrs:{href:"#"},on:{click:function(n){return e.clickedFriend(t.id)}}},[e._v(e._s(t.name))])])})),0)])])]),n("b-tab",{attrs:{title:"Pending"},on:{click:function(t){return e.getFriends()}}},[e.receivedRequests.length+e.sentRequests.length===0?n("p",[e._v("There are no pending requests right now.")]):n("ul",[e._l(e.receivedRequests,(function(t){return n("li",{key:t.id},[e._v(e._s(t.name)+" "),n("b-button",{attrs:{id:t.id,variant:"outline-success"},on:{click:function(t){return e.acceptRequest(t)}}},[e._v("Accept")]),n("b-button",{attrs:{variant:"outline-danger",id:t.id},on:{click:function(t){return e.declineRequest(t)}}},[e._v("Decline")])],1)})),e._l(e.sentRequests,(function(t){return n("li",{key:t.id},[e._v(e._s(t.name)+" / Waiting his/her response...")])}))],2)])],1)],1),n("a",{attrs:{href:"#"},on:{click:function(t){e.requestModal=!0}}},[e._v("Add a friend")]),n("br"),n("router-link",{attrs:{to:"/rate"}},[e._v("Back")])],1)],1)},me=[],he={name:"Friends",data:function(){return{friends:[],receivedRequests:[],sentRequests:[],requestModal:!1,requestedFriend:{},mutualLikesModal:!1,mutualLikes:[],requestEmail:"",error:""}},components:{Modal:y,Navbar:A},props:["user","socket"],mounted:function(){var e=localStorage.getItem("user-token");e?this.getFriends(e):this.$router.push({path:"/"})},methods:{clickedFriend:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n,s,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("get","/connect/matches/"+t);case 3:n=e.sent,s=n.data,r=s.mutualLikes,a=s.friend,this.mutualLikes=r,this.requestedFriend=a,this.mutualLikesModal=!0,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));function t(t){return e.apply(this,arguments)}return t}(),closeMutualLikesModal:function(){this.mutualLikesModal=!1,this.mutualLikes=[],this.requestedFriend={}},getFriends:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,console.log("Getting friends..."),e.next=4,l("get","/connect/friends");case 4:t=e.sent,this.friends=t.data.friends,this.receivedRequests=t.data.receivedRequests,this.sentRequests=t.data.sentRequests,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));function t(){return e.apply(this,arguments)}return t}(),request:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),console.log("send request...."),e.next=5,l("post","/connect/request",{email:this.requestEmail});case 5:n=e.sent,200!==n.status?this.error=n.data.message:(this.closeRequestModal(),this.getFriends(),console.log(this.socket),this.socket.send(JSON.stringify({type:"request",data:{sender:{name:this.user.name,id:this.user.id},receiver:{name:n.data.receiver.name,id:n.data.receiver.id}}})),this.socket.onmessage((function(e){var t=JSON.parse(e.data);"newRequest"===t.type&&s.getFriends()}))),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log("request",e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(t){return e.apply(this,arguments)}return t}(),acceptRequest:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("post","/connect/accept/".concat(t.currentTarget.id),{email:this.requestEmail});case 3:n=e.sent,this.closeRequestModal(),this.getFriends(),console.log(n),this.socket.send(JSON.stringify({type:"accept",data:{sender:{name:this.user.name,id:this.user.id},receiver:{name:n.data.receiver.name,id:n.data.receiver.id}}})),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));function t(t){return e.apply(this,arguments)}return t}(),declineRequest:function(e){var t=this;console.log("id:",e.currentTarget.id),this.$emit("declineRequest",e),e.currentTarget.parentElement.remove(),setTimeout((function(){t.getFriends()}),300)},closeRequestModal:function(){this.requestEmail="",this.error="",this.requestModal=!1}}},pe=he,ve=(n("b08f"),Object(g["a"])(pe,fe,me,!1,null,"1079f96a",null)),ge=ve.exports,be=n("8c4f"),ke=n("5f5b"),je=n("b1e0"),_e=n("0086"),we=n.n(_e);n("f9e3"),n("2dd8");s["default"].use(be["a"]),s["default"].use(ke["a"]),s["default"].use(je["a"]),s["default"].use(we.a,{swipeTolerance:120,disableClick:!0});var ye=[{path:"/",component:T,name:"landing"},{path:"/rate",component:de,name:"cockpit"},{path:"/friends",component:ge,name:"friends"}],Me=new be["a"]({routes:ye});s["default"].config.productionTip=!1,new s["default"]({render:function(e){return e(R)},router:Me}).$mount("#app")},"5bf5":function(e,t,n){},"624f":function(e,t,n){"use strict";n("b8bb")},6768:function(e,t,n){},"85ec":function(e,t,n){},"88d6":function(e,t,n){"use strict";n("f436")},a372:function(e,t,n){},ac88:function(e,t,n){"use strict";n("ec11")},b08f:function(e,t,n){"use strict";n("5bf5")},b8bb:function(e,t,n){},d26b:function(e,t,n){"use strict";n("48ad")},df9a:function(e,t,n){"use strict";n("e453")},e453:function(e,t,n){},ec11:function(e,t,n){},f436:function(e,t,n){}});
//# sourceMappingURL=app.0c67e595.js.map