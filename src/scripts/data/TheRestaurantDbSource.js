import API_ENDPOINT from '../globals/api-endpoint'

const TheRestaurantDbSource = {

  async listOfRestaurant () {
    const result = await this._fetchAPI(API_ENDPOINT.LIST_RESTAURANT)
    return result.restaurants
  },

  async detailRestaurant (id) {
    const result = await this._fetchAPI(API_ENDPOINT.DETAIL(id))
    return result.restaurant
  },

  async _fetchAPI (apiEndpoint) {
    const response = await fetch(apiEndpoint)
    const responseJson = await response.json()
    return responseJson
  }
}

export default TheRestaurantDbSource