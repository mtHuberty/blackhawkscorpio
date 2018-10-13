import Vue from 'vue'
import Router from 'vue-router'
import DefaultLayout from './layouts/DefaultLayout.vue'

import Country from './pages/Country.vue'
import SelectServiceType from './pages/SelectServiceType.vue'
import Language from './pages/Language.vue'
import Details from './pages/Details.vue'
import SelectPlace from './pages/SelectPlace.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'app',
      component: DefaultLayout,
      children: [
        { name: 'select-country', path: '', component: Country },
        { name: 'select-language', path: 'country/:countryCode', component: Language },
        { name: 'select-service-type', path: 'country/:country/language/:lang', component: SelectServiceType },
        { name: 'select-place', path: 'country/:country/language/:lang/service/:service', component: SelectPlace },
        { name: 'details', path: 'country/:country/language/:lang/service/:service/place/:place', component: Details },
      ]
    }
  ]
})
