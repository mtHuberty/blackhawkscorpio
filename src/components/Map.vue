<template>
    <GmapMap :center="center" :zoom="7" style="width: 100%; height: 500px">
      <GmapMarker v-for="m in markers" :key="m.id" :position="m.position" :clickable="true" :draggable="true"></GmapMarker>
    </GmapMap>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "map",
  computed: {
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