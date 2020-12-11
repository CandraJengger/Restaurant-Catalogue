class HeroContent extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
      <div class="hero">
        <img src="./images/heros/hero-image_2-large.jpg"
              srcset="./images/heros/hero-image_2-small.jpg 480w, ./images/heros/hero-image_2-large.jpg 1440w"
              sizes="(max-width: 660px) 480px, 800px" 
              alt="" class="hero-image">
        <p class="hero-headline" tabindex="-1">Are you hungry ?</p>
      </div>
    `
  }
}

customElements.define('hero-content', HeroContent)