<template>
  <div>
    <MapFilter></MapFilter>
    <Map></Map>
    <PlaceListing></PlaceListing>
  </div>
</template>

<script>
import Map from "../components/Map";
import MapFilter from "../components/MapFilter";
import PlaceListing from "../components/PlaceListing";

export default {
  name: "select-place",
  components: { Map, MapFilter, PlaceListing }
};
</script>

