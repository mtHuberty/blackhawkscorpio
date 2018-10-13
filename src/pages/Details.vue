<template>
  <div>
    <v-carousel>
      <v-carousel-item
        hide-controls
        v-for="(picture, i) in pictures"
        :key="i"
        :src="picture.src"
      ></v-carousel-item>
    </v-carousel>
    <v-layout column class='page'>
      <v-flex pt-2 xs12>
        <v-layout column>
          <v-flex xs12>
            <h1>
              Saint Louis Üniversitesi
            </h1>
          </v-flex>
          <v-flex xs12>
            <p>Saint Louis Üniversitesi, akademik mükemmelliğe, yaşamı değiştiren araştırmaya, şefkatli sağlık hizmetlerine ve topluma güçlü bir bağlılığa değer veren bir Katolik Cizvit kurumudur.</p>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 mt-2>
        <v-layout row wrap>
          <v-flex xs7/>
          <v-flex xs1>
            <div :class="'d-flex flag-icon mb-2 flag-icon-us'"/>
          </v-flex>
          <v-flex>
            <div :class="'d-flex flag-icon mb-2 flag-icon-tr'"/>
          </v-flex>
        </v-layout>
        <v-layout align-content-space-between>
          <v-flex class='faces-container'>
            <v-icon color="red">fas fa-frown</v-icon>
          </v-flex>
          <v-flex class='faces-container'>
            <v-icon color="green">fas fa-smile</v-icon>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 class='score-bar'>
      </v-flex>
      <v-flex xs12>
        <v-layout row align-center mt-4>
          <v-flex mr-2 xs1>
            <v-icon color="blue">fas fa-user</v-icon>
          </v-flex>
          <v-flex mr-2 xs9>
            <v-text-field color="blue" label="Yorumun"/>
          </v-flex>
          <v-flex>
            <v-dialog
              v-model="dialog"
              width="400"
            >
              <v-btn 
                icon color="info"
                slot="activator"
                dark
              >
                <v-icon>fas fa-comment</v-icon>
              </v-btn>
              <v-card>
                <v-card-title
                  class="headline lighten-2"
                  primary-title
                >
                  Değerlendirme
                </v-card-title>

                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn flat @click="dialog = false">
                    <v-icon color="red">fas fa-frown</v-icon>
                  </v-btn>
                  <v-btn flat @click="dialog = false">
                    <v-icon color="grey">fas fa-meh</v-icon>
                  </v-btn>
                  <v-btn flat @click="dialog = false">
                    <v-icon color="green">fas fa-smile</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-flex>
        </v-layout>
        <v-layout v-for="(comment, i) in comments" :key="i" row wrap mt-2>
          <v-flex mr-2 xs1>
            <v-icon color="grey">fas fa-user</v-icon>
          </v-flex>
          <v-flex xs10>
            <div>{{ comment }}</div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "Details",
  data() {
    return {
      dialog: false,
      pictures: [
        {
          src: 'https://www.slu.edu/img/home/aerials_northcampus-min.jpg'
        },
        {
          src: 'https://www.slu.edu/img/home/aerials_northcampus-min.jpg'
        },
        {
          src: 'https://www.slu.edu/img/home/aerials_northcampus-min.jpg'
        },
        {
          src: 'https://www.slu.edu/img/home/aerials_northcampus-min.jpg'
        }
      ],
      comments: [
        `Billikens'e git!`, 
        `Biz burada seviyoruz! Eğitim en üst düzeydedir ve şehirdeki en iyisi, buraya gelmenizi şiddetle tavsiye ediyoruz`
      ],
    }
  }
};
</script>

<style scoped>
.score-bar {
  margin: auto;
  margin-top: -1.2rem;
  z-index: 0;
  width: 45%;
  height: 5px;
  background: linear-gradient(to right, red,yellow, green);
}
.faces-container {
  z-index: 1;
  text-align: center;
}
.flag-icon-tr {
  transform: scale(1.5)
}
</style>
