import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import createPersistedState from "vuex-persistedstate";
import auth from "./auth";
import layout from "./layout";
import _ from "lodash";
import router from "../routes";
const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    resetState() {
      window.localStorage.clear();
      window.location.reload(true);
    },
    RoleRoute({ state }) {
      let x = false;
      _.forEach(router.options.routes, menu => {
        if (menu.path == window.location.pathname) {
          _.forEach(menu.meta.role, permission => {
            if (permission == "login") {
            } else if (permission == state.auth.user.profile.permission) {
              console.log(permission);
              x = true;
            }
          });
        }
      });
      if (x == false) {
        router.push("/");
      }
    }
  },
  modules: {
    auth,
    layout
  },
  plugins: [createPersistedState()]
});
export default store;
