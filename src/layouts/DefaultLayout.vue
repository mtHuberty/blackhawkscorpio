<template>
  <div>
    <v-toolbar v-if="!isHomePage" fixed app flat dark color="primary">
      <v-layout row>
        <v-flex xs5>
          <v-btn icon @click="goBack()">
            <v-icon>arrow_back</v-icon>
          </v-btn>
        </v-flex>
        <v-flex xs7 mt-2>
          <h1> 
            {{getToolbarText}}
          </h1>
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
      const route = this.$route.fullPath || '';
      console.log(route)

      if(route.includes('language')){
        return 'Hizmetler'
      }
      if(route.includes('country')){
        return 'Language'
      }

      return '';
    }
  },
  methods: {
    goBack: function() {
      this.$router.go(-1);
    }
  }
};
</script>
