<template>
    <GmapMap
        :center="center"
        :zoom="7"
        style="width: 100%; height: 300px"
        :options="{
            mapTypeControl: false,
            draggable: false,
            zoomControl: false,
            scaleControl: false,
            streetViewControl: false,
            fullscreenControl: false
        }" ref="map">
      <GmapMarker v-for="m in markers" :key="m.id" :position="m.position" :clickable="true" @click="pinClick(m)"></GmapMarker>
    </GmapMap>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "google-map-renderer",
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
  watch: {
    markers: function() {
      this.fitToBounds();
    }
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
    },
    fitToBounds: function() {
      if (!window.google) {
        return;
      }

      const bounds = new google.maps.LatLngBounds();
      for (let i = 0; i < this.markers.length; i++) {
        bounds.extend(this.markers[i].position);
      }

      this.center = bounds.getCenter();
      clearInterval(this.inter);
    }
  },
  data: function() {
    return {
      center: {
        lat: 0.0,
        lng: 0.0
      },
      inter: null
    };
  },
  mounted() {
    const vm = this;
    this.inter = setInterval(function() {
      vm.fitToBounds();
    }, 500);
  }
};
</script>