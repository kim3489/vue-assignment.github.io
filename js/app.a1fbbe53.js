(function(){"use strict";var e={8556:function(e,n,r){var o=r(3751),t=r(641);function a(e,n,r,o,a,s){const i=(0,t.g2)("router-view");return(0,t.uX)(),(0,t.Wv)(i)}var s=(0,t.pM)({name:"App"}),i=r(6262);const l=(0,i.A)(s,[["render",a]]);var u=l,c=(r(8992),r(7550),r(5220)),d=r(33);const m={class:"container"},p={id:"phone"},f={id:"content-wrapper"},g={class:"checkbox remember"},v=["disabled"],h={class:"checkbox remember"},b=["disabled"];function k(e,n,r,a,s,i){return(0,t.uX)(),(0,t.CE)("div",null,[n[35]||(n[35]=(0,t.Lk)("div",{class:"bg-image"},null,-1)),(0,t.Lk)("div",m,[(0,t.Lk)("div",p,[(0,t.Lk)("div",f,[(0,t.Lk)("div",{class:(0,d.C4)({card:!0,hidden:!a.isLoginVisible}),id:"login"},[(0,t.Lk)("form",{onSubmit:n[7]||(n[7]=(0,o.D$)(((...e)=>a.handleLogin&&a.handleLogin(...e)),["prevent"]))},[n[26]||(n[26]=(0,t.Lk)("h1",null,"Sign in",-1)),(0,t.Lk)("div",{class:(0,d.C4)(["input",{active:a.isEmailFocused||a.email}])},[(0,t.bo)((0,t.Lk)("input",{id:"email",type:"email","onUpdate:modelValue":n[0]||(n[0]=e=>a.email=e),onFocus:n[1]||(n[1]=e=>a.focusInput("email")),onBlur:n[2]||(n[2]=e=>a.blurInput("email"))},null,544),[[o.Jo,a.email]]),n[23]||(n[23]=(0,t.Lk)("label",{for:"email"},"Username or Email",-1))],2),(0,t.Lk)("div",{class:(0,d.C4)(["input",{active:a.isPasswordFocused||a.password}])},[(0,t.bo)((0,t.Lk)("input",{id:"password",type:"password","onUpdate:modelValue":n[3]||(n[3]=e=>a.password=e),onFocus:n[4]||(n[4]=e=>a.focusInput("password")),onBlur:n[5]||(n[5]=e=>a.blurInput("password"))},null,544),[[o.Jo,a.password]]),n[24]||(n[24]=(0,t.Lk)("label",{for:"password"},"Password",-1))],2),(0,t.Lk)("span",g,[(0,t.bo)((0,t.Lk)("input",{type:"checkbox",id:"remember","onUpdate:modelValue":n[6]||(n[6]=e=>a.rememberMe=e)},null,512),[[o.lH,a.rememberMe]]),n[25]||(n[25]=(0,t.Lk)("label",{for:"remember",class:"read-text"},"Remember me",-1))]),n[27]||(n[27]=(0,t.Lk)("span",{class:"checkbox forgot"},[(0,t.Lk)("a",{href:"#"},"Forgot Password?")],-1)),(0,t.Lk)("button",{disabled:!a.isLoginFormValid},"Login",8,v)],32),(0,t.Lk)("a",{href:"javascript:void(0)",class:"account-check",onClick:n[8]||(n[8]=(...e)=>a.toggleCard&&a.toggleCard(...e))},n[28]||(n[28]=[(0,t.eW)("Already an account? "),(0,t.Lk)("b",null,"Sign in",-1)]))],2),(0,t.Lk)("div",{class:(0,d.C4)({card:!0,hidden:a.isLoginVisible}),id:"register"},[(0,t.Lk)("form",{onSubmit:[n[20]||(n[20]=(0,o.D$)(((...e)=>a.handleRegister&&a.handleRegister(...e)),["prevent"])),n[21]||(n[21]=(...n)=>e.onFormSubmit&&e.onFormSubmit(...n))]},[n[33]||(n[33]=(0,t.Lk)("h1",null,"Sign up",-1)),(0,t.Lk)("div",{class:(0,d.C4)(["input",{active:a.isRegisterEmailFocused||a.registerEmail}])},[(0,t.bo)((0,t.Lk)("input",{id:"register-email",type:"email","onUpdate:modelValue":n[9]||(n[9]=e=>a.registerEmail=e),onFocus:n[10]||(n[10]=e=>a.focusInput("registerEmail")),onBlur:n[11]||(n[11]=e=>a.blurInput("registerEmail"))},null,544),[[o.Jo,a.registerEmail]]),n[29]||(n[29]=(0,t.Lk)("label",{for:"register-email"},"Email",-1))],2),(0,t.Lk)("div",{class:(0,d.C4)(["input",{active:a.isRegisterPasswordFocused||a.registerPassword}])},[(0,t.bo)((0,t.Lk)("input",{id:"register-password",type:"password","onUpdate:modelValue":n[12]||(n[12]=e=>a.registerPassword=e),onFocus:n[13]||(n[13]=e=>a.focusInput("registerPassword")),onBlur:n[14]||(n[14]=e=>a.blurInput("registerPassword"))},null,544),[[o.Jo,a.registerPassword]]),n[30]||(n[30]=(0,t.Lk)("label",{for:"register-password"},"Password",-1))],2),(0,t.Lk)("div",{class:(0,d.C4)(["input",{active:a.isConfirmPasswordFocused||a.confirmPassword}])},[(0,t.bo)((0,t.Lk)("input",{id:"confirm-password",type:"password","onUpdate:modelValue":n[15]||(n[15]=e=>a.confirmPassword=e),onFocus:n[16]||(n[16]=e=>a.focusInput("confirmPassword")),onBlur:n[17]||(n[17]=e=>a.blurInput("confirmPassword"))},null,544),[[o.Jo,a.confirmPassword]]),n[31]||(n[31]=(0,t.Lk)("label",{for:"confirm-password"},"Confirm Password",-1))],2),(0,t.Lk)("span",h,[(0,t.bo)((0,t.Lk)("input",{type:"checkbox",id:"terms","onUpdate:modelValue":n[18]||(n[18]=e=>a.acceptTerms=e),onChange:n[19]||(n[19]=(...n)=>e.onTermsChange&&e.onTermsChange(...n))},null,544),[[o.lH,a.acceptTerms]]),n[32]||(n[32]=(0,t.Lk)("label",{for:"terms",class:"read-text"},[(0,t.eW)("I have read "),(0,t.Lk)("b",null,"Terms and Conditions")],-1))]),(0,t.Lk)("button",{disabled:!a.isRegisterFormValid},"Register",8,b)],32),(0,t.Lk)("a",{href:"javascript:void(0)",id:"gotologin",class:"account-check",onClick:n[22]||(n[22]=(...e)=>a.toggleCard&&a.toggleCard(...e))},n[34]||(n[34]=[(0,t.eW)("Don't have an account? "),(0,t.Lk)("b",null,"Sign up",-1)]))],2)])])])])}r(4114);var L=r(953);r(2577);const w=(e,n,r,o,t=!0)=>{const a=JSON.parse(localStorage.getItem("users"))||[],s=a.find((r=>r.id===e&&r.password===n));s?(t&&localStorage.setItem("TMDb-Key",s.password),r(s)):o()},y=(e,n,r,o)=>{try{const o=JSON.parse(localStorage.getItem("users"))||[],t=o.some((n=>n.id===e));if(t)throw new Error("User already exists");const a={id:e,password:n};o.push(a),localStorage.setItem("users",JSON.stringify(o)),r()}catch(t){o(t)}};var C={setup(){const e=(0,L.KR)(!0),n=(0,L.KR)(""),r=(0,L.KR)(""),o=(0,L.KR)(""),a=(0,L.KR)(""),s=(0,L.KR)(""),i=(0,L.KR)(!1),l=(0,L.KR)(!1),u=(0,L.KR)(!1),d=(0,L.KR)(!1),m=(0,L.KR)(!1),p=(0,L.KR)(!1),f=(0,L.KR)(!1),g=(0,L.KR)({display:"none",left:"0px",top:"0px",transform:"scale(1)"}),v=(0,L.KR)(""),h=(0,L.KR)(""),b=(0,L.KR)(""),k=(0,c.rd)(),C=(0,t.EW)((()=>n.value&&r.value)),E=(0,t.EW)((()=>o.value&&a.value&&s.value&&a.value===s.value&&l.value)),P=()=>{e.value=!e.value,setTimeout((()=>{document.getElementById("register").classList.toggle("register-swap"),document.getElementById("login").classList.toggle("login-swap")}),50)},R=e=>{switch(e){case"email":u.value=!0;break;case"password":d.value=!0;break;case"registerEmail":m.value=!0;break;case"registerPassword":p.value=!0;break;case"confirmPassword":f.value=!0;break}},F=e=>{switch(e){case"email":u.value=!1;break;case"password":d.value=!1;break;case"registerEmail":m.value=!1;break;case"registerPassword":p.value=!1;break;case"confirmPassword":f.value=!1;break}};(0,t.sV)((()=>{})),(0,t.hi)((()=>{}));const S=()=>{w(n.value,r.value,(()=>{k.push("/")}),(()=>{alert("Login failed")}))},I=()=>{y(o.value,a.value,(()=>{P()}),(e=>{alert(e)}))};return{isLoginVisible:e,email:n,password:r,registerEmail:o,registerPassword:a,confirmPassword:s,rememberMe:i,acceptTerms:l,isEmailFocused:u,isPasswordFocused:d,isRegisterEmailFocused:m,isRegisterPasswordFocused:p,isConfirmPasswordFocused:f,cursorStyle:g,hours:v,minutes:h,ampm:b,isLoginFormValid:C,isRegisterFormValid:E,toggleCard:P,focusInput:R,blurInput:F,handleLogin:S,handleRegister:I}}};const E=(0,i.A)(C,[["render",k],["__scopeId","data-v-57443c0e"]]);var P=E;const R={id:"container"};function F(e,n,r,o,a,s){const i=(0,t.g2)("HeaderComponent"),l=(0,t.g2)("router-view");return(0,t.uX)(),(0,t.CE)("div",R,[(0,t.bF)(i),(0,t.bF)(l)])}var S=r(7107),I=r(6188),K=r(1273);const x={id:"container"},T={class:"header-left"},A={class:"logo"},O={href:"/"},V={class:"header-right"};var j={__name:"header",setup(e){S.Yv.add(I.MjD,I.X46,I.ycA,I.ckx,I.GRI);const n=(0,c.rd)(),r=(0,L.KR)(!1),o=(0,L.KR)(!1),a=()=>{localStorage.removeItem("TMDb-Key"),n.push("/sign-in")},s=()=>{o.value=!o.value},i=()=>{r.value=window.scrollY>50};return(0,t.sV)((()=>{window.addEventListener("scroll",i)})),(0,t.xo)((()=>{window.removeEventListener("scroll",i)})),(e,n)=>((0,t.uX)(),(0,t.CE)("div",x,[(0,t.Lk)("header",{class:(0,d.C4)(["app-header",{scrolled:r.value}])},[(0,t.Lk)("div",T,[(0,t.Lk)("div",A,[(0,t.Lk)("a",O,[(0,t.bF)((0,L.R1)(K.gc),{icon:["fas","ticket"],style:{height:"100%",color:"#E50914"}})])]),n[0]||(n[0]=(0,t.Fv)('<nav class="nav-links desktop-nav"><ul><li><a href="/">홈</a></li><li><a href="/popular">대세 콘텐츠</a></li><li><a href="/search">찾아보기</a></li><li><a href="/wishlist">내가 찜한 리스트</a></li></ul></nav>',1))]),(0,t.Lk)("div",V,[(0,t.Lk)("button",{class:"icon-button",onClick:a},[(0,t.bF)((0,L.R1)(K.gc),{icon:["fas","user"]})]),(0,t.Lk)("button",{class:"icon-button mobile-menu-button",onClick:s},[(0,t.bF)((0,L.R1)(K.gc),{icon:["fas","bars"]})])])],2),(0,t.Lk)("div",{class:(0,d.C4)(["mobile-nav",{open:o.value}])},[(0,t.Lk)("button",{class:"close-button",onClick:s},[(0,t.bF)((0,L.R1)(K.gc),{icon:["fas","times"]})]),(0,t.Lk)("nav",null,[(0,t.Lk)("ul",null,[(0,t.Lk)("li",null,[(0,t.Lk)("a",{href:"/",onClick:s},"홈")]),(0,t.Lk)("li",null,[(0,t.Lk)("a",{href:"/popular",onClick:s},"대세 콘텐츠")]),(0,t.Lk)("li",null,[(0,t.Lk)("a",{href:"/search",onClick:s},"찾아보기")]),(0,t.Lk)("li",null,[(0,t.Lk)("a",{href:"/wishlist",onClick:s},"내가 찜한 리스트")])])])],2)]))}};const M=j;var _=M,N=(0,t.pM)({components:{HeaderComponent:_}});const B=(0,i.A)(N,[["render",F]]);var U=B;const D=[{path:"/",name:"Main",component:U,meta:{requiresAuth:!0},children:[{name:"HomeMain",path:"/",component:()=>Promise.all([r.e(78),r.e(108)]).then(r.bind(r,6108))},{name:"HomePopular",path:"popular",component:()=>Promise.all([r.e(78),r.e(751)]).then(r.bind(r,751))},{name:"HomeWishList",path:"wishlist",component:()=>r.e(535).then(r.bind(r,9535))},{name:"HomeSearch",path:"search",component:()=>Promise.all([r.e(78),r.e(140)]).then(r.bind(r,7140))}]},{name:"SignIn",path:"/sign-in",component:P}],H=(0,c.aE)({history:(0,c.LA)("vue-assignment.github.io/vue/"),routes:D});H.beforeEach(((e,n,r)=>{const o=null!==localStorage.getItem("TMDb-Key");e.matched.some((e=>e.meta.requiresAuth))?o?r():r({path:"/sign-in"}):"SignIn"===e.name&&o?r({name:"/"}):r()}));var J=H;S.Yv.add(I.LkM),(0,o.Ef)(u).use(J).component("font-awesome-icon",K.gc).mount("#app")}},n={};function r(o){var t=n[o];if(void 0!==t)return t.exports;var a=n[o]={exports:{}};return e[o].call(a.exports,a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(n,o,t,a){if(!o){var s=1/0;for(c=0;c<e.length;c++){o=e[c][0],t=e[c][1],a=e[c][2];for(var i=!0,l=0;l<o.length;l++)(!1&a||s>=a)&&Object.keys(r.O).every((function(e){return r.O[e](o[l])}))?o.splice(l--,1):(i=!1,a<s&&(s=a));if(i){e.splice(c--,1);var u=t();void 0!==u&&(n=u)}}return n}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,t,a]}}(),function(){r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,{a:n}),n}}(),function(){r.d=function(e,n){for(var o in n)r.o(n,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(n,o){return r.f[o](e,n),n}),[]))}}(),function(){r.u=function(e){return"js/"+e+"."+{78:"caf05e4b",108:"7ecad775",140:"6c49827c",535:"13371fc7",751:"524ed443"}[e]+".js"}}(),function(){r.miniCssF=function(e){return"css/"+e+"."+{108:"d6c39d42",140:"53df1739",535:"3009b559",751:"a35f8588"}[e]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="vue-assignment:";r.l=function(o,t,a,s){if(e[o])e[o].push(t);else{var i,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==n+a){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",n+a),i.src=o),e[o]=[t];var m=function(n,r){i.onerror=i.onload=null,clearTimeout(p);var t=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),t&&t.forEach((function(e){return e(r)})),n)return n(r)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="vue-assignment.github.io/vue/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,o,t,a){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",r.nc&&(s.nonce=r.nc);var i=function(r){if(s.onerror=s.onload=null,"load"===r.type)t();else{var o=r&&r.type,i=r&&r.target&&r.target.href||n,l=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+i+")");l.name="ChunkLoadError",l.code="CSS_CHUNK_LOAD_FAILED",l.type=o,l.request=i,s.parentNode&&s.parentNode.removeChild(s),a(l)}};return s.onerror=s.onload=i,s.href=n,o?o.parentNode.insertBefore(s,o.nextSibling):document.head.appendChild(s),s},n=function(e,n){for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var t=r[o],a=t.getAttribute("data-href")||t.getAttribute("href");if("stylesheet"===t.rel&&(a===e||a===n))return t}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){t=s[o],a=t.getAttribute("data-href");if(a===e||a===n)return t}},o=function(o){return new Promise((function(t,a){var s=r.miniCssF(o),i=r.p+s;if(n(s,i))return t();e(o,i,null,t,a)}))},t={524:0};r.f.miniCss=function(e,n){var r={108:1,140:1,535:1,751:1};t[e]?n.push(t[e]):0!==t[e]&&r[e]&&n.push(t[e]=o(e).then((function(){t[e]=0}),(function(n){throw delete t[e],n})))}}}(),function(){var e={524:0};r.f.j=function(n,o){var t=r.o(e,n)?e[n]:void 0;if(0!==t)if(t)o.push(t[2]);else{var a=new Promise((function(r,o){t=e[n]=[r,o]}));o.push(t[2]=a);var s=r.p+r.u(n),i=new Error,l=function(o){if(r.o(e,n)&&(t=e[n],0!==t&&(e[n]=void 0),t)){var a=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;i.message="Loading chunk "+n+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,t[1](i)}};r.l(s,l,"chunk-"+n,n)}},r.O.j=function(n){return 0===e[n]};var n=function(n,o){var t,a,s=o[0],i=o[1],l=o[2],u=0;if(s.some((function(n){return 0!==e[n]}))){for(t in i)r.o(i,t)&&(r.m[t]=i[t]);if(l)var c=l(r)}for(n&&n(o);u<s.length;u++)a=s[u],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(c)},o=self["webpackChunkvue_assignment"]=self["webpackChunkvue_assignment"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=r.O(void 0,[504],(function(){return r(8556)}));o=r.O(o)})();
//# sourceMappingURL=app.a1fbbe53.js.map