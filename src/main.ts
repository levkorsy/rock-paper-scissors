import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPersist from 'pinia-plugin-persist'
import "./assets/main.css";

const pinia = createPinia().use(piniaPersist)

createApp(App).use(router).use(pinia).mount("#app");
