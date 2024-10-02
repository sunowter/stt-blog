### 使用css控制视频控件隐藏

###### 全屏按钮
```js
video::-webkit-media-controls-fullscreen-button {
    display: none;
}
```
###### 播放按钮
```js
video::-webkit-media-controls-play-button {
    display: none;
}
```
###### 进度条
```js
video::-webkit-media-controls-timeline {
    display: none;
}
```
###### 观看的当前时间
```js
video::-webkit-media-controls-current-time-display{
    display: none;           
}
```
###### 剩余时间
```js
video::-webkit-media-controls-time-remaining-display {
    display: none;           
}
```
###### 音量按钮
```js
video::-webkit-media-controls-mute-button {
    display: none;           
}
video::-webkit-media-controls-toggle-closed-captions-button {
    display: none;           
}
``` 
###### 音量的控制条
```js
video::-webkit-media-controls-volume-slider {
    display: none;           
}
```
###### 所有控件
```js 
video::-webkit-media-controls-enclosure{
    display: none;
}
```
