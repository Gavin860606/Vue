import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Counter from '../views/Counter.vue';
import InfoCard from '../views/InfoCard.vue';
Vue.use(VueRouter);

// const Counter = { template: '<div>Counter</div>' }

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/Counter',
    name: 'Counter',
    component: Counter,
  },
  {
    path: '/infocard',
    name: 'InfoCard',
    component: InfoCard,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
