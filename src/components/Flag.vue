<template>
  <div :class="'d-flex flag-icon mb-2 flag-icon-' + this.country" @click="select"></div>
</template>

<script>
export default {
  name: "Flag",
  props: {
    country: String
  },
  methods: {
    select: function() {
      this.$router.push(`/country/${this.country}`);
    }
  }
};
</script>

<style scoped>
.flag-icon {
  background-color: transparent;
  background-size: auto;
  background-repeat: no-repeat;
  min-height: 200px;
}
</style>
