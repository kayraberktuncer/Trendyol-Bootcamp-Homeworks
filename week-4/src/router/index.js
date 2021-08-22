import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Starship from '../views/Starship'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/:id',
      name: 'Starship',
      component: Starship,
    },
  ],
})
