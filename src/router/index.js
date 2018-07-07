import Vue from 'vue'
import Router from 'vue-router'
import Seno from '@/components/Seno'
import Cosseno from '@/components/Cosseno'
import Intro from '@/components/Intro'
import Errado from '@/components/Errado'
import Certo from '@/components/Certo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/seno',
      name: 'Seno',
      component: Seno
    },
    {
      path: '/cosseno',
      name: 'Cosseno',
      component: Cosseno
    },
    {
      path: '/certo',
      name: 'Certo',
      component: Certo
    },
    {
      path: '/errado',
      name: 'Errado',
      component: Errado
    }
  ]
})
