(this.webpackJsonpsrc=this.webpackJsonpsrc||[]).push([[0],{180:function(e,t,n){},181:function(e,t,n){},263:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(24),r=n.n(i),o=(n(180),n(181),n(89)),s=n.n(o),l=n(107),d=n(273),u=n(268),j=n(269),b=n(71),h=n(93);n(264),n(182),n(265);h.a.initializeApp({apiKey:"AIzaSyBMckRZQtEsbti4To5Nrf-ZoGOpA2MROEM",authDomain:"chat-app-67a8b.firebaseapp.com",databaseURL:"https://chat-app-67a8b-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"chat-app-67a8b",storageBucket:"chat-app-67a8b.appspot.com",messagingSenderId:"550759354703",appId:"1:550759354703:web:e08640596dccf3b917f53a",measurementId:"G-PL5J35GXWF"}),h.a.analytics();var p=h.a.auth(),m=h.a.firestore();window.location.hostname;var x=h.a,O=n(92),f=n(50),v=function(e,t){m.collection(e).add(Object(f.a)(Object(f.a)({},t),{},{createdAt:x.firestore.FieldValue.serverTimestamp()}))},g=function(e){for(var t=e.split(" ").filter((function(e){return e})),n=t.length,a=[],c=[],i=[],r=0;r<n;r++)a[r]=!1;return function e(r){for(var o=0;o<n;o++)a[o]||(a[o]=!0,c[r]=t[o],r===n-1&&i.push(c.join(" ")),e(r+1),a[o]=!1)}(0),i.reduce((function(e,t){var n=function(e){var t=[],n="";return e.split("").forEach((function(e){n+=e,t.push(n)})),t}(t);return[].concat(Object(O.a)(e),Object(O.a)(n))}),[])},y=n(5),C=d.a.Title,N=new x.auth.FacebookAuthProvider,w=new x.auth.GoogleAuthProvider;function R(){var e=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,a,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.signInWithPopup(t);case 2:n=e.sent,a=n.additionalUserInfo,c=n.user,(null===a||void 0===a?void 0:a.isNewUser)&&v("users",{displayName:c.displayName,email:c.email,photoURL:c.photoURL,uid:c.uid,providerId:a.providerId,keywords:g(null===(i=c.displayName)||void 0===i?void 0:i.toLowerCase())});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsx)("div",{children:Object(y.jsx)(u.a,{justify:"center",style:{height:800},children:Object(y.jsxs)(j.a,{span:8,children:[Object(y.jsx)(C,{style:{textAlign:"center"},level:3,children:"Fun Chat"}),Object(y.jsx)(b.a,{style:{width:"100%",marginBottom:5},onClick:function(){return e(w)},children:"\u0110\u0103ng nh\u1eadp b\u1eb1ng Google"}),Object(y.jsx)(b.a,{style:{width:"100%"},onClick:function(){return e(N)},children:"\u0110\u0103ng nh\u1eadp b\u1eb1ng Facebook"})]})})})}var I=n(137),U=n(27),k=n(28),A=n(278),L=n(29),_=n(33),T=n(270),F=n(96),M=n(125),S=Object(M.b)({name:"user",initialState:{user:{name:"ha"}},reducers:{setUser:function(e,t){t.user},removeUser:function(e,t){({})}}}),V=S.actions,z=(V.getUser,V.removeUser,V.setUser,S.reducer),P=c.a.createContext();function E(e){var t=e.children,n=(Object(F.b)(),Object(a.useState)({})),i=Object(_.a)(n,2),r=i[0],o=i[1],s=Object(U.f)(),l=Object(a.useState)(!0),d=Object(_.a)(l,2),u=d[0],j=d[1];return c.a.useEffect((function(){var e=p.onAuthStateChanged((function(e){if(e){var t=e.displayName,n=e.email,a=e.uid,c=e.photoURL;return o({displayName:t,email:n,uid:a,photoURL:c}),j(!1),void s.push("/")}o({}),j(!1),s.push("/login")}));return function(){e()}}),[s]),Object(y.jsx)(P.Provider,{value:{user:r},children:u?Object(y.jsx)(T.a,{style:{position:"fixed",inset:0}}):t})}var G,B=function(e,t){var n=Object(a.useState)([]),i=Object(_.a)(n,2),r=i[0],o=i[1];return c.a.useEffect((function(){var n=m.collection(e).orderBy("createdAt");if(t){if(!t.compareValue||!t.compareValue.length)return void o([]);n=n.where(t.fieldName,t.operator,t.compareValue)}return n.onSnapshot((function(e){var t=e.docs.map((function(e){return Object(f.a)(Object(f.a)({},e.data()),{},{id:e.id})}));o(t)}))}),[e,t]),r},D=c.a.createContext();function H(e){var t=e.children,n=Object(a.useState)(!1),i=Object(_.a)(n,2),r=i[0],o=i[1],s=Object(a.useState)(!1),l=Object(_.a)(s,2),d=l[0],u=l[1],j=Object(a.useState)(""),b=Object(_.a)(j,2),h=b[0],p=b[1],m=c.a.useContext(P).user.uid,x=c.a.useMemo((function(){return{fieldName:"members",operator:"array-contains",compareValue:m}}),[m]),O=B("rooms",x),f=c.a.useMemo((function(){return O.find((function(e){return e.id===h}))||{}}),[O,h]),v=c.a.useMemo((function(){return{fieldName:"uid",operator:"in",compareValue:f.members}}),[f.members]),g=B("users",v);return Object(y.jsx)(D.Provider,{value:{rooms:O,members:g,selectedRoom:f,isAddRoomVisible:r,setIsAddRoomVisible:o,selectedRoomId:h,setSelectedRoomId:p,isInviteMemberVisible:d,setIsInviteMemberVisible:u,clearState:function(){p(""),o(!1),u(!1)}},children:t})}var J=L.a.div(G||(G=Object(k.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid rgba(82, 38, 83);\n\n  .username {\n    color: black;\n    margin-left: 5px;\n  }\n"])));function K(){var e,t=c.a.useContext(P).user,n=t.displayName,a=t.photoURL,i=c.a.useContext(D).clearState;return Object(y.jsxs)(J,{children:[Object(y.jsxs)("div",{children:[Object(y.jsx)(A.a,{src:a,children:a?"":null===n||void 0===n||null===(e=n.charAt(0))||void 0===e?void 0:e.toUpperCase()}),Object(y.jsx)(d.a.Text,{className:"username",children:n})]}),Object(y.jsx)(b.a,{style:{color:"black"},ghost:!0,onClick:function(){i(),p.signOut()},children:"\u0110\u0103ng xu\u1ea5t"})]})}var W,Z,Q,X=n(275),q=n(280),Y=X.a.Panel,$=Object(L.a)(Y)(W||(W=Object(k.a)(["\n  &&& {\n    .ant-collapse-header,\n    p {\n      color: black;\n    }\n\n    .ant-collapse-content-box {\n      padding: 0 40px;\n    }\n\n    .add-room {\n      color: black;\n      padding: 0;\n    }\n  }\n"]))),ee=Object(L.a)(d.a.Link)(Z||(Z=Object(k.a)(["\n  display: block;\n  margin-bottom: 5px;\n  color: white;\n"])));function te(){var e=c.a.useContext(D),t=e.rooms,n=e.setIsAddRoomVisible,a=e.setSelectedRoomId;return Object(y.jsx)(X.a,{ghost:!0,defaultActiveKey:["1"],children:Object(y.jsxs)($,{header:"Danh s\xe1ch c\xe1c ph\xf2ng",children:[t.map((function(e){return Object(y.jsx)(ee,{onClick:function(){return a(e.id)},children:e.name},e.id)})),Object(y.jsx)(b.a,{type:"text",icon:Object(y.jsx)(q.a,{}),className:"add-room",onClick:function(){n(!0)},children:"Th\xeam ph\xf2ng"})]},"1")})}var ne=L.a.div(Q||(Q=Object(k.a)(["\n  height: 100vh;\n  border-right: 1px solid black;\n"])));function ae(){return Object(y.jsx)(ne,{children:Object(y.jsxs)(u.a,{children:[Object(y.jsx)(j.a,{span:24,children:Object(y.jsx)(K,{})}),Object(y.jsx)(j.a,{span:24,children:Object(y.jsx)(te,{})})]})})}var ce,ie,re,oe,se,le,de,ue,je=n(281),be=n(272),he=n(68),pe=n(276),me=n(279),xe=n(271),Oe=L.a.div(ce||(ce=Object(k.a)(["\n  margin-bottom: 30px;\n  padding-left: 20px;\n\n  .author {\n    margin-left: 5px;\n    font-weight: bold;\n  }\n\n  .date {\n    margin-left: 10px;\n    font-size: 11px;\n    color: #a7a7a7;\n  }\n\n  .content {\n    margin-left: 30px;\n  }\n"]))),fe=L.a.div(ie||(ie=Object(k.a)(["\n  margin-bottom: 30px;\n  padding-right: 20px;\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: space-between;\n\n  .author {\n    margin-right: 5px;\n    font-weight: bold;\n  }\n\n  .date {\n    margin-right: 10px;\n    font-size: 11px;\n    color: #a7a7a7;\n  }\n\n  .content {\n    float: right;\n    margin-right: 30px;\n  }\n"])));function ve(e){var t="";return e&&(t=(t=Object(xe.a)(new Date(1e3*e),new Date)).charAt(0).toUpperCase()+t.slice(1)),t}function ge(e){var t,n,a=e.uid,i=e.text,r=e.displayName,o=e.createdAt,s=e.photoURL,l=c.a.useContext(P).user;return console.log(l),console.log(a),console.log(a===l.uid),l.uid===a?Object(y.jsx)(fe,{children:Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{children:[Object(y.jsx)(d.a.Text,{className:"date",children:ve(null===o||void 0===o?void 0:o.seconds)}),Object(y.jsx)(d.a.Text,{className:"author",children:r}),Object(y.jsx)(A.a,{size:"small",src:s,children:s?"":null===r||void 0===r||null===(t=r.charAt(0))||void 0===t?void 0:t.toUpperCase()})]}),Object(y.jsx)("div",{children:Object(y.jsx)(d.a.Text,{className:"content",children:i})})]})}):Object(y.jsxs)(Oe,{children:[Object(y.jsxs)("div",{children:[Object(y.jsx)(A.a,{size:"small",src:s,children:s?"":null===r||void 0===r||null===(n=r.charAt(0))||void 0===n?void 0:n.toUpperCase()}),Object(y.jsx)(d.a.Text,{className:"author",children:r}),Object(y.jsx)(d.a.Text,{className:"date",children:ve(null===o||void 0===o?void 0:o.seconds)})]}),Object(y.jsx)("div",{children:Object(y.jsx)(d.a.Text,{className:"content",children:i})})]})}var ye=L.a.div(re||(re=Object(k.a)(["\n  display: flex;\n  justify-content: space-between;\n  height: 56px;\n  padding: 0 16px;\n  align-items: center;\n  border-bottom: 1px solid rgb(230, 230, 230);\n\n  .header {\n    &__info {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n    }\n\n    &__title {\n      margin: 0;\n      font-weight: bold;\n    }\n\n    &__description {\n      font-size: 12px;\n    }\n  }\n"]))),Ce=L.a.div(oe||(oe=Object(k.a)(["\n  display: flex;\n  align-items: center;\n"]))),Ne=L.a.div(se||(se=Object(k.a)(["\n  height: 100vh;\n"]))),we=L.a.div(le||(le=Object(k.a)(["\n  height: calc(100% - 56px);\n  display: flex;\n  flex-direction: column;\n  padding: 11px;\n  justify-content: flex-end;\n"]))),Re=Object(L.a)(be.a)(de||(de=Object(k.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2px 2px 2px 0;\n  border: 1px solid rgb(230, 230, 230);\n  border-radius: 2px;\n\n  .ant-form-item {\n    flex: 1;\n    margin-bottom: 0;\n  }\n"]))),Ie=L.a.div(ue||(ue=Object(k.a)(["\n  max-height: 100%;\n  overflow-y: auto;\n"])));function Ue(){var e=Object(a.useContext)(D),t=e.selectedRoom,n=e.members,i=e.setIsInviteMemberVisible,r=Object(a.useContext)(P).user,o=r.uid,s=r.photoURL,l=r.displayName,d=Object(a.useState)(""),u=Object(_.a)(d,2),j=u[0],h=u[1],p=be.a.useForm(),m=Object(_.a)(p,1)[0],x=Object(a.useRef)(null),O=Object(a.useRef)(null),f=function(){v("messages",{text:j,uid:o,photoURL:s,roomId:t.id,displayName:l}),m.resetFields(["message"]),(null===x||void 0===x?void 0:x.current)&&setTimeout((function(){x.current.focus()}))},g=c.a.useMemo((function(){return{fieldName:"roomId",operator:"==",compareValue:t.id}}),[t.id]),C=B("messages",g);return Object(a.useEffect)((function(){(null===O||void 0===O?void 0:O.current)&&(O.current.scrollTop=O.current.scrollHeight+50)}),[C]),Object(y.jsx)(Ne,{children:t.id?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(ye,{children:[Object(y.jsxs)("div",{className:"header__info",children:[Object(y.jsx)("p",{className:"header__title",children:t.name}),Object(y.jsx)("span",{className:"header__description",children:t.description})]}),Object(y.jsxs)(Ce,{children:[Object(y.jsx)(b.a,{icon:Object(y.jsx)(je.a,{}),type:"text",onClick:function(){return i(!0)},children:"M\u1eddi"}),Object(y.jsx)(A.a.Group,{size:"small",maxCount:2,children:n.map((function(e){var t,n;return Object(y.jsx)(he.a,{title:e.displayName,children:Object(y.jsx)(A.a,{src:e.photoURL,children:e.photoURL?"":null===(t=e.displayName)||void 0===t||null===(n=t.charAt(0))||void 0===n?void 0:n.toUpperCase()})},e.id)}))})]})]}),Object(y.jsxs)(we,{children:[Object(y.jsx)(Ie,{ref:O,children:C.map((function(e){return Object(y.jsx)(ge,{uid:e.uid,text:e.text,photoURL:e.photoURL,displayName:e.displayName,createdAt:e.createdAt},e.id)}))}),Object(y.jsxs)(Re,{form:m,children:[Object(y.jsx)(be.a.Item,{name:"message",children:Object(y.jsx)(pe.a,{ref:x,onChange:function(e){h(e.target.value)},onPressEnter:f,placeholder:"Nh\u1eadp tin nh\u1eafn...",bordered:!1,autoComplete:"off"})}),Object(y.jsx)(b.a,{type:"primary",onClick:f,children:"G\u1eedi"})]})]})]}):Object(y.jsx)(me.a,{message:"H\xe3y ch\u1ecdn ph\xf2ng",type:"info",showIcon:!0,style:{margin:5},closable:!0})})}var ke,Ae,Le,_e=n(282),Te=n(283),Fe=n(284);function Me(){var e=Object(a.useContext)(D),t=e.selectedRoom,n=e.members,c=e.setIsInviteMemberVisible;return Object(y.jsx)(ze,{children:t.id?Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(Se,{children:[Object(y.jsx)(A.a.Group,{size:"large",maxCount:2,className:"avatar",children:n.map((function(e){var t,n;return Object(y.jsx)(he.a,{title:e.displayName,children:Object(y.jsx)(A.a,{src:e.photoURL,children:e.photoURL?"":null===(t=e.displayName)||void 0===t||null===(n=t.charAt(0))||void 0===n?void 0:n.toUpperCase()})},e.id)}))}),Object(y.jsxs)("div",{className:"header__info",children:[Object(y.jsx)("p",{className:"header__title",children:t.name}),Object(y.jsx)("span",{className:"header__description",children:t.description})]}),Object(y.jsx)(Ve,{children:Object(y.jsx)(b.a,{icon:Object(y.jsx)(je.a,{}),type:"text",onClick:function(){return c(!0)},block:!0,children:"M\u1eddi"})}),Object(y.jsx)(Ve,{children:Object(y.jsx)(b.a,{icon:Object(y.jsx)(_e.a,{}),type:"text",block:!0,children:"Thanh vien trong nhom"})}),Object(y.jsx)(Ve,{children:Object(y.jsx)(b.a,{icon:Object(y.jsx)(Te.a,{}),type:"text",block:!0,children:"Thay doi anh nhom"})}),Object(y.jsx)(Ve,{children:Object(y.jsx)(b.a,{icon:Object(y.jsx)(Fe.a,{}),type:"text",block:!0,children:"Roi nhom"})})]})}):Object(y.jsx)(me.a,{message:"H\xe3y ch\u1ecdn ph\xf2ng",type:"info",showIcon:!0,style:{margin:5},closable:!0})})}var Se=L.a.div(ke||(ke=Object(k.a)(["\n  text-align: center;\n\n  .avatar {\n    margin-top: 15%;\n  }\n  .header__info {\n    margin-bottom: 30px;\n  }\n  .header__title {\n    font-size: 24px;\n    font-weight: 600;\n  }\n  .header__description {\n    font-size: 18px;\n    font-weight: 500;\n    word-wrap: break-word;\n  }\n"]))),Ve=L.a.div(Ae||(Ae=Object(k.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 10px;\n"]))),ze=L.a.div(Le||(Le=Object(k.a)(["\n  height: 100vh;\n"])));function Pe(){return Object(y.jsx)("div",{children:Object(y.jsxs)(u.a,{children:[Object(y.jsx)(j.a,{span:6,children:Object(y.jsx)(ae,{})}),Object(y.jsx)(j.a,{span:12,children:Object(y.jsx)(Ue,{})}),Object(y.jsx)(j.a,{span:6,children:Object(y.jsx)(Me,{})})]})})}var Ee=n(277);function Ge(){var e=Object(a.useContext)(D),t=e.isAddRoomVisible,n=e.setIsAddRoomVisible,c=Object(a.useContext)(P).user.uid,i=be.a.useForm(),r=Object(_.a)(i,1)[0];return Object(y.jsx)("div",{children:Object(y.jsx)(Ee.a,{title:"T\u1ea1o ph\xf2ng",visible:t,onOk:function(){v("rooms",Object(f.a)(Object(f.a)({},r.getFieldsValue()),{},{members:[c]})),r.resetFields(),n(!1)},onCancel:function(){r.resetFields(),n(!1)},children:Object(y.jsxs)(be.a,{form:r,layout:"vertical",children:[Object(y.jsx)(be.a.Item,{label:"T\xean ph\xf2ng",name:"name",children:Object(y.jsx)(pe.a,{placeholder:"Nh\u1eadp t\xean ph\xf2ng"})}),Object(y.jsx)(be.a.Item,{label:"M\xf4 t\u1ea3",name:"description",children:Object(y.jsx)(pe.a.TextArea,{placeholder:"Nh\u1eadp m\xf4 t\u1ea3"})})]})})})}var Be=n(174),De=n(274),He=n(165);function Je(e){var t=e.fetchOptions,n=e.debounceTimeout,i=void 0===n?300:n,r=e.curMembers,o=Object(Be.a)(e,["fetchOptions","debounceTimeout","curMembers"]),s=Object(a.useState)(!1),l=Object(_.a)(s,2),d=l[0],u=l[1],j=Object(a.useState)([]),b=Object(_.a)(j,2),h=b[0],p=b[1],m=c.a.useMemo((function(){return Object(He.debounce)((function(e){p([]),u(!0),t(e,r).then((function(e){p(e),u(!1)}))}),i)}),[i,t,r]);return c.a.useEffect((function(){return function(){p([])}}),[]),Object(y.jsx)(De.a,Object(f.a)(Object(f.a)({labelInValue:!0,filterOption:!1,onSearch:m,notFoundContent:d?Object(y.jsx)(T.a,{size:"small"}):null},o),{},{children:h.map((function(e){var t,n;return Object(y.jsxs)(De.a.Option,{value:e.value,title:e.label,children:[Object(y.jsx)(A.a,{size:"small",src:e.photoURL,children:e.photoURL?"":null===(t=e.label)||void 0===t||null===(n=t.charAt(0))||void 0===n?void 0:n.toUpperCase()})," ".concat(e.label)]},e.value)}))}))}function Ke(e,t){return We.apply(this,arguments)}function We(){return(We=Object(l.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",m.collection("users").where("keywords","array-contains",null===t||void 0===t?void 0:t.toLowerCase()).orderBy("displayName").limit(20).get().then((function(e){return e.docs.map((function(e){return{label:e.data().displayName,value:e.data().uid,photoURL:e.data().photoURL}})).filter((function(e){return!n.includes(e.value)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ze(){var e=Object(a.useContext)(D),t=e.isInviteMemberVisible,n=e.setIsInviteMemberVisible,c=e.selectedRoomId,i=e.selectedRoom,r=Object(a.useState)([]),o=Object(_.a)(r,2),s=o[0],l=o[1],d=be.a.useForm(),u=Object(_.a)(d,1)[0];return Object(y.jsx)("div",{children:Object(y.jsx)(Ee.a,{title:"M\u1eddi th\xeam th\xe0nh vi\xean",visible:t,onOk:function(){u.resetFields(),l([]),m.collection("rooms").doc(c).update({members:[].concat(Object(O.a)(i.members),Object(O.a)(s.map((function(e){return e.value}))))}),n(!1)},onCancel:function(){u.resetFields(),l([]),n(!1)},destroyOnClose:!0,children:Object(y.jsx)(be.a,{form:u,layout:"vertical",children:Object(y.jsx)(Je,{mode:"multiple",name:"search-user",label:"T\xean c\xe1c th\xe0nh vi\xean",value:s,placeholder:"Nh\u1eadp t\xean th\xe0nh vi\xean",fetchOptions:Ke,onChange:function(e){return l(e)},style:{width:"100%"},curMembers:i.members})})})})}var Qe=Object(M.a)({reducer:z});var Xe=function(){return Object(y.jsx)(F.a,{store:Qe,children:Object(y.jsx)(I.a,{children:Object(y.jsx)(E,{children:Object(y.jsxs)(H,{children:[Object(y.jsxs)(U.c,{children:[Object(y.jsx)(U.a,{component:R,path:"/login"}),Object(y.jsx)(U.a,{component:Pe,path:"/"})]}),Object(y.jsx)(Ge,{}),Object(y.jsx)(Ze,{})]})})})})},qe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,285)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(y.jsx)(Xe,{}),document.getElementById("root")),qe()}},[[263,1,2]]]);
//# sourceMappingURL=main.4db373ae.chunk.js.map