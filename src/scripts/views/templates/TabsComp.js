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
            <li class="tab">Information</li>
            <li class="tab active-tab">Menu</li>
            <li class="tab">Reviews</li>
          </ul>
        </div>
        <div id="information" class="tab-view ">
          &nbsp;&nbsp;${this._restaurantData.description}
        </div>
        <div id="menu" class="tab-view active-tab-view">
          <div class="menu-foods">
            <h4>Foods</h4>
            <ul>
              ${
                this._restaurantData.menus.foods.map(food => `<li>${food.name}</li>`).join(' ')
              }
            </ul>
          </div>
          <div class="menu-drinks">
            <h4>Drinks</h4>
            <ul>
              ${
                this._restaurantData.menus.drinks.map(drink => `<li>${drink.name}</li>`).join(' ')
              }
            </ul>
          </div>
        </div>
        <div id="reviews" class="tab-view">
          <ul>
            ${
              this._restaurantData.consumerReviews.map(consumerReview => `
                <li class="review">
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