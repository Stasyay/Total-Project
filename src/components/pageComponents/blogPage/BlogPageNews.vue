<template>
        <div class="news center">
            <div class="news__blog-heading">
                <h3 class="news__blog-title">Articles & News</h3>
            </div>
            <div class="news__blog-items">
                <ArticleItemComponent v-for="article in articles" :key="article.id" :article="article"/>
            </div>        
        </div>
</template>

<script>
import { mapState } from 'vuex';
import ArticleItemComponent from '@/components/ArticleItemComponent.vue'

export default {
  name: 'BlogPageNews',
  components: {
    ArticleItemComponent
  },
  computed: {
    ...mapState(['articles']),
    }, 
};
</script>

<style lang="scss">
@import '@/assets/scss/_news.scss';

</style>