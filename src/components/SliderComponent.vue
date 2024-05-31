<template>
      <div class="slider-box center">
        <div class="slider-box__slider">
          <div class="slider-box__slide" v-for="(slide, index) in projectsForGallery" :key="index" v-bind:style="{ transform: 'translateX(' + (projectsForGallery.findIndex(slide => slide.isActive) * -100) + '%)' }">
            <img :src="require(`@/assets/img/${slide.fileName}`)" />
          </div>
        </div>
        <!-- <div class="slider-box__controls">
            <svg class="slider-box__controls-item slider-box__controls-item-prev" @click="prevSlide" xmlns="http://www.w3.org/2000/svg" fill="#F4F0EC" viewBox="0 0 24 24" width="512" height="512"><path d="M13.422,19.061,8.129,13.768a2.5,2.5,0,0,1,0-3.536l5.293-5.293,2.121,2.122L10.6,12l4.939,4.939Z"/></svg>

            <svg class="slider-box__controls-item slider-box__controls-item-next" @click="nextSlide" xmlns="http://www.w3.org/2000/svg" fill="#F4F0EC" viewBox="0 0 24 24" width="512" height="512"><path d="M11.164,19.061,9.043,16.939,13.982,12,9.043,7.061l2.121-2.122,5.293,5.293a2.5,2.5,0,0,1,0,3.536Z"/></svg>
        </div> -->
      </div>
  </template>
  
  <script>
  
  export default {
    name: 'SliderComponent',
    data() {
      return {
        projectsForGallery: [
          { fileName: 'Project1.png', isActive: true },
          { fileName: 'Project2.png', isActive: false },
          { fileName: 'Project3.png', isActive: false },
          { fileName: 'Project-slider.png', isActive: false },
        ]
      }
    },
    computed: {    
      activeSlide() {
        return this.projectsForGallery.find(slide => slide.isActive);
      }
    },
    mounted() {
      setInterval(() => {
        this.nextSlide();
      }, 5000);
    },
    methods: {
      nextSlide() {
        const lastSlideIndex = this.projectsForGallery.length - 1;
        const currentSlideIndex = this.projectsForGallery.findIndex(slide => slide.isActive);
        const nextSlideIndex = currentSlideIndex === lastSlideIndex ? 0 : currentSlideIndex + 1;
        this.projectsForGallery[currentSlideIndex].isActive = false;
        this.projectsForGallery[nextSlideIndex].isActive = true;
      },
      prevSlide() {
        const lastSlideIndex = this.projectsForGallery.length - 1;
        const currentSlideIndex = this.projectsForGallery.findIndex(slide => slide.isActive);
        const prevSlideIndex = currentSlideIndex === 0 ? lastSlideIndex : currentSlideIndex - 1;  
        this.projectsForGallery[currentSlideIndex].isActive = false;
        this.projectsForGallery[prevSlideIndex].isActive = true;
      }
    }
  }
  </script>
  
  <style lang="scss">
  @import '@/assets/scss/_slider.scss';
// .slider-box {
//       margin-bottom: 100px;
//       // position: relative;
//       // width: 100%;
//       display: flex;
//       // flex-direction: column;
//       justify-content: center;
//       // gap: 30px;
//       align-items: center;
//       overflow: hidden;
    
//     &__slider {
//       display: flex;
//       max-height: 799px;
//       overflow: hidden;
//       border-radius: 70px;
      
//     }
//     &__slide{
//      min-width: 100%;
    
//     }
//     &__slider img {
//       width: 100%;
//       height: 100%;
//       object-fit: cover;
//       object-position: center;
//     }
  
//     &__controls{
//       max-width: 100%;
//       position: absolute;
//       display: flex;
//       justify-content: space-between;
//     }
  
//     &__controls-item{
//       border: none;
//       height: 132px;
//       width: 132px;
//       transition: transform .5s ease-in-out, background-color .2s ease-in-out;
//     }
  
//     &__controls-item:hover {
//       fill: #CDA274;
//       cursor: pointer;
//     }
  
//     // &__controls-item-prev {
//     //   // transform: translateX(-200px);
//     // }
  
//     // &__controls-item-next {
//     //   // transform: translateX(200px);
//     // }
  
//     .slider-box:hover &__controls-item{
//       transform: translateX(0);
//     }
  
// }
  </style> 