(function(){"use strict";var e={6012:function(e,t,a){var l=a(5130),i=a(6768);function o(e,t,a,l,o,s){const n=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.Wv)(n)}var s=(0,i.pM)({name:"App"}),n=a(1241);const r=(0,n.A)(s,[["render",o]]);var u=r,c=(a(8992),a(7550),a(1387)),d=a(4232);const v={class:"container"},g={id:"phone"},p={id:"content-wrapper"},h={class:"checkbox remember"},m=["disabled"],f={class:"checkbox remember"},k=["disabled"];function b(e,t,a,o,s,n){return(0,i.uX)(),(0,i.CE)("div",null,[t[35]||(t[35]=(0,i.Lk)("div",{class:"bg-image"},null,-1)),(0,i.Lk)("div",v,[(0,i.Lk)("div",g,[(0,i.Lk)("div",p,[(0,i.Lk)("div",{class:(0,d.C4)({card:!0,hidden:!o.isLoginVisible}),id:"login"},[(0,i.Lk)("form",{onSubmit:t[7]||(t[7]=(0,l.D$)(((...e)=>o.handleLogin&&o.handleLogin(...e)),["prevent"]))},[t[26]||(t[26]=(0,i.Lk)("h1",null,"Sign in",-1)),(0,i.Lk)("div",{class:(0,d.C4)(["input",{active:o.isEmailFocused||o.email}])},[(0,i.bo)((0,i.Lk)("input",{id:"email",type:"email","onUpdate:modelValue":t[0]||(t[0]=e=>o.email=e),onFocus:t[1]||(t[1]=e=>o.focusInput("email")),onBlur:t[2]||(t[2]=e=>o.blurInput("email"))},null,544),[[l.Jo,o.email]]),t[23]||(t[23]=(0,i.Lk)("label",{for:"email"},"Username or Email",-1))],2),(0,i.Lk)("div",{class:(0,d.C4)(["input",{active:o.isPasswordFocused||o.password}])},[(0,i.bo)((0,i.Lk)("input",{id:"password",type:"password","onUpdate:modelValue":t[3]||(t[3]=e=>o.password=e),onFocus:t[4]||(t[4]=e=>o.focusInput("password")),onBlur:t[5]||(t[5]=e=>o.blurInput("password"))},null,544),[[l.Jo,o.password]]),t[24]||(t[24]=(0,i.Lk)("label",{for:"password"},"Password",-1))],2),(0,i.Lk)("span",h,[(0,i.bo)((0,i.Lk)("input",{type:"checkbox",id:"remember","onUpdate:modelValue":t[6]||(t[6]=e=>o.rememberMe=e)},null,512),[[l.lH,o.rememberMe]]),t[25]||(t[25]=(0,i.Lk)("label",{for:"remember",class:"read-text"},"Remember me",-1))]),t[27]||(t[27]=(0,i.Lk)("span",{class:"checkbox forgot"},[(0,i.Lk)("a",{href:"#"},"Forgot Password?")],-1)),(0,i.Lk)("button",{disabled:!o.isLoginFormValid},"Login",8,m)],32),(0,i.Lk)("a",{href:"javascript:void(0)",class:"account-check",onClick:t[8]||(t[8]=(...e)=>o.toggleCard&&o.toggleCard(...e))},t[28]||(t[28]=[(0,i.eW)("Already an account? "),(0,i.Lk)("b",null,"Sign in",-1)]))],2),(0,i.Lk)("div",{class:(0,d.C4)({card:!0,hidden:o.isLoginVisible}),id:"register"},[(0,i.Lk)("form",{onSubmit:[t[20]||(t[20]=(0,l.D$)(((...e)=>o.handleRegister&&o.handleRegister(...e)),["prevent"])),t[21]||(t[21]=(...t)=>e.onFormSubmit&&e.onFormSubmit(...t))]},[t[33]||(t[33]=(0,i.Lk)("h1",null,"Sign up",-1)),(0,i.Lk)("div",{class:(0,d.C4)(["input",{active:o.isRegisterEmailFocused||o.registerEmail}])},[(0,i.bo)((0,i.Lk)("input",{id:"register-email",type:"email","onUpdate:modelValue":t[9]||(t[9]=e=>o.registerEmail=e),onFocus:t[10]||(t[10]=e=>o.focusInput("registerEmail")),onBlur:t[11]||(t[11]=e=>o.blurInput("registerEmail"))},null,544),[[l.Jo,o.registerEmail]]),t[29]||(t[29]=(0,i.Lk)("label",{for:"register-email"},"Email",-1))],2),(0,i.Lk)("div",{class:(0,d.C4)(["input",{active:o.isRegisterPasswordFocused||o.registerPassword}])},[(0,i.bo)((0,i.Lk)("input",{id:"register-password",type:"password","onUpdate:modelValue":t[12]||(t[12]=e=>o.registerPassword=e),onFocus:t[13]||(t[13]=e=>o.focusInput("registerPassword")),onBlur:t[14]||(t[14]=e=>o.blurInput("registerPassword"))},null,544),[[l.Jo,o.registerPassword]]),t[30]||(t[30]=(0,i.Lk)("label",{for:"register-password"},"Password",-1))],2),(0,i.Lk)("div",{class:(0,d.C4)(["input",{active:o.isConfirmPasswordFocused||o.confirmPassword}])},[(0,i.bo)((0,i.Lk)("input",{id:"confirm-password",type:"password","onUpdate:modelValue":t[15]||(t[15]=e=>o.confirmPassword=e),onFocus:t[16]||(t[16]=e=>o.focusInput("confirmPassword")),onBlur:t[17]||(t[17]=e=>o.blurInput("confirmPassword"))},null,544),[[l.Jo,o.confirmPassword]]),t[31]||(t[31]=(0,i.Lk)("label",{for:"confirm-password"},"Confirm Password",-1))],2),(0,i.Lk)("span",f,[(0,i.bo)((0,i.Lk)("input",{type:"checkbox",id:"terms","onUpdate:modelValue":t[18]||(t[18]=e=>o.acceptTerms=e),onChange:t[19]||(t[19]=(...t)=>e.onTermsChange&&e.onTermsChange(...t))},null,544),[[l.lH,o.acceptTerms]]),t[32]||(t[32]=(0,i.Lk)("label",{for:"terms",class:"read-text"},[(0,i.eW)("I have read "),(0,i.Lk)("b",null,"Terms and Conditions")],-1))]),(0,i.Lk)("button",{disabled:!o.isRegisterFormValid},"Register",8,k)],32),(0,i.Lk)("a",{href:"javascript:void(0)",id:"gotologin",class:"account-check",onClick:t[22]||(t[22]=(...e)=>o.toggleCard&&o.toggleCard(...e))},t[34]||(t[34]=[(0,i.eW)("Don't have an account? "),(0,i.Lk)("b",null,"Sign up",-1)]))],2)])])])])}a(4114);var w=a(144);a(2577);const L=(e,t,a,l,i=!0)=>{const o=JSON.parse(localStorage.getItem("users"))||[],s=o.find((a=>a.id===e&&a.password===t));s?(i&&localStorage.setItem("TMDb-Key",s.password),a(s)):l()},C=(e,t,a,l)=>{try{const l=JSON.parse(localStorage.getItem("users"))||[],i=l.some((t=>t.id===e));if(i)throw new Error("User already exists");const o={id:e,password:t};l.push(o),localStorage.setItem("users",JSON.stringify(l)),a()}catch(i){l(i)}};var y={setup(){const e=(0,w.KR)(!0),t=(0,w.KR)(""),a=(0,w.KR)(""),l=(0,w.KR)(""),o=(0,w.KR)(""),s=(0,w.KR)(""),n=(0,w.KR)(!1),r=(0,w.KR)(!1),u=(0,w.KR)(!1),d=(0,w.KR)(!1),v=(0,w.KR)(!1),g=(0,w.KR)(!1),p=(0,w.KR)(!1),h=(0,w.KR)({display:"none",left:"0px",top:"0px",transform:"scale(1)"}),m=(0,w.KR)(""),f=(0,w.KR)(""),k=(0,w.KR)(""),b=(0,c.rd)(),y=(0,i.EW)((()=>t.value&&a.value)),E=(0,i.EW)((()=>l.value&&o.value&&s.value&&o.value===s.value&&r.value)),R=()=>{e.value=!e.value,setTimeout((()=>{document.getElementById("register").classList.toggle("register-swap"),document.getElementById("login").classList.toggle("login-swap")}),50)},K=e=>{switch(e){case"email":u.value=!0;break;case"password":d.value=!0;break;case"registerEmail":v.value=!0;break;case"registerPassword":g.value=!0;break;case"confirmPassword":p.value=!0;break}},M=e=>{switch(e){case"email":u.value=!1;break;case"password":d.value=!1;break;case"registerEmail":v.value=!1;break;case"registerPassword":g.value=!1;break;case"confirmPassword":p.value=!1;break}};(0,i.sV)((()=>{})),(0,i.hi)((()=>{}));const I=()=>{L(t.value,a.value,(()=>{b.push("/")}),(()=>{alert("Login failed")}))},W=()=>{C(l.value,o.value,(()=>{R()}),(e=>{alert(e)}))};return{isLoginVisible:e,email:t,password:a,registerEmail:l,registerPassword:o,confirmPassword:s,rememberMe:n,acceptTerms:r,isEmailFocused:u,isPasswordFocused:d,isRegisterEmailFocused:v,isRegisterPasswordFocused:g,isConfirmPasswordFocused:p,cursorStyle:h,hours:m,minutes:f,ampm:k,isLoginFormValid:y,isRegisterFormValid:E,toggleCard:R,focusInput:K,blurInput:M,handleLogin:I,handleRegister:W}}};const E=(0,n.A)(y,[["render",b],["__scopeId","data-v-10df0e7e"]]);var R=E;const K={id:"container"};function M(e,t,a,l,o,s){const n=(0,i.g2)("Header"),r=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.CE)("div",K,[(0,i.bF)(n),(0,i.bF)(r)])}var I=a(8950),W=a(2353),_=a(292);const T={id:"container"},P={class:"header-left"},S={class:"logo"},F={href:"/"},X={class:"header-right"},A={class:"user-email"};var U={__name:"header",setup(e){I.Yv.add(W.MjD,W.X46,W.ycA,W.ckx,W.GRI);const t=(0,c.rd)(),a=(0,w.KR)(!1),l=(0,w.KR)(!1),o=(0,w.KR)(""),s=()=>{localStorage.removeItem("TMDb-Key"),t.push("/sign-in")},n=()=>{l.value=!l.value},r=()=>{a.value=window.scrollY>50},u=()=>{const e=JSON.parse(localStorage.getItem("users"))||[],t=localStorage.getItem("TMDb-Key");if(t){const a=e.find((e=>e.password===t));o.value=a?a.id:""}};return(0,i.sV)((()=>{window.addEventListener("scroll",r),u()})),(0,i.xo)((()=>{window.removeEventListener("scroll",r)})),(e,t)=>((0,i.uX)(),(0,i.CE)("div",T,[(0,i.Lk)("header",{class:(0,d.C4)(["app-header",{scrolled:a.value}])},[(0,i.Lk)("div",P,[(0,i.Lk)("div",S,[(0,i.Lk)("a",F,[(0,i.bF)((0,w.R1)(_.gc),{icon:["fas","ticket"],style:{height:"100%",color:"#E50914"}})])]),t[0]||(t[0]=(0,i.Fv)('<nav class="nav-links desktop-nav"><ul><li><a href="/">홈</a></li><li><a href="/popular">대세 콘텐츠</a></li><li><a href="/search">찾아보기</a></li><li><a href="/wishlist">내가 찜한 리스트</a></li></ul></nav>',1))]),(0,i.Lk)("div",X,[(0,i.Lk)("span",A,(0,d.v_)(o.value),1),(0,i.Lk)("button",{class:"icon-button",onClick:s},[(0,i.bF)((0,w.R1)(_.gc),{icon:["fas","user"]})]),(0,i.Lk)("button",{class:"icon-button mobile-menu-button",onClick:n},[(0,i.bF)((0,w.R1)(_.gc),{icon:["fas","bars"]})])])],2),(0,i.Lk)("div",{class:(0,d.C4)(["mobile-nav",{open:l.value}])},[(0,i.Lk)("button",{class:"close-button",onClick:n},[(0,i.bF)((0,w.R1)(_.gc),{icon:["fas","times"]})]),(0,i.Lk)("nav",null,[(0,i.Lk)("ul",null,[(0,i.Lk)("li",null,[(0,i.Lk)("a",{href:"/",onClick:n},"홈")]),(0,i.Lk)("li",null,[(0,i.Lk)("a",{href:"/popular",onClick:n},"대세 콘텐츠")]),(0,i.Lk)("li",null,[(0,i.Lk)("a",{href:"/search",onClick:n},"찾아보기")]),(0,i.Lk)("li",null,[(0,i.Lk)("a",{href:"/wishlist",onClick:n},"내가 찜한 리스트")])])])],2)]))}};const O=U;var x=O,V=(0,i.pM)({components:{Header:x}});const B=(0,n.A)(V,[["render",M]]);var $=B,j=a(4373);const z=async e=>{try{const t=await j.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${e}&language=ko-KR`);return console.log(t.data.results[0]),t.data.results[0]}catch(t){console.error("Error fetching featured movie:",t)}},D=(e,t=1)=>`https://api.themoviedb.org/3/movie/popular?api_key=${e}&language=ko-KR&page=${t}`,J=(e,t=2)=>`https://api.themoviedb.org/3/movie/now_playing?api_key=${e}&language=ko-KR&page=${t}`,q=(e,t,a=1)=>`https://api.themoviedb.org/3/discover/movie?api_key=${e}&with_genres=${t}&language=ko-KR&page=${a}`,G={class:"banner-content"};function H(e,t,a,l,o,s){return e.movie?((0,i.uX)(),(0,i.CE)("div",{key:0,class:"banner",style:(0,d.Tr)({backgroundImage:`url(${e.backdropUrl})`})},[(0,i.Lk)("div",G,[(0,i.Lk)("h1",null,(0,d.v_)(e.movie.title),1),(0,i.Lk)("p",null,(0,d.v_)(e.movie.overview),1),t[0]||(t[0]=(0,i.Lk)("button",{class:"play-btn title-btn"},"재생",-1)),t[1]||(t[1]=(0,i.Lk)("button",{class:"info-btn title-btn"},"상세 정보",-1))])],4)):(0,i.Q3)("",!0)}var Q=(0,i.pM)({name:"BannerComponent",props:{movie:{type:Object,required:!0}},setup(e){const t=(0,i.EW)((()=>e.movie?`https://image.tmdb.org/t/p/original${e.movie.backdrop_path}`:""));return{backdropUrl:t}}});const Y=(0,n.A)(Q,[["render",H],["__scopeId","data-v-5cce7c82"]]);var N=Y;const Z={class:"movie-row"},ee=["disabled"],te={class:"slider-window",ref:"sliderWindow"},ae=["onClick"],le=["src","alt"],ie={key:0,class:"wishlist-indicator"},oe=["disabled"];function se(e,t,a,l,o,s){return(0,i.uX)(),(0,i.CE)("div",Z,[(0,i.Lk)("h2",null,(0,d.v_)(a.title),1),(0,i.Lk)("div",{class:"slider-container",onWheel:t[2]||(t[2]=(...e)=>l.handleWheel&&l.handleWheel(...e)),onTouchstart:t[3]||(t[3]=(...e)=>l.handleTouchStart&&l.handleTouchStart(...e)),onTouchmove:t[4]||(t[4]=(...e)=>l.handleTouchMove&&l.handleTouchMove(...e)),onTouchend:t[5]||(t[5]=(...e)=>l.handleTouchEnd&&l.handleTouchEnd(...e)),onMousemove:t[6]||(t[6]=(...e)=>l.handleMouseMove&&l.handleMouseMove(...e)),onMouseleave:t[7]||(t[7]=(...e)=>l.handleMouseLeave&&l.handleMouseLeave(...e))},[(0,i.Lk)("button",{class:"slider-button left",onClick:t[0]||(t[0]=e=>l.slide("left")),style:(0,d.Tr)({opacity:l.showButtons&&!l.atLeftEdge?1:0}),disabled:l.atLeftEdge},"<",12,ee),(0,i.Lk)("div",te,[(0,i.Lk)("div",{class:"movie-slider",ref:"slider",style:(0,d.Tr)({transform:`translateX(${-l.scrollAmount}px)`})},[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(l.movies,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.id,class:"movie-card",onClick:t=>l.toggleWishlist(e)},[(0,i.Lk)("img",{src:l.getImageUrl(e.poster_path),alt:e.title},null,8,le),l.isInWishlist(e.id)?((0,i.uX)(),(0,i.CE)("div",ie,"👍")):(0,i.Q3)("",!0)],8,ae)))),128))],4)],512),(0,i.Lk)("button",{class:"slider-button right",onClick:t[1]||(t[1]=e=>l.slide("right")),style:(0,d.Tr)({opacity:l.showButtons&&!l.atRightEdge?1:0}),disabled:l.atRightEdge},">",12,oe)],32)])}function ne(){const e=(0,w.KR)([]),t=()=>{const t=localStorage.getItem("movieWishlist");t&&(e.value=JSON.parse(t))},a=()=>{localStorage.setItem("movieWishlist",JSON.stringify(e.value))},l=t=>{const l=e.value.findIndex((e=>e.id===t.id));-1===l?e.value.push(t):e.value.splice(l,1),a()},i=t=>e.value.some((e=>e.id===t));return{wishlist:e,loadWishlist:t,toggleWishlist:l,isInWishlist:i}}const re={name:"MovieRow",props:{title:{type:String,required:!0},fetchUrl:{type:String,required:!0}},setup(e){const t=(0,w.KR)(null),a=(0,w.KR)(null),l=(0,w.KR)([]),o=(0,w.KR)(0),s=(0,w.KR)(!1),n=(0,w.KR)(!1),r=(0,w.KR)(0),u=(0,w.KR)(0),c=(0,i.EW)((()=>o.value<=0)),d=(0,i.EW)((()=>o.value>=K.value)),{wishlist:v,toggleWishlist:g,isInWishlist:p}=ne(),h=async()=>{try{const t=await j.A.get(e.fetchUrl);l.value=t.data.results,console.log(l.value)}catch(t){console.error("Error fetching movies:",t)}},m=e=>`https://image.tmdb.org/t/p/w300${e}`,f=(e,t=null)=>{const l=t||.8*(a.value?.clientWidth||0);o.value="left"===e?Math.max(0,o.value-l):Math.min(K.value,o.value+l)},k=()=>{s.value=!0},b=()=>{s.value=!1},L=e=>{if(e.preventDefault(),n.value)return;n.value=!0;const t=e.deltaY>0?"right":"left";f(t),setTimeout((()=>{n.value=!1}),500)},C=e=>{r.value=e.touches[0].clientX,u.value=e.touches[0].clientX},y=e=>{u.value=e.touches[0].clientX},E=()=>{const e=r.value-u.value,t=50;if(Math.abs(e)>t){const t=e>0?"right":"left";f(t,Math.abs(e))}},R=()=>t.value&&a.value?Math.max(0,t.value.scrollWidth-a.value.clientWidth):0,K=(0,w.KR)(R()),M=()=>{K.value=R(),o.value=Math.min(o.value,K.value)};return(0,i.sV)((()=>{h(),window.addEventListener("resize",M),M()})),(0,i.wB)(l,(()=>{setTimeout(M,0)})),{slider:t,sliderWindow:a,movies:l,scrollAmount:o,showButtons:s,atLeftEdge:c,atRightEdge:d,getImageUrl:m,slide:f,handleMouseMove:k,handleMouseLeave:b,handleWheel:L,handleTouchStart:C,handleTouchMove:y,handleTouchEnd:E,toggleWishlist:g,isInWishlist:p}}},ue=()=>{(0,l.$9)((e=>({52467153:e.fontSize})))},ce=re.setup;re.setup=ce?(e,t)=>(ue(),ce(e,t)):ue;var de=re;const ve=(0,n.A)(de,[["render",se],["__scopeId","data-v-244a3430"]]);var ge=ve,pe={__name:"home-main",setup(e){I.Yv.add(W.MjD,W.X46);const t=(0,w.KR)(localStorage.getItem("TMDb-Key")||""),a=(0,w.KR)(null),l=(0,w.KR)(""),o=(0,w.KR)(""),s=(0,w.KR)("");l.value=D(t.value),o.value=J(t.value),s.value=q(t.value,"28"),z(t.value).then((e=>{a.value=e}));const n=()=>{const e=document.querySelector(".app-header");window.scrollY>50?e.classList.add("scrolled"):e.classList.remove("scrolled")};return(0,i.sV)((()=>{window.addEventListener("scroll",n),setInterval((()=>{}),1e3)})),(0,i.hi)((()=>{window.removeEventListener("scroll",n)})),(e,t)=>((0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(N,{movie:a.value},null,8,["movie"]),(0,i.bF)(ge,{title:"인기 영화",fetchUrl:l.value},null,8,["fetchUrl"]),(0,i.bF)(ge,{title:"최신 영화",fetchUrl:o.value},null,8,["fetchUrl"]),(0,i.bF)(ge,{title:"액션 영화",fetchUrl:s.value},null,8,["fetchUrl"])],64))}};const he=(0,n.A)(pe,[["__scopeId","data-v-12c8668e"]]);var me=he;const fe={class:"movie-grid",ref:"gridContainer"},ke=["onClick"],be=["src","alt"],we={class:"movie-title"},Le={key:0,class:"empty-wishlist"},Ce={key:1,class:"pagination"},ye=["disabled"],Ee=["disabled"];function Re(e,t,a,l,o,s){return(0,i.uX)(),(0,i.CE)("div",fe,[(0,i.Lk)("div",{class:(0,d.C4)(["grid-container",e.currentView])},[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(l.visibleWishlistMovies,((e,a)=>((0,i.uX)(),(0,i.CE)("div",{key:a,class:(0,d.C4)(["movie-row",{full:e.length===l.rowSize}])},[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.id,class:"movie-card",onClick:t=>l.toggleWishlist(e)},[(0,i.Lk)("img",{src:l.getImageUrl(e.poster_path),alt:e.title},null,8,be),(0,i.Lk)("div",we,(0,d.v_)(e.title),1),t[2]||(t[2]=(0,i.Lk)("div",{class:"wishlist-indicator"},"👍",-1))],8,ke)))),128))],2)))),128))],2),0===l.wishlistMovies.length?((0,i.uX)(),(0,i.CE)("div",Le," 위시리스트가 비어 있습니다. ")):(0,i.Q3)("",!0),l.totalPages>1?((0,i.uX)(),(0,i.CE)("div",Ce,[(0,i.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>l.prevPage&&l.prevPage(...e)),disabled:1===l.currentPage},"< 이전",8,ye),(0,i.Lk)("span",null,(0,d.v_)(l.currentPage)+" / "+(0,d.v_)(l.totalPages),1),(0,i.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>l.nextPage&&l.nextPage(...e)),disabled:l.currentPage===l.totalPages},"다음 >",8,Ee)])):(0,i.Q3)("",!0)],512)}a(8872);var Ke={name:"MovieGrid",setup(){const e=(0,w.KR)(null),t=(0,w.KR)(4),a=(0,w.KR)(20),l=(0,w.KR)(1),o=(0,w.KR)(window.innerWidth<=768),{wishlist:s,loadWishlist:n,toggleWishlist:r,isInWishlist:u}=((0,w.KR)("grid"),ne()),c=(0,i.EW)((()=>s.value)),d=e=>e?`https://image.tmdb.org/t/p/w300${e}`:"/placeholder-image.jpg",v=()=>{if(e.value){const l=e.value.offsetWidth,i=window.innerHeight-e.value.offsetTop,s=o.value?90:220,n=o.value?150:330,r=o.value?10:15,u=-10;t.value=Math.floor(l/(s+r));const c=Math.floor(i/(n+u));a.value=t.value*c}},g=(0,i.EW)((()=>{const e=(l.value-1)*a.value,i=e+a.value,o=c.value.slice(e,i);return o.reduce(((e,a,l)=>{const i=Math.floor(l/t.value);return e[i]||(e[i]=[]),e[i].push(a),e}),[])})),p=(0,i.EW)((()=>Math.ceil(c.value.length/a.value))),h=()=>{l.value<p.value&&l.value++},m=()=>{l.value>1&&l.value--},f=()=>{o.value=window.innerWidth<=768,v()};return(0,i.sV)((()=>{n(),v(),window.addEventListener("resize",f)})),(0,i.hi)((()=>{window.removeEventListener("resize",f)})),(0,i.wB)([t,a],(()=>{l.value=1})),{visibleWishlistMovies:g,wishlistMovies:c,currentPage:l,totalPages:p,getImageUrl:d,nextPage:h,prevPage:m,gridContainer:e,rowSize:t,toggleWishlist:r,isInWishlist:u}}};const Me=(0,n.A)(Ke,[["render",Re],["__scopeId","data-v-4361f86c"]]);var Ie=Me,We=(0,i.pM)({__name:"home-wishlist",setup(e){return(e,t)=>((0,i.uX)(),(0,i.Wv)(Ie))}});const _e=We;var Te=_e;const Pe={class:"movie-grid",ref:"gridContainer"},Se=["onMouseup"],Fe=["src","alt"],Xe={class:"movie-title"},Ae={key:0,class:"wishlist-indicator"},Ue={key:0,class:"pagination"},Oe=["disabled"],xe=["disabled"];function Ve(e,t,a,l,o,s){return(0,i.uX)(),(0,i.CE)("div",Pe,[(0,i.Lk)("div",{class:(0,d.C4)(["grid-container",e.currentView])},[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(l.visibleMovieGroups,((e,t)=>((0,i.uX)(),(0,i.CE)("div",{key:t,class:(0,d.C4)(["movie-row",{full:e.length===l.rowSize}])},[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.id,class:"movie-card",onMouseup:t=>l.toggleWishlist(e)},[(0,i.Lk)("img",{src:l.getImageUrl(e.poster_path),alt:e.title},null,8,Fe),(0,i.Lk)("div",Xe,(0,d.v_)(e.title),1),l.isInWishlist(e.id)?((0,i.uX)(),(0,i.CE)("div",Ae,"👍")):(0,i.Q3)("",!0)],40,Se)))),128))],2)))),128))],2),l.totalPages>1?((0,i.uX)(),(0,i.CE)("div",Ue,[(0,i.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>l.prevPage&&l.prevPage(...e)),disabled:1===l.currentPage},"< 이전",8,Oe),(0,i.Lk)("span",null,(0,d.v_)(l.currentPage)+" / "+(0,d.v_)(l.totalPages),1),(0,i.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>l.nextPage&&l.nextPage(...e)),disabled:l.currentPage===l.totalPages},"다음 >",8,xe)])):(0,i.Q3)("",!0)],512)}var Be={name:"MovieGrid",props:{fetchUrl:{type:String,required:!0}},setup(e){const t=(0,w.KR)([]),a=(0,w.KR)(1),l=(0,w.KR)(null),o=(0,w.KR)(4),s=(0,w.KR)(20),n=(0,w.KR)(window.innerWidth<=768);(0,w.KR)("grid");let r=null;const{wishlist:u,loadWishlist:c,toggleWishlist:d,isInWishlist:v}=ne(),g=async()=>{try{const a=120,l=Math.ceil(a/20);let i=[];for(let t=1;t<=l;t++){const a=await j.A.get(e.fetchUrl,{params:{page:t,per_page:s}});i=[...i,...a.data.results]}t.value=i.slice(0,a)}catch(a){console.error("Error fetching movies:",a)}},p=e=>`https://image.tmdb.org/t/p/w300${e}`,h=()=>{if(l.value){const e=l.value.offsetWidth,t=window.innerHeight-l.value.offsetTop,a=n.value?90:200,i=n.value?150:220,r=n.value?10:15,u=-10;o.value=Math.floor(e/(a+r));const c=Math.floor(t/(i+u));s.value=o.value*c}},m=(0,i.EW)((()=>{const e=(a.value-1)*s.value,l=e+s.value,i=t.value.slice(e,l);return i.reduce(((e,t,a)=>{const l=Math.floor(a/o.value);return e[l]||(e[l]=[]),e[l].push(t),e}),[])})),f=(0,i.EW)((()=>Math.ceil(t.value.length/s.value))),k=()=>{a.value<f.value&&a.value++},b=()=>{a.value>1&&a.value--},L=()=>{n.value=window.innerWidth<=768,h()},C=e=>{y(),r=setTimeout((()=>{d(e)}),2e3)},y=()=>{r&&(clearTimeout(r),r=null)};return(0,i.sV)((()=>{g(),h(),c(),window.addEventListener("resize",L)})),(0,i.hi)((()=>{window.removeEventListener("resize",L)})),(0,i.wB)([o,s],(()=>{a.value=1})),{visibleMovieGroups:m,currentPage:a,totalPages:f,getImageUrl:p,nextPage:k,prevPage:b,gridContainer:l,rowSize:o,startWishlistTimer:C,clearWishlistTimer:y,toggleWishlist:d,isInWishlist:v}}};const $e=(0,n.A)(Be,[["render",Ve],["__scopeId","data-v-621ef426"]]);var je=$e;const ze={class:"movie-grid",ref:"gridContainer"},De=["onMouseup"],Je=["src","alt"],qe={class:"movie-title"},Ge={key:0,class:"wishlist-indicator"},He={ref:"loadingTrigger",class:"loading-trigger"},Qe={key:0,class:"loading-indicator"};function Ye(e,t,a,o,s,n){return(0,i.uX)(),(0,i.CE)("div",ze,[(0,i.Lk)("div",{class:(0,d.C4)(["grid-container",e.currentView])},[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.visibleMovieGroups,((t,a)=>((0,i.uX)(),(0,i.CE)("div",{key:a,class:(0,d.C4)(["movie-row",{full:t.length===e.rowSize}])},[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(t,(t=>((0,i.uX)(),(0,i.CE)("div",{key:t.id,class:"movie-card",onMouseup:a=>e.toggleWishlist(t)},[(0,i.Lk)("img",{src:e.getImageUrl(t.poster_path),alt:t.title},null,8,Je),(0,i.Lk)("div",qe,(0,d.v_)(t.title),1),e.isInWishlist(t.id)?((0,i.uX)(),(0,i.CE)("div",Ge,"👍")):(0,i.Q3)("",!0)],40,De)))),128))],2)))),128))],2),(0,i.Lk)("div",He,[e.isLoading?((0,i.uX)(),(0,i.CE)("div",Qe,"Loading...")):(0,i.Q3)("",!0)],512),(0,i.bo)((0,i.Lk)("button",{onClick:t[0]||(t[0]=(...t)=>e.scrollToTopAndReset&&e.scrollToTopAndReset(...t)),class:"top-button"},"Top",512),[[l.aG,e.showTopButton]])],512)}a(4520);var Ne=(0,i.pM)({name:"MovieGrid",props:{genreCode:{type:String,required:!0},apiKey:{type:String,required:!0},sortingOrder:{type:String,required:!0,default:"all"},voteEverage:{type:Number,required:!0,default:100}},setup(e){const t=(0,w.KR)([]),a=(0,w.KR)(1),l=(0,w.KR)(null),o=(0,w.KR)(null),s=(0,w.KR)(4),n=(0,w.KR)(!1),r=(0,w.KR)(window.innerWidth<=768),u=(0,w.KR)("grid"),c=(0,w.KR)(!0),d=(0,w.KR)(!1);let v=null;(0,i.wB)((()=>e.genreCode),(()=>{E()})),(0,i.wB)((()=>e.sortingOrder),(()=>{E()})),(0,i.wB)((()=>e.voteEverage),(()=>{E()}));const{loadWishlist:g,toggleWishlist:p,isInWishlist:h}=ne(),m=async()=>{if(n.value||!c.value)return;n.value=!0;let l=null;try{l="0"===e.genreCode?await j.A.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:e.apiKey,language:"ko-KR",page:a.value,per_page:10}}):await j.A.get("https://api.themoviedb.org/3/discover/movie",{params:{api_key:e.apiKey,with_genres:e.genreCode,language:"ko-KR",page:a.value,per_page:10}});const i=l.data.results;if(i.length>0){let l=[...t.value,...i];"all"!==e.sortingOrder&&(l=l.filter((t=>t.original_language===e.sortingOrder))),l=l.filter((t=>{let a=!1;return a=-1===e.voteEverage||(-2===e.voteEverage?t.vote_average<=4:t.vote_average>=e.voteEverage&&t.vote_average<e.voteEverage+1),a})),t.value=l,a.value++}else c.value=!1}catch(i){console.error("Error fetching movies:",i)}finally{n.value=!1}},f=e=>e?`https://image.tmdb.org/t/p/w300${e}`:"/placeholder-image.jpg",k=()=>{if(l.value){const e=l.value.offsetWidth,t=r.value?100:300,a=r.value?10:15;s.value=Math.floor(e/(t+a))}},b=(0,i.EW)((()=>t.value.reduce(((e,t,a)=>{const l=Math.floor(a/s.value);return e[l]||(e[l]=[]),e[l].push(t),e}),[]))),L=()=>{r.value=window.innerWidth<=768,k()},C=()=>{if(!l.value)return;const e=l.value.lastElementChild;if(!e)return;const t=l.value.getBoundingClientRect().bottom,a=e.getBoundingClientRect().bottom;t>=a-100&&!n.value&&c.value&&m()},y=()=>{const e=window.pageYOffset||document.documentElement.scrollTop;d.value=e>300,C()},E=()=>{t.value=[],a.value=1,c.value=!0,m()},R=()=>{window.scrollTo({top:0,behavior:"smooth"}),E()},K=e=>{M(),v=window.setTimeout((()=>{p(e)}),800)},M=()=>{null!==v&&(clearTimeout(v),v=null)};return(0,i.sV)((()=>{m().then((()=>{C()})),k(),g(),window.addEventListener("resize",L),window.addEventListener("scroll",y);const e=new IntersectionObserver((e=>{e[0].isIntersecting&&!n.value&&c.value&&m()}),{rootMargin:"100px",threshold:.1});o.value&&e.observe(o.value),(0,i.hi)((()=>{window.removeEventListener("resize",L),window.removeEventListener("scroll",y),o.value&&e.unobserve(o.value)}))})),{visibleMovieGroups:b,getImageUrl:f,gridContainer:l,loadingTrigger:o,rowSize:s,isLoading:n,currentView:u,hasMore:c,showTopButton:d,scrollToTopAndReset:R,startWishlistTimer:K,clearWishlistTimer:M,toggleWishlist:p,isInWishlist:h}}});const Ze=(0,n.A)(Ne,[["render",Ye],["__scopeId","data-v-61afa900"]]);var et=Ze;const tt={class:"popular-container"},at={class:"view-toggle"};var lt=(0,i.pM)({__name:"home-popular",setup(e){I.Yv.add(W.UTC,W.ckx),(0,i.pM)({components:{FontAwesomeIcon:_.gc,MovieGrid:je,MovieInfiniteScroll:et}});const t=localStorage.getItem("TMDb-Key")||"",a=D(t),l=(0,w.KR)("grid"),o=e=>{l.value=e};return(0,i.sV)((()=>{})),(e,t)=>((0,i.uX)(),(0,i.CE)("div",tt,[(0,i.Lk)("div",at,[(0,i.Lk)("button",{class:(0,d.C4)({active:"grid"===l.value}),onClick:t[0]||(t[0]=e=>o("grid"))},[(0,i.bF)((0,w.R1)(_.gc),{icon:["fas","th"]})],2),(0,i.Lk)("button",{class:(0,d.C4)({active:"list"===l.value}),onClick:t[1]||(t[1]=e=>o("list"))},[(0,i.bF)((0,w.R1)(_.gc),{icon:["fas","bars"]})],2)]),"grid"===l.value?((0,i.uX)(),(0,i.Wv)(je,{key:0,title:"인기 영화",fetchUrl:(0,w.R1)(a)},null,8,["fetchUrl"])):(0,i.Q3)("",!0),"list"===l.value?((0,i.uX)(),(0,i.Wv)(et,{key:1,title:"인기 영화"})):(0,i.Q3)("",!0)]))}});const it=(0,n.A)(lt,[["__scopeId","data-v-468a4efc"]]);var ot=it;const st={class:"dropdown-container"},nt=["onClick"],rt={class:"select-items"},ut=["onClick"];var ct=(0,i.pM)({__name:"movie-search",emits:["changeOptions"],setup(e,{emit:t}){const a=t,o={originalLanguage:["장르 (전체)","Action","Adventure","Comedy","Crime","Family"],translationLanguage:["평점 (전체)","9~10","8~9","7~8","6~7","5~6","4~5","4점 이하"],sorting:["언어 (전체)","영어","한국어"]},s={originalLanguage:"장르 (전체)",translationLanguage:"평점 (전체)",sorting:"언어 (전체)"},n=(0,w.KR)(s),r=(0,w.KR)(null),u=e=>{r.value=r.value===e?null:e},c=(e,t)=>{n.value[e]=t,r.value=null,a("changeOptions",n.value)},v=()=>{for(const e in n.value)n.value[e]=o[e][0];a("changeOptions",n.value)};return(e,t)=>((0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.Lk)("div",null,[(0,i.bo)((0,i.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.searchKeyword=t),onKeyup:t[1]||(t[1]=(0,l.jR)(((...t)=>e.searchMovie&&e.searchMovie(...t)),["enter"]))},null,544),[[l.Jo,e.searchKeyword]]),(0,i.Lk)("button",{onClick:t[2]||(t[2]=(...t)=>e.searchMovie&&e.searchMovie(...t))},"Search")]),(0,i.Lk)("div",st,[t[3]||(t[3]=(0,i.Lk)("label",null,"선호하는 설정을 선택하세요",-1)),((0,i.uX)(),(0,i.CE)(i.FK,null,(0,i.pI)(o,((e,t)=>(0,i.Lk)("div",{key:t,class:"custom-select"},[(0,i.Lk)("div",{class:"select-selected",onClick:e=>u(t)},(0,d.v_)(n.value[t]),9,nt),(0,i.bo)((0,i.Lk)("div",rt,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e[0],onClick:a=>c(t,e)},(0,d.v_)(e),9,ut)))),128))],512),[[l.aG,r.value===t]])]))),64)),(0,i.Lk)("button",{class:"clear-options",onClick:v},"초기화")])],64))}});const dt=(0,n.A)(ct,[["__scopeId","data-v-1cf14f92"]]);var vt=dt;const gt={class:"container-search"},pt={class:"container-search-bar"},ht={class:"content-search"};var mt=(0,i.pM)({__name:"home-search",setup(e){const t=localStorage.getItem("TMDb-Key")||"",a=(0,w.KR)("28"),l=(0,w.KR)(-1),o=(0,w.KR)("all"),s={"장르 (전체)":0,Action:28,Adventure:12,Comedy:35,Crime:80,Family:10751},n={"언어 (전체)":"all","영어":"en","한국어":"ko"},r={"평점 (전체)":-1,"9~10":9,"8~9":8,"7~8":7,"6~7":6,"5~6":5,"4~5":4,"4점 이하":-2},u=e=>{a.value=`${s[e["originalLanguage"]]}`,l.value=r[e["translationLanguage"]],o.value=n[e["sorting"]]};return(e,s)=>((0,i.uX)(),(0,i.CE)("div",gt,[(0,i.Lk)("div",pt,[(0,i.bF)(vt,{onChangeOptions:u})]),(0,i.Lk)("div",ht,[(0,i.bF)(et,{"api-key":(0,w.R1)(t),"genre-code":a.value,"sorting-order":o.value,"vote-everage":l.value},null,8,["api-key","genre-code","sorting-order","vote-everage"])])]))}});const ft=(0,n.A)(mt,[["__scopeId","data-v-11eb211f"]]);var kt=ft;const bt=[{path:"/",name:"Home",component:$,meta:{requiresAuth:!0},children:[{name:"HomeMain",path:"/",component:me},{name:"HomePopular",path:"/popular",component:ot},{name:"HomeWishList",path:"/wishlist",component:Te},{name:"HomeSearch",path:"/search",component:kt}]},{name:"SignIn",path:"/sign-in",component:R}],wt=(0,c.aE)({history:(0,c.LA)("/vue-assignment.github.io/"),routes:bt});wt.beforeEach(((e,t,a)=>{const l=null!==localStorage.getItem("TMDb-Key");e.matched.some((e=>e.meta.requiresAuth))?l?a():a({path:"/sign-in"}):"SignIn"===e.name&&l?a({name:"/"}):a()}));var Lt=wt;I.Yv.add(W.LkM),(0,l.Ef)(u).use(Lt).component("font-awesome-icon",_.gc).mount("#app")}},t={};function a(l){var i=t[l];if(void 0!==i)return i.exports;var o=t[l]={exports:{}};return e[l].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,l,i,o){if(!l){var s=1/0;for(c=0;c<e.length;c++){l=e[c][0],i=e[c][1],o=e[c][2];for(var n=!0,r=0;r<l.length;r++)(!1&o||s>=o)&&Object.keys(a.O).every((function(e){return a.O[e](l[r])}))?l.splice(r--,1):(n=!1,o<s&&(s=o));if(n){e.splice(c--,1);var u=i();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[l,i,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,l){var i,o,s=l[0],n=l[1],r=l[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(i in n)a.o(n,i)&&(a.m[i]=n[i]);if(r)var c=r(a)}for(t&&t(l);u<s.length;u++)o=s[u],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(c)},l=self["webpackChunkvue_assignment"]=self["webpackChunkvue_assignment"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=a.O(void 0,[504],(function(){return a(6012)}));l=a.O(l)})();
//# sourceMappingURL=app.56c4aa69.js.map