
import App from './App.vue'

import { createPinia } from "pinia";
import {createApp} from "vue";

const realApp = createApp(App);
realApp.use(createPinia());
realApp.mount('#app');