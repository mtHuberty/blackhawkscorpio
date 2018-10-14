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
  data() {
    return {
      service: {
        en: "Service",
        tr: "Hizmetler",
        kmr: "Service",
        ar: "Service",
        en: "Service",
        mx: "Service",
        en: "Service",
        "zh-Hans": "Service",
        mn: "Service",
        zh: "Service",
        en: "Service",
        hi: "Service",
        bn: "Service",
        en: "Service",
        mx: "Service",
        en: "Service",
        id: "Service",
        en: "Service",
        jp: "Service",
        en: "Service",
        kr: "Service",
        en: "Service",
        th: "Service",
        en: "Service",
        ng: "Service",
        en: "Service",
        pl: "Service",
        en: "Service"
      },
      hospital: {
        en: "Hospital",
        tr: "Hospital",
        kmr: "Hospital",
        ar: "Hospital",
        en: "Hospital",
        mx: "Hospital",
        en: "Hospital",
        "zh-Hans": "Hospital",
        mn: "Hospital",
        zh: "Hospital",
        en: "Hospital",
        hi: "Hospital",
        bn: "Hospital",
        en: "Hospital",
        mx: "Hospital",
        en: "Hospital",
        id: "Hospital",
        en: "Hospital",
        jp: "Hospital",
        en: "Hospital",
        kr: "Hospital",
        en: "Hospital",
        th: "Hospital",
        en: "Hospital",
        ng: "Hospital",
        en: "Hospital",
        pl: "Hospital",
        en: "Hospital"
      },
      police: {
        en: "Police",
        tr: "Police",
        kmr: "Police",
        ar: "Police",
        en: "Police",
        mx: "Police",
        en: "Police",
        "zh-Hans": "Police",
        mn: "Police",
        zh: "Police",
        en: "Police",
        hi: "Police",
        bn: "Police",
        en: "Police",
        mx: "Police",
        en: "Police",
        id: "Police",
        en: "Police",
        jp: "Police",
        en: "Police",
        kr: "Police",
        en: "Police",
        th: "Police",
        en: "Police",
        ng: "Police",
        en: "Police",
        pl: "Police",
        en: "Police"
      },
      lawyer: {
        en: "Lawyer",
        tr: "Lawyer",
        kmr: "Lawyer",
        ar: "Lawyer",
        en: "Lawyer",
        mx: "Lawyer",
        en: "Lawyer",
        "zh-Hans": "Lawyer",
        mn: "Lawyer",
        zh: "Lawyer",
        en: "Lawyer",
        hi: "Lawyer",
        bn: "Lawyer",
        en: "Lawyer",
        mx: "Lawyer",
        en: "Lawyer",
        id: "Lawyer",
        en: "Lawyer",
        jp: "Lawyer",
        en: "Lawyer",
        kr: "Lawyer",
        en: "Lawyer",
        th: "Lawyer",
        en: "Lawyer",
        ng: "Lawyer",
        en: "Lawyer",
        pl: "Lawyer",
        en: "Lawyer"
      },
      housing: {
        en: "Housing",
        tr: "Housing",
        kmr: "Housing",
        ar: "Housing",
        en: "Housing",
        mx: "Housing",
        en: "Housing",
        "zh-Hans": "Housing",
        mn: "Housing",
        zh: "Housing",
        en: "Housing",
        hi: "Housing",
        bn: "Housing",
        en: "Housing",
        mx: "Housing",
        en: "Housing",
        id: "Housing",
        en: "Housing",
        jp: "Housing",
        en: "Housing",
        kr: "Housing",
        en: "Housing",
        th: "Housing",
        en: "Housing",
        ng: "Housing",
        en: "Housing",
        pl: "Housing",
        en: "Housing"
      },
      childCare: {
        en: "Child Care",
        tr: "Child Care",
        kmr: "Child Care",
        ar: "Child Care",
        en: "Child Care",
        mx: "Child Care",
        en: "Child Care",
        "zh-Hans": "Child Care",
        mn: "Child Care",
        zh: "Child Care",
        en: "Child Care",
        hi: "Child Care",
        bn: "Child Care",
        en: "Child Care",
        mx: "Child Care",
        en: "Child Care",
        id: "Child Care",
        en: "Child Care",
        jp: "Child Care",
        en: "Child Care",
        kr: "Child Care",
        en: "Child Care",
        th: "Child Care",
        en: "Child Care",
        ng: "Child Care",
        en: "Child Care",
        pl: "Child Care",
        en: "Child Care"
      },
      transportation: {
        en: "Transportation",
        tr: "Transportation",
        kmr: "Transportation",
        ar: "Transportation",
        en: "Transportation",
        mx: "Transportation",
        en: "Transportation",
        "zh-Hans": "Transportation",
        mn: "Transportation",
        zh: "Transportation",
        en: "Transportation",
        hi: "Transportation",
        bn: "Transportation",
        en: "Transportation",
        mx: "Transportation",
        en: "Transportation",
        id: "Transportation",
        en: "Transportation",
        jp: "Transportation",
        en: "Transportation",
        kr: "Transportation",
        en: "Transportation",
        th: "Transportation",
        en: "Transportation",
        ng: "Transportation",
        en: "Transportation",
        pl: "Transportation",
        en: "Transportation"
      },
      grocery: {
        en: "Grocery",
        tr: "Grocery",
        kmr: "Grocery",
        ar: "Grocery",
        en: "Grocery",
        mx: "Grocery",
        en: "Grocery",
        "zh-Hans": "Grocery",
        mn: "Grocery",
        zh: "Grocery",
        en: "Grocery",
        hi: "Grocery",
        bn: "Grocery",
        en: "Grocery",
        mx: "Grocery",
        en: "Grocery",
        id: "Grocery",
        en: "Grocery",
        jp: "Grocery",
        en: "Grocery",
        kr: "Grocery",
        en: "Grocery",
        th: "Grocery",
        en: "Grocery",
        ng: "Grocery",
        en: "Grocery",
        pl: "Grocery",
        en: "Grocery"
      },
      bank: {
        en: "Bank",
        tr: "Bank",
        kmr: "Bank",
        ar: "Bank",
        en: "Bank",
        mx: "Bank",
        en: "Bank",
        "zh-Hans": "Bank",
        mn: "Bank",
        zh: "Bank",
        en: "Bank",
        hi: "Bank",
        bn: "Bank",
        en: "Bank",
        mx: "Bank",
        en: "Bank",
        id: "Bank",
        en: "Bank",
        jp: "Bank",
        en: "Bank",
        kr: "Bank",
        en: "Bank",
        th: "Bank",
        en: "Bank",
        ng: "Bank",
        en: "Bank",
        pl: "Bank"
      },
      school: {
        en: "School",
        tr: "Okullar",
        kmr: "School",
        ar: "School",
        en: "School",
        mx: "School",
        en: "School",
        "zh-Hans": "School",
        mn: "School",
        zh: "School",
        en: "School",
        hi: "School",
        bn: "School",
        en: "School",
        mx: "School",
        en: "School",
        id: "School",
        en: "School",
        jp: "School",
        en: "School",
        kr: "School",
        en: "School",
        th: "School",
        en: "School",
        ng: "School",
        en: "School",
        pl: "School"
      }
    };
  },
  computed: {
    isHomePage: function() {
      return this.$route.fullPath === "/";
    },
    getToolbarText: function() {
      switch (this.$route.name) {
        case "select-language":
          return "Language";
        case "select-service-type":
          return this.service[this.$route.params.lang] || this.service["en"];
        case "select-place":
          return (
            this[this.$route.params.service][this.$route.params.lang] ||
            this[this.$route.params.service]["en"]
          );
        case "details":
          return (
            this[this.$route.params.service][this.$route.params.lang] ||
            this[this.$route.params.service]["en"]
          );
        default:
          return "";
      }
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
