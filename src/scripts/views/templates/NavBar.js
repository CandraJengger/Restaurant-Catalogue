class NavBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render() {
    this.innerHTML = `
      <nav id="navbar">
        <img src="./images/icons/meluwe-icon-sm.svg" alt="meluwe brand logo" tabindex="0" />
        <img src="./images/icons/meluwe.svg" alt="meluwe brand logo" tabindex="0" />
        <ul class="nav-links">
          <li class="active"><a href="#/home">Home</a></li>
          <li><a href="#">Favorite</a></li>
          <li><a href="https://www.instagram.com/aldycandra_/">About Us</a></li>
        </ul>
      </nav>
    `
  }
}

customElements.define('nav-bar', NavBar)