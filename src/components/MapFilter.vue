<template>
<v-tabs dark show-arrows v-if="this.countries.length">
    <v-tabs-slider ></v-tabs-slider>
    <v-tab @click="updateMapCountryFilter('')">*</v-tab>
    <v-tab v-for="country in countries" :key="country" @click="updateMapCountryFilter(country)">
      <div :class="'flag-icon flag-icon-' + country"></div>
    </v-tab>
  </v-tabs>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "MapFilter",
  methods: {
    ...mapActions(["updateMapCountryFilter"])
  },
  computed: {
    ...mapState({
      countries: function(state) {
        return state.places
          .reduce((ratings, place) => ratings.concat(place.ratings), [])
          .map(rating => rating.culture)
          .filter(culture => state.countryCodes.includes(culture));
      }
    })
  }
};
</script>

<style>
</style>

