// const baseUrl = ' https://api.weixin.qq.com/cgi-bin/qrcode/'
// const mpBaseUrl = 'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=TICKET'
// const req = require('request-promise')
// const {
//   test
// } = require('./config/index')

// const getTickt = async (opt) => {
//   let data = {
//     "expire_seconds": 604800,
//     "action_name": "QR_SCENE",
//     "action_info": {
//       "scene": {
//         "scene_id": 101
//       }
//     }
//   }
//   opt = Object.assign({}, data, {
//     json: true
//   })
//   const token = test()
//   console.log(token)
//   let url = `create?access_token=${token.token}`
//   const res = await req({})
//   return res 
// }
// let url = `create?access_token=${token}`
// getTickt()