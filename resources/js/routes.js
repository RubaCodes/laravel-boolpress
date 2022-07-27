//importo i componenti fondamentali
import Vue from "vue";
import VueRouter from "vue-router";
//dico a vue di usare router
Vue.use(VueRouter);
//sezione di import delle View (Vue componentes)
import Home from "./pages/Home";
import PostFeed from "./pages/PostFeed";
import Post from "./pages/Post";

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
      path: "/posts/:slug",
      name: "post",
      component: Post,
    },
  ],
});

export default router;
