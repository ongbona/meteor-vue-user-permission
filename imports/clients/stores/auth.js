import { Meteor } from "meteor/meteor";
import _ from "lodash";
import router from "../routes";
export default {
  namespaced: true,
  state: {
    user: {
      profile: {
        permission: "login"
      }
    }
  },
  getters: {
    loggedIn(state) {
      return state.user._id != null;
    }
  },
  mutations: {
    setUser(state, val) {
      state.user = val;
    }
  },
  actions: {
    setUser({ commit }, val) {
      commit("setUser", val);
    },

    register({ commit }, val) {
      Meteor.call("insertUser", val, (error, result) => {
        if (!error) {
          alert("success");
        }
      });
    },
    meteorLogout() {
      Meteor.logout();
    },
    logout({ commit, dispatch }) {
      new Promise((resolve, reject) => {
        dispatch("meteorLogout").then(() => {
          dispatch("resetState", null, { root: true }).then(() => {
            router.push("/login");
          });
        });
        resolve("Done");
      });
    },
    login({ commit, state, dispatch }, form) {
      new Promise(() => {
        console.log("Hi");
        Meteor.loginWithPassword(form.username, form.password, error => {
          if (error) {
            console.log(error);
          } else {
            dispatch("setUser", Meteor.user());
            router.push("/");
          }
        });
      });
    }
  }
};
