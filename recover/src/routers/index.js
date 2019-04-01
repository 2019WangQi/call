import Vue from 'vue'
import Router from 'vue-router'
import homepage from "./homepage";
import classfy from "./classfy";
import callback from "./callback";
import mine from "./mine";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/homepage"
    },
    homepage,
    classfy,
    callback,
    mine,
    /*{
      path:"**",
      redirect:"/homepage"
    }*///有这个首页的颜色 不会变红
  ]
})
