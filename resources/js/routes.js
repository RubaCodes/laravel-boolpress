//importo i componenti fondamentali
import Vue from "vue";
import VueRouter from "vue-router";
//dico a vue di usare router
Vue.use(VueRouter);
//sezione di import delle View (Vue componentes)
import Home from "./pages/Home";
import PostFeed from "./pages/PostFeed";
import CategoriesFeed from "./pages/CategoriesFeed";
import Post from "./pages/Post";
import Category from "./pages/Category";
import Page404 from "./pages/Page404";

//settings delle rotte
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/posts",
      name: "posts",
      component: PostFeed,
    },
    {
      path: "/categories",
      name: "categories",
      component: CategoriesFeed,
    },
    {
      path: "/posts/:slug",
      name: "post",
      component: Post,
    },
    {
      path: "/categories/:slug",
      name: "category",
      component: Category,
    },
    {
      path: "/*",
      name: "404",
      component: Page404,
    },
  ],
});

export default router;
