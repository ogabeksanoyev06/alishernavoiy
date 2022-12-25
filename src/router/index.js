import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../layouts/MainLayout"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../views/site/home"),
      },
      {
        path: "/books",
        name: "books",
        component: () => import("../views/site/books/page.vue"),
      },
      {
        path: "/videos",
        name: "videos",
        component: () => import("../views/site/videos/page.vue"),
      },
      {
        path: "/audios",
        name: "audios",
        component: () => import("../views/site/audios/page.vue"),
      },
      {
        path: "/TranslationsBooks",
        name: "TranslationsBooks",
        component: () => import("../views/site/TranslationsBooks/page.vue"),
      },
      {
        path: "/ScientificResearch",
        name: "ScientificResearch",
        component: () => import("../views/site/ScientificResearch/page.vue"),
      },
      {
        path: "/ManuscriptBooks",
        name: "ManuscriptBooks",
        component: () => import("../views/site/ManuscriptBooks/page.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
