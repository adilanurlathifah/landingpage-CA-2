<template>
  <div class="index-body">
    <div class="index-navbar">
      <Navigation :showLogoCda="true" :showSwp="true" />
    </div>
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
      <Cards/>
      <CardsLiveClass/>
      <Slider/>
      <h2 class="slider-title">{{ sliderTitle }}</h2>
      <Vue_slick/>
      <Footer :showFooterTop="true"/>
  </div>
</template>

<script>
import Cards from "~/components/cards.vue";
import CardsLiveClass from "~/components/cards_live_class.vue";
import CarouselContainer from "~/components/carousel_container.vue";
import BenefitContainer from "~/components/benefit_container.vue";
import Footer from "~/components/landingpage/footer.vue";
import Navigation from "~/components/landingpage/navigation.vue";
import Header from "~/components/landingpage/header.vue";
import Vue_slick from "~/components/vue_slick.vue";

export default {
  auth: 'guest',
  components: {
    Cards,
    CardsLiveClass,
    CarouselContainer,
    BenefitContainer,
    Navigation,
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

<style>
  .index-body {
    background-color: #FAFCFF;
    color: black;
  }

  .index-navbar .navbar {
    background-color: white;
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
  }

.index-navbar .nav-collapse {
    background-color: white;
  }

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
</style>