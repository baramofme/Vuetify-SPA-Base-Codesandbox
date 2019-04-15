import Vue from "vue";
import Router from "vue-router";

import TopStories from "../views/TopStories";
import CodeExamples from "../views/CodeExamples";
import MyFavorites from "../views/MyFavorites";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "top-stories",
      component: TopStories
    },
    {
      path: "/code-examples",
      name: "code-examples",
      component: CodeExamples
    },
    {
      path: "/my-favorites",
      name: "my-favorites",
      component: MyFavorites
    }
  ]
});
