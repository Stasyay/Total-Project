<template>
    <div id="ProjectDetailsPage">
      <ProjectDetailsPageBanner />
      <ProjectDetails />
      <SliderComponent />
    </div>
  </template>
  
  <script>
  
  import ProjectDetailsPageBanner from '../components/pageComponents/projectDetailsPage/ProjectDetailsPageBanner.vue'
  import ProjectDetails from '../components/pageComponents/projectDetailsPage/ProjectDetails.vue'
  import SliderComponent from '../components/SliderComponent.vue'
  
  export default {
    name: 'ProjectDetailsPage',
  
    components: {
          ProjectDetailsPageBanner,
          ProjectDetails,
          SliderComponent,
      }

  };
  </script>
  
  <style lang="scss">
  @import '@/assets/scss/_main.scss';
 
  </style>