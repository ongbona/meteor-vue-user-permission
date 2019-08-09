import { Meteor } from "meteor/meteor";
import _ from "lodash";
export default {
  namespaced: true,
  state: {
    count: 8,
    user: [
      {
        profile: {
          name: null
        }
      }
    ]
  },
  getters: {
    loggedIn(state) {
      return state.user._id != null;
    }
  },
  mutations: {
    logout(state) {
      state.user = {};
    },
    increment(state) {
      // mutate state
      state.count++;
    },
    setUser(state, val) {
      state.user = val;
      document.location.reload();
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
    logout({ commit }) {
      Meteor.logout();
      commit("logout");
      document.location.reload();
    },
    login({ commit, state, dispatch }, obj) {
      new Promise(() => {
        Meteor.loginWithPassword(
          obj.form.username,
          obj.form.password,
          error => {
            if (error) {
              console.log(error);
            } else {
              dispatch("setUser", Meteor.user());
            }
          }
        );
      });
    }
  }
};
