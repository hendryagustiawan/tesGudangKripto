import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailsView from "../views/DetailView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: DetailsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
