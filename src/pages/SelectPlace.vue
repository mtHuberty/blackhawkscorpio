<template>
  <div class="place">
    <MapFilter></MapFilter>
    <Map></Map>
    <v-layout pt-2 column  justify-center>
      <v-flex xs12 md6 pa-2 v-for="place in places" :key="place.name">
        <v-card hover>
          <v-card-text>
            <v-layout row>
              <v-flex xs7>
                {{ place.name }}
              </v-flex>
              <v-flex xs3>
                <v-layout row align-center="">
                  <v-flex mr-3 xs2>
                    <span :class="'flag-icon flag-icon-tr'"/>
                  </v-flex>
                  <v-flex mr-4 xs4>
                    <FaceRating :rating="place.ratings.TR"/>
                  </v-flex>
                  <v-flex mr-3 xs2>
                    <span :class="'flag-icon flag-icon-us'"/>
                  </v-flex>
                  <v-flex xs4>
                    <FaceRating :rating="place.ratings.US"/>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Map from "../components/Map";
import MapFilter from "../components/MapFilter";
import FaceRating from "../components/FaceRating";

export default {
  name: "select-place",
  components: { Map, MapFilter, FaceRating },
  data() {
    return({
      places: [
        {
          name: 'Place Name',
          ratings: {
            US: 4,
            TR: 9
          }
        },
              {
          name: 'Place Name',
          ratings: {
            US: 4,
            TR: 9
          }
        },
              {
          name: 'Place Name',
          ratings: {
            US: 6,
            TR: 4
          }
        },
              {
          name: 'Place Name',
          ratings: {
            US: 9,
            TR: 4
          }
        }
      ]
    });
  }
};
</script>

<style scoped>
.flag-icon {
  transform: scale(1.5)
}
</style>

