import TheRestaurantDbSource from '../data/TheRestaurantDbSource'

const FormCommentIntitiator = {
  init ({ container, form, inputName, inputReview, button, list, urlId }) {
    this._monthList = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember'
    ]
    this._container = container
    this._inputName = inputName
    this._inputReview = inputReview
    this._form = form
    this._button = button
    this._list = list
    this._urlId = urlId

    this._inputReview.addEventListener('focus', () => {
      this._showInput(this._inputName)
    })

    this._container.addEventListener('click', event => {
      if (event.target.parentElement !== document.querySelector('.form-content')) {
        this._hideInput(this._inputName)
      }
    })

    this._form.addEventListener('submit', event => {
      event.preventDefault()
      this._addNewReviewOnList({
        list: this._list,
        name: this._inputName.value,
        review: this._inputReview.value,
        date: this._setTimeString({
          day: new Date().getDate(),
          month: this._monthList[new Date().getMonth()],
          year: new Date().getFullYear()
        })
      })

      const newReview = {
        id: this._urlId,
        name: this._inputName.value,
        review: this._inputReview.value
      }

      TheRestaurantDbSource.postReview(newReview)
    })
  },

  _showInput (input) {
    input.style.display = 'block'
  },

  _hideInput (input) {
    input.style.display = 'none'
  },

  _addNewReviewOnList ({ list, name, review, date }) {
    const listItem = document.createElement('li')
    listItem.className = 'review'
    listItem.tabIndex = 0
    listItem.setAttribute('aria-label', `${name} said, ${review}`)
    listItem.innerHTML = `
      <div class="comment-wrapper">
        <h4>${name}</h4>
        <div class="comment-review">
          <i class="fas fa-comment"></i>
          <h5>${review}</h5>
        </div>
      </div>
      <p class="date">${date}</p>
    ` 
    list.appendChild(listItem)
  },

  _setTimeString ({ day, month, year }) {
    return `${day} ${month} ${year}`
  }
}

export default FormCommentIntitiator