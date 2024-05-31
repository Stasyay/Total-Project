<template>
    <footer class="footer center">
            <div class="footer__footer-left">
                <router-link to="/"><LogoComponent /></router-link>
                <p class="footer__footer-text">It is a long established fact that a reader will be distracted
                    lookings.</p>
            </div>
            <nav class="footer__footer-middle">
                <h3 class="footer__footer-title">Pages</h3>
                <router-link class="footer__footer-text" to="/">Home</router-link>
                <router-link class="footer__footer-text" to="/Project">Project</router-link>
                <router-link class="footer__footer-text" to="/Blog">Blog</router-link>
            </nav>
            <div class="footer__footer-right">
                <h3 class="footer__footer-title">Contact</h3>
                <p class="footer__footer-text">55 East Birchwood Ave. Brooklyn, New York 11201 </p>
                <p class="footer__footer-text">contact@interno.com</p>
                <p class="footer__footer-text">(123) 456 - 7890</p>
            </div>
        </footer>
</template>

<script>
import LogoComponent from '@/components/LogoComponent.vue'

export default {
  name: 'FooterComponent',
  components: {
    LogoComponent
  }
};
</script>

<style lang="scss">

@import '@/assets/scss/_footer.scss';

</style>