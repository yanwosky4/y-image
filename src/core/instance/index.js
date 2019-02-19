function YImage (context) {
  this.context = context
  this.url = ''
  this.placeholdUrl = ''
  this.errorUrl = ''
  this.imgEle = null
}
// 创建YImage实例
YImage.with = function (context) {
  return new YImage(context)
}
// 创建YImage实例
YImage.prototype.load = function (url) {
  this.url = url
  return this
}
YImage.prototype.placeholder = function (placeholdUrl) {
  this.placeholdUrl = placeholdUrl
  return this
}
YImage.prototype.error = function (errorUrl) {
  this.errorUrl = errorUrl
  return this
}
YImage.prototype.callback = function (onsuccess, onerror) {
  if (onsuccess) {
    this.onsuccess = onsuccess.bind(this.context)
  }
  if (onerror) {
    this.onerror = onerror.bind(this.context)
  }
  return this
}
YImage.prototype.into = function (imgEle) {
  let imgEle0 = null
  const eleType = Object.prototype.toString.call(imgEle).slice(8, -1)
  if (eleType === 'HTMLImageElement') {
    imgEle0 = imgEle
  } else if (eleType === 'String') {
    imgEle0 = document.querySelector(imgEle)
  } else {
    throw new Error('img element params type error(expect String or HTMLImageElement)')
  }
  this.imgEle = imgEle0
  // 加载展位图
  if (this.placeholdUrl) {
    this.imgEle.src = this.placeholdUrl
  }
  const imgTemp = new Image()
  imgTemp.src = this.url
  const cbParams = {imgEle: this.imgEle, url: this.url, placeholdUrl: this.placeholdUrl, errorUrl: this.errorUrl}
  imgTemp.onload = () => {
    this.imgEle.src = this.url
    if (this.onsuccess) {
      this.onsuccess(cbParams)
    }
  }
  imgTemp.onerror = () => {
    this.imgEle.src = this.errorUrl
    if (this.onerror) {
      this.onerror(cbParams)
    }
  }
}

export default YImage
