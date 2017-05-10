const landingPage = require('components/LandingPageView')
const gameView = require('components/GameView')

export default [
  {
    path: '/',
    name: 'landing-page',
    component: landingPage
  },
  {
    path: '/game',
    name: 'game',
    component: gameView
  }
]
