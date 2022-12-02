import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

// bootstrap
import * as bootstrap from "bootstrap";
window.bootstrap = bootstrap;

const app = createApp(App);

app.use(router);

app.mount("#app");
