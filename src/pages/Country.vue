<template>
  <v-container grid-list-sm fluid>
    <v-layout row wrap>
      <v-flex pa-2 xs23 d-flex>
        <v-text-field
          solo
          label=""
          append-icon="search"
          v-model="search"
        ></v-text-field>
      </v-flex>
      <v-flex pa-2 v-for="country in countries" :key="country" xs6 sm4 md3 d-flex>
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
  data() {
    return {
      search: ""
    };
  },
  computed: {
    ...mapState({
      lookup: state => state.countryCodeLookup,
      countries: function(state) {
        return (
          (Object.entries(this.lookup) || [])
            .filter(
              ([key]) =>
                this.search === "" ||
                key
                  .toLocaleLowerCase()
                  .startsWith(this.search.toLocaleLowerCase())
            )
            .map(([, code]) => code)
            .filter(code => state.demoCountryCodes.includes(code)) || []
        );
      }
    })
  }
};
</script>

<style scoped>
.flag-icon {
  cursor: pointer;
  transition: all 0.1s;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.4));
}
.flag-icon:hover {
  filter: drop-shadow(0px 5px 8px rgba(0, 0, 0, 0.4));
}
</style>
