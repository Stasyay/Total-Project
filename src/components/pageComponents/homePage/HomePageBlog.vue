<template>
  <div class="blog center">
            <div class="blog__blog-heading">
                <h3 class="blog__blog-title">Articles & News</h3>
                <p class="blog__blog-text">It is a long established fact that a reader will be distracted by the of
                    readable
                    content
                    of a page when lookings at its layouts the points of using.</p>
            </div>
            <div class="blog__blog-items">
                <ArticleItemComponent v-for="article in articles" :key="article.id" :article="article"/>
            </div>
        </div>
</template>

<script>

import { mapState } from 'vuex';
import ArticleItemComponent from '@/components/ArticleItemComponent.vue'
export default {
    name: 'HomePageBlog',
    components: {
    ArticleItemComponent
  },
    computed: {
    ...mapState(['articles']),
    }, 
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_main.scss';
@import '@/assets/scss/_home-blog.scss';
@import '@/assets/scss/_three-items.scss';

</style>