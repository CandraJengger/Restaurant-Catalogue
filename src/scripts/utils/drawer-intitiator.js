const DrawerIntitiator = {
  init ({ btnSidebar, btnSkip, drawer, content, layer, links, url }) {
    btnSidebar.addEventListener('click', event => {
      this._toggleDrawer(event, drawer)
      this._toggleLayer(event, layer)
    })

    btnSkip.addEventListener('click', () => {
      window.location.href = '#content'
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

    links.forEach(link => {
      link.addEventListener('focusin', event => {
        this._addActiveFocus(event, event.path[1])
      })

      link.addEventListener('focusout', event => {
        this._removeActiveFocus(event, event.path[1])
      })

      link.addEventListener('click', event => {
        links.forEach(link => {
          this._closeDrawer(event, drawer)
          this._closeLayer(event, layer)
          this._removeActive(event, link.parentElement)
        })
        this._addActive(event, event.path[1])
      })
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
  },

  _addActive (event, link) {
    event.stopPropagation()
    link.classList.add('active')
  },

  _removeActive (event, link) {
    event.stopPropagation()
    link.classList.remove('active')
  },

  _addActiveFocus (event, link) {
    event.stopPropagation()
    link.classList.add('active-focus')
  },

  _removeActiveFocus (event, link) {
    event.stopPropagation()
    link.classList.remove('active-focus')
  }
}

export default DrawerIntitiator