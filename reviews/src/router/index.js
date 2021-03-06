import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Categories from '../views/Categories.vue'
import Product from '../views/Product.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
      path: '/Categories',
      name: 'Categories',
      component: Categories,
  },
  {
      path: '/Product',
      name: 'Product',
      component: Product,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
