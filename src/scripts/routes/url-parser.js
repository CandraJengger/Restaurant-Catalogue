const UrlParser = {
  parserActiveUrlWithCombiner () {
    const url = window.location.hash.slice(1).toLowerCase()
    const splitedUrl = this._urlSplitter(url)

    return this._urlCombiner(splitedUrl)
  },

  parserActiveUrlWithoutCombiner () {
    const url = window.location.hash.slice(1).toLowerCase()
    return this._urlSplitter(url)
  },

  _urlSplitter (url) {
    const urlsSplit = url.split('/')
    return {
      resource: urlsSplit[1] || null,
      id: urlsSplit[2] || null,
      verb: urlsSplit[3] || null
    }
  },

  _urlCombiner (splittedUrl) {
    return (splittedUrl.resource ? `/${splittedUrl.resource}` : '/') +
    (splittedUrl.id ? '/:id' : '') +
    (splittedUrl.verb ? `/${splittedUrl.verb}` : '')
  }
}

export default UrlParser