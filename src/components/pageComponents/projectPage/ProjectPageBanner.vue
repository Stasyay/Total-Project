<template>
        <div class="banner-blog">
            <div class="banner-blog__banner-item">
                <img src="@/assets/img/Banner-project-page.png" alt="banner" class="banner-blog__banner-photo">
            </div>
            <div class="banner-blog__banner-intro">
                <h3 class="banner-blog__blog-title">Our Project</h3>
                <nav class="banner-blog__box-breadcrumbs">
                    <router-link to="/" href="index.html" class="banner-blog__blog-breadcrumbs">Home / </router-link>
                    <router-link to="/project" class="banner-blog__blog-breadcrumbs">Project</router-link>
                </nav>
            </div>
        </div>
</template>

<script>
export default {
  name: 'ProjectPageBanner',
};
</script>

<style lang="scss">
@import '@/assets/scss/_banner-page.scss';
</style>