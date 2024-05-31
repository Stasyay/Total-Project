<template>
    <div class="project center">
        <div class="project__filter-bnt">
            <ProjectCategoriesComponent @setActiveCategory="setActiveCategory"/>
        </div>
        <div class="project__box-items" v-if="activeCategory">
                <ProjectItemComponent v-for="project in getProjectsByCategory(activeCategory)" :key="project.id" :project="project" />
        </div>
        <div v-else>
                <div class="project__box-items">             
                    <ProjectItemComponent v-for="project in paginatedCatalog" 
                    :key="project.id" 
                    :project="project" />
                </div>
                <div class="pagination-box">
                    <nav class="pagination" v-for="page in totalPages" 
                        :key="page"                       
                        :class="{
                            pagination__pagination_active: page == currentPage,
                        }"
                        >
                <router-link :to="`/project/${page}`" class="pagination__pagination-link"> <svg    class="pagination__pagination-svg" width="52.000000"
                        height="52.000000" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <circle class="circle" cx="26.000000" cy="26.000000" r="26.000000" stroke="#CDA274"
                            stroke-opacity="1.000000" stroke-width="1.000000" />
                        <text x="22" y="32" class="pagination__pagination-link"> {{ page }}
                        </text>
                    </svg></router-link>
                </nav>
        </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapGetters } from 'vuex';
import ProjectCategoriesComponent from '@/components/pageComponents/projectPage/ProjectCategoriesComponent.vue'
import ProjectItemComponent from '@/components/ProjectItemComponent.vue'
// import PaginationComponent from '@/components/PaginationComponent.vue'
export default {
  name: 'ProjectPageProject',
  components: {
    // PaginationComponent,
    ProjectItemComponent,
    ProjectCategoriesComponent
  },
  data() {
        return {
            activeCategory: null,
            perPage: 6,
        };
    },
  methods: {
      setActiveCategory(categoryName) {
        if (this.activeCategory && categoryName === this.activeCategory) {
            this.activeCategory = null;
        } else {
            this.activeCategory = categoryName;
        }
    },
},
  computed: {
    ...mapState(['projects']),
    ...mapGetters(['getProjectsByCategory', 'paginatedProjects', 'getProjectsTotalPages']),

    currentPage() {
            return this.$route.params.page || 1;
        },
    totalPages() {            
        return this.getProjectsTotalPages(this.perPage);
    },    
    paginatedCatalog() {
        const { currentPage, perPage } = this;
        return this.paginatedProjects(currentPage, perPage);
    },
    },
}
</script>

<style lang="scss">
@import '@/assets/scss/_project.scss';

</style>