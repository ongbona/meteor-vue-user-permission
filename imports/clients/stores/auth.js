import { Meteor } from "meteor/meteor";
import _ from "lodash";
export default {
  namespaced: true,
  state: {
    count: 8,
    menus: [],
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
    },
    setMenu(state, val) {
      state.menus = val;
    }
  },
  actions: {
    setUser({ commit }, val) {
      commit("setUser", val);
    },
    setMenu({ commit }, obj) {
      // console.log(obj);
      let array = [];
      _.forEach(obj.menu, doc => {
        _.forEach(doc.permission, permission => {
          if (permission == obj.permission) {
            array.push(doc);
          }
        });
      });
      commit("setMenu", array);
      return array;
      // commit("setMenu", array);
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
              dispatch("setMenu", {
                menu: obj.menu,
                permission: Meteor.user().profile.permission
              }).then(() => {
                dispatch("setUser", Meteor.user());
              });
            }
          }
        );
      });
    }
  }
};
