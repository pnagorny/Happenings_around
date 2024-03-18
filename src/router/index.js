import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import {getAuth} from 'firebase/auth';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
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
  },
  {
    path: '/events',
    name: 'events',
    component: () => import('../views/EventListFull.vue'),
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = getAuth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (!isAuthenticated && requiresAuth) {
    // If the user is not authenticated and the route requires authentication
    alert("You don't have access!");
    next('/');
  } else if (isAuthenticated && to.path === '/') {
    // If the user is authenticated and tries to access '/'
    next('/home');
  } else {
    // Proceed as normal if none of the above conditions are met
    next();
  }
});

export default router;
