import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
    load: {
        key: process.env.VUE_APP_MAP_API_KEY,
        libraries: 'places',
    }
    // autobindAllEvents: true,
    // installComponents: true
})