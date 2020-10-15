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

      const searchRestaurant = document.querySelector('.search-wrapper input[type=search]')
      searchRestaurant.addEventListener('keyup', async event => {
        try {
          const searchResult = await TheRestaurantDbSource.searchRestaurant(event.target.value)
          if (event.target.value.length > 0 && searchResult.length === 0) {
            throw Error()
          }

          if (event.target.value === '') {
            listRestaurant.restaurantData = await restaurant 
          }

          listRestaurant.restaurantData = await searchResult
        } catch (error) {
          listRestaurant.children[0].innerHTML = `
            <div class="error-search">
              <h2>place not found</h2>
            </div>
          `
        }
      })
    } catch (error) {
      PreloaderIntitiator.showError({
        errorMsg: 'Ups.. Something went wrong',
        errorWrapper: errorComp
      })
    } finally {
      PreloaderIntitiator.hideLoading(spinnerComp)
    }
  }
} 

export default Home