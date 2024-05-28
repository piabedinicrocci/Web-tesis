import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Simulation from "../components/Simulation.vue"
import Config from "../components/Config.vue"
import Inicio from "../components/Inicio.vue"
import Niveles from "../components/Niveles.vue"
import Results from "../components/Results.vue"

//import Simulation from "../views/SimulationView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Inicio,
    },
    {
      path: "/niveles",
      name: "niveles",
      component: Niveles,
      props: true,
    },
    {
      path: "/config",
      name: "config",
      component: Config,
      props: true,
    },
    {
      path: "/simulation",
      name: "simulation",
      component: Simulation,
      props: true,
    },
    {
      path: "/results",
      name: "results",
      component: Results,
      props: true,
    },
  ],
});

export default router;
