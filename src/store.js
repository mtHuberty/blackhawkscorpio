import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    MAP_API_KEY: process.env.VUE_APP_MAP_API_KEY,
    places: [],
    countryCodes: ["ae", "af", "ag", "ai", "al", "am", "ao", "aq", "ar", "as ", "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bl", "bm", "bn", "bo", "bq", "br", "bs", "bt", "bv", "bw", "by", "bz", "ca", "cc", "cd", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "cr", "cu", "cv", "cw", "cx", "cy", "cz", "de", "dj", "dk", "dm", "do", "dz", "ec", "ee", "eg", "eh", "er", "es-ct", "es", "et", "eu", "fi", "fj", "fk", "fm", "fo", "fr", "ga", "gb - eng", "gb - nir", "gb - sct", "gb - wls", "gb", "gd", "ge", "gf", "gg", "gh", "gi", "gl", "gm", "gn", "gp", "gq", "gr", "gs", "gt", "gu", "gw", "gy", "hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "im", "in ", "io", "iq", "ir", "is", "it", "je", "jm", "jo", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "ky", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mf", "mg", "mh", "mk", "ml", "mm", "mn", "mo", "mp", "mq", "mr", "ms", "mt", "mu", "mv", "mw", "mx", "my", "mz", "na", "nc", "ne", "nf", "ng", "ni", "nl", "no", "np", "nr", "nu", "nz", "om", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pn", "pr", "ps", "pt", "pw", "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn", "so", "sr", "ss", "st", "sv", "sx", "sy", "sz", "tc", "td", "tf", "tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tr", "tt", "tv", "tw", "tz", "ua", "ug", "um", "un", "us", "uy", "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "ye", "yt", "za", "zm", "zw"],
    languagesPerCountry: {
      "us": [{ code: "en", text: "Hello World" }, { code: "en2", text: "Hello World2" }]
    }
  },
  mutations: {
    updatePlaces(state, payload) {
      state.places.push(payload.newPlaces);
      console.log(payload.newPlaces);
    }
  },
  actions: {
    testFetchMap({commit, state}) {
      return this.$http.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${state.MAP_API_KEY}&location=38.632069,-90.227531&radius=16093.4&keyword=school`)
        .then( response => {
          commit('updatePlaces', {
            newPlaces: response
          });
        })
    }
  }
})
