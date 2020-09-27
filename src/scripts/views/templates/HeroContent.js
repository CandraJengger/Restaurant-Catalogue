class HeroContent extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
      <div class="hero">
        <img src="./images/heros/hero-image_2.jpg" alt="" class="hero-image">
        <p class="hero-headline" tabindex="-1">Are you hungry ?</p>
      </div>
    `
  }
}

customElements.define('hero-content', HeroContent)