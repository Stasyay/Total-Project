<template>
  <div id="ApticlePage">
    <ArticlePageBanner />
    <ArticlePageArticle />  
  </div>
</template>

<script>
import ArticlePageBanner from '../components/pageComponents/articlePage/ArticlePageBanner.vue'
import ArticlePageArticle from '../components/pageComponents/articlePage/ArticlePageArticle.vue'

export default {
  name: 'ArticlePage',
  components: {
        ArticlePageBanner,
        ArticlePageArticle,
    }
};
</script>

<style lang="scss">

@import '@/assets/scss/_main.scss';
</style>