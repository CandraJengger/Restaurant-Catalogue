import CONFIG from '../../globals/config'

class ListCompItem extends HTMLElement {
  static async setDataRestaurantItem ({ data, numberCard, numberButton }) {
    this._dataRestaurantItem = data
    this._numberCard = numberCard
    this._numberButton = numberButton
    this.render()
  }

  render () {
    this.innerHTML = `
      <li class="card" tabindex="0" aria-label="restaurant card ${this._numberCard}">
          <div class="card-img">
              <img src=${
                this._dataRestaurantItem.pictureId 
                ? CONFIG.BASE_IMAGE_URL + this._dataRestaurantItem.pictureId 
                : 'https://picsum.photos/id/666/800/450?grayscale'
              } alt="${this._dataRestaurantItem.name}">
          </div>
          <div class="card-text">
              <h2 tabindex="0" aria-label="name ${this._dataRestaurantItem.name}">${this._dataRestaurantItem.name}</h2>
              <div class="card-icon">
                  <span class="card-rating" tabindex="0" aria-label="this place has a rating of ${this._dataRestaurantItem.rating}">
                      <i class="fas fa-star"></i>
                      <p>Rating: </p>
                      <p>${this._dataRestaurantItem.rating}</p>
                  </span>
                  <span class="card-location" tabindex="0" aria-label="located in ${this._dataRestaurantItem.city}">
                      <i class="fas fa-map-marker-alt"></i>
                      <p>${this._dataRestaurantItem.city}</p>
                  </span>
              </div>
              <p class="text" tabindex="-1">${ 
                  this._dataRestaurantItem.description.substring(0, window.innerWidth / 4) 
              }...</p>
              <button-comp className="btn-detail${this._numberButton}">Detail</button-comp>
          </div>
      </li>
    `
  }
}

export default ListCompItem