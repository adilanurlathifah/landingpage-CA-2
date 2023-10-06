<template>
    <div class="benefit-container">
      <h2>{{ title }}</h2>
      <p>{{ subtitle }}</p>
      <b-container fluid>
        <b-row>
          <b-col cols="12" md="6">
            <div class="grid-item d-flex-1">
              <img src="~/assets/thumbnail-benefit.png" class="mr-3" />
              <div class="grid-item-text">
                <h3>Kelas Berbahasa Indonesia</h3>
                <p>Setiap Materi disampaikan dalam Bahasa Indonesia</p>
              </div>
            </div>
          </b-col>
          <b-col cols="12" md="6">
            <div class="grid-item d-flex-2">
              <img src="~/assets/thumbnail-benefit-2.png" class="mr-3" />
              <div class="grid-item-text">
                <h3>Cybersecurity Lab</h3>
                <p>Kamu dapat berlatih secara teknis dengan CTF Lab dan Exercise Lab.</p>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" md="6">
            <div class="grid-item d-flex-1">
              <img src="~/assets/thumbnail-benefit-3.png" class="mr-3" />
              <div class="grid-item-text">
                <h3>Waktu Belajar Fleksibel</h3>
                <p>Kamu dapat belajar Kapanpun dan dimanapun dengan akses selamanya</p>
              </div>
            </div>
          </b-col>
          <b-col cols="12" md="6">
            <div class="grid-item d-flex-2">
              <img src="~/assets/thumbnail-benefit-4.png" class="mr-3" />
              <div class="grid-item-text">
                <h3>Diskusi dengan Pengajar</h3>
                <p>Diskusikan kesulitan Kamu dengan Pengajar sampai bisa</p>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" md="6">
            <div class="grid-item d-flex-1">
              <img src="~/assets/thumbnail-benefit-5.png" class="mr-3" />
              <div class="grid-item-text">
                <h3>Sertifikat Penyelesaian</h3>
                <p>
                  Sertifikat ini tersedia di Belajar Online dengan menyelesaikan semua
                  modul, kuis dan Ujian
                </p>
              </div>
            </div>
          </b-col>
          <b-col cols="12" md="6">
            <div class="grid-item d-flex-2">
              <img src="~/assets/thumbnail-benefit-6.png" class="mr-3" />
              <div class="grid-item-text">
                <h3>Sertifikat Kompetensi</h3>
                <p>
                  Sertifikat ini tersedia di Live Class dengan menyelesaikan semua Modul,
                  Tugas, Kuis dan Ujian
                </p>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
</template>
  
<script>
export default {
props: {
    title: {
    type: String,
    required: true
    },
    subtitle: {
    type: String,
    required: true
    }
}
}
</script>

<style scoped>
.benefit-container {
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}

.benefit-container h2 {
font-size: 24px;
font-weight: bolder;
line-height: 35px;
margin-top: -200px;
}

.benefit-container p {
font-size: 15px;
line-height: 24px;
}

.mr-3 {
width: 50px;
height: 60px;
}

.grid-item.d-flex-1 {
display: flex;
justify-content: center;
align-items: center;
width: 70%;
max-height: 120px;
flex-direction: row;
background-color: #fff;
border-radius: 10px;
padding: 10px;
margin-top: 20px;
margin-left: 185px;
}

.grid-item.d-flex-2 {
display: flex;
justify-content: center;
align-items: center;
width: 70%;
max-height: 120px;
flex-direction: row;
background-color: #fff;
border-radius: 10px;
padding: 10px;
margin-top: 20px;
margin-right: 185px;
}

.grid-item-text h3 {
font-size: 16px;
font-weight: bolder;
text-align: left;
margin-top: 10px;
}

.grid-item-text p {
font-size: 15px;
text-align: left;
margin-top: 5px;
}
</style>