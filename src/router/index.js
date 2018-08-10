import Vue from 'vue'
import Router from 'vue-router'

import Map from '@/components/Maps/Map'
import Map2 from '@/components/Maps/Map2'
import Map3 from '@/components/Maps/Map3'
import Map4 from '@/components/Maps/Map4'

import Logos from '@/components/Main/Logos'
import Intro from '@/components/Main/Intro'
import HowToPlay from '@/components/Main/HowToPlay'
import Info from '@/components/Main/Info'
import Certo from '@/components/Main/Certo'
import Errado from '@/components/Main/Errado'
import Score from '@/components/Main/Score'
import GameOver from '@/components/Main/GameOver'

import Seno from '@/components/Question/Trigonometry/Seno'
import Cosseno from '@/components/Question/Trigonometry/Cosseno'
import IdentityTrigonometric from '@/components/Question/Trigonometry/IdentityTrigonometric'

import DerivativeSimple from '@/components/Question/Derivative/Question1'
import DerivativeSimpleQ2 from '@/components/Question/Derivative/Question2'
import DeriQ3 from '@/components/Question/Derivative/Question3'
import DeriQ4 from '@/components/Question/Derivative/Question4'

import IntegralSimple from '@/components/Question/Integral/Simple'
import IntegralSimpleRadio from '@/components/Question/Integral/SimpleRadio'
import IntegralUndefined from '@/components/Question/Integral/IntegralUndefined'
import IntegralDefinite from '@/components/Question/Integral/IntegralDefinite'
import Question4 from '@/components/Question/Integral/Question4'
import Question5 from '@/components/Question/Integral/Question5'
import IntQ6 from '@/components/Question/Integral/Question6'
import IntQ7 from '@/components/Question/Integral/Question7'

import LimQ1 from '@/components/Question/Limit/Question1'

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
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/firstLevel',
      name: 'firstLevel',
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
      path: '/map3',
      name: 'Map3',
      component: Map3
    },
    {
      path: '/map4',
      name: 'Map4',
      component: Map4
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
    },
    {
      path: '/question4',
      name: 'Question4',
      component: Question4
    },
    {
      path: '/question5',
      name: 'Question5',
      component: Question5
    },
    {
      path: '/deriq3',
      name: 'DeriQ3',
      component: DeriQ3
    },
    {
      path: '/deriq4',
      name: 'DeriQ4',
      component: DeriQ4
    },
    {
      path: '/intq6',
      name: 'IntQ6',
      component: IntQ6
    },
    {
      path: '/intq7',
      name: 'IntQ7',
      component: IntQ7
    },
    {
      path: '/limq1',
      name: 'LimQ1',
      component: LimQ1
    }
    
  ]
})
