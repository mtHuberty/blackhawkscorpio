<template>
    <div>
        <router-view/>
        <v-btn
            color="blue darken-2"
            fixed
            dark
            fab
            bottom
            left
            @click="goBack()"
            v-if="!isHomePage"
        >
            <v-icon>arrow_back</v-icon>
        </v-btn>
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
