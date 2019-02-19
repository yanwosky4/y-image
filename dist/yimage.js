(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.YImage = factory());
}(this, function () { 'use strict';

  function YImage(context) {
    this.context = context;
    this.url = '';
    this.placeholdUrl = '';
    this.errorUrl = '';
    this.imgEle = null;
  } // 创建YImage实例


  YImage.with = function (context) {
    return new YImage(context);
  }; // 创建YImage实例


  YImage.prototype.load = function (url) {
    this.url = url;
    return this;
  };

  YImage.prototype.placeholder = function (placeholdUrl) {
    this.placeholdUrl = placeholdUrl;
    return this;
  };

  YImage.prototype.error = function (errorUrl) {
    this.errorUrl = errorUrl;
    return this;
  };

  YImage.prototype.callback = function (onsuccess, onerror) {
    if (onsuccess) {
      this.onsuccess = onsuccess.bind(this.context);
    }

    if (onerror) {
      this.onerror = onerror.bind(this.context);
    }

    return this;
  };

  YImage.prototype.into = function (imgEle) {
    var _this = this;

    var imgEle0 = null;
    var eleType = Object.prototype.toString.call(imgEle).slice(8, -1);

    if (eleType === 'HTMLImageElement') {
      imgEle0 = imgEle;
    } else if (eleType === 'String') {
      imgEle0 = document.querySelector(imgEle);
    } else {
      throw new Error('img element params type error(expect String or HTMLImageElement)');
    }

    this.imgEle = imgEle0; // 加载展位图

    if (this.placeholdUrl) {
      this.imgEle.src = this.placeholdUrl;
    }

    var imgTemp = new Image();
    imgTemp.src = this.url;
    var cbParams = {
      imgEle: this.imgEle,
      url: this.url,
      placeholdUrl: this.placeholdUrl,
      errorUrl: this.errorUrl
    };

    imgTemp.onload = function () {
      _this.imgEle.src = _this.url;

      if (_this.onsuccess) {
        _this.onsuccess(cbParams);
      }
    };

    imgTemp.onerror = function () {
      _this.imgEle.src = _this.errorUrl;

      if (_this.onerror) {
        _this.onerror(cbParams);
      }
    };
  };

  return YImage;

}));
