import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb'
import ToastIntitiator from './toast-intitiator'

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
    console.log(restaurant)
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
      ToastIntitiator.init({
        toastContainer: document.querySelector('#toastContainer'),
        html: 'You added this restaurant to your favorites',
        duration: 1000
      })
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
      ToastIntitiator.init({
        toastContainer: document.querySelector('#toastContainer'),
        html: 'You deleted this restaurant from your favorites',
        duration: 1000
      })
    })
  }
}

export default FavoriteButtonIntitiator