"use strict";(self["webpackChunkvue_assignment"]=self["webpackChunkvue_assignment"]||[]).push([[140],{7140:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}});var n=r(641),o=r(953),i=r(33),a=r(3751);const l={class:"dropdown-container"},s=["onClick"],u={class:"select-items"},v=["onClick"];var c=(0,n.pM)({__name:"movie-search",emits:["changeOptions"],setup(e,{emit:t}){const r=t,c={originalLanguage:["장르 (전체)","Action","Adventure","Comedy","Crime","Family"],translationLanguage:["평점 (전체)","9~10","8~9","7~8","6~7","5~6","4~5","4점 이하"],sorting:["언어 (전체)","영어","한국어"]},d={originalLanguage:"장르 (전체)",translationLanguage:"평점 (전체)",sorting:"언어 (전체)"},g=(0,o.KR)(d),p=(0,o.KR)(null),h=e=>{p.value=p.value===e?null:e},f=(e,t)=>{g.value[e]=t,p.value=null,r("changeOptions",g.value)},m=()=>{for(const e in g.value)g.value[e]=c[e][0];r("changeOptions",g.value)};return(e,t)=>((0,n.uX)(),(0,n.CE)("div",l,[t[0]||(t[0]=(0,n.Lk)("label",null,"선호하는 설정을 선택하세요",-1)),((0,n.uX)(),(0,n.CE)(n.FK,null,(0,n.pI)(c,((e,t)=>(0,n.Lk)("div",{key:t,class:"custom-select"},[(0,n.Lk)("div",{class:"select-selected",onClick:e=>h(t)},(0,i.v_)(g.value[t]),9,s),(0,n.bo)((0,n.Lk)("div",u,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e,(e=>((0,n.uX)(),(0,n.CE)("div",{key:e[0],onClick:r=>f(t,e)},(0,i.v_)(e),9,v)))),128))],512),[[a.aG,p.value===t]])]))),64)),(0,n.Lk)("button",{class:"clear-options",onClick:m},"초기화")]))}}),d=r(6262);const g=(0,d.A)(c,[["__scopeId","data-v-01b114f0"]]);var p=g,h=r(3146);const f={class:"container-search"},m={class:"container-search-bar"},w={class:"content-search"};var C=(0,n.pM)({__name:"home-search",setup(e){const t=localStorage.getItem("TMDb-Key")||"",r=(0,o.KR)("28"),i=(0,o.KR)(-1),a=(0,o.KR)("all"),l={"장르 (전체)":0,Action:28,Adventure:12,Comedy:35,Crime:80,Family:10751},s={"언어 (전체)":"all","영어":"en","한국어":"ko"},u={"평점 (전체)":-1,"9~10":9,"8~9":8,"7~8":7,"6~7":6,"5~6":5,"4~5":4,"4점 이하":-2},v=e=>{r.value=`${l[e["originalLanguage"]]}`,i.value=u[e["translationLanguage"]],a.value=s[e["sorting"]]};return(e,l)=>((0,n.uX)(),(0,n.CE)("div",f,[(0,n.Lk)("div",m,[(0,n.bF)(p,{onChangeOptions:v})]),(0,n.Lk)("div",w,[(0,n.bF)(h.A,{"api-key":(0,o.R1)(t),"genre-code":r.value,"sorting-order":a.value,"vote-everage":i.value},null,8,["api-key","genre-code","sorting-order","vote-everage"])])]))}});const k=(0,d.A)(C,[["__scopeId","data-v-11eb211f"]]);var y=k},3146:function(e,t,r){r.d(t,{A:function(){return k}});var n=r(641),o=r(33),i=r(3751);const a={class:"movie-grid",ref:"gridContainer"},l=["onMouseup"],s=["src","alt"],u={class:"movie-title"},v={key:0,class:"wishlist-indicator"},c={ref:"loadingTrigger",class:"loading-trigger"},d={key:0,class:"loading-indicator"};function g(e,t,r,g,p,h){return(0,n.uX)(),(0,n.CE)("div",a,[(0,n.Lk)("div",{class:(0,o.C4)(["grid-container",e.currentView])},[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.visibleMovieGroups,((t,r)=>((0,n.uX)(),(0,n.CE)("div",{key:r,class:(0,o.C4)(["movie-row",{full:t.length===e.rowSize}])},[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(t,(t=>((0,n.uX)(),(0,n.CE)("div",{key:t.id,class:"movie-card",onMouseup:r=>e.toggleWishlist(t)},[(0,n.Lk)("img",{src:e.getImageUrl(t.poster_path),alt:t.title},null,8,s),(0,n.Lk)("div",u,(0,o.v_)(t.title),1),e.isInWishlist(t.id)?((0,n.uX)(),(0,n.CE)("div",v,"👍")):(0,n.Q3)("",!0)],40,l)))),128))],2)))),128))],2),(0,n.Lk)("div",c,[e.isLoading?((0,n.uX)(),(0,n.CE)("div",d,"Loading...")):(0,n.Q3)("",!0)],512),(0,n.bo)((0,n.Lk)("button",{onClick:t[0]||(t[0]=(...t)=>e.scrollToTopAndReset&&e.scrollToTopAndReset(...t)),class:"top-button"},"Top",512),[[i.aG,e.showTopButton]])],512)}r(4114),r(8992),r(4520),r(8872);var p=r(953),h=r(4335),f=r(4040),m=(0,n.pM)({name:"MovieGrid",props:{genreCode:{type:String,required:!0},apiKey:{type:String,required:!0},sortingOrder:{type:String,required:!0,default:"all"},voteEverage:{type:Number,required:!0,default:100}},setup(e){const t=(0,p.KR)([]),r=(0,p.KR)(1),o=(0,p.KR)(null),i=(0,p.KR)(null),a=(0,p.KR)(4),l=(0,p.KR)(!1),s=(0,p.KR)(window.innerWidth<=768),u=(0,p.KR)("grid"),v=(0,p.KR)(!0),c=(0,p.KR)(!1);let d=null;(0,n.wB)((()=>e.genreCode),(()=>{K()})),(0,n.wB)((()=>e.sortingOrder),(()=>{K()})),(0,n.wB)((()=>e.voteEverage),(()=>{K()}));const{loadWishlist:g,toggleWishlist:m,isInWishlist:w}=(0,f.n)(),C=async()=>{if(l.value||!v.value)return;l.value=!0;let n=null;try{n="0"===e.genreCode?await h.A.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:e.apiKey,language:"ko-KR",page:r.value,per_page:10}}):await h.A.get("https://api.themoviedb.org/3/discover/movie",{params:{api_key:e.apiKey,with_genres:e.genreCode,language:"ko-KR",page:r.value,per_page:10}});const o=n.data.results;if(o.length>0){let n=[...t.value,...o];"all"!==e.sortingOrder&&(n=n.filter((t=>t.original_language===e.sortingOrder))),n=n.filter((t=>{let r=!1;return r=-1===e.voteEverage||(-2===e.voteEverage?t.vote_average<=4:t.vote_average>=e.voteEverage&&t.vote_average<e.voteEverage+1),r})),t.value=n,r.value++}else v.value=!1}catch(o){console.error("Error fetching movies:",o)}finally{l.value=!1}},k=e=>e?`https://image.tmdb.org/t/p/w300${e}`:"/placeholder-image.jpg",y=()=>{if(o.value){const e=o.value.offsetWidth,t=s.value?100:300,r=s.value?10:15;a.value=Math.floor(e/(t+r))}},E=(0,n.EW)((()=>t.value.reduce(((e,t,r)=>{const n=Math.floor(r/a.value);return e[n]||(e[n]=[]),e[n].push(t),e}),[]))),b=()=>{s.value=window.innerWidth<=768,y()},R=()=>{if(!o.value)return;const e=o.value.lastElementChild;if(!e)return;const t=o.value.getBoundingClientRect().bottom,r=e.getBoundingClientRect().bottom;t>=r-100&&!l.value&&v.value&&C()},_=()=>{const e=window.pageYOffset||document.documentElement.scrollTop;c.value=e>300,R()},K=()=>{t.value=[],r.value=1,v.value=!0,C()},L=()=>{window.scrollTo({top:0,behavior:"smooth"}),K()},I=e=>{T(),d=window.setTimeout((()=>{m(e)}),800)},T=()=>{null!==d&&(clearTimeout(d),d=null)};return(0,n.sV)((()=>{C().then((()=>{R()})),y(),g(),window.addEventListener("resize",b),window.addEventListener("scroll",_);const e=new IntersectionObserver((e=>{e[0].isIntersecting&&!l.value&&v.value&&C()}),{rootMargin:"100px",threshold:.1});i.value&&e.observe(i.value),(0,n.hi)((()=>{window.removeEventListener("resize",b),window.removeEventListener("scroll",_),i.value&&e.unobserve(i.value)}))})),{visibleMovieGroups:E,getImageUrl:k,gridContainer:o,loadingTrigger:i,rowSize:a,isLoading:l,currentView:u,hasMore:v,showTopButton:c,scrollToTopAndReset:L,startWishlistTimer:I,clearWishlistTimer:T,toggleWishlist:m,isInWishlist:w}}}),w=r(6262);const C=(0,w.A)(m,[["render",g],["__scopeId","data-v-61afa900"]]);var k=C},6319:function(e,t,r){var n=r(8551),o=r(9539);e.exports=function(e,t,r,i){try{return i?t(n(r)[0],r[1]):t(r)}catch(a){o(e,"throw",a)}}},2529:function(e){e.exports=function(e,t){return{value:e,done:t}}},6279:function(e,t,r){var n=r(6840);e.exports=function(e,t,r){for(var o in t)n(e,o,t[o],r);return e}},9462:function(e,t,r){var n=r(9565),o=r(2360),i=r(6699),a=r(6279),l=r(8227),s=r(1181),u=r(5966),v=r(7657).IteratorPrototype,c=r(2529),d=r(9539),g=l("toStringTag"),p="IteratorHelper",h="WrapForValidIterator",f=s.set,m=function(e){var t=s.getterFor(e?h:p);return a(o(v),{next:function(){var r=t(this);if(e)return r.nextHandler();try{var n=r.done?void 0:r.nextHandler();return c(n,r.done)}catch(o){throw r.done=!0,o}},return:function(){var r=t(this),o=r.iterator;if(r.done=!0,e){var i=u(o,"return");return i?n(i,o):c(void 0,!0)}if(r.inner)try{d(r.inner.iterator,"normal")}catch(a){return d(o,"throw",a)}return o&&d(o,"normal"),c(void 0,!0)}})},w=m(!0),C=m(!1);i(C,g,"Iterator Helper"),e.exports=function(e,t){var r=function(r,n){n?(n.iterator=r.iterator,n.next=r.next):n=r,n.type=t?h:p,n.nextHandler=e,n.counter=0,n.done=!1,f(this,n)};return r.prototype=t?w:C,r}},2489:function(e,t,r){var n=r(6518),o=r(9565),i=r(9306),a=r(8551),l=r(1767),s=r(9462),u=r(6319),v=r(6395),c=s((function(){var e,t,r,n=this.iterator,i=this.predicate,l=this.next;while(1){if(e=a(o(l,n)),t=this.done=!!e.done,t)return;if(r=e.value,u(n,i,[r,this.counter++],!0))return r}}));n({target:"Iterator",proto:!0,real:!0,forced:v},{filter:function(e){return a(this),i(e),new c(l(this),{predicate:e})}})},8237:function(e,t,r){var n=r(6518),o=r(2652),i=r(9306),a=r(8551),l=r(1767),s=TypeError;n({target:"Iterator",proto:!0,real:!0},{reduce:function(e){a(this),i(e);var t=l(this),r=arguments.length<2,n=r?void 0:arguments[1],u=0;if(o(t,(function(t){r?(r=!1,n=t):n=e(n,t,u),u++}),{IS_RECORD:!0}),r)throw new s("Reduce of empty iterator with no initial value");return n}})},4520:function(e,t,r){r(2489)},8872:function(e,t,r){r(8237)}}]);
//# sourceMappingURL=140.6c49827c.js.map