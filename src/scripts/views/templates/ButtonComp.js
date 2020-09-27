class ButtonComp extends HTMLElement {
  connectedCallback () {
    this.text = this.textContent || ''
    this.className = this.getAttribute('className') || ''

    this.render()
  }

  render () {
    this.innerHTML = `
        <button 
            class=${this.className}
            id=${this.className}
        >
            ${this.text}
        </button>
    `
  }
}

customElements.define('button-comp', ButtonComp)