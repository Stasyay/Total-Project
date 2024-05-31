<template>
    <div class="post">
        <div class="post__subcontent">
            <div class="post__blog-img-box">
                <img class="post__blog-item-img" :src="require('@/assets/img/' + article.image)" alt="blog">
                <h3 class="post__tag">{{article.tag}}</h3>
            </div>
                    <p class="post__blog-item-text">{{ article.title }}</p>
                    <div class="post__box-date">
                        <p class="post__date">{{ article.date }} </p>
                        <a href="#">
                            <svg class="post__link-svg" width="52" height="53" viewBox="0 0 52 53"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle class="post__link-circle" cx="26" cy="26.267" r="26"
                                    fill="#F4F0EC" />
                                <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ArticleItemComponent',
  props: {
    article: {
        type: Object,
        default: () => {
            return {};
        },
    },
    },
};
</script>

<style lang="scss">
@import '@/assets/scss/_article-item.scss';

</style>