import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './views/home.vue';

const routes = [
  { path: '/', component: Home }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

createApp(App)
  .use(router)
  .mount('#app');
