//  中间件
const sha1 = require('sha1')
const rawBody = require('raw-body')
const utils = require('./utils')
module.exports = (config) => {
  return async (ctx) => {
    const {
      signature,
      timestamp,
      nonce,
      echostr
    } = ctx.query
    const token = config.Token
    let str = [token, timestamp, nonce].sort().join('')

    const sha = sha1(str)
    if (ctx.method == 'GET') {
      if (sha == signature) {
        ctx.body = echostr
      } else {
        ctx.body = 'wrong'
      }
    } else if (ctx.method == 'POST') {
      if (sha !== signature) {
        return ctx.body = 'wrong'
      }
      const data = await rawBody(ctx.req, {
        limit: '2mb',
        length: ctx.length,
        encoding: ctx.charset
      })
      console.log('data', data)
      const content = await utils.parseXML(data)
      console.log('content')
      console.log(content)
      const message = utils.formate(content.xml)
      console.log('message')
      console.log(message)
      ctx.status = 200
      ctx.type = 'application/xml'
      ctx.body = `<xml>
        <ToUserName><![CDATA[${message.FromUserName}]]></ToUserName>
        <FromUserName><![CDATA[${message.ToUserName}]]></FromUserName>
        <CreateTime>${parseInt(new Date().getTime()/1000+'')}</CreateTime>
        <MsgType><![CDATA[text]]></MsgType>
        <Content><![CDATA[${message.Content}-----from:wechat]]></Content>
      </xml>`
    }
  }
}