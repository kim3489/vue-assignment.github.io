"use strict";(self["webpackChunkvue_assignment"]=self["webpackChunkvue_assignment"]||[]).push([[535],{4040:function(e,i,t){t.d(i,{n:function(){return s}});t(4114),t(8992),t(7550);var l=t(953);function s(){const e=(0,l.KR)([]),i=()=>{const i=localStorage.getItem("movieWishlist");i&&(e.value=JSON.parse(i))},t=()=>{localStorage.setItem("movieWishlist",JSON.stringify(e.value))},s=i=>{const l=e.value.findIndex((e=>e.id===i.id));-1===l?e.value.push(i):e.value.splice(l,1),t()},a=i=>e.value.some((e=>e.id===i));return{wishlist:e,loadWishlist:i,toggleWishlist:s,isInWishlist:a}}},9535:function(e,i,t){t.r(i),t.d(i,{default:function(){return E}});var l=t(641),s=t(33);const a={class:"movie-grid",ref:"gridContainer"},n=["onClick"],r=["src","alt"],o={class:"movie-title"},u={key:0,class:"empty-wishlist"},v={key:1,class:"pagination"},c=["disabled"],d=["disabled"];function g(e,i,t,g,h,p){return(0,l.uX)(),(0,l.CE)("div",a,[(0,l.Lk)("div",{class:(0,s.C4)(["grid-container",e.currentView])},[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(g.visibleWishlistMovies,((e,t)=>((0,l.uX)(),(0,l.CE)("div",{key:t,class:(0,s.C4)(["movie-row",{full:e.length===g.rowSize}])},[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e,(e=>((0,l.uX)(),(0,l.CE)("div",{key:e.id,class:"movie-card",onClick:i=>g.toggleWishlist(e)},[(0,l.Lk)("img",{src:g.getImageUrl(e.poster_path),alt:e.title},null,8,r),(0,l.Lk)("div",o,(0,s.v_)(e.title),1),i[2]||(i[2]=(0,l.Lk)("div",{class:"wishlist-indicator"},"👍",-1))],8,n)))),128))],2)))),128))],2),0===g.wishlistMovies.length?((0,l.uX)(),(0,l.CE)("div",u," 위시리스트가 비어 있습니다. ")):(0,l.Q3)("",!0),g.totalPages>1?((0,l.uX)(),(0,l.CE)("div",v,[(0,l.Lk)("button",{onClick:i[0]||(i[0]=(...e)=>g.prevPage&&g.prevPage(...e)),disabled:1===g.currentPage},"< 이전",8,c),(0,l.Lk)("span",null,(0,s.v_)(g.currentPage)+" / "+(0,s.v_)(g.totalPages),1),(0,l.Lk)("button",{onClick:i[1]||(i[1]=(...e)=>g.nextPage&&g.nextPage(...e)),disabled:g.currentPage===g.totalPages},"다음 >",8,d)])):(0,l.Q3)("",!0)],512)}t(4114),t(8992),t(8872);var h=t(953),p=t(4040),f={name:"MovieGrid",setup(){const e=(0,h.KR)(null),i=(0,h.KR)(4),t=(0,h.KR)(20),s=(0,h.KR)(1),a=(0,h.KR)(window.innerWidth<=768),{wishlist:n,loadWishlist:r,toggleWishlist:o,isInWishlist:u}=((0,h.KR)("grid"),(0,p.n)()),v=(0,l.EW)((()=>n.value)),c=e=>e?`https://image.tmdb.org/t/p/w300${e}`:"/placeholder-image.jpg",d=()=>{if(e.value){const l=e.value.offsetWidth,s=window.innerHeight-e.value.offsetTop,n=a.value?90:220,r=a.value?150:330,o=a.value?10:15,u=-10;i.value=Math.floor(l/(n+o));const v=Math.floor(s/(r+u));t.value=i.value*v}},g=(0,l.EW)((()=>{const e=(s.value-1)*t.value,l=e+t.value,a=v.value.slice(e,l);return a.reduce(((e,t,l)=>{const s=Math.floor(l/i.value);return e[s]||(e[s]=[]),e[s].push(t),e}),[])})),f=(0,l.EW)((()=>Math.ceil(v.value.length/t.value))),w=()=>{s.value<f.value&&s.value++},m=()=>{s.value>1&&s.value--},W=()=>{a.value=window.innerWidth<=768,d()};return(0,l.sV)((()=>{r(),d(),window.addEventListener("resize",W)})),(0,l.hi)((()=>{window.removeEventListener("resize",W)})),(0,l.wB)([i,t],(()=>{s.value=1})),{visibleWishlistMovies:g,wishlistMovies:v,currentPage:s,totalPages:f,getImageUrl:c,nextPage:w,prevPage:m,gridContainer:e,rowSize:i,toggleWishlist:o,isInWishlist:u}}},w=t(6262);const m=(0,w.A)(f,[["render",g],["__scopeId","data-v-4361f86c"]]);var W=m,k=(0,l.pM)({__name:"home-wishlist",setup(e){return(e,i)=>((0,l.uX)(),(0,l.Wv)(W))}});const C=k;var E=C},8237:function(e,i,t){var l=t(6518),s=t(2652),a=t(9306),n=t(8551),r=t(1767),o=TypeError;l({target:"Iterator",proto:!0,real:!0},{reduce:function(e){n(this),a(e);var i=r(this),t=arguments.length<2,l=t?void 0:arguments[1],u=0;if(s(i,(function(i){t?(t=!1,l=i):l=e(l,i,u),u++}),{IS_RECORD:!0}),t)throw new o("Reduce of empty iterator with no initial value");return l}})},8872:function(e,i,t){t(8237)}}]);
//# sourceMappingURL=535.13371fc7.js.map