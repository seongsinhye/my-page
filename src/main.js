import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './routes/index.js';

const app = createApp(App);
app.use(router);

createApp(App).mount('#app')
