<template>
  <div>
    <v-toolbar v-if="!isHomePage" fixed app flat dark color="primary">
      <v-btn icon @click="goBack()">
        <v-icon>arrow_back</v-icon>
      </v-btn>
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
    }
  },
  methods: {
    goBack: function() {
      this.$router.go(-1);
    }
  }
};
</script>
