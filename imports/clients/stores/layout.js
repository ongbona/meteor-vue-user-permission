
export default {
  namespaced: true,
  state: {
    drawer:null,
  },
 mutations: {
    setDrawer(state,val) {
      state.drawer = val
    },
    

  },
  actions: {

    setDrawer({ commit }, val) {
        console.log(val)
     commit('setDrawer',val)
    },
   
  }
}