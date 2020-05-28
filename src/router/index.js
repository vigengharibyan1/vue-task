import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/todo",
    name: "TodoList",
    component: () => import(/* webpackChunkName: "Todo/List" */ "../views/Todo/List.vue")
  },
  {
    path: "/todo/:index",
    name: "Todo",
    component: () => import(/* webpackChunkName: "Todo/View" */ "../views/Todo/View.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
