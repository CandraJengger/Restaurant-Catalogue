import ListCompItem from './ListCompItem'

class ListComp extends HTMLElement {
  // set data restaurant
  set dataRestaurant (data) {
    this._dataRestaurant = data
    this.render()
  }

  // get data restaurant
  get dataRestaurant () {
    return this._dataRestaurant
  } 

  render () {
    this.numberButton = 0
    this.numberCard = 0
    this.innerHTML = `
      <ul id="list-component">
        ${
            this._dataRestaurant.map(data => {
              this.numberButton += 1
              this.numberButton += 1

              ListCompItem.setDataRestaurantItem({
                data,
                numberCard: this.numberCard,
                numberButton: this.numberButton
              }).join(' ')
            })
        }
      </ul>
    `
  }
}

customElements.define('list-comp', ListComp)