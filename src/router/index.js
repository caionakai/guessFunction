import Vue from 'vue'
import Router from 'vue-router'

import Logos from '@/components/Logos'
import Intro from '@/components/Intro'
import HowToPlay from '@/components/HowToPlay'
import Map from '@/components/Map'
import Map2 from '@/components/Map2'
import Certo from '@/components/Certo'
import Errado from '@/components/Errado'
import Score from '@/components/Score'
import GameOver from '@/components/GameOver'

import Seno from '@/components/Question/Trigonometry/Seno'
import Cosseno from '@/components/Question/Trigonometry/Cosseno'
import IdentityTrigonometric from '@/components/Question/Trigonometry/IdentityTrigonometric'

import DerivativeSimple from '@/components/Question/Derivative/Question1'
import DerivativeSimpleQ2 from '@/components/Question/Derivative/Question2'

import IntegralSimple from '@/components/Question/Integral/Simple'
import IntegralSimpleRadio from '@/components/Question/Integral/SimpleRadio'
import IntegralUndefined from '@/components/Question/Integral/IntegralUndefined'
import IntegralDefinite from '@/components/Question/Integral/IntegralDefinite'

import Topics from '@/components/Learn/Topics'
import Trigonometria from '@/components/Learn/Trigonometria'
import Limite from '@/components/Learn/Limite'
import Derivada from '@/components/Learn/Derivada'
import Integral from '@/components/Learn/Integral'

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
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
    {
      path: '/topics',
      name: 'Topics',
      component: Topics
    },
    {
      path: '/howtoplay',
      name: 'HowToPlay',
      component: HowToPlay
    },
    {
      path: '/trigonometria',
      name: 'Trigonometria',
      component: Trigonometria
    },
    {
      path: '/limite',
      name: 'Limite',
      component: Limite
    },
    {
      path: '/derivada',
      name: 'Derivada',
      component: Derivada
    },
    {
      path: '/integral',
      name: 'Integral',
      component: Integral
    },
    {
      path: '/gameover',
      name: 'GameOver',
      component: GameOver
    },
    {
      path: '/integralsimple',
      name: 'integralSimple',
      component: IntegralSimple
    },
    {
      path: '/integralsimpleradio',
      name: 'integralSimpleRadio',
      component: IntegralSimpleRadio
    },
    {
      path: '/identitytrigonometric',
      name: 'IdentityTrigonometric',
      component: IdentityTrigonometric
    },
    {
      path: '/integralundefined',
      name: 'IntegralUndefined',
      component: IntegralUndefined
    },
    {
      path: '/integraldefinite',
      name: 'IntegralDefinite',
      component: IntegralDefinite
    },
    {
      path: '/map2',
      name: 'Map2',
      component: Map2
    },
    {
      path: '/derivativesimple',
      name: 'DerivativeSimple',
      component: DerivativeSimple
    },
    {
      path: '/derivativesimpleq2',
      name: 'DerivativeSimpleQ2',
      component: DerivativeSimpleQ2
    }
    
  ]
})
