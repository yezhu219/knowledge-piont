// 回复消息模板
const tpl = `
<xml>
  <ToUserName><![CDATA[${message.FromUserName}]]></ToUserName>
  <FromUserName><![CDATA[${message.ToUserName}]]></FromUserName>
  <CreateTime>${parseInt(new Date().getTime()/1000+'')}</CreateTime>
  <MsgType><![CDATA[text]]></MsgType>
  <Content><![CDATA[${message.Content}-----from:wechat]]></Content>
</xml>`