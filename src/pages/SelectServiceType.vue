<template>
  <v-layout class='page'>
    <v-flex>

    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'SelectServiceType',
  data() {
    return ({
      items: [
        {
          icon: 'fas fa-plus',
          color: 'red',
          name: 'hosspital'
        }
      ]
    })
  }
}
</script>
