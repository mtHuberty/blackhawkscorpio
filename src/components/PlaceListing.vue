<template>
    <v-layout pt-2 column  justify-center>
      <v-flex xs12 md6 pa-2 v-for="(place, i) in places" :key="i" @click="route(place.id)">
        <v-card hover>
          <v-card-text>
            <v-layout row align-center>
              <v-flex xs7>
                {{ place.name }}
              </v-flex>
              <v-flex xs5>
                <v-layout row align-center>
                  <v-flex mr-3 xs2 class="flag-icon-container">
                    <span :class="`flag-icon flag-icon-${country}`"/>
                  </v-flex>
                  <v-flex mr-4 xs4>
                    <FaceRating :rating="getRatingForCountry(place.ratings, country)"/>
                  </v-flex>
                  <v-flex mr-3 xs2 class="flag-icon-container">
                    <span :class="'flag-icon flag-icon-us'"/>
                  </v-flex>
                  <v-flex xs4>
                    <FaceRating :rating="getRatingForCountry(place.ratings, 'us')"/>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
</template>

<script>
import FaceRating from "../components/FaceRating";

import { mapState } from "vuex";

export default {
  name: "place-listing",
  components: { FaceRating },
  computed: {
    country: function() {
      return this.$route.params.country || "";
    },
    lang: function() {
      return this.$route.params.lang || "";
    },
    service: function() {
      return this.$route.params.service || "";
    },
    ...mapState({
      places: function(state) {
        return state.places
          .filter(
            place =>
              state.mapCountryFilter === "" ||
              place.ratings
                .map(rating => rating.culture)
                .includes(state.mapCountryFilter)
          )
          .sort((prev, next) => {
            const prevCountry = this.getRatingForCountry(
              prev.ratings,
              this.country
            );
            const nextCountry = this.getRatingForCountry(
              next.ratings,
              this.country
            );
            if (prevCountry > nextCountry) {
              return -1;
            }
            if (prevCountry < nextCountry) {
              return 1;
            }
            return 0;
          });
      }
    })
  },
  methods: {
    getRatingForCountry: function(ratings, country) {
      return (
        (ratings || [])
          .filter(rating => rating.culture === country)
          .map(rating => rating.score) || [-1]
      );
    },
    route: function(id) {
      this.$router.push(
        `/country/${this.country}/language/${this.lang}/service/${
          this.service
        }/place/${id}`
      );
    }
  }
};
</script>

<style scoped>
.flag-icon {
  transform: scale(1.7);
}
</style>

