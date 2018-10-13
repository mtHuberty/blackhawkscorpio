<template>
    <div>
        <v-toolbar fixed app>
             <v-btn icon v-if="!isHomePage" @click="goBack()">
              <v-icon>arrow_back</v-icon>
            </v-btn>
            <v-icon v-if="isHomePage">home</v-icon>
            <v-toolbar-title>Black Hawk Scorpio!!!</v-toolbar-title>
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
