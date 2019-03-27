# `class`绑定

## 1. 对象语法
- `class`类存在时可以使用 `:class`继续绑定类
- 对象形式时键名需要加引号
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
