<template>
    <div id="BlogPage">
      <BlogPageBanner />
      <BlogPageLatestBlog />
      <BlogPageNews />
    </div>
  </template>
  
  <script>
  
  import BlogPageBanner from '../components/pageComponents/blogPage/BlogPageBanner.vue'
  import BlogPageLatestBlog from '../components/pageComponents/blogPage/BlogPageLatestBlog.vue'
  import BlogPageNews from '../components/pageComponents/blogPage/BlogPageNews.vue'
  
  export default {
    name: 'BlogPage',
  
    components: {
          BlogPageBanner,
          BlogPageLatestBlog,
          BlogPageNews,
      }
  };
  </script>
  
  <style lang="scss">

@import '@/assets/scss/_main.scss';
  
  </style>