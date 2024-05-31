<template>
        <div class="banner-blog">
            <div class="banner-blog__banner-item">
                <img src="@/assets/img/Banner-blog-page.jpg" alt="banner" class="banner-blog__banner-photo">
            </div>
            <div class="banner-blog__banner-intro">
                <h3 class="banner-blog__blog-title">Articles & News</h3>
                <nav class="banner-blog__box-breadcrumbs">
                    <router-link class="banner-blog__blog-breadcrumbs" to="/">Home / </router-link>
                    <router-link class="banner-blog__blog-breadcrumbs" to="/blog">Blog</router-link>
                </nav>
            </div>
        </div>
</template>

<script>
export default {
  name: 'BlogPageBanner',
};
</script>

<style lang="scss">
@import '@/assets/scss/_banner-page.scss';
</style>