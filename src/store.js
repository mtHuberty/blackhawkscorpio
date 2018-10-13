import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import schoolData from '../school-data.json'
import { resolve } from 'url';


Vue.use(Vuex)


class Place {
  constructor(id, name, lat, lng, ratings) {
    this.id = id; // string
    this.name = name;
    this.position = { lat, lng }; // string
    this.ratings = ratings; // []Rating
  }
}


class Rating {
  constructor(id, culture, score, comments) {
    this.culture = culture; // string
    this.score = score; // long
    this.comments = comments; // []string
  }
}

export default new Vuex.Store({
  state: {
    places: [],
    countryCodeLookup: {
      "United States": "us",
      "Turkey": "tr",
      "Mexico": "mx",
      "China": "cn",
      "India": "in",
      "Indonesia": "id",
      "Japan": "jp",
      "South Korea": "kr",
      "Nigeria": "ng",
      "Poland": "pl",
    },
    countryCodes: ["ae", "af", "ag", "ai", "al", "am", "ao", "aq", "ar", "as ", "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bl", "bm", "bn", "bo", "bq", "br", "bs", "bt", "bv", "bw", "by", "bz", "ca", "cc", "cd", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "cr", "cu", "cv", "cw", "cx", "cy", "cz", "de", "dj", "dk", "dm", "do", "dz", "ec", "ee", "eg", "eh", "er", "es-ct", "es", "et", "eu", "fi", "fj", "fk", "fm", "fo", "fr", "ga", "gb - eng", "gb - nir", "gb - sct", "gb - wls", "gb", "gd", "ge", "gf", "gg", "gh", "gi", "gl", "gm", "gn", "gp", "gq", "gr", "gs", "gt", "gu", "gw", "gy", "hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "im", "in ", "io", "iq", "ir", "is", "it", "je", "jm", "jo", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "ky", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mf", "mg", "mh", "mk", "ml", "mm", "mn", "mo", "mp", "mq", "mr", "ms", "mt", "mu", "mv", "mw", "mx", "my", "mz", "na", "nc", "ne", "nf", "ng", "ni", "nl", "no", "np", "nr", "nu", "nz", "om", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pn", "pr", "ps", "pt", "pw", "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn", "so", "sr", "ss", "st", "sv", "sx", "sy", "sz", "tc", "td", "tf", "tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tr", "tt", "tv", "tw", "tz", "ua", "ug", "um", "un", "us", "uy", "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "ye", "yt", "za", "zm", "zw"],
    demoCountryCodes: ["us", "tr", "mx", "cn", "in", "tn", "id", "jp", "kr", "th", "ng", "pl"],
    languagesPerCountry: {
      "us": [{ code: "en", text: "English" }],
      "tr": [{ code: "tr", text: "Türk" }, { code: "kmr", text: "کوردیا ژۆرین" }, { code: "ar", text: "عربى" }, { code: "en", text: "English" }],
      "mx": [{ code: "mx", text: "Español" }, { code: "en", text: "English" }],
      "cn": [{ code: "zh-Hans", text: "汉语" }, { code: "mn", text: "монгол хэл" }, { code: "zh", text: "བོད་སྐད།" }, { code: "en", text: "English" }],
      "in": [{ code: "hi", text: "हिंदी" }, { code: "bn", text: "বাঙালি" }, { code: "en", text: "English" }]
    },
    mapCountryFilter: ''
  },
  mutations: {
    updatePlaces(state, payload) {
      state.places = payload.places.data.map(place => {
        let placeRatings = place.ratings.map((rating, index) => {
          return new Rating(`${rating.culture}-${index}-${place.id}`, (rating.culture || "").toLowerCase(), rating.score, rating.comments);
        })
        return new Place(place.id, place.name, place.lat, place.long, placeRatings);
      });
      console.log(state.places);
    },
    updateMapCountryFilter(state, countryCode) {
      state.mapCountryFilter = countryCode
    },
    error(state, err) {
      console.log(err)
    }
  },
  actions: {
    fetchPlaces({ commit }, serviceType) {
      return axios.get(`http://localhost:3000/placesSearch/${serviceType}`)
        .then(places => commit('updatePlaces', { places }))
        .catch(err => commit('error', err))
    },
    updateMapCountryFilter({ commit }, countryCode) {
      commit('updateMapCountryFilter', countryCode)
    }
  }
})
