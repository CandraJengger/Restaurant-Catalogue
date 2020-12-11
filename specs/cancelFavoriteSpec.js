/* eslint-disable no-undef */
import FavoriteButtonIntitiator from '../src/scripts/utils/favorite-button-intitiator'
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb'

const addFavoriteButtonContainer = () => {
  document.body.innerHTML = '<div id="favoriteButtonContainer"></div>'
}
 
describe('Unliking A Restaurant', () => {
  // beforeEach(async () => {
  //   addFavoriteButtonContainer()
  //   await FavoriteRestaurantIdb.putRestaurant({ id: 1 })
  // })
 
  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteMovie(1)
  })
 
  fit('should display cancel favorite widget when the restaurant has been favorited', async () => {
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 })
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>'
    await FavoriteButtonIntitiator.init({
      favoriteButtonContainer: document.getElementById('favoriteButtonContainer'),
      restaurant: {
        id: 1
      }
    })

    setTimeout(() => {
      console.log(document.getElementById('favoritedButton'))
    }, 100)
    
    setTimeout(async () => {
      await FavoriteRestaurantIdb.getRestaurant(1)
      expect(document.querySelector('[aria-label="cancel this restaurant favorite"]'))
        .toBeTruthy()
    }, 2000)
  })
 
  //   it('should not display favorite widget when the restaurant has been liked', async () => {
  //     await FavoriteButtonIntitiator.init({
  //       favoriteButtonContainer: document.getElementById('favoriteButtonContanier'),
  //       restaurant: {
  //         id: 1
  //       }
  //     })
    
//     setTimeout(() => {
//       expect(document.querySelector('[aria-label="make this restaurant a favorite"]'))
//         .toBeFalsy()
//     }, 1000)
//   })
})