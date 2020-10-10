import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb'
import PreloaderIntitiator from '../../utils/preloader-intitiator'
import '../templates/ListComp'

const Favorite = {
  async render () {
    return `
      <div id="content">
        <h2>Your Favorite Restaurant</h2>
        <list-comp></list-comp>
      </div>
    `
  },

  async afterRender () {
    const spinnerComp = document.querySelector('spinner-comp .spinner-wrapper')
    const errorComp = document.querySelector('error-comp .error-wrapper')
    try {
      PreloaderIntitiator.showLoading(spinnerComp)

      const listRestaurant = document.querySelector('list-comp')
      const restaurant = await FavoriteRestaurantIdb.getAllRestaurant()
      listRestaurant.restaurantData = await restaurant
    } catch (error) {
      console.error(error)
      PreloaderIntitiator.showError({
        errorMsg: error,
        errorWrapper: errorComp
      })
    } finally {
      PreloaderIntitiator.hideLoading(spinnerComp)
    }
  }
}

export default Favorite