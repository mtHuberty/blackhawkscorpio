<template>
    <GmapMap :center="center" :zoom="7" style="width: 100%; height: 500px">
      <GmapMarker v-for="m in markers" :key="m.id" :position="m.position" :clickable="true" @click="pinClick(m)"></GmapMarker>
    </GmapMap>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "map",
  computed: {
    country: function() {
      return this.$route.params.country || "";
    },
    lang: function() {
      return this.$route.params.lang || "";
    },
    service: function() {
      return this.$route.params.service || "";
    },
    ...mapState({
      markers: function(state) {
        return state.places.filter(
          place =>
            state.mapCountryFilter === "" ||
            place.ratings
              .map(rating => rating.culture)
              .includes(state.mapCountryFilter)
        );
      }
    })
  },
  methods: {
    pinClick: function(place) {
      this.route(place.id);
    },
    route: function(id) {
      this.$router.push(
        `/country/${this.country}/language/${this.lang}/service/${
          this.service
        }/place/${id}`
      );
    }
  },
  data: function() {
    return {
      center: {
        lat: 10.0,
        lng: 10.0
      }
    };
  }
};
</script>