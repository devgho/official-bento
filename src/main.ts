import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './views/home.vue';

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const routes = [
  { path: '/', component: Home }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
  .use(router).use(vuetify)
  .mount('#app');
