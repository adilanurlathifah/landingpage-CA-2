<template>
    <div>
        <Nav/>
        <Header 
            :title="pageTitle"
            :subtitle="pageSubtitle"
            :pageImage="pageImage"
            :showButton="false"
            theme="light"
        />
        <Footer theme="light" />
    </div>
</template>

<script>
import Nav from '~/components/landingpage/Nav.vue';
import Header from '~/components/landingpage/Header.vue';
import Footer from '~/components/landingpage/Footer.vue';

export default {
    components: { Nav, Header, Footer },
    data() {
        return {
            pageTitle: 'Jobs',
            pageSubtitle: 'Pelajari dan Tingkatkan Kemampuanmu dengan mengikuti\nExercise Lab dan Capture The Flag',
            pageImage: require("~/assets/img/cyberlab.png"),
        }
    },
    auth: false
}
</script>

<style>

h1 {
    display: flex;
    background-color: rgb(63, 106, 186);
    justify-content: center;
    padding: 200px;
    font-weight: 700;
    color: white;
}
</style>