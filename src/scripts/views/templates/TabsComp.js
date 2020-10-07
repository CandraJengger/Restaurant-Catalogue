import TabsIntitiator from '../../utils/tabs-intitiator'

class TabsComp extends HTMLElement {
  set restaurantData (data) {
    this._restaurantData = data
    this.render()
  }

  get restaurantData () {
    return this._restaurantData
  }

  render () {
    this.innerHTML = `
        <div class="tabs-links">
          <ul class="tabs">
            <li class="tab" tabindex="0" aria-label="Show Information">Information</li>
            <li class="tab active-tab" tabindex="0" aria-label="Show Menu">Menu</li>
            <li class="tab" tabindex="0" aria-label="Show Reviews">Reviews</li>
          </ul>
        </div>
        <p id="information" class="tab-view">
          &nbsp;&nbsp;${this._restaurantData.description}
        </p>
        <div id="menu" class="tab-view active-tab-view" aria-label="list of food and drink">
          <div class="menu-foods">
            <h4 tabindex="0">Foods</h4>
            <ul>
              ${
                this._restaurantData.menus.foods.map(food => `<li tabindex="0" aria-label="${food.name}">${food.name}</li>`).join(' ')
              }
            </ul>
          </div>
          <div class="menu-drinks">
            <h4 tabindex="0">Drinks</h4>
            <ul>
              ${
                this._restaurantData.menus.drinks.map(drink => `<li tabindex="0" aria-label="${drink.name}">${drink.name}</li>`).join(' ')
              }
            </ul>
          </div>
        </div>
        <div id="reviews" class="tab-view" aria-label="review list">
          <ul>
            ${
              this._restaurantData.consumerReviews.map(consumerReview => `
                <li class="review" tabindex="0" aria-label="${consumerReview.name} said, ${consumerReview.review}">
                  <div class="comment-wrapper">
                    <h4>${consumerReview.name}</h4>
                    <div class="comment-review">
                      <i class="fas fa-comment"></i>
                      <h5>${consumerReview.review}</h5>
                    </div>
                  </div>
                  <p class="date">${consumerReview.date}</p>
                </li>
              `).join(' ')
            }
          </ul>
        </div>
    `

    TabsIntitiator.init({
      tabLinks: document.querySelectorAll('.tab'), 
      tabViews: document.querySelectorAll('.tab-view')
    })
  }
}

customElements.define('tabs-comp', TabsComp)