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
      console.log('index.js--getAccessToken')
      const res = await Token.getAccessToken()
      return res
    },
    saveAccessToken: async (data) => {
      console.log('index.js---saveAccessToken')
      const res = await Token.saveAccessToken(data)
  
      return res
    },
  }
}


exports.test = async () => {
  console.log('test start--')
  const client = new Wechat(wechatConfig.wechat)
  const data = await client.fentchAccessToken()
  console.log('index.js---data in db', data)
  return data
}
// ;
// (async () => {})()