
import App from './App.vue'

import { createPinia } from "pinia";

const realApp = createApp(App);
realApp.use(createPinia());
realApp.mount('#app');