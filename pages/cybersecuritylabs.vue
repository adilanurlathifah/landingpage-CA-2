<template>
  <div>
    <Nuxt/>
      <Nav isDarkMode="true"/>
      <Header
        :title="pageTitle"
        :subtitle="pageSubtitle"
        :pageImage="pageImage"
        :showButton="false"
        theme="dark"
      />
      <div class="cyberlab-container">
        <h2 style="text-align: center;">Mulai Berlatih dan Ikuti Tantangan Lab yang Menyenangkan</h2>
        <div class="container p-md-5 p-2">
            <div class="row g-2 g-md-4 mx-auto py-4 justify-content-center">
                <div class="col-12 col-md-6">
                    <b-card no-body class="card-container overflow-hidden no-shadow h-100 py-lg-0 py-sm-0">
                        <b-row class="px-2">
                            <b-col md="2" class="py-sm-4 my-auto">
                                <b-card-img
                                    src="~/assets/img/cyberlab/ctf.svg"
                                    style="max-height:100px; margin-left: 20px; width:auto; max-width:100%"
                                >
                                </b-card-img>
                            </b-col>
                            <b-col md="10" class="py-0">
                                <b-card-body>
                                <h4>CTF</h4>
                                <p>
                                    Kamu dapat menelusuri semua CTF dari mulai tingkat Easy, Medium hingga Hard.
                                </p>
                                </b-card-body>
                            </b-col>
                        </b-row>
                    </b-card>
                </div>
                <div class="col-12 col-md-6">
                    <b-card no-body class="card-container overflow-hidden no-shadow h-100 py-lg-0 py-sm-0">
                        <b-row class="px-2">
                            <b-col md="2" class="py-sm-4 my-auto">
                                <b-card-img
                                    src="~/assets/img/cyberlab/poin.svg"
                                    style="max-height:100px; margin-left: 20px; width:auto; max-width:100%"
                                >
                                </b-card-img>
                            </b-col>
                            <b-col md="10" class="py-0">
                                <b-card-body>
                                <h4>Poin dan XP</h4>
                                <p>
                                    Dapatkan Poin dan XP setiap Flag yang ditemukan.
                                </p>
                                </b-card-body>
                            </b-col>
                        </b-row>
                    </b-card>
                </div>
                <div class="col-12 col-md-6">
                    <b-card no-body class="card-container overflow-hidden no-shadow h-100 py-lg-0 py-sm-0">
                        <b-row class="px-2">
                            <b-col md="2" class="py-sm-4 my-auto">
                                <b-card-img
                                    src="~/assets/img/cyberlab/flag.svg"
                                    style="max-height:100px; margin-left: 20px; width:auto; max-width:100%"
                                >
                                </b-card-img>
                            </b-col>
                            <b-col md="10" class="py-0">
                                <b-card-body>
                                <h4>Flag</h4>
                                <p>
                                    Temukan semua flag yang tersedia disemua CTF Lab dan raih setiap poinnya.
                                </p>
                                </b-card-body>
                            </b-col>
                        </b-row>
                    </b-card>
                </div>
                <div class="col-12 col-md-6">
                    <b-card no-body class="card-container overflow-hidden no-shadow h-100 py-lg-0 py-sm-0">
                        <b-row class="px-2">
                            <b-col md="2" class="py-sm-4 my-auto">
                                <b-card-img
                                    src="~/assets/img/cyberlab/leaderboard.svg"
                                    style="max-height:100px; margin-left: 20px; width:auto; max-width:100%"
                                >
                                </b-card-img>
                            </b-col>
                            <b-col md="10" class="py-0">
                                <b-card-body>
                                <h4>Leaderboard</h4>
                                <p>
                                    Kamu bisa Raih Peringkat dan Reputasi.
                                </p>
                                </b-card-body>
                            </b-col>
                        </b-row>
                    </b-card>
                </div>
                <div class="col-12 col-md-6">
                    <b-card no-body class="card-container overflow-hidden no-shadow h-100 py-lg-0 py-sm-0">
                        <b-row class="px-2">
                            <b-col md="2" class="py-sm-4 my-auto">
                                <b-card-img
                                    src="~/assets/img/cyberlab/exerciselabs.svg"
                                    style="max-height:100px; margin-left: 20px; width:auto; max-width:100%"
                                >
                                </b-card-img>
                            </b-col>
                            <b-col md="10" class="py-0">
                                <b-card-body>
                                <h4>Exercise Labs</h4>
                                <p>
                                    Kamu dapat berlatih dengan berbagai Server dan Aplikasi rentan yang tersedia di Lab ini.
                                </p>
                                </b-card-body>
                            </b-col>
                        </b-row>
                    </b-card>
                </div>
                <div class="col-12 col-md-6">
                    <b-card no-body class="card-container overflow-hidden no-shadow h-100 py-lg-0 py-sm-0">
                        <b-row class="px-2">
                            <b-col md="2" class="py-sm-4 my-auto">
                                <b-card-img
                                    src="~/assets/img/cyberlab/notes.svg"
                                    style="max-height:100px; margin-left: 20px; width:auto; max-width:100%"
                                >
                                </b-card-img>
                            </b-col>
                            <b-col md="10" class="py-0">
                                <b-card-body>
                                <h4>Notes</h4>
                                <p>
                                    Biar engga lupa, Kamu bisa mencatat setiap ide dan teknik yang kamu dapatkan di Exercise Lab.
                                </p>
                                </b-card-body>
                            </b-col>
                        </b-row>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
    <div class="cyberlab-slider">
      <div class="col-lg-12 col-md-12 col-sm-12 mx-auto mb-5 mt-2 p-0 pt-4">
          <div class="text-center mx-auto w-100 mb-3">
            <h2 style="font-size: 30px; font-weight: 700; padding: 40px; line-height: 1.2; color: white;">Akses dan Telusuri Semuanya Sekarang juga!</h2>
          </div>
        <VueSlickCarousel ref="carousel" v-bind="settings">
          <div v-for="data in labs" :key="data.title">
            <b-card class="card-listlab"
                  :img-src=data.thumbnail
                  img-top
            >
                <b-card-body class="listlab-card-body pl-0 pr-0 justify-content-start">
                  <p class="listlab-title"> {{ data.title.toUpperCase() }} </p>
                  <p class="listlab-type">Kategori : {{ data.type_lab }} </p>
                  <p class="d-flex flex-row">
                    <img class="mr-2" src="~/assets/img/icon/flag_icon.svg" />
                    {{ data.total_flag }}
                  </p>
                  <div class="float-right">
                    <b-badge 
                      v-if="data.level === 'easy'"
                      class="px-3 py-2" 
                      pill variant="success">{{ data.level.toUpperCase() }}
                    </b-badge>
                    <b-badge 
                      v-if="data.level === 'medium'"
                      class="px-3 py-2 medium-badge"
                      pill variant="warning">{{ data.level.toUpperCase() }}
                    </b-badge>
                    <b-badge 
                      v-if="data.level === 'high'"
                      class="px-3 py-2" 
                      pill variant="danger">{{ data.level.toUpperCase() }}
                    </b-badge>
                  </div>
                </b-card-body>
            </b-card>
          </div>
        </VueSlickCarousel>
      </div>
      <div class="client-container">
          <div class="text-center w-100 mb-3">
            <h2 style="font-size: 30px; font-weight: 700; line-height: 1.2; color: white; margin-bottom: 25px;">Telah Dipercaya Oleh</h2>
            <div class="row col-12 mx-auto justify-content-center">
              <img src="~assets/img/cyberlab/FHUI_white.png" class="mx-2 logo-container"/>
              <img src="~assets/img/cyberlab/telkom_white.png" class="mx-2 logo-container"/>
              <img src="~assets/img/cyberlab/VU_White.png" class="mx-2 logo-container"/>
              <img src="~assets/img/cyberlab/astra_white.png" class="mx-4 logo-container"/>
            </div>
        </div>
      </div>
      <Footer theme="dark"/>
    </div>
  </div>
