import Vue from 'vue'
import Router from 'vue-router'
import Kitchen from "./views/Kitchen"
import Joke from "./views/Joke"
import Collect from "./views/Collect"
import Information from "./views/Information"
import Registe from "./components/Information/Registe"
import ShowMain from "./components/searchComponents/ShowMain"



Vue.use(Router)

export default new Router({
  // linkActiveClass:"active",
  routes: [{
      path: "/",
      redirect: "/Information"
    },
    {
      path: "/Kitchen",
      name: "Kitchen",
      component: Kitchen,
      children: [
        {path:"./Kitchen/ShowMain",component:ShowMain},
      ]
    },
    {
      path: "/Joke",
      name: "Joke",
      component: Joke
    },
    {
      path: "/Collect",
      name: "Collect",
      component: Collect
    },
    {
      path: "/Information",
      name: "Information",
      component: Information
    },
    {
      path: "/Registe",
      name: "Registe",
      component: Registe
    },

  ]
})