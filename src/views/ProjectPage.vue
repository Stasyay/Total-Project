<template>
  <div id="ProjectPage">
    <ProjectPageBanner />   
    <ProjectPageProject />
  </div>
</template>

<script>
import ProjectPageBanner from '../components/pageComponents/projectPage/ProjectPageBanner.vue'
import ProjectPageProject from '../components/pageComponents/projectPage/ProjectPageProject.vue'

export default {
  name: 'ProjectPage',
  components: {
        ProjectPageBanner,
        ProjectPageProject,
    }
};
</script>

<style lang="scss">

@import '@/assets/scss/_main.scss';
</style>