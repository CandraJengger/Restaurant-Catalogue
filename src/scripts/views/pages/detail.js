import UrlParser from '../../routes/url-parser'
import TheRestaurantDbSource from '../../data/TheRestaurantDbSource'
import CONFIG from '../../globals/config'
import '../templates/TabsComp'
import '../templates/CardComp'

const Detail = {
  async render () {
    return `
      <div class="detail-container">
        <div class="detail-img-wrapper">
          <img src="" alt="">
        </div>
        <div class="detail-section-wrapper">
          <div class="card-detail-wrapper">
            <card-comp></card-comp>
          </div>
          <div class="tabs-wrapper">
            <tabs-comp></tabs-comp>
          </div>
        </div>
      </div>
    `
  },

  async afterRender () {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner()
      const restaurant = await TheRestaurantDbSource.detailRestaurant(url.id)
      console.log(restaurant)
      const cardComp = document.querySelector('card-comp')
      const tabsCmp = document.querySelector('tabs-comp')
      const imageDetail = document.querySelector('.detail-img-wrapper img')
      tabsCmp.restaurantData = await restaurant
      cardComp.restaurantData = await restaurant
      if (restaurant.pictureId) {
        imageDetail.src = CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId
      } else {
        imageDetail.src = 'https://picsum.photos/id/666/800/450?grayscale'
      }
      imageDetail.alt = restaurant.name
    } catch (error) {
      console.error(error)
    }
  }
}

export default Detail