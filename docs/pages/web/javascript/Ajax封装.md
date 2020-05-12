---
autoGroup-4: 其他
title: "Ajax封装"
date: 2020-03-02
categories:
- FrontEnd
tags:
- JavaScript
---

## 1. Ajax 封装

```js
function ajax(options) {
  //默认值
  var defaults = {
    type: "get",
    url: "",
    data: {},
    header: {
      "Context-Type": "application/x-www-form-urlencoded",
    },
    success: function() {},
    error: function() {},
  };

  //使用options对象中的属性覆盖defaults对象中的属性（Object.assign会改变原对象）
  Object.assign(defaults, options);

  var xhr = new XMLHttpRequest();
  var params = ""; //请求参数变量

  //循环用户传递进来的对象格式参数，并将其转换成字符串格式
  for (var attr in defaults.data) {
    params += attr + "=" + defaults.data[attr] + "&";
  }
  params = params.sunstr(0, params.length - 1); //截掉最后面的 &

  //判断请求类型
  if (defaults.type == "get") {
    defaults.url = defaults.url + "?" + params;
  }
  xhr.open(defaults.type, defaults.url);

  if (defaults.type == "post") {
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); //post请求必须设置RequestHeader
    xhr.send(params);
  } else {
    xhr.send();
  }

  xhr.onload = function() {
    var contentType = xhr.getResponseHeader("Content-Type");
    var responseText = xhr.responseText;

    //若响应类型中包含application/json，则将json字符串转换为json对象
    if (contentType.includes("application/json")) {
      responseText = JSON.parse(responseText);
    }
    if (xhr.status == 200) {
      //若使用xhr.onreadystatechange()时则要判断  xhr.readyState == 4 && xhr.status == 200
      return defaults.success(responseText, xhr);
    } else {
      defaults.error(responseText, xhr);
    }
  };
}
```

## 2. 请求举例

```js
ajax({
  type: "get",
  url: "http://localhost:3000/get",
  data: {
    name: "name",
    age: 20,
  },
  header: {
    "Context-Type": "applicatoion/json",
  },
  success: function(data, xhr) {},
  error: function(error, xhr) {},
});
```
