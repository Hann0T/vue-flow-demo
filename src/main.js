import { createApp } from 'vue'
import { createPinia } from 'pinia';
import './style.css'
import '@vue-flow/core/dist/style.css';
import '@vue-flow/core/dist/theme-default.css';
import App from './App.vue'

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount('#app');
