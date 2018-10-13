<template>
  <div>
    <v-toolbar v-if="!isHomePage" fixed app flat dark color="primary">
      <v-layout row>
        <v-btn icon @click="goBack()">
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-flex mt-2 class="title">
          <h2>{{getToolbarText}}</h2>
        </v-flex>
      </v-layout>
    </v-toolbar>
    <v-content>
        <router-view/>
    </v-content>
  </div>
</template>
<script>
export default {
  name: "DefaultLayout",
  computed: {
    isHomePage: function() {
      return this.$route.fullPath === "/";
    },
    getToolbarText: function() {
      const route = this.$route.fullPath || "";

      if (route.includes("service")) {
        return "Okullar";
      }
      if (route.includes("language")) {
        return "Hizmetler";
      }
      if (route.includes("country")) {
        return "Language";
      }

      return "";
    }
  },
  methods: {
    goBack: function() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.title {
  text-align: center;
  margin-left: -43px;
}
.title h2 {
  font-weight: 500;
}
</style>
