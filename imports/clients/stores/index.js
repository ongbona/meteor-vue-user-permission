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
    RoleRoute({ state }) {
      let x = false;

      _.forEach(state.auth.menus, menu => {
        if ("/" + menu.url == window.location.pathname) {
          x = true;
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
