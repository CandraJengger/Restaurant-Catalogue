class ToastComp extends HTMLElement {
  connectedCallback () {
    this.html = this.getAttribute('html') || ''
    this.classes = this.getAttribute('classes') | ''
    this.render()
  }

  render () {
    this.innerHTML = `
      <div id="toast" class="toast ${this.classes}">${this.html}</div>
    `
  }
}

customElements.define('toast-comp', ToastComp)