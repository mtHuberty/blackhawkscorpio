<template>
  <div>
    <v-icon v-if="rating <= 1.5" color="red" :small="small">fas fa-frown</v-icon>
    <v-icon v-if="rating > 1.5 && rating < 3.5" color="grey" :small="small">fas fa-meh</v-icon>
    <v-icon v-if="rating >= 3.5" color="green" :small="small">fas fa-smile</v-icon>
  </div>
</template>

<script>
export default {
  name: 'FaceRating',
  props: ['rating', 'small']
}
</script>