const ToastIntitiator = {
  init ({ toastContainer, html = 'Toast', duration = 700 }) {
    this._toastContainer = toastContainer
    this._html = html
    this._duration = duration

    this._renderToast()
  },

  async _renderToast () {
    this._toastContainer.innerHTML = `
      <toast-comp html="${await this._html}"></toast-comp>
    `

    const toast = document.querySelector('#toast')
    setTimeout(() => {
      toast.style.opacity = '0'
      toast.style.display = 'none'
    }, this._duration)
  }
}

export default ToastIntitiator