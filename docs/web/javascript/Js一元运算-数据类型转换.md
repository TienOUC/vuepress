---
autoGroup-4: 其他
title: "Js一元运算"
---

Js 一元运算---数据类型转换
今天碰到个下面这段代码中 `=+` 一时半会儿不得其解，上 [stack overflow](https://stackoverflow.com/questions/17106681/parseint-vs-unary-plus-when-to-use-which) 查了一下才知道这个是日常比较少见的数据类型转换用法。

```js
function(dx, dy){
            rect.attr({x: orig_x+dx,y: orig_y+dy, fill:"orange"});
        },function(x,y){
            orig_x=+rect.attr("x");
            orig_y=+rect.attr("y");
            rect.attr({fill:"orange"});
        },function(){
            rect.attr({fill:"blue"});
        }
```

这称之为正号(+)或是一元正号(unary plus)，而不是加号(+)，因为参与的运算子只会有一个，所以称为一元。

简单的来说，它是一种把其他类型的资料转为数字类型的语法，可以不限于字符串。建议只用在单纯的数字字符串上。

这种语法是从使用社群上发展出来的，教科书上很少会提及。这种语法有很多种，下面有张图里有 6 种是我从 [这篇问答](https://stackoverflow.com/questions/17106681/parseint-vs-unary-plus-when-to-use-which) 找来的，它是用 [代码产生](http://jsfiddle.net/EpUBN/8/)

![](https://image-static.segmentfault.com/178/037/1780371411-5824716d2aa3b)

看图中就大概知道，一元正号(+)的行为类似于 `parseFloat`，而不是`parseInt`，相似于 `parseInt` 的是双波折号(~~)的语法。

一元正号(+)可以把像"123.456"的字符串，转换为数字类型的 123.456。会使用一元正号(+)，而不用 `parseFloat` 其实是有原因的，大致上简单说明一下:

## 1. 快

这种语法会被使用的主要原因，是经过测试过在某些浏览器与情况下它的效率超快。

## 2. 语法简单

打个正号(+)比打 `parseFloat` 或 `parseInt` 够简单了。

## 3. 某些特殊转置情况下使用

例如以下几个，有些开发者会用这些转置的结果，但建议你除非很确定要什么结果再使用。

> a.空字符串/null/false: +''得出 0 数字，但用 parseFloat 或 parseInt 会得出 NaN。  
> b.科学记号: +'2e3'得 2000，与 parseFloat 一致，parseInt 会得出 2。  
> c.16 进位: +'0xf'得 15，parseFloat 得 0，parseInt 会得出 15。

其他的语法还有很多，例如 1\*'123.456'或-(-'123.456')之类的, 总之这种就很少见, 也很少人在用了。
