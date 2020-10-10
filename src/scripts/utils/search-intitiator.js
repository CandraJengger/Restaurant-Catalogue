const SearchIntitiator = {
  init (searchComp) {
    searchComp.addEventListener('focusin', () => this._addSearchHover(searchComp))
    searchComp.addEventListener('focusout', () => this._removeSearchHover(searchComp))
    searchComp.addEventListener('mouseout', () => this._removeSearchHover(searchComp))
    searchComp.addEventListener('mouseover', () => this._addSearchHover(searchComp))
    searchComp.children[1].addEventListener('focus', () => this._addSearchActive(searchComp))
    searchComp.parentElement.nextElementSibling.addEventListener('click', () => this._removeSearchActive(searchComp))
  },

  _addSearchActive (target) {
    target.classList.add('search-active')
  },

  _removeSearchActive (target) {
    target.classList.remove('search-active')
  },

  _addSearchHover (target) {
    target.classList.add('search-hover')
  },

  _removeSearchHover (target) {
    target.classList.remove('search-hover')
  }
}

export default SearchIntitiator