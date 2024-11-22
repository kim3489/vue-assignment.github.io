import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import SignIn from '@/components/sign-in/sign-in.vue'
import Home from '@/components/home/home.vue'
import HomeWishlist from "@/components/home/wishlist/home-wishlist.vue";
import HomePopular from '@/components/home/popular/home-popular.vue'
import HomeSearch from "@/components/search/home-search.vue";
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
        component: Home,
      },
      {
        name: 'HomePopular',
        path: 'popular',
        component: () => HomePopular,
      },
      {
        name: 'HomeWishList',
        path: 'wishlist',
        component: HomeWishlist,
      },
      {
        name: 'HomeSearch',
        path: 'search',
        component:HomeSearch,
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