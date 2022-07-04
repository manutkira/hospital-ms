import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import "./assets/global.css";

const pinia = createPinia();

createApp(App)
    .use(pinia)
    .use(router)
    .mount("#app");
