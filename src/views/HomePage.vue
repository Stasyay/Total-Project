<template>
  <div id="HomePage">
    <HomePageBanner />
    <HomePageProject />
    <HomePageCounters />
    <HomePageBlog />
  </div>
</template>

<script>
import HomePageBanner from '../components/pageComponents/homePage/HomePageBanner.vue'
import HomePageProject from '../components/pageComponents/homePage/HomePageProject.vue'
import HomePageCounters from '../components/pageComponents/homePage/HomePageCounters.vue'
import HomePageBlog from '../components/pageComponents/homePage/HomePageBlog.vue'

export default {
    name: 'HomePage',
    components: {
        HomePageBanner,
        HomePageProject,
        HomePageCounters,
        HomePageBlog,
    }
};
</script>
<style lang="scss">

@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_main.scss';

</style>