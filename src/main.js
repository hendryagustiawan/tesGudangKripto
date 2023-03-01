import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";
import Axios from "axios";

const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

Axios.defaults.baseURL = "http://localhost:3000";

const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount("#app");
