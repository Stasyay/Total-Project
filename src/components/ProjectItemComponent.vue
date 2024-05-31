<template>
    <div class="project-item">
    <img class="project-item__img" :class="$attrs.classStr" :src="require('@/assets/img/' + project.image)" alt="our project">
        <div class="project-item__footer">
            <div>
                <h3 class="project-item__title">{{ project.title }}</h3>
                    <nav class="project-item__box-breadcrumbs">
                        <a href="#" class="project-item__blog-breadcrumbs">Decor / </a>
                        <a href="#" class="project-item__blog-breadcrumbs">Artchitecture</a>
                    </nav>
            </div>
            <router-link
                :to="`/project-details/${project.id}`"
            >
                <svg width="70.000000" height="70.000000" viewBox="0 0 70 70" fill="none"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs />
                    <circle class="project-item__link-circle" cx="35.000000" cy="35.000000" r="35.000000"
                                transform="rotate(-180 35 35)" fill="#F4F0EC" fill-opacity="1.000000" />
                    <path id="Vector" d="M32 44L40 35L32 26" stroke="#292F36" stroke-opacity="1.000000"
                                stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round" />
                </svg>
            </router-link>
        </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectItemComponent',
  props: {
    project: {
        type: Object,
        default: () => {
            return {};
        },        
    },
    },

};
</script>

<style lang="scss">
@import '@/assets/scss/_project-item.scss';
</style>