# getBoundingClientRect()

- Element.getBoundingClientRect()方法返回元素的大小及其相对于视口的位置

- 返回值为一个对象DOMRect，包含 left,right,top,bottom,width,height,x,y
- left,top 为元素左上角相对于视口的位置
- right,bottom为元素右下角相对于视口的位置
- width,height为元素宽高
```js
let box = document.querySelector(".box")
let position = box.getBoundingClientRect()
console.log(position)//{bottom: 400
// height: 300
// left: 200
// right: 400
// top: 100
// width: 200
// x: 200
// y: 100}
```