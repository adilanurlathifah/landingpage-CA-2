<template>
  <div class="light-header">
    <div
        class="row col-lg-10 col-md-10 col-sm-12 mx-auto pt-5 flex-lg-row flex-column-reverse">
        <b-col md="6" sm="12" class="pl-2 pr-0 align-self-center">
          <h2 style="font-size: 2.5rem; font-weight: 700;"> {{ title }}</h2>
          <p style="font-size: 20px;"> {{ subtitle }} </p>
          <button v-if="showButton" class="custom-button">Belajar Sekarang</button>
        </b-col>
        <b-col md="6" sm="12">
          <b-img
            :src=pageImage
            style="max-height:400px; width:auto; max-width:100%"
            alt="Responsive image"
            data-aos="fade-up"
          ></b-img>
        </b-col>
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
  },
};
</script>


<style>
.light-header {
  background-color: white;
  color: black;
  margin-top: 100px;
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

/* @media (min-width: 960px) {
  .col-md-12 {
      margin-top: 50px;
  }
} */
</style>
