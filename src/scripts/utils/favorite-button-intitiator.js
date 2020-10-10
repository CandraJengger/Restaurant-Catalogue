import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb'

const FavoriteButtonIntitiator = {
  async init ({ favoriteButtonContainer, restaurant }) {
    this._favoriteButtonContainer = favoriteButtonContainer
    this._restaurant = restaurant

    this._renderButton()
  },

  async _renderButton () {
    const { id } = this._restaurant

    if (await this._isMovieExist(id)) {
      this._renderFavorited()
    } else {
      this._renderFavorite()
    }
  },

  async _isMovieExist (id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id)
    return !!restaurant
  },

  _renderFavorite () {
    this._favoriteButtonContainer.innerHTML = `
      <button-icon
        idComp="favoriteButton"
        className="btn-favorite"
        ariaLabel="make this restaurant a favorite"
        type="icon"
        content="far fa-heart"
      ></button-icon>
    `

    const favoriteButton = document.querySelector('#favoriteButton')
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant)
      this._renderButton()
    })
  },

  _renderFavorited () {
    this._favoriteButtonContainer.innerHTML = `
      <button-icon
        idComp="favoritedButton"
        className="btn-favorite"
        ariaLabel="cancel this restaurant favorite"
        type="icon"
        content="fas fa-heart"
      ></button-icon>
    `

    const favoritedButton = document.querySelector('#favoritedButton')
    favoritedButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteMovie(this._restaurant.id)
      this._renderButton()
    })
  }
}

export default FavoriteButtonIntitiator