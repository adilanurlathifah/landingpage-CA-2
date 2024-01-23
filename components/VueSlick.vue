<template>
  <div class="carousel-container">
    <button @click="showPrev" type="button" class="slick-arrow slick-prev" style="display: block;">
    </button>
    <VueSlickCarousel :arrows="true" ref="carousel" v-bind="settings" class="slider">
      <div v-for="(image, index) in images" :key="index" class="logo-container">
        <img :src="require(`@/assets/img/logo/${image}.png`)" />
      </div>
    </VueSlickCarousel>
    <button @click="showNext" type="button" class="slick-arrow slick-next" style="display: block;">
    </button>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "VueSlick",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      images: [
        "bssn",
        "FHUI",
        "gs",
        "kemenkeu",
        "opsigo",
        "pegadaian",
        "pindad",
        "ptpii",
        "swamedia",
        "telkom",
      ],
      settings: {
        arrows: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
      },
    };
  },
  methods: {
    showNext() {
      this.$refs.carousel.next();
    },
    showPrev() {
      this.$refs.carousel.prev();
    },
  },
};
</script>

<style scoped>

.carousel-container {
  display: flex;
  flex-direction: row;
  margin-top: -180px;
}

.slider {
  display: flex;
  flex-direction: row;
  overflow: hidden;
  position: relative;
  padding: 130px;
  min-width: 100px;
  min-height: 100px;
}

.logo-container {
  display: flex;
  justify-content: center;
  width: 150px;
  height: 70px;
  object-fit: cover;
}

.logo-container:last-child {
  margin-right: 0px;
}

.logo-container img {
  object-fit: contain;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  display: flex;
  width: max-content;
  min-width: 70%;
  animation-duration: 20s;
  animation-direction: alternate;
  animation-delay: 2s;
  margin-right: 30px;
  margin-left: 20px;
}
.slick-prev {
  left: 20px;
}

.slick-next {
  right: 20px;
}
.arrow-icon {
  display: inline-block;
  font-size: 24px;
  line-height: 24px;
  color: #2f3241;
  margin-right: 8px;
  vertical-align: middle;
}

::v-deep .slick-prev,
::v-deep .slick-next {
  height: auto;
  line-height: 0;
}
::v-deep .slick-prev:before {
  content: '‹';
}
::v-deep .slick-next:before {
  content: '›';
}
::v-deep .slick-prev {
  left: -50px;
}
::v-deep .slick-next {
  right: -50px;
}
::v-deep .slick-prev:before,
::v-deep .slick-next:before {
  font-size: 60px;
  color: #252e71;
}
::v-deep .slick-dots li button:before {
  font-size: 12px;
  color: #d9ddff;
  opacity: 0.99;
}
::v-deep .slick-dots li.slick-active button:before {
  opacity: 0.75;
  color: #252e71;
}

@media only screen and (max-width: 768px) {
  .logo-container {
    flex-direction: row;
    justify-content: center;
    margin-right: 10px;
  }
  .logo-container:last-child {
    margin-right: 0px;
  }
  .logo-container img {
    object-fit: contain;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    display: flex;
    width: max-content;
    min-width: 50%;
    animation-duration: 20s;
    animation-direction: alternate;
    animation-delay: 2s;
    margin-right: 30px;
    margin-left: 20px;
  }
}
</style>