<template>
  <div class="footer-top">
    <div class="row">
      <div v-if="showFooterTop" class="col-12 d-flex flex-column justify-content-center" style="margin-bottom: 100px; margin-top: 100px;">
        <h2 class="text-center" data-aos="fade-up">Mulai Membangun Keahlian Cyber Security Kamu Hari ini!</h2>
        <button v-if="showButton" class="align-self-center custom-button" style="text-align: center;">Buat Akun Sekarang</button>
      </div>
    </div>
  <footer class="footer">
    <b-container>
      <b-row class="footer-content">
        <b-col v-for="(column, index) in columns" :key="index" lg="2" md="4" sm="6">
          <h4>{{ column.title }}</h4>
          <ul>
            <li v-for="(link, linkIndex) in column.links" :key="linkIndex">
              <a :href="link.url">{{ link.text }}</a>
            </li>
          </ul>
        </b-col>
        <b-col lg="2" md="4" sm="6">
          <h4>Ikuti Kami</h4>
          <ul class="social-icons-list">
            <li v-for="social in socialMediaLinks" :key="social.name">
              <a :href="social.link">
                <i :class="social.iconClass"></i>
                <img :src="social.imageURL" class="social-icon" />
              </a>
            </li>
          </ul>
          <img :src="imageURL" class="kominfo" />
        </b-col>
      </b-row>
    </b-container>
    <p style="text-align: center;">© 2023 PT Global Inovasi Siber Indonesia | Powered by <a href="https://www.cyberarmy.id/" style="color: rgb(36, 111, 198);">CyberArmyID</a></p>
  </footer>
</div>
</template>

<script>
export default {
  props: {
    showButton: {
      type: Boolean,
      default: true,
    },
    showFooterTop: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      socialMediaLinks: [
        {
          name: "Facebook",
          link: "https://www.facebook.com/cyberacademyid",
          iconClass: "fab fa-facebook",
          imageURL: require("~/assets/img/icon/ic_facebook.svg"),
        },
        {
          name: "Instagram",
          link: "https://www.instagram.com/cyberacademyid/",
          iconClass: "fab fa-instagram",
          imageURL: require("~/assets/img/icon/ic_instagram.svg"),
        },
        {
          name: "Linkedin",
          link: "https://www.linkedin.com/company/cyberacademyid/",
          iconClass: "fab fa-linkedin",
          imageURL: require("~/assets/img/icon/ic_linkedin.svg"),
        },
        {
          name: "Youtube",
          link: "https://www.youtube.com/@CyberAcademyID",
          iconClass: "fab fa-youtube",
          imageURL: require("~/assets/img/icon/ic_youtube.svg"),
        },
        {
          name: "Tiktok",
          link: "https://www.tiktok.com/@cyberacademyid",
          iconClass: "fab fa-tiktok",
          imageURL: require("~/assets/img/icon/ic_tiktok.svg"),
        },
      ],
      imageURL: require("~/assets/img/icon/kominfo.png"),
      columns: [
        {
          title: "Cyber Army Indonesia",
          links: [
            { text: "Rewards", url: "#" },
            { text: "Tentang Kami", url: "#" },
            { text: "Kontak", url: "#" },
            { text: "Affiliate Program", url: "#" },
            { text: "Blog", url: "#" },
            { text: "Cybercast", url: "#" },
          ],
        },
        {
          title: "Layanan Training",
          links: [
            { text: "Belajar Online", url: "#" },
            { text: "Corporate Training", url: "#" },
            { text: "Live Class", url: "#" },
            { text: "Verifikasi Sertifikat", url: "#" },
          ],
        },
        {
          title: "Cybersecurity Lab",
          links: [
            { text: "Capture The Flag", url: "#" },
            { text: "Exercise Lab", url: "#" },
            { text: "Leaderboards", url: "#" },
          ],
        },
        {
          title: "Lainnya",
          links: [
            { text: "Syarat & Ketentuan", url: "#" },
            { text: "Kebijakan Privasi", url: "#" },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.footer-top {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-top: -50px;
}
.footer {
  display: flex;
  flex-direction: column;
  color: white;
  margin-top: -30px;
  padding: 5px;
  z-index: 0;
}

.footer-content {
  justify-content: center;
}
.footer-top .row .col-12 {
  background-color: #223097;
  width: 100%; 
  padding: 40px;

}

.col-12 {
  text-align: center;
}

.col-12 h2 {
  font-size: 29px;
  font-weight: 700;
  margin-bottom: 30px;
  transition-duration: 1s;
}


ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: -1px;
  text-align: left;
}

h4 {
  font-size: 17px;
  font-weight: bolder;
  line-height: 30px;
  margin-top: 20px;
  text-align: left;
}

a {
  color: white;
  font-size: 15px;
  text-decoration: none;
}

a:hover {
  color: rgb(36, 111, 198);
  text-decoration: none;
}

.social-icon {
  width: 25px;
  height: 25px;
  border-radius: 0%;
}

.social-icons-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  align-items: center;
}

.kominfo {
  width: 90px;
  margin-top: 20px;
  border-radius: 0%;
  margin-left: 0px;
}

.footer p {
  font-size: 15px;
  text-align: center;
  margin-top: auto;
}

.custom-button {
  width: 100%;
  max-width: 250px;
  background-color: #2839bc;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
}

.custom-button:hover {
  background: #2070f2;
  color: white;
  transition-duration: 0.5s;
}
</style>
