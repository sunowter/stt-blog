### video 属性

video 不支持 IE8 及以下版本浏览器，支持三种视频格式：MP4，WebM 和 Ogg

```js
<video src='test.mp4' controls width='400' height='300'></video>
```

##### 禁止下载

```js
<video src='test.mp4' controls controlslist='nodownload' width='400' height='300'></video>
```

##### 禁止下载，禁止全屏

```js
<video src='test.mp4' controls controlslist='nodownload nofullscreen' width='400' height='300'></video>
```

##### 自动播放 （不同浏览器的表现不一样）

```js
<video src='test.mp4' controls autoplay width='400' height='300'></video>
```

##### 默认静音播放（可手动点开继续播放）

```js
<video src='test.mp4' controls muted width='400' height='300'></video>
```

##### 循环播放

```js
<video src='test.mp4' controls loop width='400' height='300'></video>
```

##### 预加载

```js
<video src='test.mp4' controls preload width='400' height='300'></video>
```

##### 封面图

```js
<video src='test.mp4' poster='poster.jpg' controls width='400' height='300'></video>
```

##### 音量控制

```js
<video src="test.mp4" poster="poster.jpg" controls width="400" height="300" id="_volume"></video>
<script>
  var video = document.getElementById('_volume')
  video.volume = 2 // 取值范围：0 到 1，0 是静音，0.5 是一半的音量，1 是最大音量（默认值）
  </script>
```

##### 播放时间控制

```js
 <video src="test.mp4" poster="poster.jpg" controls width="400" height="300" id="_time"></video>
  <script>
    var video = document.getElementById('_time')
    console.log(video.currentTime)  // 视频当前正在播放的时间（单位：s），进度条拖到哪就显示当前的时间
    video.currentTime = 60  // 默认从60秒处开始播放
  </script>
```

##### 播放地址切换 （常见于切换超清 高清 流畅，不同画质的视频地址不同）

```js
  <video src="test.mp4" controls autoplay width="400" height="300" id="_src"></video>
  <script>
    var video = document.getElementById('_src')
    console.log(video.src)    // http://127.0.0.1:8001/test.mp4  绝对地址，DOM 中是相对地址
    // video.src = 'test-2.mp4'  // 直接替换掉了原来的视频src
    setTimeout(() => {
      video.src = 'test-2.mp4'  // 播放到第 30s 的时候，自动切换视频
    }, 30000)

  </script>
```

##### 备用地址切换

```js
<video controls autoplay width="400" height="300" id="_source">
    <source src="test3.mp4" type="video/mp4" />
    <source src="test9.mp4" type="video/mp4" />
    <source src="test-2.mp4" type="video/mp4" />
  </video>
<script>
    var video = document.getElementById('_source')
    setTimeout(() => {
      console.log(video.currentSrc)    // http://127.0.0.1:8001/test.mp4
    }, 1000)
		// HTTP 载入失败，状态码 404。媒体资源 http://127.0.0.1:8001/test3.mp4 载入失败。
    // HTTP 载入失败，状态码 404。媒体资源 http://127.0.0.1:8001/test9.mp4 载入失败。
    // http://127.0.0.1:8001/test-2.mp4
    // 当第一段视频加载失败时，自动加载下一段视频
```

