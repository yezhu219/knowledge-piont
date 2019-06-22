#  node笔记

##  1.module.exports 与 exports 区别

module.exports 只能导出一次，多次导出最后一次生效，exports可以导出多次

exports指向modul.exports，不能直接赋值，会导致指向改变

## 2. nextTick   setImmediate    setinterval  执行时机

setImmediate  简单理解就是同步任务执行完成后执行，在下次任务队列队首执行

setInterval 定时器任务在nextTick 与setImmediate中间执行

nextTick 当前任务队列末尾插入任务