</template>
  
<script>
import Nav from '~/components/landingpage/Nav.vue';
import Footer from '~/components/landingpage/Footer.vue'
import Header from '~/components/landingpage/Header.vue';
import { LABS } from '~/utils/list-lab.json'
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
    auth: false,
    data() {
        return {
            pageTitle: 'Cybersecurity Labs',
            pageSubtitle: 'Pelajari dan Tingkatkan Kemampuanmu dengan mengikuti\nExercise Lab dan Capture The Flag',
            pageImage: require("~/assets/img/cyberlab.png"),
            labs: LABS,
            settings: {
              "arrows": false,
              "dots": false,
              "infinite": true,
              "slidesToShow": 5,
              "slidesToScroll": 1,
              "autoplay": true,
              "speed": 3000,
              "autoplaySpeed": 3000,
              "cssEase": "linear",
              "responsive": [
                  {
                    "breakpoint": 1024,
                    "settings": {
                      "slidesToShow": 3,
                      "slidesToScroll": 3,
                      "infinite": true,
                      "dots": true
                    }
                  },
                  {
                    "breakpoint": 600,
                    "settings": {
                      "slidesToShow": 2,
                      "slidesToScroll": 2,
                      "initialSlide": 2
                    }
                  },
                  {
                    "breakpoint": 480,
                    "settings": {
                      "slidesToShow": 1,
                      "slidesToScroll": 1
                    }
                  }
                ]
            }
        };
    },
    components: { Nav, Header, Footer, VueSlickCarousel }
};
</script>
  
