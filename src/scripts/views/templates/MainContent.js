import './HeroContent.js'
import './ListComp.js'

class MainContent extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
      <div class="content" id="content">
        <h1 tabindex="0">Explore Restaurant</h1>
        <list-comp></list-comp> 
      </div>
    `
  }
}

customElements.define('main-content', MainContent)