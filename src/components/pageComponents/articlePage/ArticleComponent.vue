<template>    
    <div class="article__tags">
        <h3 class="article__tags-title">Tags</h3>
        <ArticleTagsComponent @setActiveTag="setActiveTag"/>
        <div class="article__blog-filter" v-if="activeTag">
                <ArticleItemComponent v-for="article in getArticleByTag(activeTag)" :key="article.id" :article="article"/>
        </div>
        <div class="article__blog-filter" v-else>
                <ArticleItemComponent v-for="article in articles" :key="article.id" :article="article"/>
        </div>
    </div> 
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import ArticleTagsComponent from '@/components/pageComponents/articlePage/ArticleTagsComponent.vue'
import ArticleItemComponent from '@/components/ArticleItemComponent.vue'
export default {
  name: 'ArticleComponent',
  components: {
    ArticleTagsComponent,
    ArticleItemComponent
  },
  data() {
        return {
            id: null,
            activeTag: null,
        };
    },
  methods: {
    setActiveTag(tagName) {
            if (this.activeTag && tagName === this.activeTag) {
                this.activeTag = null;
            } else {
                // this.id = null;
                // this.$router.push({ name: 'blog-post' });
                this.activeTag = tagName;
            }
        },
    },
  computed: {
        ...mapState(['articles','tags']),
        ...mapGetters(['getArticleByTag']),
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/_main.scss';
@import '@/assets/scss/_article.scss';
@import '@/assets/scss/_tag-visible.scss'
</style>