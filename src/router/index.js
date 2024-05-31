import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../views/HomePage.vue';
import BlogPage from '../views/BlogPage.vue';
import ArticlePage from '../views/ArticlePage.vue';
import ProjectPage from '../views/ProjectPage.vue';
import ProjectDetailsPage from '../views/ProjectDetailsPage.vue';
import NotFoundPage from '../views/NotFoundPage.vue';

Vue.use(Router);

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/blog', name: 'Blog', component: BlogPage },
  { path: '/article', name: 'Article', component: ArticlePage },
  { path: '/project/:page?', name: 'Project', component: ProjectPage },
  { path: '/project-details/:id', name: 'ProjectDetails', component: ProjectDetailsPage },
  { path: '/404', name: '404', component: NotFoundPage },
  { path: '*', redirect: '/404' },
]

const router = new Router({
  mode: 'history',
  routes
});

export default router;