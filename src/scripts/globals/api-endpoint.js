import CONFIG from './config'

const API_ENDPOINT = {
  LIST_RESTAURANT: `${CONFIG.BASE_URL}list`,
  DETAIL: id => `${CONFIG.BASE_URL}detail/${id}`,
  SEARCH_RESTAURANT: query => `${CONFIG.BASE_URL}/search?q=${query}`
}

export default API_ENDPOINT