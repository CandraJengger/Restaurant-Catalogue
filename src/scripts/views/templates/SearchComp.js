import SearchIntitiator from '../../utils/search-intitiator'

class SearchComp extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
      <div class="search-wrapper">
        <i class="fas fa-search"></i>
        <input 
          type="search" 
          name="q" 
          placeholder="find by place or category" 
          autocomplete="on"
          aria-label="Find a place"
        >
      </div>
    `
  
    SearchIntitiator.init(document.querySelector('.search-wrapper'))
  }
}

customElements.define('search-comp', SearchComp)