<template>
  <div>
    <v-container grid-list-sm text-xs-center>
      <v-layout column wrap>
        <v-flex>
          <v-img
            :src="`https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/St_Louis_night_expblend_cropped.jpg/240px-St_Louis_night_expblend_cropped.jpg`"
            aspect-ratio="1"
            class="grey lighten-2"
            height="200"
            width="200"
          />
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12>
          <h1>
            GateWay Arch
          </h1>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12>
          <h4>Description: </h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs9/>
        <v-flex xs1>
          <div :class="'d-flex flag-icon mb-2 flag-icon-us'"/>
        </v-flex>
        <v-flex xs1>
          <div :class="'d-flex flag-icon mb-2 flag-icon-tr'"/>
        </v-flex>
        <v-flex xs1/>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs4>
          <v-icon color="red">fas fa-frown</v-icon>
        </v-flex>
        <v-flex xs4>
          <v-icon color="yellow">fas fa-meh</v-icon>
        </v-flex>
        <v-flex xs4>
          <v-icon color="green">fas fa-smile</v-icon>
        </v-flex>
      </v-layout>
      <v-layout row wrap mt-4>
        <v-flex xs2>
          <v-icon color="blue">fas fa-user</v-icon>
        </v-flex>
        <v-flex xs7>
          <v-text-field color="blue" label="Regular"/>
        </v-flex>
        <v-flex xs3>
          <v-btn color="info">Post</v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap mt-2>
        <v-flex xs2>
          <v-icon color="grey">fas fa-user</v-icon>
        </v-flex>
        <v-flex xs10>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare lacus vitae enim tincidunt, a bibendum enim feugiat. Aliquam tincidunt justo eu nunc sollicitudin facilisis.</div>
        </v-flex>
      </v-layout>
      <v-layout row wrap mt-2>
        <v-flex xs2>
          <v-icon color="grey">fas fa-user</v-icon>
        </v-flex>
        <v-flex xs10>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare lacus vitae enim tincidunt, a bibendum enim feugiat. Aliquam tincidunt justo eu nunc sollicitudin facilisis. Nulla ut elit sollicitudin.</div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Details",
};
</script>

<style scoped>
</style>
