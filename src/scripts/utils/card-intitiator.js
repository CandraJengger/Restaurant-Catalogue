const CardIntitiator = {
  init ({ cards, btnDetails, id }) {
    if (window.innerWidth >= 660 && cards !== 0) {
      cards.forEach(card => {
        card.children[0].addEventListener('mouseenter', event => this._handleEventIn(event.target))
        card.children[0].addEventListener('mouseleave', event => this._handleEventOut(event.target))

        // focus
        card.addEventListener('focusin', () => this._handleEventIn(card.children[0]))
        card.addEventListener('focusout', () => this._handleEventOut(card.children[0]))
      })
    }

    btnDetails.forEach(btn => {
      btn.addEventListener('click', () => {
        window.location.href = `/#/detail/${btn.getAttribute('idCard')}`
      })
    })  
  },

  _handleEventIn (target) {
    if (target.classList.contains('card-img')) {
      target.style.height = '35vh'
      target.style.transition = 'height .5s ease'
      target.nextElementSibling.children[2].style.display = 'none'
    }
  },

  _handleEventOut (target) {
    target.style.height = (window.innerWidth >= 660 && window.innerWidth < 1024) 
      ? '23vh' 
      : (window.innerWidth >= 1024) && '17vh'
    target.children[0].style.transform = 'scale(1) translate(0, 0)'
    target.nextElementSibling.children[2].style.display = 'block'
  }
}

export default CardIntitiator