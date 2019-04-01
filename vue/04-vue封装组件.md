# 封装组件

把组件封装为UI组件，使用Vue.use()进行挂载
## 使用install方法
``` js

  import wButton from './button.vue'
wButton.install = function (Vue) {
  Vue.component(wButton.name, wButton)
}

export default wButton



//使用

import wButton from './index.js'
Vue.use(wButton)
```
通过这种方式把组件注册为全局组件，但是不能实现按需加载，所有组件都会被全部引用