<template>
  <div class="place">
    <MapFilter></MapFilter>
    <Map></Map>
    <v-layout column>
      <v-flex xs12 pa-2 v-for="place in places" :key="place.name">
        <v-card>
          <v-card-text>
            <v-layout row>
              <v-flex xs8>
                {{ place.name }}
              </v-flex>
              <v-flex xs2>
                🇲🇽 {{ place.ratings.MX }}
              </v-flex>
              <v-flex xs2>
                🇺🇸 {{ place.ratings.US }}
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

export default {
  name: "select-place",
  components: { Map, MapFilter },
  data() {
    return({
      places: [
        {
          name: 'Place Name',
          ratings: {
            US: 9,
            MX: 4
          }
        },
              {
          name: 'Place Name',
          ratings: {
            US: 9,
            MX: 4
          }
        },
              {
          name: 'Place Name',
          ratings: {
            US: 9,
            MX: 4
          }
        },
              {
          name: 'Place Name',
          ratings: {
            US: 9,
            MX: 4
          }
        }
      ]
    });
  }
};
</script>
