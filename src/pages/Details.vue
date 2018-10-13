<template>
  <div>
    <v-layout mt-2 row wrap>
        <v-flex xs3/>
        <v-flex xs6 justify-center>
            <v-img
              :src="`https://www.slu.edu/img/home/aerials_northcampus-min.jpg`"
              aspect-ratio="1"
              class="grey lighten-2"
              height="225"
              width="250"
            />
        </v-flex>
        <v-flex xs3/>
      </v-layout>
    <v-container grid-list-sm text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <h1>
            Saint Louis Üniversitesi
          </h1>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12>
          <p>Saint Louis Üniversitesi, akademik mükemmelliğe, yaşamı değiştiren araştırmaya, şefkatli sağlık hizmetlerine ve topluma güçlü bir bağlılığa değer veren bir Katolik Cizvit kurumudur.</p>
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
          <v-icon color="grey">fas fa-meh</v-icon>
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
          <v-text-field color="blue" label="Yorumun"/>
        </v-flex>
        <v-flex xs3>
          <v-btn color="info">Post</v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap mt-2>
        <v-flex xs2>
          <v-icon color="black">fas fa-user</v-icon>
        </v-flex>
        <v-flex xs10>
          <div>Billikens'e git!</div>
        </v-flex>
      </v-layout>
      <v-layout row wrap mt-2>
        <v-flex xs2>
          <v-icon color="black">fas fa-user</v-icon>
        </v-flex>
        <v-flex xs10>
          <div>
Biz burada seviyoruz! Eğitim en üst düzeydedir ve şehirdeki en iyisi, buraya gelmenizi şiddetle tavsiye ediyoruz</div>
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
.image_container{
  text-align: center
}
</style>
