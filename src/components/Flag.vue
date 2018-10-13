<template>
  <v-card flat tile :class="'d-flex flag-icon flag-icon-' + this.country"></v-card>
</template>

<script>
export default {
  name: "Flag",
  props: {
    country: String
  },
  method: {
    select: function() {
      console.log(this.country);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flag-icon {
  background-color: transparent;
  background-size: auto;
  background-repeat: no-repeat;
  min-height: 200px;
}
</style>
