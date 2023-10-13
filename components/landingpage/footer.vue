<template>
  <div class="footer-top">
    <div class="row">
      <div v-if="showFooterTop" class="col-xs-12 col-md-9" style="margin-bottom: 100px;">
        <h2 data-aos="fade-up">Mulai Membangun Keahlian Cyber Security Kamu Hari ini!</h2>
        <button v-if="showButton" class="custom-button">Buat Akun Sekarang</button>
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
    <p>© 2023 PT Global Inovasi Siber Indonesia | Powered by <a href="https://www.cyberarmy.id/" style="color: rgb(36, 111, 198);">CyberArmyID</a></p>
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
          imageURL: require("~/assets/ic_facebook.svg"),
        },
        {
          name: "Instagram",
          link: "https://www.instagram.com/cyberacademyid/",
          iconClass: "fab fa-instagram",
          imageURL: require("~/assets/ic_instagram.svg"),
        },
        {
          name: "Linkedin",
          link: "https://www.linkedin.com/company/cyberacademyid/",
          iconClass: "fab fa-linkedin",
          imageURL: require("~/assets/ic_linkedin.svg"),
        },
        {
          name: "Youtube",
          link: "https://www.youtube.com/@CyberAcademyID",
          iconClass: "fab fa-youtube",
          imageURL: require("~/assets/ic_youtube.svg"),
        },
        {
          name: "Tiktok",
          link: "https://www.tiktok.com/@cyberacademyid",
          iconClass: "fab fa-tiktok",
          imageURL: require("~/assets/ic_tiktok.svg"),
        },
      ],
      imageURL: require("~/assets/kominfo.png"),
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
  color: #161f62;
  margin-top: -30px;
  padding: 5px;
  z-index: 0;
}
.footer-top .row .col-xs-12.col-md-9 {
  background-color: #F6F8FF;
  width: 100%; 
  padding: 40px;
  margin-left: 160px;
}

.col-xs-12.col-md-9 {
  text-align: center;
}

.col-xs-12.col-md-9 h2 {
  font-size: 29px;
  font-weight: 700;
  margin-bottom: 30px;
  transition-duration: 1s;
}

.footer-content {
  margin-left: 150px;
  margin-right: -50px;
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
  color: #161f62;
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

.footer-top .row .col-xs-12.col-md-9 .custom-button {
  background-color: #2839bc;
  color: white;
  border: 0.75px solid #2839bc;
  border-radius: 5px;
  padding: 10px 60px;
  cursor: pointer;
  font-size: 18px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
}

.footer-top .row .col-xs-12.col-md-9 .custom-button:hover {
  background: #2070f2;
  color: white;
  transition-duration: 0.5s;
}
</style>
