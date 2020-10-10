import ListCompItem from './ListCompItem'
import CardIntitiator from '../../utils/card-intitiator'

class ListComp extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  // set data restaurant
  set restaurantData (data) {
    this._restaurantData = data
    this.renderList()
  }

  get restaurantData () {
    return this._restaurantData
  }

  render () {
    this.innerHTML = '<ul id="list-component"></ul>'
  }

  renderList () {
    this.numberButton = 0
    this.numberCard = 0
    this._listWrapper = document.querySelector('#list-component')
    this._listRestaurant = ''

    this._listRestaurant += `
      ${
        this._restaurantData.map(data => {
          this.numberCard += 1
          this.numberButton += 1
          return ListCompItem({ 
            restaurantData: data,
            numberCard: this.numberCard,
            numberButton: this.numberButton
          })
        }).join('')
      }
    `
    this._listWrapper.innerHTML = this._listRestaurant
    
    CardIntitiator.init({
      btnDetails: document.querySelectorAll('button[id^="btn-detail"]'),
      cards: document.querySelectorAll('list-comp ul#list-component li.card')
    })
  }
}

customElements.define('list-comp', ListComp)