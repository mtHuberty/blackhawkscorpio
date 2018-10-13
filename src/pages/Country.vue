<template>
  <v-layout>
    <v-flex xs12>
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
  }
};
</script>

<style scoped>
* {
  background-color: #000;
}
</style>
