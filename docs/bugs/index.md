#### el-table 使用 v-if 时，进行切换时样式错乱

多表格进行切换时，使用 v-if/fixed 导中样式错乱，在 el-table 上加上 key 属性，确保 key 唯一

#### el-form 中 el-form-item 使用 v-if 导致校验错位

在 el-form-item 加个唯一标识 key

#### 浏览器打开 mp4 和 pdf 文件直接下载而不是打开

链接后面拼接 response-content-type

```js
1、videourl=`${videourl}?response-content-type=video/mp4`
2、pdfurl=`${pdfurl}?response-content-type=application/pdf`
```

#### el-select 添加 romte 后不显示下拉箭头

```js
1、给el-slelect添加类名如：my-select
2 、.my-select {
 /deep/.el-select__caret::before {
   content: "\e6e1";
 }
 /deep/.is-focus {
   .el-select__caret:first-child {
     transform: rotateZ(0deg);
   }
 }
}
```
