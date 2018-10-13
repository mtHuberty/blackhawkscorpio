<template>
  <v-layout>
    <v-flex xs12>
      <v-card>
        <v-container grid-list-sm fluid>
          <v-layout row wrap>
            <v-flex v-for="n in 9" :key="n" xs6 sm4 m2 d-flex>
              <Flag country="us"></Flag>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import "flag-icon-css/css/flag-icon.css";
import Flag from "../components/Flag";
export default {
  name: "country",
  components: { Flag }
};
</script>

<style scoped>
* {
  background-color: #000;
}
</style>
