const Wechat = require('./getToken')
const wechatconfig = require('./config');
(async () => {
  const client = new Wechat(wechatconfig.wechat)
})()