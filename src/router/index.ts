import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import SignIn from '@/components/sign-in/sign-in.vue'
import Home from '@/components/home/home.vue'
import HomeMain from '@/components/home/main/home-main.vue'
import HomeWishlist from '@/components/home/wishlist/home-wishlist.vue'
import HomeSearch from '@/components/search/home-search.vue'
import HomePopular from '@/components/home/popular/home-popular.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    component: Home,
    children: [
      {
        path: '',
        component: HomeMain
      },
      {
        path: 'popular',
        component: HomePopular
      },
      {
        path: 'wishlist',
        component: HomeWishlist
      },
      {
        path: 'search',
        component: HomeSearch
      }
    ]
  },
  {
    path: '/sign-in',
    component: SignIn
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 전역 네비게이션 가드 (필요한 경우)
// router.beforeEach((to, from, next) => {
//   // 인증 로직
//   // next() 또는 next(false)
// })

export default router