//  中间件
const sha1 = require('sha1')
const rawBody = require('raw-body')
const utils = require('./utils')
module.exports = (config, reply) => {
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
    //验证消息是否来自微信服务器
    //get请求是验证消息，post请求是微信服务器推送的消息

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
      // rawBody解析xml，把xml解析成未对象
      const data = await rawBody(ctx.req, {
        limit: '2mb',
        length: ctx.length,
        encoding: ctx.charset
      })
      const content = await utils.parseXML(data)
      const message = utils.formate(content.xml)
      ctx.wchat = message
      await reply.apply(ctx, [ctx, next])
      const xml = utils.tpl(ctx.body, message)
      ctx.status = 200
      ctx.type = 'application/xml'
      ctx.body = xml
    }
  }
}