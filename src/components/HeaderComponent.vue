<template>
    <header class="header center">
        <nav class="header__left">
            <router-link to="/"><LogoComponent /></router-link>
        </nav>
        <nav class="header__right">
            <router-link class="header__link" to="/">Home</router-link> 
            <router-link class="header__link" to="/Project">Project</router-link> 
            <router-link class="header__link" to="/Blog">Blog</router-link> 
        </nav>
    </header>
</template>

<script>
import LogoComponent from '@/components/LogoComponent.vue'

export default {
  name: 'HeaderComponent',
  components: {
    LogoComponent
  }
};
</script>

<style lang="scss">
// @import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_header.scss';

</style>