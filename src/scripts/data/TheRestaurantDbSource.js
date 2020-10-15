import API_ENDPOINT from '../globals/api-endpoint'
import CONFIG from '../globals/config'

const TheRestaurantDbSource = {

  async listOfRestaurant () {
    const result = await this._fetchAPI(API_ENDPOINT.LIST_RESTAURANT)
    return result.restaurants
  },

  async detailRestaurant (id) {
    const result = await this._fetchAPI(API_ENDPOINT.DETAIL(id))
    return result.restaurant
  },

  async searchRestaurant (query) {
    const result = await this._fetchAPI(API_ENDPOINT.SEARCH_RESTAURANT(query))
    return result.restaurants
  },

  async _fetchAPI (apiEndpoint) {
    const response = await fetch(apiEndpoint)
    const responseJson = await response.json()
    return responseJson
  },

  async postReview (review) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY
      },
      body: JSON.stringify(review)
    }

    const result = await fetch(API_ENDPOINT.POST_REVIEW, options)
    return result
  }
}

export default TheRestaurantDbSource