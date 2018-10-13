<template>
<v-tabs dark color="darkgrey" show-arrows v-if="this.countries.length">
    <v-tabs-slider ></v-tabs-slider>
    <v-tab @click="updateMapCountryFilter('')">
      <v-icon color="white" small>fas fa-globe</v-icon>
    </v-tab>
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
    ...mapActions(["fetchPlaces", "updateMapCountryFilter"])
  },
  computed: {
    ...mapState({
      countries: function(state) {
        return [
          ...new Set(
            state.places
              .reduce((ratings, place) => ratings.concat(place.ratings), [])
              .map(rating => rating.culture)
              .filter(culture => state.countryCodes.includes(culture))
          )
        ];
      }
    }),
    service() {
      return this.$route.params.service || "";
    },
  },
  created() {
    this.fetchPlaces(this.service);
  }
};
</script>

<style>
.flag-icon {
  transform: scale(1.7);
}
</style>

