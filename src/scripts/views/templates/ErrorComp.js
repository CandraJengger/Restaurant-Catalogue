class ErrorComp extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
      <div class="error-wrapper">
        <div class="error-wrapper-content">
          <h1>Something went wrong...</h1>
          <button>Try Again</button>
        </div>
      </div>
    `
  }
}

customElements.define('error-comp', ErrorComp)