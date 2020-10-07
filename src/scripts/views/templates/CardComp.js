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
      <div class="card detail" tabindex="0" aria-label="Detail ${this._restaurantData.name} Restaurant">
        <h3 tabindex="0" aria-label="name ${this._restaurantData.name}">${this._restaurantData.name}</h3>
        <h4 tabindex="0" aria-label="address at ${this._restaurantData.address}">${this._restaurantData.address}</h4>
        <div class="card-icon">
          <span class="card-rating" tabindex="0" aria-label="this place has a rating of ${this._restaurantData.rating}">
            <i class="fas fa-star"></i>
            <p>${this._restaurantData.rating}</p>
          </span>
          <span class="card-location" tabindex="0" aria-label="located in ${this._restaurantData.city}">
            <i class="fas fa-map-marker-alt"></i>
            <p>${this._restaurantData.city}</p>
          </span>
        </div>
      </div>
    `
  }
}

customElements.define('card-comp', CardComp)