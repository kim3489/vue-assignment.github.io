(function(){"use strict";var e={8556:function(e,n,r){var t=r(3751),o=r(641);function a(e,n,r,t,a,i){const s=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.Wv)(s)}var i=(0,o.pM)({name:"App"}),s=r(6262);const l=(0,s.A)(i,[["render",a]]);var u=l,c=(r(8992),r(7550),r(5220)),d=r(33);const m={class:"container"},p={id:"phone"},f={id:"content-wrapper"},g={class:"checkbox remember"},v=["disabled"],h={class:"checkbox remember"},b=["disabled"];function k(e,n,r,a,i,s){return(0,o.uX)(),(0,o.CE)("div",null,[n[35]||(n[35]=(0,o.Lk)("div",{class:"bg-image"},null,-1)),(0,o.Lk)("div",m,[(0,o.Lk)("div",p,[(0,o.Lk)("div",f,[(0,o.Lk)("div",{class:(0,d.C4)({card:!0,hidden:!a.isLoginVisible}),id:"login"},[(0,o.Lk)("form",{onSubmit:n[7]||(n[7]=(0,t.D$)(((...e)=>a.handleLogin&&a.handleLogin(...e)),["prevent"]))},[n[26]||(n[26]=(0,o.Lk)("h1",null,"Sign in",-1)),(0,o.Lk)("div",{class:(0,d.C4)(["input",{active:a.isEmailFocused||a.email}])},[(0,o.bo)((0,o.Lk)("input",{id:"email",type:"email","onUpdate:modelValue":n[0]||(n[0]=e=>a.email=e),onFocus:n[1]||(n[1]=e=>a.focusInput("email")),onBlur:n[2]||(n[2]=e=>a.blurInput("email"))},null,544),[[t.Jo,a.email]]),n[23]||(n[23]=(0,o.Lk)("label",{for:"email"},"Username or Email",-1))],2),(0,o.Lk)("div",{class:(0,d.C4)(["input",{active:a.isPasswordFocused||a.password}])},[(0,o.bo)((0,o.Lk)("input",{id:"password",type:"password","onUpdate:modelValue":n[3]||(n[3]=e=>a.password=e),onFocus:n[4]||(n[4]=e=>a.focusInput("password")),onBlur:n[5]||(n[5]=e=>a.blurInput("password"))},null,544),[[t.Jo,a.password]]),n[24]||(n[24]=(0,o.Lk)("label",{for:"password"},"Password",-1))],2),(0,o.Lk)("span",g,[(0,o.bo)((0,o.Lk)("input",{type:"checkbox",id:"remember","onUpdate:modelValue":n[6]||(n[6]=e=>a.rememberMe=e)},null,512),[[t.lH,a.rememberMe]]),n[25]||(n[25]=(0,o.Lk)("label",{for:"remember",class:"read-text"},"Remember me",-1))]),n[27]||(n[27]=(0,o.Lk)("span",{class:"checkbox forgot"},[(0,o.Lk)("a",{href:"#"},"Forgot Password?")],-1)),(0,o.Lk)("button",{disabled:!a.isLoginFormValid},"Login",8,v)],32),(0,o.Lk)("a",{href:"javascript:void(0)",class:"account-check",onClick:n[8]||(n[8]=(...e)=>a.toggleCard&&a.toggleCard(...e))},n[28]||(n[28]=[(0,o.eW)("Already an account? "),(0,o.Lk)("b",null,"Sign in",-1)]))],2),(0,o.Lk)("div",{class:(0,d.C4)({card:!0,hidden:a.isLoginVisible}),id:"register"},[(0,o.Lk)("form",{onSubmit:[n[20]||(n[20]=(0,t.D$)(((...e)=>a.handleRegister&&a.handleRegister(...e)),["prevent"])),n[21]||(n[21]=(...n)=>e.onFormSubmit&&e.onFormSubmit(...n))]},[n[33]||(n[33]=(0,o.Lk)("h1",null,"Sign up",-1)),(0,o.Lk)("div",{class:(0,d.C4)(["input",{active:a.isRegisterEmailFocused||a.registerEmail}])},[(0,o.bo)((0,o.Lk)("input",{id:"register-email",type:"email","onUpdate:modelValue":n[9]||(n[9]=e=>a.registerEmail=e),onFocus:n[10]||(n[10]=e=>a.focusInput("registerEmail")),onBlur:n[11]||(n[11]=e=>a.blurInput("registerEmail"))},null,544),[[t.Jo,a.registerEmail]]),n[29]||(n[29]=(0,o.Lk)("label",{for:"register-email"},"Email",-1))],2),(0,o.Lk)("div",{class:(0,d.C4)(["input",{active:a.isRegisterPasswordFocused||a.registerPassword}])},[(0,o.bo)((0,o.Lk)("input",{id:"register-password",type:"password","onUpdate:modelValue":n[12]||(n[12]=e=>a.registerPassword=e),onFocus:n[13]||(n[13]=e=>a.focusInput("registerPassword")),onBlur:n[14]||(n[14]=e=>a.blurInput("registerPassword"))},null,544),[[t.Jo,a.registerPassword]]),n[30]||(n[30]=(0,o.Lk)("label",{for:"register-password"},"Password",-1))],2),(0,o.Lk)("div",{class:(0,d.C4)(["input",{active:a.isConfirmPasswordFocused||a.confirmPassword}])},[(0,o.bo)((0,o.Lk)("input",{id:"confirm-password",type:"password","onUpdate:modelValue":n[15]||(n[15]=e=>a.confirmPassword=e),onFocus:n[16]||(n[16]=e=>a.focusInput("confirmPassword")),onBlur:n[17]||(n[17]=e=>a.blurInput("confirmPassword"))},null,544),[[t.Jo,a.confirmPassword]]),n[31]||(n[31]=(0,o.Lk)("label",{for:"confirm-password"},"Confirm Password",-1))],2),(0,o.Lk)("span",h,[(0,o.bo)((0,o.Lk)("input",{type:"checkbox",id:"terms","onUpdate:modelValue":n[18]||(n[18]=e=>a.acceptTerms=e),onChange:n[19]||(n[19]=(...n)=>e.onTermsChange&&e.onTermsChange(...n))},null,544),[[t.lH,a.acceptTerms]]),n[32]||(n[32]=(0,o.Lk)("label",{for:"terms",class:"read-text"},[(0,o.eW)("I have read "),(0,o.Lk)("b",null,"Terms and Conditions")],-1))]),(0,o.Lk)("button",{disabled:!a.isRegisterFormValid},"Register",8,b)],32),(0,o.Lk)("a",{href:"javascript:void(0)",id:"gotologin",class:"account-check",onClick:n[22]||(n[22]=(...e)=>a.toggleCard&&a.toggleCard(...e))},n[34]||(n[34]=[(0,o.eW)("Don't have an account? "),(0,o.Lk)("b",null,"Sign up",-1)]))],2)])])])])}r(4114);var L=r(953);r(2577);const w=(e,n,r,t,o=!0)=>{const a=JSON.parse(localStorage.getItem("users"))||[],i=a.find((r=>r.id===e&&r.password===n));i?(o&&localStorage.setItem("TMDb-Key",i.password),r(i)):t()},y=(e,n,r,t)=>{try{const t=JSON.parse(localStorage.getItem("users"))||[],o=t.some((n=>n.id===e));if(o)throw new Error("User already exists");const a={id:e,password:n};t.push(a),localStorage.setItem("users",JSON.stringify(t)),r()}catch(o){t(o)}};var C={setup(){const e=(0,L.KR)(!0),n=(0,L.KR)(""),r=(0,L.KR)(""),t=(0,L.KR)(""),a=(0,L.KR)(""),i=(0,L.KR)(""),s=(0,L.KR)(!1),l=(0,L.KR)(!1),u=(0,L.KR)(!1),d=(0,L.KR)(!1),m=(0,L.KR)(!1),p=(0,L.KR)(!1),f=(0,L.KR)(!1),g=(0,L.KR)({display:"none",left:"0px",top:"0px",transform:"scale(1)"}),v=(0,L.KR)(""),h=(0,L.KR)(""),b=(0,L.KR)(""),k=(0,c.rd)(),C=(0,o.EW)((()=>n.value&&r.value)),E=(0,o.EW)((()=>t.value&&a.value&&i.value&&a.value===i.value&&l.value)),P=()=>{e.value=!e.value,setTimeout((()=>{document.getElementById("register").classList.toggle("register-swap"),document.getElementById("login").classList.toggle("login-swap")}),50)},R=e=>{switch(e){case"email":u.value=!0;break;case"password":d.value=!0;break;case"registerEmail":m.value=!0;break;case"registerPassword":p.value=!0;break;case"confirmPassword":f.value=!0;break}},F=e=>{switch(e){case"email":u.value=!1;break;case"password":d.value=!1;break;case"registerEmail":m.value=!1;break;case"registerPassword":p.value=!1;break;case"confirmPassword":f.value=!1;break}};(0,o.sV)((()=>{})),(0,o.hi)((()=>{}));const S=()=>{w(n.value,r.value,(()=>{k.push("/")}),(()=>{alert("Login failed")}))},I=()=>{y(t.value,a.value,(()=>{P()}),(e=>{alert(e)}))};return{isLoginVisible:e,email:n,password:r,registerEmail:t,registerPassword:a,confirmPassword:i,rememberMe:s,acceptTerms:l,isEmailFocused:u,isPasswordFocused:d,isRegisterEmailFocused:m,isRegisterPasswordFocused:p,isConfirmPasswordFocused:f,cursorStyle:g,hours:v,minutes:h,ampm:b,isLoginFormValid:C,isRegisterFormValid:E,toggleCard:P,focusInput:R,blurInput:F,handleLogin:S,handleRegister:I}}};const E=(0,s.A)(C,[["render",k],["__scopeId","data-v-57443c0e"]]);var P=E;const R={id:"container"};function F(e,n,r,t,a,i){const s=(0,o.g2)("HeaderComponent"),l=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",R,[(0,o.bF)(s),(0,o.bF)(l)])}var S=r(7107),I=r(6188),K=r(1273);const x={id:"container"},T={class:"header-left"},A={class:"logo"},O={href:"/"},V={class:"header-right"};var j={__name:"header",setup(e){S.Yv.add(I.MjD,I.X46,I.ycA,I.ckx,I.GRI);const n=(0,c.rd)(),r=(0,L.KR)(!1),t=(0,L.KR)(!1),a=()=>{localStorage.removeItem("TMDb-Key"),n.push("/sign-in")},i=()=>{t.value=!t.value},s=()=>{r.value=window.scrollY>50};return(0,o.sV)((()=>{window.addEventListener("scroll",s)})),(0,o.xo)((()=>{window.removeEventListener("scroll",s)})),(e,n)=>((0,o.uX)(),(0,o.CE)("div",x,[(0,o.Lk)("header",{class:(0,d.C4)(["app-header",{scrolled:r.value}])},[(0,o.Lk)("div",T,[(0,o.Lk)("div",A,[(0,o.Lk)("a",O,[(0,o.bF)((0,L.R1)(K.gc),{icon:["fas","ticket"],style:{height:"100%",color:"#E50914"}})])]),n[0]||(n[0]=(0,o.Fv)('<nav class="nav-links desktop-nav"><ul><li><a href="/">홈</a></li><li><a href="/popular">대세 콘텐츠</a></li><li><a href="/search">찾아보기</a></li><li><a href="/wishlist">내가 찜한 리스트</a></li></ul></nav>',1))]),(0,o.Lk)("div",V,[(0,o.Lk)("button",{class:"icon-button",onClick:a},[(0,o.bF)((0,L.R1)(K.gc),{icon:["fas","user"]})]),(0,o.Lk)("button",{class:"icon-button mobile-menu-button",onClick:i},[(0,o.bF)((0,L.R1)(K.gc),{icon:["fas","bars"]})])])],2),(0,o.Lk)("div",{class:(0,d.C4)(["mobile-nav",{open:t.value}])},[(0,o.Lk)("button",{class:"close-button",onClick:i},[(0,o.bF)((0,L.R1)(K.gc),{icon:["fas","times"]})]),(0,o.Lk)("nav",null,[(0,o.Lk)("ul",null,[(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"/",onClick:i},"홈")]),(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"/popular",onClick:i},"대세 콘텐츠")]),(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"/search",onClick:i},"찾아보기")]),(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"/wishlist",onClick:i},"내가 찜한 리스트")])])])],2)]))}};const M=j;var _=M,N=(0,o.pM)({components:{HeaderComponent:_}});const B=(0,s.A)(N,[["render",F]]);var U=B;const D=[{path:"/",name:"Main",component:U,meta:{requiresAuth:!0},children:[{name:"HomeMain",path:"/",component:()=>Promise.all([r.e(78),r.e(108)]).then(r.bind(r,6108))},{name:"HomePopular",path:"popular",component:()=>Promise.all([r.e(78),r.e(751)]).then(r.bind(r,751))},{name:"HomeWishList",path:"wishlist",component:()=>r.e(535).then(r.bind(r,9535))},{name:"HomeSearch",path:"search",component:()=>Promise.all([r.e(78),r.e(140)]).then(r.bind(r,7140))}]},{name:"SignIn",path:"/sign-in",component:P}],H=(0,c.aE)({history:(0,c.LA)("https://kim3489.github.io/vue-assignment.github.io/"),routes:D});H.beforeEach(((e,n,r)=>{const t=null!==localStorage.getItem("TMDb-Key");e.matched.some((e=>e.meta.requiresAuth))?t?r():r({path:"/sign-in"}):"SignIn"===e.name&&t?r({name:"/"}):r()}));var J=H;S.Yv.add(I.LkM),(0,t.Ef)(u).use(J).component("font-awesome-icon",K.gc).mount("#app")}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={exports:{}};return e[t].call(a.exports,a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(n,t,o,a){if(!t){var i=1/0;for(c=0;c<e.length;c++){t=e[c][0],o=e[c][1],a=e[c][2];for(var s=!0,l=0;l<t.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((function(e){return r.O[e](t[l])}))?t.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(c--,1);var u=o();void 0!==u&&(n=u)}}return n}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[t,o,a]}}(),function(){r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,{a:n}),n}}(),function(){r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(n,t){return r.f[t](e,n),n}),[]))}}(),function(){r.u=function(e){return"js/"+e+"."+{78:"caf05e4b",108:"7ecad775",140:"6c49827c",535:"13371fc7",751:"524ed443"}[e]+".js"}}(),function(){r.miniCssF=function(e){return"css/"+e+"."+{108:"d6c39d42",140:"53df1739",535:"3009b559",751:"a35f8588"}[e]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="vue-assignment:";r.l=function(t,o,a,i){if(e[t])e[t].push(o);else{var s,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==n+a){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",n+a),s.src=t),e[t]=[o];var m=function(n,r){s.onerror=s.onload=null,clearTimeout(p);var o=e[t];if(delete e[t],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(r)})),n)return n(r)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="https://kim3489.github.io/vue-assignment.github.io/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,o,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",r.nc&&(i.nonce=r.nc);var s=function(r){if(i.onerror=i.onload=null,"load"===r.type)o();else{var t=r&&r.type,s=r&&r.target&&r.target.href||n,l=new Error("Loading CSS chunk "+e+" failed.\n("+t+": "+s+")");l.name="ChunkLoadError",l.code="CSS_CHUNK_LOAD_FAILED",l.type=t,l.request=s,i.parentNode&&i.parentNode.removeChild(i),a(l)}};return i.onerror=i.onload=s,i.href=n,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var r=document.getElementsByTagName("link"),t=0;t<r.length;t++){var o=r[t],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var i=document.getElementsByTagName("style");for(t=0;t<i.length;t++){o=i[t],a=o.getAttribute("data-href");if(a===e||a===n)return o}},t=function(t){return new Promise((function(o,a){var i=r.miniCssF(t),s=r.p+i;if(n(i,s))return o();e(t,s,null,o,a)}))},o={524:0};r.f.miniCss=function(e,n){var r={108:1,140:1,535:1,751:1};o[e]?n.push(o[e]):0!==o[e]&&r[e]&&n.push(o[e]=t(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={524:0};r.f.j=function(n,t){var o=r.o(e,n)?e[n]:void 0;if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(r,t){o=e[n]=[r,t]}));t.push(o[2]=a);var i=r.p+r.u(n),s=new Error,l=function(t){if(r.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;s.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};r.l(i,l,"chunk-"+n,n)}},r.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,a,i=t[0],s=t[1],l=t[2],u=0;if(i.some((function(n){return 0!==e[n]}))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(l)var c=l(r)}for(n&&n(t);u<i.length;u++)a=i[u],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(c)},t=self["webpackChunkvue_assignment"]=self["webpackChunkvue_assignment"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=r.O(void 0,[504],(function(){return r(8556)}));t=r.O(t)})();
//# sourceMappingURL=app.788acba1.js.map