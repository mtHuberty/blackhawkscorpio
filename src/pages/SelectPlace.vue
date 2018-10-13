<template>
  <div class="place">
    <GmapMap :center="center" :zoom="7" style="width: 100%; height: 500px">
      <GmapMarker v-for="m in markers" :key="m.id" :position="m.position" :clickable="true" :draggable="true"></GmapMarker>
    </GmapMap>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "select-place",
  computed: {
    ...mapState({
      markers: state => state.places
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
