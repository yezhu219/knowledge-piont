# map 与filter区别

> map 与filter都可以对数组进行遍历，并且都会返回一个数组  
> callback(value,index,array) 回调函数都有三个参数

```js 
    let arr = [1, 2, 3, 4, 5, 5, 6, 7]
    let arr1 = arr.map(item => item > 1) 
    let arr2 = arr.filter(item => item > 1)
    console.log(arr1) // [false, true, true, true, true, true, true, true]
    console.log(arr2) // [2, 3, 4, 5, 5, 6, 7]
```
可以看出：  
1. map 对数组每一项进行遍历，并且执行回调函数，返回每一项执行的结果组成的新数组
2. filter 对数组进行遍历，执行回调函数并返回满足callback条件的数组项组成的新数组
