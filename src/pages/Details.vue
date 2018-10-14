<template>
  <div>
    <v-carousel class='carousel'>
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
      <v-flex xs12 mt-5>
        <v-layout row wrap>
          <v-flex xs12>
            <v-layout row>
              <v-flex mr-5 xs7/>
              <v-flex xs1 mr-2>
                <div :class="'d-flex flag-icon flag-icon-us'"/>
              </v-flex>
              <v-flex>
                <div :class="'d-flex flag-icon flag-icon-tr'"/>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 ml-2>
            <v-layout row>
              <v-flex xs10 class='faces-container'>
                <v-icon color="red" x-large>fas fa-frown</v-icon>
              </v-flex>
              <v-flex xs1 class='faces-container' ml-3>
                <v-icon color="green" x-large>fas fa-smile</v-icon>
              </v-flex>
            </v-layout>
          </v-flex>
          <div class='gradient-bar'></div>
        </v-layout>
      </v-flex>
      <v-flex xs12 mt-3>
        <v-layout row align-center mt-3>
          <v-flex mr-2 xs1>
            <v-icon color="blue">fas fa-user</v-icon>
          </v-flex>
          <v-flex mr-2 xs9>
            <v-text-field color="blue" label="Yorumun" v-model="newComment" @keyup.enter="saveComment"/>
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
                @click="saveComment"
              >
                <v-icon small>fas fa-comment</v-icon>
              </v-btn>
              <v-card>
                <v-card-title class="headline" justify-center>
                  <span class="modal-header">Değerlendirme</span>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-content>
                  <v-spacer></v-spacer>
                  <div class="pa-4">
                    <v-btn flat @click="dialog = false">
                      <v-icon color="red" x-large>fas fa-frown</v-icon>
                    </v-btn>
                    <v-btn flat @click="dialog = false">
                      <v-icon color="grey" x-large>fas fa-meh</v-icon>
                    </v-btn>
                    <v-btn flat @click="dialog = false">
                      <v-icon color="green" x-large>fas fa-smile</v-icon>
                    </v-btn>
                  </div>
                  <v-spacer></v-spacer>
                </v-card-content>
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
  methods: {
    saveComment: function() {
      this.comments = [this.newComment, ...this.comments];
      this.newComment = "";
      this.dialog = true;
    }
  },
  data() {
    return {
      dialog: false,
      newComment: "",
      pictures: [
        {
          src: "https://www.slu.edu/img/home/aerials_northcampus-min.jpg"
        },
        {
          src:
            "https://stlouisearthday.org/wp-content/uploads/2018/05/slu-bicentennial-logo.png"
        },
        {
          src:
            "http://mediad.publicbroadcasting.net/p/kwmu/files/styles/x_large/public/201609/bb4_9559__1_.jpg"
        },
        {
          src: "https://media.glassdoor.com/l/99/87/55/e3/slu-campus.jpg"
        }
      ],
      comments: [
        `Billikens'e git!`,
        `Biz burada seviyoruz! Eğitim en üst düzeydedir ve şehirdeki en iyisi, buraya gelmenizi şiddetle tavsiye ediyoruz`
      ]
    };
  }
};
</script>

<style scoped>
.gradient-bar {
  margin: auto;
  margin-top: -1.8rem;
  z-index: 0;
  width: 76%;
  height: 7px;
  background: linear-gradient(to right, red, yellow, green);
}
.faces-container {
  z-index: 1;
}
.flag-icon-tr {
  margin-top: -1.3rem !important;
  transform: scale(2.5) !important;
}
.carousel {
  height: 25rem;
}
.flag-icon {
  margin-top: -0.6rem;
  border-left: solid 1px darkgrey;
  position: absolute;
  height: 1.5rem;
  background-position: top;
  transform: scale(1.5);
}
.modal-header {
  margin: auto;
}
</style>
