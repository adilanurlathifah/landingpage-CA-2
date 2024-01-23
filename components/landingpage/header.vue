<template>
  <div>
    <div :class="[theme === 'dark' ? 'dark-header' : 'light-header']">
      <div
        class="row col-lg-10 col-md-10 col-sm-12 mx-auto pt-5 flex-lg-row flex-column-reverse">
        <b-col md="6" sm="12" class="pl-2 pr-0 align-self-center">
          <h2 style="font-size: 2.5rem; line-height: 1.2; font-weight: 700;"> {{ title }}</h2>
          <p style="font-size: 20px;"> {{ subtitle }} </p>
          <button v-if="showButton" class="custom-button">Belajar Sekarang</button>
        </b-col>
        <b-col md="6" sm="12">
          <b-img
            :src=pageImage
            style="max-height:500px; width:auto; max-width:100%"
            alt="Responsive image"
            data-aos="fade-up"
          ></b-img>
        </b-col>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    pageImage: String,
    showButton: {
      type: Boolean,
      default: true,
    },
    theme: {
      type: String,
      default: 'light', 
    },
  },
};
</script>

<style>
.light-header {
  background-color: #FAFCFF;
  color: black;
  margin-top: 100px;
}

.dark-header {
  background-color: #161D2A;
  color: white;
  margin-top: 90px;
}

.custom-button {
  background-color: #183ebc;
  color: white;
  border-radius: 5px;
  padding: 10px 30px;
  cursor: pointer;
  font-size: 16px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
}

.custom-button:hover {
  background: #3260f7;
  transition-duration: 0.5s;
}
</style>
