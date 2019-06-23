const req = require('request-promise')
const baseurl = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&'

module.exports = class wechat {
  constructor(option) {
    this.option = Object.assign({}, option)
    this.appID = option.appID
    this.appsecret = option.appsecret

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
  async fentchAccessToken() {
    let data
    if (this.getAccessToken) {
      data = await this.getAccessToken()
    }
    if (!this.checkToken(data)) {
      this.updataAccessToken()
    }
    return data
  }
  async updataAccessToken() {
    const uri = baseurl + `appid=${this.appID}&secret=${this.appsecret}`
    const data = await this.request({
      uri
    })
    const now = new Date().getTime()
    const expiresIn = now + (data.expires_in - 60) * 1000
    data.expires_in = expiresIn
    console.log(data)
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