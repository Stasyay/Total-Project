<template>
    <div class="banner center">
        <div class="banner__banner-item">
            <div class="wrapper">
                <h1 class="banner__banner-title">Let Your Home
                Be Unique</h1>
            <p class="banner__banner-text">There are many variations of the passages of
                lorem Ipsum fromavailable, majority.</p>
            <router-link class="banner__banner-btn" to="/GetStarted">Get Started <svg width="18.000000" height="16.000000"
                viewBox="0 -2 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs />
                <path id="Vector" d="M1 7.43L14.72 7.29M9.61 0.91L16.14 7.43L9.48 14.08" stroke="#CDA274"
                    stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" />
                </svg></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomePageBanner'
}
</script>

<style lang="scss">
@import '@/assets/scss/_banner-big.scss';
</style>