<template>
  <div class="language">
      <v-list class="list mt-2">
        <template v-for="(language, index) in languages">
          <v-list-tile :key="language.code" @click="route(language.code)" class="pa-2">
            <v-list-tile-content>
              <v-list-tile-title class="lang">{{ language.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>
        </template>
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

<style scoped>
.lang {
  text-align: center;
  font-size: 18pt;
}

.list {
  background-color: #fafafa;
}
</style>

