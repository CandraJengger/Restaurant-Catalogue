class ButtonIconComp extends HTMLElement {
  connectedCallback () {
    this.type = this.getAttribute('type') || ''
    this.content = this.getAttribute('content') || ''
    this.className = this.getAttribute('className') || ''
    this.idComp = this.getAttribute('idComp') || ''
    this.alt = this.getAttribute('alt') || ''
    this.ariaLabel = this.getAttribute('ariaLabel') || ''
    this.role = this.getAttribute('role') || 'button'
    this.render()
  }

  render () {
    this.innerHTML = `
      <button
        class="${this.className}"
        id="${this.idComp}"     
        aria-label="${this.ariaLabel}"
        type="${this.role}"
      >
        ${
          this.type === 'images'
          ? `<img src="${this.content}" alt="${this.alt}">`
          : this.type === 'icon' && `<i class="${this.content}"></i>`
        }
      </button>
    `
  }
}

customElements.define('button-icon', ButtonIconComp)