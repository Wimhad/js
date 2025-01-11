import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';
import Projects from '@/views/Projects.vue';
import ProjectDetails from '@/views/ProjectDetails.vue';
import Contact from '@/views/Contact.vue';
import NotFound from '@/views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/projects', name: 'projects', component: Projects },
    { path: '/projects/:id', name: 'project-details', component: ProjectDetails },
    { path: '/contact', name: 'contact', component: Contact },
    { path: '/:catchAll(.*)', name: 'not-found', component: NotFound },

  ],
})

export default router


/*{
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },*/