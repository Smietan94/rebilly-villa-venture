import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { createPinia } from 'pinia';
import { routes } from './router';
import revel from '@rebilly/revel';
import FramePay from '@rebilly/framepay-vue';
import '@rebilly/revel/dist/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './assets/fonts.css';
import './assets/bootstrap-variables-p11.scss';
import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

app.use(router);
app.use(pinia);
app.use(revel);
app.use(FramePay);
app.mount('#app');
