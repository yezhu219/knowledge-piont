# activeElement

- 该属性返回当前活动焦点的元素
```js
 var btn = document.querySelector('button')
 btn.focus()
 var  active = document.activeElement
 console.log(active) // <button>点我</button>
 console.log(active.tagName)// "BUTTON" 大写的字符串
``` 