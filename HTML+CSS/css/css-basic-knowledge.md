# CSS 学习笔记

## 目录

- [1. 内联和内部样式表、外部样式表](#1-内联和内部样式表外部样式表)
  - [内联](#内联) · [内部](#内部放在-head-标签内) · [外部](#外部放在-head-标签内)
- [2. 基础选择器](#2-基础选择器)
  - [类型选择器](#类型选择器) · [类选择器](#类选择器) · [ID 选择器](#id-选择器) · [通配符选择器](#通配符选择器)
- [3. 补充知识点](#3-补充知识点)
- [4. 关系选择器](#4-关系选择器)
  - [后代选择器](#后代选择器) · [子代选择器](#子代选择器) · [邻接兄弟选择器](#邻接兄弟选择器) · [通用兄弟选择器](#通用兄弟选择器)
- [5. CSS 文本样式](#5-css-文本样式)
  - [字体样式](#字体样式)：[color](#1-color) · [font-family](#2-font-family) · [font-size](#3-font-size) · [font-style](#4-font-style) · [font-weight](#5-font-weight) · [text-decoration](#6-text-decoration)
  - [文本布局](#文本布局)：[text-align](#1-text-align) · [text-indent](#2-text-indent) · [letter-spacing](#3-letter-spacing) · [line-height](#4-line-height)
- [6. font 简写](#6-font-简写)
  - [CSS 继承特性](#css-继承特性)
- [7. 分组选择器](#7-分组选择器)
- [8. 伪类选择器](#8-伪类选择器)
  - [链接伪类选择器](#链接伪类选择器) · [状态伪类选择器](#状态伪类选择器) · [结构伪类选择器](#结构伪类选择器)
  - [表单伪类选择器](#表单伪类选择器) · [伪元素选择器](#伪元素选择器) · [属性选择器](#属性选择器)
- [9. 表格合并](#9-表格合并)
- [10. CSS 特性：优先级](#10-css-特性优先级)
- [11. 实践过程中出现的问题](#11-实践过程中出现的问题)

---

## 1. 内联和内部样式表、外部样式表

### 内联

```html
<p style="color: pink"> </p>
```

### 内部（放在 head 标签内）

```html
<style>
div {
    color: blue;
}

strong {
    color: purple;
}
</style>
```

### 外部（放在 head 标签内）

```html
<link rel="stylesheet" href="./css/style.css" ">
```

---

## 2. 基础选择器

类型选择器、类选择器、ID 选择器、通配符选择器

### 类型选择器

在 head 标签内：

```html
<style>
    p {
        color：blue；
    }

</style>
```

### 类选择器

在 head 标签内：

```html
<style>
    .red {
        color：red；
    }
</style>
```

在 body 标签内：

```html
<p class="red"></p>
```

### ID 选择器

他和类选择器一样，但是 ID 选择器只能选择一个元素。

在 head 标签内：

```html
<style>
    #red {
        color：red；
    }
</style>
```

在 body 标签内：

```html
<p id="red"></p>
```

### 通配符选择器

在 head 标签内：

```html
<style>
    * {
        color：red；
    }
</style>
```

---

## 3. 补充知识点

```css
* {
  margin: 0;
  /* 清除所有元素的外边距 */
  padding: 0;
  /* 清除所有元素的内边距 */
}
```

```css
/* 让块级盒子在浏览器中水平居中对齐 */
.center {
  margin: 0 auto;
}
```

---

## 4. 关系选择器

后代选择器、子代选择器、邻接兄弟选择器、通用兄弟选择器

### 后代选择器

```html
<style>
    div p {
        color：red；
    }
</style>
```

### 子代选择器

```html
<style>
    div > p {
        color：red；
    }
</style>

<div>
```

### 邻接兄弟选择器

```html
<style>
    div + p {
        color:red;
    }
</style>
```

### 通用兄弟选择器

```html
<style>
    div ~ p {
        color:red;
    }
</style>
```

---

## 5. CSS 文本样式

字体样式、文本布局

### 字体样式

`color` `font-size` `font-family` `font-style` `font-weight` `text-decoration`

#### 1. color

开发使用 `#FF0000`（十六进制），特殊情况用 `rgb()` / `rgba()` 文字透明

```html
<style>
    p {
        color: red;
    }
    p {
        color: #FF0000;
    }
    h1 {
        color: rgb(255, 0, 0);
    }
</style>
```

#### 2. font-family

开发中一般选择的是无衬线字体

```html
<style>
    p {
        font-family: Arial, Helvetica, sans-serif;
    }
</style>
```

#### 3. font-size

默认 16px

```html
<style>
    p {
        font-size: 16px;
    }
</style>
```

#### 4. font-style

normal 关闭斜体，italic 设置斜体

```html
<style>
    p {
        font-style: italic(normal);
    }
</style>
```

#### 5. font-weight

normal(400) 关闭加粗，bold(700) 设置加粗

```html
<style>
    p {
        font-weight: 400(700);
    }
</style>
```

#### 6. text-decoration

none 关闭下划线，underline 设置下划线，line-through 设置删除线

```html
<style>
    p {
        text-decoration: none;
    }
</style>
```

### 文本布局

`line-height` `text-align` `text-indent` `letter-spacing`（字符之间的间距）

#### 1. text-align

left、center、right、justify(自动改变字间距，两端对齐)

```html
<style>
    p {
        text-align: center;
    }
</style>
```

#### 2. text-indent

2em 缩进

```html
<style>
    p {
        text-indent: 2em;
    }
</style>
```

#### 3. letter-spacing

```html
<style>
    p {
        letter-spacing: 2px;
    }
</style>
```

#### 4. line-height

一般用于垂直居中（行高和盒子的高度一样）

```html
<style>
    p {
        line-height: 1.5;
    }
</style>
```

---

## 6. font 简写

`font-size/line-height` `font-family`，注意这样是有严格的书写顺序的

```html
<style>
    p {
        font: 16px/1.5 Arial, Helvetica, sans-serif;
    }
</style>
```

### CSS 继承特性

子元素会继承部分父元素的样式，比如说字体、颜色

---

## 7. 分组选择器

当多个元素具备相同的样式的时候，使用分组选择器将不同的选择器组合在一起。

```html
<style>
    p,h1,h2,h3,h4,h5,h6 {
        color: red;
    }
</style>
```

---

## 8. 伪类选择器

### 链接伪类选择器

开发中一般只用 link 和 visited，而且要注意写的顺序：link（初始）、visited（已访问链接）、hover（鼠标悬停）、active（点击但是没有松开）

```html
<style>
    a:link {
        color: red;
    }
    a:visited {
        color: blue;
    }
    a:hover {
        color: yellow;
    }
    a:active {
        color: green;
    }
</style>
```

### 状态伪类选择器

用户以某种方式和文档交互的时候应用：`:focus`(点击之后的聚焦)、`:hover`(悬停)

```html
<style>
    .box {
        width: 200px;
        height: 200px;
        background-color: red;
        color: white;

    }
    .box:focus {
        background-color: yellow;
        color: red;
    }
    .box:hover {
        background-color: blue;
        color: yellow;
    }
</style>
```

### 结构伪类选择器

`:first-child` `:last-child` `:nth-child(odd/even)`

```html
<style>
    .uli li:first-child {
        color: red;
    }
    .uli li:last-child {
        color: blue;
    }
    .uli li:nth-child(odd) {
        color: yellow;
    }
</style>
```

### 表单伪类选择器

用途：

1. 表单按钮禁用的时候，调整颜色。
2. 复选框选中修改样式

`:disabled` `:checked`

```html
<style>
    botton:disabled {
        background: gray;
        opacity: .4;
    }
    input:checked+lable {
        background-color: red;
    }
</style>
```

### 伪元素选择器

`::first-line` `::first-letter` `::placeholder` `::before` `::after`

```html
<style>
    /* 选择首行 */
    p::first-line {
    color: #ff6900;
    }

    /* 选择首字母 */
    p::first-letter {
    color: red;
    font-size: 28px;
    }

    textarea {
    color: pink;
    font-size: 14px;
    }

    textarea::placeholder {
    color: red;
    font-size: 12px;
    }

    /* before和after伪元素 */
    div::before {
    content: '我是';
    color: red;
    }

    div::after {
    content: '老师';
    color: red;
    }
</style>
```

### 属性选择器

```text
[属性名]
[属性名=属性值]
[属性名^=属性值]
[属性名$=属性值]
[属性名*=属性值]
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>属性选择器</title>
<style>
    a {
    color: #000;
    text-decoration: none;
    }

    /* 属性选择器 */
    /* 1. 选择包含属性 */
    /* a[class] {
    color: red;
    } */

    /* 2. 选择属性等于值  完全匹配 */
    /* a[class="font"] {
    color: red;
    } */

    /* 3. 选择属性值以xx开头 */
    /* a[class^="font"] {
    color: red;
    } */

    /* 4. 选择属性值以xx结尾 */
    /* a[class$=t14] {
    color: red;
    } */

    /* 5. 选择属性值包含xx */
    a[class*="font"] {
    color: red;
    }

    input[type="text"],
    input[type="password"] {
    /* 去掉轮廓线 */
    outline: none;
    }
</style>
</head>

<body>
<a href="#">修改文字颜色</a> <br>
<a href="#" class="font">修改文字颜色</a> <br>
<a href="#" class="font14">修改文字颜色</a> <br>
<a href="#" class="font16">修改文字颜色</a> <br>
<a href="#" class="red">修改文字颜色</a> <br>

<input type="text">
<input type="password">
<input type="checkbox">
<input type="radio">
</body>

</html>
```

---

## 9. 表格合并

```html
<style>
    table {
        border-collapse: collapse;
    }

</style>
```

---

## 10. CSS 特性：优先级

1. `!important`
2. 内联样式
3. id 选择器
4. 类 / 属性 / 伪类
5. 标签（类型）/ 伪元素
6. 通配符 / 继承

---

## 11. 实践过程中出现的问题

**登高**：父盒子宽度小于了子盒子，设置图片和视频的宽度和盒子的宽度一样。
