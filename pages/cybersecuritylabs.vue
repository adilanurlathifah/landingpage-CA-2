<template>
  <div class="cybersecurity-labs-body">
    <Nuxt/>
      <DarkNav/>
      <Header
        :title="pageTitle"
        :subtitle="pageSubtitle"
        :pageImage="pageImage"
        :showButton="false" />
      <CyberlabContent/>
      <div class="cyberlab-container col-lg-12 col-md-12 col-sm-12 mx-auto mb-5 mt-2 p-0 pt-4">
          <div class="text-center mx-auto w-100 mb-3">
            <h2>Akses dan Telusuri Semuanya Sekarang juga!</h2>
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
            <h2>Telah Dipercaya Oleh</h2>
            <div class="row col-12 mx-auto justify-content-center">
              <img src="~assets/img/cyberlab/FHUI_white.png" class="mx-2 logo-container"/>
              <img src="~assets/img/cyberlab/telkom_white.png" class="mx-2 logo-container"/>
              <img src="~assets/img/cyberlab/VU_White.png" class="mx-2 logo-container"/>
              <img src="~assets/img/cyberlab/astra_white.png" class="mx-4 logo-container"/>
            </div>
        </div>
      </div>
      <DarkFooter />
  </div>
</template>
  
<script>
import Header from '~/components/landingpage/header.vue';
import CyberlabContent from '~/components/cyberlab_container.vue';
import { LABS } from '~/utils/list-lab.json'
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import DarkNav from '~/components/landingpage/dark_nav.vue'
import DarkFooter from '~/components/landingpage/dark_footer.vue'

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
    components: { DarkNav, Header, DarkFooter, CyberlabContent, VueSlickCarousel }
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

  .cyberlab-container {
    background-color: #161D2A;
    width: 100%;
  }

  .cyberlab-container h2 {
    text-align: center; 
    padding-top: 10px; 
    padding-bottom: 20px; 
    font-weight: 700;
    font-size: 30px;
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
    padding-top: 50px; 
    padding-bottom: 10px; 
    font-weight: 700;
    font-size: 30px;
  }

  .cybersecurity-labs-body {
    background-color: #161D2A;
    color: white;
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