# CSS 盒子模型学习笔记

> 重点看代码里面的参数

## 目录

1. [边框 内边距 外边距](#1-边框-内边距-外边距)
2. [过渡效果](#2-过渡效果)
3. [尺寸计算](#3-尺寸计算)
4. [盒子背景](#4-盒子背景)
5. [<span style="color:#e74c3c">**背景渐变**</span>](#5-背景渐变)
6. [<span style="color:#e74c3c">**盒子阴影**</span>](#6-盒子阴影)
7. [样式初始化](#7-样式初始化)
8. [字体图标](#8-字体图标)
9. [精灵图](#9-精灵图)

---

## 1. 边框 内边距 外边距

**1.边框**

```css
border: 1px solid #000; /* 边框宽度 边框样式(dotted dashed solid) 边框颜色 */
border-top/bottom/left/right: 1px solid #000;
border-radius: 5px; /* 边框圆角 */
```

**2.内边距**

```css
padding: 10px;
padding-top/bottom/left/right: 10px;
```

**3.外边距**

```css
margin: 10px;
margin-top/bottom/left/right: 10px;

/* 居中 */
margin: 0 auto;
```

- 外边距折叠：选小的外边距
- 外边距塌陷：给父盒子加上边框或者内边距

## 2. 过渡效果

给了一种延迟的效果，而不是瞬间。鼠标经过图片放大、表单获得焦点、输入框变宽。

```css
transition: all 0.5s;
```

## 3. 尺寸计算

因为 `padding` 和 `margin` 会改变盒子的尺寸，所以使用：

```css
box-sizing: border-box;
```

## 4. 盒子背景

```css
/* 1. 背景颜色 */
background-color: #000;

/* 2. 背景图片 */
background-image: url();

/* 3. 背景重复 */
background-repeat: no-repeat/repeat/repeat-x/repeat-y;

/* 4. 背景位置 */
background-position: left top center;

/* 5. 背景大小：cover 会将照片撑满整个盒子，contain 盒子会留一部分空白 */
background-size: cover/contain;

/* 6. 背景是否随页面滚动 */
background-attachment: scroll（滚动）/fixed（固定）;

/* 复合写法 */
background: #000 url() no-repeat fixed center/cover;
```

## 5. 背景渐变

```css
background: linear-gradient(to right, red, blue);
background: radial-gradient(circle, red, blue);
background-image: linear-gradient(to right, red, blue);
```

在对文字渐变的时候：

```css
/* 渐变背景文字 */
background-image: linear-gradient(97deg, #0096FF, #BB64FF 42%, #F2416B 74%, #EB7500);
/* -webkit- 前缀  谷歌浏览器老版本的兼容性写法 */
-webkit-background-clip: text;
/* 背景裁剪 以文字的形式裁剪 */
background-clip: text;
/* 文本填充颜色 为透明 */
-webkit-text-fill-color: transparent;
```

## 6. 盒子阴影

```css
/* 盒子阴影: 水平偏移量  垂直偏移量  模糊距离  扩散距离  阴影颜色 */
box-shadow: 0 0 5px 5px #000;

transition: all 0.5s;
```

## 7. 样式初始化

https://necolas.github.io/normalize.css/

## 8. 字体图标

将图标以字体形式嵌入网页，可以修改样式：减少 HTTP 请求，兼容性好。

1. 下载字体图标库 http://www.iconfont.cn/
2. 引入字体图标库
3. 链接字体图标库

```html
<link rel="stylesheet" href="./iconfont/iconfont.css">
<style>
  /* 修改字体图标样式 */
  .icon-good {
    font-size: 140px;
    color: red;
  }
</style>
</head>

<body>
  <!-- 使用类名引入 -->
  <span class="iconfont icon-good"></span>
  <i class="iconfont icon-xihuan"></i>
</body>
```

## 9. 精灵图

将多个小图标合并为一张图片作为背景，通过调整 `background-position` 属性来显示不同的图标。

通过设计稿来计算移动的坐标 http://www.tugaigai.com/online_ps/

```css
.box1 {
  background: url(img/sprite.png) no-repeat;
  background-position: -0px -0px;
  width: 100px;
  height: 100px;
}
```
