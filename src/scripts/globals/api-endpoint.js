import CONFIG from './config'

const API_ENDPOINT = {
  LIST_RESTAURANT: `${CONFIG}list`,
  DETAIL: id => `${CONFIG}detail/${id}`
}

export default API_ENDPOINT