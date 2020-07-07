# personal-nav-demo

### 预览：
[个人定制导航](https://lynn-zuo.github.io/personal-nav-demo/index.html)

### ABOUT
一个单纯使用html+css(flex布局)+js实现的定制导航网页demo。

### 目录结构：
* [搜索栏百度/谷歌查询(已完成)](#1)
* [JS生成按键(已完成)](#2)
* [输入按键打开目标网址(已完成)](#3)
* [根据按键对应目标网址显示图标(已完成)](#4)
* [添加点击事件修改对应目标网址(已完成)](#5)
* [添加点击事件实现目标网址打开(已完成)](#6)
* [页脚栏快速访问站点推荐(初步完成)](#7)

<h3 id="1">搜索栏百度/谷歌查询(已完成)</h3>

**flex布局 + 表单事件**
添加logo和查询表单，添加两个点击事件，打开对应的搜索引擎的内容搜索网页。


<h3 id="2">JS生成按键(已完成)</h3>

**JS生成多个div、kbd及button**
通过JS快速生成四行div标签，每一行生成多个kbd按键，当鼠标移入按键时，该按键上生成两个button，分别对应变更和删除hash功能。


<h3 id="3">输入按键打开目标网址(已完成)</h3>

window.open('url', '_blank')
Tip:输入文本框必须在中文状态下不会触发该事件发生，此处可进一步优化。


<h3 id="4">根据按键对应目标网址显示图标(已完成)</h3>

建立目标网址与图标之间的hash对，检测网址是否存在（分情况：本地存储和修改后），从而决定是否显示图标。


<h3 id="5">添加点击事件修改对应目标网址(已完成)</h3>

buttonXE.onclick()
promp('输入新的网址')

TIP：同时阻止事件冒泡，避免点击按钮后键盘按键点击事件的发生。
修改目标网址后，页面自动刷新一次，保证图标立即成功显示。


<h3 id="6">添加按键点击事件实现目标网址打开(已完成)</h3>

kbd.onclik()，实现代码基本同输入按键打开目标网址。


<h3 id="7">页脚栏快速访问站点推荐(初步完成)</h3>

主要是样式布局问题。


