# trim方法实现

1.  使用replace()正则方法
```js
  var str = '  aaa  bbba      '
  var st = str.replace(/^\s*|\s*$/g, '')
  console.log(st.length, str.length, st)
```


2. 使用while循环实现
```js
var str = '  aaa  bbba      '
function myTrim(str) {
      while (str.indexOf(' ') === 0) {
        str = str.substr(1, str.length)
      }
      while (str.lastIndexOf(' ') === str.length - 1) {
        str = str.substr(0, str.length - 2)
      }
      return str
    }
    var str = myTrim(str)
    console.log(str, str.length)
```