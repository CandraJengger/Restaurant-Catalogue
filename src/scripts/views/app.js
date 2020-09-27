import DrawerIntitiator from '../utils/drawer-intitiator'
import routes from '../routes/routes'
import UrlParser from '../routes/url-parser'

class App {
  constructor ({ button, drawer, content, layer }) {
    this._button = button
    this._layer = layer
    this._drawer = drawer
    this._content = content

    this._initialAppShell()
  }

  _initialAppShell () {
    DrawerIntitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      layer: this._layer
    })
  }

  async renderPage () {
    const url = UrlParser.parserActiveUrlWithCombiner()
    const page = routes[url]
    this._content.innerHTML = await page.render()
    await page.afterRender()
  }
}

export default App