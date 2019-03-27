# `class`绑定

## 1. 对象语法
- `class`类存在时可以使用 `:class`继续绑定类
- 对象形式时键名需要加引号
- 如果对象形式的类名比较多，可以是定义一个对象，通过计算属性进行计算
 ```js
 <template>
  <div>
    <p class="one" :class="{'big':istwo,'three':isthree }">测试文字</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      istwo: true,
      isthree: true
    }
  }
}
</script>

<style scoped>
.one {
  color: brown;
}
.big {
  width: 100px;
  height: 30px;
}
.three {
  background-color: #ccc;
}
.p-hot {
  color: hotpink;
  font-size: 20px;
}
</style>
```


## 数组语法
- 数组语法中也可以使用对象语法
- 可以使用三元表达式
```js
<template>
  <div>
    <p class="one" :class="{'big':istwo,'three':isthree }">测试文字</p>
    <h2 :class="['big','p-hot', {'three':isthree }]">测试h2</h2>
    <p :class="[circle?'p-hot-'+circle:'']">ceshi</p>
    <div :class="obj">box</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      istwo: true,
      isthree: true,
      circle: 'circle'
    }
  },
  computed: {
    obj() {
      return {
        big: this.istwo,
        three: this.isthree
      }
    }
  }
}
</script>

<style scoped>
.one {
  color: brown;
}
.big {
  width: 100px;
  height: 30px;
}
.three {
  background-color: #ccc;
}
.p-hot {
  color: hotpink;
  font-size: 20px;
}
.p-hot-circle {
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
}
</style>

```