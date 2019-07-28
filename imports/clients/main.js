import Vue from 'vue';
import App from './layouts/Main.vue';

import store from './stores'

// Plugin
import './plugin'

// Router
import router from './routes'

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    console.log(store.getters["auth/loggedIn"])
    if (!store.getters["auth/loggedIn"]) {
      next({
        path: '/login',
        // query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})



Meteor.startup(() => {
  new Vue({
    el: '#app',
    store,
    router,
    ...App,
  });
});