import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Import the Vuex store

// Import CSS files
import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'aos/dist/aos.css'; // Import AOS styles
import '@fortawesome/fontawesome-free/css/all.css';

import AOS from 'aos';

const app = createApp(App);

app.use(router); // Use Vue Router
app.use(store); // Use Vuex store

// Initialize AOS
AOS.init({
  duration: 1000, // Duration of the animation
});

app.mount('#app');
