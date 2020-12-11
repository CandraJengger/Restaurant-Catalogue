import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import CONFIG from '../../globals/config'

const ListCompItem = ({ restaurantData, numberCard, numberButton }) => `
  <li class="card" tabindex="0" aria-label="restaurant card ${numberCard}">
    <div class="card-img">
      <img 
        class="lazyload"
        data-src=${
          restaurantData.pictureId
          ? CONFIG.BASE_IMAGE_URL_MEDIUM + restaurantData.pictureId 
          : 'https://picsum.photos/id/666/800/450?grayscale'
        } 
        alt="${restaurantData.name}"
        crossorigin="anonymous"
      >
    </div>
    <div class="card-text">
      <h2 tabindex="0" aria-label="name ${restaurantData.name}">${restaurantData.name}</h2>
      <div class="card-icon">
        <span class="card-rating" tabindex="0" aria-label="this place has a rating of ${restaurantData.rating}">
          <i class="fas fa-star"></i>
          <p>Rating: </p>
          <p>${restaurantData.rating}</p>
        </span>
        <span class="card-location" tabindex="0" aria-label="located in ${restaurantData.city}">
          <i class="fas fa-map-marker-alt"></i>
          <p>${restaurantData.city}</p>
        </span>
      </div>
      <p class="text" tabindex="-1">${restaurantData.description}</p>
      <button-comp className="btn-detail${numberButton}" idCard="${restaurantData.id}">Detail</button-comp>
    </div>
  </li>
`

export default ListCompItem