exports.reply = async (ctx, next) => {
  const message = ctx.message
  if (message.MsgType === 'text') {
    let msg = message.Content
    let reply = 'wechat:' + content + '-----over'
    let str = `wechat is receive msg : ${content}, replay:  `
    if (content == '1') {
      reply = str + '11111'
    } else if (content === '2') {
      reply = str + '22222'
    } else if (content === '3') {
      reply = str + '33333'
    }
  }
  ctx.body = reply
  next()
}