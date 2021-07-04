import { createRouter,createWebHashHistory} from "vue-router";

import Test from "../components/Test.vue"
import Client from "../components/Client.vue"
import AddPage from "../components/AddClient.vue"
import Update from "../components/updateClient.vue"
import Sigin from "../components/Sigin.vue"
import Register from '../components/Register.vue'
import Pic from '../components/Pic.vue'
import Edit from '../components/UserEdit.vue'


const routerHistory = createWebHashHistory()

const routes = [
  {
      path:"/",
      component: Test,
  },
  {
    path:"/client",
    component: Client
  },
  {
    path:"/add",
    component: AddPage
  },
  {
    path:"/update",
    name: "Update",
    component: Update
  },
  {
    path:"/login",
    component:Sigin
  },
  {
    path:"/register",
    component: Register
  },
  {
    path: "/pic",
    component:Pic
  },
  {
    path:'/edit',
    component: Edit
  }
]

const router = createRouter({
    history: routerHistory,
    routes: routes
})

export default router
