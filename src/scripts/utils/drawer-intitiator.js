const DrawerIntitiator = {
  init ({ btnSidebar, btnSkip, drawer, content, layer, links }) {
    btnSidebar.addEventListener('click', event => {
      this._toggleDrawer(event, drawer)
      this._toggleLayer(event, layer)
    })

    window.addEventListener('scroll', () => {
      if (window.scrollY > (window.innerHeight * 0.3)) {
        btnSidebar.style.backgroundColor = '#8B612D'
      } 
      
      if (window.scrollY < (window.innerHeight * 0.3)) {
        btnSidebar.style.backgroundColor = 'transparent'
      }
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
        this._addActive(event, event.path[1])
      })

      link.addEventListener('focusout', event => {
        this._removeActive(event, event.path[1])
      })

      link.addEventListener('click', event => {
        links.forEach(link => {
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
  }
}

export default DrawerIntitiator