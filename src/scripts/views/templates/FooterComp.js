class FooterComp extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
      <p>Copyright © 2020 - meluwe Apps</p>
    `
  }
}

customElements.define('footer-comp', FooterComp)