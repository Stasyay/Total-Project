<template>
        <div class="project center">
            <div class="project__project-heading">
                <h1 class="project__project-title"> Follow Our Projects </h1>
                <p class="project__project-text">It is a long established fact that a reader will be distracted by the
                    of readable
                    content of
                    page lookings at its layouts points.</p>
            </div>
            <div class="project__box-items">
                <ProjectItemComponent v-for="(project, index) in getLimitProjects(4)" :key="project.id" :classStr="`project-item__project-img_${index}`" :project="project"/>
               
            </div>
        </div>
</template>

<script>
import { mapState,  mapGetters } from 'vuex';
import ProjectItemComponent from '@/components/ProjectItemComponent.vue'
export default {
  name: 'HomePageProject',
  components: {
     ProjectItemComponent
  },

  computed: {
    ...mapState(['projects']),
    ...mapGetters(['getLimitProjects']),
    },
}

</script>

<style lang="scss">
@import '@/assets/scss/_home-project.scss';
</style>