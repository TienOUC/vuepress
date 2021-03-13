(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{639:function(e,a,s){"use strict";s.r(a);var t=s(4),o=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"_1-cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-cookie"}},[e._v("#")]),e._v(" 1. Cookie")]),e._v(" "),s("p",[e._v("HTTP Cookie（也叫 Web Cookie 或者浏览器 Cookie）是服务器发送到用户浏览器并保存在本地的一小块数据，他会在浏览器下次向同一服务器再发起请求时被携发送到服务器上。通常，它用于告知服务器两个请求是否来自同浏览器，如保护用户的登录状态。Cookie 使基于无状态的HTTP协议记录稳定的状态信息成为可能。")]),e._v(" "),s("p",[e._v("Cookie 曾被用户客户端数据存储，但因为额外的性能开销和随着 localStorage 、 sessionStorage、"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API",target:"_blank",rel:"noopener noreferrer"}},[e._v("IndexedDB"),s("OutboundLink")],1),e._v(" 等技术的出现而逐渐被淘汰。")]),e._v(" "),s("h3",{attrs:{id:"_1-1-特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-特点"}},[e._v("#")]),e._v(" 1.1 特点")]),e._v(" "),s("ul",[s("li",[e._v("本身用于浏览器和server通讯，被借用来做本地存储")]),e._v(" "),s("li",[e._v("最大存储数据上限 4kb")])]),e._v(" "),s("h3",{attrs:{id:"_1-2-创建和生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-创建和生命周期"}},[e._v("#")]),e._v(" 1.2 创建和生命周期")]),e._v(" "),s("ul",[s("li",[e._v("创建\n通过 "),s("code",[e._v("document.cookie")]),e._v(" 属性可创建新的 Cookie，也可通过该属性访问非 HttpOnly 标记的 Cookie。")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('document.cookie = "yummy_cookie=choco"; \ndocument.cookie = "tasty_cookie=strawberry"; \nconsole.log(document.cookie); \n//  "yummy_cookie=choco; tasty_cookie=strawberry"\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("服务器使用 "),s("code",[e._v("Set-Cookie")]),e._v(" 响应头部向用户代理（一般是浏览器）发送 Cookie 信息。例如：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Set-Cookie: <cookie名>=<cookie值>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("服务器通过该头部告知客户端保存 Cookie 信息")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("HTTP/1.0 200 OK\nContent-type: text/html\nSet-Cookie: yummy_cookie=choco\nSet-Cookie: tasty_cookie=strawberry\n\n[页面内容]\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("p",[e._v("现在，对该服务器发起的每一次新请求，浏览器都会将之前保存的Cookie信息通过 Cookie 请求头部再发送给服务器。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("GET /sample_page.html HTTP/1.1\nHost: www.example.org\nCookie: yummy_cookie=choco; tasty_cookie=strawberry\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("ul",[s("li",[e._v("生命周期")])]),e._v(" "),s("ol",[s("li",[s("p",[e._v("会话期 Cookie ：仅在会话期内有效。会话期Cookie不需要指定过期时间（Expires）或者有效期（Max-Age）。"),s("em",[s("strong",[e._v("需要注意的是，有些浏览器提供了会话恢复功能，这种情况下即使关闭了浏览器，会话期Cookie 也会被保留下来，这会导致 Cookie 的生命周期无限期延长。")])])])]),e._v(" "),s("li",[s("p",[e._v("持久性 Cookie ：其生命周期取决于过期时间（Expires）或有效期（Max-Age）指定的一段时间。例如  "),s("code",[e._v("Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;")])])])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"},[e._v("注意：")]),s("p",[e._v("当Cookie的过期时间被设定时，设定的日期和时间只与客户端相关，而不是服务端。")])]),s("h3",{attrs:{id:"_1-3-使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-使用场景"}},[e._v("#")]),e._v(" 1.3 使用场景")]),e._v(" "),s("ul",[s("li",[e._v("会话状态管理（如用户登录状态、购物车、游戏分数或其他需要记录的信息）")]),e._v(" "),s("li",[e._v("个性化设置（用户自定义设置，主题等）")]),e._v(" "),s("li",[e._v("浏览器行为跟踪（如广告推荐等）")])]),e._v(" "),s("h2",{attrs:{id:"_2-localstorage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-localstorage"}},[e._v("#")]),e._v(" 2. localStorage")]),e._v(" "),s("p",[e._v("localStorage 可以作为浏览器的本地缓存方案，用来提升网页首屏渲染速度（根据第一次请求返回时，将一些不变的信息直接存储在本地）")]),e._v(" "),s("h3",{attrs:{id:"_2-1-特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-特点"}},[e._v("#")]),e._v(" 2.1 特点")]),e._v(" "),s("ul",[s("li",[e._v("保存的数据永久储存（除非主动删除），下一次访问该网站的时候，网页可以直接读取之前保存的数据")]),e._v(" "),s("li",[e._v("html5专门为存储设计，最大可存储 5MB")]),e._v(" "),s("li",[e._v("仅在客户端使用，不和服务端进行通信")])]),e._v(" "),s("h3",{attrs:{id:"_2-2-存取数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-存取数据"}},[e._v("#")]),e._v(" 2.2 存取数据")]),e._v(" "),s("p",[e._v("其保存的数据是以键值对的形式存在的，且所有数据都是以文本格式保存的。")]),e._v(" "),s("ul",[s("li",[e._v("存入 "),s("code",[e._v("localStorage.setItem(key, value)")])]),e._v(" "),s("li",[e._v("读取 "),s("code",[e._v("localStorage.getItem(key)")])]),e._v(" "),s("li",[e._v("删除 "),s("code",[e._v("localStorage.removeItem(key)")]),e._v("， 删除所有保存的数据 "),s("code",[e._v("localStorage.clear()")])])]),e._v(" "),s("h3",{attrs:{id:"_2-3-使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-使用场景"}},[e._v("#")]),e._v(" 2.3 使用场景")]),e._v(" "),s("p",[e._v("localStorage在存储方面几乎没有特别的限制，理论上，一些 Cookie 无法胜任的、存储简单键值对的任务都可以交给 localStorage 来做。 比如考虑到其保存的数据是永久存储，因此可以用来存储一些内容稳定的资源，比如图片内容丰富的网站可以用其来存储 Base64 格式的图片字符串。")]),e._v(" "),s("h2",{attrs:{id:"_3-sessionstorage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-sessionstorage"}},[e._v("#")]),e._v(" 3. sessionStorage")]),e._v(" "),s("p",[e._v("数据只存在于当前会话，会话结束（浏览器或者标签页关闭）则清空，不同窗口打开的同源网站页面，sessionStorage 的内容无法共享，而 localStorage 和 Cookie 则可以共享。")]),e._v(" "),s("h3",{attrs:{id:"_3-1-特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-特点"}},[e._v("#")]),e._v(" 3.1 特点")]),e._v(" "),s("ul",[s("li",[e._v("会话级别的浏览器存储")]),e._v(" "),s("li",[e._v("存储大小限制为 5MB")]),e._v(" "),s("li",[e._v("仅在客户端使用，不与服务端进行通信")])]),e._v(" "),s("h3",{attrs:{id:"_3-2-存取数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-存取数据"}},[e._v("#")]),e._v(" 3.2 存取数据")]),e._v(" "),s("ul",[s("li",[e._v("存入 "),s("code",[e._v("sessionStorage.setItem(key, value)")])]),e._v(" "),s("li",[e._v("读取 "),s("code",[e._v("sessionStorage.getItem(key)")])]),e._v(" "),s("li",[e._v("删除 "),s("code",[e._v("sessionStorage.removeItem(key)")]),e._v("， 删除所有保存的数据 "),s("code",[e._v("sessionStorage.clear()")])])]),e._v(" "),s("h3",{attrs:{id:"_3-3-使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-使用场景"}},[e._v("#")]),e._v(" 3.3 使用场景")]),e._v(" "),s("p",[e._v("sessionStorage 更适合用来存储生命周期和它同步的会话级别的信息，这些信息只适用于当前的会话。当你开启新的会话时，它也需要相应的更新或释放。比如微博就使用 sessionStorage 存储单次会话的浏览足迹，它会存一个 lasturl 键去对应你上一次访问的 url 地址。当你切换 url 的时候，这个键值就会更新；当你关闭页面的时候，这个键就会被释放。另外，还可对表单信息进行缓存，比如刷新时表单信息不会丢失。")])])}),[],!1,null,null,null);a.default=o.exports}}]);