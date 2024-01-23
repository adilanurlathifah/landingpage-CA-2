<template>
    <div class="carousel-container">
      <b-carousel
        class="carousel-banner"
        v-model="slide"
        :interval="4000"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide
          class="slider-1"
          img-src="~/assets/img/promo-september.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          class="slider-2"
          img-src="~/assets/img/reward-banner.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          class="slider-3"
          img-src="~/assets/img/banner-promo.png"
        ></b-carousel-slide>
      </b-carousel>
    </div>
</template>
  
<script>
export default {
data() {
    return {
    slide: 0,
    sliding: null
    };
},
methods: {
    onSlideStart(slide) {
    this.sliding = true;
    },
    onSlideEnd(slide) {
    this.sliding = false;
    },
},
}
</script>

<style>
.carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
}

.carousel-banner {
  margin-top: -230px;
  width: 960px;
}
</style>