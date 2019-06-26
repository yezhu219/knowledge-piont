const Koa = require('koa')
const wechat = require('./wechat-lib/middleware')
const config = require('./config/config')
const {
  initSchema,
  connect
} = require('./database/init')
const { getTickt,showQr} = require('./wechat/qr')

;
(async () => {
  await connect(config.db)
  initSchema()

  const { test } = require('./config/index')
  // test()
  let token = await test()
  console.log('tokenIndex', token)
  //获取ticket
  let ticket = await getTickt(token.token)
  console.log(ticket)
  // 通过ticket换取二维码
  let qrUrl = showQr(ticket.ticket)
  console.log(qrUrl)
  const app = new Koa()
  // 加载中间件
  app.use(wechat(config.wechat))
  app.listen(3000, () => {
    console.log('running....')
  });
})()