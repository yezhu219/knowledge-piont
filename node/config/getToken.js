const req = require('request-promise')
const baseurl = 'https://api.weixin.qq.com/cgi-bin/'


const api = {
  accessToken: baseurl + `token?grant_type=client_credential&appid=${this.appID}&secret=${this.appsecret}`
}

module.exports = class wechat {
  constructor(option) {
    this.option = Object.assign({}, option)
    this.appID = option.appID
    this.appsecret = option.appsecret
    this.getAccessToken = option.getAccessToken
    this.saveAccessToken = option.saveAccessToken

    this.fentchAccessToken()
  }
  async request(opt) {
    opt = Object.assign({}, opt, {
      json: true
    })
    try {
      // request 库请求参数uri必须写url或者uri，否则报错
      const res = await req(opt)
      return res
    } catch (err) {
      console.log(err)
    }
  }
  //先检查数据库中的token,检查token是否存在或者过期
  async fentchAccessToken() {
    //获取数据库中的token
    let data = await this.getAccessToken()
    if (!this.checkToken(data)) {
      data = await this.updataAccessToken()
    }
    //将token保存入数据库

    await this.saveAccessToken(data)
    return data
  }
  async updataAccessToken() {
    const uri = baseurl + `token?grant_type=client_credential&appid=${this.appID}&secret=${this.appsecret}`
    const data = await this.request({
      uri
    })
    const now = new Date().getTime()
    const expiresIn = now + (data.expires_in - 60) * 1000
    data.expires_in = expiresIn
    return data
  }
  checkToken(data) {
    if (!data || !data.expires_in) {
      return false
    }
    const nowTime = new Date().getTime()
    if (nowTime < data.expires_in) {
      return true
    } else {
      return false
    }
  }
}