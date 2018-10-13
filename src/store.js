import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    places: []
  },
  mutations: {
    updatePlaces(state, payload) {

    }
  },
  actions: {
    testFetchMap(store) {
      return this.$http.get('www.google.com')
        .then( response => {
          console.log(response);
          store.commit('updateMap', {
            newPlaces: response
          });
        })
    }
  }
})
