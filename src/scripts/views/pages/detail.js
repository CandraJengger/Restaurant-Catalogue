import UrlParser from '../../routes/url-parser'
import TheRestaurantDbSource from '../../data/TheRestaurantDbSource'
import FavoriteButtonIntitiator from '../../utils/favorite-button-intitiator'
import FormCommentIntitiator from '../../utils/form-comment-intitiator'
import CONFIG from '../../globals/config'
import PreloaderIntitiator from '../../utils/preloader-intitiator'
import '../templates/TabsComp'
import '../templates/CardComp'

const Detail = {
  async render () {
    return `
      <div class="detail-container">
        <div class="detail-img-wrapper">
          <img src="" alt="" crossorigin="anonymous">
        </div>
        <div class="detail-section-wrapper">
          <div class="card-detail-wrapper" id="card-detail-wrapper">
            <card-comp></card-comp>
          </div>
          <div class="tabs-wrapper">
            <tabs-comp></tabs-comp>
          </div>
        </div>
      </div>
      <div id="favoriteButtonContainer"></div>
      <div id="toastContainer"></div>
    `
  },

  async afterRender () {
    const spinnerComp = document.querySelector('spinner-comp .spinner-wrapper')
    const errorComp = document.querySelector('error-comp .error-wrapper')
    try {
      PreloaderIntitiator.showLoading(spinnerComp)

      // request API
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

      // Button favorite
      const favoriteButtonContainer = document.querySelector('#favoriteButtonContainer')
      FavoriteButtonIntitiator.init({
        favoriteButtonContainer,
        restaurant
      })

      // Form Comment
      FormCommentIntitiator.init({
        container: document.querySelector('.detail-container'),
        form: document.getElementById('formReviews'),
        inputName: document.getElementById('namePerson'),
        inputReview: document.getElementById('comment'),
        button: document.getElementById('postButton'),
        list: document.querySelector('#reviews ul'),
        urlId: url.id
      })
    } catch (error) {
      console.error(error)
      PreloaderIntitiator.showError({
        errorMsg: 'Ups.. Something went wrong',
        errorWrapper: errorComp
      })
    } finally {
      PreloaderIntitiator.hideLoading(spinnerComp)
    }
  }
}

export default Detail