import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb'
import PreloaderIntitiator from '../../utils/preloader-intitiator'
import '../templates/ListComp'

const Favorite = {
  async render () {
    return `
      <div id="favorite-content">
        <h1>Favorite Restaurant</h1>
        <h2 class="not-exist">You haven't chosen your favorite restaurant</h2>
        <list-comp></list-comp>
      </div>
    `
  },

  async afterRender () {
    const spinnerComp = document.querySelector('spinner-comp .spinner-wrapper')
    const errorComp = document.querySelector('error-comp .error-wrapper')
    const headingTwo = document.querySelector('.not-exist')
    try {
      PreloaderIntitiator.showLoading(spinnerComp)

      const listRestaurant = document.querySelector('list-comp')
      const restaurant = await FavoriteRestaurantIdb.getAllRestaurant()
      
      if (restaurant.length > 0) {
        headingTwo.style.display = 'none'
        listRestaurant.restaurantData = restaurant
      }
    } catch (error) {
      console.log(error)
      PreloaderIntitiator.showError({
        errorMsg: 'Ups.. Something went wrong',
        errorWrapper: errorComp
      })
    } finally {
      PreloaderIntitiator.hideLoading(spinnerComp)
    }
  }
}

export default Favorite