import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import SignIn from '@/components/sign-in/sign-in.vue'
import Home from '@/components/home/home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: Home,
    meta: { requiresAuth: true },
    children: [
      {
        name: 'HomeMain',
        path: '/',
        component: () => import('@/components/home/main/home-main.vue'),
      },
      {
        name: 'HomePopular',
        path: 'popular',
        component: () => import('@/components/home/popular/home-popular.vue'),
      },
      {
        name: 'HomeWishList',
        path: 'wishlist',
        component: () => import('@/components/home/wishlist/home-wishlist.vue'),
      },
      {
        name: 'HomeSearch',
        path: 'search',
        component: () => import('@/components/search/home-search.vue'),
      }
    ]
  },
  {
    name: 'SignIn',
    path: '/sign-in',
    component: SignIn
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('TMDb-Key') !== null;

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({ path: '/sign-in' });
    } else {
      next();
    }
  } else {
    if (to.name === 'SignIn' && isAuthenticated) {
      next({ name: '/' }); // Redirect to the home page
    }
    else {
      next();
    }
    }
});

export default router