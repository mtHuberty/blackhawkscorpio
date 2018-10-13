<template>
  <v-layout row class='page' wrap>
    <v-flex pa-2 v-for="item in items" :key="item.name" :xs12="item.fullWidth" :md12="item.fullWidth" xs6 md4>
      <div @click="route(item.name)">
        <v-card :color="item.color" hover class='service'>
          <v-card-text>
            <v-layout row justify-center align-center>
              <div class='service-icon'>
                <v-icon :color="item.color" x-large>{{ item.icon }}</v-icon>
              </div>
            </v-layout>
          </v-card-text>
        </v-card>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "SelectServiceType",
  methods: {
    route: function(service) {
      this.$router.push(
        `/country/${this.country}/language/${this.lang}/service/${service}`
      );
    }
  },
  computed: {
    country: function() {
      return this.$route.params.country || "";
    },
    lang: function() {
      return this.$route.params.lang || "";
    }
  },
  data() {
    return {
      items: [
        {
          icon: "fas fa-hospital",
          color: "red",
          fullWidth: true,
          name: "hospital"
        },
        {
          icon: "fas fa-shield-alt",
          color: "blue",
          halfWidth: true,
          name: "police"
        },
        {
          icon: "fas fa-gavel",
          color: "brown",
          halfWidth: true,
          name: "lawyer"
        },
        {
          icon: "fas fa-home",
          color: "orange",
          fullWidth: true,
          name: "housing"
        },
        {
          icon: "fas fa-child",
          color: "yellow",
          name: "childCare"
        },
        {
          icon: "fas fa-bus",
          color: "purple",
          name: "transportation"
        },
        {
          icon: "fas fa-utensils",
          color: "green",
          fullWidth: true,
          name: "grocery"
        },
        {
          icon: "fas fa-money-check-alt",
          color: "grey",
          name: "bank"
        },
        {
          icon: "fas fa-school",
          color: "pink",
          name: "school"
        }
      ]
    };
  }
};
</script>

<style>
.service {
  padding: 3rem;
  cursor: pointer;
  transition: all 0.2s;
}
.service-icon {
  transform: scale(1.3);
  padding: 1rem;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}
</style>
