# vue 生命周期详解

## new Vue
- 该阶段初始化事件及生命周期函数


## beforeCreate

- vue实例上绑定的`data`和`methods`还没有初始化，数据和方法并不会获取到

## created

- vue实例中data及methods已经初始化，可以获取到
- 如果要操作数据及方法，最早在这个生命周期中
- 一般在此周期发送ajax请求

## beforeMount 之前的逻辑判断

- 判断是否存在`el`配置
  + 如果没有`el`则停止生命周期，直到vm.$mount(el)被触发，然后继续后面的生命周期
  + 如果存在`el`,判断是否存在`template`模板
   - 如果没有`template`模板，则把外部的el绑定的元素作为模板编译
   - 如果存在`template`模板，则把`template`作为使用`render`函数进行编译


## beforeMount 

- 模板已经在内存中编译完成，还未挂载到页面上，此时页面内容还未更新
- `dom`结构已经生成，数据还未渲染到结构中, <div id="app"> {{message}}</div>

## mounted

- 模板内容已经挂载到页面上，替换掉`el`绑定的元素内容
- 此时可以获取到`dom`元素，获取dom最早在这个阶段

## beforeUpdate

- 当数据被更改时，触发此生命周期，页面还没有被更新，数据已经更新
- 在内存中生成虚拟`dom`

## updated
- 页面已经更新了,数据及页面都是最新的


## beforeDestroy
 
 - 实例销毁前，这个时候实例还是完全可以用的


## destroyed

 - 此阶段销毁实例，销毁绑定的数据，方法，还有事件

