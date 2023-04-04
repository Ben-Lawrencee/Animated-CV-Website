import { createRouter, createWebHashHistory } from 'vue-router'
import Cover from '@/views/CoverView.vue';
import About from '@/views/AboutView.vue';
import Education from '@/views/EducationView.vue';
import Experience from '@/views/ExperienceView.vue';
import Projects from '@/views/ProjectsView.vue';
import Navigation from '@/views/NavigationView.vue';


const routes = [
  {
    path: '/',
    name: 'Cover',
    component: Cover
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/nav',
    name: 'Navigation',
    component: Navigation
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
