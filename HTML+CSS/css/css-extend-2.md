# CSS 布局学习笔记

> 重点看代码里面的参数

## 目录

1. [布局概述](#1-布局概述)
2. [正常布局](#2-正常布局)
3. [display 转换](#3-display-转换)
4. [Flexbox 弹性布局](#4-flexbox-弹性布局)
5. [定位布局](#5-定位布局)
6. [Grid 网格布局](#6-grid-网格布局)
7. [多列布局](#7-多列布局)
8. [鼠标样式](#8-鼠标样式)
9. [CSS 书写顺序](#9-css-书写顺序)

---

## 1. 布局概述

css 布局：正常布局、模式转换布局（display）、Flexbox 弹性布局、Grid、多列布局 column、定位布局。

每种技术都有它们的用途，各有优缺点，相互辅助。

- 简单布局：优先使用 Flexbox（一维）或 Grid（二维）
- 复杂响应式布局：使用 Grid + 媒体查询
- 文本内容分栏：多列布局（`column-count`）
- 兼容旧浏览器：浮动布局或 Flexbox 的降级方案

css grid 逐渐成为主流，支持更复杂的布局。

## 2. 正常布局

`normal`：块级元素（block）、行内元素（inline），文档流方向从上到下、从左到右。

## 3. display 转换

```css
display: inline-block; /* 转换为行内块元素 */
display: inline;
display: block;
```

适用场景：链接布局。

```css
li a {
  display: block;
  width: 100px;
  height: 100px;
}
```

```html
<ul>
  <li><a href="">1</a></li>
  <li><a href="">2</a></li>
  <li><a href="">3</a></li>
</ul>
```

表单布局默认是 `inline-block`。

使用场景：1. 让块级盒子一行显示；2. 让行内盒子具备相同高度。

## 4. Flexbox 弹性布局

核心：1. 父控子；2. 主轴和交叉轴。

**父盒子属性：**

```css
/* 设置为 flex：注意若子元素总宽度超过容器宽度，默认会压缩子元素，所以说开发中会设置子元素的大小 */
display: flex;

/* 定义主轴上的对齐方式 */
justify-content: flex-start | flex-end | center | space-around(-A--B--C-) | space-between(A-B-C) | space-evenly(-A-B-C);

/* 单行时交叉轴对齐 */
align-items: center | flex-start | flex-end | stretch(拉伸填充整个容器高度);

/* 多行时交叉轴对齐 */
align-content: center | flex-start | flex-end | space-around | space-between | stretch;

/* 定义主轴方向 */
flex-direction: row | column;

/* 换行 */
flex-wrap: wrap;

/* 控制子盒子中列与列之间的间距 */
gap: 10px;
```

**子盒子属性：**

```css
/* 这里的 flex 包含了 flex-grow 放大比例、flex-shrink 缩小比例、flex-basis 在主轴方向上的初始大小 */
flex: 1;
```

## 5. 定位布局

核心：相对定位、绝对定位、固定定位、粘性定位。

场景：

1. 固定导航栏。页面滚动时导航栏始终固定在视口顶部。
2. 吸顶效果。元素在滚动到某个位置后固定。
3. 弹出菜单/下拉框。鼠标悬停时显示浮动菜单。
4. 悬浮效果。元素悬浮在其他元素上方。

**相对定位**：相对于自身原来位置移动距离，原位置保留。

```css
position: relative;
/* 设置 top left right bottom 进行偏移 */
```

**绝对定位（子绝父相：搭配相对定位）**：相对于最近的非静态定位的父元素进行定位，父元素为 body 时，相对于视口进行定位。

适用场景：悬浮效果、下拉框。

```css
position: absolute;
/* 设置 top left right bottom 进行偏移 */
```

**固定定位**：相对于视口进行定位。

适用场景：固定导航栏、页面广告。

```css
position: fixed;
/* 设置 top left right bottom 进行偏移 */
```

**粘性定位**：是一种混合定位模式，结合了相对定位和固定定位的特性。

适用场景：吸顶效果、表格表头固定。

粘性定位，元素在某个位置时固定，然后滚动时恢复。

```css
position: sticky;
/* 设置 top left right bottom 进行偏移 */
```

**层叠顺序**：提高层叠顺序，使元素在页面中显示的顺序。

```css
z-index: 1; /* 值越大，层级越高 */
```

## 6. Grid 网格布局

参数：

```css
display: grid;

grid-template-columns: ;
grid-template-rows: ;

justify-content: ; align-content: ;
justify-items: ; align-items: ;

gap: 20px; /* 行列之间 20px */

grid-auto-flow: column; /* 自动填充方向 */

/* 子盒子：跨列、跨行 */
grid-column: 1/3;
grid-row: 1/3;
```

核心代码：

```css
grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); /* fr：表示各占一份 */
```


## 7. 多列布局

适用场景：长文章分栏、图片瀑布流。

```css
column-count: 3;              /* 分栏数量 */
column-gap: 20px;             /* 列间距 */
column-rule: 1px solid red;   /* 列之间的分割线 */
break-inside: avoid-column;   /* 避免列内换行（多列布局默认会自动分割） */
```

## 8. 鼠标样式

```css
cursor: pointer;      /* 指尖向下的小手 */
cursor: text;         /* 文本输入光标 */
cursor: wait;         /* 等待 */
cursor: not-allowed;  /* 禁止 */
cursor: grab;         /* 可抓取 */
cursor: grabbing;     /* 抓取中 */
```

## 9. CSS 书写顺序

布局 → 盒模型 → 视觉 → 交互 → 其他