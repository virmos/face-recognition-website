(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{33:function(e,n,t){},34:function(e,n,t){},43:function(e,n){},44:function(e,n){},45:function(e,n){},65:function(e,n,t){"use strict";t.r(n);var c=t(3),s=t.n(c),i=t(26),a=t.n(i),r=(t(33),t(17)),o=(t(34),t(2)),d=function(e){var n=e.onSubmit;return Object(o.jsxs)("form",{onSubmit:n,id:"js-formSubscribe",children:[Object(o.jsx)("span",{children:"Join class"}),Object(o.jsx)("input",{type:"text",id:"classId"}),Object(o.jsx)("input",{type:"submit",value:"Done"})]})},l=function(e){var n=e.handleOnSubmit;return Object(o.jsx)("div",{children:Object(o.jsx)("header",{className:"",id:"header",children:Object(o.jsx)("div",{className:"d-flex flex-column",id:"menu",children:Object(o.jsx)("nav",{className:"nav-menu",id:"nav-menu",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsxs)("a",{className:"d-flex",href:"#hero",children:[Object(o.jsx)("i",{className:"bi bi-house-door"}),Object(o.jsx)("span",{children:"Home"})]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("a",{className:"d-flex",href:"#camera",children:[Object(o.jsx)("i",{className:"bi bi-camera"}),Object(o.jsx)("span",{children:"Camera"})]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("a",{className:"d-flex",href:"#resume",children:[Object(o.jsx)("i",{className:"bi bi-person"}),Object(o.jsx)("span",{children:"Database"})]})}),Object(o.jsx)("li",{children:Object(o.jsx)(d,{onSubmit:n})})]})})})})})},h=t(27),u=function(e){return Object(h.a)(e),Object(o.jsx)("div",{children:Object(o.jsx)("section",{className:"hero d-flex flex-column justify-content-center align-items-center",id:"hero",children:Object(o.jsx)("div",{className:"section-container",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"text-center",children:Object(o.jsx)("div",{className:"text-light text-big",children:"Face recog website"})}),Object(o.jsx)("div",{className:"type-writer",children:Object(o.jsx)("span",{className:"break-word",children:"Waiting for model loading. Please bear a minute!"})})]})})})})},j=t(6),b=t.n(j),f=t(14),x=t(4),m=t(8),_=t.n(m),p="/api/classrooms",O={getAll:function(){return _.a.get(p).then((function(e){return e.data}))},get:function(e){return _.a.get("".concat(p,"/").concat(e)).then((function(e){return e.data}))},create:function(){return _.a.post(p).then((function(e){return e.data}))},update:function(e){return _.a.put("".concat(p,"/").concat(e)).then((function(e){return e.data}))}},g=function(){var e={"H\xe0 \u0110\xf4ng Giang":["https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-9/83276023_2705769406335540_5587245263702982656_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=19026a&_nc_ohc=cy5BE9LNKhYAX-VLJou&_nc_oc=AQl_Y21wkVgpJXqKzS6YzguQJRGFtoh3smIDZKi6IhbBks49kbxt3USHQLj_nOGzaW12-bDRyBEPP2ryYpHmgECZ&_nc_ht=scontent-sin6-1.xx&oh=00_AT84IhCICPQgK9ZKssJU6RJYNfsZQZAS7HbDMM2Pt7_6Ag&oe=61FB593F","https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/269716345_3364021310510343_8650377520019153917_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zbsoctsX1MUAX9KR35g&_nc_ht=scontent-sin6-2.xx&oh=00_AT8pe-IYSZx00AgbXFFIFs6xz2mAP0GpSuHwM8c3TeYeoA&oe=61D99012","https://scontent-sin6-2.xx.fbcdn.net/v/t1.18169-9/17796209_1905711876341301_3312324403931478493_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=Gb5L_zBZhp8AX9Ua_F8&tn=koOirwGrNqiDiTaZ&_nc_ht=scontent-sin6-2.xx&oh=00_AT_nPzb2OgyTvxmRLWun2x_sMWooGhznhHJ9B9ypY1hmXA&oe=61F95D2E"],"Duy Linh":["https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-9/56968293_2358775814351953_4477001487611854848_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=u-B6RFMpHR0AX8N2Fhf&_nc_ht=scontent-sin6-1.xx&oh=00_AT_yDboJBnCNqf5NVT0A9VrumBVh9YV-7FAr1jToLpPfMw&oe=61FB70E2","https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-9/46501254_2267248670171335_4801246667779080192_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_ohc=hbAx3MmpRrkAX8LO8dl&tn=koOirwGrNqiDiTaZ&_nc_ht=scontent-sin6-1.xx&oh=00_AT8-0bd9Zq83Kh60oY-8N1oE6xJvLrGcQoljyFdBfIfwAA&oe=61F9EB5D","https://scontent-sin6-2.xx.fbcdn.net/v/t31.18172-8/29354999_2099016526994551_5363103387704424028_o.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=upU4ZBmGB7gAX_DUC2f&tn=koOirwGrNqiDiTaZ&_nc_ht=scontent-sin6-2.xx&oh=00_AT-J496iYT72_sMpKW3Mic4G88d0-RiM1zyG3PfjQNqF2Q&oe=61FB67FE"],"Long Gooner":["https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/248441315_1698150537243121_2776121901145258510_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TQGJfW0rPxAAX-8X52t&_nc_ht=scontent-sin6-1.xx&oh=00_AT8a-pbZtYEAflUlWFClu3qny3Bl2F-nYXQWsYUwujYk8g&oe=61D8D9FF","https://scontent-sin6-3.xx.fbcdn.net/v/t31.18172-8/18739025_497945983930255_3368910193095847091_o.jpg?_nc_cat=110&ccb=1-5&_nc_sid=19026a&_nc_ohc=pI4U4WUWVAQAX-OpzAR&_nc_ht=scontent-sin6-3.xx&oh=00_AT-bqqBX6lJQ40QzxgLdXXftT58a_OwomGNGqRQpRVG9yA&oe=61F991BF","https://scontent-sin6-3.xx.fbcdn.net/v/t31.18172-8/18739025_497945983930255_3368910193095847091_o.jpg?_nc_cat=110&ccb=1-5&_nc_sid=19026a&_nc_ohc=pI4U4WUWVAQAX-OpzAR&_nc_ht=scontent-sin6-3.xx&oh=00_AT-bqqBX6lJQ40QzxgLdXXftT58a_OwomGNGqRQpRVG9yA&oe=61F991BF"]},n={"H\xe0 \u0110\xf4ng Giang":"617bf02afd2f40aecfe87211","Duy Linh":"617bf08dfd2f40aecfe87212","Long Gooner":"617d7363c4fcaea5ec39ea17"};return Promise.all(["H\xe0 \u0110\xf4ng Giang","Duy Linh","Long Gooner"].map(function(){var t=Object(f.a)(b.a.mark((function t(c){var s,i,a,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=[],i=0;case 2:if(!(i<3)){t.next=13;break}return t.next=5,x.g(e[c][i]);case 5:return a=t.sent,t.next=8,x.f(a).withFaceLandmarks().withFaceDescriptor();case 8:(r=t.sent)?s.push(r.descriptor):s.push(new Float32Array(128));case 10:i++,t.next=2;break;case 13:return console.log(s),t.abrupt("return",new x.b(n[c],s));case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())).then((function(e){return alert("Model finished loading"),e}))},v={addAnimation:function(){var e=document.querySelectorAll(".animatedFadeInUp");e.forEach((function(e){e.classList.remove("fadeInUp")})),new IntersectionObserver((function(n){n.forEach((function(n){n.isIntersecting?e.forEach((function(e){e.classList.add("fadeInUp")})):e.forEach((function(e){e.classList.remove("fadeInUp")}))}))})).observe(document.querySelector(".fadeInUpWrapper"))},loadModels:function(){Promise.all([x.i.faceRecognitionNet.loadFromUri("/models"),x.i.faceLandmark68Net.loadFromUri("/models"),x.i.ssdMobilenetv1.loadFromUri("/models")]).then(Object(f.a)(b.a.mark((function e(){var n,t,c,s,i,a,r,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=document.getElementById("imageUpload"),t=document.getElementById("camera"),c=document.getElementById("cameraContainer"),s={width:9*c.offsetWidth/10,height:8*c.offsetHeight/10},e.next=6,g();case 6:i=e.sent,a=new x.a(i,.8),[],n.addEventListener("change",Object(f.a)(b.a.mark((function e(){var c,i,d,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r&&r.remove(),o&&o.remove(),e.next=4,x.c(n.files[0]);case 4:return r=e.sent,o=x.d(r),t.append(r),t.append(o),c=s.height/r.height,i={width:r.width*c,height:r.height*c},x.h(r,i),x.h(o,i),e.next=14,x.e(r).withFaceLandmarks().withFaceDescriptors();case 14:d=e.sent,l=x.j(d,s),l.map((function(e){return e.descriptor?a.findBestMatch(e.descriptor):"Unidentified Person"})).forEach((function(e,n){O.update(e._label)}));case 18:case"end":return e.stop()}}),e)}))));case 10:case"end":return e.stop()}}),e)}))))}},A=t(28),N=t.n(A)()({displayName:"Student",componentDidMount:function(){v.addAnimation()},render:function(){return Object(o.jsx)("div",{className:"col-lg-3 fadeInUpWrapper",children:Object(o.jsx)("div",{className:"animatedFadeInUp fadeInUp",children:Object(o.jsx)("div",{className:"resume-item",children:Object(o.jsxs)("div",{className:"card",id:this.props.id,children:[Object(o.jsx)("img",{src:this.props.img,alt:"Avatar"}),Object(o.jsx)("div",{className:"text-center card-container",children:Object(o.jsxs)("em",{children:[" ",this.props.name," "]})})]})})})})}}),F=function(e){var n=e.students;return Object(o.jsx)("div",{children:Object(o.jsx)("section",{className:"resume",id:"resume",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"section-title",id:"resumeTitle",children:Object(o.jsx)("h2",{children:"Absent students:"})}),Object(o.jsx)("div",{className:"row",id:"resumeRow",children:n.map((function(e){return Object(o.jsx)(N,{id:e.id,name:e.name,img:e.image},e.id)}))})]})})})},w=function(e){var n=e.students;return Object(o.jsx)("div",{children:Object(o.jsxs)("main",{className:"main",id:"main",children:[Object(o.jsxs)("section",{className:"camera-container d-flex flex-column justify-content-center align-items-center",id:"cameraContainer",children:[Object(o.jsx)("div",{className:"camera d-flex flex-column justify-content-center align-items-center",id:"camera"}),Object(o.jsx)("input",{className:"image-upload",type:"file",id:"imageUpload",title:""})]}),Object(o.jsx)(F,{students:n})]})})},y=function(){var e=Object(c.useState)([]),n=Object(r.a)(e,2),t=n[0],s=n[1],i=Object(c.useState)(""),a=Object(r.a)(i,2),d=(a[0],a[1]);Object(c.useEffect)((function(){h(),v.loadModels()}),[]);var h=function(){O.getAll().then((function(e){s(e)}))};return Object(o.jsxs)("div",{children:[Object(o.jsx)(l,{handleOnSubmit:function(e){e.preventDefault(),d(e.target.classId.value),O.create()}}),Object(o.jsx)(u,{}),Object(o.jsx)(w,{students:t})]})};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.f1491d57.chunk.js.map