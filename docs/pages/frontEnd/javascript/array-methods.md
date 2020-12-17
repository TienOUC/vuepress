---
autoGroup-4: 其他
title: 常用数组方法及分类
date: 2019-10-19
categories:
- FrontEnd
tags:
- JavaScript
---


## 1. 数组方法分类

|方法|作用|返回值|  是否改变原数组  |
|:---|:---|:---|:---|
|push(...items)     |  从数组尾部添加元素   | 添加后的数组长度（length）  |  ✔️  |
|pop                |  从数组尾部弹出元素   | 弹出的尾部元素             |  ✔️  |
|shift              |  从数组头部弹出元素  | 弹出的头部元素             |  ✔️  |
|unshift(...items)  |  从数组头部添加元素   | 添加后的数组长度（length）  |  ✔️  |
|splice(start,deleteCount,...items)    | 从start开始删除deleteCount个元素，并在当前位置插入items  | 被删除的元素组成的数组  | ✔️  |
|fill(val, start, end)   |  从start到end填充val | 返回[start,end)位置被替换填充了val的原数组    |  ✔️ |
|copyWithin(target, start, end)   | 将[start, end)位置的元素复制覆盖到target起始的位置，不会改变数组长度（多余的复制会被截断）  | 原数组target位置起始被覆盖后返回   |  ✔️  |
|sort(func)       | 不传入func时根据同toString()后的Unicode排序，传入func，根据函数处理排序 | 原数组排序后返回  |  ✔️   |
|reverse()        | 反转数组    | 原数组反转后返回 | ✔️  |
|slice(start, end)  | 截取索引值[start, end)对应的元素   | 返回截取元素组成的数组              |   ❌   |
|concat(...items)   | 数组与元素（或数组）拼接    | 返回拼接后的新数组                         |   ❌   |
|indexOf(item, start)   |从start位置查找item    | 找到时返回元素对应的索引值，否则返回-1        |   ❌   |
|lastIndexOf(item, start)   | 从start开始查找item  | 返回 item 在数组中最后出现的位置（索引）   |   ❌   |
|includes(item)   | 查找数组中是否有item  | 有则返回true，无则返回false                       |   ❌   |
|find(func) 🚩    | 通过函数func过滤元素  | 返回符合条件的第一个值                             |   ❌   |
|filter(func) 🚩   | 通过函数func过滤元素  | 返回符合条件的所有值                               |   ❌   |
|findIndex(func)  | 通过函数func过滤元素  | 返回符合条件的第一个元素的索引值                     |   ❌   |
|map(func)        | 每个元素调用func函数  | 返回新数组（各元素调用了func）                      |   ❌   |
|join()/split()  🚩  | 数组转字符串/字符串转数组 | 返回传入符号连接各数组元素组成的字符串   | ❌  |
|reduce(func, init)   | func 分别接收 prev, cur, index, arr四个参数，分别是上次跳用返回值或者初始值，当前值，索引，数组，init为第一次调用时的初始值 。注意：reduce对于空数组不会执行func函数  | 返回func的计算结果   | ❌  |
|forEach(func)   🚩  | 每个元素调用func  （该循环不可中断）    | 无返回  |   |
|some(func)       | 每个元素调用func      | 若是一个满足就返回 true，否则返回false    |   |
|every(func)      | 每个元素调用func      | 若是全部满足就返回 true，否则返回false    |   |

