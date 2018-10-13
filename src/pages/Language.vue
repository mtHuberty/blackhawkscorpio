<template>
  <div class="language">
      <v-list>
        <v-list-tile v-for="language in languages" :key="language.code" @click="route(language.code)">
          <v-list-tile-content>
              <v-list-tile-title>{{ language.text }} ({{ language.code }}-{{ country.toUpperCase() }})</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        </v-list>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "language",
  computed: {
    country: function() {
      return this.$route.params.countryCode || "";
    },
    ...mapState({
      languages: function(state) {
        return state.languagesPerCountry[this.country] || [];
      }
    })
  },
  methods: {
    route: function(lang) {
      this.$router.push(`/country/${this.country}/language/${lang}`);
    }
  }
};
</script>

