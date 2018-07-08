import Vue from 'vue'
import Router from 'vue-router'
import Seno from '@/components/Seno'
import Cosseno from '@/components/Cosseno'
import Intro from '@/components/Intro'
import Errado from '@/components/Errado'
import Certo from '@/components/Certo'
import Logos from '@/components/Logos'
import Score from '@/components/Score'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Logos',
      component: Logos
    },
    {
      path: '/intro',
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
      path: '/certo/:id',
      name: 'Certo',
      props: {default: true},
      component: Certo
    },
    {
      path: '/errado/:id',
      name: 'Errado',
      props: {default: true},
      component: Errado
    },
    {
      path: '/score',
      name: 'Score',
      component: Score
    }
  ]
})
