<template>
  <div class="article__tags-btn">
    <button class="article__tag" v-for="tag in tags"
                :key="tag.id"
                @click="toggleTagActive(tag)"
                :class="{'article__tag_active': tag.title === activeTag }">{{ tag.title }}</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ArticleTagsComponent',
  data() {
        return {
            activeTag: false,
        };
    },

    methods: {
        toggleTagActive(tag) {
            // this.$router.push({ name: 'blog-post' });
            if (this.activeTag && tag.name === this.activeTag) {
                this.activeTag = false;
            } else {
                this.activeTag = tag.title;
            }
            this.$emit('setActiveTag', tag.title);
        },
    },
    computed: {
        ...mapState(['tags']),
    },  
};
</script>

<style lang="scss">
@import '@/assets/scss/_tag.scss';
</style>