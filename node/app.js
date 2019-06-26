const Koa = require('koa')
const wechat = require('./wechat-lib/middleware')
const config = require('./config/config')
const {
  initSchema,
  connect
} = require('./database/init')
const { getTickt} = require('./wechat/qr')

;
(async () => {
  await connect(config.db)
  initSchema()

  const {
    test
  } = require('./config/index')
  // test()
  let token = test()
  console.log('tokenIndex', token)
  let ticket = await getTickt(token.token)
  console.log(ticket)
  const app = new Koa()
  // 加载中间件
  app.use(wechat(config.wechat))
  app.listen(3000, () => {
    console.log('running....')
  });
})()