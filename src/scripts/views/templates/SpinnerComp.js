class SpinnerComp extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
      <div class="spinner-wrapper">
        <img src="./images/icons/spinner.gif" alt="loading spinner">
      </div>
    `
  }
}

customElements.define('spinner-comp', SpinnerComp)