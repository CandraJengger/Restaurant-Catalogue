import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.scss'

import '../scripts/views/templates/NavBar'
import '../scripts/views/templates/ButtonComp'
import '../scripts/views/templates/FooterComp'
import '../scripts/views/templates/SpinnerComp'
import '../scripts/views/templates/ErrorComp'
import '../scripts/views/templates/ButtonIconComp'
import '../scripts/views/templates/ToastComp'
import App from './views/app'
import swRegister from '../scripts/utils/sw-register'

const app = new App({
  btnSidebar: document.querySelector('.btn-tab-sidebar'),
  btnSkip: document.querySelector('.btn-skip'),
  drawer: document.querySelector('#navbar'),
  content: document.querySelector('main'),
  layer: document.querySelector('.layer'),
  links: document.querySelectorAll('.nav-links li a')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})
