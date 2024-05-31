<template>
<div class="category">
  <button class="category__filter" v-for="category in categories" :key="category.id" 
  @click="toggleCategoryActive(category)" :class="{ 'category__filter-active': category.title === activeCategory }">
  {{ category.title }}</button>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ProjectCategoriesComponent',

  data() {
        return {
          activeCategory: false,
        };
    },
  methods: {
    toggleCategoryActive(category) {
      // this.$router.push({ name: 'project' });
      if (this.activeCategory && category.title === this.activeCategory) {
        this.activeCategory = false;
      } else {
        this.activeCategory = category.title;
      }
        this.$emit('setActiveCategory', category.title);
    },
  },
  computed: {
    ...mapState(['categories']),
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/_category.scss';
</style>