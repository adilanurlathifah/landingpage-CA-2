<template>
  <div class="header">
    <div class="header-desc">
        <h2 class="header-title">{{ title }}</h2>
        <p>{{ subtitle }}</p>
        <button v-if="showButton" class="custom-button">Belajar Sekarang</button>
    </div>
    <img class="header-img" :src="pageImage" data-aos="fade-up" data-aos-anchor-placement="top-center"/>
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
.header {
  display: flex;
  align-items: center;
  padding: 0 10%;
  margin-top: 50px;
}

.header-desc {
  flex-direction: column;
  flex: 1;
}

.header-desc .header-title {
  font-size:27px;
  line-height: 30px;
  word-spacing: 1px;
  margin-top: 50px;
}

.header-desc p {
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.header-img {
  height: 450px;
  margin-top: 60px;
  padding: 8px;
  max-width: 100%;
  margin-left: 30px;
  transition-duration: 2s;
}

.custom-button {
  background-color: #2839bc;
  color: white;
  border: 0.75px solid #2839bc;
  border-radius: 5px;
  padding: 10px 30px;
  cursor: pointer;
  font-size: 16px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
}

.custom-button:hover {
  background: #2070f2;
  color: white;
  transition-duration: 0.5s;
}
</style>
