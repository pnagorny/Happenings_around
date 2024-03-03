import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {getAuth} from 'firebase/auth'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/home',
    name: 'homelogin',
    component: () => import('../views/HomeViewLoggedIn.vue'),
    meta: {
      requiresAuth: true,
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (getAuth().currentUser) {
      next();
    }
    else {
      alert("you dont have access!");
      next("/")
    }
  }
  else {
    next();
  }
});

export default router
