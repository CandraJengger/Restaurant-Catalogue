class ButtonIconComp extends HTMLElement {
  connectedCallback () {
    this.type = this.getAttribute('type') || ''
    this.content = this.getAttribute('content') || ''
    this.className = this.getAttribute('className') || ''
    this.alt = this.getAttribute('alt') || ''
    this.ariaLabel = this.getAttribute('aria-label') || ''
    this.render()
  }

  render () {
    this.innerHTML = `
      <button
        class=${this.className}
        id=${this.className}        
        aria-label=${this.ariaLabel}
      >
        ${
          this.type === 'images'
          ? `<img src="${this.content}" alt="${this.alt}">`
          : `<i class="${this.content}"></i>`
        }
      </button>
    `
  }
}

customElements.define('button-icon', ButtonIconComp)