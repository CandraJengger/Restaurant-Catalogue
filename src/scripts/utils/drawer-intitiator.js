const DrawerIntitiator = {
  init ({ btnSidebar, btnSkip, drawer, content, layer }) {
    btnSidebar.addEventListener('click', event => {
      this._toggleDrawer(event, drawer)
      this._toggleLayer(event, layer)
    })

    btnSkip.addEventListener('focusin', event => {
      this._closeDrawer(null, drawer)
      this._addLayer(event, layer)
    })

    btnSkip.addEventListener('focusout', event => {
      this._closeLayer(event, layer)
    })

    content.addEventListener('click', event => {
      this._closeDrawer(event, drawer)
      this._closeLayer(event, layer)
    })

    layer.addEventListener('click', event => {
      this._closeDrawer(event, drawer)
      this._closeLayer(event, layer)
    })

    content.addEventListener('focusin', event => {
      this._closeDrawer(event, drawer)
      this._closeLayer(event, layer)
    })
  },

  _toggleDrawer (event, drawer) {
    event.stopPropagation()
    drawer.classList.toggle('open')
  },

  _closeDrawer (event, drawer) {
    if (event !== null) {
      event.stopPropagation()
    }
    drawer.classList.remove('open')
  },

  _toggleLayer (event, layer) {
    event.stopPropagation()
    layer.classList.toggle('open-layer')
  },

  _addLayer (event, layer) {
    event.stopPropagation()
    layer.classList.add('open-layer')
  },

  _closeLayer (event, layer) {
    event.stopPropagation()
    layer.classList.remove('open-layer')
  }
}

export default DrawerIntitiator