import TheRestaurantDbSource from '../../data/TheRestaurantDbSource'
import PreloaderIntitiator from '../../utils/preloader-intitiator'
import '../templates/HeroContent'
import '../templates/MainContent'

const Home = {
  async render () {
    return `
      <hero-content></hero-content>
      <main-content></main-content>
    `
  },

  async afterRender () {
    const spinnerComp = document.querySelector('spinner-comp .spinner-wrapper')
    const errorComp = document.querySelector('error-comp .error-wrapper')
    try {
      PreloaderIntitiator.showLoading(spinnerComp)

      const listRestaurant = document.querySelector('list-comp')
      const restaurant = await TheRestaurantDbSource.listOfRestaurant()
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

export default Home