<style>
  .logo-container {
    height: 100px;
    width: 170px;
    object-fit: contain;
  }

  .listlab-card-body p {
    color: white;
  }

  .listlab-card-body {
    margin-top: -20px;
  }

  .listlab-title {
    font-weight: 700;
  }

  .listlab-type {
    font-size: 14px;
    margin-top: -10px;
  }

  .container {
    margin-top: -50px;
  }

  .cyberlab-container {
    background-color: #121926;
    width: 100%;
    color: white;
  }

  .cyberlab-container h2 {
    text-align: center; 
    padding: 40px;
    font-weight: 700;
    font-size: 30px;
  }

  .cyberlab-container h4 {
    font-weight: 700;
    font-size: 20px;
    padding-top: 10px;
  }

  .card-listlab {
    min-width: 200px;
    background-color: #1E2739;
    margin-left: 15px;
  }

  .medium-badge {
    color: white;
  }

  .client-container {
    margin-bottom: 60px;
  }

  .client-container h2 {
    text-align: center; 
    padding: 10px 20px 0px 20px;
    font-weight: 700;
    font-size: 30px;
  }

  .cybersecurity-labs-body {
    background-color: #161D2A;
    color: white;
  }

  .card-container {
    background-color: #1E2739;
    padding: 10px;
  }

  .cyberlab-slider {
    background-color: #161D2A;
    margin-top: -10px;
  }

  .header img {
    width: 500px;
    height: 400px;
    margin-top: 100px;
    margin-bottom: 10px;
    margin-right: 30px;
    z-index: 1;
  }
  
  .header h2 {
    text-align: center; 
    padding: 10px 20px 40px 20px;
    font-weight: 700;
    font-size: 30px;
  }
  
  .header p {
    color: white;
    font-size: 17px;
    font-weight: 400;
    margin-bottom: 16px;
  }

/* small */
@media (max-width: 576px) { 
  .button-container {
    display: flex;
    flex-direction: column;
  }

  .masuk-button {
    margin: 10px 0px 10px; 
  }
  .daftar-button {
    margin: 10px 0px 10px;  
  }
}

@media (max-width: 768px) {  

}

@media (max-width: 992px) {
  /* .cybersecurity-labs-navbar .nav-collapse {
    background-color: #161D2A;
  } */
}
</style>