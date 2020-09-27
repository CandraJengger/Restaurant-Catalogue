import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.scss'

import '../scripts/views/templates/NavBar'
import '../scripts/views/templates/ButtonComp'
import '../scripts/views/templates/FooterComp'

import App from './views/app'

const app = new App({
  button: document.getElementById('btn-tab-sidebar'),
  drawer: document.getElementById('navbar'),
  content: document.querySelector('main'),
  layer: document.querySelector('.layer')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
})

console.log('Hello Coders! :)')
