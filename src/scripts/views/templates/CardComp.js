class CardComp extends HTMLElement {
  set restaurantData (data) {
    this._restaurantData = data
    this.render()
  }

  get restaurantData () {
    return this._restaurantData
  }

  render () {
    this.innerHTML = `
      <div class="card detail">
        <h3>${this._restaurantData.name}</h3>
        <h4>${this._restaurantData.address}</h4>
        <div class="card-icon">
          <span class="card-rating">
            <i class="fas fa-star"></i>
            <p>${this._restaurantData.rating}</p>
          </span>
          <span class="card-location">
            <i class="fas fa-map-marker-alt"></i>
            <p>${this._restaurantData.city}</p>
          </span>
        </div>
      </div>
    `
  }
}

customElements.define('card-comp', CardComp)