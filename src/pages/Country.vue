<template>
  <v-layout>
    <v-flex xs12>
      <!-- TODO: remove this button. just for testing -->
      <button @click="logApiKey">Log Key</button>
      <v-card>
        <v-container grid-list-sm fluid>
          <v-layout row wrap>
            <v-flex v-for="country in countries" :key="country" xs6 sm4 m2 d-flex>
              <Flag :country="country"></Flag>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import "flag-icon-css/css/flag-icon.css";
import Flag from "../components/Flag";
import { mapState } from "vuex";

export default {
  name: "country",
  components: { Flag },
  computed: {
    ...mapState({
      countries: state => state.countryCodes
    })
  },
  methods: {
    logApiKey() {
      console.log(process.env.VUE_APP_MAP_API_KEY);
      console.log(process.env.NODE_ENV);
    }
  }
};
</script>

<style scoped>
* {
  background-color: #000;
}
</style>
