<template>
  <v-container grid-list-sm fluid>
    <v-layout row wrap>
      <v-flex pa-2 v-for="country in countries" :key="country" xs6 sm4 md2 d-flex>
        <Flag :country="country"></Flag>
      </v-flex>
    </v-layout>
  </v-container>
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
  }
};
</script>

<style scoped>
.flag-icon {
  cursor: pointer;
  transition: all 0.2s;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.4));
}
.flag-icon:hover {
  opacity: 0.6;
}
</style>
