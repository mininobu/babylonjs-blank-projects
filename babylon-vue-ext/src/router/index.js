import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'root',
    component: () => import('../pages/BabylonScene01.vue'),
  },
  {
    path: '/BabylonScene01',
    name: 'BabylonScene01',
    component: () => import('../pages/BabylonScene01.vue'),
  },
  {
    path: '/BabylonScene02',
    name: 'BabylonScene02',
    component: () => import('../pages/BabylonScene02.vue'),
  },
  {
    path: '/BabylonScene03',
    name: 'BabylonScene03',
    component: () => import('../pages/BabylonScene03.vue'),
  },
  {
    path: '/BabylonScene04',
    name: 'BabylonScene04',
    component: () => import('../pages/BabylonScene04.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../pages/403.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
