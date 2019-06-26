const Wechat = require('./getToken')
const {
  wechat
} = require('./config')

const mongoose = require('mongoose')

const Token = mongoose.model('Token')

const wechatConfig = {
  wechat: {
    appID: wechat.appID,
    Token: wechat.Token,
    appsecret: wechat.appsecret,
    getAccessToken: async () => {
      const res = await Token.getAccessToken()
      return res
    },
    saveAccessToken: async (data) => {
      const res = await Token.saveAccessToken(data)
      return res
    },
  }
}


exports.test = async () => {

  const client = new Wechat(wechatConfig.wechat)
  const data = await client.fentchAccessToken()
  console.log('data in db', data)
  return data
}
// ;
// (async () => {})()