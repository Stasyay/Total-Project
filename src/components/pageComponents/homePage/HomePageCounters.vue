<template>
        <div class="counters center">
            <div class="counters__counter-item">
                <p class="counters__count">12</p>
                <p class="counters__counter-dsc">Years Of Experiance</p>
            </div>
            <svg width="1" height="130" viewBox="0 0 1 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" y1="2.18557e-08" x2="0.499994" y2="130" stroke="#CDA274" />
            </svg>
            <div class="counters__counter-item">
                <p class="counters__count">85</p>
                <p class="counters__counter-dsc">Success Project</p>
            </div>
            <svg width="1" height="130" viewBox="0 0 1 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" y1="2.18557e-08" x2="0.499994" y2="130" stroke="#CDA274" />
            </svg>
            <div class="counters__counter-item">
                <p class="counters__count">15</p>
                <p class="counters__counter-dsc">Active Project</p>
            </div>
            <svg width="1" height="130" viewBox="0 0 1 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" y1="2.18557e-08" x2="0.499994" y2="130" stroke="#CDA274" />
            </svg>
            <div class="counters__counter-item">
                <p class="counters__count">95</p>
                <p class="counters__counter-dsc">Happy Customers</p>
            </div>
        </div>
</template>

<script>
export default {
  name: 'HomePageCounters',
};
</script>

<style lang="scss">
@import '@/assets/scss/_counters.scss';
</style>