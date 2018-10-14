import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

class Place {
  constructor(place, ratings) {
    this.id = place.id;
    this.name = place.name || "";
    this.description = place.description || {};
    this.images = place.images || [];
    this.position = { lat: place.lat, lng: place.long };
    this.ratings = ratings;
  }
}

class Rating {
  constructor(rating) {
    this.culture = rating.culture;
    this.score = rating.score;
    this.comments = rating.comments;
  }
}

export const sluPlace = new Place({
  id: "57383f8bb6b4cd28ed11aab665263c7b0a9bab52",
  name: "Saint Louis University",
  description: {
    "tr": "Saint Louis Üniversitesi, akademik mükemmelliğe, yaşamı değiştiren araştırmaya, şefkatli sağlık hizmetlerine ve topluma güçlü bir bağlılığa değer veren bir Katolik Cizvit kurumudur."
  },
  images: [
    "https://www.slu.edu/img/home/aerials_northcampus-min.jpg",
    "https://stlouisearthday.org/wp-content/uploads/2018/05/slu-bicentennial-logo.png",
    "http://mediad.publicbroadcasting.net/p/kwmu/files/styles/x_large/public/201609/bb4_9559__1_.jpg",
    "https://media.glassdoor.com/l/99/87/55/e3/slu-campus.jpg"
  ],
  lat: 38.6354598,
  long: -90.23382319999999
},
  [new Rating({ culture: "us", score: 4, comments: [] }),
  new Rating({ culture: "tr", score: 5.1, comments: ["Billikens'e git!", "Biz burada seviyoruz! Eğitim en üst düzeydedir ve şehirdeki en iyisi, buraya gelmenizi şiddetle tavsiye ediyoruz"] })]
);

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
      "Tunisia": "tn",
      "Thailand": "th"
    },
    countryCodes: ["ae", "af", "ag", "ai", "al", "am", "ao", "aq", "ar", "as ", "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bl", "bm", "bn", "bo", "bq", "br", "bs", "bt", "bv", "bw", "by", "bz", "ca", "cc", "cd", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "cr", "cu", "cv", "cw", "cx", "cy", "cz", "de", "dj", "dk", "dm", "do", "dz", "ec", "ee", "eg", "eh", "er", "es-ct", "es", "et", "eu", "fi", "fj", "fk", "fm", "fo", "fr", "ga", "gb - eng", "gb - nir", "gb - sct", "gb - wls", "gb", "gd", "ge", "gf", "gg", "gh", "gi", "gl", "gm", "gn", "gp", "gq", "gr", "gs", "gt", "gu", "gw", "gy", "hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "im", "in ", "io", "iq", "ir", "is", "it", "je", "jm", "jo", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "ky", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mf", "mg", "mh", "mk", "ml", "mm", "mn", "mo", "mp", "mq", "mr", "ms", "mt", "mu", "mv", "mw", "mx", "my", "mz", "na", "nc", "ne", "nf", "ng", "ni", "nl", "no", "np", "nr", "nu", "nz", "om", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pn", "pr", "ps", "pt", "pw", "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn", "so", "sr", "ss", "st", "sv", "sx", "sy", "sz", "tc", "td", "tf", "tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tr", "tt", "tv", "tw", "tz", "ua", "ug", "um", "un", "us", "uy", "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "ye", "yt", "za", "zm", "zw"],
    demoCountryCodes: ["us", "tr", "mx", "cn", "in", "tn", "id", "jp", "kr", "th", "ng", "pl"],
    languagesPerCountry: {
      "us": [{ code: "en", text: "English" }],
      "tr": [{ code: "tr", text: "Türk" }, { code: "kmr", text: "کوردیا ژۆرین" }, { code: "ar", text: "عربى" }, { code: "en", text: "English" }],
      "mx": [{ code: "mx", text: "Español" }, { code: "en", text: "English" }],
      "cn": [{ code: "zh-Hans", text: "汉语" }, { code: "mn", text: "монгол хэл" }, { code: "zh", text: "བོད་སྐད།" }, { code: "en", text: "English" }],
      "in": [{ code: "hi", text: "हिंदी" }, { code: "bn", text: "বাঙালি" }, { code: "en", text: "English" }],
      "tn": [{ code: "mx", text: "Español" }, { code: "en", text: "English" }],
      "id": [{ code: "id", text: "bahasa Indonesia" }, { code: "en", text: "English" }],
      "jp": [{ code: "jp", text: "日本語" }, { code: "en", text: "English" }],
      "kr": [{ code: "kr", text: "한국어" }, { code: "en", text: "English" }],
      "th": [{ code: "th", text: "ไทย" }, { code: "en", text: "English" }],
      "ng": [{ code: "ng", text: "Izere	" }, { code: "en", text: "English" }],
      "pl": [{ code: "pl", text: "Polskie" }, { code: "en", text: "English" }]
    },
    mapCountryFilter: ''
  },
  mutations: {
    updatePlaces(state, places) {
      state.places = places
    },
    updateMapCountryFilter(state, countryCode) {
      state.mapCountryFilter = countryCode
    },
    error(state, err) {
      console.log(err)
    }
  },
  actions: {
    resetPlaces({ commit }) {
      commit('updatePlaces', [])
    },
    fetchPlaces({ commit }, serviceType) {
      return axios.get(`http://localhost:3000/placesSearch/${serviceType}`)
        .then(places => {
          let updatedPlaces = places.data.map(place => {
            let placeRatings = place.ratings.map(rating => {
              return new Rating({ culture: (rating.culture || "").toLowerCase(), score: rating.score, comments: rating.comments });
            })
            return new Place(place, placeRatings);
          });

          if (serviceType.toLowerCase() === "school") {
            updatedPlaces = [...updatedPlaces, sluPlace];
          }

          commit('updatePlaces', updatedPlaces)
        })
        .catch(err => commit('error', err))
    },
    updateMapCountryFilter({ commit }, countryCode) {
      commit('updateMapCountryFilter', countryCode)
    }
  }
})
