<template>
    <div class="article center">

    <article class="article__article-content">
        <h1 class="article__article-title">
            Let’s Get Solution for Building
            Construction Work
        </h1>

        <img src="@/assets/img/article1.png" alt="photo">

        <div class="article__article-date">
            <p class="article__date">26 December,2022 </p>
            <nav class="article__article-box-breadcrumbs">
                <a href="index.html" class="article__article-breadcrumbs">Interior / </a>
                <a href="blog.html" class="article__article-breadcrumbs"> Home / </a>
                <a href="blog.html" class="article__article-breadcrumbs"> Decore</a>
            </nav>
        </div>

        <p class="article__article-text">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to
            popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration in some form, by injecthumour, or randomised words which don't look even
            slightly believable. <br> <br>

            Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to
            repeat predefined chunks as necessary.
        </p>

        <img class="article__article-quotes" src="@/assets/img/Quotes.png" alt="photo">

        <h1 class="article__article-title">
            Design sprints are great
        </h1>

        <p class="article__article-text">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to
            popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered.
        </p>

        <ol class="article__article-list">
            <li class="article__article-li article__article-text">Contrary to popular belief.There are many
                variations of passages of Lorem Ipsum available, but
                the majority have suffered.</li>
            <li class="article__article-li article__article-text">Contrary to popular belief.There are many
                variations of passages of Lorem Ipsum available, but
                the majority have suffered.</li>
            <li class="article__article-li article__article-text">Contrary to popular belief.There are many
                variations of passages of Lorem Ipsum available, but
                the majority have suffered.</li>
        </ol>

        <img class="article__article-photo" src="@/assets/img/article1_1.png" alt="photo">

        <p class="article__article-text">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to
            popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered.
        </p>
    </article>

    <ArticleComponent />

    </div>
</template>

<script>
import ArticleComponent from '../articlePage/ArticleComponent.vue'
export default {
  name: 'ArticlePageArticle',
  components: {
    ArticleComponent,
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/_article-page.scss';
@import '@/assets/scss/_main.scss';
</style>