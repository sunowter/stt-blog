#### 示例

```js
<video id="video"
  style="object-fit:fill"
  autoplay
  webkit-playsinline
  playsinline
  x5-video-player-type="h5"
  x5-video-player-fullscreen="true"
  x5-video-orientation="portraint"
  src="video.mp4" />

  object-fit: fill  视频内容充满整个video容器
  poster:"img.jpg" 视频封面
	autoplay： 自动播放
	auto - 当页面加载后载入整个视频
	meta - 当页面加载后只载入元数据
	none - 当页面加载后不载入视频
	muted：当设置该属性后，它规定视频的音频输出应该被静音
	webkit-playsinline playsinline:  内联播放（如果需要在h5页面内播放视频，需要在视频标签上加上 webkit-playsinline，在iOS10以后，需要加上playsinline,建议同时加上这两个属性。同时还需要app支持这种模式）
	x5-video-player-type="h5" :  启用x5内核H5播放器
	x5-video-player-fullscreen="true"  全屏设置。ture和false的设置会导致布局上的不一样
	x5-video-orientation="portraint" ：声明播放器支持的方向，可选值landscape 横屏,portraint竖屏。默认值portraint。无论是直播还是全屏H5一般都是竖屏播放，  但是这个属性需要x5-video-player-type开启H5模式
```

### 常见问题：

###### ios 黑屏问题
  ios 在播放视频时，会出现短暂的黑屏，然后正常显示
  解决方法： 在视频上层覆盖一个 添加一个div并用一张图片填充，制造播放前加载假象。然后监听事件 timeupdate ，视频播放有画面时移除这个“div块”
```js
  video.addEventListener('timeupdate', function(){
  	if(video.currentTime > 0.1){
  		posterImg.hidden();
  }
  })

 ```
