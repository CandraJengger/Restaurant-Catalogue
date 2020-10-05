class ButtonComp extends HTMLElement {
  connectedCallback () {
    this.text = this.textContent || ''
    this.className = this.getAttribute('className') || ''
    this.idCard = this.getAttribute('idCard') || 0
    this.render()
  }

  render () {
    this.innerHTML = `
        <button 
            class=${this.className}
            id=${this.className}
            idCard=${this.idCard}
        >
            ${this.text}
        </button>
    `
  }
}

customElements.define('button-comp', ButtonComp)