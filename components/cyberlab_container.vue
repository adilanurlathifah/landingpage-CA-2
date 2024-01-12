<template>
    <div class="cyberlab-ft-container">
        <h2 style="text-align: center; padding-top: 50px;">Mulai Berlatih dan Ikuti Tantangan Lab yang Menyenangkan</h2>
        <div class="container p-md-5 p-2">
            <div class="row g-2 g-md-4 mx-auto py-4 justify-content-center">
                <div class="col-12 col-md-6">
                    <b-card no-body class="card-container overflow-hidden no-shadow h-100 py-lg-0 py-sm-0">
                        <b-row class="px-2">
                            <b-col md="2" class="py-sm-4 my-auto">
                                <b-card-img
                                    src="~/assets/img/cyberlab/ctf.svg"
                                    style="max-height:100px; margin-left: 20px; width:auto; max-width:100%"
                                >
                                </b-card-img>
                            </b-col>
                            <b-col md="10" class="py-0">
                                <b-card-body>
                                <h4>CTF</h4>
                                <p>
                                    Kamu dapat menelusuri semua CTF dari mulai tingkat Easy, Medium hingga Hard.
                                </p>
                                </b-card-body>
                            </b-col>
                        </b-row>
                    </b-card>
                </div>
                <div class="col-12 col-md-6">
                    <b-card no-body class="card-container overflow-hidden no-shadow h-100 py-lg-0 py-sm-0">
                        <b-row class="px-2">
                            <b-col md="2" class="py-sm-4 my-auto">
                                <b-card-img
                                    src="~/assets/img/cyberlab/poin.svg"
                                    style="max-height:100px; margin-left: 20px; width:auto; max-width:100%"
                                >
                                </b-card-img>
                            </b-col>
                            <b-col md="10" class="py-0">
                                <b-card-body>
                                <h4>Poin dan XP</h4>
                                <p>
                                    Dapatkan Poin dan XP setiap Flag yang ditemukan.
                                </p>
                                </b-card-body>
                            </b-col>
                        </b-row>
                    </b-card>
                </div>
                <div class="col-12 col-md-6">
                    <b-card no-body class="card-container overflow-hidden no-shadow h-100 py-lg-0 py-sm-0">
                        <b-row class="px-2">
                            <b-col md="2" class="py-sm-4 my-auto">
                                <b-card-img
                                    src="~/assets/img/cyberlab/flag.svg"
                                    style="max-height:100px; margin-left: 20px; width:auto; max-width:100%"
                                >
                                </b-card-img>
                            </b-col>
                            <b-col md="10" class="py-0">
                                <b-card-body>
                                <h4>Flag</h4>
                                <p>
                                    Temukan semua flag yang tersedia disemua CTF Lab dan raih setiap poinnya.
                                </p>
                                </b-card-body>
                            </b-col>
                        </b-row>
                    </b-card>
                </div>
                <div class="col-12 col-md-6">
                    <b-card no-body class="card-container overflow-hidden no-shadow h-100 py-lg-0 py-sm-0">
                        <b-row class="px-2">
                            <b-col md="2" class="py-sm-4 my-auto">
                                <b-card-img
                                    src="~/assets/img/cyberlab/leaderboard.svg"
                                    style="max-height:100px; margin-left: 20px; width:auto; max-width:100%"
                                >
                                </b-card-img>
                            </b-col>
                            <b-col md="10" class="py-0">
                                <b-card-body>
                                <h4>Leaderboard</h4>
                                <p>
                                    Kamu bisa Raih Peringkat dan Reputasi.
                                </p>
                                </b-card-body>
                            </b-col>
                        </b-row>
                    </b-card>
                </div>
                <div class="col-12 col-md-6">
                    <b-card no-body class="card-container overflow-hidden no-shadow h-100 py-lg-0 py-sm-0">
                        <b-row class="px-2">
                            <b-col md="2" class="py-sm-4 my-auto">
                                <b-card-img
                                    src="~/assets/img/cyberlab/exerciselabs.svg"
                                    style="max-height:100px; margin-left: 20px; width:auto; max-width:100%"
                                >
                                </b-card-img>
                            </b-col>
                            <b-col md="10" class="py-0">
                                <b-card-body>
                                <h4>Exercise Labs</h4>
                                <p>
                                    Kamu dapat berlatih dengan berbagai Server dan Aplikasi rentan yang tersedia di Lab ini.
                                </p>
                                </b-card-body>
                            </b-col>
                        </b-row>
                    </b-card>
                </div>
                <div class="col-12 col-md-6">
                    <b-card no-body class="card-container overflow-hidden no-shadow h-100 py-lg-0 py-sm-0">
                        <b-row class="px-2">
                            <b-col md="2" class="py-sm-4 my-auto">
                                <b-card-img
                                    src="~/assets/img/cyberlab/notes.svg"
                                    style="max-height:100px; margin-left: 20px; width:auto; max-width:100%"
                                >
                                </b-card-img>
                            </b-col>
                            <b-col md="10" class="py-0">
                                <b-card-body>
                                <h4>Notes</h4>
                                <p>
                                    Biar engga lupa, Kamu bisa mencatat setiap ide dan teknik yang kamu dapatkan di Exercise Lab.
                                </p>
                                </b-card-body>
                            </b-col>
                        </b-row>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style>
/* .container {
    margin-top: -50px;
} */

.card-container {
    background-color: var(--card-color);
}

.cyberlab-ft-container {
    width: 100%;
    background-color: var(--bg-container);
    margin-bottom: -20px;
}

.cyberlab-ft-container h2 {
    font-size: 30px;
    font-weight: bolder;
    color: var(--text-color);
}
.cyberlab-ft-container h4 {
    margin-top: 15px;
    color: var(--text-color);
    font-weight: 700;
    font-size: 20px;
}

.cyberlab-ft-container p {
    color: white;
    font-size: 16px;
}

@include media-breakpoint-only(md, xl) { 
    .cyberlab-ft-container {
        height: 500px;
    }

    .container {
        margin-top: 50px;
    }
}
</style>