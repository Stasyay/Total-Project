<template>
  <div id="app">
    <HeaderComponent />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  },
}
</script>

<style lang="scss">
#app {

@import '@/assets/scss/_vars.scss';
// @import '@/assets/scss/_main.scss';
}
</style>
