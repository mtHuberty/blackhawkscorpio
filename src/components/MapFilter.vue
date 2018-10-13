<template>
<v-tabs dark color="darkgrey" show-arrows v-if="this.countries.length > 1">
    <v-tabs-slider ></v-tabs-slider>
    <v-tab @click="updateMapCountryFilter('')">
      <v-btn icon><v-icon color="white" small>fas fa-globe</v-icon></v-btn>
    </v-tab>
    <v-tab v-for="country in countries" :key="country" @click="updateMapCountryFilter(country)">
      <v-btn icon><div :class="'flag-icon flag-icon-' + country"></div></v-btn>
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
    }
  },
  created() {
    this.fetchPlaces(this.service);
  }
};
</script>

<style scoped>
.v-tabs__item--active {
  background-color: #8a8989;
}
.flag-icon {
  transform: scale(1.7);
}
.v-tabs__item--active .v-icon.fas {
  color: black;
}
.v-tabs__slider.accent {
  background-color: #ff6600 !important;
  border-color: #ff6600 !important;
}
</style>

