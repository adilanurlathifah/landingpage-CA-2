<template>
  <div class="index-body">
      <Nav/>
      <Header
        :title="pageTitle"
        :subtitle="pageSubtitle"
        :pageImage="pageImage"
        :showButton="true" 
      />
      <CarouselContainer/>
      <BenefitContainer 
        :title="title"
        :subtitle="subtitle"
      />
      <h2 class="title-promo">{{ titlePromo }}</h2>
      <div class="container mx-auto mt-4 p-4">
        <div class="row">
          <div class="col-12">
            <div class="col-3">
              <h3>Belajar Online</h3>
              <p>Kamu dapat belajar mandiri dengan video dan materi yang sudah tersedia. Modul & Paket Kelas bisa kamu pilih sesuai kebutuhan.</p>
              <b-button class="outline-btn" variant="outline-primary">Lihat Semua</b-button>
            </div>
            <div class="col-9">
              <div class="row">
                <b-card
                  v-for="course in displayedCourses"
                  :key="course.id"
                  :title="course.title"
                  :img-src="course.courseThumbnail ? course.courseThumbnail : defaultThumbnail"
                  img-top
                  tag="article"
                  class="mb-2"
                >
                  <b-card-text style="font-size: 14px;">
                    Rp. {{ course.priceFirst }}, Rp. {{ course.price }}
                    Rating: {{ course.courseRating }}
                  </b-card-text>
                </b-card>
            </div> 
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto mt-4 p-4">
      <div class="row">
        <div class="col-12">
          <div class="col-3">
            <h3>Live Class</h3>
            <p>Kamu dapat belajar dan berinteraksi secara langsung dengan Pengajar Terbaik dalam setiap sesi online. Kelas dibuka sesuai batch dan kuota yang tersedia.</p>
            <b-button class="outline-btn" variant="outline-primary">Lihat Semua</b-button>
          </div>
          <div class="col-9">
            <div class="row">
                <b-card
                  v-for="liveClass in displayedClass"
                  :key="liveClass.id"
                  :title="liveClass.title"
                  :img-src="liveClass.thumbnail ? liveClass.thumbnail : defaultThumbnail"
                  img-top
                  tag="article"
                  class="mb-2"
                >
                <b-card-text style="font-size: 14px;">
                  {{ liveClass.batch }}
                </b-card-text>
              </b-card>
            </div> 
          </div>
        </div>
      </div>
    </div>
      <!-- <Cards/> -->
      <!-- <CardsLiveClass/> -->
      <Slider/>
      <h2 class="slider-title">{{ sliderTitle }}</h2>
      <Vue_slick/>
      <Footer :showFooterTop="true"/>
  </div>
</template>

<script>
// import Cards from "~/components/Cards.vue";
// import CardsLiveClass from "~/components/CardsLiveClass.vue";
import CarouselContainer from "~/components/CarouselContainer.vue";
import BenefitContainer from "~/components/BenefitContainer.vue";
import Footer from "~/components/landingpage/Footer.vue";
import Nav from '~/components/landingpage/Nav.vue';
import Header from "~/components/landingpage/Header.vue";
import Vue_slick from "~/components/VueSlick.vue";
import fetchData from "~/mixins/fetchData";

export default {
  auth: 'guest',
  mixins: [fetchData],
  components: {
    CarouselContainer,
    BenefitContainer,
    Nav,
    Header,
    Footer,
    Vue_slick
},
  data() {
    return {
      title: "Mulai Belajar bersama Cyber Academy",
      subtitle:"Bangun Keahlianmu dengan Kursus Online Cyber Security Berstandar Industri",
      titlePromo: "Pilih Kelas Sesuai dengan Cara Belajar Kamu!",
      pageTitle: "Bangun Karirmu sebagai Cyber Security Profesional",
      pageSubtitle: "Pelajari Konsep dan Teknik Cyber Security dari para Pengajar Terbaik yang berpengalaman di Industri sampai Bisa!",
      pageImage: require("~/assets/img/header.png"),
      sliderTitle: "Telah dipercaya oleh",
    };
  },
}
</script>

<style scoped>
  .header img {
    width: 60%;
    height: 450px;
    margin-bottom: 10px;
    z-index: 1;
  }

  .title-promo {
    font-size: 24px;
    font-weight: bolder;
    line-height: 35px;
    margin-top: 70px;
    text-align: center;
  }

  .slider-title {
    font-size: 24px;
    font-weight: bolder;
    line-height: 35px;
    margin-top: 70px;
    text-align: center;
  }

  /* live class and courses */
  .row .col-12 {
    display: flex;
    flex-direction: row;
    background-color: #F6F8FF;
    height: 520px;
    padding: 15px;
  }
  
  .col-3 {
    display: flex;
    flex-direction: column;
    margin-top: 70px;
  }
  
  .col-3 h3 {
    font-size: 24px;
    font-weight: 700;
    margin-top: 50px;
  }
  
  .col-3 p {
    font-size: 13.5px;
    font-weight: 400;
    margin-bottom: 16px;
  }
  
  .col-3 .outline-btn {
    width: 60%;
    color: #2070f2;
    border-color: #2070f2;
    font-family: "Montserrat", sans-serif;
    padding: 6px 10px;
    font-size: 13px;
    font-weight: 400;
  }
  
  .col-3 .outline-btn:hover {
    color: white;
    background-color: #004ECB;
  }
  
  .row .col-9 .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
  
  .row .col-9 .row b-card {
    flex: 0 0 33.33%;
    max-width: 33.33%;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }
  
  .row .mb-2 {
    width: 25%;
    margin-left: 10px;
  }
  
  .card-img-top {
    object-fit: cover;
    height: 100px;
    border-radius: 0%;
  }
  
  .card-body .card-title {
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  
  .card-body .card-text {
    font-size: 8px;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
</style>