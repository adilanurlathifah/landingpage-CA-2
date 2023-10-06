<template>
    <div>
      <Navigation/>
      <Header
        :title="pageTitle"
        :subtitle="pageSubtitle"
        :pageImage="pageImage"
        :showButton="false" />
      <Nuxt/>
    </div>
</template>
  
<script>
import Header from '~/components/landingpage/header.vue';
import Navigation from '~/components/landingpage/navigation.vue';

  export default {
    auth: false,
    data() {
        return {
            pageTitle: 'Cybersecurity Labs',
            pageSubtitle: 'Pelajari dan Tingkatkan Kemampuanmu dengan mengikuti\nExercise Lab dan Capture The Flag',
            pageImage: require("~/assets/cyberlab.png"),
        };
    },
    components: { Navigation, Header }
};
  </script>
  
<style>
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
  </style>