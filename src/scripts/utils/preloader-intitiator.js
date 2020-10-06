const PreloaderIntitiator = {
  showLoading (spinner) {
    spinner.style.display = 'block'
  },

  hideLoading (spinner) {
    spinner.style.display = 'none'
  },

  showError ({ errorMsg, errorWrapper }) {
    const title = errorWrapper.children[0].children[0]
    const buttonReload = errorWrapper.children[0].children[1]
    errorWrapper.style.display = 'block'
    title.textContent = errorMsg
    buttonReload.addEventListener('click', () => {
      window.location.reload()
    })
  },

  hideError (errorWrapper) {
    errorWrapper.style.display = 'none'
  }
}

export default PreloaderIntitiator