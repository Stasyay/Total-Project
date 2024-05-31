import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    projects: [
      {
        id: 0,
        title: 'Modern Kitchan',
        image: 'Image1.jpg',
      },
      {
        id: 1,
        title: 'Modern Kitchan',
        image: 'Image2.jpg',
      },
      {
        id: 2,
        title: 'Living Area',
        image: 'Image3.jpg',
      },
      {
        id: 3,
        title: 'Living Area',
        image: 'Image4.jpg',
      },
      {
        id: 4,
        title: 'Modern Bathroom',
        image: 'Project1.png',
      },
      {
        id: 5,
        title: 'Minimal Bedroom',
        image: 'Project5.png',
      },
      {
        id: 6,
        title: 'Classic Minimal Bedroom',
        image: 'Project2.png',
      },
      {
        id: 7,
        title: 'Modern Bedroom',
        image: 'Project6.png',
      },
      {
        id: 8,
        title: 'Minimal Bedroom table',
        image: 'Project3.png',
      },
      {
        id: 9,
        title: 'System Table',
        image: 'Project7.png',
      },
      {
        id: 10,
        title: 'Modern Medroom',
        image: 'Project4.png',
      },
      {
        id: 11,
        title: 'Modern Bedroom',
        image: 'Project8.png',
      },

    ],
    articles: [
      {
        id: 0,
        title: 'Let’s Get Solution For Building Construction Work',
        image: 'BlogImg1.png',
        tag: 'Kitchan Design',
        date: '26 December,2022'
      },
      {
        id: 1,
        title: 'Let’s Get Solution For Building Construction Work',
        image: 'BlogImg2.png',
        tag: 'Bedroom',
        date: '22 December,2022'
      },
      {
        id: 2,
        title: 'Let’s Get Solution For Building Construction Work',
        image: 'BlogImg3.png',
        tag: 'Kitchan Design',
        date: '26 December,2022'
      },
      {
        id: 3,
        title: 'Let’s Get Solution For Building Construction Work',
        image: 'BlogImg4.png',
        tag: 'Kitchan Planning',
        date: '26 December,2022'
      },
      {
        id: 4,
        title: 'Low Cost Latest Invented Interior Designing Ideas.',
        image: 'BlogImg5.png',
        tag: 'Bathroom',
        date: '22 December,2022'
      },
      {
        id: 5,
        title: 'Best For Any Office & Business Interior Solution',
        image: 'BlogImg6.png',
        tag: 'Interior Design',
        date: '25 December,2022'
      },

    ],
    tags: [
      { title: 'Kitchan' },
      { title: 'Bedroom' },
      { title: 'Building' },
      { title: 'Architecture' },
      { title: 'Kitchan Planning' },
    ],
    categories: [
      { title: 'Bathroom' },
      { title: 'Bedroom' },
      { title: 'Kitchan' },
      { title: 'Living Area' },
    ],
  },
  getters: {
    filteredArticles: state => {
      return state.articles.filter(article => article.tag.includes(state.tags[state.activeIndex].title))
    },
    getLimitProjects: (state) => (limit) => {
      if (limit) {
        return Object.values(state.projects).slice(0, limit);
      } else {
        return state.projects;
      }
    },
    getProjectsByCategory: (state) => (categoryName) => {
      if (categoryName) {
        return Object.values(state.projects).filter(
          project => project.title.includes(categoryName)
          // (el) => categoryName === el.title
        );
      } else {
        return state.projects;
      }
    },
    paginatedProjects: (state) => (currentPage, perPage) => {
      const startIndex = (currentPage - 1) * perPage;
      const endIndex = startIndex + perPage;
      return Object.values(state.projects).slice(startIndex, endIndex);
    },
    getProjectsTotalPages: (state) => (perPage) => {
      if (perPage) {
        return Math.ceil(
          Object.values(state.projects).length / perPage
        );
      } else {
        return 1;
      }
    },
    getArticleByTag: (state) => (tagName) => {
      if (tagName) {
        return Object.values(state.articles).filter(
          article => article.tag.includes(tagName)
        );
      } else {
        return state.articles;
      }
    },
  },

});

export default store;