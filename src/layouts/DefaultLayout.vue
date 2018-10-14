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
        en: "Services",
        tr: "Hizmetler",
        kmr: "Services",
        ar: "Services",
        mx: "Servicios",
        "zh-Hans": "Services",
        mn: "Services",
        zh: "Services",
        hi: "Services",
        bn: "Services",
        id: "Services",
        jp: "Services",
        kr: "Services",
        th: "Services",
        ng: "Services",
        pl: "Services",
      },
      hospital: {
        en: "Hospital",
        tr: "Hastane",
        kmr: "Hospital",
        ar: "Hospital",
        mx: "Hospital",
        "zh-Hans": "Hospital",
        mn: "Hospital",
        zh: "Hospital",
        hi: "Hospital",
        bn: "Hospital",
        id: "Hospital",
        jp: "Hospital",
        kr: "Hospital",
        th: "Hospital",
        ng: "Hospital",
        pl: "Hospital",
      },
      police: {
        en: "Police",
        tr: "Polis",
        kmr: "Police",
        ar: "Police",
        mx: "Policía",
        "zh-Hans": "Police",
        mn: "Police",
        zh: "Police",
        hi: "Police",
        bn: "Police",
        id: "Police",
        jp: "Police",
        kr: "Police",
        th: "Police",
        ng: "Police",
        pl: "Police",
      },
      lawyer: {
        en: "Lawyer",
        tr: "Avukat",
        kmr: "Lawyer",
        ar: "Lawyer",
        mx: "Abogado",
        "zh-Hans": "Lawyer",
        mn: "Lawyer",
        zh: "Lawyer",
        hi: "Lawyer",
        bn: "Lawyer",
        id: "Lawyer",
        jp: "Lawyer",
        kr: "Lawyer",
        th: "Lawyer",
        ng: "Lawyer",
        pl: "Lawyer",
      },
      housing: {
        en: "Housing",
        tr: "Konut",
        kmr: "Housing",
        ar: "Housing",
        mx: "Alojamiento",
        "zh-Hans": "Housing",
        mn: "Housing",
        zh: "Housing",
        hi: "Housing",
        bn: "Housing",
        id: "Housing",
        jp: "Housing",
        kr: "Housing",
        th: "Housing",
        ng: "Housing",
        pl: "Housing",
      },
      childCare: {
        en: "Child Care",
        tr: "Çocuk Bakımı",
        kmr: "Child Care",
        ar: "Child Care",
        mx: "Cuidado De Los Niños",
        "zh-Hans": "Child Care",
        mn: "Child Care",
        zh: "Child Care",
        hi: "Child Care",
        bn: "Child Care",
        id: "Child Care",
        jp: "Child Care",
        kr: "Child Care",
        th: "Child Care",
        ng: "Child Care",
        pl: "Child Care",
      },
      transportation: {
        en: "Transportation",
        tr: "Taşımacılık",
        kmr: "Transportation",
        ar: "Transportation",
        mx: "Transporte",
        "zh-Hans": "Transportation",
        mn: "Transportation",
        zh: "Transportation",
        hi: "Transportation",
        bn: "Transportation",
        id: "Transportation",
        jp: "Transportation",
        kr: "Transportation",
        th: "Transportation",
        ng: "Transportation",
        pl: "Transportation",
      },
      grocery: {
        en: "Grocery",
        tr: "Bakkal",
        kmr: "Grocery",
        ar: "Grocery",
        mx: "Tienda de Comestibles",
        "zh-Hans": "Grocery",
        mn: "Grocery",
        zh: "Grocery",
        hi: "Grocery",
        bn: "Grocery",
        id: "Grocery",
        jp: "Grocery",
        kr: "Grocery",
        th: "Grocery",
        ng: "Grocery",
        pl: "Grocery",
      },
      bank: {
        en: "Bank",
        tr: "Banka",
        kmr: "Bank",
        ar: "Bank",
        mx: "Banco",
        "zh-Hans": "Bank",
        mn: "Bank",
        zh: "Bank",
        hi: "Bank",
        bn: "Bank",
        id: "Bank",
        jp: "Bank",
        kr: "Bank",
        th: "Bank",
        ng: "Bank",
        pl: "Bank"
      },
      school: {
        en: "School",
        tr: "Okul",
        kmr: "School",
        ar: "School",
        mx: "Colegio",
        "zh-Hans": "School",
        mn: "School",
        zh: "School",
        hi: "School",
        bn: "School",
        id: "School",
        jp: "School",
        kr: "School",
        th: "School",
        ng: "School",
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
