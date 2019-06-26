const baseUrl = ' https://api.weixin.qq.com/cgi-bin/qrcode/'
const mpBaseUrl = 'https://mp.weixin.qq.com/cgi-bin/'
const req = require('request-promise')

exports.getTickt = async (token) => {
  let data = {
    "expire_seconds": 604800,
    "action_name": "QR_SCENE",
    "action_info": {
      "scene": {
        "scene_id": 101
      }
    }
  }

  let url = baseUrl+ `create?access_token=${token}`
  const res = await req({method:'POST',url:url,body:data,json:true})
  return res 
}

exports.showQr =  (ticket) => {
  
  // let url = `${mpBaseUrl}showqrcode?ticket=${UrlEncode(ticket)}`
  let url = mpBaseUrl + 'showqrcode?ticket=' + encodeURI(ticket)
  return url
}
