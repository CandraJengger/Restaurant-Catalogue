/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import FavoriteButtonIntitiator from '../src/scripts/utils/favorite-button-intitiator'
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb'

const addFavoriteButtonContainer = () => {
  document.body.innerHTML = '<div id="favoriteButtonContanier"></div>'
}

describe('Liking a Restaurant', () => {
  beforeEach(() => {
    addFavoriteButtonContainer()
  })

  it('should show the favorite button when the restaurant has not been favorited before', async () => {
    await FavoriteButtonIntitiator.init({
      favoriteButtonContainer: document.getElementById('favoriteButtonContanier'),
      restaurant: {
        id: 1
      }
    })

    setTimeout(() => {
      expect(document.querySelector('[aria-label="make this restaurant a favorite"]'))
        .toBeTruthy()
    }, 1000)
  })

  it('should not show the cancel favorite button when the restaurant not been favorited before', async () => {
    await FavoriteButtonIntitiator.init({
      favoriteButtonContainer: document.getElementById('favoriteButtonContanier'),
      restaurant: {
        id: 1
      }
    })

    setTimeout(() => {
      expect(document.querySelector('[aria-label="cancel this restaurant favorite"]'))
        .toBeFalsy()
    }, 1000)
  })
  
  it('should be able to favorite the restaurant', async () => {
    FavoriteButtonIntitiator.init({
      favoriteButtonContainer: document.getElementById('favoriteButtonContanier'),
      restaurant: {
        id: 1
      }
    })

    setTimeout(() => {
      document.getElementById('favoriteButton').dispatchEvent(new Event('click'))
      const restaurant = FavoriteRestaurantIdb.getRestaurant(1)

      expect(restaurant).toEqual({ id: 1 })

      FavoriteRestaurantIdb.deleteRestaurant(1)
    }, 1000)
  })

  it('should not add a restaurant when it has no id', async () => {
    FavoriteButtonIntitiator.init({
      favoriteButtonContainer: document.getElementById('favoriteButtonContanier'),
      restaurant: {
        id: {}
      }
    })

    setTimeout(async () => {
      document.getElementById('favoriteButton').dispatchEvent(new Event('click'))

      expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([])
    }, 1000)
  })
}) 