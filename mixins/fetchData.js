export default { 
    data() {
      return {
        courses: [],
        liveClass: [],
        defaultThumbnail: '~/assets/img/no-image.png'
      }
    },
    computed: {
      displayedCourses() {
        return this.courses.slice(0, 6);
      },
      displayedClass() {
        return this.liveClass.slice(0, 6);
      }
    },
    methods: {
      async fetchLiveClass() {
        const response = await this.$axios.$get('https://api.cyberwarrior.id/api/latest-live-classes')
        this.liveClass = response.data
      },
      async fetchLatestCourses() {
        const response = await this.$axios.$get('https://api.cyberwarrior.id/api/latest-courses')
        this.courses = response.data
      }
    },
    mounted() {
      this.fetchLatestCourses(),
      this.fetchLiveClass()
    }
}