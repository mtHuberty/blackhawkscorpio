<template>
  <div class="place">
    <MapFilter></MapFilter>
    <Map></Map>
  </div>
</template>

<script>
import Map from "../components/Map";
import MapFilter from "../components/MapFilter";

export default {
  name: "select-place",
  components: { Map, MapFilter }
};
</script>
