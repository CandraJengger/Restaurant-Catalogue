import DrawerIntitiator from '../utils/drawer-intitiator'
import routes from '../routes/routes'
import UrlParser from '../routes/url-parser'

class App {
  constructor ({ btnSidebar, btnSkip, drawer, content, layer, links }) {
    this._btnSidebar = btnSidebar
    this._btnSkip = btnSkip
    this._layer = layer
    this._drawer = drawer
    this._content = content
    this._links = links

    this._initialAppShell()
  }

  _initialAppShell () {
    DrawerIntitiator.init({
      btnSidebar: this._btnSidebar,
      btnSkip: this._btnSkip,
      drawer: this._drawer,
      content: this._content,
      layer: this._layer,
      links: this._links
    })
  }

  async renderPage () {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]
    this._content.innerHTML = await page.render()
    await page.afterRender()
  }
}

export default App