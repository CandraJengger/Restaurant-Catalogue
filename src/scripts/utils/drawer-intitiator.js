const DrawerIntitiator = {
  init ({ button, drawer, content, layer }) {
    button.addEventListener('click', event => {
      this._toggleDrawer(event, drawer)
      this._toggleLayer(event, layer)
    })

    content.addEventListener('click', event => {
      this._closeDrawer(event, drawer)
      this._closeLayer(event, layer)
    })

    layer.addEventListener('click', event => {
      this._closeDrawer(event, drawer)
      this._closeLayer(event, layer)
    })
  },

  _toggleDrawer (event, drawer) {
    event.stopPropagation()
    drawer.classList.toggle('open')
  },

  _closeDrawer (event, drawer) {
    event.stopPropagation()
    drawer.classList.remove('open')
  },

  _toggleLayer (event, layer) {
    event.stopPropagation()
    layer.classList.toggle('open-layer')
  },

  _closeLayer (event, layer) {
    event.stopPropagation()
    layer.classList.remove('open-layer')
  }
}

export default DrawerIntitiator