<template>
  <div class="dark-footer-top">
    <div class="row">
      <div v-if="showFooterTop" class="col-12 d-flex flex-column justify-content-center" style="margin-bottom: 50px; margin-top:50px;">
        <h2 style="color: white; font-weight: 600; padding: 30px;" class="text-center" data-aos="fade-up">Mulai Membangun Keahlian Cyber Security Kamu Hari ini!</h2>
        <button v-if="showButton" class="align-self-center custom-button" style="text-align: center;">Buat Akun Sekarang</button>
      </div>
    </div>
  <footer class="dark-footer">
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
          <div class="mb-3 w-100 d-inline-flex">
          <a
            href="https://www.linkedin.com/company/cyberacademyid"
            class="mr-1"
            target="_blank"
          >
            <div class="socialmedia">
              <svg
                aria-hidden="true"
                role="img"
                viewBox="0 0 448 512"
                style="padding: 25%;"
              >
                <path
                  fill="#fff"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                />
              </svg>
            </div>
          </a>
          <a
            href="https://www.instagram.com/cyberacademyid"
            class="mr-1"
            target="_blank"
          >
            <div class="socialmedia">
              <svg
                aria-hidden="true"
                role="img"
                viewBox="0 0 448 512"
                style="padding: 20%;"
              >
                <path
                  fill="#fff"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
            </div>
          </a>
          <a
            href="https://www.youtube.com/channel/UCWVd4P25DU8jkaJKjkFIffg?view_as=subscriber"
            class="mr-1"
            target="_blank"
          >
            <div class="socialmedia">
              <svg
                aria-hidden="true"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                style="padding: 20%;"
              >
                <path
                  fill="#fff"
                  d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                ></path>
              </svg>
            </div>
          </a>
          <a
            href="https://web.facebook.com/cyberacademyid"
            class="mr-1"
            target="_blank"
          >
            <div class="socialmedia">
              <svg
                aria-hidden="true"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                style="padding: 30%;"
              >
                <path
                  fill="#fff"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  class=""
                ></path>
              </svg>
            </div>
          </a>
          <a
            href="https://www.tiktok.com/@cyberacademyid"
            class="mr-1"
            target="_blank"
          >
            <div class="socialmedia">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                style="padding: 20%;"
              >
                <path
                  fill="#fff"
                  d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                />
              </svg>
            </div>
          </a>
        </div>
          <img :src="imageURL" class="kominfo" />
        </b-col>
      </b-row>
    </b-container>
    <p style="text-align: center; margin-top: 20px; padding: 0px 20px;">© 2023 PT Global Inovasi Siber Indonesia | Powered by <a href="https://www.cyberarmy.id/" style="color: #2361fd;">CyberArmyID</a></p>
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
.dark-footer-top {
  background-color: #121926;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  /* padding: 20px; */
}
.dark-footer {
  width: 100%;
  background-color: #161D2A;
  display: flex;
  flex-direction: column;
  color: white;
  /* margin-top: 30px; */
  padding: 5px;
  z-index: 0;
}

.footer-content {
  margin-left: 50px;
  margin-top: 50px;
  justify-content: center;
}
.footer-top .row .col-12 {
  background-color: #F6F8FF;
  width: 100%; 
  padding: 50px;
}

.col-12 {
  text-align: center;
}

.col-12 h2 {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;
  transition-duration: 1s;
}

.socialmedia {
  background-color: #154FE3;
  border-radius: 50%;
  width: 32px;
  height: 32px;
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
  font-size: 14px;
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
  width: 100px;
  height: 40px;
  margin-top: 10px;
  border-radius: 0%;
  margin-left: 0px;
}

.footer p {
  font-size: 15px;
  text-align: center;
  margin-top: auto;
  margin-left: 20px;
}

.custom-button {
  width: 100%;
  max-width: 250px;
  background-color: #154FE3;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  margin-top: -15px;
}

.custom-button:hover {
  background: #2070f2;
  color: white;
  transition-duration: 0.5s;
}
</style>