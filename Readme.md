javascript:;与javascript:void(0)使用介绍\
https://www.w3cschool.cn/xqw2e7/by4m12xr.html\
https://www.w3cschool.cn/javascript/js-function-definition.html\
绝对不要在文档加载完成之后使用 document.write()。这会覆盖该文档。\
CDN (Content Delivery Network) 解决了这个问题。CDN 是包含可分享代码库的服务器网络。

Google 为一系列 JavaScript 库提供了免费的 CDN，包括：

jQuery
Prototype
MooTools
Dojo
Yahoo! YUI\
由于 Google 在中国经常被GFW（防火长城，英文名称Great Firewall of China，简写为Great Firewall，缩写GFW）屏蔽，
造成访问不稳定，所以建议使用百度静态资源公共库:http://cdn.code.baidu.com/。

如需在您的网页中使用 JavaScript 框架库，只需在 
"script" 标签中引用该库即可：
 src="http://apps.bdimg.com/libs/jquery/2.1.1/jquery.min.js"

