import ListCompItem from './ListCompItem'
import CardIntitiator from '../../utils/card-intitiator'

class ListComp extends HTMLElement {
  // set data restaurant
  set restaurantData (data) {
    this._restaurantData = data
    this.render()
  }

  get restaurantData () {
    return this._restaurantData
  }

  render () {
    this.numberButton = 0
    this.numberCard = 0
    this.innerHTML = `
      <ul id="list-component">
      ${
        this.innerHTML += this._restaurantData.map(data => {
          this.numberCard += 1
          this.numberButton += 1
          return ListCompItem({ 
            restaurantData: data,
            numberCard: this.numberCard,
            numberButton: this.numberButton
          })
      }).join('')
    }
      </ul>
    `

    CardIntitiator.init({
      btnDetails: document.querySelectorAll('button[id^="btn-detail"]'),
      cards: document.querySelectorAll('list-comp ul#list-component li.card')
    })
  }
}

customElements.define('list-comp', ListComp)