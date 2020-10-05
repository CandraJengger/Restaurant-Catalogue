import TheRestaurantDbSource from '../../data/TheRestaurantDbSource'
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
    try {
      const listRestaurant = document.querySelector('list-comp')
      const restaurant = await TheRestaurantDbSource.listOfRestaurant()
      listRestaurant.restaurantData = await restaurant
    } catch (error) {
      console.error(error)
    }
  }
} 

export default Home