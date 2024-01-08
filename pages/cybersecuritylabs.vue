<template>
  <div class="cybersecurity-labs-body">
    <Nuxt/>
    <div class="cybersecurity-labs-navbar">
      <Navigation :showLogoCda="false" :showSwp="false" />
    </div>
      <Header
        :title="pageTitle"
        :subtitle="pageSubtitle"
        :pageImage="pageImage"
        :showButton="false" />
      <CyberlabContent/>
      <div class="cyberlab-container col-lg-12 col-md-12 col-sm-12 mx-auto mb-5 mt-2 p-0 pt-4">
          <div class="text-center mx-auto w-100 mb-3">
            <h3 style="text-align: center; padding-top: 10px; padding-bottom: 20px; font-weight: 700;">Akses dan Telusuri Semuanya Sekarang juga!</h3>
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
      <div class="container">
          <div class="text-center w-100 mb-3">
            <h3 style="padding-top: 10px; padding-bottom: 20px; font-weight: 700;">Telah Dipercaya Oleh</h3>
            <div class="row col-12 mx-auto py-4 justify-content-center">
              <img src="~assets/img/logo/FHUI.png" class="mx-2 logo-container"/>
              <img src="~assets/img/cyberlab/telkom.jpg" class="mx-2 logo-container"/>
              <img src="~assets/img/cyberlab/VU_White.png" class="mx-2 logo-container"/>
              <img src="~assets/img/cyberlab/astra.jpeg" class="mx-2 logo-container"/>
            </div>
        </div>
      </div>
      <Footer />
  </div>
</template>
  
<script>
import Header from '~/components/landingpage/header.vue';
import Navigation from '~/components/landingpage/navigation.vue';
import CyberlabContent from '~/components/cyberlab_container.vue';
import { LABS } from '~/utils/list-lab.json'
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import Footer from '~/components/landingpage/footer.vue';

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
                      "slidesToShow": 3.5,
                      "slidesToScroll": 3.5,
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
    components: { Navigation, Header, Footer, CyberlabContent, VueSlickCarousel }
};
  </script>
  
<style>
  .logo-container {
    height: 80px;
    width: 150px;
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

  .cyberlab-container {
    background-color: #161D2A;
    width: 100%;
  }

  .card-listlab {
    min-width: 200px;
    background-color: #1E2739;
    margin-left: 15px;
  }

  .medium-badge {
    color: white;
  }

  .cybersecurity-labs-body {
    background-color: #161D2A;
    color: white;
  }

  .cybersecurity-labs-navbar .navbar {
    background-color: #161D2A;
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
  }

  .header img {
    width: 500px;
    height: 400px;
    margin-top: 100px;
    margin-bottom: 10px;
    margin-right: 30px;
    z-index: 1;
  }
  
  .header-desc {
    margin-left: 30px;
  }
  .header-desc h2 {
    font-size: 36px;
    font-weight: 700;
    margin-top: 50px;
  }
  
  .header-desc p {
    font-size: 17px;
    font-weight: 400;
    margin-bottom: 16px;
  }

/* small */
@media (max-width: 576px) { 
  .nav-collapse {
    margin-top: 21px;
    z-index: 2;
    padding: 20px;
  }

  .dropdown-item {
    padding: 10px;
  }

  .navbar-nav .nav-link {
    font-size: 15px;
    line-height: 25px;
  }

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
  .navbar-toggler {
    margin-right: 35px;
  }
}

/* medium */
@media (max-width: 768px) {  
  .nav-collapse {
    margin-top: 20px;
    z-index: 2;
    padding: 20px;
  }

  .dropdown-item {
    padding: 10px;
    font-size: small;
  }

  .navbar-nav .nav-link {
    font-size: 15px;
    line-height: 25px;
  }

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

/* large */
@media (max-width: 992px) {
  .cybersecurity-labs-navbar .nav-collapse {
    background-color: #161D2A;
  }
}
</style>