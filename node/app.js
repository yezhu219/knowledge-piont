const Koa = require('koa')
const wechat = require('./wechat-lib/middleware')
const config = require('./config/config')

const app = new Koa()


// 加载中间件
app.use(wechat(config.wechat))

app.listen(3000, () => {
  console.log('running....')
});