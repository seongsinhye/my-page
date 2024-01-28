import { createWebHistory, createRouter } from "vue-router";
import Home from '@/components/HeaderBar.vue';
import gogo from '@/components/GogoBox.vue';
import About from '@/usersBox.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/gogo', component: gogo },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;