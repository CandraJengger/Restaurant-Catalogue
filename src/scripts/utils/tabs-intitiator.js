const TabsIntitiator = {
  init ({ tabLinks, tabViews }) {
    tabLinks.forEach(tab => {
      tab.addEventListener('click', event => {
        tabLinks.forEach(tab => {
          this._removeActiveTab(tab)
        })
        this._addActiveTab(event.target)
        
        tabViews.forEach(tabView => {
          this._remoceActiveTabView(tabView)
          if (tabView.getAttribute('id') === event.target.textContent.toLowerCase()) {
            this._addActiveTabView(tabView)
            tabView.setAttribute('tabindex', '0')
            tabView.focus()
          }
        })
      })

      tab.addEventListener('keypress', event => {
        if (event.keyCode === 13) {
          tabLinks.forEach(tab => {
            this._removeActiveTab(tab)
          })
          this._addActiveTab(event.target)
          
          tabViews.forEach(tabView => {
            this._remoceActiveTabView(tabView)
            if (tabView.getAttribute('id') === event.target.textContent.toLowerCase()) {
              this._addActiveTabView(tabView)
              tabView.setAttribute('tabindex', '0')
              tabView.focus()
            }
          })
        }
      })
    })
  },

  _addActiveTabView (tabView) {
    tabView.classList.add('active-tab-view')
  },

  _remoceActiveTabView (tabView) {
    tabView.classList.remove('active-tab-view')
  },

  _addActiveTab (tab) {
    tab.classList.add('active-tab')
  },

  _removeActiveTab (tab) {
    tab.classList.remove('active-tab')
  }
}

export default TabsIntitiator