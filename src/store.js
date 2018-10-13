import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import schoolData from '../school-data.json'
import { resolve } from 'url';


Vue.use(Vuex)


class Place {
  constructor(id, lat, lng, ratings) {
    this.id = id; // string
    this.position = { lat, lng }; // string
    this.ratings = ratings; // []Rating
  }
}


class Rating {
  constructor(id, culture, score, comments) {
    this.id = id; // string
    this.culture = culture; // string
    this.score = score; // long
    this.comments = comments; // []string
  }
}

export default new Vuex.Store({
  state: {
    testPlaces: [],
    places: [
      new Place('123', 10.0, 10.0, [new Rating('12345', 'us', 7, []), new Rating('12347', 'gb', 7, [])]),
      new Place('65562', 11.0, 11.0, [new Rating('123456', 'us', 7, [])]),
      new Place('123465234234', 12.0, 12.0, [new Rating('12345689', 'us', 7, [])]),
    ],
    countryCodes: ["ae", "af", "ag", "ai", "al", "am", "ao", "aq", "ar", "as ", "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bl", "bm", "bn", "bo", "bq", "br", "bs", "bt", "bv", "bw", "by", "bz", "ca", "cc", "cd", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "cr", "cu", "cv", "cw", "cx", "cy", "cz", "de", "dj", "dk", "dm", "do", "dz", "ec", "ee", "eg", "eh", "er", "es-ct", "es", "et", "eu", "fi", "fj", "fk", "fm", "fo", "fr", "ga", "gb - eng", "gb - nir", "gb - sct", "gb - wls", "gb", "gd", "ge", "gf", "gg", "gh", "gi", "gl", "gm", "gn", "gp", "gq", "gr", "gs", "gt", "gu", "gw", "gy", "hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "im", "in ", "io", "iq", "ir", "is", "it", "je", "jm", "jo", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "ky", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mf", "mg", "mh", "mk", "ml", "mm", "mn", "mo", "mp", "mq", "mr", "ms", "mt", "mu", "mv", "mw", "mx", "my", "mz", "na", "nc", "ne", "nf", "ng", "ni", "nl", "no", "np", "nr", "nu", "nz", "om", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pn", "pr", "ps", "pt", "pw", "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn", "so", "sr", "ss", "st", "sv", "sx", "sy", "sz", "tc", "td", "tf", "tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tr", "tt", "tv", "tw", "tz", "ua", "ug", "um", "un", "us", "uy", "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "ye", "yt", "za", "zm", "zw"],
    languagesPerCountry: {
      "us": [{ code: "en", text: "Hello World" }, { code: "en2", text: "Hello World2" }]
    },
    mapCountryFilter: ''
  },
  mutations: {
    updatePlaces(state, payload) {
      state.testPlaces.push(payload.newPlaces);
      console.log(state.testPlaces);
    },
    updateMapCountryFilter(state, countryCode) {
      state.mapCountryFilter = countryCode
    }
  },
  actions: {
    testFetchMap({commit, state}) {
      // return axios.get(`ians url here`)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(schoolData);
          console.log(JSON.stringify(schoolData));
        }, 900)
      })
        .then(response => {
          commit('updatePlaces', {
            newPlaces: response
          });
        })
        .catch(err => {
          console.error(err);
        })
    },
    updateMapCountryFilter({ commit }, countryCode) {
      commit('updateMapCountryFilter', countryCode)
    }
  }
})
