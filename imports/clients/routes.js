import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/item",
    name: "item",
    meta: { requiresAuth: true, linkActive: "item" },
    component: () => import("./pages/Item.vue")
  },
  {
    path: "/about",
    name: "about",
    meta: { requiresAuth: true, linkActive: "about" },
    component: () => import("./pages/About.vue")
  },
  {
    path: "/register",
    meta: { requiresAuth: true, linkActive: "register" },
    component: () => import("./pages/Register.vue"),
    name: "register"
  },

  {
    path: "/login",
    meta: { requiresAuth: false, layout: "PublicLayout" },
    component: () => import("./pages/Login.vue"),
    name: "login"
  },
  {
    path: "/",
    meta: { requiresAuth: true, linkActive: "" },
    component: () => import("../clients/pages/Home.vue"),
    name: "home"
  },
  {
    path: "/admin",
    meta: { requiresAuth: true, layout: "AdminLayout", linkActive: "" },
    component: () => import("../clients/layouts/AdminLayout.vue"),
    name: "admin"
  }
  // AdminLayout
  // { path: '/bar', component: Bar }
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  mode: "history",
  routes // short for `routes: routes`
});

export default router;
