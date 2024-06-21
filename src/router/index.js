import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Merit from '../views/Merit.vue';
import How from '../views/How.vue';
import Problem from '../views/Problem.vue';
import Word from '../views/Word.vue';
import Contact from '../views/Contact.vue';
import Users from '../views/Users.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/merit',
    name: 'Merit',
    component: Merit
  },
  {
    path: '/how',
    name: 'How',
    component: How
  },
  {
    path: '/problem',
    name: 'Problem',
    component: Problem
  },
  {
    path: '/word',
    name: 'Word',
    component: Word
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
