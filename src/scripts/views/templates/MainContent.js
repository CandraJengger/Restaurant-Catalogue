import './HeroContent.js'
import './ListComp.js'
import './SearchComp'

class MainContent extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
      <div class="content" id="content">
        <h1 tabindex="0">Explore Restaurant</h1>
        <search-comp></search-comp>
        <list-comp></list-comp> 
      </div>
    `
  }
}

customElements.define('main-content', MainContent)