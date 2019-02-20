# y-image

> web端图片加载库 - 根据不同状态(加载中，成功， 失败),加载不同图片

## 效果
<img src="https://github.com/yanwosky4/ImageBucket/blob/master/assets/loadingpic0.gif?raw=true" width="200" height="200" />

## 安装

#### 1. CDN引入
```
<script src="https://cdn.jsdelivr.net/npm/y-image/dist/yimage.js"></script>
```
#### 2. npm引入
```
# 最新稳定版
npm install y-image --save-dev
```
## 用法
#### 1. CDN方式调用
```html
	<img id="myImg" style="width: 300px;height: 300px;" title="我是待加载的图片"/>
	<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/y-image/dist/yimage.js"></script>
	<script type="text/javascript">
		// 链式调用YImage，加载图片
		YImage.with(this)     // load(url): 需要加载的图片
		.load('http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg')
        .placeholder('https://i.loli.net/2019/02/19/5c6ba43e10a8f.gif') // 加载完成前的占位图
        .error('https://i.loli.net/2019/02/19/5c6ba4988b892.jpg') // 加载失败的显示图
		.into('#myImg')
	</script>
```

#### 2. npm 方式调用
> 步骤1 - npm安装
```
npm install y-image --save-dev
```
> 步骤2 - YImage: 调用
```html
    import YImage from 'y-image'
    
    YImage.with(this)    // load(url): 需要加载的图片
    .load('http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg')
    .placeholder('https://i.loli.net/2019/02/19/5c6ba43e10a8f.gif') // 加载完成前的占位图
    .error('https://i.loli.net/2019/02/19/5c6ba4988b892.jpg') // 加载失败的显示图
    .into('#myImg') //  img标签id: <img id="myImg"/>
```

## API
#### YImage - 静态方法
##### 1. with(context):
    context: 当前上下文
  返回 YImage实例
#### YImage - 实例方法
##### 1. load(url)
```
- url: 需要加载图片的url
return 当前YImage实例
```
##### 2. placeholder(url)
```
- url: 加载完成前的占位图的url
return 当前YImage实例 
``` 
##### 3. error(url)
```
- url: 加载失败的显示图的url
return 当前YImage实例
```
##### 4. callback(onsuccess, onerror)
```
- onsuccess: 加载成功的回调函数
- onerror:   加载失败的回调函数
return 当前YImage实例
```
##### 5. into(elementStr)
```
- elementStr: 需要显示的img标签的CSS选择器 (eg. #imgId imgClass img ),
                若有多个符合，则返回第一个
return void
```

## 源码地址
* github源码地址: https://github.com/yanwosky4/y-image
* npm地址: https://www.npmjs.com/package/y-image
* csdn博客地址: https://blog.csdn.net/sinat_20623345/article/details/87740884